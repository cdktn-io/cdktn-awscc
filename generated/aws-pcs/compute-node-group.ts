// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcComputeNodeGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the Amazon Machine Image (AMI) that AWS PCS uses to launch instances. If not provided, AWS PCS uses the AMI ID specified in the custom launch template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#ami_id CcComputeNodeGroup#ami_id}
    */
    readonly amiId?: string;
    /**
    * The ID of the cluster of the compute node group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#cluster_id CcComputeNodeGroup#cluster_id}
    */
    readonly clusterId: string;
    /**
    * An Amazon EC2 launch template AWS PCS uses to launch compute nodes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#custom_launch_template CcComputeNodeGroup#custom_launch_template}
    */
    readonly customLaunchTemplate: CcComputeNodeGroup.CustomLaunchTemplateProperty;
    /**
    * The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have pcs:RegisterComputeNodeGroupInstance permissions attached to provision instances correctly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#iam_instance_profile_arn CcComputeNodeGroup#iam_instance_profile_arn}
    */
    readonly iamInstanceProfileArn: string;
    /**
    * A list of EC2 instance configurations that AWS PCS can provision in the compute node group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#instance_configs CcComputeNodeGroup#instance_configs}
    */
    readonly instanceConfigs: CcComputeNodeGroup.InstanceConfigProperty[] | cdktn.IResolvable;
    /**
    * The name that identifies the compute node group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#name CcComputeNodeGroup#name}
    */
    readonly name?: string;
    /**
    * Custom scripts that run at defined points in a compute node's lifecycle.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#node_lifecycle_actions CcComputeNodeGroup#node_lifecycle_actions}
    */
    readonly nodeLifecycleActions?: CcComputeNodeGroup.NodeLifecycleActionsProperty;
    /**
    * Specifies how EC2 instances are purchased on your behalf. AWS PCS supports On-Demand, Spot, Capacity Block, and Interruptible Capacity Reservation instances. For more information, see Instance purchasing options in the Amazon Elastic Compute Cloud User Guide. If you don't provide this option, it defaults to On-Demand.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#purchase_option CcComputeNodeGroup#purchase_option}
    */
    readonly purchaseOption?: string;
    /**
    * Specifies the boundaries of the compute node group auto scaling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#scaling_configuration CcComputeNodeGroup#scaling_configuration}
    */
    readonly scalingConfiguration: CcComputeNodeGroup.ScalingConfigurationProperty;
    /**
    * Additional options related to the Slurm scheduler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#slurm_configuration CcComputeNodeGroup#slurm_configuration}
    */
    readonly slurmConfiguration?: CcComputeNodeGroup.SlurmConfigurationProperty;
    /**
    * Additional configuration when you specify SPOT as the purchase option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#spot_options CcComputeNodeGroup#spot_options}
    */
    readonly spotOptions?: CcComputeNodeGroup.SpotOptionsProperty;
    /**
    * The list of subnet IDs where instances are provisioned by the compute node group. The subnets must be in the same VPC as the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#subnet_ids CcComputeNodeGroup#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#tags CcComputeNodeGroup#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group awscc_pcs_compute_node_group}
*/
export class CcComputeNodeGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_pcs_compute_node_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcComputeNodeGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcComputeNodeGroup to import
    * @param importFromId The id of the existing CcComputeNodeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcComputeNodeGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcs_compute_node_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group awscc_pcs_compute_node_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcComputeNodeGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcComputeNodeGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_pcs_compute_node_group',
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
        this._amiId = config.amiId;
        this._clusterId = config.clusterId;
        this._customLaunchTemplate.internalValue = config.customLaunchTemplate;
        this._iamInstanceProfileArn = config.iamInstanceProfileArn;
        this._instanceConfigs.internalValue = config.instanceConfigs;
        this._name = config.name;
        this._nodeLifecycleActions.internalValue = config.nodeLifecycleActions;
        this._purchaseOption = config.purchaseOption;
        this._scalingConfiguration.internalValue = config.scalingConfiguration;
        this._slurmConfiguration.internalValue = config.slurmConfiguration;
        this._spotOptions.internalValue = config.spotOptions;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ami_id - computed: true, optional: true, required: false
    private _amiId?: string; 
    public get amiId() {
        return this.getStringAttribute('ami_id');
    }
    public set amiId(value: string) {
        this._amiId = value;
    }
    public resetAmiId() {
        this._amiId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amiIdInput() {
        return this._amiId;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // cluster_id - computed: false, optional: false, required: true
    private _clusterId?: string; 
    public get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
        this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
        return this._clusterId;
    }

    // compute_node_group_id - computed: true, optional: false, required: false
    public get computeNodeGroupId() {
        return this.getStringAttribute('compute_node_group_id');
    }

    // custom_launch_template - computed: false, optional: false, required: true
    private _customLaunchTemplate = new CcComputeNodeGroup.CustomLaunchTemplatePropertyOutputReference(this, "custom_launch_template");
    public get customLaunchTemplate() {
        return this._customLaunchTemplate;
    }
    public putCustomLaunchTemplate(value: CcComputeNodeGroup.CustomLaunchTemplateProperty) {
        this._customLaunchTemplate.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get customLaunchTemplateInput() {
        return this._customLaunchTemplate.internalValue;
    }

    // error_info - computed: true, optional: false, required: false
    private _errorInfo = new CcComputeNodeGroup.ErrorInfoPropertyList(this, "error_info", false);
    public get errorInfo() {
        return this._errorInfo;
    }

    // iam_instance_profile_arn - computed: false, optional: false, required: true
    private _iamInstanceProfileArn?: string; 
    public get iamInstanceProfileArn() {
        return this.getStringAttribute('iam_instance_profile_arn');
    }
    public set iamInstanceProfileArn(value: string) {
        this._iamInstanceProfileArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInstanceProfileArnInput() {
        return this._iamInstanceProfileArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_configs - computed: false, optional: false, required: true
    private _instanceConfigs = new CcComputeNodeGroup.InstanceConfigPropertyList(this, "instance_configs", false);
    public get instanceConfigs() {
        return this._instanceConfigs;
    }
    public putInstanceConfigs(value: CcComputeNodeGroup.InstanceConfigProperty[] | cdktn.IResolvable) {
        this._instanceConfigs.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceConfigsInput() {
        return this._instanceConfigs.internalValue;
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

    // node_lifecycle_actions - computed: true, optional: true, required: false
    private _nodeLifecycleActions = new CcComputeNodeGroup.NodeLifecycleActionsPropertyOutputReference(this, "node_lifecycle_actions");
    public get nodeLifecycleActions() {
        return this._nodeLifecycleActions;
    }
    public putNodeLifecycleActions(value: CcComputeNodeGroup.NodeLifecycleActionsProperty) {
        this._nodeLifecycleActions.internalValue = value;
    }
    public resetNodeLifecycleActions() {
        this._nodeLifecycleActions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeLifecycleActionsInput() {
        return this._nodeLifecycleActions.internalValue;
    }

    // purchase_option - computed: true, optional: true, required: false
    private _purchaseOption?: string; 
    public get purchaseOption() {
        return this.getStringAttribute('purchase_option');
    }
    public set purchaseOption(value: string) {
        this._purchaseOption = value;
    }
    public resetPurchaseOption() {
        this._purchaseOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get purchaseOptionInput() {
        return this._purchaseOption;
    }

    // scaling_configuration - computed: false, optional: false, required: true
    private _scalingConfiguration = new CcComputeNodeGroup.ScalingConfigurationPropertyOutputReference(this, "scaling_configuration");
    public get scalingConfiguration() {
        return this._scalingConfiguration;
    }
    public putScalingConfiguration(value: CcComputeNodeGroup.ScalingConfigurationProperty) {
        this._scalingConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingConfigurationInput() {
        return this._scalingConfiguration.internalValue;
    }

    // slurm_configuration - computed: true, optional: true, required: false
    private _slurmConfiguration = new CcComputeNodeGroup.SlurmConfigurationPropertyOutputReference(this, "slurm_configuration");
    public get slurmConfiguration() {
        return this._slurmConfiguration;
    }
    public putSlurmConfiguration(value: CcComputeNodeGroup.SlurmConfigurationProperty) {
        this._slurmConfiguration.internalValue = value;
    }
    public resetSlurmConfiguration() {
        this._slurmConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slurmConfigurationInput() {
        return this._slurmConfiguration.internalValue;
    }

    // spot_options - computed: true, optional: true, required: false
    private _spotOptions = new CcComputeNodeGroup.SpotOptionsPropertyOutputReference(this, "spot_options");
    public get spotOptions() {
        return this._spotOptions;
    }
    public putSpotOptions(value: CcComputeNodeGroup.SpotOptionsProperty) {
        this._spotOptions.internalValue = value;
    }
    public resetSpotOptions() {
        this._spotOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotOptionsInput() {
        return this._spotOptions.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            ami_id: cdktn.stringToTerraform(this._amiId),
            cluster_id: cdktn.stringToTerraform(this._clusterId),
            custom_launch_template: ccComputeNodeGroupCustomLaunchTemplatePropertyToTerraform(this._customLaunchTemplate.internalValue),
            iam_instance_profile_arn: cdktn.stringToTerraform(this._iamInstanceProfileArn),
            instance_configs: cdktn.listMapper(ccComputeNodeGroupInstanceConfigPropertyToTerraform, false)(this._instanceConfigs.internalValue),
            name: cdktn.stringToTerraform(this._name),
            node_lifecycle_actions: ccComputeNodeGroupNodeLifecycleActionsPropertyToTerraform(this._nodeLifecycleActions.internalValue),
            purchase_option: cdktn.stringToTerraform(this._purchaseOption),
            scaling_configuration: ccComputeNodeGroupScalingConfigurationPropertyToTerraform(this._scalingConfiguration.internalValue),
            slurm_configuration: ccComputeNodeGroupSlurmConfigurationPropertyToTerraform(this._slurmConfiguration.internalValue),
            spot_options: ccComputeNodeGroupSpotOptionsPropertyToTerraform(this._spotOptions.internalValue),
            subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ami_id: {
                value: cdktn.stringToHclTerraform(this._amiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_id: {
                value: cdktn.stringToHclTerraform(this._clusterId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_launch_template: {
                value: ccComputeNodeGroupCustomLaunchTemplatePropertyToHclTerraform(this._customLaunchTemplate.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcComputeNodeGroup.CustomLaunchTemplateProperty",
            },
            iam_instance_profile_arn: {
                value: cdktn.stringToHclTerraform(this._iamInstanceProfileArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_configs: {
                value: cdktn.listMapperHcl(ccComputeNodeGroupInstanceConfigPropertyToHclTerraform, false)(this._instanceConfigs.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcComputeNodeGroup.InstanceConfigPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            node_lifecycle_actions: {
                value: ccComputeNodeGroupNodeLifecycleActionsPropertyToHclTerraform(this._nodeLifecycleActions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcComputeNodeGroup.NodeLifecycleActionsProperty",
            },
            purchase_option: {
                value: cdktn.stringToHclTerraform(this._purchaseOption),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scaling_configuration: {
                value: ccComputeNodeGroupScalingConfigurationPropertyToHclTerraform(this._scalingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcComputeNodeGroup.ScalingConfigurationProperty",
            },
            slurm_configuration: {
                value: ccComputeNodeGroupSlurmConfigurationPropertyToHclTerraform(this._slurmConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcComputeNodeGroup.SlurmConfigurationProperty",
            },
            spot_options: {
                value: ccComputeNodeGroupSpotOptionsPropertyToHclTerraform(this._spotOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcComputeNodeGroup.SpotOptionsProperty",
            },
            subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccComputeNodeGroupCustomLaunchTemplatePropertyToTerraform(struct?: CcComputeNodeGroup.CustomLaunchTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        template_id: cdktn.stringToTerraform(struct!.templateId),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccComputeNodeGroupCustomLaunchTemplatePropertyToHclTerraform(struct?: CcComputeNodeGroup.CustomLaunchTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        template_id: {
            value: cdktn.stringToHclTerraform(struct!.templateId),
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


export function ccComputeNodeGroupErrorInfoPropertyToTerraform(struct?: CcComputeNodeGroup.ErrorInfoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccComputeNodeGroupErrorInfoPropertyToHclTerraform(struct?: CcComputeNodeGroup.ErrorInfoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccComputeNodeGroupInstanceConfigPropertyToTerraform(struct?: CcComputeNodeGroup.InstanceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
    }
}


export function ccComputeNodeGroupInstanceConfigPropertyToHclTerraform(struct?: CcComputeNodeGroup.InstanceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeNodeGroupScriptSourcePropertyToTerraform(struct?: CcComputeNodeGroup.ScriptSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        checksum: cdktn.stringToTerraform(struct!.checksum),
        s3_version_id: cdktn.stringToTerraform(struct!.s3VersionId),
        script_location: cdktn.stringToTerraform(struct!.scriptLocation),
    }
}


export function ccComputeNodeGroupScriptSourcePropertyToHclTerraform(struct?: CcComputeNodeGroup.ScriptSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        checksum: {
            value: cdktn.stringToHclTerraform(struct!.checksum),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_version_id: {
            value: cdktn.stringToHclTerraform(struct!.s3VersionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        script_location: {
            value: cdktn.stringToHclTerraform(struct!.scriptLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeNodeGroupNodeLifecycleScriptPropertyToTerraform(struct?: CcComputeNodeGroup.NodeLifecycleScriptProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.arguments),
        execution_policy: cdktn.stringToTerraform(struct!.executionPolicy),
        name: cdktn.stringToTerraform(struct!.name),
        on_error: cdktn.stringToTerraform(struct!.onError),
        script_source: ccComputeNodeGroupScriptSourcePropertyToTerraform(struct!.scriptSource),
    }
}


export function ccComputeNodeGroupNodeLifecycleScriptPropertyToHclTerraform(struct?: CcComputeNodeGroup.NodeLifecycleScriptProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arguments: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.arguments),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        execution_policy: {
            value: cdktn.stringToHclTerraform(struct!.executionPolicy),
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
        on_error: {
            value: cdktn.stringToHclTerraform(struct!.onError),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        script_source: {
            value: ccComputeNodeGroupScriptSourcePropertyToHclTerraform(struct!.scriptSource),
            isBlock: true,
            type: "struct",
            storageClassType: "ScriptSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourcePropertyToTerraform(struct?: CcComputeNodeGroup.NodeLifecycleActionsStagesNodeReadyScriptSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        checksum: cdktn.stringToTerraform(struct!.checksum),
        s3_version_id: cdktn.stringToTerraform(struct!.s3VersionId),
        script_location: cdktn.stringToTerraform(struct!.scriptLocation),
    }
}


export function ccComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourcePropertyToHclTerraform(struct?: CcComputeNodeGroup.NodeLifecycleActionsStagesNodeReadyScriptSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        checksum: {
            value: cdktn.stringToHclTerraform(struct!.checksum),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_version_id: {
            value: cdktn.stringToHclTerraform(struct!.s3VersionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        script_location: {
            value: cdktn.stringToHclTerraform(struct!.scriptLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeNodeGroupNodeReadyPropertyToTerraform(struct?: CcComputeNodeGroup.NodeReadyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.arguments),
        execution_policy: cdktn.stringToTerraform(struct!.executionPolicy),
        name: cdktn.stringToTerraform(struct!.name),
        on_error: cdktn.stringToTerraform(struct!.onError),
        script_source: ccComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourcePropertyToTerraform(struct!.scriptSource),
    }
}


export function ccComputeNodeGroupNodeReadyPropertyToHclTerraform(struct?: CcComputeNodeGroup.NodeReadyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arguments: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.arguments),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        execution_policy: {
            value: cdktn.stringToHclTerraform(struct!.executionPolicy),
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
        on_error: {
            value: cdktn.stringToHclTerraform(struct!.onError),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        script_source: {
            value: ccComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourcePropertyToHclTerraform(struct!.scriptSource),
            isBlock: true,
            type: "struct",
            storageClassType: "NodeLifecycleActionsStagesNodeReadyScriptSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeNodeGroupNodeLifecycleStagesPropertyToTerraform(struct?: CcComputeNodeGroup.NodeLifecycleStagesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        node_bootstrapped: cdktn.listMapper(ccComputeNodeGroupNodeLifecycleScriptPropertyToTerraform, false)(struct!.nodeBootstrapped),
        node_ready: cdktn.listMapper(ccComputeNodeGroupNodeReadyPropertyToTerraform, false)(struct!.nodeReady),
    }
}


export function ccComputeNodeGroupNodeLifecycleStagesPropertyToHclTerraform(struct?: CcComputeNodeGroup.NodeLifecycleStagesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        node_bootstrapped: {
            value: cdktn.listMapperHcl(ccComputeNodeGroupNodeLifecycleScriptPropertyToHclTerraform, false)(struct!.nodeBootstrapped),
            isBlock: true,
            type: "list",
            storageClassType: "NodeLifecycleScriptPropertyList",
        },
        node_ready: {
            value: cdktn.listMapperHcl(ccComputeNodeGroupNodeReadyPropertyToHclTerraform, false)(struct!.nodeReady),
            isBlock: true,
            type: "list",
            storageClassType: "NodeReadyPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeNodeGroupNodeLifecycleActionsPropertyToTerraform(struct?: CcComputeNodeGroup.NodeLifecycleActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        script_caching_policy: cdktn.stringToTerraform(struct!.scriptCachingPolicy),
        stages: ccComputeNodeGroupNodeLifecycleStagesPropertyToTerraform(struct!.stages),
    }
}


export function ccComputeNodeGroupNodeLifecycleActionsPropertyToHclTerraform(struct?: CcComputeNodeGroup.NodeLifecycleActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        script_caching_policy: {
            value: cdktn.stringToHclTerraform(struct!.scriptCachingPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stages: {
            value: ccComputeNodeGroupNodeLifecycleStagesPropertyToHclTerraform(struct!.stages),
            isBlock: true,
            type: "struct",
            storageClassType: "NodeLifecycleStagesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeNodeGroupScalingConfigurationPropertyToTerraform(struct?: CcComputeNodeGroup.ScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_instance_count: cdktn.numberToTerraform(struct!.maxInstanceCount),
        min_instance_count: cdktn.numberToTerraform(struct!.minInstanceCount),
    }
}


export function ccComputeNodeGroupScalingConfigurationPropertyToHclTerraform(struct?: CcComputeNodeGroup.ScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_instance_count: {
            value: cdktn.numberToHclTerraform(struct!.maxInstanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_instance_count: {
            value: cdktn.numberToHclTerraform(struct!.minInstanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeNodeGroupSlurmCustomSettingPropertyToTerraform(struct?: CcComputeNodeGroup.SlurmCustomSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameter_name: cdktn.stringToTerraform(struct!.parameterName),
        parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
    }
}


export function ccComputeNodeGroupSlurmCustomSettingPropertyToHclTerraform(struct?: CcComputeNodeGroup.SlurmCustomSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.parameterName),
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


export function ccComputeNodeGroupSlurmConfigurationPropertyToTerraform(struct?: CcComputeNodeGroup.SlurmConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scale_down_idle_time_in_seconds: cdktn.numberToTerraform(struct!.scaleDownIdleTimeInSeconds),
        slurm_custom_settings: cdktn.listMapper(ccComputeNodeGroupSlurmCustomSettingPropertyToTerraform, false)(struct!.slurmCustomSettings),
    }
}


export function ccComputeNodeGroupSlurmConfigurationPropertyToHclTerraform(struct?: CcComputeNodeGroup.SlurmConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scale_down_idle_time_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.scaleDownIdleTimeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        slurm_custom_settings: {
            value: cdktn.listMapperHcl(ccComputeNodeGroupSlurmCustomSettingPropertyToHclTerraform, false)(struct!.slurmCustomSettings),
            isBlock: true,
            type: "list",
            storageClassType: "SlurmCustomSettingPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeNodeGroupSpotOptionsPropertyToTerraform(struct?: CcComputeNodeGroup.SpotOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    }
}


export function ccComputeNodeGroupSpotOptionsPropertyToHclTerraform(struct?: CcComputeNodeGroup.SpotOptionsProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcComputeNodeGroup {
export interface CustomLaunchTemplateProperty {
    /**
    * The ID of the EC2 launch template to use to provision instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#template_id CcComputeNodeGroup#template_id}
    */
    readonly templateId?: string;
    /**
    * The version of the EC2 launch template to use to provision instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#version CcComputeNodeGroup#version}
    */
    readonly version: string;
}
export class CustomLaunchTemplatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomLaunchTemplateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._templateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateId = this._templateId;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomLaunchTemplateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._templateId = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._templateId = value.templateId;
            this._version = value.version;
        }
    }

    // template_id - computed: true, optional: true, required: false
    private _templateId?: string; 
    public get templateId() {
        return this.getStringAttribute('template_id');
    }
    public set templateId(value: string) {
        this._templateId = value;
    }
    public resetTemplateId() {
        this._templateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateIdInput() {
        return this._templateId;
    }

    // version - computed: false, optional: false, required: true
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface ErrorInfoProperty {
}
export class ErrorInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ErrorInfoProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ErrorInfoProperty | undefined) {
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

    // message - computed: true, optional: false, required: false
    public get message() {
        return this.getStringAttribute('message');
    }
}

export class ErrorInfoPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ErrorInfoPropertyOutputReference {
        return new ErrorInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InstanceConfigProperty {
    /**
    * The EC2 instance type that AWS PCS can provision in the compute node group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#instance_type CcComputeNodeGroup#instance_type}
    */
    readonly instanceType?: string;
}
export class InstanceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InstanceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
        }
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
}

export class InstanceConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : InstanceConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): InstanceConfigPropertyOutputReference {
        return new InstanceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScriptSourceProperty {
    /**
    * A 64-character hexadecimal SHA-256 digest used to verify script integrity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#checksum CcComputeNodeGroup#checksum}
    */
    readonly checksum?: string;
    /**
    * The S3 object version ID of the script, when stored in a versioned bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#s3_version_id CcComputeNodeGroup#s3_version_id}
    */
    readonly s3VersionId?: string;
    /**
    * The S3 URI or HTTPS URL where the script is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#script_location CcComputeNodeGroup#script_location}
    */
    readonly scriptLocation?: string;
}
export class ScriptSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScriptSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._checksum !== undefined) {
            hasAnyValues = true;
            internalValueResult.checksum = this._checksum;
        }
        if (this._s3VersionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3VersionId = this._s3VersionId;
        }
        if (this._scriptLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.scriptLocation = this._scriptLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScriptSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._checksum = undefined;
            this._s3VersionId = undefined;
            this._scriptLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._checksum = value.checksum;
            this._s3VersionId = value.s3VersionId;
            this._scriptLocation = value.scriptLocation;
        }
    }

    // checksum - computed: true, optional: true, required: false
    private _checksum?: string; 
    public get checksum() {
        return this.getStringAttribute('checksum');
    }
    public set checksum(value: string) {
        this._checksum = value;
    }
    public resetChecksum() {
        this._checksum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get checksumInput() {
        return this._checksum;
    }

    // s3_version_id - computed: true, optional: true, required: false
    private _s3VersionId?: string; 
    public get s3VersionId() {
        return this.getStringAttribute('s3_version_id');
    }
    public set s3VersionId(value: string) {
        this._s3VersionId = value;
    }
    public resetS3VersionId() {
        this._s3VersionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3VersionIdInput() {
        return this._s3VersionId;
    }

    // script_location - computed: true, optional: true, required: false
    private _scriptLocation?: string; 
    public get scriptLocation() {
        return this.getStringAttribute('script_location');
    }
    public set scriptLocation(value: string) {
        this._scriptLocation = value;
    }
    public resetScriptLocation() {
        this._scriptLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptLocationInput() {
        return this._scriptLocation;
    }
}
export interface NodeLifecycleScriptProperty {
    /**
    * An ordered list of arguments passed to the script.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#arguments CcComputeNodeGroup#arguments}
    */
    readonly arguments?: string[];
    /**
    * Whether the script runs only on the node's first boot (FIRST_BOOT_ONLY) or on every boot including reboots (EVERY_BOOT). Defaults to FIRST_BOOT_ONLY.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#execution_policy CcComputeNodeGroup#execution_policy}
    */
    readonly executionPolicy?: string;
    /**
    * A human-readable name that identifies the script.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#name CcComputeNodeGroup#name}
    */
    readonly name?: string;
    /**
    * The behavior when the script exits with an error. Defaults to TERMINATE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#on_error CcComputeNodeGroup#on_error}
    */
    readonly onError?: string;
    /**
    * The external location of a lifecycle script.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#script_source CcComputeNodeGroup#script_source}
    */
    readonly scriptSource?: ScriptSourceProperty;
}
export class NodeLifecycleScriptPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NodeLifecycleScriptProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arguments !== undefined) {
            hasAnyValues = true;
            internalValueResult.arguments = this._arguments;
        }
        if (this._executionPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionPolicy = this._executionPolicy;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._onError !== undefined) {
            hasAnyValues = true;
            internalValueResult.onError = this._onError;
        }
        if (this._scriptSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scriptSource = this._scriptSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeLifecycleScriptProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arguments = undefined;
            this._executionPolicy = undefined;
            this._name = undefined;
            this._onError = undefined;
            this._scriptSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arguments = value.arguments;
            this._executionPolicy = value.executionPolicy;
            this._name = value.name;
            this._onError = value.onError;
            this._scriptSource.internalValue = value.scriptSource;
        }
    }

    // arguments - computed: true, optional: true, required: false
    private _arguments?: string[]; 
    public get arguments() {
        return this.getListAttribute('arguments');
    }
    public set arguments(value: string[]) {
        this._arguments = value;
    }
    public resetArguments() {
        this._arguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get argumentsInput() {
        return this._arguments;
    }

    // execution_policy - computed: true, optional: true, required: false
    private _executionPolicy?: string; 
    public get executionPolicy() {
        return this.getStringAttribute('execution_policy');
    }
    public set executionPolicy(value: string) {
        this._executionPolicy = value;
    }
    public resetExecutionPolicy() {
        this._executionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionPolicyInput() {
        return this._executionPolicy;
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

    // on_error - computed: true, optional: true, required: false
    private _onError?: string; 
    public get onError() {
        return this.getStringAttribute('on_error');
    }
    public set onError(value: string) {
        this._onError = value;
    }
    public resetOnError() {
        this._onError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onErrorInput() {
        return this._onError;
    }

    // script_source - computed: true, optional: true, required: false
    private _scriptSource = new ScriptSourcePropertyOutputReference(this, "script_source");
    public get scriptSource() {
        return this._scriptSource;
    }
    public putScriptSource(value: ScriptSourceProperty) {
        this._scriptSource.internalValue = value;
    }
    public resetScriptSource() {
        this._scriptSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptSourceInput() {
        return this._scriptSource.internalValue;
    }
}

export class NodeLifecycleScriptPropertyList extends cdktn.ComplexList {
    public internalValue? : NodeLifecycleScriptProperty[] | cdktn.IResolvable

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
    public get(index: number): NodeLifecycleScriptPropertyOutputReference {
        return new NodeLifecycleScriptPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NodeLifecycleActionsStagesNodeReadyScriptSourceProperty {
    /**
    * A 64-character hexadecimal SHA-256 digest used to verify script integrity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#checksum CcComputeNodeGroup#checksum}
    */
    readonly checksum?: string;
    /**
    * The S3 object version ID of the script, when stored in a versioned bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#s3_version_id CcComputeNodeGroup#s3_version_id}
    */
    readonly s3VersionId?: string;
    /**
    * The S3 URI or HTTPS URL where the script is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#script_location CcComputeNodeGroup#script_location}
    */
    readonly scriptLocation?: string;
}
export class NodeLifecycleActionsStagesNodeReadyScriptSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NodeLifecycleActionsStagesNodeReadyScriptSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._checksum !== undefined) {
            hasAnyValues = true;
            internalValueResult.checksum = this._checksum;
        }
        if (this._s3VersionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3VersionId = this._s3VersionId;
        }
        if (this._scriptLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.scriptLocation = this._scriptLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeLifecycleActionsStagesNodeReadyScriptSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._checksum = undefined;
            this._s3VersionId = undefined;
            this._scriptLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._checksum = value.checksum;
            this._s3VersionId = value.s3VersionId;
            this._scriptLocation = value.scriptLocation;
        }
    }

    // checksum - computed: true, optional: true, required: false
    private _checksum?: string; 
    public get checksum() {
        return this.getStringAttribute('checksum');
    }
    public set checksum(value: string) {
        this._checksum = value;
    }
    public resetChecksum() {
        this._checksum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get checksumInput() {
        return this._checksum;
    }

    // s3_version_id - computed: true, optional: true, required: false
    private _s3VersionId?: string; 
    public get s3VersionId() {
        return this.getStringAttribute('s3_version_id');
    }
    public set s3VersionId(value: string) {
        this._s3VersionId = value;
    }
    public resetS3VersionId() {
        this._s3VersionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3VersionIdInput() {
        return this._s3VersionId;
    }

    // script_location - computed: true, optional: true, required: false
    private _scriptLocation?: string; 
    public get scriptLocation() {
        return this.getStringAttribute('script_location');
    }
    public set scriptLocation(value: string) {
        this._scriptLocation = value;
    }
    public resetScriptLocation() {
        this._scriptLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptLocationInput() {
        return this._scriptLocation;
    }
}
export interface NodeReadyProperty {
    /**
    * An ordered list of arguments passed to the script.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#arguments CcComputeNodeGroup#arguments}
    */
    readonly arguments?: string[];
    /**
    * Whether the script runs only on the node's first boot (FIRST_BOOT_ONLY) or on every boot including reboots (EVERY_BOOT). Defaults to FIRST_BOOT_ONLY.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#execution_policy CcComputeNodeGroup#execution_policy}
    */
    readonly executionPolicy?: string;
    /**
    * A human-readable name that identifies the script.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#name CcComputeNodeGroup#name}
    */
    readonly name?: string;
    /**
    * The behavior when the script exits with an error. Defaults to TERMINATE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#on_error CcComputeNodeGroup#on_error}
    */
    readonly onError?: string;
    /**
    * The external location of a lifecycle script.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#script_source CcComputeNodeGroup#script_source}
    */
    readonly scriptSource?: NodeLifecycleActionsStagesNodeReadyScriptSourceProperty;
}
export class NodeReadyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NodeReadyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arguments !== undefined) {
            hasAnyValues = true;
            internalValueResult.arguments = this._arguments;
        }
        if (this._executionPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionPolicy = this._executionPolicy;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._onError !== undefined) {
            hasAnyValues = true;
            internalValueResult.onError = this._onError;
        }
        if (this._scriptSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scriptSource = this._scriptSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeReadyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arguments = undefined;
            this._executionPolicy = undefined;
            this._name = undefined;
            this._onError = undefined;
            this._scriptSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arguments = value.arguments;
            this._executionPolicy = value.executionPolicy;
            this._name = value.name;
            this._onError = value.onError;
            this._scriptSource.internalValue = value.scriptSource;
        }
    }

    // arguments - computed: true, optional: true, required: false
    private _arguments?: string[]; 
    public get arguments() {
        return this.getListAttribute('arguments');
    }
    public set arguments(value: string[]) {
        this._arguments = value;
    }
    public resetArguments() {
        this._arguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get argumentsInput() {
        return this._arguments;
    }

    // execution_policy - computed: true, optional: true, required: false
    private _executionPolicy?: string; 
    public get executionPolicy() {
        return this.getStringAttribute('execution_policy');
    }
    public set executionPolicy(value: string) {
        this._executionPolicy = value;
    }
    public resetExecutionPolicy() {
        this._executionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionPolicyInput() {
        return this._executionPolicy;
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

    // on_error - computed: true, optional: true, required: false
    private _onError?: string; 
    public get onError() {
        return this.getStringAttribute('on_error');
    }
    public set onError(value: string) {
        this._onError = value;
    }
    public resetOnError() {
        this._onError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onErrorInput() {
        return this._onError;
    }

    // script_source - computed: true, optional: true, required: false
    private _scriptSource = new NodeLifecycleActionsStagesNodeReadyScriptSourcePropertyOutputReference(this, "script_source");
    public get scriptSource() {
        return this._scriptSource;
    }
    public putScriptSource(value: NodeLifecycleActionsStagesNodeReadyScriptSourceProperty) {
        this._scriptSource.internalValue = value;
    }
    public resetScriptSource() {
        this._scriptSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptSourceInput() {
        return this._scriptSource.internalValue;
    }
}

export class NodeReadyPropertyList extends cdktn.ComplexList {
    public internalValue? : NodeReadyProperty[] | cdktn.IResolvable

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
    public get(index: number): NodeReadyPropertyOutputReference {
        return new NodeReadyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NodeLifecycleStagesProperty {
    /**
    * Scripts to run after the node is bootstrapped, once the PCS configuration phase completes and before slurmd starts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#node_bootstrapped CcComputeNodeGroup#node_bootstrapped}
    */
    readonly nodeBootstrapped?: NodeLifecycleScriptProperty[] | cdktn.IResolvable;
    /**
    * Scripts to execute when the node becomes ready (every boot).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#node_ready CcComputeNodeGroup#node_ready}
    */
    readonly nodeReady?: NodeReadyProperty[] | cdktn.IResolvable;
}
export class NodeLifecycleStagesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NodeLifecycleStagesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._nodeBootstrapped?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nodeBootstrapped = this._nodeBootstrapped?.internalValue;
        }
        if (this._nodeReady?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nodeReady = this._nodeReady?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeLifecycleStagesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nodeBootstrapped.internalValue = undefined;
            this._nodeReady.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nodeBootstrapped.internalValue = value.nodeBootstrapped;
            this._nodeReady.internalValue = value.nodeReady;
        }
    }

    // node_bootstrapped - computed: true, optional: true, required: false
    private _nodeBootstrapped = new NodeLifecycleScriptPropertyList(this, "node_bootstrapped", false);
    public get nodeBootstrapped() {
        return this._nodeBootstrapped;
    }
    public putNodeBootstrapped(value: NodeLifecycleScriptProperty[] | cdktn.IResolvable) {
        this._nodeBootstrapped.internalValue = value;
    }
    public resetNodeBootstrapped() {
        this._nodeBootstrapped.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeBootstrappedInput() {
        return this._nodeBootstrapped.internalValue;
    }

    // node_ready - computed: true, optional: true, required: false
    private _nodeReady = new NodeReadyPropertyList(this, "node_ready", false);
    public get nodeReady() {
        return this._nodeReady;
    }
    public putNodeReady(value: NodeReadyProperty[] | cdktn.IResolvable) {
        this._nodeReady.internalValue = value;
    }
    public resetNodeReady() {
        this._nodeReady.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeReadyInput() {
        return this._nodeReady.internalValue;
    }
}
export interface NodeLifecycleActionsProperty {
    /**
    * Controls whether lifecycle scripts are downloaded once at first boot (CACHE_ONCE) or re-downloaded on every reboot (REFRESH_ON_REBOOT). Defaults to CACHE_ONCE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#script_caching_policy CcComputeNodeGroup#script_caching_policy}
    */
    readonly scriptCachingPolicy?: string;
    /**
    * The ordered scripts to run at each compute node lifecycle stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#stages CcComputeNodeGroup#stages}
    */
    readonly stages?: NodeLifecycleStagesProperty;
}
export class NodeLifecycleActionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NodeLifecycleActionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scriptCachingPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.scriptCachingPolicy = this._scriptCachingPolicy;
        }
        if (this._stages?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stages = this._stages?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeLifecycleActionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scriptCachingPolicy = undefined;
            this._stages.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scriptCachingPolicy = value.scriptCachingPolicy;
            this._stages.internalValue = value.stages;
        }
    }

    // script_caching_policy - computed: true, optional: true, required: false
    private _scriptCachingPolicy?: string; 
    public get scriptCachingPolicy() {
        return this.getStringAttribute('script_caching_policy');
    }
    public set scriptCachingPolicy(value: string) {
        this._scriptCachingPolicy = value;
    }
    public resetScriptCachingPolicy() {
        this._scriptCachingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptCachingPolicyInput() {
        return this._scriptCachingPolicy;
    }

    // stages - computed: true, optional: true, required: false
    private _stages = new NodeLifecycleStagesPropertyOutputReference(this, "stages");
    public get stages() {
        return this._stages;
    }
    public putStages(value: NodeLifecycleStagesProperty) {
        this._stages.internalValue = value;
    }
    public resetStages() {
        this._stages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stagesInput() {
        return this._stages.internalValue;
    }
}
export interface ScalingConfigurationProperty {
    /**
    * The upper bound of the number of instances allowed in the compute fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#max_instance_count CcComputeNodeGroup#max_instance_count}
    */
    readonly maxInstanceCount: number;
    /**
    * The lower bound of the number of instances allowed in the compute fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#min_instance_count CcComputeNodeGroup#min_instance_count}
    */
    readonly minInstanceCount: number;
}
export class ScalingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScalingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxInstanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxInstanceCount = this._maxInstanceCount;
        }
        if (this._minInstanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.minInstanceCount = this._minInstanceCount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScalingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxInstanceCount = undefined;
            this._minInstanceCount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxInstanceCount = value.maxInstanceCount;
            this._minInstanceCount = value.minInstanceCount;
        }
    }

    // max_instance_count - computed: false, optional: false, required: true
    private _maxInstanceCount?: number; 
    public get maxInstanceCount() {
        return this.getNumberAttribute('max_instance_count');
    }
    public set maxInstanceCount(value: number) {
        this._maxInstanceCount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInstanceCountInput() {
        return this._maxInstanceCount;
    }

    // min_instance_count - computed: false, optional: false, required: true
    private _minInstanceCount?: number; 
    public get minInstanceCount() {
        return this.getNumberAttribute('min_instance_count');
    }
    public set minInstanceCount(value: number) {
        this._minInstanceCount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get minInstanceCountInput() {
        return this._minInstanceCount;
    }
}
export interface SlurmCustomSettingProperty {
    /**
    * AWS PCS supports configuration of the following Slurm parameters for compute node groups: Weight and RealMemory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#parameter_name CcComputeNodeGroup#parameter_name}
    */
    readonly parameterName?: string;
    /**
    * The value for the configured Slurm setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#parameter_value CcComputeNodeGroup#parameter_value}
    */
    readonly parameterValue?: string;
}
export class SlurmCustomSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SlurmCustomSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterName = this._parameterName;
        }
        if (this._parameterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterValue = this._parameterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlurmCustomSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameterName = undefined;
            this._parameterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameterName = value.parameterName;
            this._parameterValue = value.parameterValue;
        }
    }

    // parameter_name - computed: true, optional: true, required: false
    private _parameterName?: string; 
    public get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    public set parameterName(value: string) {
        this._parameterName = value;
    }
    public resetParameterName() {
        this._parameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterNameInput() {
        return this._parameterName;
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

export class SlurmCustomSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : SlurmCustomSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): SlurmCustomSettingPropertyOutputReference {
        return new SlurmCustomSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SlurmConfigurationProperty {
    /**
    * The time before an idle node is scaled down.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#scale_down_idle_time_in_seconds CcComputeNodeGroup#scale_down_idle_time_in_seconds}
    */
    readonly scaleDownIdleTimeInSeconds?: number;
    /**
    * Additional Slurm-specific configuration that directly maps to Slurm settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#slurm_custom_settings CcComputeNodeGroup#slurm_custom_settings}
    */
    readonly slurmCustomSettings?: SlurmCustomSettingProperty[] | cdktn.IResolvable;
}
export class SlurmConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SlurmConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scaleDownIdleTimeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleDownIdleTimeInSeconds = this._scaleDownIdleTimeInSeconds;
        }
        if (this._slurmCustomSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slurmCustomSettings = this._slurmCustomSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlurmConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scaleDownIdleTimeInSeconds = undefined;
            this._slurmCustomSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scaleDownIdleTimeInSeconds = value.scaleDownIdleTimeInSeconds;
            this._slurmCustomSettings.internalValue = value.slurmCustomSettings;
        }
    }

    // scale_down_idle_time_in_seconds - computed: true, optional: true, required: false
    private _scaleDownIdleTimeInSeconds?: number; 
    public get scaleDownIdleTimeInSeconds() {
        return this.getNumberAttribute('scale_down_idle_time_in_seconds');
    }
    public set scaleDownIdleTimeInSeconds(value: number) {
        this._scaleDownIdleTimeInSeconds = value;
    }
    public resetScaleDownIdleTimeInSeconds() {
        this._scaleDownIdleTimeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleDownIdleTimeInSecondsInput() {
        return this._scaleDownIdleTimeInSeconds;
    }

    // slurm_custom_settings - computed: true, optional: true, required: false
    private _slurmCustomSettings = new SlurmCustomSettingPropertyList(this, "slurm_custom_settings", false);
    public get slurmCustomSettings() {
        return this._slurmCustomSettings;
    }
    public putSlurmCustomSettings(value: SlurmCustomSettingProperty[] | cdktn.IResolvable) {
        this._slurmCustomSettings.internalValue = value;
    }
    public resetSlurmCustomSettings() {
        this._slurmCustomSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slurmCustomSettingsInput() {
        return this._slurmCustomSettings.internalValue;
    }
}
export interface SpotOptionsProperty {
    /**
    * The Amazon EC2 allocation strategy AWS PCS uses to provision EC2 instances. AWS PCS supports lowest price, capacity optimized, and price capacity optimized. If you don't provide this option, it defaults to price capacity optimized.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_compute_node_group#allocation_strategy CcComputeNodeGroup#allocation_strategy}
    */
    readonly allocationStrategy?: string;
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
        if (this._allocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.allocationStrategy = this._allocationStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpotOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allocationStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allocationStrategy = value.allocationStrategy;
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
}
}
