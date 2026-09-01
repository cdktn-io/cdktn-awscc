// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAutoScalingGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the Auto Scaling group. This name must be unique per Region per account.
    *  The name can contain any ASCII character 33 to 126 including most punctuation characters, digits, and upper and lowercased letters.
    *   You cannot use a colon (:) in the name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#auto_scaling_group_name CcAutoScalingGroup#auto_scaling_group_name}
    */
    readonly autoScalingGroupName?: string;
    /**
    * The EC2 instance capacity distribution across Availability Zones for the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#availability_zone_distribution CcAutoScalingGroup#availability_zone_distribution}
    */
    readonly availabilityZoneDistribution?: CcAutoScalingGroup.AvailabilityZoneDistributionProperty;
    /**
    * The Availability Zone IDs where the Auto Scaling group can launch instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#availability_zone_ids CcAutoScalingGroup#availability_zone_ids}
    */
    readonly availabilityZoneIds?: string[];
    /**
    * The Availability Zone impairment policy for the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#availability_zone_impairment_policy CcAutoScalingGroup#availability_zone_impairment_policy}
    */
    readonly availabilityZoneImpairmentPolicy?: CcAutoScalingGroup.AvailabilityZoneImpairmentPolicyProperty;
    /**
    * A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the ``VPCZoneIdentifier`` property, or for attaching a network interface when an existing network interface ID is specified in a launch template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#availability_zones CcAutoScalingGroup#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see [Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-capacity-rebalancing.html) in the in the *Amazon EC2 Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#capacity_rebalance CcAutoScalingGroup#capacity_rebalance}
    */
    readonly capacityRebalance?: boolean | cdktn.IResolvable;
    /**
    * The capacity reservation specification for the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#capacity_reservation_specification CcAutoScalingGroup#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: CcAutoScalingGroup.CapacityReservationSpecificationProperty;
    /**
    * Reserved.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#context CcAutoScalingGroup#context}
    */
    readonly context?: string;
    /**
    * *Only needed if you use simple scaling policies.* 
    *  The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see [Scaling cooldowns for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scaling-cooldowns.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *  Default: ``300`` seconds
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#cooldown CcAutoScalingGroup#cooldown}
    */
    readonly cooldown?: string;
    /**
    * The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the ``InService`` state. 
    *  During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see [Set the default instance warmup for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *   To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, *even if it is set to 0 seconds*. To remove a value that you previously set, include the property but specify ``-1`` for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of ``0`` or other nominal value.
    *   Default: None
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#default_instance_warmup CcAutoScalingGroup#default_instance_warmup}
    */
    readonly defaultInstanceWarmup?: number;
    /**
    * The deletion protection setting for the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#deletion_protection CcAutoScalingGroup#deletion_protection}
    */
    readonly deletionProtection?: string;
    /**
    * The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure automatic scaling.
    *  The number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity when creating the stack, the default is the minimum size of the group.
    *  CloudFormation marks the Auto Scaling group as successful (by setting its status to CREATE_COMPLETE) when the desired capacity is reached. However, if a maximum Spot price is set in the launch template or launch configuration that you specified, then desired capacity is not used as a criteria for success. Whether your request is fulfilled depends on Spot Instance capacity and your maximum price.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#desired_capacity CcAutoScalingGroup#desired_capacity}
    */
    readonly desiredCapacity?: string;
    /**
    * The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports ``DesiredCapacityType`` for attribute-based instance type selection only. For more information, see [Create a mixed instances group using attribute-based instance type selection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-mixed-instances-group-attribute-based-instance-type-selection.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *  By default, Amazon EC2 Auto Scaling specifies ``units``, which translates into number of instances.
    *  Valid values: ``units`` | ``vcpu`` | ``memory-mib``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#desired_capacity_type CcAutoScalingGroup#desired_capacity_type}
    */
    readonly desiredCapacityType?: string;
    /**
    * The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the ``InService`` state. For more information, see [Set the health check grace period for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *  Default: ``0`` seconds
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#health_check_grace_period CcAutoScalingGroup#health_check_grace_period}
    */
    readonly healthCheckGracePeriod?: number;
    /**
    * A comma-separated value string of one or more health check types.
    *  The valid values are ``EC2``, ``EBS``, ``ELB``, and ``VPC_LATTICE``. ``EC2`` is the default health check and cannot be disabled. For more information, see [Health checks for instances in an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-health-checks.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *  Only specify ``EC2`` if you must clear a value that was previously set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#health_check_type CcAutoScalingGroup#health_check_type}
    */
    readonly healthCheckType?: string;
    /**
    * The ID of the instance used to base the launch configuration on. For more information, see [Create an Auto Scaling group using an EC2 instance](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-from-instance.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *  If you specify ``LaunchTemplate``, ``MixedInstancesPolicy``, or ``LaunchConfigurationName``, don't specify ``InstanceId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#instance_id CcAutoScalingGroup#instance_id}
    */
    readonly instanceId?: string;
    /**
    * The instance lifecycle policy for the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#instance_lifecycle_policy CcAutoScalingGroup#instance_lifecycle_policy}
    */
    readonly instanceLifecyclePolicy?: CcAutoScalingGroup.InstanceLifecyclePolicyProperty;
    /**
    * An instance maintenance policy. For more information, see [Set instance maintenance policy](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-maintenance-policy.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#instance_maintenance_policy CcAutoScalingGroup#instance_maintenance_policy}
    */
    readonly instanceMaintenancePolicy?: CcAutoScalingGroup.InstanceMaintenancePolicyProperty;
    /**
    * The name of the launch configuration to use to launch instances.
    *  Required only if you don't specify ``LaunchTemplate``, ``MixedInstancesPolicy``, or ``InstanceId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#launch_configuration_name CcAutoScalingGroup#launch_configuration_name}
    */
    readonly launchConfigurationName?: string;
    /**
    * Information used to specify the launch template and version to use to launch instances. You can alternatively associate a launch template to the Auto Scaling group by specifying a ``MixedInstancesPolicy``. For more information about creating launch templates, see [Create a launch template for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *  If you omit this property, you must specify ``MixedInstancesPolicy``, ``LaunchConfigurationName``, or ``InstanceId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#launch_template CcAutoScalingGroup#launch_template}
    */
    readonly launchTemplate?: CcAutoScalingGroup.LaunchTemplateSpecificationProperty;
    /**
    * One or more lifecycle hooks to add to the Auto Scaling group before instances are launched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#lifecycle_hook_specification_list CcAutoScalingGroup#lifecycle_hook_specification_list}
    */
    readonly lifecycleHookSpecificationList?: CcAutoScalingGroup.LifecycleHookSpecificationProperty[] | cdktn.IResolvable;
    /**
    * A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the ``TargetGroupARNs`` property instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#load_balancer_names CcAutoScalingGroup#load_balancer_names}
    */
    readonly loadBalancerNames?: string[];
    /**
    * The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). For more information, see [Replace Auto Scaling instances based on maximum instance lifetime](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max_instance_lifetime CcAutoScalingGroup#max_instance_lifetime}
    */
    readonly maxInstanceLifetime?: number;
    /**
    * The maximum size of the group.
    *   With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above ``MaxSize`` to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above ``MaxSize`` by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max_size CcAutoScalingGroup#max_size}
    */
    readonly maxSize: string;
    /**
    * Enables the monitoring of group metrics of an Auto Scaling group. By default, these metrics are disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#metrics_collection CcAutoScalingGroup#metrics_collection}
    */
    readonly metricsCollection?: CcAutoScalingGroup.MetricsCollectionProperty[] | cdktn.IResolvable;
    /**
    * The minimum size of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#min_size CcAutoScalingGroup#min_size}
    */
    readonly minSize: string;
    /**
    * An embedded object that specifies a mixed instances policy.
    *  The policy includes properties that not only define the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances (optional), and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacities, but also the properties that specify the instance configuration information—the launch template and instance types. The policy can also include a weight for each instance type and different launch templates for individual instance types.
    *  For more information, see [Auto Scaling groups with multiple instance types and purchase options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#mixed_instances_policy CcAutoScalingGroup#mixed_instances_policy}
    */
    readonly mixedInstancesPolicy?: CcAutoScalingGroup.MixedInstancesPolicyProperty;
    /**
    * Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see [Use instance scale-in protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#new_instances_protected_from_scale_in CcAutoScalingGroup#new_instances_protected_from_scale_in}
    */
    readonly newInstancesProtectedFromScaleIn?: boolean | cdktn.IResolvable;
    /**
    * A structure that specifies an Amazon SNS notification configuration for the ``NotificationConfigurations`` property of the [AWS::AutoScaling::AutoScalingGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html) resource.
    *  For an example template snippet, see [Configure Amazon EC2 Auto Scaling resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-ec2-auto-scaling.html).
    *  For more information, see [Get Amazon SNS notifications when your Auto Scaling group scales](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#notification_configuration CcAutoScalingGroup#notification_configuration}
    */
    readonly notificationConfiguration?: CcAutoScalingGroup.NotificationConfigurationProperty;
    /**
    * Configures an Auto Scaling group to send notifications when specified events take place.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#notification_configurations CcAutoScalingGroup#notification_configurations}
    */
    readonly notificationConfigurations?: CcAutoScalingGroup.NotificationConfigurationsProperty[] | cdktn.IResolvable;
    /**
    * The name of the placement group into which to launch your instances. For more information, see [Placement groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html) in the *Amazon EC2 User Guide*.
    *   A *cluster* placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#placement_group CcAutoScalingGroup#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS service on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named ``AWSServiceRoleForAutoScaling``, which it creates if it does not exist. For more information, see [Service-linked roles](https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#service_linked_role_arn CcAutoScalingGroup#service_linked_role_arn}
    */
    readonly serviceLinkedRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#skip_zonal_shift_validation CcAutoScalingGroup#skip_zonal_shift_validation}
    */
    readonly skipZonalShiftValidation?: boolean | cdktn.IResolvable;
    /**
    * One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see [Tag Auto Scaling groups and instances](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#tags CcAutoScalingGroup#tags}
    */
    readonly tags?: CcAutoScalingGroup.TagPropertyProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Names (ARN) of the Elastic Load Balancing target groups to associate with the Auto Scaling group. Instances are registered as targets with the target groups. The target groups receive incoming traffic and route requests to one or more registered targets. For more information, see [Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#target_group_ar_ns CcAutoScalingGroup#target_group_ar_ns}
    */
    readonly targetGroupArNs?: string[];
    /**
    * A policy or a list of policies that are used to select the instance to terminate. These policies are executed in the order that you list them. For more information, see [Configure termination policies for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *  Valid values: ``Default`` | ``AllocationStrategy`` | ``ClosestToNextInstanceHour`` | ``NewestInstance`` | ``OldestInstance`` | ``OldestLaunchConfiguration`` | ``OldestLaunchTemplate`` | ``arn:aws:lambda:region:account-id:function:my-function:my-alias``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#termination_policies CcAutoScalingGroup#termination_policies}
    */
    readonly terminationPolicies?: string[];
    /**
    * The traffic sources associated with this Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#traffic_sources CcAutoScalingGroup#traffic_sources}
    */
    readonly trafficSources?: CcAutoScalingGroup.TrafficSourceIdentifierProperty[] | cdktn.IResolvable;
    /**
    * A list of subnet IDs for a virtual private cloud (VPC) where instances in the Auto Scaling group can be created.
    *  If this resource specifies public subnets and is also in a VPC that is defined in the same stack template, you must use the [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) to declare a dependency on the [VPC-gateway attachment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html).
    *   When you update ``VPCZoneIdentifier``, this retains the same Auto Scaling group and replaces old instances with new ones, according to the specified subnets. To control how CloudFormation replaces the instances, add an [UpdatePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html) to your stack. Set the update policy to ``AutoScalingInstanceRefresh``. For more information, see the [AutoScalingInstanceRefresh policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-instancerefresh).
    *   Required to launch instances into a nondefault VPC. If you specify ``VPCZoneIdentifier`` with ``AvailabilityZones``, the subnets that you specify for this property must reside in those Availability Zones.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#vpc_zone_identifier CcAutoScalingGroup#vpc_zone_identifier}
    */
    readonly vpcZoneIdentifier?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group awscc_autoscaling_auto_scaling_group}
*/
export class CcAutoScalingGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_autoscaling_auto_scaling_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAutoScalingGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAutoScalingGroup to import
    * @param importFromId The id of the existing CcAutoScalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAutoScalingGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscaling_auto_scaling_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group awscc_autoscaling_auto_scaling_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAutoScalingGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcAutoScalingGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_autoscaling_auto_scaling_group',
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
        this._autoScalingGroupName = config.autoScalingGroupName;
        this._availabilityZoneDistribution.internalValue = config.availabilityZoneDistribution;
        this._availabilityZoneIds = config.availabilityZoneIds;
        this._availabilityZoneImpairmentPolicy.internalValue = config.availabilityZoneImpairmentPolicy;
        this._availabilityZones = config.availabilityZones;
        this._capacityRebalance = config.capacityRebalance;
        this._capacityReservationSpecification.internalValue = config.capacityReservationSpecification;
        this._context = config.context;
        this._cooldown = config.cooldown;
        this._defaultInstanceWarmup = config.defaultInstanceWarmup;
        this._deletionProtection = config.deletionProtection;
        this._desiredCapacity = config.desiredCapacity;
        this._desiredCapacityType = config.desiredCapacityType;
        this._healthCheckGracePeriod = config.healthCheckGracePeriod;
        this._healthCheckType = config.healthCheckType;
        this._instanceId = config.instanceId;
        this._instanceLifecyclePolicy.internalValue = config.instanceLifecyclePolicy;
        this._instanceMaintenancePolicy.internalValue = config.instanceMaintenancePolicy;
        this._launchConfigurationName = config.launchConfigurationName;
        this._launchTemplate.internalValue = config.launchTemplate;
        this._lifecycleHookSpecificationList.internalValue = config.lifecycleHookSpecificationList;
        this._loadBalancerNames = config.loadBalancerNames;
        this._maxInstanceLifetime = config.maxInstanceLifetime;
        this._maxSize = config.maxSize;
        this._metricsCollection.internalValue = config.metricsCollection;
        this._minSize = config.minSize;
        this._mixedInstancesPolicy.internalValue = config.mixedInstancesPolicy;
        this._newInstancesProtectedFromScaleIn = config.newInstancesProtectedFromScaleIn;
        this._notificationConfiguration.internalValue = config.notificationConfiguration;
        this._notificationConfigurations.internalValue = config.notificationConfigurations;
        this._placementGroup = config.placementGroup;
        this._serviceLinkedRoleArn = config.serviceLinkedRoleArn;
        this._skipZonalShiftValidation = config.skipZonalShiftValidation;
        this._tags.internalValue = config.tags;
        this._targetGroupArNs = config.targetGroupArNs;
        this._terminationPolicies = config.terminationPolicies;
        this._trafficSources.internalValue = config.trafficSources;
        this._vpcZoneIdentifier = config.vpcZoneIdentifier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auto_scaling_group_arn - computed: true, optional: false, required: false
    public get autoScalingGroupArn() {
        return this.getStringAttribute('auto_scaling_group_arn');
    }

    // auto_scaling_group_name - computed: true, optional: true, required: false
    private _autoScalingGroupName?: string; 
    public get autoScalingGroupName() {
        return this.getStringAttribute('auto_scaling_group_name');
    }
    public set autoScalingGroupName(value: string) {
        this._autoScalingGroupName = value;
    }
    public resetAutoScalingGroupName() {
        this._autoScalingGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingGroupNameInput() {
        return this._autoScalingGroupName;
    }

    // availability_zone_distribution - computed: true, optional: true, required: false
    private _availabilityZoneDistribution = new CcAutoScalingGroup.AvailabilityZoneDistributionPropertyOutputReference(this, "availability_zone_distribution");
    public get availabilityZoneDistribution() {
        return this._availabilityZoneDistribution;
    }
    public putAvailabilityZoneDistribution(value: CcAutoScalingGroup.AvailabilityZoneDistributionProperty) {
        this._availabilityZoneDistribution.internalValue = value;
    }
    public resetAvailabilityZoneDistribution() {
        this._availabilityZoneDistribution.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneDistributionInput() {
        return this._availabilityZoneDistribution.internalValue;
    }

    // availability_zone_ids - computed: true, optional: true, required: false
    private _availabilityZoneIds?: string[]; 
    public get availabilityZoneIds() {
        return cdktn.Fn.tolist(this.getListAttribute('availability_zone_ids'));
    }
    public set availabilityZoneIds(value: string[]) {
        this._availabilityZoneIds = value;
    }
    public resetAvailabilityZoneIds() {
        this._availabilityZoneIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneIdsInput() {
        return this._availabilityZoneIds;
    }

    // availability_zone_impairment_policy - computed: true, optional: true, required: false
    private _availabilityZoneImpairmentPolicy = new CcAutoScalingGroup.AvailabilityZoneImpairmentPolicyPropertyOutputReference(this, "availability_zone_impairment_policy");
    public get availabilityZoneImpairmentPolicy() {
        return this._availabilityZoneImpairmentPolicy;
    }
    public putAvailabilityZoneImpairmentPolicy(value: CcAutoScalingGroup.AvailabilityZoneImpairmentPolicyProperty) {
        this._availabilityZoneImpairmentPolicy.internalValue = value;
    }
    public resetAvailabilityZoneImpairmentPolicy() {
        this._availabilityZoneImpairmentPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneImpairmentPolicyInput() {
        return this._availabilityZoneImpairmentPolicy.internalValue;
    }

    // availability_zones - computed: true, optional: true, required: false
    private _availabilityZones?: string[]; 
    public get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    public set availabilityZones(value: string[]) {
        this._availabilityZones = value;
    }
    public resetAvailabilityZones() {
        this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZonesInput() {
        return this._availabilityZones;
    }

    // capacity_rebalance - computed: true, optional: true, required: false
    private _capacityRebalance?: boolean | cdktn.IResolvable; 
    public get capacityRebalance() {
        return this.getBooleanAttribute('capacity_rebalance');
    }
    public set capacityRebalance(value: boolean | cdktn.IResolvable) {
        this._capacityRebalance = value;
    }
    public resetCapacityRebalance() {
        this._capacityRebalance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityRebalanceInput() {
        return this._capacityRebalance;
    }

    // capacity_reservation_specification - computed: true, optional: true, required: false
    private _capacityReservationSpecification = new CcAutoScalingGroup.CapacityReservationSpecificationPropertyOutputReference(this, "capacity_reservation_specification");
    public get capacityReservationSpecification() {
        return this._capacityReservationSpecification;
    }
    public putCapacityReservationSpecification(value: CcAutoScalingGroup.CapacityReservationSpecificationProperty) {
        this._capacityReservationSpecification.internalValue = value;
    }
    public resetCapacityReservationSpecification() {
        this._capacityReservationSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationSpecificationInput() {
        return this._capacityReservationSpecification.internalValue;
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

    // cooldown - computed: true, optional: true, required: false
    private _cooldown?: string; 
    public get cooldown() {
        return this.getStringAttribute('cooldown');
    }
    public set cooldown(value: string) {
        this._cooldown = value;
    }
    public resetCooldown() {
        this._cooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cooldownInput() {
        return this._cooldown;
    }

    // default_instance_warmup - computed: true, optional: true, required: false
    private _defaultInstanceWarmup?: number; 
    public get defaultInstanceWarmup() {
        return this.getNumberAttribute('default_instance_warmup');
    }
    public set defaultInstanceWarmup(value: number) {
        this._defaultInstanceWarmup = value;
    }
    public resetDefaultInstanceWarmup() {
        this._defaultInstanceWarmup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultInstanceWarmupInput() {
        return this._defaultInstanceWarmup;
    }

    // deletion_protection - computed: true, optional: true, required: false
    private _deletionProtection?: string; 
    public get deletionProtection() {
        return this.getStringAttribute('deletion_protection');
    }
    public set deletionProtection(value: string) {
        this._deletionProtection = value;
    }
    public resetDeletionProtection() {
        this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
        return this._deletionProtection;
    }

    // desired_capacity - computed: true, optional: true, required: false
    private _desiredCapacity?: string; 
    public get desiredCapacity() {
        return this.getStringAttribute('desired_capacity');
    }
    public set desiredCapacity(value: string) {
        this._desiredCapacity = value;
    }
    public resetDesiredCapacity() {
        this._desiredCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredCapacityInput() {
        return this._desiredCapacity;
    }

    // desired_capacity_type - computed: true, optional: true, required: false
    private _desiredCapacityType?: string; 
    public get desiredCapacityType() {
        return this.getStringAttribute('desired_capacity_type');
    }
    public set desiredCapacityType(value: string) {
        this._desiredCapacityType = value;
    }
    public resetDesiredCapacityType() {
        this._desiredCapacityType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredCapacityTypeInput() {
        return this._desiredCapacityType;
    }

    // health_check_grace_period - computed: true, optional: true, required: false
    private _healthCheckGracePeriod?: number; 
    public get healthCheckGracePeriod() {
        return this.getNumberAttribute('health_check_grace_period');
    }
    public set healthCheckGracePeriod(value: number) {
        this._healthCheckGracePeriod = value;
    }
    public resetHealthCheckGracePeriod() {
        this._healthCheckGracePeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckGracePeriodInput() {
        return this._healthCheckGracePeriod;
    }

    // health_check_type - computed: true, optional: true, required: false
    private _healthCheckType?: string; 
    public get healthCheckType() {
        return this.getStringAttribute('health_check_type');
    }
    public set healthCheckType(value: string) {
        this._healthCheckType = value;
    }
    public resetHealthCheckType() {
        this._healthCheckType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckTypeInput() {
        return this._healthCheckType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // instance_lifecycle_policy - computed: true, optional: true, required: false
    private _instanceLifecyclePolicy = new CcAutoScalingGroup.InstanceLifecyclePolicyPropertyOutputReference(this, "instance_lifecycle_policy");
    public get instanceLifecyclePolicy() {
        return this._instanceLifecyclePolicy;
    }
    public putInstanceLifecyclePolicy(value: CcAutoScalingGroup.InstanceLifecyclePolicyProperty) {
        this._instanceLifecyclePolicy.internalValue = value;
    }
    public resetInstanceLifecyclePolicy() {
        this._instanceLifecyclePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceLifecyclePolicyInput() {
        return this._instanceLifecyclePolicy.internalValue;
    }

    // instance_maintenance_policy - computed: true, optional: true, required: false
    private _instanceMaintenancePolicy = new CcAutoScalingGroup.InstanceMaintenancePolicyPropertyOutputReference(this, "instance_maintenance_policy");
    public get instanceMaintenancePolicy() {
        return this._instanceMaintenancePolicy;
    }
    public putInstanceMaintenancePolicy(value: CcAutoScalingGroup.InstanceMaintenancePolicyProperty) {
        this._instanceMaintenancePolicy.internalValue = value;
    }
    public resetInstanceMaintenancePolicy() {
        this._instanceMaintenancePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMaintenancePolicyInput() {
        return this._instanceMaintenancePolicy.internalValue;
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

    // launch_template - computed: true, optional: true, required: false
    private _launchTemplate = new CcAutoScalingGroup.LaunchTemplateSpecificationPropertyOutputReference(this, "launch_template");
    public get launchTemplate() {
        return this._launchTemplate;
    }
    public putLaunchTemplate(value: CcAutoScalingGroup.LaunchTemplateSpecificationProperty) {
        this._launchTemplate.internalValue = value;
    }
    public resetLaunchTemplate() {
        this._launchTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateInput() {
        return this._launchTemplate.internalValue;
    }

    // lifecycle_hook_specification_list - computed: true, optional: true, required: false
    private _lifecycleHookSpecificationList = new CcAutoScalingGroup.LifecycleHookSpecificationPropertyList(this, "lifecycle_hook_specification_list", false);
    public get lifecycleHookSpecificationList() {
        return this._lifecycleHookSpecificationList;
    }
    public putLifecycleHookSpecificationList(value: CcAutoScalingGroup.LifecycleHookSpecificationProperty[] | cdktn.IResolvable) {
        this._lifecycleHookSpecificationList.internalValue = value;
    }
    public resetLifecycleHookSpecificationList() {
        this._lifecycleHookSpecificationList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleHookSpecificationListInput() {
        return this._lifecycleHookSpecificationList.internalValue;
    }

    // load_balancer_names - computed: true, optional: true, required: false
    private _loadBalancerNames?: string[]; 
    public get loadBalancerNames() {
        return this.getListAttribute('load_balancer_names');
    }
    public set loadBalancerNames(value: string[]) {
        this._loadBalancerNames = value;
    }
    public resetLoadBalancerNames() {
        this._loadBalancerNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerNamesInput() {
        return this._loadBalancerNames;
    }

    // max_instance_lifetime - computed: true, optional: true, required: false
    private _maxInstanceLifetime?: number; 
    public get maxInstanceLifetime() {
        return this.getNumberAttribute('max_instance_lifetime');
    }
    public set maxInstanceLifetime(value: number) {
        this._maxInstanceLifetime = value;
    }
    public resetMaxInstanceLifetime() {
        this._maxInstanceLifetime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInstanceLifetimeInput() {
        return this._maxInstanceLifetime;
    }

    // max_size - computed: false, optional: false, required: true
    private _maxSize?: string; 
    public get maxSize() {
        return this.getStringAttribute('max_size');
    }
    public set maxSize(value: string) {
        this._maxSize = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSizeInput() {
        return this._maxSize;
    }

    // metrics_collection - computed: true, optional: true, required: false
    private _metricsCollection = new CcAutoScalingGroup.MetricsCollectionPropertyList(this, "metrics_collection", false);
    public get metricsCollection() {
        return this._metricsCollection;
    }
    public putMetricsCollection(value: CcAutoScalingGroup.MetricsCollectionProperty[] | cdktn.IResolvable) {
        this._metricsCollection.internalValue = value;
    }
    public resetMetricsCollection() {
        this._metricsCollection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsCollectionInput() {
        return this._metricsCollection.internalValue;
    }

    // min_size - computed: false, optional: false, required: true
    private _minSize?: string; 
    public get minSize() {
        return this.getStringAttribute('min_size');
    }
    public set minSize(value: string) {
        this._minSize = value;
    }
    // Temporarily expose input value. Use with caution.
    public get minSizeInput() {
        return this._minSize;
    }

    // mixed_instances_policy - computed: true, optional: true, required: false
    private _mixedInstancesPolicy = new CcAutoScalingGroup.MixedInstancesPolicyPropertyOutputReference(this, "mixed_instances_policy");
    public get mixedInstancesPolicy() {
        return this._mixedInstancesPolicy;
    }
    public putMixedInstancesPolicy(value: CcAutoScalingGroup.MixedInstancesPolicyProperty) {
        this._mixedInstancesPolicy.internalValue = value;
    }
    public resetMixedInstancesPolicy() {
        this._mixedInstancesPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mixedInstancesPolicyInput() {
        return this._mixedInstancesPolicy.internalValue;
    }

    // new_instances_protected_from_scale_in - computed: true, optional: true, required: false
    private _newInstancesProtectedFromScaleIn?: boolean | cdktn.IResolvable; 
    public get newInstancesProtectedFromScaleIn() {
        return this.getBooleanAttribute('new_instances_protected_from_scale_in');
    }
    public set newInstancesProtectedFromScaleIn(value: boolean | cdktn.IResolvable) {
        this._newInstancesProtectedFromScaleIn = value;
    }
    public resetNewInstancesProtectedFromScaleIn() {
        this._newInstancesProtectedFromScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get newInstancesProtectedFromScaleInInput() {
        return this._newInstancesProtectedFromScaleIn;
    }

    // notification_configuration - computed: true, optional: true, required: false
    private _notificationConfiguration = new CcAutoScalingGroup.NotificationConfigurationPropertyOutputReference(this, "notification_configuration");
    public get notificationConfiguration() {
        return this._notificationConfiguration;
    }
    public putNotificationConfiguration(value: CcAutoScalingGroup.NotificationConfigurationProperty) {
        this._notificationConfiguration.internalValue = value;
    }
    public resetNotificationConfiguration() {
        this._notificationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationConfigurationInput() {
        return this._notificationConfiguration.internalValue;
    }

    // notification_configurations - computed: true, optional: true, required: false
    private _notificationConfigurations = new CcAutoScalingGroup.NotificationConfigurationsPropertyList(this, "notification_configurations", false);
    public get notificationConfigurations() {
        return this._notificationConfigurations;
    }
    public putNotificationConfigurations(value: CcAutoScalingGroup.NotificationConfigurationsProperty[] | cdktn.IResolvable) {
        this._notificationConfigurations.internalValue = value;
    }
    public resetNotificationConfigurations() {
        this._notificationConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationConfigurationsInput() {
        return this._notificationConfigurations.internalValue;
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

    // service_linked_role_arn - computed: true, optional: true, required: false
    private _serviceLinkedRoleArn?: string; 
    public get serviceLinkedRoleArn() {
        return this.getStringAttribute('service_linked_role_arn');
    }
    public set serviceLinkedRoleArn(value: string) {
        this._serviceLinkedRoleArn = value;
    }
    public resetServiceLinkedRoleArn() {
        this._serviceLinkedRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceLinkedRoleArnInput() {
        return this._serviceLinkedRoleArn;
    }

    // skip_zonal_shift_validation - computed: true, optional: true, required: false
    private _skipZonalShiftValidation?: boolean | cdktn.IResolvable; 
    public get skipZonalShiftValidation() {
        return this.getBooleanAttribute('skip_zonal_shift_validation');
    }
    public set skipZonalShiftValidation(value: boolean | cdktn.IResolvable) {
        this._skipZonalShiftValidation = value;
    }
    public resetSkipZonalShiftValidation() {
        this._skipZonalShiftValidation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skipZonalShiftValidationInput() {
        return this._skipZonalShiftValidation;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAutoScalingGroup.TagPropertyPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAutoScalingGroup.TagPropertyProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_group_ar_ns - computed: true, optional: true, required: false
    private _targetGroupArNs?: string[]; 
    public get targetGroupArNs() {
        return this.getListAttribute('target_group_ar_ns');
    }
    public set targetGroupArNs(value: string[]) {
        this._targetGroupArNs = value;
    }
    public resetTargetGroupArNs() {
        this._targetGroupArNs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupArNsInput() {
        return this._targetGroupArNs;
    }

    // termination_policies - computed: true, optional: true, required: false
    private _terminationPolicies?: string[]; 
    public get terminationPolicies() {
        return this.getListAttribute('termination_policies');
    }
    public set terminationPolicies(value: string[]) {
        this._terminationPolicies = value;
    }
    public resetTerminationPolicies() {
        this._terminationPolicies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminationPoliciesInput() {
        return this._terminationPolicies;
    }

    // traffic_sources - computed: true, optional: true, required: false
    private _trafficSources = new CcAutoScalingGroup.TrafficSourceIdentifierPropertyList(this, "traffic_sources", true);
    public get trafficSources() {
        return this._trafficSources;
    }
    public putTrafficSources(value: CcAutoScalingGroup.TrafficSourceIdentifierProperty[] | cdktn.IResolvable) {
        this._trafficSources.internalValue = value;
    }
    public resetTrafficSources() {
        this._trafficSources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficSourcesInput() {
        return this._trafficSources.internalValue;
    }

    // vpc_zone_identifier - computed: true, optional: true, required: false
    private _vpcZoneIdentifier?: string[]; 
    public get vpcZoneIdentifier() {
        return this.getListAttribute('vpc_zone_identifier');
    }
    public set vpcZoneIdentifier(value: string[]) {
        this._vpcZoneIdentifier = value;
    }
    public resetVpcZoneIdentifier() {
        this._vpcZoneIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcZoneIdentifierInput() {
        return this._vpcZoneIdentifier;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_scaling_group_name: cdktn.stringToTerraform(this._autoScalingGroupName),
            availability_zone_distribution: ccAutoScalingGroupAvailabilityZoneDistributionPropertyToTerraform(this._availabilityZoneDistribution.internalValue),
            availability_zone_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._availabilityZoneIds),
            availability_zone_impairment_policy: ccAutoScalingGroupAvailabilityZoneImpairmentPolicyPropertyToTerraform(this._availabilityZoneImpairmentPolicy.internalValue),
            availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._availabilityZones),
            capacity_rebalance: cdktn.booleanToTerraform(this._capacityRebalance),
            capacity_reservation_specification: ccAutoScalingGroupCapacityReservationSpecificationPropertyToTerraform(this._capacityReservationSpecification.internalValue),
            context: cdktn.stringToTerraform(this._context),
            cooldown: cdktn.stringToTerraform(this._cooldown),
            default_instance_warmup: cdktn.numberToTerraform(this._defaultInstanceWarmup),
            deletion_protection: cdktn.stringToTerraform(this._deletionProtection),
            desired_capacity: cdktn.stringToTerraform(this._desiredCapacity),
            desired_capacity_type: cdktn.stringToTerraform(this._desiredCapacityType),
            health_check_grace_period: cdktn.numberToTerraform(this._healthCheckGracePeriod),
            health_check_type: cdktn.stringToTerraform(this._healthCheckType),
            instance_id: cdktn.stringToTerraform(this._instanceId),
            instance_lifecycle_policy: ccAutoScalingGroupInstanceLifecyclePolicyPropertyToTerraform(this._instanceLifecyclePolicy.internalValue),
            instance_maintenance_policy: ccAutoScalingGroupInstanceMaintenancePolicyPropertyToTerraform(this._instanceMaintenancePolicy.internalValue),
            launch_configuration_name: cdktn.stringToTerraform(this._launchConfigurationName),
            launch_template: ccAutoScalingGroupLaunchTemplateSpecificationPropertyToTerraform(this._launchTemplate.internalValue),
            lifecycle_hook_specification_list: cdktn.listMapper(ccAutoScalingGroupLifecycleHookSpecificationPropertyToTerraform, false)(this._lifecycleHookSpecificationList.internalValue),
            load_balancer_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._loadBalancerNames),
            max_instance_lifetime: cdktn.numberToTerraform(this._maxInstanceLifetime),
            max_size: cdktn.stringToTerraform(this._maxSize),
            metrics_collection: cdktn.listMapper(ccAutoScalingGroupMetricsCollectionPropertyToTerraform, false)(this._metricsCollection.internalValue),
            min_size: cdktn.stringToTerraform(this._minSize),
            mixed_instances_policy: ccAutoScalingGroupMixedInstancesPolicyPropertyToTerraform(this._mixedInstancesPolicy.internalValue),
            new_instances_protected_from_scale_in: cdktn.booleanToTerraform(this._newInstancesProtectedFromScaleIn),
            notification_configuration: ccAutoScalingGroupNotificationConfigurationPropertyToTerraform(this._notificationConfiguration.internalValue),
            notification_configurations: cdktn.listMapper(ccAutoScalingGroupNotificationConfigurationsPropertyToTerraform, false)(this._notificationConfigurations.internalValue),
            placement_group: cdktn.stringToTerraform(this._placementGroup),
            service_linked_role_arn: cdktn.stringToTerraform(this._serviceLinkedRoleArn),
            skip_zonal_shift_validation: cdktn.booleanToTerraform(this._skipZonalShiftValidation),
            tags: cdktn.listMapper(ccAutoScalingGroupTagPropertyPropertyToTerraform, false)(this._tags.internalValue),
            target_group_ar_ns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targetGroupArNs),
            termination_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._terminationPolicies),
            traffic_sources: cdktn.listMapper(ccAutoScalingGroupTrafficSourceIdentifierPropertyToTerraform, false)(this._trafficSources.internalValue),
            vpc_zone_identifier: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcZoneIdentifier),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_scaling_group_name: {
                value: cdktn.stringToHclTerraform(this._autoScalingGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            availability_zone_distribution: {
                value: ccAutoScalingGroupAvailabilityZoneDistributionPropertyToHclTerraform(this._availabilityZoneDistribution.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAutoScalingGroup.AvailabilityZoneDistributionProperty",
            },
            availability_zone_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._availabilityZoneIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            availability_zone_impairment_policy: {
                value: ccAutoScalingGroupAvailabilityZoneImpairmentPolicyPropertyToHclTerraform(this._availabilityZoneImpairmentPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAutoScalingGroup.AvailabilityZoneImpairmentPolicyProperty",
            },
            availability_zones: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._availabilityZones),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            capacity_rebalance: {
                value: cdktn.booleanToHclTerraform(this._capacityRebalance),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            capacity_reservation_specification: {
                value: ccAutoScalingGroupCapacityReservationSpecificationPropertyToHclTerraform(this._capacityReservationSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAutoScalingGroup.CapacityReservationSpecificationProperty",
            },
            context: {
                value: cdktn.stringToHclTerraform(this._context),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cooldown: {
                value: cdktn.stringToHclTerraform(this._cooldown),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_instance_warmup: {
                value: cdktn.numberToHclTerraform(this._defaultInstanceWarmup),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            deletion_protection: {
                value: cdktn.stringToHclTerraform(this._deletionProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            desired_capacity: {
                value: cdktn.stringToHclTerraform(this._desiredCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            desired_capacity_type: {
                value: cdktn.stringToHclTerraform(this._desiredCapacityType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            health_check_grace_period: {
                value: cdktn.numberToHclTerraform(this._healthCheckGracePeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            health_check_type: {
                value: cdktn.stringToHclTerraform(this._healthCheckType),
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
            instance_lifecycle_policy: {
                value: ccAutoScalingGroupInstanceLifecyclePolicyPropertyToHclTerraform(this._instanceLifecyclePolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAutoScalingGroup.InstanceLifecyclePolicyProperty",
            },
            instance_maintenance_policy: {
                value: ccAutoScalingGroupInstanceMaintenancePolicyPropertyToHclTerraform(this._instanceMaintenancePolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAutoScalingGroup.InstanceMaintenancePolicyProperty",
            },
            launch_configuration_name: {
                value: cdktn.stringToHclTerraform(this._launchConfigurationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            launch_template: {
                value: ccAutoScalingGroupLaunchTemplateSpecificationPropertyToHclTerraform(this._launchTemplate.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAutoScalingGroup.LaunchTemplateSpecificationProperty",
            },
            lifecycle_hook_specification_list: {
                value: cdktn.listMapperHcl(ccAutoScalingGroupLifecycleHookSpecificationPropertyToHclTerraform, false)(this._lifecycleHookSpecificationList.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAutoScalingGroup.LifecycleHookSpecificationPropertyList",
            },
            load_balancer_names: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._loadBalancerNames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            max_instance_lifetime: {
                value: cdktn.numberToHclTerraform(this._maxInstanceLifetime),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_size: {
                value: cdktn.stringToHclTerraform(this._maxSize),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metrics_collection: {
                value: cdktn.listMapperHcl(ccAutoScalingGroupMetricsCollectionPropertyToHclTerraform, false)(this._metricsCollection.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAutoScalingGroup.MetricsCollectionPropertyList",
            },
            min_size: {
                value: cdktn.stringToHclTerraform(this._minSize),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mixed_instances_policy: {
                value: ccAutoScalingGroupMixedInstancesPolicyPropertyToHclTerraform(this._mixedInstancesPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAutoScalingGroup.MixedInstancesPolicyProperty",
            },
            new_instances_protected_from_scale_in: {
                value: cdktn.booleanToHclTerraform(this._newInstancesProtectedFromScaleIn),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            notification_configuration: {
                value: ccAutoScalingGroupNotificationConfigurationPropertyToHclTerraform(this._notificationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAutoScalingGroup.NotificationConfigurationProperty",
            },
            notification_configurations: {
                value: cdktn.listMapperHcl(ccAutoScalingGroupNotificationConfigurationsPropertyToHclTerraform, false)(this._notificationConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAutoScalingGroup.NotificationConfigurationsPropertyList",
            },
            placement_group: {
                value: cdktn.stringToHclTerraform(this._placementGroup),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_linked_role_arn: {
                value: cdktn.stringToHclTerraform(this._serviceLinkedRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            skip_zonal_shift_validation: {
                value: cdktn.booleanToHclTerraform(this._skipZonalShiftValidation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAutoScalingGroupTagPropertyPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAutoScalingGroup.TagPropertyPropertyList",
            },
            target_group_ar_ns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targetGroupArNs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            termination_policies: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._terminationPolicies),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            traffic_sources: {
                value: cdktn.listMapperHcl(ccAutoScalingGroupTrafficSourceIdentifierPropertyToHclTerraform, false)(this._trafficSources.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAutoScalingGroup.TrafficSourceIdentifierPropertyList",
            },
            vpc_zone_identifier: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcZoneIdentifier),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAutoScalingGroupAvailabilityZoneDistributionPropertyToTerraform(struct?: CcAutoScalingGroup.AvailabilityZoneDistributionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_distribution_strategy: cdktn.stringToTerraform(struct!.capacityDistributionStrategy),
    }
}


export function ccAutoScalingGroupAvailabilityZoneDistributionPropertyToHclTerraform(struct?: CcAutoScalingGroup.AvailabilityZoneDistributionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_distribution_strategy: {
            value: cdktn.stringToHclTerraform(struct!.capacityDistributionStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupAvailabilityZoneImpairmentPolicyPropertyToTerraform(struct?: CcAutoScalingGroup.AvailabilityZoneImpairmentPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        impaired_zone_health_check_behavior: cdktn.stringToTerraform(struct!.impairedZoneHealthCheckBehavior),
        zonal_shift_enabled: cdktn.booleanToTerraform(struct!.zonalShiftEnabled),
    }
}


export function ccAutoScalingGroupAvailabilityZoneImpairmentPolicyPropertyToHclTerraform(struct?: CcAutoScalingGroup.AvailabilityZoneImpairmentPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        impaired_zone_health_check_behavior: {
            value: cdktn.stringToHclTerraform(struct!.impairedZoneHealthCheckBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zonal_shift_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.zonalShiftEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupCapacityReservationTargetPropertyToTerraform(struct?: CcAutoScalingGroup.CapacityReservationTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.capacityReservationIds),
        capacity_reservation_resource_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.capacityReservationResourceGroupArns),
    }
}


export function ccAutoScalingGroupCapacityReservationTargetPropertyToHclTerraform(struct?: CcAutoScalingGroup.CapacityReservationTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_reservation_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.capacityReservationIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        capacity_reservation_resource_group_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.capacityReservationResourceGroupArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupCapacityReservationSpecificationPropertyToTerraform(struct?: CcAutoScalingGroup.CapacityReservationSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_preference: cdktn.stringToTerraform(struct!.capacityReservationPreference),
        capacity_reservation_target: ccAutoScalingGroupCapacityReservationTargetPropertyToTerraform(struct!.capacityReservationTarget),
    }
}


export function ccAutoScalingGroupCapacityReservationSpecificationPropertyToHclTerraform(struct?: CcAutoScalingGroup.CapacityReservationSpecificationProperty | cdktn.IResolvable): any {
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
            value: ccAutoScalingGroupCapacityReservationTargetPropertyToHclTerraform(struct!.capacityReservationTarget),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityReservationTargetProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupRetentionTriggersPropertyToTerraform(struct?: CcAutoScalingGroup.RetentionTriggersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        terminate_hook_abandon: cdktn.stringToTerraform(struct!.terminateHookAbandon),
    }
}


export function ccAutoScalingGroupRetentionTriggersPropertyToHclTerraform(struct?: CcAutoScalingGroup.RetentionTriggersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        terminate_hook_abandon: {
            value: cdktn.stringToHclTerraform(struct!.terminateHookAbandon),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupInstanceLifecyclePolicyPropertyToTerraform(struct?: CcAutoScalingGroup.InstanceLifecyclePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        retention_triggers: ccAutoScalingGroupRetentionTriggersPropertyToTerraform(struct!.retentionTriggers),
    }
}


export function ccAutoScalingGroupInstanceLifecyclePolicyPropertyToHclTerraform(struct?: CcAutoScalingGroup.InstanceLifecyclePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        retention_triggers: {
            value: ccAutoScalingGroupRetentionTriggersPropertyToHclTerraform(struct!.retentionTriggers),
            isBlock: true,
            type: "struct",
            storageClassType: "RetentionTriggersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupInstanceMaintenancePolicyPropertyToTerraform(struct?: CcAutoScalingGroup.InstanceMaintenancePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_healthy_percentage: cdktn.numberToTerraform(struct!.maxHealthyPercentage),
        min_healthy_percentage: cdktn.numberToTerraform(struct!.minHealthyPercentage),
    }
}


export function ccAutoScalingGroupInstanceMaintenancePolicyPropertyToHclTerraform(struct?: CcAutoScalingGroup.InstanceMaintenancePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_healthy_percentage: {
            value: cdktn.numberToHclTerraform(struct!.maxHealthyPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_healthy_percentage: {
            value: cdktn.numberToHclTerraform(struct!.minHealthyPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupLaunchTemplateSpecificationPropertyToTerraform(struct?: CcAutoScalingGroup.LaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupLaunchTemplateSpecificationPropertyToHclTerraform(struct?: CcAutoScalingGroup.LaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupLifecycleHookSpecificationPropertyToTerraform(struct?: CcAutoScalingGroup.LifecycleHookSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_result: cdktn.stringToTerraform(struct!.defaultResult),
        heartbeat_timeout: cdktn.numberToTerraform(struct!.heartbeatTimeout),
        lifecycle_hook_name: cdktn.stringToTerraform(struct!.lifecycleHookName),
        lifecycle_transition: cdktn.stringToTerraform(struct!.lifecycleTransition),
        notification_metadata: cdktn.stringToTerraform(struct!.notificationMetadata),
        notification_target_arn: cdktn.stringToTerraform(struct!.notificationTargetArn),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccAutoScalingGroupLifecycleHookSpecificationPropertyToHclTerraform(struct?: CcAutoScalingGroup.LifecycleHookSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_result: {
            value: cdktn.stringToHclTerraform(struct!.defaultResult),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        heartbeat_timeout: {
            value: cdktn.numberToHclTerraform(struct!.heartbeatTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lifecycle_hook_name: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleHookName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_transition: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleTransition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notification_metadata: {
            value: cdktn.stringToHclTerraform(struct!.notificationMetadata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notification_target_arn: {
            value: cdktn.stringToHclTerraform(struct!.notificationTargetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupMetricsCollectionPropertyToTerraform(struct?: CcAutoScalingGroup.MetricsCollectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        granularity: cdktn.stringToTerraform(struct!.granularity),
        metrics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metrics),
    }
}


export function ccAutoScalingGroupMetricsCollectionPropertyToHclTerraform(struct?: CcAutoScalingGroup.MetricsCollectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        granularity: {
            value: cdktn.stringToHclTerraform(struct!.granularity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metrics: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metrics),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupDistributionSegmentPropertyToTerraform(struct?: CcAutoScalingGroup.DistributionSegmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_capacity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetCapacityTypes),
    }
}


export function ccAutoScalingGroupDistributionSegmentPropertyToHclTerraform(struct?: CcAutoScalingGroup.DistributionSegmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_capacity_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetCapacityTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupInstancesDistributionPropertyToTerraform(struct?: CcAutoScalingGroup.InstancesDistributionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        distribution_segments: cdktn.listMapper(ccAutoScalingGroupDistributionSegmentPropertyToTerraform, false)(struct!.distributionSegments),
        on_demand_allocation_strategy: cdktn.stringToTerraform(struct!.onDemandAllocationStrategy),
        on_demand_base_capacity: cdktn.numberToTerraform(struct!.onDemandBaseCapacity),
        on_demand_percentage_above_base_capacity: cdktn.numberToTerraform(struct!.onDemandPercentageAboveBaseCapacity),
        spot_allocation_strategy: cdktn.stringToTerraform(struct!.spotAllocationStrategy),
        spot_instance_pools: cdktn.numberToTerraform(struct!.spotInstancePools),
        spot_max_price: cdktn.stringToTerraform(struct!.spotMaxPrice),
    }
}


export function ccAutoScalingGroupInstancesDistributionPropertyToHclTerraform(struct?: CcAutoScalingGroup.InstancesDistributionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        distribution_segments: {
            value: cdktn.listMapperHcl(ccAutoScalingGroupDistributionSegmentPropertyToHclTerraform, false)(struct!.distributionSegments),
            isBlock: true,
            type: "list",
            storageClassType: "DistributionSegmentPropertyList",
        },
        on_demand_allocation_strategy: {
            value: cdktn.stringToHclTerraform(struct!.onDemandAllocationStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_demand_base_capacity: {
            value: cdktn.numberToHclTerraform(struct!.onDemandBaseCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        on_demand_percentage_above_base_capacity: {
            value: cdktn.numberToHclTerraform(struct!.onDemandPercentageAboveBaseCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        spot_allocation_strategy: {
            value: cdktn.stringToHclTerraform(struct!.spotAllocationStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spot_instance_pools: {
            value: cdktn.numberToHclTerraform(struct!.spotInstancePools),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        spot_max_price: {
            value: cdktn.stringToHclTerraform(struct!.spotMaxPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyToTerraform(struct?: CcAutoScalingGroup.MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyToHclTerraform(struct?: CcAutoScalingGroup.MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupAcceleratorCountRequestPropertyToTerraform(struct?: CcAutoScalingGroup.AcceleratorCountRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccAutoScalingGroupAcceleratorCountRequestPropertyToHclTerraform(struct?: CcAutoScalingGroup.AcceleratorCountRequestProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupAcceleratorTotalMemoryMiBRequestPropertyToTerraform(struct?: CcAutoScalingGroup.AcceleratorTotalMemoryMiBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccAutoScalingGroupAcceleratorTotalMemoryMiBRequestPropertyToHclTerraform(struct?: CcAutoScalingGroup.AcceleratorTotalMemoryMiBRequestProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupBaselineEbsBandwidthMbpsRequestPropertyToTerraform(struct?: CcAutoScalingGroup.BaselineEbsBandwidthMbpsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccAutoScalingGroupBaselineEbsBandwidthMbpsRequestPropertyToHclTerraform(struct?: CcAutoScalingGroup.BaselineEbsBandwidthMbpsRequestProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupPerformanceFactorReferenceRequestPropertyToTerraform(struct?: CcAutoScalingGroup.PerformanceFactorReferenceRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_family: cdktn.stringToTerraform(struct!.instanceFamily),
    }
}


export function ccAutoScalingGroupPerformanceFactorReferenceRequestPropertyToHclTerraform(struct?: CcAutoScalingGroup.PerformanceFactorReferenceRequestProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupCpuPerformanceFactorRequestPropertyToTerraform(struct?: CcAutoScalingGroup.CpuPerformanceFactorRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        references: cdktn.listMapper(ccAutoScalingGroupPerformanceFactorReferenceRequestPropertyToTerraform, false)(struct!.references),
    }
}


export function ccAutoScalingGroupCpuPerformanceFactorRequestPropertyToHclTerraform(struct?: CcAutoScalingGroup.CpuPerformanceFactorRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        references: {
            value: cdktn.listMapperHcl(ccAutoScalingGroupPerformanceFactorReferenceRequestPropertyToHclTerraform, false)(struct!.references),
            isBlock: true,
            type: "list",
            storageClassType: "PerformanceFactorReferenceRequestPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupBaselinePerformanceFactorsRequestPropertyToTerraform(struct?: CcAutoScalingGroup.BaselinePerformanceFactorsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu: ccAutoScalingGroupCpuPerformanceFactorRequestPropertyToTerraform(struct!.cpu),
    }
}


export function ccAutoScalingGroupBaselinePerformanceFactorsRequestPropertyToHclTerraform(struct?: CcAutoScalingGroup.BaselinePerformanceFactorsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpu: {
            value: ccAutoScalingGroupCpuPerformanceFactorRequestPropertyToHclTerraform(struct!.cpu),
            isBlock: true,
            type: "struct",
            storageClassType: "CpuPerformanceFactorRequestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupMemoryGiBPerVCpuRequestPropertyToTerraform(struct?: CcAutoScalingGroup.MemoryGiBPerVCpuRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccAutoScalingGroupMemoryGiBPerVCpuRequestPropertyToHclTerraform(struct?: CcAutoScalingGroup.MemoryGiBPerVCpuRequestProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupMemoryMiBRequestPropertyToTerraform(struct?: CcAutoScalingGroup.MemoryMiBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccAutoScalingGroupMemoryMiBRequestPropertyToHclTerraform(struct?: CcAutoScalingGroup.MemoryMiBRequestProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupNetworkBandwidthGbpsRequestPropertyToTerraform(struct?: CcAutoScalingGroup.NetworkBandwidthGbpsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccAutoScalingGroupNetworkBandwidthGbpsRequestPropertyToHclTerraform(struct?: CcAutoScalingGroup.NetworkBandwidthGbpsRequestProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupNetworkInterfaceCountRequestPropertyToTerraform(struct?: CcAutoScalingGroup.NetworkInterfaceCountRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccAutoScalingGroupNetworkInterfaceCountRequestPropertyToHclTerraform(struct?: CcAutoScalingGroup.NetworkInterfaceCountRequestProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupTotalLocalStorageGBRequestPropertyToTerraform(struct?: CcAutoScalingGroup.TotalLocalStorageGBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccAutoScalingGroupTotalLocalStorageGBRequestPropertyToHclTerraform(struct?: CcAutoScalingGroup.TotalLocalStorageGBRequestProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupVCpuCountRequestPropertyToTerraform(struct?: CcAutoScalingGroup.VCpuCountRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccAutoScalingGroupVCpuCountRequestPropertyToHclTerraform(struct?: CcAutoScalingGroup.VCpuCountRequestProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupInstanceRequirementsPropertyToTerraform(struct?: CcAutoScalingGroup.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accelerator_count: ccAutoScalingGroupAcceleratorCountRequestPropertyToTerraform(struct!.acceleratorCount),
        accelerator_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorManufacturers),
        accelerator_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorNames),
        accelerator_total_memory_mi_b: ccAutoScalingGroupAcceleratorTotalMemoryMiBRequestPropertyToTerraform(struct!.acceleratorTotalMemoryMiB),
        accelerator_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorTypes),
        allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
        bare_metal: cdktn.stringToTerraform(struct!.bareMetal),
        baseline_ebs_bandwidth_mbps: ccAutoScalingGroupBaselineEbsBandwidthMbpsRequestPropertyToTerraform(struct!.baselineEbsBandwidthMbps),
        baseline_performance_factors: ccAutoScalingGroupBaselinePerformanceFactorsRequestPropertyToTerraform(struct!.baselinePerformanceFactors),
        burstable_performance: cdktn.stringToTerraform(struct!.burstablePerformance),
        cpu_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cpuManufacturers),
        excluded_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedInstanceTypes),
        instance_generations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGenerations),
        local_storage: cdktn.stringToTerraform(struct!.localStorage),
        local_storage_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.localStorageTypes),
        max_spot_price_as_percentage_of_optimal_on_demand_price: cdktn.numberToTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
        memory_gi_b_per_v_cpu: ccAutoScalingGroupMemoryGiBPerVCpuRequestPropertyToTerraform(struct!.memoryGiBPerVCpu),
        memory_mi_b: ccAutoScalingGroupMemoryMiBRequestPropertyToTerraform(struct!.memoryMiB),
        network_bandwidth_gbps: ccAutoScalingGroupNetworkBandwidthGbpsRequestPropertyToTerraform(struct!.networkBandwidthGbps),
        network_interface_count: ccAutoScalingGroupNetworkInterfaceCountRequestPropertyToTerraform(struct!.networkInterfaceCount),
        on_demand_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
        require_hibernate_support: cdktn.booleanToTerraform(struct!.requireHibernateSupport),
        spot_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
        total_local_storage_gb: ccAutoScalingGroupTotalLocalStorageGBRequestPropertyToTerraform(struct!.totalLocalStorageGb),
        v_cpu_count: ccAutoScalingGroupVCpuCountRequestPropertyToTerraform(struct!.vCpuCount),
    }
}


export function ccAutoScalingGroupInstanceRequirementsPropertyToHclTerraform(struct?: CcAutoScalingGroup.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accelerator_count: {
            value: ccAutoScalingGroupAcceleratorCountRequestPropertyToHclTerraform(struct!.acceleratorCount),
            isBlock: true,
            type: "struct",
            storageClassType: "AcceleratorCountRequestProperty",
        },
        accelerator_manufacturers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorManufacturers),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        accelerator_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorNames),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        accelerator_total_memory_mi_b: {
            value: ccAutoScalingGroupAcceleratorTotalMemoryMiBRequestPropertyToHclTerraform(struct!.acceleratorTotalMemoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "AcceleratorTotalMemoryMiBRequestProperty",
        },
        accelerator_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorTypes),
            isBlock: false,
            type: "set",
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
            value: ccAutoScalingGroupBaselineEbsBandwidthMbpsRequestPropertyToHclTerraform(struct!.baselineEbsBandwidthMbps),
            isBlock: true,
            type: "struct",
            storageClassType: "BaselineEbsBandwidthMbpsRequestProperty",
        },
        baseline_performance_factors: {
            value: ccAutoScalingGroupBaselinePerformanceFactorsRequestPropertyToHclTerraform(struct!.baselinePerformanceFactors),
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
            type: "set",
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
            type: "set",
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
            type: "set",
            storageClassType: "stringList",
        },
        max_spot_price_as_percentage_of_optimal_on_demand_price: {
            value: cdktn.numberToHclTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        memory_gi_b_per_v_cpu: {
            value: ccAutoScalingGroupMemoryGiBPerVCpuRequestPropertyToHclTerraform(struct!.memoryGiBPerVCpu),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryGiBPerVCpuRequestProperty",
        },
        memory_mi_b: {
            value: ccAutoScalingGroupMemoryMiBRequestPropertyToHclTerraform(struct!.memoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryMiBRequestProperty",
        },
        network_bandwidth_gbps: {
            value: ccAutoScalingGroupNetworkBandwidthGbpsRequestPropertyToHclTerraform(struct!.networkBandwidthGbps),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkBandwidthGbpsRequestProperty",
        },
        network_interface_count: {
            value: ccAutoScalingGroupNetworkInterfaceCountRequestPropertyToHclTerraform(struct!.networkInterfaceCount),
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
            value: ccAutoScalingGroupTotalLocalStorageGBRequestPropertyToHclTerraform(struct!.totalLocalStorageGb),
            isBlock: true,
            type: "struct",
            storageClassType: "TotalLocalStorageGBRequestProperty",
        },
        v_cpu_count: {
            value: ccAutoScalingGroupVCpuCountRequestPropertyToHclTerraform(struct!.vCpuCount),
            isBlock: true,
            type: "struct",
            storageClassType: "VCpuCountRequestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationPropertyToTerraform(struct?: CcAutoScalingGroup.MixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationPropertyToHclTerraform(struct?: CcAutoScalingGroup.MixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
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


export function ccAutoScalingGroupLaunchTemplateOverridesPropertyToTerraform(struct?: CcAutoScalingGroup.LaunchTemplateOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_id: cdktn.stringToTerraform(struct!.imageId),
        instance_requirements: ccAutoScalingGroupInstanceRequirementsPropertyToTerraform(struct!.instanceRequirements),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        launch_template_specification: ccAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationPropertyToTerraform(struct!.launchTemplateSpecification),
        weighted_capacity: cdktn.stringToTerraform(struct!.weightedCapacity),
    }
}


export function ccAutoScalingGroupLaunchTemplateOverridesPropertyToHclTerraform(struct?: CcAutoScalingGroup.LaunchTemplateOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        image_id: {
            value: cdktn.stringToHclTerraform(struct!.imageId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_requirements: {
            value: ccAutoScalingGroupInstanceRequirementsPropertyToHclTerraform(struct!.instanceRequirements),
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
        launch_template_specification: {
            value: ccAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationPropertyToHclTerraform(struct!.launchTemplateSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "MixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationProperty",
        },
        weighted_capacity: {
            value: cdktn.stringToHclTerraform(struct!.weightedCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupLaunchTemplatePropertyToTerraform(struct?: CcAutoScalingGroup.LaunchTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        launch_template_specification: ccAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyToTerraform(struct!.launchTemplateSpecification),
        overrides: cdktn.listMapper(ccAutoScalingGroupLaunchTemplateOverridesPropertyToTerraform, false)(struct!.overrides),
    }
}


export function ccAutoScalingGroupLaunchTemplatePropertyToHclTerraform(struct?: CcAutoScalingGroup.LaunchTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        launch_template_specification: {
            value: ccAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyToHclTerraform(struct!.launchTemplateSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty",
        },
        overrides: {
            value: cdktn.listMapperHcl(ccAutoScalingGroupLaunchTemplateOverridesPropertyToHclTerraform, false)(struct!.overrides),
            isBlock: true,
            type: "list",
            storageClassType: "LaunchTemplateOverridesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupMixedInstancesPolicyPropertyToTerraform(struct?: CcAutoScalingGroup.MixedInstancesPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instances_distribution: ccAutoScalingGroupInstancesDistributionPropertyToTerraform(struct!.instancesDistribution),
        launch_template: ccAutoScalingGroupLaunchTemplatePropertyToTerraform(struct!.launchTemplate),
    }
}


export function ccAutoScalingGroupMixedInstancesPolicyPropertyToHclTerraform(struct?: CcAutoScalingGroup.MixedInstancesPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instances_distribution: {
            value: ccAutoScalingGroupInstancesDistributionPropertyToHclTerraform(struct!.instancesDistribution),
            isBlock: true,
            type: "struct",
            storageClassType: "InstancesDistributionProperty",
        },
        launch_template: {
            value: ccAutoScalingGroupLaunchTemplatePropertyToHclTerraform(struct!.launchTemplate),
            isBlock: true,
            type: "struct",
            storageClassType: "LaunchTemplateProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupNotificationConfigurationPropertyToTerraform(struct?: CcAutoScalingGroup.NotificationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        notification_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notificationTypes),
        topic_arn: cdktn.stringToTerraform(struct!.topicArn),
    }
}


export function ccAutoScalingGroupNotificationConfigurationPropertyToHclTerraform(struct?: CcAutoScalingGroup.NotificationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        notification_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notificationTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        topic_arn: {
            value: cdktn.stringToHclTerraform(struct!.topicArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupNotificationConfigurationsPropertyToTerraform(struct?: CcAutoScalingGroup.NotificationConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        notification_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notificationTypes),
        topic_arn: cdktn.stringToTerraform(struct!.topicArn),
    }
}


export function ccAutoScalingGroupNotificationConfigurationsPropertyToHclTerraform(struct?: CcAutoScalingGroup.NotificationConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        notification_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notificationTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        topic_arn: {
            value: cdktn.stringToHclTerraform(struct!.topicArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutoScalingGroupTagPropertyPropertyToTerraform(struct?: CcAutoScalingGroup.TagPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        propagate_at_launch: cdktn.booleanToTerraform(struct!.propagateAtLaunch),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAutoScalingGroupTagPropertyPropertyToHclTerraform(struct?: CcAutoScalingGroup.TagPropertyProperty | cdktn.IResolvable): any {
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
        propagate_at_launch: {
            value: cdktn.booleanToHclTerraform(struct!.propagateAtLaunch),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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


export function ccAutoScalingGroupTrafficSourceIdentifierPropertyToTerraform(struct?: CcAutoScalingGroup.TrafficSourceIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identifier: cdktn.stringToTerraform(struct!.identifier),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAutoScalingGroupTrafficSourceIdentifierPropertyToHclTerraform(struct?: CcAutoScalingGroup.TrafficSourceIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identifier: {
            value: cdktn.stringToHclTerraform(struct!.identifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export namespace CcAutoScalingGroup {
export interface AvailabilityZoneDistributionProperty {
    /**
    * If launches fail in an Availability Zone, the following strategies are available. The default is ``balanced-best-effort``. 
    *   +  ``balanced-only`` - If launches fail in an Availability Zone, Auto Scaling will continue to attempt to launch in the unhealthy zone to preserve a balanced distribution.
    *   +  ``balanced-best-effort`` - If launches fail in an Availability Zone, Auto Scaling will attempt to launch in another healthy Availability Zone instead.
    *   +  ``reservations-then-balanced`` - Auto Scaling will first attempt to launch into your Capacity Reservations, and then balance any remaining capacity across healthy Availability Zones.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#capacity_distribution_strategy CcAutoScalingGroup#capacity_distribution_strategy}
    */
    readonly capacityDistributionStrategy?: string;
}
export class AvailabilityZoneDistributionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AvailabilityZoneDistributionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityDistributionStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityDistributionStrategy = this._capacityDistributionStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AvailabilityZoneDistributionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityDistributionStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityDistributionStrategy = value.capacityDistributionStrategy;
        }
    }

    // capacity_distribution_strategy - computed: true, optional: true, required: false
    private _capacityDistributionStrategy?: string; 
    public get capacityDistributionStrategy() {
        return this.getStringAttribute('capacity_distribution_strategy');
    }
    public set capacityDistributionStrategy(value: string) {
        this._capacityDistributionStrategy = value;
    }
    public resetCapacityDistributionStrategy() {
        this._capacityDistributionStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityDistributionStrategyInput() {
        return this._capacityDistributionStrategy;
    }
}
export interface AvailabilityZoneImpairmentPolicyProperty {
    /**
    * Specifies the health check behavior for the impaired Availability Zone in an active zonal shift. If you select ``Replace unhealthy``, instances that appear unhealthy will be replaced in all Availability Zones. If you select ``Ignore unhealthy``, instances will not be replaced in the Availability Zone with the active zonal shift. For more information, see [Auto Scaling group zonal shift](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-zonal-shift.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#impaired_zone_health_check_behavior CcAutoScalingGroup#impaired_zone_health_check_behavior}
    */
    readonly impairedZoneHealthCheckBehavior?: string;
    /**
    * If ``true``, enable zonal shift for your Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#zonal_shift_enabled CcAutoScalingGroup#zonal_shift_enabled}
    */
    readonly zonalShiftEnabled?: boolean | cdktn.IResolvable;
}
export class AvailabilityZoneImpairmentPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AvailabilityZoneImpairmentPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._impairedZoneHealthCheckBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.impairedZoneHealthCheckBehavior = this._impairedZoneHealthCheckBehavior;
        }
        if (this._zonalShiftEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.zonalShiftEnabled = this._zonalShiftEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AvailabilityZoneImpairmentPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._impairedZoneHealthCheckBehavior = undefined;
            this._zonalShiftEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._impairedZoneHealthCheckBehavior = value.impairedZoneHealthCheckBehavior;
            this._zonalShiftEnabled = value.zonalShiftEnabled;
        }
    }

    // impaired_zone_health_check_behavior - computed: true, optional: true, required: false
    private _impairedZoneHealthCheckBehavior?: string; 
    public get impairedZoneHealthCheckBehavior() {
        return this.getStringAttribute('impaired_zone_health_check_behavior');
    }
    public set impairedZoneHealthCheckBehavior(value: string) {
        this._impairedZoneHealthCheckBehavior = value;
    }
    public resetImpairedZoneHealthCheckBehavior() {
        this._impairedZoneHealthCheckBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get impairedZoneHealthCheckBehaviorInput() {
        return this._impairedZoneHealthCheckBehavior;
    }

    // zonal_shift_enabled - computed: true, optional: true, required: false
    private _zonalShiftEnabled?: boolean | cdktn.IResolvable; 
    public get zonalShiftEnabled() {
        return this.getBooleanAttribute('zonal_shift_enabled');
    }
    public set zonalShiftEnabled(value: boolean | cdktn.IResolvable) {
        this._zonalShiftEnabled = value;
    }
    public resetZonalShiftEnabled() {
        this._zonalShiftEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zonalShiftEnabledInput() {
        return this._zonalShiftEnabled;
    }
}
export interface CapacityReservationTargetProperty {
    /**
    * The Capacity Reservation IDs to launch instances into.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#capacity_reservation_ids CcAutoScalingGroup#capacity_reservation_ids}
    */
    readonly capacityReservationIds?: string[];
    /**
    * The resource group ARNs of the Capacity Reservation to launch instances into.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#capacity_reservation_resource_group_arns CcAutoScalingGroup#capacity_reservation_resource_group_arns}
    */
    readonly capacityReservationResourceGroupArns?: string[];
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
        if (this._capacityReservationIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationIds = this._capacityReservationIds;
        }
        if (this._capacityReservationResourceGroupArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationResourceGroupArns = this._capacityReservationResourceGroupArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityReservationTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityReservationIds = undefined;
            this._capacityReservationResourceGroupArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityReservationIds = value.capacityReservationIds;
            this._capacityReservationResourceGroupArns = value.capacityReservationResourceGroupArns;
        }
    }

    // capacity_reservation_ids - computed: true, optional: true, required: false
    private _capacityReservationIds?: string[]; 
    public get capacityReservationIds() {
        return this.getListAttribute('capacity_reservation_ids');
    }
    public set capacityReservationIds(value: string[]) {
        this._capacityReservationIds = value;
    }
    public resetCapacityReservationIds() {
        this._capacityReservationIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationIdsInput() {
        return this._capacityReservationIds;
    }

    // capacity_reservation_resource_group_arns - computed: true, optional: true, required: false
    private _capacityReservationResourceGroupArns?: string[]; 
    public get capacityReservationResourceGroupArns() {
        return this.getListAttribute('capacity_reservation_resource_group_arns');
    }
    public set capacityReservationResourceGroupArns(value: string[]) {
        this._capacityReservationResourceGroupArns = value;
    }
    public resetCapacityReservationResourceGroupArns() {
        this._capacityReservationResourceGroupArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationResourceGroupArnsInput() {
        return this._capacityReservationResourceGroupArns;
    }
}
export interface CapacityReservationSpecificationProperty {
    /**
    * The capacity reservation preference. The following options are available: 
    *   +  ``capacity-reservations-only`` - Auto Scaling will only launch instances into a Capacity Reservation or Capacity Reservation resource group. If capacity isn't available, instances will fail to launch.
    *   +  ``capacity-reservations-first`` - Auto Scaling will try to launch instances into a Capacity Reservation or Capacity Reservation resource group first. If capacity isn't available, instances will run in On-Demand capacity.
    *   +  ``none`` - Auto Scaling will not launch instances into a Capacity Reservation. Instances will run in On-Demand capacity. 
    *   +  ``default`` - Auto Scaling uses the Capacity Reservation preference from your launch template or an open Capacity Reservation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#capacity_reservation_preference CcAutoScalingGroup#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * Describes a target Capacity Reservation or Capacity Reservation resource group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#capacity_reservation_target CcAutoScalingGroup#capacity_reservation_target}
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
export interface RetentionTriggersProperty {
    /**
    * Specifies the action when a termination lifecycle hook is abandoned due to failure, timeout, or explicit abandonment (calling CompleteLifecycleAction). 
    *   Set to ``retain`` to move instances to a retained state. Set to ``terminate`` for default termination behavior. 
    *   Retained instances don't count toward desired capacity and remain until you call ``TerminateInstanceInAutoScalingGroup``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#terminate_hook_abandon CcAutoScalingGroup#terminate_hook_abandon}
    */
    readonly terminateHookAbandon?: string;
}
export class RetentionTriggersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RetentionTriggersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._terminateHookAbandon !== undefined) {
            hasAnyValues = true;
            internalValueResult.terminateHookAbandon = this._terminateHookAbandon;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RetentionTriggersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._terminateHookAbandon = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._terminateHookAbandon = value.terminateHookAbandon;
        }
    }

    // terminate_hook_abandon - computed: true, optional: true, required: false
    private _terminateHookAbandon?: string; 
    public get terminateHookAbandon() {
        return this.getStringAttribute('terminate_hook_abandon');
    }
    public set terminateHookAbandon(value: string) {
        this._terminateHookAbandon = value;
    }
    public resetTerminateHookAbandon() {
        this._terminateHookAbandon = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminateHookAbandonInput() {
        return this._terminateHookAbandon;
    }
}
export interface InstanceLifecyclePolicyProperty {
    /**
    * Specifies the conditions that trigger instance retention behavior. These triggers determine when instances should move to a ``Retained`` state instead of automatic termination. This allows you to maintain control over instance management when lifecycles transition and operations fail.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#retention_triggers CcAutoScalingGroup#retention_triggers}
    */
    readonly retentionTriggers?: RetentionTriggersProperty;
}
export class InstanceLifecyclePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceLifecyclePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._retentionTriggers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionTriggers = this._retentionTriggers?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceLifecyclePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._retentionTriggers.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._retentionTriggers.internalValue = value.retentionTriggers;
        }
    }

    // retention_triggers - computed: true, optional: true, required: false
    private _retentionTriggers = new RetentionTriggersPropertyOutputReference(this, "retention_triggers");
    public get retentionTriggers() {
        return this._retentionTriggers;
    }
    public putRetentionTriggers(value: RetentionTriggersProperty) {
        this._retentionTriggers.internalValue = value;
    }
    public resetRetentionTriggers() {
        this._retentionTriggers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionTriggersInput() {
        return this._retentionTriggers.internalValue;
    }
}
export interface InstanceMaintenancePolicyProperty {
    /**
    * Specifies the upper threshold as a percentage of the desired capacity of the Auto Scaling group. It represents the maximum percentage of the group that can be in service and healthy, or pending, to support your workload when replacing instances. Value range is 100 to 200. To clear a previously set value, specify a value of ``-1``.
    *  Both ``MinHealthyPercentage`` and ``MaxHealthyPercentage`` must be specified, and the difference between them cannot be greater than 100. A large range increases the number of instances that can be replaced at the same time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max_healthy_percentage CcAutoScalingGroup#max_healthy_percentage}
    */
    readonly maxHealthyPercentage?: number;
    /**
    * Specifies the lower threshold as a percentage of the desired capacity of the Auto Scaling group. It represents the minimum percentage of the group to keep in service, healthy, and ready to use to support your workload when replacing instances. Value range is 0 to 100. To clear a previously set value, specify a value of ``-1``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#min_healthy_percentage CcAutoScalingGroup#min_healthy_percentage}
    */
    readonly minHealthyPercentage?: number;
}
export class InstanceMaintenancePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceMaintenancePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxHealthyPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxHealthyPercentage = this._maxHealthyPercentage;
        }
        if (this._minHealthyPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.minHealthyPercentage = this._minHealthyPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceMaintenancePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxHealthyPercentage = undefined;
            this._minHealthyPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxHealthyPercentage = value.maxHealthyPercentage;
            this._minHealthyPercentage = value.minHealthyPercentage;
        }
    }

    // max_healthy_percentage - computed: true, optional: true, required: false
    private _maxHealthyPercentage?: number; 
    public get maxHealthyPercentage() {
        return this.getNumberAttribute('max_healthy_percentage');
    }
    public set maxHealthyPercentage(value: number) {
        this._maxHealthyPercentage = value;
    }
    public resetMaxHealthyPercentage() {
        this._maxHealthyPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxHealthyPercentageInput() {
        return this._maxHealthyPercentage;
    }

    // min_healthy_percentage - computed: true, optional: true, required: false
    private _minHealthyPercentage?: number; 
    public get minHealthyPercentage() {
        return this.getNumberAttribute('min_healthy_percentage');
    }
    public set minHealthyPercentage(value: number) {
        this._minHealthyPercentage = value;
    }
    public resetMinHealthyPercentage() {
        this._minHealthyPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minHealthyPercentageInput() {
        return this._minHealthyPercentage;
    }
}
export interface LaunchTemplateSpecificationProperty {
    /**
    * The ID of the launch template.
    *  You must specify the ``LaunchTemplateID`` or the ``LaunchTemplateName``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#launch_template_id CcAutoScalingGroup#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * The name of the launch template.
    *  You must specify the ``LaunchTemplateName`` or the ``LaunchTemplateID``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#launch_template_name CcAutoScalingGroup#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * The version number of the launch template.
    *  Specifying ``$Latest`` or ``$Default`` for the template version number is not supported. However, you can specify ``LatestVersionNumber`` or ``DefaultVersionNumber`` using the ``Fn::GetAtt`` intrinsic function. For more information, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).
    *   For an example of using the ``Fn::GetAtt`` function, see the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#aws-resource-autoscaling-autoscalinggroup--examples) section of the ``AWS::AutoScaling::AutoScalingGroup`` resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#version CcAutoScalingGroup#version}
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
export interface LifecycleHookSpecificationProperty {
    /**
    * The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The default value is ``ABANDON``.
    *  Valid values: ``CONTINUE`` | ``ABANDON``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#default_result CcAutoScalingGroup#default_result}
    */
    readonly defaultResult?: string;
    /**
    * The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from ``30`` to ``7200`` seconds. The default value is ``3600`` seconds (1 hour).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#heartbeat_timeout CcAutoScalingGroup#heartbeat_timeout}
    */
    readonly heartbeatTimeout?: number;
    /**
    * The name of the lifecycle hook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#lifecycle_hook_name CcAutoScalingGroup#lifecycle_hook_name}
    */
    readonly lifecycleHookName?: string;
    /**
    * The lifecycle transition. For Auto Scaling groups, there are two major lifecycle transitions.
    *   +  To create a lifecycle hook for scale-out events, specify ``autoscaling:EC2_INSTANCE_LAUNCHING``.
    *   +  To create a lifecycle hook for scale-in events, specify ``autoscaling:EC2_INSTANCE_TERMINATING``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#lifecycle_transition CcAutoScalingGroup#lifecycle_transition}
    */
    readonly lifecycleTransition?: string;
    /**
    * Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#notification_metadata CcAutoScalingGroup#notification_metadata}
    */
    readonly notificationMetadata?: string;
    /**
    * The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling sends notifications to when an instance is in a wait state for the lifecycle hook. You can specify an Amazon SNS topic or an Amazon SQS queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#notification_target_arn CcAutoScalingGroup#notification_target_arn}
    */
    readonly notificationTargetArn?: string;
    /**
    * The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. For information about creating this role, see [Prepare to add a lifecycle hook to your Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/prepare-for-lifecycle-notifications.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *  Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#role_arn CcAutoScalingGroup#role_arn}
    */
    readonly roleArn?: string;
}
export class LifecycleHookSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LifecycleHookSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultResult !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResult = this._defaultResult;
        }
        if (this._heartbeatTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.heartbeatTimeout = this._heartbeatTimeout;
        }
        if (this._lifecycleHookName !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleHookName = this._lifecycleHookName;
        }
        if (this._lifecycleTransition !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleTransition = this._lifecycleTransition;
        }
        if (this._notificationMetadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationMetadata = this._notificationMetadata;
        }
        if (this._notificationTargetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationTargetArn = this._notificationTargetArn;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LifecycleHookSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultResult = undefined;
            this._heartbeatTimeout = undefined;
            this._lifecycleHookName = undefined;
            this._lifecycleTransition = undefined;
            this._notificationMetadata = undefined;
            this._notificationTargetArn = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultResult = value.defaultResult;
            this._heartbeatTimeout = value.heartbeatTimeout;
            this._lifecycleHookName = value.lifecycleHookName;
            this._lifecycleTransition = value.lifecycleTransition;
            this._notificationMetadata = value.notificationMetadata;
            this._notificationTargetArn = value.notificationTargetArn;
            this._roleArn = value.roleArn;
        }
    }

    // default_result - computed: true, optional: true, required: false
    private _defaultResult?: string; 
    public get defaultResult() {
        return this.getStringAttribute('default_result');
    }
    public set defaultResult(value: string) {
        this._defaultResult = value;
    }
    public resetDefaultResult() {
        this._defaultResult = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResultInput() {
        return this._defaultResult;
    }

    // heartbeat_timeout - computed: true, optional: true, required: false
    private _heartbeatTimeout?: number; 
    public get heartbeatTimeout() {
        return this.getNumberAttribute('heartbeat_timeout');
    }
    public set heartbeatTimeout(value: number) {
        this._heartbeatTimeout = value;
    }
    public resetHeartbeatTimeout() {
        this._heartbeatTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get heartbeatTimeoutInput() {
        return this._heartbeatTimeout;
    }

    // lifecycle_hook_name - computed: true, optional: true, required: false
    private _lifecycleHookName?: string; 
    public get lifecycleHookName() {
        return this.getStringAttribute('lifecycle_hook_name');
    }
    public set lifecycleHookName(value: string) {
        this._lifecycleHookName = value;
    }
    public resetLifecycleHookName() {
        this._lifecycleHookName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleHookNameInput() {
        return this._lifecycleHookName;
    }

    // lifecycle_transition - computed: true, optional: true, required: false
    private _lifecycleTransition?: string; 
    public get lifecycleTransition() {
        return this.getStringAttribute('lifecycle_transition');
    }
    public set lifecycleTransition(value: string) {
        this._lifecycleTransition = value;
    }
    public resetLifecycleTransition() {
        this._lifecycleTransition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleTransitionInput() {
        return this._lifecycleTransition;
    }

    // notification_metadata - computed: true, optional: true, required: false
    private _notificationMetadata?: string; 
    public get notificationMetadata() {
        return this.getStringAttribute('notification_metadata');
    }
    public set notificationMetadata(value: string) {
        this._notificationMetadata = value;
    }
    public resetNotificationMetadata() {
        this._notificationMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationMetadataInput() {
        return this._notificationMetadata;
    }

    // notification_target_arn - computed: true, optional: true, required: false
    private _notificationTargetArn?: string; 
    public get notificationTargetArn() {
        return this.getStringAttribute('notification_target_arn');
    }
    public set notificationTargetArn(value: string) {
        this._notificationTargetArn = value;
    }
    public resetNotificationTargetArn() {
        this._notificationTargetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTargetArnInput() {
        return this._notificationTargetArn;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }
}

export class LifecycleHookSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : LifecycleHookSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): LifecycleHookSpecificationPropertyOutputReference {
        return new LifecycleHookSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricsCollectionProperty {
    /**
    * The frequency at which Amazon EC2 Auto Scaling sends aggregated data to CloudWatch. The only valid value is ``1Minute``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#granularity CcAutoScalingGroup#granularity}
    */
    readonly granularity?: string;
    /**
    * Identifies the metrics to enable.
    *  You can specify one or more of the following metrics:
    *   +   ``GroupMinSize`` 
    *   +   ``GroupMaxSize`` 
    *   +   ``GroupDesiredCapacity`` 
    *   +   ``GroupInServiceInstances`` 
    *   +   ``GroupPendingInstances`` 
    *   +   ``GroupStandbyInstances`` 
    *   +   ``GroupTerminatingInstances`` 
    *   +   ``GroupTotalInstances`` 
    *   +   ``GroupInServiceCapacity`` 
    *   +   ``GroupPendingCapacity`` 
    *   +   ``GroupStandbyCapacity`` 
    *   +   ``GroupTerminatingCapacity`` 
    *   +   ``GroupTotalCapacity`` 
    *   +   ``WarmPoolDesiredCapacity`` 
    *   +   ``WarmPoolWarmedCapacity`` 
    *   +   ``WarmPoolPendingCapacity`` 
    *   +   ``WarmPoolTerminatingCapacity`` 
    *   +   ``WarmPoolTotalCapacity`` 
    *   +   ``GroupAndWarmPoolDesiredCapacity`` 
    *   +   ``GroupAndWarmPoolTotalCapacity`` 
    *   
    *  If you specify ``Granularity`` and don't specify any metrics, all metrics are enabled.
    *  For more information, see [Amazon CloudWatch metrics for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-metrics.html) in the *Amazon EC2 Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#metrics CcAutoScalingGroup#metrics}
    */
    readonly metrics?: string[];
}
export class MetricsCollectionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricsCollectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._granularity !== undefined) {
            hasAnyValues = true;
            internalValueResult.granularity = this._granularity;
        }
        if (this._metrics !== undefined) {
            hasAnyValues = true;
            internalValueResult.metrics = this._metrics;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricsCollectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._granularity = undefined;
            this._metrics = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._granularity = value.granularity;
            this._metrics = value.metrics;
        }
    }

    // granularity - computed: true, optional: true, required: false
    private _granularity?: string; 
    public get granularity() {
        return this.getStringAttribute('granularity');
    }
    public set granularity(value: string) {
        this._granularity = value;
    }
    public resetGranularity() {
        this._granularity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get granularityInput() {
        return this._granularity;
    }

    // metrics - computed: true, optional: true, required: false
    private _metrics?: string[]; 
    public get metrics() {
        return this.getListAttribute('metrics');
    }
    public set metrics(value: string[]) {
        this._metrics = value;
    }
    public resetMetrics() {
        this._metrics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsInput() {
        return this._metrics;
    }
}

export class MetricsCollectionPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricsCollectionProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricsCollectionPropertyOutputReference {
        return new MetricsCollectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DistributionSegmentProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#target_capacity_types CcAutoScalingGroup#target_capacity_types}
    */
    readonly targetCapacityTypes?: string[];
}
export class DistributionSegmentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DistributionSegmentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetCapacityTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetCapacityTypes = this._targetCapacityTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DistributionSegmentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetCapacityTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetCapacityTypes = value.targetCapacityTypes;
        }
    }

    // target_capacity_types - computed: true, optional: true, required: false
    private _targetCapacityTypes?: string[]; 
    public get targetCapacityTypes() {
        return this.getListAttribute('target_capacity_types');
    }
    public set targetCapacityTypes(value: string[]) {
        this._targetCapacityTypes = value;
    }
    public resetTargetCapacityTypes() {
        this._targetCapacityTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetCapacityTypesInput() {
        return this._targetCapacityTypes;
    }
}

export class DistributionSegmentPropertyList extends cdktn.ComplexList {
    public internalValue? : DistributionSegmentProperty[] | cdktn.IResolvable

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
    public get(index: number): DistributionSegmentPropertyOutputReference {
        return new DistributionSegmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InstancesDistributionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#distribution_segments CcAutoScalingGroup#distribution_segments}
    */
    readonly distributionSegments?: DistributionSegmentProperty[] | cdktn.IResolvable;
    /**
    * The allocation strategy to apply to your On-Demand Instances when they are launched. Possible instance types are determined by the launch template overrides that you specify.
    *  The following lists the valid values:
    *   + lowest-price Uses price to determine which instance types are the highest priority, launching the lowest priced instance types within an Availability Zone first. This is the default value for Auto Scaling groups that specify InstanceRequirements. + prioritized You set the order of instance types for the launch template overrides from highest to lowest priority (from first to last in the list). Amazon EC2 Auto Scaling launches your highest priority instance types first. If all your On-Demand capacity cannot be fulfilled using your highest priority instance type, then Amazon EC2 Auto Scaling launches the remaining capacity using the second priority instance type, and so on. This is the default value for Auto Scaling groups that don't specify InstanceRequirements and cannot be used for groups that do.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#on_demand_allocation_strategy CcAutoScalingGroup#on_demand_allocation_strategy}
    */
    readonly onDemandAllocationStrategy?: string;
    /**
    * The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances. This base portion is launched first as your group scales.
    *  This number has the same unit of measurement as the group's desired capacity. If you change the default unit of measurement (number of instances) by specifying weighted capacity values in your launch template overrides list, or by changing the default desired capacity type setting of the group, you must specify this number using the same unit of measurement.
    *  Default: 0
    *   An update to this setting means a gradual replacement of instances to adjust the current On-Demand Instance levels. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the previous ones.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#on_demand_base_capacity CcAutoScalingGroup#on_demand_base_capacity}
    */
    readonly onDemandBaseCapacity?: number;
    /**
    * Controls the percentages of On-Demand Instances and Spot Instances for your additional capacity beyond ``OnDemandBaseCapacity``. Expressed as a number (for example, 20 specifies 20% On-Demand Instances, 80% Spot Instances). If set to 100, only On-Demand Instances are used.
    *  Default: 100
    *   An update to this setting means a gradual replacement of instances to adjust the current On-Demand and Spot Instance levels for your additional capacity higher than the base capacity. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the previous ones.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#on_demand_percentage_above_base_capacity CcAutoScalingGroup#on_demand_percentage_above_base_capacity}
    */
    readonly onDemandPercentageAboveBaseCapacity?: number;
    /**
    * The allocation strategy to apply to your Spot Instances when they are launched. Possible instance types are determined by the launch template overrides that you specify.
    *  The following lists the valid values:
    *   + capacity-optimized Requests Spot Instances using pools that are optimally chosen based on the available Spot capacity. This strategy has the lowest risk of interruption. To give certain instance types a higher chance of launching first, use capacity-optimized-prioritized. + capacity-optimized-prioritized You set the order of instance types for the launch template overrides from highest to lowest priority (from first to last in the list). Amazon EC2 Auto Scaling honors the instance type priorities on a best effort basis but optimizes for capacity first. Note that if the On-Demand allocation strategy is set to prioritized, the same priority is applied when fulfilling On-Demand capacity. This is not a valid value for Auto Scaling groups that specify InstanceRequirements. + lowest-price Requests Spot Instances using the lowest priced pools within an Availability Zone, across the number of Spot pools that you specify for the SpotInstancePools property. To ensure that your desired capacity is met, you might receive Spot Instances from several pools. This is the default value, but it might lead to high interruption rates because this strategy only considers instance price and not available capacity. + price-capacity-optimized (recommended) The price and capacity optimized allocation strategy looks at both price and capacity to select the Spot Instance pools that are the least likely to be interrupted and have the lowest possible price.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#spot_allocation_strategy CcAutoScalingGroup#spot_allocation_strategy}
    */
    readonly spotAllocationStrategy?: string;
    /**
    * The number of Spot Instance pools across which to allocate your Spot Instances. The Spot pools are determined from the different instance types in the overrides. Valid only when the ``SpotAllocationStrategy`` is ``lowest-price``. Value must be in the range of 1–20.
    *  Default: 2
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#spot_instance_pools CcAutoScalingGroup#spot_instance_pools}
    */
    readonly spotInstancePools?: number;
    /**
    * The maximum price per unit hour that you are willing to pay for a Spot Instance. If your maximum price is lower than the Spot price for the instance types that you selected, your Spot Instances are not launched. We do not recommend specifying a maximum price because it can lead to increased interruptions. When Spot Instances launch, you pay the current Spot price. To remove a maximum price that you previously set, include the property but specify an empty string ("") for the value.
    *   If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify one.
    *   Valid Range: Minimum value of 0.001
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#spot_max_price CcAutoScalingGroup#spot_max_price}
    */
    readonly spotMaxPrice?: string;
}
export class InstancesDistributionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstancesDistributionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._distributionSegments?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.distributionSegments = this._distributionSegments?.internalValue;
        }
        if (this._onDemandAllocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandAllocationStrategy = this._onDemandAllocationStrategy;
        }
        if (this._onDemandBaseCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandBaseCapacity = this._onDemandBaseCapacity;
        }
        if (this._onDemandPercentageAboveBaseCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandPercentageAboveBaseCapacity = this._onDemandPercentageAboveBaseCapacity;
        }
        if (this._spotAllocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotAllocationStrategy = this._spotAllocationStrategy;
        }
        if (this._spotInstancePools !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotInstancePools = this._spotInstancePools;
        }
        if (this._spotMaxPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotMaxPrice = this._spotMaxPrice;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstancesDistributionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._distributionSegments.internalValue = undefined;
            this._onDemandAllocationStrategy = undefined;
            this._onDemandBaseCapacity = undefined;
            this._onDemandPercentageAboveBaseCapacity = undefined;
            this._spotAllocationStrategy = undefined;
            this._spotInstancePools = undefined;
            this._spotMaxPrice = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._distributionSegments.internalValue = value.distributionSegments;
            this._onDemandAllocationStrategy = value.onDemandAllocationStrategy;
            this._onDemandBaseCapacity = value.onDemandBaseCapacity;
            this._onDemandPercentageAboveBaseCapacity = value.onDemandPercentageAboveBaseCapacity;
            this._spotAllocationStrategy = value.spotAllocationStrategy;
            this._spotInstancePools = value.spotInstancePools;
            this._spotMaxPrice = value.spotMaxPrice;
        }
    }

    // distribution_segments - computed: true, optional: true, required: false
    private _distributionSegments = new DistributionSegmentPropertyList(this, "distribution_segments", false);
    public get distributionSegments() {
        return this._distributionSegments;
    }
    public putDistributionSegments(value: DistributionSegmentProperty[] | cdktn.IResolvable) {
        this._distributionSegments.internalValue = value;
    }
    public resetDistributionSegments() {
        this._distributionSegments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get distributionSegmentsInput() {
        return this._distributionSegments.internalValue;
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

    // on_demand_base_capacity - computed: true, optional: true, required: false
    private _onDemandBaseCapacity?: number; 
    public get onDemandBaseCapacity() {
        return this.getNumberAttribute('on_demand_base_capacity');
    }
    public set onDemandBaseCapacity(value: number) {
        this._onDemandBaseCapacity = value;
    }
    public resetOnDemandBaseCapacity() {
        this._onDemandBaseCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandBaseCapacityInput() {
        return this._onDemandBaseCapacity;
    }

    // on_demand_percentage_above_base_capacity - computed: true, optional: true, required: false
    private _onDemandPercentageAboveBaseCapacity?: number; 
    public get onDemandPercentageAboveBaseCapacity() {
        return this.getNumberAttribute('on_demand_percentage_above_base_capacity');
    }
    public set onDemandPercentageAboveBaseCapacity(value: number) {
        this._onDemandPercentageAboveBaseCapacity = value;
    }
    public resetOnDemandPercentageAboveBaseCapacity() {
        this._onDemandPercentageAboveBaseCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandPercentageAboveBaseCapacityInput() {
        return this._onDemandPercentageAboveBaseCapacity;
    }

    // spot_allocation_strategy - computed: true, optional: true, required: false
    private _spotAllocationStrategy?: string; 
    public get spotAllocationStrategy() {
        return this.getStringAttribute('spot_allocation_strategy');
    }
    public set spotAllocationStrategy(value: string) {
        this._spotAllocationStrategy = value;
    }
    public resetSpotAllocationStrategy() {
        this._spotAllocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotAllocationStrategyInput() {
        return this._spotAllocationStrategy;
    }

    // spot_instance_pools - computed: true, optional: true, required: false
    private _spotInstancePools?: number; 
    public get spotInstancePools() {
        return this.getNumberAttribute('spot_instance_pools');
    }
    public set spotInstancePools(value: number) {
        this._spotInstancePools = value;
    }
    public resetSpotInstancePools() {
        this._spotInstancePools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotInstancePoolsInput() {
        return this._spotInstancePools;
    }

    // spot_max_price - computed: true, optional: true, required: false
    private _spotMaxPrice?: string; 
    public get spotMaxPrice() {
        return this.getStringAttribute('spot_max_price');
    }
    public set spotMaxPrice(value: string) {
        this._spotMaxPrice = value;
    }
    public resetSpotMaxPrice() {
        this._spotMaxPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotMaxPriceInput() {
        return this._spotMaxPrice;
    }
}
export interface MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty {
    /**
    * The ID of the launch template.
    *  You must specify the ``LaunchTemplateID`` or the ``LaunchTemplateName``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#launch_template_id CcAutoScalingGroup#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * The name of the launch template.
    *  You must specify the ``LaunchTemplateName`` or the ``LaunchTemplateID``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#launch_template_name CcAutoScalingGroup#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * The version number of the launch template.
    *  Specifying ``$Latest`` or ``$Default`` for the template version number is not supported. However, you can specify ``LatestVersionNumber`` or ``DefaultVersionNumber`` using the ``Fn::GetAtt`` intrinsic function. For more information, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).
    *   For an example of using the ``Fn::GetAtt`` function, see the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#aws-resource-autoscaling-autoscalinggroup--examples) section of the ``AWS::AutoScaling::AutoScalingGroup`` resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#version CcAutoScalingGroup#version}
    */
    readonly version?: string;
}
export class MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty | cdktn.IResolvable | undefined) {
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
export interface AcceleratorCountRequestProperty {
    /**
    * The maximum value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max CcAutoScalingGroup#max}
    */
    readonly max?: number;
    /**
    * The minimum value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#min CcAutoScalingGroup#min}
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
    * The memory maximum in MiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max CcAutoScalingGroup#max}
    */
    readonly max?: number;
    /**
    * The memory minimum in MiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#min CcAutoScalingGroup#min}
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
    * The maximum value in Mbps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max CcAutoScalingGroup#max}
    */
    readonly max?: number;
    /**
    * The minimum value in Mbps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#min CcAutoScalingGroup#min}
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
    * The instance family to use as a baseline reference. 
    *   Make sure that you specify the correct value for the instance family. The instance family is everything before the period (.) in the instance type name. For example, in the instance ``c6i.large``, the instance family is ``c6i``, not ``c6``. For more information, see [Amazon EC2 instance type naming conventions](https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-type-names.html) in *Amazon EC2 Instance Types*.
    *   The following instance types are *not supported* for performance protection.
    *   +   ``c1`` 
    *   +   ``g3| g3s`` 
    *   +   ``hpc7g`` 
    *   +   ``m1| m2`` 
    *   +   ``mac1 | mac2 | mac2-m1ultra | mac2-m2 | mac2-m2pro`` 
    *   +   ``p3dn | p4d | p5`` 
    *   +   ``t1`` 
    *   +   ``u-12tb1 | u-18tb1 | u-24tb1 | u-3tb1 | u-6tb1 | u-9tb1 | u7i-12tb | u7in-16tb | u7in-24tb | u7in-32tb`` 
    *   
    *  If you performance protection by specifying a supported instance family, the returned instance types will exclude the preceding unsupported instance families.
    *  If you specify an unsupported instance family as a value for baseline performance, the API returns an empty response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#instance_family CcAutoScalingGroup#instance_family}
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
    * Specify an instance family to use as the baseline reference for CPU performance. All instance types that match your specified attributes will be compared against the CPU performance of the referenced instance family, regardless of CPU manufacturer or architecture differences. 
    *   Currently only one instance family can be specified in the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#references CcAutoScalingGroup#references}
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
    * The CPU performance to consider, using an instance family as the baseline reference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#cpu CcAutoScalingGroup#cpu}
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
    * The memory maximum in GiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max CcAutoScalingGroup#max}
    */
    readonly max?: number;
    /**
    * The memory minimum in GiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#min CcAutoScalingGroup#min}
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
    * The memory maximum in MiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max CcAutoScalingGroup#max}
    */
    readonly max?: number;
    /**
    * The memory minimum in MiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#min CcAutoScalingGroup#min}
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
    * The maximum amount of network bandwidth, in gigabits per second (Gbps).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max CcAutoScalingGroup#max}
    */
    readonly max?: number;
    /**
    * The minimum amount of network bandwidth, in gigabits per second (Gbps).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#min CcAutoScalingGroup#min}
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
    * The maximum number of network interfaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max CcAutoScalingGroup#max}
    */
    readonly max?: number;
    /**
    * The minimum number of network interfaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#min CcAutoScalingGroup#min}
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
    * The storage maximum in GB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max CcAutoScalingGroup#max}
    */
    readonly max?: number;
    /**
    * The storage minimum in GB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#min CcAutoScalingGroup#min}
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
export interface VCpuCountRequestProperty {
    /**
    * The maximum number of vCPUs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max CcAutoScalingGroup#max}
    */
    readonly max?: number;
    /**
    * The minimum number of vCPUs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#min CcAutoScalingGroup#min}
    */
    readonly min?: number;
}
export class VCpuCountRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VCpuCountRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: VCpuCountRequestProperty | cdktn.IResolvable | undefined) {
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
    * The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) for an instance type.
    *  To exclude accelerator-enabled instance types, set ``Max`` to ``0``.
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#accelerator_count CcAutoScalingGroup#accelerator_count}
    */
    readonly acceleratorCount?: AcceleratorCountRequestProperty;
    /**
    * Indicates whether instance types must have accelerators by specific manufacturers.
    *   +  For instance types with NVIDIA devices, specify ``nvidia``.
    *   +  For instance types with AMD devices, specify ``amd``.
    *   +  For instance types with AWS devices, specify ``amazon-web-services``.
    *   +  For instance types with Xilinx devices, specify ``xilinx``.
    *   
    *  Default: Any manufacturer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#accelerator_manufacturers CcAutoScalingGroup#accelerator_manufacturers}
    */
    readonly acceleratorManufacturers?: string[];
    /**
    * Lists the accelerators that must be on an instance type.
    *   +  For instance types with NVIDIA A100 GPUs, specify ``a100``.
    *   +  For instance types with NVIDIA V100 GPUs, specify ``v100``.
    *   +  For instance types with NVIDIA K80 GPUs, specify ``k80``.
    *   +  For instance types with NVIDIA T4 GPUs, specify ``t4``.
    *   +  For instance types with NVIDIA M60 GPUs, specify ``m60``.
    *   +  For instance types with AMD Radeon Pro V520 GPUs, specify ``radeon-pro-v520``.
    *   +  For instance types with Xilinx VU9P FPGAs, specify ``vu9p``.
    *   
    *  Default: Any accelerator
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#accelerator_names CcAutoScalingGroup#accelerator_names}
    */
    readonly acceleratorNames?: string[];
    /**
    * The minimum and maximum total memory size for the accelerators on an instance type, in MiB.
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#accelerator_total_memory_mi_b CcAutoScalingGroup#accelerator_total_memory_mi_b}
    */
    readonly acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequestProperty;
    /**
    * Lists the accelerator types that must be on an instance type.
    *   +  For instance types with GPU accelerators, specify ``gpu``.
    *   +  For instance types with FPGA accelerators, specify ``fpga``.
    *   +  For instance types with inference accelerators, specify ``inference``.
    *   
    *  Default: Any accelerator type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#accelerator_types CcAutoScalingGroup#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes.
    *  You can use strings with one or more wild cards, represented by an asterisk (``*``), to allow an instance type, size, or generation. The following are examples: ``m5.8xlarge``, ``c5*.*``, ``m5a.*``, ``r*``, ``*3*``.
    *  For example, if you specify ``c5*``, Amazon EC2 Auto Scaling will allow the entire C5 instance family, which includes all C5a and C5n instance types. If you specify ``m5a.*``, Amazon EC2 Auto Scaling will allow all the M5a instance types, but not the M5n instance types.
    *   If you specify ``AllowedInstanceTypes``, you can't specify ``ExcludedInstanceTypes``.
    *   Default: All instance types
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#allowed_instance_types CcAutoScalingGroup#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
    /**
    * Indicates whether bare metal instance types are included, excluded, or required.
    *  Default: ``excluded``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#bare_metal CcAutoScalingGroup#bare_metal}
    */
    readonly bareMetal?: string;
    /**
    * The minimum and maximum baseline bandwidth performance for an instance type, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#baseline_ebs_bandwidth_mbps CcAutoScalingGroup#baseline_ebs_bandwidth_mbps}
    */
    readonly baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequestProperty;
    /**
    * The baseline performance factors for the instance requirements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#baseline_performance_factors CcAutoScalingGroup#baseline_performance_factors}
    */
    readonly baselinePerformanceFactors?: BaselinePerformanceFactorsRequestProperty;
    /**
    * Indicates whether burstable performance instance types are included, excluded, or required. For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html) in the *Amazon EC2 User Guide*.
    *  Default: ``excluded``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#burstable_performance CcAutoScalingGroup#burstable_performance}
    */
    readonly burstablePerformance?: string;
    /**
    * Lists which specific CPU manufacturers to include.
    *   +  For instance types with Intel CPUs, specify ``intel``.
    *   +  For instance types with AMD CPUs, specify ``amd``.
    *   +  For instance types with AWS CPUs, specify ``amazon-web-services``.
    *   +  For instance types with Apple CPUs, specify ``apple``.
    *   
    *   Don't confuse the CPU hardware manufacturer with the CPU hardware architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template. 
    *   Default: Any manufacturer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#cpu_manufacturers CcAutoScalingGroup#cpu_manufacturers}
    */
    readonly cpuManufacturers?: string[];
    /**
    * The instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (``*``), to exclude an instance family, type, size, or generation. The following are examples: ``m5.8xlarge``, ``c5*.*``, ``m5a.*``, ``r*``, ``*3*``. 
    *  For example, if you specify ``c5*``, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify ``m5a.*``, Amazon EC2 Auto Scaling will exclude all the M5a instance types, but not the M5n instance types.
    *   If you specify ``ExcludedInstanceTypes``, you can't specify ``AllowedInstanceTypes``.
    *   Default: No excluded instance types
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#excluded_instance_types CcAutoScalingGroup#excluded_instance_types}
    */
    readonly excludedInstanceTypes?: string[];
    /**
    * Indicates whether current or previous generation instance types are included.
    *   +  For current generation instance types, specify ``current``. The current generation includes EC2 instance types currently recommended for use. This typically includes the latest two to three generations in each instance family. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
    *   +  For previous generation instance types, specify ``previous``.
    *   
    *  Default: Any current or previous generation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#instance_generations CcAutoScalingGroup#instance_generations}
    */
    readonly instanceGenerations?: string[];
    /**
    * Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, see [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the *Amazon EC2 User Guide*.
    *  Default: ``included``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#local_storage CcAutoScalingGroup#local_storage}
    */
    readonly localStorage?: string;
    /**
    * Indicates the type of local storage that is required.
    *   +  For instance types with hard disk drive (HDD) storage, specify ``hdd``.
    *   +  For instance types with solid state drive (SSD) storage, specify ``ssd``.
    *   
    *  Default: Any local storage type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#local_storage_types CcAutoScalingGroup#local_storage_types}
    */
    readonly localStorageTypes?: string[];
    /**
    * [Price protection] The price protection threshold for Spot Instances, as a percentage of an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from either the lowest priced current generation instance types or, failing that, the lowest priced previous generation instance types that match your attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price exceeds your specified threshold.
    *  The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage.
    *  If you set ``DesiredCapacityType`` to ``vcpu`` or ``memory-mib``, the price protection threshold is based on the per-vCPU or per-memory price instead of the per instance price. 
    *   Only one of ``SpotMaxPricePercentageOverLowestPrice`` or ``MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`` can be specified. If you don't specify either, Amazon EC2 Auto Scaling will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as ``999999``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#max_spot_price_as_percentage_of_optimal_on_demand_price CcAutoScalingGroup#max_spot_price_as_percentage_of_optimal_on_demand_price}
    */
    readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
    /**
    * The minimum and maximum amount of memory per vCPU for an instance type, in GiB.
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#memory_gi_b_per_v_cpu CcAutoScalingGroup#memory_gi_b_per_v_cpu}
    */
    readonly memoryGiBPerVCpu?: MemoryGiBPerVCpuRequestProperty;
    /**
    * The minimum and maximum instance memory size for an instance type, in MiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#memory_mi_b CcAutoScalingGroup#memory_mi_b}
    */
    readonly memoryMiB?: MemoryMiBRequestProperty;
    /**
    * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#network_bandwidth_gbps CcAutoScalingGroup#network_bandwidth_gbps}
    */
    readonly networkBandwidthGbps?: NetworkBandwidthGbpsRequestProperty;
    /**
    * The minimum and maximum number of network interfaces for an instance type.
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#network_interface_count CcAutoScalingGroup#network_interface_count}
    */
    readonly networkInterfaceCount?: NetworkInterfaceCountRequestProperty;
    /**
    * [Price protection] The price protection threshold for On-Demand Instances, as a percentage higher than an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from either the lowest priced current generation instance types or, failing that, the lowest priced previous generation instance types that match your attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price exceeds your specified threshold. 
    *  The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage.
    *  To turn off price protection, specify a high value, such as ``999999``. 
    *  If you set ``DesiredCapacityType`` to ``vcpu`` or ``memory-mib``, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per instance price. 
    *  Default: ``20``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#on_demand_max_price_percentage_over_lowest_price CcAutoScalingGroup#on_demand_max_price_percentage_over_lowest_price}
    */
    readonly onDemandMaxPricePercentageOverLowestPrice?: number;
    /**
    * Indicates whether instance types must provide On-Demand Instance hibernation support.
    *  Default: ``false``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#require_hibernate_support CcAutoScalingGroup#require_hibernate_support}
    */
    readonly requireHibernateSupport?: boolean | cdktn.IResolvable;
    /**
    * [Price protection] The price protection threshold for Spot Instances, as a percentage higher than an identified Spot price. The identified Spot price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from either the lowest priced current generation instance types or, failing that, the lowest priced previous generation instance types that match your attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price exceeds your specified threshold.
    *  The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. 
    *  If you set ``DesiredCapacityType`` to ``vcpu`` or ``memory-mib``, the price protection threshold is based on the per-vCPU or per-memory price instead of the per instance price. 
    *   Only one of ``SpotMaxPricePercentageOverLowestPrice`` or ``MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`` can be specified. If you don't specify either, Amazon EC2 Auto Scaling will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as ``999999``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#spot_max_price_percentage_over_lowest_price CcAutoScalingGroup#spot_max_price_percentage_over_lowest_price}
    */
    readonly spotMaxPricePercentageOverLowestPrice?: number;
    /**
    * The minimum and maximum total local storage size for an instance type, in GB.
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#total_local_storage_gb CcAutoScalingGroup#total_local_storage_gb}
    */
    readonly totalLocalStorageGb?: TotalLocalStorageGBRequestProperty;
    /**
    * The minimum and maximum number of vCPUs for an instance type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#v_cpu_count CcAutoScalingGroup#v_cpu_count}
    */
    readonly vCpuCount?: VCpuCountRequestProperty;
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
        return cdktn.Fn.tolist(this.getListAttribute('accelerator_manufacturers'));
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
        return cdktn.Fn.tolist(this.getListAttribute('accelerator_names'));
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
        return cdktn.Fn.tolist(this.getListAttribute('accelerator_types'));
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
        return cdktn.Fn.tolist(this.getListAttribute('cpu_manufacturers'));
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
        return cdktn.Fn.tolist(this.getListAttribute('instance_generations'));
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
        return cdktn.Fn.tolist(this.getListAttribute('local_storage_types'));
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
    private _vCpuCount = new VCpuCountRequestPropertyOutputReference(this, "v_cpu_count");
    public get vCpuCount() {
        return this._vCpuCount;
    }
    public putVCpuCount(value: VCpuCountRequestProperty) {
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
export interface MixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationProperty {
    /**
    * The ID of the launch template.
    *  You must specify the ``LaunchTemplateID`` or the ``LaunchTemplateName``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#launch_template_id CcAutoScalingGroup#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * The name of the launch template.
    *  You must specify the ``LaunchTemplateName`` or the ``LaunchTemplateID``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#launch_template_name CcAutoScalingGroup#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * The version number of the launch template.
    *  Specifying ``$Latest`` or ``$Default`` for the template version number is not supported. However, you can specify ``LatestVersionNumber`` or ``DefaultVersionNumber`` using the ``Fn::GetAtt`` intrinsic function. For more information, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).
    *   For an example of using the ``Fn::GetAtt`` function, see the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#aws-resource-autoscaling-autoscalinggroup--examples) section of the ``AWS::AutoScaling::AutoScalingGroup`` resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#version CcAutoScalingGroup#version}
    */
    readonly version?: string;
}
export class MixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationProperty | cdktn.IResolvable | undefined) {
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
export interface LaunchTemplateOverridesProperty {
    /**
    * The ID of the Amazon Machine Image (AMI) to use for instances launched with this override. When using Instance Refresh with ``ReplaceRootVolume`` strategy, this specifies the AMI for root volume replacement operations. 
    *   For ``ReplaceRootVolume`` operations: 
    *   +  All overrides in the ``MixedInstancesPolicy`` must specify an ImageId
    *   +  The AMI must contain only a single root volume
    *   +  Root volume replacement doesn't support multi-volume AMIs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#image_id CcAutoScalingGroup#image_id}
    */
    readonly imageId?: string;
    /**
    * The instance requirements. Amazon EC2 Auto Scaling uses your specified requirements to identify instance types. Then, it uses your On-Demand and Spot allocation strategies to launch instances from these instance types.
    *  You can specify up to four separate sets of instance requirements per Auto Scaling group. This is useful for provisioning instances from different Amazon Machine Images (AMIs) in the same Auto Scaling group. To do this, create the AMIs and create a new launch template for each AMI. Then, create a compatible set of instance requirements for each launch template. 
    *   If you specify ``InstanceRequirements``, you can't specify ``InstanceType``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#instance_requirements CcAutoScalingGroup#instance_requirements}
    */
    readonly instanceRequirements?: InstanceRequirementsProperty;
    /**
    * The instance type, such as ``m3.xlarge``. You must specify an instance type that is supported in your requested Region and Availability Zones. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
    *  You can specify up to 40 instance types per Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#instance_type CcAutoScalingGroup#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Provides a launch template for the specified instance type or set of instance requirements. For example, some instance types might require a launch template with a different AMI. If not provided, Amazon EC2 Auto Scaling uses the launch template that's specified in the ``LaunchTemplate`` definition. For more information, see [Specifying a different launch template for an instance type](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups-launch-template-overrides.html) in the *Amazon EC2 Auto Scaling User Guide*. 
    *  You can specify up to 20 launch templates per Auto Scaling group. The launch templates specified in the overrides and in the ``LaunchTemplate`` definition count towards this limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#launch_template_specification CcAutoScalingGroup#launch_template_specification}
    */
    readonly launchTemplateSpecification?: MixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationProperty;
    /**
    * If you provide a list of instance types to use, you can specify the number of capacity units provided by each instance type in terms of virtual CPUs, memory, storage, throughput, or other relative performance characteristic. When a Spot or On-Demand Instance is launched, the capacity units count toward the desired capacity. Amazon EC2 Auto Scaling launches instances until the desired capacity is totally fulfilled, even if this results in an overage. For example, if there are two units remaining to fulfill capacity, and Amazon EC2 Auto Scaling can only launch an instance with a ``WeightedCapacity`` of five units, the instance is launched, and the desired capacity is exceeded by three units. For more information, see [Configure instance weighting for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups-instance-weighting.html) in the *Amazon EC2 Auto Scaling User Guide*. Value must be in the range of 1-999. 
    *  If you specify a value for ``WeightedCapacity`` for one instance type, you must specify a value for ``WeightedCapacity`` for all of them.
    *   Every Auto Scaling group has three size parameters (``DesiredCapacity``, ``MaxSize``, and ``MinSize``). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#weighted_capacity CcAutoScalingGroup#weighted_capacity}
    */
    readonly weightedCapacity?: string;
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
        if (this._launchTemplateSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateSpecification = this._launchTemplateSpecification?.internalValue;
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
            this._imageId = undefined;
            this._instanceRequirements.internalValue = undefined;
            this._instanceType = undefined;
            this._launchTemplateSpecification.internalValue = undefined;
            this._weightedCapacity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._imageId = value.imageId;
            this._instanceRequirements.internalValue = value.instanceRequirements;
            this._instanceType = value.instanceType;
            this._launchTemplateSpecification.internalValue = value.launchTemplateSpecification;
            this._weightedCapacity = value.weightedCapacity;
        }
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

    // launch_template_specification - computed: true, optional: true, required: false
    private _launchTemplateSpecification = new MixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationPropertyOutputReference(this, "launch_template_specification");
    public get launchTemplateSpecification() {
        return this._launchTemplateSpecification;
    }
    public putLaunchTemplateSpecification(value: MixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationProperty) {
        this._launchTemplateSpecification.internalValue = value;
    }
    public resetLaunchTemplateSpecification() {
        this._launchTemplateSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateSpecificationInput() {
        return this._launchTemplateSpecification.internalValue;
    }

    // weighted_capacity - computed: true, optional: true, required: false
    private _weightedCapacity?: string; 
    public get weightedCapacity() {
        return this.getStringAttribute('weighted_capacity');
    }
    public set weightedCapacity(value: string) {
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
export interface LaunchTemplateProperty {
    /**
    * The launch template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#launch_template_specification CcAutoScalingGroup#launch_template_specification}
    */
    readonly launchTemplateSpecification?: MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty;
    /**
    * Any properties that you specify override the same properties in the launch template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#overrides CcAutoScalingGroup#overrides}
    */
    readonly overrides?: LaunchTemplateOverridesProperty[] | cdktn.IResolvable;
}
export class LaunchTemplatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LaunchTemplateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LaunchTemplateProperty | cdktn.IResolvable | undefined) {
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
    private _launchTemplateSpecification = new MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyOutputReference(this, "launch_template_specification");
    public get launchTemplateSpecification() {
        return this._launchTemplateSpecification;
    }
    public putLaunchTemplateSpecification(value: MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty) {
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
export interface MixedInstancesPolicyProperty {
    /**
    * The instances distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#instances_distribution CcAutoScalingGroup#instances_distribution}
    */
    readonly instancesDistribution?: InstancesDistributionProperty;
    /**
    * One or more launch templates and the instance types (overrides) that are used to launch EC2 instances to fulfill On-Demand and Spot capacities.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#launch_template CcAutoScalingGroup#launch_template}
    */
    readonly launchTemplate?: LaunchTemplateProperty;
}
export class MixedInstancesPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MixedInstancesPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instancesDistribution?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instancesDistribution = this._instancesDistribution?.internalValue;
        }
        if (this._launchTemplate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MixedInstancesPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instancesDistribution.internalValue = undefined;
            this._launchTemplate.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instancesDistribution.internalValue = value.instancesDistribution;
            this._launchTemplate.internalValue = value.launchTemplate;
        }
    }

    // instances_distribution - computed: true, optional: true, required: false
    private _instancesDistribution = new InstancesDistributionPropertyOutputReference(this, "instances_distribution");
    public get instancesDistribution() {
        return this._instancesDistribution;
    }
    public putInstancesDistribution(value: InstancesDistributionProperty) {
        this._instancesDistribution.internalValue = value;
    }
    public resetInstancesDistribution() {
        this._instancesDistribution.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instancesDistributionInput() {
        return this._instancesDistribution.internalValue;
    }

    // launch_template - computed: true, optional: true, required: false
    private _launchTemplate = new LaunchTemplatePropertyOutputReference(this, "launch_template");
    public get launchTemplate() {
        return this._launchTemplate;
    }
    public putLaunchTemplate(value: LaunchTemplateProperty) {
        this._launchTemplate.internalValue = value;
    }
    public resetLaunchTemplate() {
        this._launchTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateInput() {
        return this._launchTemplate.internalValue;
    }
}
export interface NotificationConfigurationProperty {
    /**
    * A list of event types that send a notification. Event types can include any of the following types. 
    *  *Allowed values*:
    *   +   ``autoscaling:EC2_INSTANCE_LAUNCH`` 
    *   +   ``autoscaling:EC2_INSTANCE_LAUNCH_ERROR`` 
    *   +   ``autoscaling:EC2_INSTANCE_TERMINATE`` 
    *   +   ``autoscaling:EC2_INSTANCE_TERMINATE_ERROR`` 
    *   +   ``autoscaling:TEST_NOTIFICATION``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#notification_types CcAutoScalingGroup#notification_types}
    */
    readonly notificationTypes?: string[];
    /**
    * The Amazon Resource Name (ARN) of the Amazon SNS topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#topic_arn CcAutoScalingGroup#topic_arn}
    */
    readonly topicArn?: string;
}
export class NotificationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._notificationTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationTypes = this._notificationTypes;
        }
        if (this._topicArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicArn = this._topicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._notificationTypes = undefined;
            this._topicArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._notificationTypes = value.notificationTypes;
            this._topicArn = value.topicArn;
        }
    }

    // notification_types - computed: true, optional: true, required: false
    private _notificationTypes?: string[]; 
    public get notificationTypes() {
        return this.getListAttribute('notification_types');
    }
    public set notificationTypes(value: string[]) {
        this._notificationTypes = value;
    }
    public resetNotificationTypes() {
        this._notificationTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTypesInput() {
        return this._notificationTypes;
    }

    // topic_arn - computed: true, optional: true, required: false
    private _topicArn?: string; 
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
        this._topicArn = value;
    }
    public resetTopicArn() {
        this._topicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
        return this._topicArn;
    }
}
export interface NotificationConfigurationsProperty {
    /**
    * A list of event types that send a notification. Event types can include any of the following types. 
    *  *Allowed values*:
    *   +   ``autoscaling:EC2_INSTANCE_LAUNCH`` 
    *   +   ``autoscaling:EC2_INSTANCE_LAUNCH_ERROR`` 
    *   +   ``autoscaling:EC2_INSTANCE_TERMINATE`` 
    *   +   ``autoscaling:EC2_INSTANCE_TERMINATE_ERROR`` 
    *   +   ``autoscaling:TEST_NOTIFICATION``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#notification_types CcAutoScalingGroup#notification_types}
    */
    readonly notificationTypes?: string[];
    /**
    * The Amazon Resource Name (ARN) of the Amazon SNS topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#topic_arn CcAutoScalingGroup#topic_arn}
    */
    readonly topicArn?: string;
}
export class NotificationConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NotificationConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._notificationTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationTypes = this._notificationTypes;
        }
        if (this._topicArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicArn = this._topicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._notificationTypes = undefined;
            this._topicArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._notificationTypes = value.notificationTypes;
            this._topicArn = value.topicArn;
        }
    }

    // notification_types - computed: true, optional: true, required: false
    private _notificationTypes?: string[]; 
    public get notificationTypes() {
        return this.getListAttribute('notification_types');
    }
    public set notificationTypes(value: string[]) {
        this._notificationTypes = value;
    }
    public resetNotificationTypes() {
        this._notificationTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTypesInput() {
        return this._notificationTypes;
    }

    // topic_arn - computed: true, optional: true, required: false
    private _topicArn?: string; 
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
        this._topicArn = value;
    }
    public resetTopicArn() {
        this._topicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
        return this._topicArn;
    }
}

export class NotificationConfigurationsPropertyList extends cdktn.ComplexList {
    public internalValue? : NotificationConfigurationsProperty[] | cdktn.IResolvable

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
    public get(index: number): NotificationConfigurationsPropertyOutputReference {
        return new NotificationConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagPropertyProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#key CcAutoScalingGroup#key}
    */
    readonly key?: string;
    /**
    * Set to ``true`` if you want CloudFormation to copy the tag to EC2 instances that are launched as part of the Auto Scaling group. Set to ``false`` if you want the tag attached only to the Auto Scaling group and not copied to any instances launched as part of the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#propagate_at_launch CcAutoScalingGroup#propagate_at_launch}
    */
    readonly propagateAtLaunch?: boolean | cdktn.IResolvable;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#value CcAutoScalingGroup#value}
    */
    readonly value?: string;
}
export class TagPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagPropertyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._propagateAtLaunch !== undefined) {
            hasAnyValues = true;
            internalValueResult.propagateAtLaunch = this._propagateAtLaunch;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagPropertyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._propagateAtLaunch = undefined;
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
            this._propagateAtLaunch = value.propagateAtLaunch;
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

    // propagate_at_launch - computed: true, optional: true, required: false
    private _propagateAtLaunch?: boolean | cdktn.IResolvable; 
    public get propagateAtLaunch() {
        return this.getBooleanAttribute('propagate_at_launch');
    }
    public set propagateAtLaunch(value: boolean | cdktn.IResolvable) {
        this._propagateAtLaunch = value;
    }
    public resetPropagateAtLaunch() {
        this._propagateAtLaunch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateAtLaunchInput() {
        return this._propagateAtLaunch;
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

export class TagPropertyPropertyList extends cdktn.ComplexList {
    public internalValue? : TagPropertyProperty[] | cdktn.IResolvable

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
    public get(index: number): TagPropertyPropertyOutputReference {
        return new TagPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TrafficSourceIdentifierProperty {
    /**
    * Identifies the traffic source.
    *  For Application Load Balancers, Gateway Load Balancers, Network Load Balancers, and VPC Lattice, this will be the Amazon Resource Name (ARN) for a target group in this account and Region. For Classic Load Balancers, this will be the name of the Classic Load Balancer in this account and Region.
    *  For example: 
    *   +  Application Load Balancer ARN: ``arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/1234567890123456``
    *   +  Classic Load Balancer name: ``my-classic-load-balancer``
    *   +  VPC Lattice ARN: ``arn:aws:vpc-lattice:us-west-2:123456789012:targetgroup/tg-1234567890123456``
    *   
    *  To get the ARN of a target group for a Application Load Balancer, Gateway Load Balancer, or Network Load Balancer, or the name of a Classic Load Balancer, use the Elastic Load Balancing [DescribeTargetGroups](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html) and [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html) API operations.
    *  To get the ARN of a target group for VPC Lattice, use the VPC Lattice [GetTargetGroup](https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetTargetGroup.html) API operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#identifier CcAutoScalingGroup#identifier}
    */
    readonly identifier?: string;
    /**
    * Provides additional context for the value of ``Identifier``.
    *  The following lists the valid values:
    *   +  ``elb`` if ``Identifier`` is the name of a Classic Load Balancer.
    *   +  ``elbv2`` if ``Identifier`` is the ARN of an Application Load Balancer, Gateway Load Balancer, or Network Load Balancer target group.
    *   +  ``vpc-lattice`` if ``Identifier`` is the ARN of a VPC Lattice target group.
    *   
    *  Required if the identifier is the name of a Classic Load Balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_auto_scaling_group#type CcAutoScalingGroup#type}
    */
    readonly type?: string;
}
export class TrafficSourceIdentifierPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TrafficSourceIdentifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.identifier = this._identifier;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrafficSourceIdentifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identifier = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identifier = value.identifier;
            this._type = value.type;
        }
    }

    // identifier - computed: true, optional: true, required: false
    private _identifier?: string; 
    public get identifier() {
        return this.getStringAttribute('identifier');
    }
    public set identifier(value: string) {
        this._identifier = value;
    }
    public resetIdentifier() {
        this._identifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identifierInput() {
        return this._identifier;
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

export class TrafficSourceIdentifierPropertyList extends cdktn.ComplexList {
    public internalValue? : TrafficSourceIdentifierProperty[] | cdktn.IResolvable

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
    public get(index: number): TrafficSourceIdentifierPropertyOutputReference {
        return new TrafficSourceIdentifierPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
