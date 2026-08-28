// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDeploymentGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Information about the Amazon CloudWatch alarms that are associated with the deployment group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#alarm_configuration CcDeploymentGroup#alarm_configuration}
    */
    readonly alarmConfiguration?: CcDeploymentGroup.AlarmConfigurationProperty;
    /**
    * The name of an existing CodeDeploy application to associate this deployment group with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#application_name CcDeploymentGroup#application_name}
    */
    readonly applicationName: string;
    /**
    * Information about the automatic rollback configuration that is associated with the deployment group. If you specify this property, don't specify the Deployment property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#auto_rollback_configuration CcDeploymentGroup#auto_rollback_configuration}
    */
    readonly autoRollbackConfiguration?: CcDeploymentGroup.AutoRollbackConfigurationProperty;
    /**
    * A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created. Duplicates are not allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#auto_scaling_groups CcDeploymentGroup#auto_scaling_groups}
    */
    readonly autoScalingGroups?: string[];
    /**
    * Information about blue/green deployment options for a deployment group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#blue_green_deployment_configuration CcDeploymentGroup#blue_green_deployment_configuration}
    */
    readonly blueGreenDeploymentConfiguration?: CcDeploymentGroup.BlueGreenDeploymentConfigurationProperty;
    /**
    * The application revision to deploy to this deployment group. If you specify this property, your target application revision is deployed as soon as the provisioning process is complete. If you specify this property, don't specify the AutoRollbackConfiguration property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#deployment CcDeploymentGroup#deployment}
    */
    readonly deployment?: CcDeploymentGroup.DeploymentProperty;
    /**
    * A deployment configuration name or a predefined configuration name. With predefined configurations, you can deploy application revisions to one instance at a time (CodeDeployDefault.OneAtATime), half of the instances at a time (CodeDeployDefault.HalfAtATime), or all the instances at once (CodeDeployDefault.AllAtOnce).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#deployment_config_name CcDeploymentGroup#deployment_config_name}
    */
    readonly deploymentConfigName?: string;
    /**
    * A name for the deployment group. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment group name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#deployment_group_name CcDeploymentGroup#deployment_group_name}
    */
    readonly deploymentGroupName?: string;
    /**
    * Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer. If you specify this property with a blue/green deployment type, don't specify the AutoScalingGroups, LoadBalancerInfo, or Deployment properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#deployment_style CcDeploymentGroup#deployment_style}
    */
    readonly deploymentStyle?: CcDeploymentGroup.DeploymentStyleProperty;
    /**
    * The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify EC2TagFilters or Ec2TagSet, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#ec_2_tag_filters CcDeploymentGroup#ec_2_tag_filters}
    */
    readonly ec2TagFilters?: CcDeploymentGroup.EC2TagFilterProperty[] | cdktn.IResolvable;
    /**
    * Information about groups of tags applied to Amazon EC2 instances. Use when the deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#ec_2_tag_set CcDeploymentGroup#ec_2_tag_set}
    */
    readonly ec2TagSet?: CcDeploymentGroup.EC2TagSetProperty;
    /**
    * The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <clustername>:<servicename>.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#ecs_services CcDeploymentGroup#ecs_services}
    */
    readonly ecsServices?: CcDeploymentGroup.ECSServiceProperty[] | cdktn.IResolvable;
    /**
    * Information about the load balancer to use in a deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#load_balancer_info CcDeploymentGroup#load_balancer_info}
    */
    readonly loadBalancerInfo?: CcDeploymentGroup.LoadBalancerInfoProperty;
    /**
    * The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group. CodeDeploy includes all on-premises instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#on_premises_instance_tag_filters CcDeploymentGroup#on_premises_instance_tag_filters}
    */
    readonly onPremisesInstanceTagFilters?: CcDeploymentGroup.TagFilterProperty[] | cdktn.IResolvable;
    /**
    * Information about groups of tags applied to on-premises instances. The deployment group includes only on-premises instances identified by all the tag groups. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#on_premises_tag_set CcDeploymentGroup#on_premises_tag_set}
    */
    readonly onPremisesTagSet?: CcDeploymentGroup.OnPremisesTagSetProperty;
    /**
    * Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. If this option is set to UPDATE or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances. If this option is set to IGNORE, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#outdated_instances_strategy CcDeploymentGroup#outdated_instances_strategy}
    */
    readonly outdatedInstancesStrategy?: string;
    /**
    * A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf. For more information, see 'Create a Service Role for AWS CodeDeploy' in the AWS CodeDeploy User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#service_role_arn CcDeploymentGroup#service_role_arn}
    */
    readonly serviceRoleArn: string;
    /**
    * The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#tags CcDeploymentGroup#tags}
    */
    readonly tags?: CcDeploymentGroup.TagProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#termination_hook_enabled CcDeploymentGroup#termination_hook_enabled}
    */
    readonly terminationHookEnabled?: boolean | cdktn.IResolvable;
    /**
    * Information about triggers associated with the deployment group. Duplicates are not allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#trigger_configurations CcDeploymentGroup#trigger_configurations}
    */
    readonly triggerConfigurations?: CcDeploymentGroup.TriggerConfigProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group awscc_codedeploy_deployment_group}
*/
export class CcDeploymentGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codedeploy_deployment_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDeploymentGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDeploymentGroup to import
    * @param importFromId The id of the existing CcDeploymentGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDeploymentGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codedeploy_deployment_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group awscc_codedeploy_deployment_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDeploymentGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcDeploymentGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codedeploy_deployment_group',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._alarmConfiguration.internalValue = config.alarmConfiguration;
        this._applicationName = config.applicationName;
        this._autoRollbackConfiguration.internalValue = config.autoRollbackConfiguration;
        this._autoScalingGroups = config.autoScalingGroups;
        this._blueGreenDeploymentConfiguration.internalValue = config.blueGreenDeploymentConfiguration;
        this._deployment.internalValue = config.deployment;
        this._deploymentConfigName = config.deploymentConfigName;
        this._deploymentGroupName = config.deploymentGroupName;
        this._deploymentStyle.internalValue = config.deploymentStyle;
        this._ec2TagFilters.internalValue = config.ec2TagFilters;
        this._ec2TagSet.internalValue = config.ec2TagSet;
        this._ecsServices.internalValue = config.ecsServices;
        this._loadBalancerInfo.internalValue = config.loadBalancerInfo;
        this._onPremisesInstanceTagFilters.internalValue = config.onPremisesInstanceTagFilters;
        this._onPremisesTagSet.internalValue = config.onPremisesTagSet;
        this._outdatedInstancesStrategy = config.outdatedInstancesStrategy;
        this._serviceRoleArn = config.serviceRoleArn;
        this._tags.internalValue = config.tags;
        this._terminationHookEnabled = config.terminationHookEnabled;
        this._triggerConfigurations.internalValue = config.triggerConfigurations;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alarm_configuration - computed: true, optional: true, required: false
    private _alarmConfiguration = new CcDeploymentGroup.AlarmConfigurationPropertyOutputReference(this, "alarm_configuration");
    public get alarmConfiguration() {
        return this._alarmConfiguration;
    }
    public putAlarmConfiguration(value: CcDeploymentGroup.AlarmConfigurationProperty) {
        this._alarmConfiguration.internalValue = value;
    }
    public resetAlarmConfiguration() {
        this._alarmConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmConfigurationInput() {
        return this._alarmConfiguration.internalValue;
    }

    // application_name - computed: false, optional: false, required: true
    private _applicationName?: string; 
    public get applicationName() {
        return this.getStringAttribute('application_name');
    }
    public set applicationName(value: string) {
        this._applicationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationNameInput() {
        return this._applicationName;
    }

    // auto_rollback_configuration - computed: true, optional: true, required: false
    private _autoRollbackConfiguration = new CcDeploymentGroup.AutoRollbackConfigurationPropertyOutputReference(this, "auto_rollback_configuration");
    public get autoRollbackConfiguration() {
        return this._autoRollbackConfiguration;
    }
    public putAutoRollbackConfiguration(value: CcDeploymentGroup.AutoRollbackConfigurationProperty) {
        this._autoRollbackConfiguration.internalValue = value;
    }
    public resetAutoRollbackConfiguration() {
        this._autoRollbackConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoRollbackConfigurationInput() {
        return this._autoRollbackConfiguration.internalValue;
    }

    // auto_scaling_groups - computed: true, optional: true, required: false
    private _autoScalingGroups?: string[]; 
    public get autoScalingGroups() {
        return this.getListAttribute('auto_scaling_groups');
    }
    public set autoScalingGroups(value: string[]) {
        this._autoScalingGroups = value;
    }
    public resetAutoScalingGroups() {
        this._autoScalingGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingGroupsInput() {
        return this._autoScalingGroups;
    }

    // blue_green_deployment_configuration - computed: true, optional: true, required: false
    private _blueGreenDeploymentConfiguration = new CcDeploymentGroup.BlueGreenDeploymentConfigurationPropertyOutputReference(this, "blue_green_deployment_configuration");
    public get blueGreenDeploymentConfiguration() {
        return this._blueGreenDeploymentConfiguration;
    }
    public putBlueGreenDeploymentConfiguration(value: CcDeploymentGroup.BlueGreenDeploymentConfigurationProperty) {
        this._blueGreenDeploymentConfiguration.internalValue = value;
    }
    public resetBlueGreenDeploymentConfiguration() {
        this._blueGreenDeploymentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blueGreenDeploymentConfigurationInput() {
        return this._blueGreenDeploymentConfiguration.internalValue;
    }

    // deployment - computed: true, optional: true, required: false
    private _deployment = new CcDeploymentGroup.DeploymentPropertyOutputReference(this, "deployment");
    public get deployment() {
        return this._deployment;
    }
    public putDeployment(value: CcDeploymentGroup.DeploymentProperty) {
        this._deployment.internalValue = value;
    }
    public resetDeployment() {
        this._deployment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentInput() {
        return this._deployment.internalValue;
    }

    // deployment_config_name - computed: true, optional: true, required: false
    private _deploymentConfigName?: string; 
    public get deploymentConfigName() {
        return this.getStringAttribute('deployment_config_name');
    }
    public set deploymentConfigName(value: string) {
        this._deploymentConfigName = value;
    }
    public resetDeploymentConfigName() {
        this._deploymentConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentConfigNameInput() {
        return this._deploymentConfigName;
    }

    // deployment_group_name - computed: true, optional: true, required: false
    private _deploymentGroupName?: string; 
    public get deploymentGroupName() {
        return this.getStringAttribute('deployment_group_name');
    }
    public set deploymentGroupName(value: string) {
        this._deploymentGroupName = value;
    }
    public resetDeploymentGroupName() {
        this._deploymentGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentGroupNameInput() {
        return this._deploymentGroupName;
    }

    // deployment_style - computed: true, optional: true, required: false
    private _deploymentStyle = new CcDeploymentGroup.DeploymentStylePropertyOutputReference(this, "deployment_style");
    public get deploymentStyle() {
        return this._deploymentStyle;
    }
    public putDeploymentStyle(value: CcDeploymentGroup.DeploymentStyleProperty) {
        this._deploymentStyle.internalValue = value;
    }
    public resetDeploymentStyle() {
        this._deploymentStyle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentStyleInput() {
        return this._deploymentStyle.internalValue;
    }

    // ec_2_tag_filters - computed: true, optional: true, required: false
    private _ec2TagFilters = new CcDeploymentGroup.EC2TagFilterPropertyList(this, "ec_2_tag_filters", false);
    public get ec2TagFilters() {
        return this._ec2TagFilters;
    }
    public putEc2TagFilters(value: CcDeploymentGroup.EC2TagFilterProperty[] | cdktn.IResolvable) {
        this._ec2TagFilters.internalValue = value;
    }
    public resetEc2TagFilters() {
        this._ec2TagFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2TagFiltersInput() {
        return this._ec2TagFilters.internalValue;
    }

    // ec_2_tag_set - computed: true, optional: true, required: false
    private _ec2TagSet = new CcDeploymentGroup.EC2TagSetPropertyOutputReference(this, "ec_2_tag_set");
    public get ec2TagSet() {
        return this._ec2TagSet;
    }
    public putEc2TagSet(value: CcDeploymentGroup.EC2TagSetProperty) {
        this._ec2TagSet.internalValue = value;
    }
    public resetEc2TagSet() {
        this._ec2TagSet.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2TagSetInput() {
        return this._ec2TagSet.internalValue;
    }

    // ecs_services - computed: true, optional: true, required: false
    private _ecsServices = new CcDeploymentGroup.ECSServicePropertyList(this, "ecs_services", false);
    public get ecsServices() {
        return this._ecsServices;
    }
    public putEcsServices(value: CcDeploymentGroup.ECSServiceProperty[] | cdktn.IResolvable) {
        this._ecsServices.internalValue = value;
    }
    public resetEcsServices() {
        this._ecsServices.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecsServicesInput() {
        return this._ecsServices.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // load_balancer_info - computed: true, optional: true, required: false
    private _loadBalancerInfo = new CcDeploymentGroup.LoadBalancerInfoPropertyOutputReference(this, "load_balancer_info");
    public get loadBalancerInfo() {
        return this._loadBalancerInfo;
    }
    public putLoadBalancerInfo(value: CcDeploymentGroup.LoadBalancerInfoProperty) {
        this._loadBalancerInfo.internalValue = value;
    }
    public resetLoadBalancerInfo() {
        this._loadBalancerInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerInfoInput() {
        return this._loadBalancerInfo.internalValue;
    }

    // on_premises_instance_tag_filters - computed: true, optional: true, required: false
    private _onPremisesInstanceTagFilters = new CcDeploymentGroup.TagFilterPropertyList(this, "on_premises_instance_tag_filters", false);
    public get onPremisesInstanceTagFilters() {
        return this._onPremisesInstanceTagFilters;
    }
    public putOnPremisesInstanceTagFilters(value: CcDeploymentGroup.TagFilterProperty[] | cdktn.IResolvable) {
        this._onPremisesInstanceTagFilters.internalValue = value;
    }
    public resetOnPremisesInstanceTagFilters() {
        this._onPremisesInstanceTagFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onPremisesInstanceTagFiltersInput() {
        return this._onPremisesInstanceTagFilters.internalValue;
    }

    // on_premises_tag_set - computed: true, optional: true, required: false
    private _onPremisesTagSet = new CcDeploymentGroup.OnPremisesTagSetPropertyOutputReference(this, "on_premises_tag_set");
    public get onPremisesTagSet() {
        return this._onPremisesTagSet;
    }
    public putOnPremisesTagSet(value: CcDeploymentGroup.OnPremisesTagSetProperty) {
        this._onPremisesTagSet.internalValue = value;
    }
    public resetOnPremisesTagSet() {
        this._onPremisesTagSet.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onPremisesTagSetInput() {
        return this._onPremisesTagSet.internalValue;
    }

    // outdated_instances_strategy - computed: true, optional: true, required: false
    private _outdatedInstancesStrategy?: string; 
    public get outdatedInstancesStrategy() {
        return this.getStringAttribute('outdated_instances_strategy');
    }
    public set outdatedInstancesStrategy(value: string) {
        this._outdatedInstancesStrategy = value;
    }
    public resetOutdatedInstancesStrategy() {
        this._outdatedInstancesStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outdatedInstancesStrategyInput() {
        return this._outdatedInstancesStrategy;
    }

    // service_role_arn - computed: false, optional: false, required: true
    private _serviceRoleArn?: string; 
    public get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    public set serviceRoleArn(value: string) {
        this._serviceRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleArnInput() {
        return this._serviceRoleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDeploymentGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDeploymentGroup.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // termination_hook_enabled - computed: true, optional: true, required: false
    private _terminationHookEnabled?: boolean | cdktn.IResolvable; 
    public get terminationHookEnabled() {
        return this.getBooleanAttribute('termination_hook_enabled');
    }
    public set terminationHookEnabled(value: boolean | cdktn.IResolvable) {
        this._terminationHookEnabled = value;
    }
    public resetTerminationHookEnabled() {
        this._terminationHookEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminationHookEnabledInput() {
        return this._terminationHookEnabled;
    }

    // trigger_configurations - computed: true, optional: true, required: false
    private _triggerConfigurations = new CcDeploymentGroup.TriggerConfigPropertyList(this, "trigger_configurations", false);
    public get triggerConfigurations() {
        return this._triggerConfigurations;
    }
    public putTriggerConfigurations(value: CcDeploymentGroup.TriggerConfigProperty[] | cdktn.IResolvable) {
        this._triggerConfigurations.internalValue = value;
    }
    public resetTriggerConfigurations() {
        this._triggerConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerConfigurationsInput() {
        return this._triggerConfigurations.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            alarm_configuration: ccDeploymentGroupAlarmConfigurationPropertyToTerraform(this._alarmConfiguration.internalValue),
            application_name: cdktn.stringToTerraform(this._applicationName),
            auto_rollback_configuration: ccDeploymentGroupAutoRollbackConfigurationPropertyToTerraform(this._autoRollbackConfiguration.internalValue),
            auto_scaling_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._autoScalingGroups),
            blue_green_deployment_configuration: ccDeploymentGroupBlueGreenDeploymentConfigurationPropertyToTerraform(this._blueGreenDeploymentConfiguration.internalValue),
            deployment: ccDeploymentGroupDeploymentPropertyToTerraform(this._deployment.internalValue),
            deployment_config_name: cdktn.stringToTerraform(this._deploymentConfigName),
            deployment_group_name: cdktn.stringToTerraform(this._deploymentGroupName),
            deployment_style: ccDeploymentGroupDeploymentStylePropertyToTerraform(this._deploymentStyle.internalValue),
            ec_2_tag_filters: cdktn.listMapper(ccDeploymentGroupEC2TagFilterPropertyToTerraform, false)(this._ec2TagFilters.internalValue),
            ec_2_tag_set: ccDeploymentGroupEC2TagSetPropertyToTerraform(this._ec2TagSet.internalValue),
            ecs_services: cdktn.listMapper(ccDeploymentGroupECSServicePropertyToTerraform, false)(this._ecsServices.internalValue),
            load_balancer_info: ccDeploymentGroupLoadBalancerInfoPropertyToTerraform(this._loadBalancerInfo.internalValue),
            on_premises_instance_tag_filters: cdktn.listMapper(ccDeploymentGroupTagFilterPropertyToTerraform, false)(this._onPremisesInstanceTagFilters.internalValue),
            on_premises_tag_set: ccDeploymentGroupOnPremisesTagSetPropertyToTerraform(this._onPremisesTagSet.internalValue),
            outdated_instances_strategy: cdktn.stringToTerraform(this._outdatedInstancesStrategy),
            service_role_arn: cdktn.stringToTerraform(this._serviceRoleArn),
            tags: cdktn.listMapper(ccDeploymentGroupTagPropertyToTerraform, false)(this._tags.internalValue),
            termination_hook_enabled: cdktn.booleanToTerraform(this._terminationHookEnabled),
            trigger_configurations: cdktn.listMapper(ccDeploymentGroupTriggerConfigPropertyToTerraform, false)(this._triggerConfigurations.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alarm_configuration: {
                value: ccDeploymentGroupAlarmConfigurationPropertyToHclTerraform(this._alarmConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeploymentGroup.AlarmConfigurationProperty",
            },
            application_name: {
                value: cdktn.stringToHclTerraform(this._applicationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_rollback_configuration: {
                value: ccDeploymentGroupAutoRollbackConfigurationPropertyToHclTerraform(this._autoRollbackConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeploymentGroup.AutoRollbackConfigurationProperty",
            },
            auto_scaling_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._autoScalingGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            blue_green_deployment_configuration: {
                value: ccDeploymentGroupBlueGreenDeploymentConfigurationPropertyToHclTerraform(this._blueGreenDeploymentConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeploymentGroup.BlueGreenDeploymentConfigurationProperty",
            },
            deployment: {
                value: ccDeploymentGroupDeploymentPropertyToHclTerraform(this._deployment.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeploymentGroup.DeploymentProperty",
            },
            deployment_config_name: {
                value: cdktn.stringToHclTerraform(this._deploymentConfigName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deployment_group_name: {
                value: cdktn.stringToHclTerraform(this._deploymentGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deployment_style: {
                value: ccDeploymentGroupDeploymentStylePropertyToHclTerraform(this._deploymentStyle.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeploymentGroup.DeploymentStyleProperty",
            },
            ec_2_tag_filters: {
                value: cdktn.listMapperHcl(ccDeploymentGroupEC2TagFilterPropertyToHclTerraform, false)(this._ec2TagFilters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDeploymentGroup.EC2TagFilterPropertyList",
            },
            ec_2_tag_set: {
                value: ccDeploymentGroupEC2TagSetPropertyToHclTerraform(this._ec2TagSet.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeploymentGroup.EC2TagSetProperty",
            },
            ecs_services: {
                value: cdktn.listMapperHcl(ccDeploymentGroupECSServicePropertyToHclTerraform, false)(this._ecsServices.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDeploymentGroup.ECSServicePropertyList",
            },
            load_balancer_info: {
                value: ccDeploymentGroupLoadBalancerInfoPropertyToHclTerraform(this._loadBalancerInfo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeploymentGroup.LoadBalancerInfoProperty",
            },
            on_premises_instance_tag_filters: {
                value: cdktn.listMapperHcl(ccDeploymentGroupTagFilterPropertyToHclTerraform, false)(this._onPremisesInstanceTagFilters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDeploymentGroup.TagFilterPropertyList",
            },
            on_premises_tag_set: {
                value: ccDeploymentGroupOnPremisesTagSetPropertyToHclTerraform(this._onPremisesTagSet.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeploymentGroup.OnPremisesTagSetProperty",
            },
            outdated_instances_strategy: {
                value: cdktn.stringToHclTerraform(this._outdatedInstancesStrategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_role_arn: {
                value: cdktn.stringToHclTerraform(this._serviceRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDeploymentGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDeploymentGroup.TagPropertyList",
            },
            termination_hook_enabled: {
                value: cdktn.booleanToHclTerraform(this._terminationHookEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            trigger_configurations: {
                value: cdktn.listMapperHcl(ccDeploymentGroupTriggerConfigPropertyToHclTerraform, false)(this._triggerConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDeploymentGroup.TriggerConfigPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDeploymentGroupAlarmPropertyToTerraform(struct?: CcDeploymentGroup.AlarmProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccDeploymentGroupAlarmPropertyToHclTerraform(struct?: CcDeploymentGroup.AlarmProperty | cdktn.IResolvable): any {
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


export function ccDeploymentGroupAlarmConfigurationPropertyToTerraform(struct?: CcDeploymentGroup.AlarmConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarms: cdktn.listMapper(ccDeploymentGroupAlarmPropertyToTerraform, false)(struct!.alarms),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        ignore_poll_alarm_failure: cdktn.booleanToTerraform(struct!.ignorePollAlarmFailure),
    }
}


export function ccDeploymentGroupAlarmConfigurationPropertyToHclTerraform(struct?: CcDeploymentGroup.AlarmConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarms: {
            value: cdktn.listMapperHcl(ccDeploymentGroupAlarmPropertyToHclTerraform, false)(struct!.alarms),
            isBlock: true,
            type: "list",
            storageClassType: "AlarmPropertyList",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ignore_poll_alarm_failure: {
            value: cdktn.booleanToHclTerraform(struct!.ignorePollAlarmFailure),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupAutoRollbackConfigurationPropertyToTerraform(struct?: CcDeploymentGroup.AutoRollbackConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
    }
}


export function ccDeploymentGroupAutoRollbackConfigurationPropertyToHclTerraform(struct?: CcDeploymentGroup.AutoRollbackConfigurationProperty | cdktn.IResolvable): any {
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
        events: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupDeploymentReadyOptionPropertyToTerraform(struct?: CcDeploymentGroup.DeploymentReadyOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_on_timeout: cdktn.stringToTerraform(struct!.actionOnTimeout),
        wait_time_in_minutes: cdktn.numberToTerraform(struct!.waitTimeInMinutes),
    }
}


export function ccDeploymentGroupDeploymentReadyOptionPropertyToHclTerraform(struct?: CcDeploymentGroup.DeploymentReadyOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_on_timeout: {
            value: cdktn.stringToHclTerraform(struct!.actionOnTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wait_time_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.waitTimeInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupGreenFleetProvisioningOptionPropertyToTerraform(struct?: CcDeploymentGroup.GreenFleetProvisioningOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
    }
}


export function ccDeploymentGroupGreenFleetProvisioningOptionPropertyToHclTerraform(struct?: CcDeploymentGroup.GreenFleetProvisioningOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupBlueInstanceTerminationOptionPropertyToTerraform(struct?: CcDeploymentGroup.BlueInstanceTerminationOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        termination_wait_time_in_minutes: cdktn.numberToTerraform(struct!.terminationWaitTimeInMinutes),
    }
}


export function ccDeploymentGroupBlueInstanceTerminationOptionPropertyToHclTerraform(struct?: CcDeploymentGroup.BlueInstanceTerminationOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        termination_wait_time_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.terminationWaitTimeInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupBlueGreenDeploymentConfigurationPropertyToTerraform(struct?: CcDeploymentGroup.BlueGreenDeploymentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deployment_ready_option: ccDeploymentGroupDeploymentReadyOptionPropertyToTerraform(struct!.deploymentReadyOption),
        green_fleet_provisioning_option: ccDeploymentGroupGreenFleetProvisioningOptionPropertyToTerraform(struct!.greenFleetProvisioningOption),
        terminate_blue_instances_on_deployment_success: ccDeploymentGroupBlueInstanceTerminationOptionPropertyToTerraform(struct!.terminateBlueInstancesOnDeploymentSuccess),
    }
}


export function ccDeploymentGroupBlueGreenDeploymentConfigurationPropertyToHclTerraform(struct?: CcDeploymentGroup.BlueGreenDeploymentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deployment_ready_option: {
            value: ccDeploymentGroupDeploymentReadyOptionPropertyToHclTerraform(struct!.deploymentReadyOption),
            isBlock: true,
            type: "struct",
            storageClassType: "DeploymentReadyOptionProperty",
        },
        green_fleet_provisioning_option: {
            value: ccDeploymentGroupGreenFleetProvisioningOptionPropertyToHclTerraform(struct!.greenFleetProvisioningOption),
            isBlock: true,
            type: "struct",
            storageClassType: "GreenFleetProvisioningOptionProperty",
        },
        terminate_blue_instances_on_deployment_success: {
            value: ccDeploymentGroupBlueInstanceTerminationOptionPropertyToHclTerraform(struct!.terminateBlueInstancesOnDeploymentSuccess),
            isBlock: true,
            type: "struct",
            storageClassType: "BlueInstanceTerminationOptionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupGitHubLocationPropertyToTerraform(struct?: CcDeploymentGroup.GitHubLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        commit_id: cdktn.stringToTerraform(struct!.commitId),
        repository: cdktn.stringToTerraform(struct!.repository),
    }
}


export function ccDeploymentGroupGitHubLocationPropertyToHclTerraform(struct?: CcDeploymentGroup.GitHubLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        commit_id: {
            value: cdktn.stringToHclTerraform(struct!.commitId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repository: {
            value: cdktn.stringToHclTerraform(struct!.repository),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupS3LocationPropertyToTerraform(struct?: CcDeploymentGroup.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        bundle_type: cdktn.stringToTerraform(struct!.bundleType),
        e_tag: cdktn.stringToTerraform(struct!.eTag),
        key: cdktn.stringToTerraform(struct!.key),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccDeploymentGroupS3LocationPropertyToHclTerraform(struct?: CcDeploymentGroup.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bundle_type: {
            value: cdktn.stringToHclTerraform(struct!.bundleType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        e_tag: {
            value: cdktn.stringToHclTerraform(struct!.eTag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
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


export function ccDeploymentGroupRevisionLocationPropertyToTerraform(struct?: CcDeploymentGroup.RevisionLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        git_hub_location: ccDeploymentGroupGitHubLocationPropertyToTerraform(struct!.gitHubLocation),
        revision_type: cdktn.stringToTerraform(struct!.revisionType),
        s3_location: ccDeploymentGroupS3LocationPropertyToTerraform(struct!.s3Location),
    }
}


export function ccDeploymentGroupRevisionLocationPropertyToHclTerraform(struct?: CcDeploymentGroup.RevisionLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        git_hub_location: {
            value: ccDeploymentGroupGitHubLocationPropertyToHclTerraform(struct!.gitHubLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "GitHubLocationProperty",
        },
        revision_type: {
            value: cdktn.stringToHclTerraform(struct!.revisionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_location: {
            value: ccDeploymentGroupS3LocationPropertyToHclTerraform(struct!.s3Location),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupDeploymentPropertyToTerraform(struct?: CcDeploymentGroup.DeploymentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        ignore_application_stop_failures: cdktn.booleanToTerraform(struct!.ignoreApplicationStopFailures),
        revision: ccDeploymentGroupRevisionLocationPropertyToTerraform(struct!.revision),
    }
}


export function ccDeploymentGroupDeploymentPropertyToHclTerraform(struct?: CcDeploymentGroup.DeploymentProperty | cdktn.IResolvable): any {
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
        ignore_application_stop_failures: {
            value: cdktn.booleanToHclTerraform(struct!.ignoreApplicationStopFailures),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        revision: {
            value: ccDeploymentGroupRevisionLocationPropertyToHclTerraform(struct!.revision),
            isBlock: true,
            type: "struct",
            storageClassType: "RevisionLocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupDeploymentStylePropertyToTerraform(struct?: CcDeploymentGroup.DeploymentStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deployment_option: cdktn.stringToTerraform(struct!.deploymentOption),
        deployment_type: cdktn.stringToTerraform(struct!.deploymentType),
    }
}


export function ccDeploymentGroupDeploymentStylePropertyToHclTerraform(struct?: CcDeploymentGroup.DeploymentStyleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deployment_option: {
            value: cdktn.stringToHclTerraform(struct!.deploymentOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        deployment_type: {
            value: cdktn.stringToHclTerraform(struct!.deploymentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupEC2TagFilterPropertyToTerraform(struct?: CcDeploymentGroup.EC2TagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDeploymentGroupEC2TagFilterPropertyToHclTerraform(struct?: CcDeploymentGroup.EC2TagFilterProperty | cdktn.IResolvable): any {
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
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccDeploymentGroupEc2TagGroupPropertyToTerraform(struct?: CcDeploymentGroup.Ec2TagGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDeploymentGroupEc2TagGroupPropertyToHclTerraform(struct?: CcDeploymentGroup.Ec2TagGroupProperty | cdktn.IResolvable): any {
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
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccDeploymentGroupEC2TagSetListObjectPropertyToTerraform(struct?: CcDeploymentGroup.EC2TagSetListObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ec_2_tag_group: cdktn.listMapper(ccDeploymentGroupEc2TagGroupPropertyToTerraform, false)(struct!.ec2TagGroup),
    }
}


export function ccDeploymentGroupEC2TagSetListObjectPropertyToHclTerraform(struct?: CcDeploymentGroup.EC2TagSetListObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ec_2_tag_group: {
            value: cdktn.listMapperHcl(ccDeploymentGroupEc2TagGroupPropertyToHclTerraform, false)(struct!.ec2TagGroup),
            isBlock: true,
            type: "list",
            storageClassType: "Ec2TagGroupPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupEC2TagSetPropertyToTerraform(struct?: CcDeploymentGroup.EC2TagSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ec_2_tag_set_list: cdktn.listMapper(ccDeploymentGroupEC2TagSetListObjectPropertyToTerraform, false)(struct!.ec2TagSetList),
    }
}


export function ccDeploymentGroupEC2TagSetPropertyToHclTerraform(struct?: CcDeploymentGroup.EC2TagSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ec_2_tag_set_list: {
            value: cdktn.listMapperHcl(ccDeploymentGroupEC2TagSetListObjectPropertyToHclTerraform, false)(struct!.ec2TagSetList),
            isBlock: true,
            type: "list",
            storageClassType: "EC2TagSetListObjectPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupECSServicePropertyToTerraform(struct?: CcDeploymentGroup.ECSServiceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_name: cdktn.stringToTerraform(struct!.clusterName),
        service_name: cdktn.stringToTerraform(struct!.serviceName),
    }
}


export function ccDeploymentGroupECSServicePropertyToHclTerraform(struct?: CcDeploymentGroup.ECSServiceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_name: {
            value: cdktn.stringToHclTerraform(struct!.clusterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_name: {
            value: cdktn.stringToHclTerraform(struct!.serviceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupELBInfoPropertyToTerraform(struct?: CcDeploymentGroup.ELBInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccDeploymentGroupELBInfoPropertyToHclTerraform(struct?: CcDeploymentGroup.ELBInfoProperty | cdktn.IResolvable): any {
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


export function ccDeploymentGroupTargetGroupInfoPropertyToTerraform(struct?: CcDeploymentGroup.TargetGroupInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccDeploymentGroupTargetGroupInfoPropertyToHclTerraform(struct?: CcDeploymentGroup.TargetGroupInfoProperty | cdktn.IResolvable): any {
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


export function ccDeploymentGroupTrafficRoutePropertyToTerraform(struct?: CcDeploymentGroup.TrafficRouteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        listener_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.listenerArns),
    }
}


export function ccDeploymentGroupTrafficRoutePropertyToHclTerraform(struct?: CcDeploymentGroup.TrafficRouteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        listener_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.listenerArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupTargetGroupsPropertyToTerraform(struct?: CcDeploymentGroup.TargetGroupsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccDeploymentGroupTargetGroupsPropertyToHclTerraform(struct?: CcDeploymentGroup.TargetGroupsProperty | cdktn.IResolvable): any {
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


export function ccDeploymentGroupTestTrafficRoutePropertyToTerraform(struct?: CcDeploymentGroup.TestTrafficRouteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        listener_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.listenerArns),
    }
}


export function ccDeploymentGroupTestTrafficRoutePropertyToHclTerraform(struct?: CcDeploymentGroup.TestTrafficRouteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        listener_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.listenerArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupTargetGroupPairInfoPropertyToTerraform(struct?: CcDeploymentGroup.TargetGroupPairInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        prod_traffic_route: ccDeploymentGroupTrafficRoutePropertyToTerraform(struct!.prodTrafficRoute),
        target_groups: cdktn.listMapper(ccDeploymentGroupTargetGroupsPropertyToTerraform, false)(struct!.targetGroups),
        test_traffic_route: ccDeploymentGroupTestTrafficRoutePropertyToTerraform(struct!.testTrafficRoute),
    }
}


export function ccDeploymentGroupTargetGroupPairInfoPropertyToHclTerraform(struct?: CcDeploymentGroup.TargetGroupPairInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        prod_traffic_route: {
            value: ccDeploymentGroupTrafficRoutePropertyToHclTerraform(struct!.prodTrafficRoute),
            isBlock: true,
            type: "struct",
            storageClassType: "TrafficRouteProperty",
        },
        target_groups: {
            value: cdktn.listMapperHcl(ccDeploymentGroupTargetGroupsPropertyToHclTerraform, false)(struct!.targetGroups),
            isBlock: true,
            type: "list",
            storageClassType: "TargetGroupsPropertyList",
        },
        test_traffic_route: {
            value: ccDeploymentGroupTestTrafficRoutePropertyToHclTerraform(struct!.testTrafficRoute),
            isBlock: true,
            type: "struct",
            storageClassType: "TestTrafficRouteProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupLoadBalancerInfoPropertyToTerraform(struct?: CcDeploymentGroup.LoadBalancerInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        elb_info_list: cdktn.listMapper(ccDeploymentGroupELBInfoPropertyToTerraform, false)(struct!.elbInfoList),
        target_group_info_list: cdktn.listMapper(ccDeploymentGroupTargetGroupInfoPropertyToTerraform, false)(struct!.targetGroupInfoList),
        target_group_pair_info_list: cdktn.listMapper(ccDeploymentGroupTargetGroupPairInfoPropertyToTerraform, false)(struct!.targetGroupPairInfoList),
    }
}


export function ccDeploymentGroupLoadBalancerInfoPropertyToHclTerraform(struct?: CcDeploymentGroup.LoadBalancerInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        elb_info_list: {
            value: cdktn.listMapperHcl(ccDeploymentGroupELBInfoPropertyToHclTerraform, false)(struct!.elbInfoList),
            isBlock: true,
            type: "list",
            storageClassType: "ELBInfoPropertyList",
        },
        target_group_info_list: {
            value: cdktn.listMapperHcl(ccDeploymentGroupTargetGroupInfoPropertyToHclTerraform, false)(struct!.targetGroupInfoList),
            isBlock: true,
            type: "list",
            storageClassType: "TargetGroupInfoPropertyList",
        },
        target_group_pair_info_list: {
            value: cdktn.listMapperHcl(ccDeploymentGroupTargetGroupPairInfoPropertyToHclTerraform, false)(struct!.targetGroupPairInfoList),
            isBlock: true,
            type: "list",
            storageClassType: "TargetGroupPairInfoPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupTagFilterPropertyToTerraform(struct?: CcDeploymentGroup.TagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDeploymentGroupTagFilterPropertyToHclTerraform(struct?: CcDeploymentGroup.TagFilterProperty | cdktn.IResolvable): any {
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
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccDeploymentGroupOnPremisesTagGroupPropertyToTerraform(struct?: CcDeploymentGroup.OnPremisesTagGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDeploymentGroupOnPremisesTagGroupPropertyToHclTerraform(struct?: CcDeploymentGroup.OnPremisesTagGroupProperty | cdktn.IResolvable): any {
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
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccDeploymentGroupOnPremisesTagSetListObjectPropertyToTerraform(struct?: CcDeploymentGroup.OnPremisesTagSetListObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_premises_tag_group: cdktn.listMapper(ccDeploymentGroupOnPremisesTagGroupPropertyToTerraform, false)(struct!.onPremisesTagGroup),
    }
}


export function ccDeploymentGroupOnPremisesTagSetListObjectPropertyToHclTerraform(struct?: CcDeploymentGroup.OnPremisesTagSetListObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        on_premises_tag_group: {
            value: cdktn.listMapperHcl(ccDeploymentGroupOnPremisesTagGroupPropertyToHclTerraform, false)(struct!.onPremisesTagGroup),
            isBlock: true,
            type: "list",
            storageClassType: "OnPremisesTagGroupPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupOnPremisesTagSetPropertyToTerraform(struct?: CcDeploymentGroup.OnPremisesTagSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_premises_tag_set_list: cdktn.listMapper(ccDeploymentGroupOnPremisesTagSetListObjectPropertyToTerraform, false)(struct!.onPremisesTagSetList),
    }
}


export function ccDeploymentGroupOnPremisesTagSetPropertyToHclTerraform(struct?: CcDeploymentGroup.OnPremisesTagSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        on_premises_tag_set_list: {
            value: cdktn.listMapperHcl(ccDeploymentGroupOnPremisesTagSetListObjectPropertyToHclTerraform, false)(struct!.onPremisesTagSetList),
            isBlock: true,
            type: "list",
            storageClassType: "OnPremisesTagSetListObjectPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentGroupTagPropertyToTerraform(struct?: CcDeploymentGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDeploymentGroupTagPropertyToHclTerraform(struct?: CcDeploymentGroup.TagProperty | cdktn.IResolvable): any {
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


export function ccDeploymentGroupTriggerConfigPropertyToTerraform(struct?: CcDeploymentGroup.TriggerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        trigger_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.triggerEvents),
        trigger_name: cdktn.stringToTerraform(struct!.triggerName),
        trigger_target_arn: cdktn.stringToTerraform(struct!.triggerTargetArn),
    }
}


export function ccDeploymentGroupTriggerConfigPropertyToHclTerraform(struct?: CcDeploymentGroup.TriggerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        trigger_events: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.triggerEvents),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        trigger_name: {
            value: cdktn.stringToHclTerraform(struct!.triggerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        trigger_target_arn: {
            value: cdktn.stringToHclTerraform(struct!.triggerTargetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDeploymentGroup {
export interface AlarmProperty {
    /**
    * The name of the alarm. Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#name CcDeploymentGroup#name}
    */
    readonly name?: string;
}
export class AlarmPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AlarmProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AlarmProperty | cdktn.IResolvable | undefined) {
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

export class AlarmPropertyList extends cdktn.ComplexList {
    public internalValue? : AlarmProperty[] | cdktn.IResolvable

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
    public get(index: number): AlarmPropertyOutputReference {
        return new AlarmPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AlarmConfigurationProperty {
    /**
    * A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#alarms CcDeploymentGroup#alarms}
    */
    readonly alarms?: AlarmProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether the alarm configuration is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#enabled CcDeploymentGroup#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. The default value is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#ignore_poll_alarm_failure CcDeploymentGroup#ignore_poll_alarm_failure}
    */
    readonly ignorePollAlarmFailure?: boolean | cdktn.IResolvable;
}
export class AlarmConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarms = this._alarms?.internalValue;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._ignorePollAlarmFailure !== undefined) {
            hasAnyValues = true;
            internalValueResult.ignorePollAlarmFailure = this._ignorePollAlarmFailure;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarms.internalValue = undefined;
            this._enabled = undefined;
            this._ignorePollAlarmFailure = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarms.internalValue = value.alarms;
            this._enabled = value.enabled;
            this._ignorePollAlarmFailure = value.ignorePollAlarmFailure;
        }
    }

    // alarms - computed: true, optional: true, required: false
    private _alarms = new AlarmPropertyList(this, "alarms", false);
    public get alarms() {
        return this._alarms;
    }
    public putAlarms(value: AlarmProperty[] | cdktn.IResolvable) {
        this._alarms.internalValue = value;
    }
    public resetAlarms() {
        this._alarms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmsInput() {
        return this._alarms.internalValue;
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

    // ignore_poll_alarm_failure - computed: true, optional: true, required: false
    private _ignorePollAlarmFailure?: boolean | cdktn.IResolvable; 
    public get ignorePollAlarmFailure() {
        return this.getBooleanAttribute('ignore_poll_alarm_failure');
    }
    public set ignorePollAlarmFailure(value: boolean | cdktn.IResolvable) {
        this._ignorePollAlarmFailure = value;
    }
    public resetIgnorePollAlarmFailure() {
        this._ignorePollAlarmFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignorePollAlarmFailureInput() {
        return this._ignorePollAlarmFailure;
    }
}
export interface AutoRollbackConfigurationProperty {
    /**
    * Indicates whether a defined automatic rollback configuration is currently enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#enabled CcDeploymentGroup#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The event type or types that trigger a rollback.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#events CcDeploymentGroup#events}
    */
    readonly events?: string[];
}
export class AutoRollbackConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoRollbackConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._events !== undefined) {
            hasAnyValues = true;
            internalValueResult.events = this._events;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoRollbackConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._events = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._events = value.events;
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

    // events - computed: true, optional: true, required: false
    private _events?: string[]; 
    public get events() {
        return this.getListAttribute('events');
    }
    public set events(value: string[]) {
        this._events = value;
    }
    public resetEvents() {
        this._events = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventsInput() {
        return this._events;
    }
}
export interface DeploymentReadyOptionProperty {
    /**
    * Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment. CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment. STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using ContinueDeployment . If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#action_on_timeout CcDeploymentGroup#action_on_timeout}
    */
    readonly actionOnTimeout?: string;
    /**
    * The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually. Applies only to the STOP_DEPLOYMENT option for actionOnTimeout.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#wait_time_in_minutes CcDeploymentGroup#wait_time_in_minutes}
    */
    readonly waitTimeInMinutes?: number;
}
export class DeploymentReadyOptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentReadyOptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionOnTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionOnTimeout = this._actionOnTimeout;
        }
        if (this._waitTimeInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.waitTimeInMinutes = this._waitTimeInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentReadyOptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionOnTimeout = undefined;
            this._waitTimeInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionOnTimeout = value.actionOnTimeout;
            this._waitTimeInMinutes = value.waitTimeInMinutes;
        }
    }

    // action_on_timeout - computed: true, optional: true, required: false
    private _actionOnTimeout?: string; 
    public get actionOnTimeout() {
        return this.getStringAttribute('action_on_timeout');
    }
    public set actionOnTimeout(value: string) {
        this._actionOnTimeout = value;
    }
    public resetActionOnTimeout() {
        this._actionOnTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionOnTimeoutInput() {
        return this._actionOnTimeout;
    }

    // wait_time_in_minutes - computed: true, optional: true, required: false
    private _waitTimeInMinutes?: number; 
    public get waitTimeInMinutes() {
        return this.getNumberAttribute('wait_time_in_minutes');
    }
    public set waitTimeInMinutes(value: number) {
        this._waitTimeInMinutes = value;
    }
    public resetWaitTimeInMinutes() {
        this._waitTimeInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitTimeInMinutesInput() {
        return this._waitTimeInMinutes;
    }
}
export interface GreenFleetProvisioningOptionProperty {
    /**
    * The method used to add instances to a replacement environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#action CcDeploymentGroup#action}
    */
    readonly action?: string;
}
export class GreenFleetProvisioningOptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GreenFleetProvisioningOptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GreenFleetProvisioningOptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }
}
export interface BlueInstanceTerminationOptionProperty {
    /**
    * The action to take on instances in the original environment after a successful blue/green deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#action CcDeploymentGroup#action}
    */
    readonly action?: string;
    /**
    * For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment. For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set. The maximum setting is 2880 minutes (2 days).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#termination_wait_time_in_minutes CcDeploymentGroup#termination_wait_time_in_minutes}
    */
    readonly terminationWaitTimeInMinutes?: number;
}
export class BlueInstanceTerminationOptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BlueInstanceTerminationOptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._terminationWaitTimeInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.terminationWaitTimeInMinutes = this._terminationWaitTimeInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BlueInstanceTerminationOptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._terminationWaitTimeInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._terminationWaitTimeInMinutes = value.terminationWaitTimeInMinutes;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // termination_wait_time_in_minutes - computed: true, optional: true, required: false
    private _terminationWaitTimeInMinutes?: number; 
    public get terminationWaitTimeInMinutes() {
        return this.getNumberAttribute('termination_wait_time_in_minutes');
    }
    public set terminationWaitTimeInMinutes(value: number) {
        this._terminationWaitTimeInMinutes = value;
    }
    public resetTerminationWaitTimeInMinutes() {
        this._terminationWaitTimeInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminationWaitTimeInMinutesInput() {
        return this._terminationWaitTimeInMinutes;
    }
}
export interface BlueGreenDeploymentConfigurationProperty {
    /**
    * Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#deployment_ready_option CcDeploymentGroup#deployment_ready_option}
    */
    readonly deploymentReadyOption?: DeploymentReadyOptionProperty;
    /**
    * Information about how instances are provisioned for a replacement environment in a blue/green deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#green_fleet_provisioning_option CcDeploymentGroup#green_fleet_provisioning_option}
    */
    readonly greenFleetProvisioningOption?: GreenFleetProvisioningOptionProperty;
    /**
    * Information about whether to terminate instances in the original fleet during a blue/green deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#terminate_blue_instances_on_deployment_success CcDeploymentGroup#terminate_blue_instances_on_deployment_success}
    */
    readonly terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOptionProperty;
}
export class BlueGreenDeploymentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BlueGreenDeploymentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deploymentReadyOption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deploymentReadyOption = this._deploymentReadyOption?.internalValue;
        }
        if (this._greenFleetProvisioningOption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.greenFleetProvisioningOption = this._greenFleetProvisioningOption?.internalValue;
        }
        if (this._terminateBlueInstancesOnDeploymentSuccess?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.terminateBlueInstancesOnDeploymentSuccess = this._terminateBlueInstancesOnDeploymentSuccess?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BlueGreenDeploymentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deploymentReadyOption.internalValue = undefined;
            this._greenFleetProvisioningOption.internalValue = undefined;
            this._terminateBlueInstancesOnDeploymentSuccess.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deploymentReadyOption.internalValue = value.deploymentReadyOption;
            this._greenFleetProvisioningOption.internalValue = value.greenFleetProvisioningOption;
            this._terminateBlueInstancesOnDeploymentSuccess.internalValue = value.terminateBlueInstancesOnDeploymentSuccess;
        }
    }

    // deployment_ready_option - computed: true, optional: true, required: false
    private _deploymentReadyOption = new DeploymentReadyOptionPropertyOutputReference(this, "deployment_ready_option");
    public get deploymentReadyOption() {
        return this._deploymentReadyOption;
    }
    public putDeploymentReadyOption(value: DeploymentReadyOptionProperty) {
        this._deploymentReadyOption.internalValue = value;
    }
    public resetDeploymentReadyOption() {
        this._deploymentReadyOption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentReadyOptionInput() {
        return this._deploymentReadyOption.internalValue;
    }

    // green_fleet_provisioning_option - computed: true, optional: true, required: false
    private _greenFleetProvisioningOption = new GreenFleetProvisioningOptionPropertyOutputReference(this, "green_fleet_provisioning_option");
    public get greenFleetProvisioningOption() {
        return this._greenFleetProvisioningOption;
    }
    public putGreenFleetProvisioningOption(value: GreenFleetProvisioningOptionProperty) {
        this._greenFleetProvisioningOption.internalValue = value;
    }
    public resetGreenFleetProvisioningOption() {
        this._greenFleetProvisioningOption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get greenFleetProvisioningOptionInput() {
        return this._greenFleetProvisioningOption.internalValue;
    }

    // terminate_blue_instances_on_deployment_success - computed: true, optional: true, required: false
    private _terminateBlueInstancesOnDeploymentSuccess = new BlueInstanceTerminationOptionPropertyOutputReference(this, "terminate_blue_instances_on_deployment_success");
    public get terminateBlueInstancesOnDeploymentSuccess() {
        return this._terminateBlueInstancesOnDeploymentSuccess;
    }
    public putTerminateBlueInstancesOnDeploymentSuccess(value: BlueInstanceTerminationOptionProperty) {
        this._terminateBlueInstancesOnDeploymentSuccess.internalValue = value;
    }
    public resetTerminateBlueInstancesOnDeploymentSuccess() {
        this._terminateBlueInstancesOnDeploymentSuccess.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminateBlueInstancesOnDeploymentSuccessInput() {
        return this._terminateBlueInstancesOnDeploymentSuccess.internalValue;
    }
}
export interface GitHubLocationProperty {
    /**
    * The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#commit_id CcDeploymentGroup#commit_id}
    */
    readonly commitId?: string;
    /**
    * The GitHub account and repository pair that stores the application revision to be deployed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#repository CcDeploymentGroup#repository}
    */
    readonly repository?: string;
}
export class GitHubLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitHubLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._commitId !== undefined) {
            hasAnyValues = true;
            internalValueResult.commitId = this._commitId;
        }
        if (this._repository !== undefined) {
            hasAnyValues = true;
            internalValueResult.repository = this._repository;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitHubLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commitId = undefined;
            this._repository = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commitId = value.commitId;
            this._repository = value.repository;
        }
    }

    // commit_id - computed: true, optional: true, required: false
    private _commitId?: string; 
    public get commitId() {
        return this.getStringAttribute('commit_id');
    }
    public set commitId(value: string) {
        this._commitId = value;
    }
    public resetCommitId() {
        this._commitId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commitIdInput() {
        return this._commitId;
    }

    // repository - computed: true, optional: true, required: false
    private _repository?: string; 
    public get repository() {
        return this.getStringAttribute('repository');
    }
    public set repository(value: string) {
        this._repository = value;
    }
    public resetRepository() {
        this._repository = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryInput() {
        return this._repository;
    }
}
export interface S3LocationProperty {
    /**
    * The name of the Amazon S3 bucket where the application revision is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#bucket CcDeploymentGroup#bucket}
    */
    readonly bucket?: string;
    /**
    * The file type of the application revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#bundle_type CcDeploymentGroup#bundle_type}
    */
    readonly bundleType?: string;
    /**
    * The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision. If the ETag is not specified as an input parameter, ETag validation of the object is skipped.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#e_tag CcDeploymentGroup#e_tag}
    */
    readonly eTag?: string;
    /**
    * The name of the Amazon S3 object that represents the bundled artifacts for the application revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#key CcDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision. If the version is not specified, the system uses the most recent version by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#version CcDeploymentGroup#version}
    */
    readonly version?: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bundleType !== undefined) {
            hasAnyValues = true;
            internalValueResult.bundleType = this._bundleType;
        }
        if (this._eTag !== undefined) {
            hasAnyValues = true;
            internalValueResult.eTag = this._eTag;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._bundleType = undefined;
            this._eTag = undefined;
            this._key = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._bundleType = value.bundleType;
            this._eTag = value.eTag;
            this._key = value.key;
            this._version = value.version;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // bundle_type - computed: true, optional: true, required: false
    private _bundleType?: string; 
    public get bundleType() {
        return this.getStringAttribute('bundle_type');
    }
    public set bundleType(value: string) {
        this._bundleType = value;
    }
    public resetBundleType() {
        this._bundleType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bundleTypeInput() {
        return this._bundleType;
    }

    // e_tag - computed: true, optional: true, required: false
    private _eTag?: string; 
    public get eTag() {
        return this.getStringAttribute('e_tag');
    }
    public set eTag(value: string) {
        this._eTag = value;
    }
    public resetETag() {
        this._eTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eTagInput() {
        return this._eTag;
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
export interface RevisionLocationProperty {
    /**
    * Specifies the location of an application revision that is stored in GitHub.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#git_hub_location CcDeploymentGroup#git_hub_location}
    */
    readonly gitHubLocation?: GitHubLocationProperty;
    /**
    * The type of application revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#revision_type CcDeploymentGroup#revision_type}
    */
    readonly revisionType?: string;
    /**
    * Information about the location of application artifacts stored in Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#s3_location CcDeploymentGroup#s3_location}
    */
    readonly s3Location?: S3LocationProperty;
}
export class RevisionLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RevisionLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gitHubLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitHubLocation = this._gitHubLocation?.internalValue;
        }
        if (this._revisionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.revisionType = this._revisionType;
        }
        if (this._s3Location?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Location = this._s3Location?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RevisionLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gitHubLocation.internalValue = undefined;
            this._revisionType = undefined;
            this._s3Location.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gitHubLocation.internalValue = value.gitHubLocation;
            this._revisionType = value.revisionType;
            this._s3Location.internalValue = value.s3Location;
        }
    }

    // git_hub_location - computed: true, optional: true, required: false
    private _gitHubLocation = new GitHubLocationPropertyOutputReference(this, "git_hub_location");
    public get gitHubLocation() {
        return this._gitHubLocation;
    }
    public putGitHubLocation(value: GitHubLocationProperty) {
        this._gitHubLocation.internalValue = value;
    }
    public resetGitHubLocation() {
        this._gitHubLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitHubLocationInput() {
        return this._gitHubLocation.internalValue;
    }

    // revision_type - computed: true, optional: true, required: false
    private _revisionType?: string; 
    public get revisionType() {
        return this.getStringAttribute('revision_type');
    }
    public set revisionType(value: string) {
        this._revisionType = value;
    }
    public resetRevisionType() {
        this._revisionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revisionTypeInput() {
        return this._revisionType;
    }

    // s3_location - computed: true, optional: true, required: false
    private _s3Location = new S3LocationPropertyOutputReference(this, "s3_location");
    public get s3Location() {
        return this._s3Location;
    }
    public putS3Location(value: S3LocationProperty) {
        this._s3Location.internalValue = value;
    }
    public resetS3Location() {
        this._s3Location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3LocationInput() {
        return this._s3Location.internalValue;
    }
}
export interface DeploymentProperty {
    /**
    * A description of the deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#description CcDeploymentGroup#description}
    */
    readonly description?: string;
    /**
    * If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#ignore_application_stop_failures CcDeploymentGroup#ignore_application_stop_failures}
    */
    readonly ignoreApplicationStopFailures?: boolean | cdktn.IResolvable;
    /**
    * Information about the location of stored application artifacts and the service from which to retrieve them.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#revision CcDeploymentGroup#revision}
    */
    readonly revision?: RevisionLocationProperty;
}
export class DeploymentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._ignoreApplicationStopFailures !== undefined) {
            hasAnyValues = true;
            internalValueResult.ignoreApplicationStopFailures = this._ignoreApplicationStopFailures;
        }
        if (this._revision?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.revision = this._revision?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._ignoreApplicationStopFailures = undefined;
            this._revision.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._ignoreApplicationStopFailures = value.ignoreApplicationStopFailures;
            this._revision.internalValue = value.revision;
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

    // ignore_application_stop_failures - computed: true, optional: true, required: false
    private _ignoreApplicationStopFailures?: boolean | cdktn.IResolvable; 
    public get ignoreApplicationStopFailures() {
        return this.getBooleanAttribute('ignore_application_stop_failures');
    }
    public set ignoreApplicationStopFailures(value: boolean | cdktn.IResolvable) {
        this._ignoreApplicationStopFailures = value;
    }
    public resetIgnoreApplicationStopFailures() {
        this._ignoreApplicationStopFailures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignoreApplicationStopFailuresInput() {
        return this._ignoreApplicationStopFailures;
    }

    // revision - computed: true, optional: true, required: false
    private _revision = new RevisionLocationPropertyOutputReference(this, "revision");
    public get revision() {
        return this._revision;
    }
    public putRevision(value: RevisionLocationProperty) {
        this._revision.internalValue = value;
    }
    public resetRevision() {
        this._revision.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revisionInput() {
        return this._revision.internalValue;
    }
}
export interface DeploymentStyleProperty {
    /**
    * Indicates whether to route deployment traffic behind a load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#deployment_option CcDeploymentGroup#deployment_option}
    */
    readonly deploymentOption?: string;
    /**
    * Indicates whether to run an in-place or blue/green deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#deployment_type CcDeploymentGroup#deployment_type}
    */
    readonly deploymentType?: string;
}
export class DeploymentStylePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentStyleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deploymentOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.deploymentOption = this._deploymentOption;
        }
        if (this._deploymentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.deploymentType = this._deploymentType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentStyleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deploymentOption = undefined;
            this._deploymentType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deploymentOption = value.deploymentOption;
            this._deploymentType = value.deploymentType;
        }
    }

    // deployment_option - computed: true, optional: true, required: false
    private _deploymentOption?: string; 
    public get deploymentOption() {
        return this.getStringAttribute('deployment_option');
    }
    public set deploymentOption(value: string) {
        this._deploymentOption = value;
    }
    public resetDeploymentOption() {
        this._deploymentOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentOptionInput() {
        return this._deploymentOption;
    }

    // deployment_type - computed: true, optional: true, required: false
    private _deploymentType?: string; 
    public get deploymentType() {
        return this.getStringAttribute('deployment_type');
    }
    public set deploymentType(value: string) {
        this._deploymentType = value;
    }
    public resetDeploymentType() {
        this._deploymentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentTypeInput() {
        return this._deploymentType;
    }
}
export interface EC2TagFilterProperty {
    /**
    * The tag filter key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#key CcDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * The tag filter type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#type CcDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * The tag filter value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#value CcDeploymentGroup#value}
    */
    readonly value?: string;
}
export class EC2TagFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EC2TagFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EC2TagFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._type = undefined;
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
            this._type = value.type;
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

export class EC2TagFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : EC2TagFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): EC2TagFilterPropertyOutputReference {
        return new EC2TagFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Ec2TagGroupProperty {
    /**
    * The tag filter key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#key CcDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * The tag filter type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#type CcDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * The tag filter value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#value CcDeploymentGroup#value}
    */
    readonly value?: string;
}
export class Ec2TagGroupPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Ec2TagGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ec2TagGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._type = undefined;
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
            this._type = value.type;
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

export class Ec2TagGroupPropertyList extends cdktn.ComplexList {
    public internalValue? : Ec2TagGroupProperty[] | cdktn.IResolvable

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
    public get(index: number): Ec2TagGroupPropertyOutputReference {
        return new Ec2TagGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EC2TagSetListObjectProperty {
    /**
    * A list that contains other lists of Amazon EC2 instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#ec_2_tag_group CcDeploymentGroup#ec_2_tag_group}
    */
    readonly ec2TagGroup?: Ec2TagGroupProperty[] | cdktn.IResolvable;
}
export class EC2TagSetListObjectPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EC2TagSetListObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ec2TagGroup?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2TagGroup = this._ec2TagGroup?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EC2TagSetListObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ec2TagGroup.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ec2TagGroup.internalValue = value.ec2TagGroup;
        }
    }

    // ec_2_tag_group - computed: true, optional: true, required: false
    private _ec2TagGroup = new Ec2TagGroupPropertyList(this, "ec_2_tag_group", false);
    public get ec2TagGroup() {
        return this._ec2TagGroup;
    }
    public putEc2TagGroup(value: Ec2TagGroupProperty[] | cdktn.IResolvable) {
        this._ec2TagGroup.internalValue = value;
    }
    public resetEc2TagGroup() {
        this._ec2TagGroup.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2TagGroupInput() {
        return this._ec2TagGroup.internalValue;
    }
}

export class EC2TagSetListObjectPropertyList extends cdktn.ComplexList {
    public internalValue? : EC2TagSetListObjectProperty[] | cdktn.IResolvable

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
    public get(index: number): EC2TagSetListObjectPropertyOutputReference {
        return new EC2TagSetListObjectPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EC2TagSetProperty {
    /**
    * The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#ec_2_tag_set_list CcDeploymentGroup#ec_2_tag_set_list}
    */
    readonly ec2TagSetList?: EC2TagSetListObjectProperty[] | cdktn.IResolvable;
}
export class EC2TagSetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EC2TagSetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ec2TagSetList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2TagSetList = this._ec2TagSetList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EC2TagSetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ec2TagSetList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ec2TagSetList.internalValue = value.ec2TagSetList;
        }
    }

    // ec_2_tag_set_list - computed: true, optional: true, required: false
    private _ec2TagSetList = new EC2TagSetListObjectPropertyList(this, "ec_2_tag_set_list", false);
    public get ec2TagSetList() {
        return this._ec2TagSetList;
    }
    public putEc2TagSetList(value: EC2TagSetListObjectProperty[] | cdktn.IResolvable) {
        this._ec2TagSetList.internalValue = value;
    }
    public resetEc2TagSetList() {
        this._ec2TagSetList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2TagSetListInput() {
        return this._ec2TagSetList.internalValue;
    }
}
export interface ECSServiceProperty {
    /**
    * The name of the cluster that the Amazon ECS service is associated with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#cluster_name CcDeploymentGroup#cluster_name}
    */
    readonly clusterName?: string;
    /**
    * The name of the target Amazon ECS service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#service_name CcDeploymentGroup#service_name}
    */
    readonly serviceName?: string;
}
export class ECSServicePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ECSServiceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterName = this._clusterName;
        }
        if (this._serviceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceName = this._serviceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ECSServiceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterName = undefined;
            this._serviceName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterName = value.clusterName;
            this._serviceName = value.serviceName;
        }
    }

    // cluster_name - computed: true, optional: true, required: false
    private _clusterName?: string; 
    public get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
        this._clusterName = value;
    }
    public resetClusterName() {
        this._clusterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
        return this._clusterName;
    }

    // service_name - computed: true, optional: true, required: false
    private _serviceName?: string; 
    public get serviceName() {
        return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
        this._serviceName = value;
    }
    public resetServiceName() {
        this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
        return this._serviceName;
    }
}

export class ECSServicePropertyList extends cdktn.ComplexList {
    public internalValue? : ECSServiceProperty[] | cdktn.IResolvable

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
    public get(index: number): ECSServicePropertyOutputReference {
        return new ECSServicePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ELBInfoProperty {
    /**
    * For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#name CcDeploymentGroup#name}
    */
    readonly name?: string;
}
export class ELBInfoPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ELBInfoProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ELBInfoProperty | cdktn.IResolvable | undefined) {
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

export class ELBInfoPropertyList extends cdktn.ComplexList {
    public internalValue? : ELBInfoProperty[] | cdktn.IResolvable

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
    public get(index: number): ELBInfoPropertyOutputReference {
        return new ELBInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TargetGroupInfoProperty {
    /**
    * For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#name CcDeploymentGroup#name}
    */
    readonly name?: string;
}
export class TargetGroupInfoPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetGroupInfoProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TargetGroupInfoProperty | cdktn.IResolvable | undefined) {
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

export class TargetGroupInfoPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetGroupInfoProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetGroupInfoPropertyOutputReference {
        return new TargetGroupInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TrafficRouteProperty {
    /**
    * The Amazon Resource Name (ARN) of one listener. The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#listener_arns CcDeploymentGroup#listener_arns}
    */
    readonly listenerArns?: string[];
}
export class TrafficRoutePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrafficRouteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._listenerArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.listenerArns = this._listenerArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrafficRouteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._listenerArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._listenerArns = value.listenerArns;
        }
    }

    // listener_arns - computed: true, optional: true, required: false
    private _listenerArns?: string[]; 
    public get listenerArns() {
        return this.getListAttribute('listener_arns');
    }
    public set listenerArns(value: string[]) {
        this._listenerArns = value;
    }
    public resetListenerArns() {
        this._listenerArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerArnsInput() {
        return this._listenerArns;
    }
}
export interface TargetGroupsProperty {
    /**
    * For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#name CcDeploymentGroup#name}
    */
    readonly name?: string;
}
export class TargetGroupsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetGroupsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TargetGroupsProperty | cdktn.IResolvable | undefined) {
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

export class TargetGroupsPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetGroupsProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetGroupsPropertyOutputReference {
        return new TargetGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TestTrafficRouteProperty {
    /**
    * The Amazon Resource Name (ARN) of one listener. The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#listener_arns CcDeploymentGroup#listener_arns}
    */
    readonly listenerArns?: string[];
}
export class TestTrafficRoutePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TestTrafficRouteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._listenerArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.listenerArns = this._listenerArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TestTrafficRouteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._listenerArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._listenerArns = value.listenerArns;
        }
    }

    // listener_arns - computed: true, optional: true, required: false
    private _listenerArns?: string[]; 
    public get listenerArns() {
        return this.getListAttribute('listener_arns');
    }
    public set listenerArns(value: string[]) {
        this._listenerArns = value;
    }
    public resetListenerArns() {
        this._listenerArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerArnsInput() {
        return this._listenerArns;
    }
}
export interface TargetGroupPairInfoProperty {
    /**
    * The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#prod_traffic_route CcDeploymentGroup#prod_traffic_route}
    */
    readonly prodTrafficRoute?: TrafficRouteProperty;
    /**
    * One pair of target groups. One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#target_groups CcDeploymentGroup#target_groups}
    */
    readonly targetGroups?: TargetGroupsProperty[] | cdktn.IResolvable;
    /**
    * An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. Validation can occur while test traffic is served during a deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#test_traffic_route CcDeploymentGroup#test_traffic_route}
    */
    readonly testTrafficRoute?: TestTrafficRouteProperty;
}
export class TargetGroupPairInfoPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetGroupPairInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._prodTrafficRoute?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.prodTrafficRoute = this._prodTrafficRoute?.internalValue;
        }
        if (this._targetGroups?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroups = this._targetGroups?.internalValue;
        }
        if (this._testTrafficRoute?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.testTrafficRoute = this._testTrafficRoute?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetGroupPairInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._prodTrafficRoute.internalValue = undefined;
            this._targetGroups.internalValue = undefined;
            this._testTrafficRoute.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._prodTrafficRoute.internalValue = value.prodTrafficRoute;
            this._targetGroups.internalValue = value.targetGroups;
            this._testTrafficRoute.internalValue = value.testTrafficRoute;
        }
    }

    // prod_traffic_route - computed: true, optional: true, required: false
    private _prodTrafficRoute = new TrafficRoutePropertyOutputReference(this, "prod_traffic_route");
    public get prodTrafficRoute() {
        return this._prodTrafficRoute;
    }
    public putProdTrafficRoute(value: TrafficRouteProperty) {
        this._prodTrafficRoute.internalValue = value;
    }
    public resetProdTrafficRoute() {
        this._prodTrafficRoute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prodTrafficRouteInput() {
        return this._prodTrafficRoute.internalValue;
    }

    // target_groups - computed: true, optional: true, required: false
    private _targetGroups = new TargetGroupsPropertyList(this, "target_groups", false);
    public get targetGroups() {
        return this._targetGroups;
    }
    public putTargetGroups(value: TargetGroupsProperty[] | cdktn.IResolvable) {
        this._targetGroups.internalValue = value;
    }
    public resetTargetGroups() {
        this._targetGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupsInput() {
        return this._targetGroups.internalValue;
    }

    // test_traffic_route - computed: true, optional: true, required: false
    private _testTrafficRoute = new TestTrafficRoutePropertyOutputReference(this, "test_traffic_route");
    public get testTrafficRoute() {
        return this._testTrafficRoute;
    }
    public putTestTrafficRoute(value: TestTrafficRouteProperty) {
        this._testTrafficRoute.internalValue = value;
    }
    public resetTestTrafficRoute() {
        this._testTrafficRoute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get testTrafficRouteInput() {
        return this._testTrafficRoute.internalValue;
    }
}

export class TargetGroupPairInfoPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetGroupPairInfoProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetGroupPairInfoPropertyOutputReference {
        return new TargetGroupPairInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LoadBalancerInfoProperty {
    /**
    * An array that contains information about the load balancers to use for load balancing in a deployment. If you're using Classic Load Balancers, specify those load balancers in this array.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#elb_info_list CcDeploymentGroup#elb_info_list}
    */
    readonly elbInfoList?: ELBInfoProperty[] | cdktn.IResolvable;
    /**
    * An array that contains information about the target groups to use for load balancing in a deployment. If you're using Application Load Balancers and Network Load Balancers, specify their associated target groups in this array.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#target_group_info_list CcDeploymentGroup#target_group_info_list}
    */
    readonly targetGroupInfoList?: TargetGroupInfoProperty[] | cdktn.IResolvable;
    /**
    * The target group pair information. This is an array of TargeGroupPairInfo objects with a maximum size of one.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#target_group_pair_info_list CcDeploymentGroup#target_group_pair_info_list}
    */
    readonly targetGroupPairInfoList?: TargetGroupPairInfoProperty[] | cdktn.IResolvable;
}
export class LoadBalancerInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoadBalancerInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._elbInfoList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.elbInfoList = this._elbInfoList?.internalValue;
        }
        if (this._targetGroupInfoList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupInfoList = this._targetGroupInfoList?.internalValue;
        }
        if (this._targetGroupPairInfoList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupPairInfoList = this._targetGroupPairInfoList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoadBalancerInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._elbInfoList.internalValue = undefined;
            this._targetGroupInfoList.internalValue = undefined;
            this._targetGroupPairInfoList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._elbInfoList.internalValue = value.elbInfoList;
            this._targetGroupInfoList.internalValue = value.targetGroupInfoList;
            this._targetGroupPairInfoList.internalValue = value.targetGroupPairInfoList;
        }
    }

    // elb_info_list - computed: true, optional: true, required: false
    private _elbInfoList = new ELBInfoPropertyList(this, "elb_info_list", false);
    public get elbInfoList() {
        return this._elbInfoList;
    }
    public putElbInfoList(value: ELBInfoProperty[] | cdktn.IResolvable) {
        this._elbInfoList.internalValue = value;
    }
    public resetElbInfoList() {
        this._elbInfoList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elbInfoListInput() {
        return this._elbInfoList.internalValue;
    }

    // target_group_info_list - computed: true, optional: true, required: false
    private _targetGroupInfoList = new TargetGroupInfoPropertyList(this, "target_group_info_list", false);
    public get targetGroupInfoList() {
        return this._targetGroupInfoList;
    }
    public putTargetGroupInfoList(value: TargetGroupInfoProperty[] | cdktn.IResolvable) {
        this._targetGroupInfoList.internalValue = value;
    }
    public resetTargetGroupInfoList() {
        this._targetGroupInfoList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupInfoListInput() {
        return this._targetGroupInfoList.internalValue;
    }

    // target_group_pair_info_list - computed: true, optional: true, required: false
    private _targetGroupPairInfoList = new TargetGroupPairInfoPropertyList(this, "target_group_pair_info_list", false);
    public get targetGroupPairInfoList() {
        return this._targetGroupPairInfoList;
    }
    public putTargetGroupPairInfoList(value: TargetGroupPairInfoProperty[] | cdktn.IResolvable) {
        this._targetGroupPairInfoList.internalValue = value;
    }
    public resetTargetGroupPairInfoList() {
        this._targetGroupPairInfoList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupPairInfoListInput() {
        return this._targetGroupPairInfoList.internalValue;
    }
}
export interface TagFilterProperty {
    /**
    * The on-premises instance tag filter key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#key CcDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * The on-premises instance tag filter type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#type CcDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * The on-premises instance tag filter value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#value CcDeploymentGroup#value}
    */
    readonly value?: string;
}
export class TagFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._type = undefined;
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
            this._type = value.type;
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

export class TagFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : TagFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): TagFilterPropertyOutputReference {
        return new TagFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OnPremisesTagGroupProperty {
    /**
    * The on-premises instance tag filter key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#key CcDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * The on-premises instance tag filter type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#type CcDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * The on-premises instance tag filter value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#value CcDeploymentGroup#value}
    */
    readonly value?: string;
}
export class OnPremisesTagGroupPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OnPremisesTagGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnPremisesTagGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._type = undefined;
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
            this._type = value.type;
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

export class OnPremisesTagGroupPropertyList extends cdktn.ComplexList {
    public internalValue? : OnPremisesTagGroupProperty[] | cdktn.IResolvable

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
    public get(index: number): OnPremisesTagGroupPropertyOutputReference {
        return new OnPremisesTagGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OnPremisesTagSetListObjectProperty {
    /**
    * Information about groups of on-premises instance tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#on_premises_tag_group CcDeploymentGroup#on_premises_tag_group}
    */
    readonly onPremisesTagGroup?: OnPremisesTagGroupProperty[] | cdktn.IResolvable;
}
export class OnPremisesTagSetListObjectPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OnPremisesTagSetListObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._onPremisesTagGroup?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onPremisesTagGroup = this._onPremisesTagGroup?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnPremisesTagSetListObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._onPremisesTagGroup.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._onPremisesTagGroup.internalValue = value.onPremisesTagGroup;
        }
    }

    // on_premises_tag_group - computed: true, optional: true, required: false
    private _onPremisesTagGroup = new OnPremisesTagGroupPropertyList(this, "on_premises_tag_group", false);
    public get onPremisesTagGroup() {
        return this._onPremisesTagGroup;
    }
    public putOnPremisesTagGroup(value: OnPremisesTagGroupProperty[] | cdktn.IResolvable) {
        this._onPremisesTagGroup.internalValue = value;
    }
    public resetOnPremisesTagGroup() {
        this._onPremisesTagGroup.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onPremisesTagGroupInput() {
        return this._onPremisesTagGroup.internalValue;
    }
}

export class OnPremisesTagSetListObjectPropertyList extends cdktn.ComplexList {
    public internalValue? : OnPremisesTagSetListObjectProperty[] | cdktn.IResolvable

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
    public get(index: number): OnPremisesTagSetListObjectPropertyOutputReference {
        return new OnPremisesTagSetListObjectPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OnPremisesTagSetProperty {
    /**
    * A list that contains other lists of on-premises instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#on_premises_tag_set_list CcDeploymentGroup#on_premises_tag_set_list}
    */
    readonly onPremisesTagSetList?: OnPremisesTagSetListObjectProperty[] | cdktn.IResolvable;
}
export class OnPremisesTagSetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnPremisesTagSetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._onPremisesTagSetList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onPremisesTagSetList = this._onPremisesTagSetList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnPremisesTagSetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._onPremisesTagSetList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._onPremisesTagSetList.internalValue = value.onPremisesTagSetList;
        }
    }

    // on_premises_tag_set_list - computed: true, optional: true, required: false
    private _onPremisesTagSetList = new OnPremisesTagSetListObjectPropertyList(this, "on_premises_tag_set_list", false);
    public get onPremisesTagSetList() {
        return this._onPremisesTagSetList;
    }
    public putOnPremisesTagSetList(value: OnPremisesTagSetListObjectProperty[] | cdktn.IResolvable) {
        this._onPremisesTagSetList.internalValue = value;
    }
    public resetOnPremisesTagSetList() {
        this._onPremisesTagSetList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onPremisesTagSetListInput() {
        return this._onPremisesTagSetList.internalValue;
    }
}
export interface TagProperty {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#key CcDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#value CcDeploymentGroup#value}
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
export interface TriggerConfigProperty {
    /**
    * The event type or types that trigger notifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#trigger_events CcDeploymentGroup#trigger_events}
    */
    readonly triggerEvents?: string[];
    /**
    * The name of the notification trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#trigger_name CcDeploymentGroup#trigger_name}
    */
    readonly triggerName?: string;
    /**
    * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codedeploy_deployment_group#trigger_target_arn CcDeploymentGroup#trigger_target_arn}
    */
    readonly triggerTargetArn?: string;
}
export class TriggerConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TriggerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._triggerEvents !== undefined) {
            hasAnyValues = true;
            internalValueResult.triggerEvents = this._triggerEvents;
        }
        if (this._triggerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.triggerName = this._triggerName;
        }
        if (this._triggerTargetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.triggerTargetArn = this._triggerTargetArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TriggerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._triggerEvents = undefined;
            this._triggerName = undefined;
            this._triggerTargetArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._triggerEvents = value.triggerEvents;
            this._triggerName = value.triggerName;
            this._triggerTargetArn = value.triggerTargetArn;
        }
    }

    // trigger_events - computed: true, optional: true, required: false
    private _triggerEvents?: string[]; 
    public get triggerEvents() {
        return this.getListAttribute('trigger_events');
    }
    public set triggerEvents(value: string[]) {
        this._triggerEvents = value;
    }
    public resetTriggerEvents() {
        this._triggerEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerEventsInput() {
        return this._triggerEvents;
    }

    // trigger_name - computed: true, optional: true, required: false
    private _triggerName?: string; 
    public get triggerName() {
        return this.getStringAttribute('trigger_name');
    }
    public set triggerName(value: string) {
        this._triggerName = value;
    }
    public resetTriggerName() {
        this._triggerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerNameInput() {
        return this._triggerName;
    }

    // trigger_target_arn - computed: true, optional: true, required: false
    private _triggerTargetArn?: string; 
    public get triggerTargetArn() {
        return this.getStringAttribute('trigger_target_arn');
    }
    public set triggerTargetArn(value: string) {
        this._triggerTargetArn = value;
    }
    public resetTriggerTargetArn() {
        this._triggerTargetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerTargetArnInput() {
        return this._triggerTargetArn;
    }
}

export class TriggerConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : TriggerConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): TriggerConfigPropertyOutputReference {
        return new TriggerConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
