// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether to use Availability Zone rebalancing for the service.
    *  For more information, see [Balancing an Amazon ECS service across Availability Zones](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  The default behavior of ``AvailabilityZoneRebalancing`` differs between create and update requests:
    *   +  For create service requests, when no value is specified for ``AvailabilityZoneRebalancing``, Amazon ECS defaults the value to ``ENABLED``.
    *   +  For update service requests, when no value is specified for ``AvailabilityZoneRebalancing``, Amazon ECS defaults to the existing service’s ``AvailabilityZoneRebalancing`` value. If the service never had an ``AvailabilityZoneRebalancing`` value set, Amazon ECS treats this as ``DISABLED``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#availability_zone_rebalancing CcService#availability_zone_rebalancing}
    */
    readonly availabilityZoneRebalancing?: string;
    /**
    * The capacity provider strategy to use for the service.
    *  If a ``capacityProviderStrategy`` is specified, the ``launchType`` parameter must be omitted. If no ``capacityProviderStrategy`` or ``launchType`` is specified, the ``defaultCapacityProviderStrategy`` for the cluster is used.
    *  A capacity provider strategy can contain a maximum of 20 capacity providers.
    *   To remove this property from your service resource, specify an empty ``CapacityProviderStrategyItem`` array.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#capacity_provider_strategy CcService#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: CcService.CapacityProviderStrategyItemProperty[] | cdktn.IResolvable;
    /**
    * The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on. If you do not specify a cluster, the default cluster is assumed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#cluster CcService#cluster}
    */
    readonly cluster?: string;
    /**
    * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#deployment_configuration CcService#deployment_configuration}
    */
    readonly deploymentConfiguration?: CcService.DeploymentConfigurationProperty;
    /**
    * The deployment controller to use for the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#deployment_controller CcService#deployment_controller}
    */
    readonly deploymentController?: CcService.DeploymentControllerProperty;
    /**
    * The number of instantiations of the specified task definition to place and keep running in your service.
    *  For new services, if a desired count is not specified, a default value of ``1`` is used. When using the ``DAEMON`` scheduling strategy, the desired count is not required.
    *  For existing services, if a desired count is not specified, it is omitted from the operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#desired_count CcService#desired_count}
    */
    readonly desiredCount?: number;
    /**
    * Specifies whether to turn on Amazon ECS managed tags for the tasks within the service. For more information, see [Tagging your Amazon ECS resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  When you use Amazon ECS managed tags, you must set the ``propagateTags`` request parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#enable_ecs_managed_tags CcService#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktn.IResolvable;
    /**
    * Determines whether the execute command functionality is turned on for the service. If ``true``, the execute command functionality is turned on for all containers in tasks as part of the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#enable_execute_command CcService#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktn.IResolvable;
    /**
    * Determines whether to force a new deployment of the service. By default, deployments aren't forced. You can use this option to start a new deployment with no service definition changes. For example, you can update a service's tasks to use a newer Docker image with the same image/tag combination (``my_image:latest``) or to roll Fargate tasks onto a newer platform version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#force_new_deployment CcService#force_new_deployment}
    */
    readonly forceNewDeployment?: CcService.ForceNewDeploymentProperty;
    /**
    * The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started. If you do not specify a health check grace period value, the default value of 0 is used. If you do not use any of the health checks, then ``healthCheckGracePeriodSeconds`` is unused.
    *  If your service has more running tasks than desired, unhealthy tasks in the grace period might be stopped to reach the desired count.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#health_check_grace_period_seconds CcService#health_check_grace_period_seconds}
    */
    readonly healthCheckGracePeriodSeconds?: number;
    /**
    * The launch type on which to run your service. For more information, see [Amazon ECS Launch Types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
    *   If you want to use Managed Instances, you must use the ``capacityProviderStrategy`` request parameter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#launch_type CcService#launch_type}
    */
    readonly launchType?: string;
    /**
    * A list of load balancer objects to associate with the service. If you specify the ``Role`` property, ``LoadBalancers`` must be specified as well. For information about the number of load balancers that you can specify per service, see [Service Load Balancing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html) in the *Amazon Elastic Container Service Developer Guide*.
    *   To remove this property from your service resource, specify an empty ``LoadBalancer`` array.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#load_balancers CcService#load_balancers}
    */
    readonly loadBalancers?: CcService.LoadBalancerProperty[] | cdktn.IResolvable;
    /**
    * The optional monitoring configuration for the service, which defines the resolution for the service-level ``CPUUtilization`` and ``MemoryUtilization`` Amazon CloudWatch metrics. When not specified, Amazon ECS uses the default resolution of ``60`` seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#monitoring CcService#monitoring}
    */
    readonly monitoring?: CcService.MonitoringConfigurationProperty;
    /**
    * The network configuration for the service. This parameter is required for task definitions that use the ``awsvpc`` network mode to receive their own elastic network interface, and it is not supported for other network modes. For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#network_configuration CcService#network_configuration}
    */
    readonly networkConfiguration?: CcService.NetworkConfigurationProperty;
    /**
    * An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.
    *   To remove this property from your service resource, specify an empty ``PlacementConstraint`` array.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#placement_constraints CcService#placement_constraints}
    */
    readonly placementConstraints?: CcService.PlacementConstraintProperty[] | cdktn.IResolvable;
    /**
    * The placement strategy objects to use for tasks in your service. You can specify a maximum of 5 strategy rules for each service.
    *   To remove this property from your service resource, specify an empty ``PlacementStrategy`` array.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#placement_strategies CcService#placement_strategies}
    */
    readonly placementStrategies?: CcService.PlacementStrategyProperty[] | cdktn.IResolvable;
    /**
    * The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the ``LATEST`` platform version is used. For more information, see [platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#platform_version CcService#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the [TagResource](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action.
    *  You must set this to a value other than ``NONE`` when you use Cost Explorer. For more information, see [Amazon ECS usage reports](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/usage-reports.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  The default is ``NONE``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#propagate_tags CcService#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition doesn't use the ``awsvpc`` network mode. If you specify the ``role`` parameter, you must also specify a load balancer object with the ``loadBalancers`` parameter.
    *   If your account has already created the Amazon ECS service-linked role, that role is used for your service unless you specify a role here. The service-linked role is required if your task definition uses the ``awsvpc`` network mode or if the service is configured to use service discovery, an external deployment controller, multiple target groups, or Elastic Inference accelerators in which case you don't specify a role here. For more information, see [Using service-linked roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
    *   If your specified role has a path other than ``/``, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name ``bar`` has a path of ``/foo/`` then you would specify ``/foo/bar`` as the role name. For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the *IAM User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#role CcService#role}
    */
    readonly role?: string;
    /**
    * The scheduling strategy to use for the service. For more information, see [Services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
    *  There are two service scheduler strategies available:
    *   +  ``REPLICA``-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service uses the ``CODE_DEPLOY`` or ``EXTERNAL`` deployment controller types.
    *   +  ``DAEMON``-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks and will stop tasks that don't meet the placement constraints. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.
    *   Tasks using the Fargate launch type or the ``CODE_DEPLOY`` or ``EXTERNAL`` deployment controller types don't support the ``DAEMON`` scheduling strategy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#scheduling_strategy CcService#scheduling_strategy}
    */
    readonly schedulingStrategy?: string;
    /**
    * The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
    *  Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#service_connect_configuration CcService#service_connect_configuration}
    */
    readonly serviceConnectConfiguration?: CcService.ServiceConnectConfigurationProperty;
    /**
    * The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.
    *   The stack update fails if you change any properties that require replacement and the ``ServiceName`` is configured. This is because AWS CloudFormation creates the replacement service first, but each ``ServiceName`` must be unique in the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#service_name CcService#service_name}
    */
    readonly serviceName?: string;
    /**
    * The details of the service discovery registry to associate with this service. For more information, see [Service discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html).
    *   Each service may be associated with one service registry. Multiple service registries for each service isn't supported.
    *    To remove this property from your service resource, specify an empty ``ServiceRegistry`` array.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#service_registries CcService#service_registries}
    */
    readonly serviceRegistries?: CcService.ServiceRegistryProperty[] | cdktn.IResolvable;
    /**
    * The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. When a service is deleted, the tags are deleted as well.
    *  The following basic restrictions apply to tags:
    *   +  Maximum number of tags per resource - 50
    *   +  For each resource, each tag key must be unique, and each tag key can have only one value.
    *   +  Maximum key length - 128 Unicode characters in UTF-8
    *   +  Maximum value length - 256 Unicode characters in UTF-8
    *   +  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
    *   +  Tag keys and values are case-sensitive.
    *   +  Do not use ``aws:``, ``AWS:``, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#tags CcService#tags}
    */
    readonly tags?: CcService.TagProperty[] | cdktn.IResolvable;
    /**
    * The ``family`` and ``revision`` (``family:revision``) or full ARN of the task definition to run in your service. If a ``revision`` isn't specified, the latest ``ACTIVE`` revision is used.
    *  A task definition must be specified if the service uses either the ``ECS`` or ``CODE_DEPLOY`` deployment controllers.
    *  For more information about deployment types, see [Amazon ECS deployment types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#task_definition CcService#task_definition}
    */
    readonly taskDefinition?: string;
    /**
    * The configuration for a volume specified in the task definition as a volume that is configured at launch time. Currently, the only supported volume type is an Amazon EBS volume.
    *   To remove this property from your service resource, specify an empty ``ServiceVolumeConfiguration`` array.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#volume_configurations CcService#volume_configurations}
    */
    readonly volumeConfigurations?: CcService.ServiceVolumeConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The VPC Lattice configuration for the service being created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#vpc_lattice_configurations CcService#vpc_lattice_configurations}
    */
    readonly vpcLatticeConfigurations?: CcService.VpcLatticeConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service awscc_ecs_service}
*/
export class CcService extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecs_service";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcService resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcService to import
    * @param importFromId The id of the existing CcService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcService to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_service", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service awscc_ecs_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcServiceProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecs_service',
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
        this._availabilityZoneRebalancing = config.availabilityZoneRebalancing;
        this._capacityProviderStrategy.internalValue = config.capacityProviderStrategy;
        this._cluster = config.cluster;
        this._deploymentConfiguration.internalValue = config.deploymentConfiguration;
        this._deploymentController.internalValue = config.deploymentController;
        this._desiredCount = config.desiredCount;
        this._enableEcsManagedTags = config.enableEcsManagedTags;
        this._enableExecuteCommand = config.enableExecuteCommand;
        this._forceNewDeployment.internalValue = config.forceNewDeployment;
        this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
        this._launchType = config.launchType;
        this._loadBalancers.internalValue = config.loadBalancers;
        this._monitoring.internalValue = config.monitoring;
        this._networkConfiguration.internalValue = config.networkConfiguration;
        this._placementConstraints.internalValue = config.placementConstraints;
        this._placementStrategies.internalValue = config.placementStrategies;
        this._platformVersion = config.platformVersion;
        this._propagateTags = config.propagateTags;
        this._role = config.role;
        this._schedulingStrategy = config.schedulingStrategy;
        this._serviceConnectConfiguration.internalValue = config.serviceConnectConfiguration;
        this._serviceName = config.serviceName;
        this._serviceRegistries.internalValue = config.serviceRegistries;
        this._tags.internalValue = config.tags;
        this._taskDefinition = config.taskDefinition;
        this._volumeConfigurations.internalValue = config.volumeConfigurations;
        this._vpcLatticeConfigurations.internalValue = config.vpcLatticeConfigurations;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zone_rebalancing - computed: true, optional: true, required: false
    private _availabilityZoneRebalancing?: string; 
    public get availabilityZoneRebalancing() {
        return this.getStringAttribute('availability_zone_rebalancing');
    }
    public set availabilityZoneRebalancing(value: string) {
        this._availabilityZoneRebalancing = value;
    }
    public resetAvailabilityZoneRebalancing() {
        this._availabilityZoneRebalancing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneRebalancingInput() {
        return this._availabilityZoneRebalancing;
    }

    // capacity_provider_strategy - computed: true, optional: true, required: false
    private _capacityProviderStrategy = new CcService.CapacityProviderStrategyItemPropertyList(this, "capacity_provider_strategy", false);
    public get capacityProviderStrategy() {
        return this._capacityProviderStrategy;
    }
    public putCapacityProviderStrategy(value: CcService.CapacityProviderStrategyItemProperty[] | cdktn.IResolvable) {
        this._capacityProviderStrategy.internalValue = value;
    }
    public resetCapacityProviderStrategy() {
        this._capacityProviderStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderStrategyInput() {
        return this._capacityProviderStrategy.internalValue;
    }

    // cluster - computed: true, optional: true, required: false
    private _cluster?: string; 
    public get cluster() {
        return this.getStringAttribute('cluster');
    }
    public set cluster(value: string) {
        this._cluster = value;
    }
    public resetCluster() {
        this._cluster = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterInput() {
        return this._cluster;
    }

    // deployment_configuration - computed: true, optional: true, required: false
    private _deploymentConfiguration = new CcService.DeploymentConfigurationPropertyOutputReference(this, "deployment_configuration");
    public get deploymentConfiguration() {
        return this._deploymentConfiguration;
    }
    public putDeploymentConfiguration(value: CcService.DeploymentConfigurationProperty) {
        this._deploymentConfiguration.internalValue = value;
    }
    public resetDeploymentConfiguration() {
        this._deploymentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentConfigurationInput() {
        return this._deploymentConfiguration.internalValue;
    }

    // deployment_controller - computed: true, optional: true, required: false
    private _deploymentController = new CcService.DeploymentControllerPropertyOutputReference(this, "deployment_controller");
    public get deploymentController() {
        return this._deploymentController;
    }
    public putDeploymentController(value: CcService.DeploymentControllerProperty) {
        this._deploymentController.internalValue = value;
    }
    public resetDeploymentController() {
        this._deploymentController.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentControllerInput() {
        return this._deploymentController.internalValue;
    }

    // desired_count - computed: true, optional: true, required: false
    private _desiredCount?: number; 
    public get desiredCount() {
        return this.getNumberAttribute('desired_count');
    }
    public set desiredCount(value: number) {
        this._desiredCount = value;
    }
    public resetDesiredCount() {
        this._desiredCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredCountInput() {
        return this._desiredCount;
    }

    // enable_ecs_managed_tags - computed: true, optional: true, required: false
    private _enableEcsManagedTags?: boolean | cdktn.IResolvable; 
    public get enableEcsManagedTags() {
        return this.getBooleanAttribute('enable_ecs_managed_tags');
    }
    public set enableEcsManagedTags(value: boolean | cdktn.IResolvable) {
        this._enableEcsManagedTags = value;
    }
    public resetEnableEcsManagedTags() {
        this._enableEcsManagedTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableEcsManagedTagsInput() {
        return this._enableEcsManagedTags;
    }

    // enable_execute_command - computed: true, optional: true, required: false
    private _enableExecuteCommand?: boolean | cdktn.IResolvable; 
    public get enableExecuteCommand() {
        return this.getBooleanAttribute('enable_execute_command');
    }
    public set enableExecuteCommand(value: boolean | cdktn.IResolvable) {
        this._enableExecuteCommand = value;
    }
    public resetEnableExecuteCommand() {
        this._enableExecuteCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableExecuteCommandInput() {
        return this._enableExecuteCommand;
    }

    // force_new_deployment - computed: true, optional: true, required: false
    private _forceNewDeployment = new CcService.ForceNewDeploymentPropertyOutputReference(this, "force_new_deployment");
    public get forceNewDeployment() {
        return this._forceNewDeployment;
    }
    public putForceNewDeployment(value: CcService.ForceNewDeploymentProperty) {
        this._forceNewDeployment.internalValue = value;
    }
    public resetForceNewDeployment() {
        this._forceNewDeployment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceNewDeploymentInput() {
        return this._forceNewDeployment.internalValue;
    }

    // health_check_grace_period_seconds - computed: true, optional: true, required: false
    private _healthCheckGracePeriodSeconds?: number; 
    public get healthCheckGracePeriodSeconds() {
        return this.getNumberAttribute('health_check_grace_period_seconds');
    }
    public set healthCheckGracePeriodSeconds(value: number) {
        this._healthCheckGracePeriodSeconds = value;
    }
    public resetHealthCheckGracePeriodSeconds() {
        this._healthCheckGracePeriodSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckGracePeriodSecondsInput() {
        return this._healthCheckGracePeriodSeconds;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // launch_type - computed: true, optional: true, required: false
    private _launchType?: string; 
    public get launchType() {
        return this.getStringAttribute('launch_type');
    }
    public set launchType(value: string) {
        this._launchType = value;
    }
    public resetLaunchType() {
        this._launchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTypeInput() {
        return this._launchType;
    }

    // load_balancers - computed: true, optional: true, required: false
    private _loadBalancers = new CcService.LoadBalancerPropertyList(this, "load_balancers", false);
    public get loadBalancers() {
        return this._loadBalancers;
    }
    public putLoadBalancers(value: CcService.LoadBalancerProperty[] | cdktn.IResolvable) {
        this._loadBalancers.internalValue = value;
    }
    public resetLoadBalancers() {
        this._loadBalancers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancersInput() {
        return this._loadBalancers.internalValue;
    }

    // monitoring - computed: true, optional: true, required: false
    private _monitoring = new CcService.MonitoringConfigurationPropertyOutputReference(this, "monitoring");
    public get monitoring() {
        return this._monitoring;
    }
    public putMonitoring(value: CcService.MonitoringConfigurationProperty) {
        this._monitoring.internalValue = value;
    }
    public resetMonitoring() {
        this._monitoring.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringInput() {
        return this._monitoring.internalValue;
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // network_configuration - computed: true, optional: true, required: false
    private _networkConfiguration = new CcService.NetworkConfigurationPropertyOutputReference(this, "network_configuration");
    public get networkConfiguration() {
        return this._networkConfiguration;
    }
    public putNetworkConfiguration(value: CcService.NetworkConfigurationProperty) {
        this._networkConfiguration.internalValue = value;
    }
    public resetNetworkConfiguration() {
        this._networkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }

    // placement_constraints - computed: true, optional: true, required: false
    private _placementConstraints = new CcService.PlacementConstraintPropertyList(this, "placement_constraints", false);
    public get placementConstraints() {
        return this._placementConstraints;
    }
    public putPlacementConstraints(value: CcService.PlacementConstraintProperty[] | cdktn.IResolvable) {
        this._placementConstraints.internalValue = value;
    }
    public resetPlacementConstraints() {
        this._placementConstraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementConstraintsInput() {
        return this._placementConstraints.internalValue;
    }

    // placement_strategies - computed: true, optional: true, required: false
    private _placementStrategies = new CcService.PlacementStrategyPropertyList(this, "placement_strategies", false);
    public get placementStrategies() {
        return this._placementStrategies;
    }
    public putPlacementStrategies(value: CcService.PlacementStrategyProperty[] | cdktn.IResolvable) {
        this._placementStrategies.internalValue = value;
    }
    public resetPlacementStrategies() {
        this._placementStrategies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementStrategiesInput() {
        return this._placementStrategies.internalValue;
    }

    // platform_version - computed: true, optional: true, required: false
    private _platformVersion?: string; 
    public get platformVersion() {
        return this.getStringAttribute('platform_version');
    }
    public set platformVersion(value: string) {
        this._platformVersion = value;
    }
    public resetPlatformVersion() {
        this._platformVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformVersionInput() {
        return this._platformVersion;
    }

    // propagate_tags - computed: true, optional: true, required: false
    private _propagateTags?: string; 
    public get propagateTags() {
        return this.getStringAttribute('propagate_tags');
    }
    public set propagateTags(value: string) {
        this._propagateTags = value;
    }
    public resetPropagateTags() {
        this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsInput() {
        return this._propagateTags;
    }

    // role - computed: true, optional: true, required: false
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    public resetRole() {
        this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
    }

    // scheduling_strategy - computed: true, optional: true, required: false
    private _schedulingStrategy?: string; 
    public get schedulingStrategy() {
        return this.getStringAttribute('scheduling_strategy');
    }
    public set schedulingStrategy(value: string) {
        this._schedulingStrategy = value;
    }
    public resetSchedulingStrategy() {
        this._schedulingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulingStrategyInput() {
        return this._schedulingStrategy;
    }

    // service_arn - computed: true, optional: false, required: false
    public get serviceArn() {
        return this.getStringAttribute('service_arn');
    }

    // service_connect_configuration - computed: true, optional: true, required: false
    private _serviceConnectConfiguration = new CcService.ServiceConnectConfigurationPropertyOutputReference(this, "service_connect_configuration");
    public get serviceConnectConfiguration() {
        return this._serviceConnectConfiguration;
    }
    public putServiceConnectConfiguration(value: CcService.ServiceConnectConfigurationProperty) {
        this._serviceConnectConfiguration.internalValue = value;
    }
    public resetServiceConnectConfiguration() {
        this._serviceConnectConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceConnectConfigurationInput() {
        return this._serviceConnectConfiguration.internalValue;
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

    // service_registries - computed: true, optional: true, required: false
    private _serviceRegistries = new CcService.ServiceRegistryPropertyList(this, "service_registries", false);
    public get serviceRegistries() {
        return this._serviceRegistries;
    }
    public putServiceRegistries(value: CcService.ServiceRegistryProperty[] | cdktn.IResolvable) {
        this._serviceRegistries.internalValue = value;
    }
    public resetServiceRegistries() {
        this._serviceRegistries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRegistriesInput() {
        return this._serviceRegistries.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcService.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcService.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // task_definition - computed: true, optional: true, required: false
    private _taskDefinition?: string; 
    public get taskDefinition() {
        return this.getStringAttribute('task_definition');
    }
    public set taskDefinition(value: string) {
        this._taskDefinition = value;
    }
    public resetTaskDefinition() {
        this._taskDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDefinitionInput() {
        return this._taskDefinition;
    }

    // volume_configurations - computed: true, optional: true, required: false
    private _volumeConfigurations = new CcService.ServiceVolumeConfigurationPropertyList(this, "volume_configurations", false);
    public get volumeConfigurations() {
        return this._volumeConfigurations;
    }
    public putVolumeConfigurations(value: CcService.ServiceVolumeConfigurationProperty[] | cdktn.IResolvable) {
        this._volumeConfigurations.internalValue = value;
    }
    public resetVolumeConfigurations() {
        this._volumeConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeConfigurationsInput() {
        return this._volumeConfigurations.internalValue;
    }

    // vpc_lattice_configurations - computed: true, optional: true, required: false
    private _vpcLatticeConfigurations = new CcService.VpcLatticeConfigurationPropertyList(this, "vpc_lattice_configurations", false);
    public get vpcLatticeConfigurations() {
        return this._vpcLatticeConfigurations;
    }
    public putVpcLatticeConfigurations(value: CcService.VpcLatticeConfigurationProperty[] | cdktn.IResolvable) {
        this._vpcLatticeConfigurations.internalValue = value;
    }
    public resetVpcLatticeConfigurations() {
        this._vpcLatticeConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcLatticeConfigurationsInput() {
        return this._vpcLatticeConfigurations.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            availability_zone_rebalancing: cdktn.stringToTerraform(this._availabilityZoneRebalancing),
            capacity_provider_strategy: cdktn.listMapper(ccServiceCapacityProviderStrategyItemPropertyToTerraform, false)(this._capacityProviderStrategy.internalValue),
            cluster: cdktn.stringToTerraform(this._cluster),
            deployment_configuration: ccServiceDeploymentConfigurationPropertyToTerraform(this._deploymentConfiguration.internalValue),
            deployment_controller: ccServiceDeploymentControllerPropertyToTerraform(this._deploymentController.internalValue),
            desired_count: cdktn.numberToTerraform(this._desiredCount),
            enable_ecs_managed_tags: cdktn.booleanToTerraform(this._enableEcsManagedTags),
            enable_execute_command: cdktn.booleanToTerraform(this._enableExecuteCommand),
            force_new_deployment: ccServiceForceNewDeploymentPropertyToTerraform(this._forceNewDeployment.internalValue),
            health_check_grace_period_seconds: cdktn.numberToTerraform(this._healthCheckGracePeriodSeconds),
            launch_type: cdktn.stringToTerraform(this._launchType),
            load_balancers: cdktn.listMapper(ccServiceLoadBalancerPropertyToTerraform, false)(this._loadBalancers.internalValue),
            monitoring: ccServiceMonitoringConfigurationPropertyToTerraform(this._monitoring.internalValue),
            network_configuration: ccServiceNetworkConfigurationPropertyToTerraform(this._networkConfiguration.internalValue),
            placement_constraints: cdktn.listMapper(ccServicePlacementConstraintPropertyToTerraform, false)(this._placementConstraints.internalValue),
            placement_strategies: cdktn.listMapper(ccServicePlacementStrategyPropertyToTerraform, false)(this._placementStrategies.internalValue),
            platform_version: cdktn.stringToTerraform(this._platformVersion),
            propagate_tags: cdktn.stringToTerraform(this._propagateTags),
            role: cdktn.stringToTerraform(this._role),
            scheduling_strategy: cdktn.stringToTerraform(this._schedulingStrategy),
            service_connect_configuration: ccServiceServiceConnectConfigurationPropertyToTerraform(this._serviceConnectConfiguration.internalValue),
            service_name: cdktn.stringToTerraform(this._serviceName),
            service_registries: cdktn.listMapper(ccServiceServiceRegistryPropertyToTerraform, false)(this._serviceRegistries.internalValue),
            tags: cdktn.listMapper(ccServiceTagPropertyToTerraform, false)(this._tags.internalValue),
            task_definition: cdktn.stringToTerraform(this._taskDefinition),
            volume_configurations: cdktn.listMapper(ccServiceServiceVolumeConfigurationPropertyToTerraform, false)(this._volumeConfigurations.internalValue),
            vpc_lattice_configurations: cdktn.listMapper(ccServiceVpcLatticeConfigurationPropertyToTerraform, false)(this._vpcLatticeConfigurations.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            availability_zone_rebalancing: {
                value: cdktn.stringToHclTerraform(this._availabilityZoneRebalancing),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            capacity_provider_strategy: {
                value: cdktn.listMapperHcl(ccServiceCapacityProviderStrategyItemPropertyToHclTerraform, false)(this._capacityProviderStrategy.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.CapacityProviderStrategyItemPropertyList",
            },
            cluster: {
                value: cdktn.stringToHclTerraform(this._cluster),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deployment_configuration: {
                value: ccServiceDeploymentConfigurationPropertyToHclTerraform(this._deploymentConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.DeploymentConfigurationProperty",
            },
            deployment_controller: {
                value: ccServiceDeploymentControllerPropertyToHclTerraform(this._deploymentController.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.DeploymentControllerProperty",
            },
            desired_count: {
                value: cdktn.numberToHclTerraform(this._desiredCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            enable_ecs_managed_tags: {
                value: cdktn.booleanToHclTerraform(this._enableEcsManagedTags),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_execute_command: {
                value: cdktn.booleanToHclTerraform(this._enableExecuteCommand),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            force_new_deployment: {
                value: ccServiceForceNewDeploymentPropertyToHclTerraform(this._forceNewDeployment.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.ForceNewDeploymentProperty",
            },
            health_check_grace_period_seconds: {
                value: cdktn.numberToHclTerraform(this._healthCheckGracePeriodSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            launch_type: {
                value: cdktn.stringToHclTerraform(this._launchType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            load_balancers: {
                value: cdktn.listMapperHcl(ccServiceLoadBalancerPropertyToHclTerraform, false)(this._loadBalancers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.LoadBalancerPropertyList",
            },
            monitoring: {
                value: ccServiceMonitoringConfigurationPropertyToHclTerraform(this._monitoring.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.MonitoringConfigurationProperty",
            },
            network_configuration: {
                value: ccServiceNetworkConfigurationPropertyToHclTerraform(this._networkConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.NetworkConfigurationProperty",
            },
            placement_constraints: {
                value: cdktn.listMapperHcl(ccServicePlacementConstraintPropertyToHclTerraform, false)(this._placementConstraints.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.PlacementConstraintPropertyList",
            },
            placement_strategies: {
                value: cdktn.listMapperHcl(ccServicePlacementStrategyPropertyToHclTerraform, false)(this._placementStrategies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.PlacementStrategyPropertyList",
            },
            platform_version: {
                value: cdktn.stringToHclTerraform(this._platformVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            propagate_tags: {
                value: cdktn.stringToHclTerraform(this._propagateTags),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role: {
                value: cdktn.stringToHclTerraform(this._role),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scheduling_strategy: {
                value: cdktn.stringToHclTerraform(this._schedulingStrategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_connect_configuration: {
                value: ccServiceServiceConnectConfigurationPropertyToHclTerraform(this._serviceConnectConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.ServiceConnectConfigurationProperty",
            },
            service_name: {
                value: cdktn.stringToHclTerraform(this._serviceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_registries: {
                value: cdktn.listMapperHcl(ccServiceServiceRegistryPropertyToHclTerraform, false)(this._serviceRegistries.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.ServiceRegistryPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServiceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.TagPropertyList",
            },
            task_definition: {
                value: cdktn.stringToHclTerraform(this._taskDefinition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            volume_configurations: {
                value: cdktn.listMapperHcl(ccServiceServiceVolumeConfigurationPropertyToHclTerraform, false)(this._volumeConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.ServiceVolumeConfigurationPropertyList",
            },
            vpc_lattice_configurations: {
                value: cdktn.listMapperHcl(ccServiceVpcLatticeConfigurationPropertyToHclTerraform, false)(this._vpcLatticeConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.VpcLatticeConfigurationPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServiceCapacityProviderStrategyItemPropertyToTerraform(struct?: CcService.CapacityProviderStrategyItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base: cdktn.numberToTerraform(struct!.base),
        capacity_provider: cdktn.stringToTerraform(struct!.capacityProvider),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccServiceCapacityProviderStrategyItemPropertyToHclTerraform(struct?: CcService.CapacityProviderStrategyItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base: {
            value: cdktn.numberToHclTerraform(struct!.base),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        capacity_provider: {
            value: cdktn.stringToHclTerraform(struct!.capacityProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktn.numberToHclTerraform(struct!.weight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceDeploymentAlarmsPropertyToTerraform(struct?: CcService.DeploymentAlarmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alarmNames),
        enable: cdktn.booleanToTerraform(struct!.enable),
        rollback: cdktn.booleanToTerraform(struct!.rollback),
    }
}


export function ccServiceDeploymentAlarmsPropertyToHclTerraform(struct?: CcService.DeploymentAlarmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alarmNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        enable: {
            value: cdktn.booleanToHclTerraform(struct!.enable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        rollback: {
            value: cdktn.booleanToHclTerraform(struct!.rollback),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceCanaryConfigurationPropertyToTerraform(struct?: CcService.CanaryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        canary_bake_time_in_minutes: cdktn.numberToTerraform(struct!.canaryBakeTimeInMinutes),
        canary_percent: cdktn.numberToTerraform(struct!.canaryPercent),
    }
}


export function ccServiceCanaryConfigurationPropertyToHclTerraform(struct?: CcService.CanaryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        canary_bake_time_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.canaryBakeTimeInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        canary_percent: {
            value: cdktn.numberToHclTerraform(struct!.canaryPercent),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceThresholdConfigurationPropertyToTerraform(struct?: CcService.ThresholdConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccServiceThresholdConfigurationPropertyToHclTerraform(struct?: CcService.ThresholdConfigurationProperty | cdktn.IResolvable): any {
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
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceDeploymentCircuitBreakerPropertyToTerraform(struct?: CcService.DeploymentCircuitBreakerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable: cdktn.booleanToTerraform(struct!.enable),
        reset_on_healthy_task: cdktn.booleanToTerraform(struct!.resetOnHealthyTask),
        rollback: cdktn.booleanToTerraform(struct!.rollback),
        threshold_configuration: ccServiceThresholdConfigurationPropertyToTerraform(struct!.thresholdConfiguration),
    }
}


export function ccServiceDeploymentCircuitBreakerPropertyToHclTerraform(struct?: CcService.DeploymentCircuitBreakerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable: {
            value: cdktn.booleanToHclTerraform(struct!.enable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        reset_on_healthy_task: {
            value: cdktn.booleanToHclTerraform(struct!.resetOnHealthyTask),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        rollback: {
            value: cdktn.booleanToHclTerraform(struct!.rollback),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        threshold_configuration: {
            value: ccServiceThresholdConfigurationPropertyToHclTerraform(struct!.thresholdConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ThresholdConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceHookTimeoutConfigPropertyToTerraform(struct?: CcService.HookTimeoutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        timeout_in_minutes: cdktn.numberToTerraform(struct!.timeoutInMinutes),
    }
}


export function ccServiceHookTimeoutConfigPropertyToHclTerraform(struct?: CcService.HookTimeoutConfigProperty | cdktn.IResolvable): any {
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
        timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.timeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceDeploymentLifecycleHookPropertyToTerraform(struct?: CcService.DeploymentLifecycleHookProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hook_details: cdktn.stringToTerraform(struct!.hookDetails),
        hook_target_arn: cdktn.stringToTerraform(struct!.hookTargetArn),
        lifecycle_stages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleStages),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        target_type: cdktn.stringToTerraform(struct!.targetType),
        timeout_configuration: ccServiceHookTimeoutConfigPropertyToTerraform(struct!.timeoutConfiguration),
    }
}


export function ccServiceDeploymentLifecycleHookPropertyToHclTerraform(struct?: CcService.DeploymentLifecycleHookProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hook_details: {
            value: cdktn.stringToHclTerraform(struct!.hookDetails),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hook_target_arn: {
            value: cdktn.stringToHclTerraform(struct!.hookTargetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_stages: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleStages),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_type: {
            value: cdktn.stringToHclTerraform(struct!.targetType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_configuration: {
            value: ccServiceHookTimeoutConfigPropertyToHclTerraform(struct!.timeoutConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "HookTimeoutConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLinearConfigurationPropertyToTerraform(struct?: CcService.LinearConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        step_bake_time_in_minutes: cdktn.numberToTerraform(struct!.stepBakeTimeInMinutes),
        step_percent: cdktn.numberToTerraform(struct!.stepPercent),
    }
}


export function ccServiceLinearConfigurationPropertyToHclTerraform(struct?: CcService.LinearConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        step_bake_time_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.stepBakeTimeInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        step_percent: {
            value: cdktn.numberToHclTerraform(struct!.stepPercent),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceDeploymentConfigurationPropertyToTerraform(struct?: CcService.DeploymentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarms: ccServiceDeploymentAlarmsPropertyToTerraform(struct!.alarms),
        bake_time_in_minutes: cdktn.numberToTerraform(struct!.bakeTimeInMinutes),
        canary_configuration: ccServiceCanaryConfigurationPropertyToTerraform(struct!.canaryConfiguration),
        deployment_circuit_breaker: ccServiceDeploymentCircuitBreakerPropertyToTerraform(struct!.deploymentCircuitBreaker),
        lifecycle_hooks: cdktn.listMapper(ccServiceDeploymentLifecycleHookPropertyToTerraform, false)(struct!.lifecycleHooks),
        linear_configuration: ccServiceLinearConfigurationPropertyToTerraform(struct!.linearConfiguration),
        maximum_percent: cdktn.numberToTerraform(struct!.maximumPercent),
        minimum_healthy_percent: cdktn.numberToTerraform(struct!.minimumHealthyPercent),
        strategy: cdktn.stringToTerraform(struct!.strategy),
    }
}


export function ccServiceDeploymentConfigurationPropertyToHclTerraform(struct?: CcService.DeploymentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarms: {
            value: ccServiceDeploymentAlarmsPropertyToHclTerraform(struct!.alarms),
            isBlock: true,
            type: "struct",
            storageClassType: "DeploymentAlarmsProperty",
        },
        bake_time_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.bakeTimeInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        canary_configuration: {
            value: ccServiceCanaryConfigurationPropertyToHclTerraform(struct!.canaryConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CanaryConfigurationProperty",
        },
        deployment_circuit_breaker: {
            value: ccServiceDeploymentCircuitBreakerPropertyToHclTerraform(struct!.deploymentCircuitBreaker),
            isBlock: true,
            type: "struct",
            storageClassType: "DeploymentCircuitBreakerProperty",
        },
        lifecycle_hooks: {
            value: cdktn.listMapperHcl(ccServiceDeploymentLifecycleHookPropertyToHclTerraform, false)(struct!.lifecycleHooks),
            isBlock: true,
            type: "list",
            storageClassType: "DeploymentLifecycleHookPropertyList",
        },
        linear_configuration: {
            value: ccServiceLinearConfigurationPropertyToHclTerraform(struct!.linearConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LinearConfigurationProperty",
        },
        maximum_percent: {
            value: cdktn.numberToHclTerraform(struct!.maximumPercent),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum_healthy_percent: {
            value: cdktn.numberToHclTerraform(struct!.minimumHealthyPercent),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        strategy: {
            value: cdktn.stringToHclTerraform(struct!.strategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceDeploymentControllerPropertyToTerraform(struct?: CcService.DeploymentControllerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccServiceDeploymentControllerPropertyToHclTerraform(struct?: CcService.DeploymentControllerProperty | cdktn.IResolvable): any {
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


export function ccServiceForceNewDeploymentPropertyToTerraform(struct?: CcService.ForceNewDeploymentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_force_new_deployment: cdktn.booleanToTerraform(struct!.enableForceNewDeployment),
        force_new_deployment_nonce: cdktn.stringToTerraform(struct!.forceNewDeploymentNonce),
    }
}


export function ccServiceForceNewDeploymentPropertyToHclTerraform(struct?: CcService.ForceNewDeploymentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_force_new_deployment: {
            value: cdktn.booleanToHclTerraform(struct!.enableForceNewDeployment),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        force_new_deployment_nonce: {
            value: cdktn.stringToHclTerraform(struct!.forceNewDeploymentNonce),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceAdvancedConfigurationPropertyToTerraform(struct?: CcService.AdvancedConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alternate_target_group_arn: cdktn.stringToTerraform(struct!.alternateTargetGroupArn),
        production_listener_rule: cdktn.stringToTerraform(struct!.productionListenerRule),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        test_listener_rule: cdktn.stringToTerraform(struct!.testListenerRule),
    }
}


export function ccServiceAdvancedConfigurationPropertyToHclTerraform(struct?: CcService.AdvancedConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alternate_target_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.alternateTargetGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        production_listener_rule: {
            value: cdktn.stringToHclTerraform(struct!.productionListenerRule),
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
        test_listener_rule: {
            value: cdktn.stringToHclTerraform(struct!.testListenerRule),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLoadBalancerPropertyToTerraform(struct?: CcService.LoadBalancerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        advanced_configuration: ccServiceAdvancedConfigurationPropertyToTerraform(struct!.advancedConfiguration),
        container_name: cdktn.stringToTerraform(struct!.containerName),
        container_port: cdktn.numberToTerraform(struct!.containerPort),
        load_balancer_name: cdktn.stringToTerraform(struct!.loadBalancerName),
        target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
    }
}


export function ccServiceLoadBalancerPropertyToHclTerraform(struct?: CcService.LoadBalancerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        advanced_configuration: {
            value: ccServiceAdvancedConfigurationPropertyToHclTerraform(struct!.advancedConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AdvancedConfigurationProperty",
        },
        container_name: {
            value: cdktn.stringToHclTerraform(struct!.containerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        container_port: {
            value: cdktn.numberToHclTerraform(struct!.containerPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        load_balancer_name: {
            value: cdktn.stringToHclTerraform(struct!.loadBalancerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceMetricConfigurationPropertyToTerraform(struct?: CcService.MetricConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
        resolution_seconds: cdktn.numberToTerraform(struct!.resolutionSeconds),
    }
}


export function ccServiceMetricConfigurationPropertyToHclTerraform(struct?: CcService.MetricConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resolution_seconds: {
            value: cdktn.numberToHclTerraform(struct!.resolutionSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceMonitoringConfigurationPropertyToTerraform(struct?: CcService.MonitoringConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_configurations: cdktn.listMapper(ccServiceMetricConfigurationPropertyToTerraform, false)(struct!.metricConfigurations),
    }
}


export function ccServiceMonitoringConfigurationPropertyToHclTerraform(struct?: CcService.MonitoringConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_configurations: {
            value: cdktn.listMapperHcl(ccServiceMetricConfigurationPropertyToHclTerraform, false)(struct!.metricConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "MetricConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceAwsVpcConfigurationPropertyToTerraform(struct?: CcService.AwsVpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        assign_public_ip: cdktn.stringToTerraform(struct!.assignPublicIp),
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccServiceAwsVpcConfigurationPropertyToHclTerraform(struct?: CcService.AwsVpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        assign_public_ip: {
            value: cdktn.stringToHclTerraform(struct!.assignPublicIp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccServiceNetworkConfigurationPropertyToTerraform(struct?: CcService.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        awsvpc_configuration: ccServiceAwsVpcConfigurationPropertyToTerraform(struct!.awsvpcConfiguration),
    }
}


export function ccServiceNetworkConfigurationPropertyToHclTerraform(struct?: CcService.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        awsvpc_configuration: {
            value: ccServiceAwsVpcConfigurationPropertyToHclTerraform(struct!.awsvpcConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AwsVpcConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServicePlacementConstraintPropertyToTerraform(struct?: CcService.PlacementConstraintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccServicePlacementConstraintPropertyToHclTerraform(struct?: CcService.PlacementConstraintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
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


export function ccServicePlacementStrategyPropertyToTerraform(struct?: CcService.PlacementStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field: cdktn.stringToTerraform(struct!.field),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccServicePlacementStrategyPropertyToHclTerraform(struct?: CcService.PlacementStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field: {
            value: cdktn.stringToHclTerraform(struct!.field),
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


export function ccServiceServiceConnectAccessLogConfigurationPropertyToTerraform(struct?: CcService.ServiceConnectAccessLogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        format: cdktn.stringToTerraform(struct!.format),
        include_query_parameters: cdktn.stringToTerraform(struct!.includeQueryParameters),
    }
}


export function ccServiceServiceConnectAccessLogConfigurationPropertyToHclTerraform(struct?: CcService.ServiceConnectAccessLogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include_query_parameters: {
            value: cdktn.stringToHclTerraform(struct!.includeQueryParameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceSecretPropertyToTerraform(struct?: CcService.SecretProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value_from: cdktn.stringToTerraform(struct!.valueFrom),
    }
}


export function ccServiceSecretPropertyToHclTerraform(struct?: CcService.SecretProperty | cdktn.IResolvable): any {
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
        value_from: {
            value: cdktn.stringToHclTerraform(struct!.valueFrom),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLogConfigurationPropertyToTerraform(struct?: CcService.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_driver: cdktn.stringToTerraform(struct!.logDriver),
        options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.options),
        secret_options: cdktn.listMapper(ccServiceSecretPropertyToTerraform, false)(struct!.secretOptions),
    }
}


export function ccServiceLogConfigurationPropertyToHclTerraform(struct?: CcService.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_driver: {
            value: cdktn.stringToHclTerraform(struct!.logDriver),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        options: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.options),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        secret_options: {
            value: cdktn.listMapperHcl(ccServiceSecretPropertyToHclTerraform, false)(struct!.secretOptions),
            isBlock: true,
            type: "list",
            storageClassType: "SecretPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceConnectTestTrafficRulesHeaderValuePropertyToTerraform(struct?: CcService.ServiceConnectTestTrafficRulesHeaderValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exact: cdktn.stringToTerraform(struct!.exact),
    }
}


export function ccServiceServiceConnectTestTrafficRulesHeaderValuePropertyToHclTerraform(struct?: CcService.ServiceConnectTestTrafficRulesHeaderValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exact: {
            value: cdktn.stringToHclTerraform(struct!.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceConnectTestTrafficRulesHeaderPropertyToTerraform(struct?: CcService.ServiceConnectTestTrafficRulesHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: ccServiceServiceConnectTestTrafficRulesHeaderValuePropertyToTerraform(struct!.value),
    }
}


export function ccServiceServiceConnectTestTrafficRulesHeaderPropertyToHclTerraform(struct?: CcService.ServiceConnectTestTrafficRulesHeaderProperty | cdktn.IResolvable): any {
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
        value: {
            value: ccServiceServiceConnectTestTrafficRulesHeaderValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceConnectTestTrafficRulesHeaderValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceConnectTestTrafficRulesPropertyToTerraform(struct?: CcService.ServiceConnectTestTrafficRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header: ccServiceServiceConnectTestTrafficRulesHeaderPropertyToTerraform(struct!.header),
    }
}


export function ccServiceServiceConnectTestTrafficRulesPropertyToHclTerraform(struct?: CcService.ServiceConnectTestTrafficRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header: {
            value: ccServiceServiceConnectTestTrafficRulesHeaderPropertyToHclTerraform(struct!.header),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceConnectTestTrafficRulesHeaderProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceConnectClientAliasPropertyToTerraform(struct?: CcService.ServiceConnectClientAliasProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dns_name: cdktn.stringToTerraform(struct!.dnsName),
        port: cdktn.numberToTerraform(struct!.port),
        test_traffic_rules: ccServiceServiceConnectTestTrafficRulesPropertyToTerraform(struct!.testTrafficRules),
    }
}


export function ccServiceServiceConnectClientAliasPropertyToHclTerraform(struct?: CcService.ServiceConnectClientAliasProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dns_name: {
            value: cdktn.stringToHclTerraform(struct!.dnsName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        test_traffic_rules: {
            value: ccServiceServiceConnectTestTrafficRulesPropertyToHclTerraform(struct!.testTrafficRules),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceConnectTestTrafficRulesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceTimeoutConfigurationPropertyToTerraform(struct?: CcService.TimeoutConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_timeout_seconds: cdktn.numberToTerraform(struct!.idleTimeoutSeconds),
        per_request_timeout_seconds: cdktn.numberToTerraform(struct!.perRequestTimeoutSeconds),
    }
}


export function ccServiceTimeoutConfigurationPropertyToHclTerraform(struct?: CcService.TimeoutConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_timeout_seconds: {
            value: cdktn.numberToHclTerraform(struct!.idleTimeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        per_request_timeout_seconds: {
            value: cdktn.numberToHclTerraform(struct!.perRequestTimeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceConnectTlsCertificateAuthorityPropertyToTerraform(struct?: CcService.ServiceConnectTlsCertificateAuthorityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_pca_authority_arn: cdktn.stringToTerraform(struct!.awsPcaAuthorityArn),
    }
}


export function ccServiceServiceConnectTlsCertificateAuthorityPropertyToHclTerraform(struct?: CcService.ServiceConnectTlsCertificateAuthorityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_pca_authority_arn: {
            value: cdktn.stringToHclTerraform(struct!.awsPcaAuthorityArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceConnectTlsConfigurationPropertyToTerraform(struct?: CcService.ServiceConnectTlsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        issuer_certificate_authority: ccServiceServiceConnectTlsCertificateAuthorityPropertyToTerraform(struct!.issuerCertificateAuthority),
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccServiceServiceConnectTlsConfigurationPropertyToHclTerraform(struct?: CcService.ServiceConnectTlsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        issuer_certificate_authority: {
            value: ccServiceServiceConnectTlsCertificateAuthorityPropertyToHclTerraform(struct!.issuerCertificateAuthority),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceConnectTlsCertificateAuthorityProperty",
        },
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
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


export function ccServiceServiceConnectServicePropertyToTerraform(struct?: CcService.ServiceConnectServiceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_aliases: cdktn.listMapper(ccServiceServiceConnectClientAliasPropertyToTerraform, false)(struct!.clientAliases),
        discovery_name: cdktn.stringToTerraform(struct!.discoveryName),
        ingress_port_override: cdktn.numberToTerraform(struct!.ingressPortOverride),
        port_name: cdktn.stringToTerraform(struct!.portName),
        timeout: ccServiceTimeoutConfigurationPropertyToTerraform(struct!.timeout),
        tls: ccServiceServiceConnectTlsConfigurationPropertyToTerraform(struct!.tls),
    }
}


export function ccServiceServiceConnectServicePropertyToHclTerraform(struct?: CcService.ServiceConnectServiceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_aliases: {
            value: cdktn.listMapperHcl(ccServiceServiceConnectClientAliasPropertyToHclTerraform, false)(struct!.clientAliases),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceConnectClientAliasPropertyList",
        },
        discovery_name: {
            value: cdktn.stringToHclTerraform(struct!.discoveryName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ingress_port_override: {
            value: cdktn.numberToHclTerraform(struct!.ingressPortOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        port_name: {
            value: cdktn.stringToHclTerraform(struct!.portName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout: {
            value: ccServiceTimeoutConfigurationPropertyToHclTerraform(struct!.timeout),
            isBlock: true,
            type: "struct",
            storageClassType: "TimeoutConfigurationProperty",
        },
        tls: {
            value: ccServiceServiceConnectTlsConfigurationPropertyToHclTerraform(struct!.tls),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceConnectTlsConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceConnectConfigurationPropertyToTerraform(struct?: CcService.ServiceConnectConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_log_configuration: ccServiceServiceConnectAccessLogConfigurationPropertyToTerraform(struct!.accessLogConfiguration),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_configuration: ccServiceLogConfigurationPropertyToTerraform(struct!.logConfiguration),
        namespace: cdktn.stringToTerraform(struct!.namespace),
        services: cdktn.listMapper(ccServiceServiceConnectServicePropertyToTerraform, false)(struct!.services),
    }
}


export function ccServiceServiceConnectConfigurationPropertyToHclTerraform(struct?: CcService.ServiceConnectConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_log_configuration: {
            value: ccServiceServiceConnectAccessLogConfigurationPropertyToHclTerraform(struct!.accessLogConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceConnectAccessLogConfigurationProperty",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_configuration: {
            value: ccServiceLogConfigurationPropertyToHclTerraform(struct!.logConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LogConfigurationProperty",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        services: {
            value: cdktn.listMapperHcl(ccServiceServiceConnectServicePropertyToHclTerraform, false)(struct!.services),
            isBlock: true,
            type: "list",
            storageClassType: "ServiceConnectServicePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceRegistryPropertyToTerraform(struct?: CcService.ServiceRegistryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_name: cdktn.stringToTerraform(struct!.containerName),
        container_port: cdktn.numberToTerraform(struct!.containerPort),
        port: cdktn.numberToTerraform(struct!.port),
        registry_arn: cdktn.stringToTerraform(struct!.registryArn),
    }
}


export function ccServiceServiceRegistryPropertyToHclTerraform(struct?: CcService.ServiceRegistryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_name: {
            value: cdktn.stringToHclTerraform(struct!.containerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        container_port: {
            value: cdktn.numberToHclTerraform(struct!.containerPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        registry_arn: {
            value: cdktn.stringToHclTerraform(struct!.registryArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceTagPropertyToTerraform(struct?: CcService.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceTagPropertyToHclTerraform(struct?: CcService.TagProperty | cdktn.IResolvable): any {
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


export function ccServiceTagsPropertyToTerraform(struct?: CcService.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceTagsPropertyToHclTerraform(struct?: CcService.TagsProperty | cdktn.IResolvable): any {
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


export function ccServiceEBSTagSpecificationPropertyToTerraform(struct?: CcService.EBSTagSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        propagate_tags: cdktn.stringToTerraform(struct!.propagateTags),
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        tags: cdktn.listMapper(ccServiceTagsPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccServiceEBSTagSpecificationPropertyToHclTerraform(struct?: CcService.EBSTagSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        propagate_tags: {
            value: cdktn.stringToHclTerraform(struct!.propagateTags),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(ccServiceTagsPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceManagedEBSVolumeConfigurationPropertyToTerraform(struct?: CcService.ServiceManagedEBSVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encrypted: cdktn.booleanToTerraform(struct!.encrypted),
        filesystem_type: cdktn.stringToTerraform(struct!.filesystemType),
        iops: cdktn.numberToTerraform(struct!.iops),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        size_in_gi_b: cdktn.numberToTerraform(struct!.sizeInGiB),
        snapshot_id: cdktn.stringToTerraform(struct!.snapshotId),
        tag_specifications: cdktn.listMapper(ccServiceEBSTagSpecificationPropertyToTerraform, false)(struct!.tagSpecifications),
        throughput: cdktn.numberToTerraform(struct!.throughput),
        volume_initialization_rate: cdktn.numberToTerraform(struct!.volumeInitializationRate),
        volume_type: cdktn.stringToTerraform(struct!.volumeType),
    }
}


export function ccServiceServiceManagedEBSVolumeConfigurationPropertyToHclTerraform(struct?: CcService.ServiceManagedEBSVolumeConfigurationProperty | cdktn.IResolvable): any {
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
        filesystem_type: {
            value: cdktn.stringToHclTerraform(struct!.filesystemType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        size_in_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.sizeInGiB),
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
        tag_specifications: {
            value: cdktn.listMapperHcl(ccServiceEBSTagSpecificationPropertyToHclTerraform, false)(struct!.tagSpecifications),
            isBlock: true,
            type: "list",
            storageClassType: "EBSTagSpecificationPropertyList",
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


export function ccServiceServiceVolumeConfigurationPropertyToTerraform(struct?: CcService.ServiceVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        managed_ebs_volume: ccServiceServiceManagedEBSVolumeConfigurationPropertyToTerraform(struct!.managedEbsVolume),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccServiceServiceVolumeConfigurationPropertyToHclTerraform(struct?: CcService.ServiceVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        managed_ebs_volume: {
            value: ccServiceServiceManagedEBSVolumeConfigurationPropertyToHclTerraform(struct!.managedEbsVolume),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceManagedEBSVolumeConfigurationProperty",
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


export function ccServiceVpcLatticeConfigurationPropertyToTerraform(struct?: CcService.VpcLatticeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        port_name: cdktn.stringToTerraform(struct!.portName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
    }
}


export function ccServiceVpcLatticeConfigurationPropertyToHclTerraform(struct?: CcService.VpcLatticeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        port_name: {
            value: cdktn.stringToHclTerraform(struct!.portName),
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
        target_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcService {
export interface CapacityProviderStrategyItemProperty {
    /**
    * The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider for each service. Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of ``0`` is used.
    *  Base value characteristics:
    *   +  Only one capacity provider in a strategy can have a base defined
    *   +  The default value is ``0`` if not specified
    *   +  The valid range is 0 to 100,000
    *   +  Base requirements are satisfied first before weight distribution
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#base CcService#base}
    */
    readonly base?: number;
    /**
    * The short name of the capacity provider. This can be either an AWS managed capacity provider (``FARGATE`` or ``FARGATE_SPOT``) or the name of a custom capacity provider that you created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#capacity_provider CcService#capacity_provider}
    */
    readonly capacityProvider?: string;
    /**
    * The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The ``weight`` value is taken into consideration after the ``base`` value, if defined, is satisfied.
    *  If no ``weight`` value is specified, the default value of ``0`` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of ``0`` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of ``0``, any ``RunTask`` or ``CreateService`` actions using the capacity provider strategy will fail.
    *  Weight value characteristics:
    *   +  Weight is considered after the base value is satisfied
    *   +  The default value is ``0`` if not specified
    *   +  The valid range is 0 to 1,000
    *   +  At least one capacity provider must have a weight greater than zero
    *   +  Capacity providers with weight of ``0`` cannot place tasks
    *   
    *  Task distribution logic:
    *   1.  Base satisfaction: The minimum number of tasks specified by the base value are placed on that capacity provider
    *   1.  Weight distribution: After base requirements are met, additional tasks are distributed according to weight ratios
    *   
    *  Examples:
    *  Equal Distribution: Two capacity providers both with weight ``1`` will split tasks evenly after base requirements are met.
    *  Weighted Distribution: If capacityProviderA has weight ``1`` and capacityProviderB has weight ``4``, then for every 1 task on A, 4 tasks will run on B.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#weight CcService#weight}
    */
    readonly weight?: number;
}
export class CapacityProviderStrategyItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CapacityProviderStrategyItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._base !== undefined) {
            hasAnyValues = true;
            internalValueResult.base = this._base;
        }
        if (this._capacityProvider !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityProvider = this._capacityProvider;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityProviderStrategyItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._base = undefined;
            this._capacityProvider = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._base = value.base;
            this._capacityProvider = value.capacityProvider;
            this._weight = value.weight;
        }
    }

    // base - computed: true, optional: true, required: false
    private _base?: number; 
    public get base() {
        return this.getNumberAttribute('base');
    }
    public set base(value: number) {
        this._base = value;
    }
    public resetBase() {
        this._base = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseInput() {
        return this._base;
    }

    // capacity_provider - computed: true, optional: true, required: false
    private _capacityProvider?: string; 
    public get capacityProvider() {
        return this.getStringAttribute('capacity_provider');
    }
    public set capacityProvider(value: string) {
        this._capacityProvider = value;
    }
    public resetCapacityProvider() {
        this._capacityProvider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderInput() {
        return this._capacityProvider;
    }

    // weight - computed: true, optional: true, required: false
    private _weight?: number; 
    public get weight() {
        return this.getNumberAttribute('weight');
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightInput() {
        return this._weight;
    }
}

export class CapacityProviderStrategyItemPropertyList extends cdktn.ComplexList {
    public internalValue? : CapacityProviderStrategyItemProperty[] | cdktn.IResolvable

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
    public get(index: number): CapacityProviderStrategyItemPropertyOutputReference {
        return new CapacityProviderStrategyItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DeploymentAlarmsProperty {
    /**
    * One or more CloudWatch alarm names. Use a "," to separate the alarms.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#alarm_names CcService#alarm_names}
    */
    readonly alarmNames?: string[];
    /**
    * Determines whether to use the CloudWatch alarm option in the service deployment process.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#enable CcService#enable}
    */
    readonly enable?: boolean | cdktn.IResolvable;
    /**
    * Determines whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is used, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#rollback CcService#rollback}
    */
    readonly rollback?: boolean | cdktn.IResolvable;
}
export class DeploymentAlarmsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentAlarmsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmNames = this._alarmNames;
        }
        if (this._enable !== undefined) {
            hasAnyValues = true;
            internalValueResult.enable = this._enable;
        }
        if (this._rollback !== undefined) {
            hasAnyValues = true;
            internalValueResult.rollback = this._rollback;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentAlarmsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmNames = undefined;
            this._enable = undefined;
            this._rollback = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmNames = value.alarmNames;
            this._enable = value.enable;
            this._rollback = value.rollback;
        }
    }

    // alarm_names - computed: true, optional: true, required: false
    private _alarmNames?: string[]; 
    public get alarmNames() {
        return this.getListAttribute('alarm_names');
    }
    public set alarmNames(value: string[]) {
        this._alarmNames = value;
    }
    public resetAlarmNames() {
        this._alarmNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNamesInput() {
        return this._alarmNames;
    }

    // enable - computed: true, optional: true, required: false
    private _enable?: boolean | cdktn.IResolvable; 
    public get enable() {
        return this.getBooleanAttribute('enable');
    }
    public set enable(value: boolean | cdktn.IResolvable) {
        this._enable = value;
    }
    public resetEnable() {
        this._enable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInput() {
        return this._enable;
    }

    // rollback - computed: true, optional: true, required: false
    private _rollback?: boolean | cdktn.IResolvable; 
    public get rollback() {
        return this.getBooleanAttribute('rollback');
    }
    public set rollback(value: boolean | cdktn.IResolvable) {
        this._rollback = value;
    }
    public resetRollback() {
        this._rollback = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rollbackInput() {
        return this._rollback;
    }
}
export interface CanaryConfigurationProperty {
    /**
    * The amount of time in minutes to wait during the canary phase before shifting the remaining production traffic to the new service revision. Valid values are 0 to 1440 minutes (24 hours). The default value is 10.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#canary_bake_time_in_minutes CcService#canary_bake_time_in_minutes}
    */
    readonly canaryBakeTimeInMinutes?: number;
    /**
    * The percentage of production traffic to shift to the new service revision during the canary phase. Valid values are multiples of 0.1 from 0.1 to 100.0. The default value is 5.0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#canary_percent CcService#canary_percent}
    */
    readonly canaryPercent?: number;
}
export class CanaryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CanaryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._canaryBakeTimeInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.canaryBakeTimeInMinutes = this._canaryBakeTimeInMinutes;
        }
        if (this._canaryPercent !== undefined) {
            hasAnyValues = true;
            internalValueResult.canaryPercent = this._canaryPercent;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CanaryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._canaryBakeTimeInMinutes = undefined;
            this._canaryPercent = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._canaryBakeTimeInMinutes = value.canaryBakeTimeInMinutes;
            this._canaryPercent = value.canaryPercent;
        }
    }

    // canary_bake_time_in_minutes - computed: true, optional: true, required: false
    private _canaryBakeTimeInMinutes?: number; 
    public get canaryBakeTimeInMinutes() {
        return this.getNumberAttribute('canary_bake_time_in_minutes');
    }
    public set canaryBakeTimeInMinutes(value: number) {
        this._canaryBakeTimeInMinutes = value;
    }
    public resetCanaryBakeTimeInMinutes() {
        this._canaryBakeTimeInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get canaryBakeTimeInMinutesInput() {
        return this._canaryBakeTimeInMinutes;
    }

    // canary_percent - computed: true, optional: true, required: false
    private _canaryPercent?: number; 
    public get canaryPercent() {
        return this.getNumberAttribute('canary_percent');
    }
    public set canaryPercent(value: number) {
        this._canaryPercent = value;
    }
    public resetCanaryPercent() {
        this._canaryPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get canaryPercentInput() {
        return this._canaryPercent;
    }
}
export interface ThresholdConfigurationProperty {
    /**
    * Determines how Amazon ECS uses ``value`` to calculate the failure threshold. For the percentage types (``BOUNDED_PERCENT`` and ``UNBOUNDED_PERCENT``), Amazon ECS multiplies ``value`` by the latest service desired count. For ``COUNT``, Amazon ECS uses ``value`` directly as the threshold. The default is ``BOUNDED_PERCENT``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#type CcService#type}
    */
    readonly type?: string;
    /**
    * Specifies the integer that Amazon ECS uses to calculate the failure threshold. When ``type`` is ``COUNT``, this value is the failure threshold itself. When ``type`` is a percentage type, Amazon ECS multiplies this value by the latest service desired count to produce the failure threshold. The default is ``50``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#value CcService#value}
    */
    readonly value?: number;
}
export class ThresholdConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ThresholdConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
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

    public set internalValue(value: ThresholdConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
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
            this._type = value.type;
            this._value = value.value;
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

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface DeploymentCircuitBreakerProperty {
    /**
    * Determines whether to use the deployment circuit breaker logic for the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#enable CcService#enable}
    */
    readonly enable?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether the deployment circuit breaker resets its failure count when a task reaches a healthy state. When set to ``true``, a task that reaches a healthy state resets the failure count to ``0``. When set to ``false``, Amazon ECS does not reset the failure count. The default is ``true``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#reset_on_healthy_task CcService#reset_on_healthy_task}
    */
    readonly resetOnHealthyTask?: boolean | cdktn.IResolvable;
    /**
    * Determines whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is on, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#rollback CcService#rollback}
    */
    readonly rollback?: boolean | cdktn.IResolvable;
    /**
    * The threshold configuration that controls when the deployment circuit breaker triggers. The ``type`` and ``value`` together determine how many task failures are tolerated before the circuit breaker activates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#threshold_configuration CcService#threshold_configuration}
    */
    readonly thresholdConfiguration?: ThresholdConfigurationProperty;
}
export class DeploymentCircuitBreakerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentCircuitBreakerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enable !== undefined) {
            hasAnyValues = true;
            internalValueResult.enable = this._enable;
        }
        if (this._resetOnHealthyTask !== undefined) {
            hasAnyValues = true;
            internalValueResult.resetOnHealthyTask = this._resetOnHealthyTask;
        }
        if (this._rollback !== undefined) {
            hasAnyValues = true;
            internalValueResult.rollback = this._rollback;
        }
        if (this._thresholdConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.thresholdConfiguration = this._thresholdConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentCircuitBreakerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enable = undefined;
            this._resetOnHealthyTask = undefined;
            this._rollback = undefined;
            this._thresholdConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enable = value.enable;
            this._resetOnHealthyTask = value.resetOnHealthyTask;
            this._rollback = value.rollback;
            this._thresholdConfiguration.internalValue = value.thresholdConfiguration;
        }
    }

    // enable - computed: true, optional: true, required: false
    private _enable?: boolean | cdktn.IResolvable; 
    public get enable() {
        return this.getBooleanAttribute('enable');
    }
    public set enable(value: boolean | cdktn.IResolvable) {
        this._enable = value;
    }
    public resetEnable() {
        this._enable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInput() {
        return this._enable;
    }

    // reset_on_healthy_task - computed: true, optional: true, required: false
    private _resetOnHealthyTask?: boolean | cdktn.IResolvable; 
    public get resetOnHealthyTask() {
        return this.getBooleanAttribute('reset_on_healthy_task');
    }
    public set resetOnHealthyTask(value: boolean | cdktn.IResolvable) {
        this._resetOnHealthyTask = value;
    }
    public resetResetOnHealthyTask() {
        this._resetOnHealthyTask = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resetOnHealthyTaskInput() {
        return this._resetOnHealthyTask;
    }

    // rollback - computed: true, optional: true, required: false
    private _rollback?: boolean | cdktn.IResolvable; 
    public get rollback() {
        return this.getBooleanAttribute('rollback');
    }
    public set rollback(value: boolean | cdktn.IResolvable) {
        this._rollback = value;
    }
    public resetRollback() {
        this._rollback = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rollbackInput() {
        return this._rollback;
    }

    // threshold_configuration - computed: true, optional: true, required: false
    private _thresholdConfiguration = new ThresholdConfigurationPropertyOutputReference(this, "threshold_configuration");
    public get thresholdConfiguration() {
        return this._thresholdConfiguration;
    }
    public putThresholdConfiguration(value: ThresholdConfigurationProperty) {
        this._thresholdConfiguration.internalValue = value;
    }
    public resetThresholdConfiguration() {
        this._thresholdConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdConfigurationInput() {
        return this._thresholdConfiguration.internalValue;
    }
}
export interface HookTimeoutConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#action CcService#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#timeout_in_minutes CcService#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
}
export class HookTimeoutConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HookTimeoutConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._timeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutInMinutes = this._timeoutInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HookTimeoutConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._timeoutInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._timeoutInMinutes = value.timeoutInMinutes;
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

    // timeout_in_minutes - computed: true, optional: true, required: false
    private _timeoutInMinutes?: number; 
    public get timeoutInMinutes() {
        return this.getNumberAttribute('timeout_in_minutes');
    }
    public set timeoutInMinutes(value: number) {
        this._timeoutInMinutes = value;
    }
    public resetTimeoutInMinutes() {
        this._timeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInMinutesInput() {
        return this._timeoutInMinutes;
    }
}
export interface DeploymentLifecycleHookProperty {
    /**
    * Use this field to specify custom parameters that ECS passes to your hook target invocations (such as a Lambda function).
    *  This field must be a JSON object as a string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#hook_details CcService#hook_details}
    */
    readonly hookDetails?: string;
    /**
    * The Amazon Resource Name (ARN) of the hook target. For ``AWS_LAMBDA`` hooks, this is the Lambda function ARN. This field is not applicable for ``PAUSE`` hooks.
    *  You must provide this parameter when configuring an ``AWS_LAMBDA`` lifecycle hook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#hook_target_arn CcService#hook_target_arn}
    */
    readonly hookTargetArn?: string;
    /**
    * The lifecycle stages at which to run the hook. Choose from these valid values:
    *   +  RECONCILE_SERVICE
    *  The reconciliation stage that only happens when you start a new service deployment with more than 1 service revision in an ACTIVE state.
    *  You can use a lifecycle hook for this stage.
    *   +  PRE_SCALE_UP
    *  The green service revision has not started. The blue service revision is handling 100% of the production traffic. There is no test traffic.
    *  You can use a lifecycle hook for this stage.
    *   +  POST_SCALE_UP
    *  The green service revision has started. The blue service revision is handling 100% of the production traffic. There is no test traffic.
    *  You can use a lifecycle hook for this stage.
    *   +  TEST_TRAFFIC_SHIFT
    *  The blue and green service revisions are running. The blue service revision handles 100% of the production traffic. The green service revision is migrating from 0% to 100% of test traffic.
    *  You can use a lifecycle hook for this stage.
    *   +  POST_TEST_TRAFFIC_SHIFT
    *  The test traffic shift is complete. The green service revision handles 100% of the test traffic.
    *  You can use a lifecycle hook for this stage.
    *   +  PRE_PRODUCTION_TRAFFIC_SHIFT
    *  Occurs before production traffic shift. For linear and canary deployments, this stage is invoked before every traffic shift step.
    *  You can use a lifecycle hook for this stage.
    *   +  PRODUCTION_TRAFFIC_SHIFT
    *  Production traffic is shifting to the green service revision. The green service revision is migrating from 0% to 100% of production traffic. For linear and canary deployments, this stage is invoked at every traffic shift step.
    *  You can use a lifecycle hook for this stage.
    *   +  POST_PRODUCTION_TRAFFIC_SHIFT
    *  The production traffic shift is complete.
    *  You can use a lifecycle hook for this stage.
    *   
    *   ``PAUSE`` hooks cannot be configured at ``TEST_TRAFFIC_SHIFT`` or ``PRODUCTION_TRAFFIC_SHIFT`` stages. These stages are only valid for ``AWS_LAMBDA`` hooks.
    *   You must provide this parameter when configuring a deployment lifecycle hook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#lifecycle_stages CcService#lifecycle_stages}
    */
    readonly lifecycleStages?: string[];
    /**
    * The Amazon Resource Name (ARN) of the IAM role that grants Amazon ECS permission to call Lambda functions on your behalf.
    *  For more information, see [Permissions required for Lambda functions in Amazon ECS blue/green deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/blue-green-permissions.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#role_arn CcService#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The type of action the lifecycle hook performs. Valid values are:
    *   +  ``AWS_LAMBDA`` - Invokes a Lambda function at the specified lifecycle stage. This is the default value.
    *   +  ``PAUSE`` - Pauses the deployment at the specified lifecycle stage until you call ``ContinueServiceDeployment`` to continue or roll back.
    *   
    *  This field is optional. If not specified, the default value is ``AWS_LAMBDA``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#target_type CcService#target_type}
    */
    readonly targetType?: string;
    /**
    * The timeout configuration for the lifecycle hook. This specifies how long Amazon ECS waits before taking the timeout action if the hook is not resolved.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#timeout_configuration CcService#timeout_configuration}
    */
    readonly timeoutConfiguration?: HookTimeoutConfigProperty;
}
export class DeploymentLifecycleHookPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DeploymentLifecycleHookProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hookDetails !== undefined) {
            hasAnyValues = true;
            internalValueResult.hookDetails = this._hookDetails;
        }
        if (this._hookTargetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.hookTargetArn = this._hookTargetArn;
        }
        if (this._lifecycleStages !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleStages = this._lifecycleStages;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._targetType !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetType = this._targetType;
        }
        if (this._timeoutConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutConfiguration = this._timeoutConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentLifecycleHookProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hookDetails = undefined;
            this._hookTargetArn = undefined;
            this._lifecycleStages = undefined;
            this._roleArn = undefined;
            this._targetType = undefined;
            this._timeoutConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hookDetails = value.hookDetails;
            this._hookTargetArn = value.hookTargetArn;
            this._lifecycleStages = value.lifecycleStages;
            this._roleArn = value.roleArn;
            this._targetType = value.targetType;
            this._timeoutConfiguration.internalValue = value.timeoutConfiguration;
        }
    }

    // hook_details - computed: true, optional: true, required: false
    private _hookDetails?: string; 
    public get hookDetails() {
        return this.getStringAttribute('hook_details');
    }
    public set hookDetails(value: string) {
        this._hookDetails = value;
    }
    public resetHookDetails() {
        this._hookDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hookDetailsInput() {
        return this._hookDetails;
    }

    // hook_target_arn - computed: true, optional: true, required: false
    private _hookTargetArn?: string; 
    public get hookTargetArn() {
        return this.getStringAttribute('hook_target_arn');
    }
    public set hookTargetArn(value: string) {
        this._hookTargetArn = value;
    }
    public resetHookTargetArn() {
        this._hookTargetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hookTargetArnInput() {
        return this._hookTargetArn;
    }

    // lifecycle_stages - computed: true, optional: true, required: false
    private _lifecycleStages?: string[]; 
    public get lifecycleStages() {
        return this.getListAttribute('lifecycle_stages');
    }
    public set lifecycleStages(value: string[]) {
        this._lifecycleStages = value;
    }
    public resetLifecycleStages() {
        this._lifecycleStages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleStagesInput() {
        return this._lifecycleStages;
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

    // target_type - computed: true, optional: true, required: false
    private _targetType?: string; 
    public get targetType() {
        return this.getStringAttribute('target_type');
    }
    public set targetType(value: string) {
        this._targetType = value;
    }
    public resetTargetType() {
        this._targetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
        return this._targetType;
    }

    // timeout_configuration - computed: true, optional: true, required: false
    private _timeoutConfiguration = new HookTimeoutConfigPropertyOutputReference(this, "timeout_configuration");
    public get timeoutConfiguration() {
        return this._timeoutConfiguration;
    }
    public putTimeoutConfiguration(value: HookTimeoutConfigProperty) {
        this._timeoutConfiguration.internalValue = value;
    }
    public resetTimeoutConfiguration() {
        this._timeoutConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutConfigurationInput() {
        return this._timeoutConfiguration.internalValue;
    }
}

export class DeploymentLifecycleHookPropertyList extends cdktn.ComplexList {
    public internalValue? : DeploymentLifecycleHookProperty[] | cdktn.IResolvable

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
    public get(index: number): DeploymentLifecycleHookPropertyOutputReference {
        return new DeploymentLifecycleHookPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LinearConfigurationProperty {
    /**
    * The amount of time in minutes to wait between each traffic shifting step during a linear deployment. Valid values are 0 to 1440 minutes (24 hours). The default value is 6. This bake time is not applied after reaching 100 percent traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#step_bake_time_in_minutes CcService#step_bake_time_in_minutes}
    */
    readonly stepBakeTimeInMinutes?: number;
    /**
    * The percentage of production traffic to shift in each step during a linear deployment. Valid values are multiples of 0.1 from 3.0 to 100.0. The default value is 10.0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#step_percent CcService#step_percent}
    */
    readonly stepPercent?: number;
}
export class LinearConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LinearConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._stepBakeTimeInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.stepBakeTimeInMinutes = this._stepBakeTimeInMinutes;
        }
        if (this._stepPercent !== undefined) {
            hasAnyValues = true;
            internalValueResult.stepPercent = this._stepPercent;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LinearConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._stepBakeTimeInMinutes = undefined;
            this._stepPercent = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._stepBakeTimeInMinutes = value.stepBakeTimeInMinutes;
            this._stepPercent = value.stepPercent;
        }
    }

    // step_bake_time_in_minutes - computed: true, optional: true, required: false
    private _stepBakeTimeInMinutes?: number; 
    public get stepBakeTimeInMinutes() {
        return this.getNumberAttribute('step_bake_time_in_minutes');
    }
    public set stepBakeTimeInMinutes(value: number) {
        this._stepBakeTimeInMinutes = value;
    }
    public resetStepBakeTimeInMinutes() {
        this._stepBakeTimeInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepBakeTimeInMinutesInput() {
        return this._stepBakeTimeInMinutes;
    }

    // step_percent - computed: true, optional: true, required: false
    private _stepPercent?: number; 
    public get stepPercent() {
        return this.getNumberAttribute('step_percent');
    }
    public set stepPercent(value: number) {
        this._stepPercent = value;
    }
    public resetStepPercent() {
        this._stepPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepPercentInput() {
        return this._stepPercent;
    }
}
export interface DeploymentConfigurationProperty {
    /**
    * Information about the CloudWatch alarms.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#alarms CcService#alarms}
    */
    readonly alarms?: DeploymentAlarmsProperty;
    /**
    * The duration waiting before terminating the previous service revision and marking a deployment complete.
    *  The following rules apply when you don't specify a value:
    *   +  For blue/green, linear, and canary deployments, the value is set to 15 minutes.
    *   +  For rolling deployments, there is no bake time set by default.
    *   +  The external deployment controller (``EXTERNAL``) and the ACD blue/green deployment controller (``CODE_DEPLOY``) do not support the ``BakeTimeInMinutes`` parameter.
    *   
    *   If you provide a bake time for a rolling deployment, the CloudFormation handler timeout is increased to the maximum of 36 hours, matching the timeout for blue/green, linear, and canary deployments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#bake_time_in_minutes CcService#bake_time_in_minutes}
    */
    readonly bakeTimeInMinutes?: number;
    /**
    * Configuration for canary deployment strategy. Only valid when the deployment strategy is ``CANARY``. This configuration enables shifting a fixed percentage of traffic for testing, followed by shifting the remaining traffic after a bake period.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#canary_configuration CcService#canary_configuration}
    */
    readonly canaryConfiguration?: CanaryConfigurationProperty;
    /**
    * The deployment circuit breaker can only be used for services using the rolling update (``ECS``) deployment type.
    *   The *deployment circuit breaker* determines whether a service deployment will fail if the service can't reach a steady state. If you use the deployment circuit breaker, a service deployment will transition to a failed state and stop launching new tasks. If you use the rollback option, when a service deployment fails, the service is rolled back to the last deployment that completed successfully. For more information, see [Rolling update](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html) in the *Amazon Elastic Container Service Developer Guide*
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#deployment_circuit_breaker CcService#deployment_circuit_breaker}
    */
    readonly deploymentCircuitBreaker?: DeploymentCircuitBreakerProperty;
    /**
    * An array of deployment lifecycle hook objects to run custom logic or pause the deployment at specific stages of the deployment lifecycle.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#lifecycle_hooks CcService#lifecycle_hooks}
    */
    readonly lifecycleHooks?: DeploymentLifecycleHookProperty[] | cdktn.IResolvable;
    /**
    * Configuration for linear deployment strategy. Only valid when the deployment strategy is ``LINEAR``. This configuration enables progressive traffic shifting in equal percentage increments with configurable bake times between each step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#linear_configuration CcService#linear_configuration}
    */
    readonly linearConfiguration?: LinearConfigurationProperty;
    /**
    * If a service is using the rolling update (``ECS``) deployment type, the ``maximumPercent`` parameter represents an upper limit on the number of your service's tasks that are allowed in the ``RUNNING`` or ``PENDING`` state during a deployment, as a percentage of the ``desiredCount`` (rounded down to the nearest integer). This parameter enables you to define the deployment batch size. For example, if your service is using the ``REPLICA`` service scheduler and has a ``desiredCount`` of four tasks and a ``maximumPercent`` value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default ``maximumPercent`` value for a service using the ``REPLICA`` service scheduler is 200%.
    *  The Amazon ECS scheduler uses this parameter to replace unhealthy tasks by starting replacement tasks first and then stopping the unhealthy tasks, as long as cluster resources for starting replacement tasks are available. For more information about how the scheduler replaces unhealthy tasks, see [Amazon ECS services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
    *  If a service is using either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types, and tasks in the service use the EC2 launch type, the *maximum percent* value is set to the default value. The *maximum percent* value is used to define the upper limit on the number of the tasks in the service that remain in the ``RUNNING`` state while the container instances are in the ``DRAINING`` state.
    *   You can't specify a custom ``maximumPercent`` value for a service that uses either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and has tasks that use the EC2 launch type.
    *   If the service uses either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types, and the tasks in the service use the Fargate launch type, the maximum percent value is not used. The value is still returned when describing your service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#maximum_percent CcService#maximum_percent}
    */
    readonly maximumPercent?: number;
    /**
    * If a service is using the rolling update (``ECS``) deployment type, the ``minimumHealthyPercent`` represents a lower limit on the number of your service's tasks that must remain in the ``RUNNING`` state during a deployment, as a percentage of the ``desiredCount`` (rounded up to the nearest integer). This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a ``desiredCount`` of four tasks and a ``minimumHealthyPercent`` of 50%, the service scheduler may stop two existing tasks to free up cluster capacity before starting two new tasks. 
    *   If any tasks are unhealthy and if ``maximumPercent`` doesn't allow the Amazon ECS scheduler to start replacement tasks, the scheduler stops the unhealthy tasks one-by-one — using the ``minimumHealthyPercent`` as a constraint — to clear up capacity to launch replacement tasks. For more information about how the scheduler replaces unhealthy tasks, see [Amazon ECS services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html). 
    *  For services that *do not* use a load balancer, the following should be noted:
    *   +  A service is considered healthy if all essential containers within the tasks in the service pass their health checks.
    *   +  If a task has no essential containers with a health check defined, the service scheduler will wait for 40 seconds after a task reaches a ``RUNNING`` state before the task is counted towards the minimum healthy percent total.
    *   +  If a task has one or more essential containers with a health check defined, the service scheduler will wait for the task to reach a healthy status before counting it towards the minimum healthy percent total. A task is considered healthy when all essential containers within the task have passed their health checks. The amount of time the service scheduler can wait for is determined by the container health check settings. 
    *   
    *  For services that *do* use a load balancer, the following should be noted:
    *   +  If a task has no essential containers with a health check defined, the service scheduler will wait for the load balancer target group health check to return a healthy status before counting the task towards the minimum healthy percent total.
    *   +  If a task has an essential container with a health check defined, the service scheduler will wait for both the task to reach a healthy status and the load balancer target group health check to return a healthy status before counting the task towards the minimum healthy percent total.
    *   
    *  The default value for a replica service for ``minimumHealthyPercent`` is 100%. The default ``minimumHealthyPercent`` value for a service using the ``DAEMON`` service schedule is 0% for the CLI, the AWS SDKs, and the APIs and 50% for the AWS Management Console.
    *  The minimum number of healthy tasks during a deployment is the ``desiredCount`` multiplied by the ``minimumHealthyPercent``/100, rounded up to the nearest integer value.
    *  If a service is using either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and is running tasks that use the EC2 launch type, the *minimum healthy percent* value is set to the default value. The *minimum healthy percent* value is used to define the lower limit on the number of the tasks in the service that remain in the ``RUNNING`` state while the container instances are in the ``DRAINING`` state.
    *   You can't specify a custom ``minimumHealthyPercent`` value for a service that uses either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and has tasks that use the EC2 launch type.
    *   If a service is using either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and is running tasks that use the Fargate launch type, the minimum healthy percent value is not used, although it is returned when describing your service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#minimum_healthy_percent CcService#minimum_healthy_percent}
    */
    readonly minimumHealthyPercent?: number;
    /**
    * The deployment strategy for the service. Choose from these valid values:
    *   +  ``ROLLING`` - When you create a service which uses the rolling update (``ROLLING``) deployment strategy, the Amazon ECS service scheduler replaces the currently running tasks with new tasks. The number of tasks that Amazon ECS adds or removes from the service during a rolling update is controlled by the service deployment configuration.
    *   +  ``BLUE_GREEN`` - A blue/green deployment strategy (``BLUE_GREEN``) is a release methodology that reduces downtime and risk by running two identical production environments called blue and green. With Amazon ECS blue/green deployments, you can validate new service revisions before directing production traffic to them. This approach provides a safer way to deploy changes with the ability to quickly roll back if needed.
    *   +  ``LINEAR`` - A *linear* deployment strategy (``LINEAR``) gradually shifts traffic from the current production environment to a new environment in equal percentages over time. With Amazon ECS linear deployments, you can control the pace of traffic shifting and validate new service revisions with increasing amounts of production traffic.
    *   +  ``CANARY`` - A *canary* deployment strategy (``CANARY``) shifts a small percentage of traffic to the new service revision first, then shifts the remaining traffic all at once after a specified time period. This allows you to test the new version with a subset of users before full deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#strategy CcService#strategy}
    */
    readonly strategy?: string;
}
export class DeploymentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarms = this._alarms?.internalValue;
        }
        if (this._bakeTimeInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.bakeTimeInMinutes = this._bakeTimeInMinutes;
        }
        if (this._canaryConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.canaryConfiguration = this._canaryConfiguration?.internalValue;
        }
        if (this._deploymentCircuitBreaker?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deploymentCircuitBreaker = this._deploymentCircuitBreaker?.internalValue;
        }
        if (this._lifecycleHooks?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleHooks = this._lifecycleHooks?.internalValue;
        }
        if (this._linearConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linearConfiguration = this._linearConfiguration?.internalValue;
        }
        if (this._maximumPercent !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumPercent = this._maximumPercent;
        }
        if (this._minimumHealthyPercent !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumHealthyPercent = this._minimumHealthyPercent;
        }
        if (this._strategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategy = this._strategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarms.internalValue = undefined;
            this._bakeTimeInMinutes = undefined;
            this._canaryConfiguration.internalValue = undefined;
            this._deploymentCircuitBreaker.internalValue = undefined;
            this._lifecycleHooks.internalValue = undefined;
            this._linearConfiguration.internalValue = undefined;
            this._maximumPercent = undefined;
            this._minimumHealthyPercent = undefined;
            this._strategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarms.internalValue = value.alarms;
            this._bakeTimeInMinutes = value.bakeTimeInMinutes;
            this._canaryConfiguration.internalValue = value.canaryConfiguration;
            this._deploymentCircuitBreaker.internalValue = value.deploymentCircuitBreaker;
            this._lifecycleHooks.internalValue = value.lifecycleHooks;
            this._linearConfiguration.internalValue = value.linearConfiguration;
            this._maximumPercent = value.maximumPercent;
            this._minimumHealthyPercent = value.minimumHealthyPercent;
            this._strategy = value.strategy;
        }
    }

    // alarms - computed: true, optional: true, required: false
    private _alarms = new DeploymentAlarmsPropertyOutputReference(this, "alarms");
    public get alarms() {
        return this._alarms;
    }
    public putAlarms(value: DeploymentAlarmsProperty) {
        this._alarms.internalValue = value;
    }
    public resetAlarms() {
        this._alarms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmsInput() {
        return this._alarms.internalValue;
    }

    // bake_time_in_minutes - computed: true, optional: true, required: false
    private _bakeTimeInMinutes?: number; 
    public get bakeTimeInMinutes() {
        return this.getNumberAttribute('bake_time_in_minutes');
    }
    public set bakeTimeInMinutes(value: number) {
        this._bakeTimeInMinutes = value;
    }
    public resetBakeTimeInMinutes() {
        this._bakeTimeInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bakeTimeInMinutesInput() {
        return this._bakeTimeInMinutes;
    }

    // canary_configuration - computed: true, optional: true, required: false
    private _canaryConfiguration = new CanaryConfigurationPropertyOutputReference(this, "canary_configuration");
    public get canaryConfiguration() {
        return this._canaryConfiguration;
    }
    public putCanaryConfiguration(value: CanaryConfigurationProperty) {
        this._canaryConfiguration.internalValue = value;
    }
    public resetCanaryConfiguration() {
        this._canaryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get canaryConfigurationInput() {
        return this._canaryConfiguration.internalValue;
    }

    // deployment_circuit_breaker - computed: true, optional: true, required: false
    private _deploymentCircuitBreaker = new DeploymentCircuitBreakerPropertyOutputReference(this, "deployment_circuit_breaker");
    public get deploymentCircuitBreaker() {
        return this._deploymentCircuitBreaker;
    }
    public putDeploymentCircuitBreaker(value: DeploymentCircuitBreakerProperty) {
        this._deploymentCircuitBreaker.internalValue = value;
    }
    public resetDeploymentCircuitBreaker() {
        this._deploymentCircuitBreaker.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentCircuitBreakerInput() {
        return this._deploymentCircuitBreaker.internalValue;
    }

    // lifecycle_hooks - computed: true, optional: true, required: false
    private _lifecycleHooks = new DeploymentLifecycleHookPropertyList(this, "lifecycle_hooks", false);
    public get lifecycleHooks() {
        return this._lifecycleHooks;
    }
    public putLifecycleHooks(value: DeploymentLifecycleHookProperty[] | cdktn.IResolvable) {
        this._lifecycleHooks.internalValue = value;
    }
    public resetLifecycleHooks() {
        this._lifecycleHooks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleHooksInput() {
        return this._lifecycleHooks.internalValue;
    }

    // linear_configuration - computed: true, optional: true, required: false
    private _linearConfiguration = new LinearConfigurationPropertyOutputReference(this, "linear_configuration");
    public get linearConfiguration() {
        return this._linearConfiguration;
    }
    public putLinearConfiguration(value: LinearConfigurationProperty) {
        this._linearConfiguration.internalValue = value;
    }
    public resetLinearConfiguration() {
        this._linearConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linearConfigurationInput() {
        return this._linearConfiguration.internalValue;
    }

    // maximum_percent - computed: true, optional: true, required: false
    private _maximumPercent?: number; 
    public get maximumPercent() {
        return this.getNumberAttribute('maximum_percent');
    }
    public set maximumPercent(value: number) {
        this._maximumPercent = value;
    }
    public resetMaximumPercent() {
        this._maximumPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumPercentInput() {
        return this._maximumPercent;
    }

    // minimum_healthy_percent - computed: true, optional: true, required: false
    private _minimumHealthyPercent?: number; 
    public get minimumHealthyPercent() {
        return this.getNumberAttribute('minimum_healthy_percent');
    }
    public set minimumHealthyPercent(value: number) {
        this._minimumHealthyPercent = value;
    }
    public resetMinimumHealthyPercent() {
        this._minimumHealthyPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumHealthyPercentInput() {
        return this._minimumHealthyPercent;
    }

    // strategy - computed: true, optional: true, required: false
    private _strategy?: string; 
    public get strategy() {
        return this.getStringAttribute('strategy');
    }
    public set strategy(value: string) {
        this._strategy = value;
    }
    public resetStrategy() {
        this._strategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyInput() {
        return this._strategy;
    }
}
export interface DeploymentControllerProperty {
    /**
    * The deployment controller type to use.
    *  The deployment controller is the mechanism that determines how tasks are deployed for your service. The valid options are:
    *   +  ECS
    *  When you create a service which uses the ``ECS`` deployment controller, you can choose between the following deployment strategies:
    *   +  ``ROLLING``: When you create a service which uses the *rolling update* (``ROLLING``) deployment strategy, the ECS service scheduler replaces the currently running tasks with new tasks. The number of tasks that ECS adds or removes from the service during a rolling update is controlled by the service deployment configuration. 
    *  Rolling update deployments are best suited for the following scenarios:
    *   +  Gradual service updates: You need to update your service incrementally without taking the entire service offline at once.
    *   +  Limited resource requirements: You want to avoid the additional resource costs of running two complete environments simultaneously (as required by blue/green deployments).
    *   +  Acceptable deployment time: Your application can tolerate a longer deployment process, as rolling updates replace tasks one by one.
    *   +  No need for instant roll back: Your service can tolerate a rollback process that takes minutes rather than seconds.
    *   +  Simple deployment process: You prefer a straightforward deployment approach without the complexity of managing multiple environments, target groups, and listeners.
    *   +  No load balancer requirement: Your service doesn't use or require a load balancer, ALB, NLB, or Service Connect (which are required for blue/green deployments).
    *   +  Stateful applications: Your application maintains state that makes it difficult to run two parallel environments.
    *   +  Cost sensitivity: You want to minimize deployment costs by not running duplicate environments during deployment.
    *   
    *  Rolling updates are the default deployment strategy for services and provide a balance between deployment safety and resource efficiency for many common application scenarios.
    *   +  ``BLUE_GREEN``: A *blue/green* deployment strategy (``BLUE_GREEN``) is a release methodology that reduces downtime and risk by running two identical production environments called blue and green. With ECS blue/green deployments, you can validate new service revisions before directing production traffic to them. This approach provides a safer way to deploy changes with the ability to quickly roll back if needed.
    *  ECS blue/green deployments are best suited for the following scenarios:
    *   +  Service validation: When you need to validate new service revisions before directing production traffic to them
    *   +  Zero downtime: When your service requires zero-downtime deployments
    *   +  Instant roll back: When you need the ability to quickly roll back if issues are detected
    *   +  Load balancer requirement: When your service uses ALB, NLB, or Service Connect
    *   
    *   
    *   +  External
    *  Use a third-party deployment controller.
    *   +  Blue/green deployment (powered by ACD)
    *  ACD installs an updated version of the application as a new replacement task set and reroutes production traffic from the original application task set to the replacement task set. The original task set is terminated after a successful deployment. Use this deployment controller to verify a new deployment of a service before sending production traffic to it.
    *   
    *  When updating the deployment controller for a service, consider the following depending on the type of migration you're performing.
    *   +  If you have a template that contains the ``EXTERNAL`` deployment controller information as well as ``TaskSet`` and ``PrimaryTaskSet`` resources, and you remove the task set resources from the template when updating from ``EXTERNAL`` to ``ECS``, the ``DescribeTaskSet`` and ``DeleteTaskSet`` API calls will return a 400 error after the deployment controller is updated to ``ECS``. This results in a delete failure on the task set resources, even though the stack transitions to ``UPDATE_COMPLETE`` status. For more information, see [Resource removed from stack but not deleted](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-resource-removed-not-deleted) in the CFNlong User Guide. To fix this issue, delete the task sets directly using the ECS``DeleteTaskSet`` API. For more information about how to delete a task set, see [DeleteTaskSet](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html) in the ECSlong API Reference.
    *   +  If you're migrating from ``CODE_DEPLOY`` to ``ECS`` with a new task definition and CFN performs a rollback operation, the ECS``UpdateService`` request fails with the following error:
    *  Resource handler returned message: "Invalid request provided: Unable to update task definition on services with a CODE_DEPLOY deployment controller. 
    *   +  After a successful migration from ``ECS`` to ``EXTERNAL`` deployment controller, you need to manually remove the ``ACTIVE`` task set, because ECS no longer manages the deployment. For information about how to delete a task set, see [DeleteTaskSet](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html) in the ECSlong API Reference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#type CcService#type}
    */
    readonly type?: string;
}
export class DeploymentControllerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentControllerProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DeploymentControllerProperty | cdktn.IResolvable | undefined) {
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
export interface ForceNewDeploymentProperty {
    /**
    * Determines whether to force a new deployment of the service. By default, deployments aren't forced. You can use this option to start a new deployment with no service definition changes. For example, you can update a service's tasks to use a newer Docker image with the same image/tag combination (``my_image:latest``) or to roll Fargate tasks onto a newer platform version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#enable_force_new_deployment CcService#enable_force_new_deployment}
    */
    readonly enableForceNewDeployment?: boolean | cdktn.IResolvable;
    /**
    * When you change the``ForceNewDeploymentNonce`` value in your template, it signals ECS to start a new deployment even though no other service parameters have changed. The value must be a unique, time- varying value like a timestamp, random string, or sequence number. Use this property when you want to ensure your tasks pick up the latest version of a Docker image that uses the same tag but has been updated in the registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#force_new_deployment_nonce CcService#force_new_deployment_nonce}
    */
    readonly forceNewDeploymentNonce?: string;
}
export class ForceNewDeploymentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForceNewDeploymentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableForceNewDeployment !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableForceNewDeployment = this._enableForceNewDeployment;
        }
        if (this._forceNewDeploymentNonce !== undefined) {
            hasAnyValues = true;
            internalValueResult.forceNewDeploymentNonce = this._forceNewDeploymentNonce;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForceNewDeploymentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableForceNewDeployment = undefined;
            this._forceNewDeploymentNonce = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableForceNewDeployment = value.enableForceNewDeployment;
            this._forceNewDeploymentNonce = value.forceNewDeploymentNonce;
        }
    }

    // enable_force_new_deployment - computed: true, optional: true, required: false
    private _enableForceNewDeployment?: boolean | cdktn.IResolvable; 
    public get enableForceNewDeployment() {
        return this.getBooleanAttribute('enable_force_new_deployment');
    }
    public set enableForceNewDeployment(value: boolean | cdktn.IResolvable) {
        this._enableForceNewDeployment = value;
    }
    public resetEnableForceNewDeployment() {
        this._enableForceNewDeployment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableForceNewDeploymentInput() {
        return this._enableForceNewDeployment;
    }

    // force_new_deployment_nonce - computed: true, optional: true, required: false
    private _forceNewDeploymentNonce?: string; 
    public get forceNewDeploymentNonce() {
        return this.getStringAttribute('force_new_deployment_nonce');
    }
    public set forceNewDeploymentNonce(value: string) {
        this._forceNewDeploymentNonce = value;
    }
    public resetForceNewDeploymentNonce() {
        this._forceNewDeploymentNonce = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceNewDeploymentNonceInput() {
        return this._forceNewDeploymentNonce;
    }
}
export interface AdvancedConfigurationProperty {
    /**
    * The Amazon Resource Name (ARN) of the alternate target group for Amazon ECS blue/green deployments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#alternate_target_group_arn CcService#alternate_target_group_arn}
    */
    readonly alternateTargetGroupArn?: string;
    /**
    * The Amazon Resource Name (ARN) that that identifies the production listener rule (in the case of an Application Load Balancer) or listener (in the case for an Network Load Balancer) for routing production traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#production_listener_rule CcService#production_listener_rule}
    */
    readonly productionListenerRule?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that grants Amazon ECS permission to call the Elastic Load Balancing APIs for you.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#role_arn CcService#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The Amazon Resource Name (ARN) that identifies ) that identifies the test listener rule (in the case of an Application Load Balancer) or listener (in the case for an Network Load Balancer) for routing test traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#test_listener_rule CcService#test_listener_rule}
    */
    readonly testListenerRule?: string;
}
export class AdvancedConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdvancedConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alternateTargetGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.alternateTargetGroupArn = this._alternateTargetGroupArn;
        }
        if (this._productionListenerRule !== undefined) {
            hasAnyValues = true;
            internalValueResult.productionListenerRule = this._productionListenerRule;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._testListenerRule !== undefined) {
            hasAnyValues = true;
            internalValueResult.testListenerRule = this._testListenerRule;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdvancedConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alternateTargetGroupArn = undefined;
            this._productionListenerRule = undefined;
            this._roleArn = undefined;
            this._testListenerRule = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alternateTargetGroupArn = value.alternateTargetGroupArn;
            this._productionListenerRule = value.productionListenerRule;
            this._roleArn = value.roleArn;
            this._testListenerRule = value.testListenerRule;
        }
    }

    // alternate_target_group_arn - computed: true, optional: true, required: false
    private _alternateTargetGroupArn?: string; 
    public get alternateTargetGroupArn() {
        return this.getStringAttribute('alternate_target_group_arn');
    }
    public set alternateTargetGroupArn(value: string) {
        this._alternateTargetGroupArn = value;
    }
    public resetAlternateTargetGroupArn() {
        this._alternateTargetGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alternateTargetGroupArnInput() {
        return this._alternateTargetGroupArn;
    }

    // production_listener_rule - computed: true, optional: true, required: false
    private _productionListenerRule?: string; 
    public get productionListenerRule() {
        return this.getStringAttribute('production_listener_rule');
    }
    public set productionListenerRule(value: string) {
        this._productionListenerRule = value;
    }
    public resetProductionListenerRule() {
        this._productionListenerRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productionListenerRuleInput() {
        return this._productionListenerRule;
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

    // test_listener_rule - computed: true, optional: true, required: false
    private _testListenerRule?: string; 
    public get testListenerRule() {
        return this.getStringAttribute('test_listener_rule');
    }
    public set testListenerRule(value: string) {
        this._testListenerRule = value;
    }
    public resetTestListenerRule() {
        this._testListenerRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get testListenerRuleInput() {
        return this._testListenerRule;
    }
}
export interface LoadBalancerProperty {
    /**
    * The advanced settings for the load balancer used in blue/green deployments. Specify the alternate target group, listener rules, and IAM role required for traffic shifting during blue/green deployments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#advanced_configuration CcService#advanced_configuration}
    */
    readonly advancedConfiguration?: AdvancedConfigurationProperty;
    /**
    * The name of the container (as it appears in a container definition) to associate with the load balancer.
    *  You need to specify the container name when configuring the target group for an Amazon ECS load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#container_name CcService#container_name}
    */
    readonly containerName?: string;
    /**
    * The port on the container to associate with the load balancer. This port must correspond to a ``containerPort`` in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they're launched on must allow ingress traffic on the ``hostPort`` of the port mapping.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#container_port CcService#container_port}
    */
    readonly containerPort?: number;
    /**
    * The name of the load balancer to associate with the Amazon ECS service or task set.
    *  If you are using an Application Load Balancer or a Network Load Balancer the load balancer name parameter should be omitted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#load_balancer_name CcService#load_balancer_name}
    */
    readonly loadBalancerName?: string;
    /**
    * The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set.
    *  A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. 
    *  For services using the ``ECS`` deployment controller, you can specify one or multiple target groups. For more information, see [Registering multiple target groups with a service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  For services using the ``CODE_DEPLOY`` deployment controller, you're required to define two target groups for the load balancer. For more information, see [Blue/green deployment with CodeDeploy](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html) in the *Amazon Elastic Container Service Developer Guide*.
    *   If your service's task definition uses the ``awsvpc`` network mode, you must choose ``ip`` as the target type, not ``instance``. Do this when creating your target groups because tasks that use the ``awsvpc`` network mode are associated with an elastic network interface, not an Amazon EC2 instance. This network mode is required for the Fargate launch type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#target_group_arn CcService#target_group_arn}
    */
    readonly targetGroupArn?: string;
}
export class LoadBalancerPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LoadBalancerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._advancedConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.advancedConfiguration = this._advancedConfiguration?.internalValue;
        }
        if (this._containerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerName = this._containerName;
        }
        if (this._containerPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPort = this._containerPort;
        }
        if (this._loadBalancerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.loadBalancerName = this._loadBalancerName;
        }
        if (this._targetGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupArn = this._targetGroupArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoadBalancerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._advancedConfiguration.internalValue = undefined;
            this._containerName = undefined;
            this._containerPort = undefined;
            this._loadBalancerName = undefined;
            this._targetGroupArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._advancedConfiguration.internalValue = value.advancedConfiguration;
            this._containerName = value.containerName;
            this._containerPort = value.containerPort;
            this._loadBalancerName = value.loadBalancerName;
            this._targetGroupArn = value.targetGroupArn;
        }
    }

    // advanced_configuration - computed: true, optional: true, required: false
    private _advancedConfiguration = new AdvancedConfigurationPropertyOutputReference(this, "advanced_configuration");
    public get advancedConfiguration() {
        return this._advancedConfiguration;
    }
    public putAdvancedConfiguration(value: AdvancedConfigurationProperty) {
        this._advancedConfiguration.internalValue = value;
    }
    public resetAdvancedConfiguration() {
        this._advancedConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedConfigurationInput() {
        return this._advancedConfiguration.internalValue;
    }

    // container_name - computed: true, optional: true, required: false
    private _containerName?: string; 
    public get containerName() {
        return this.getStringAttribute('container_name');
    }
    public set containerName(value: string) {
        this._containerName = value;
    }
    public resetContainerName() {
        this._containerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerNameInput() {
        return this._containerName;
    }

    // container_port - computed: true, optional: true, required: false
    private _containerPort?: number; 
    public get containerPort() {
        return this.getNumberAttribute('container_port');
    }
    public set containerPort(value: number) {
        this._containerPort = value;
    }
    public resetContainerPort() {
        this._containerPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerPortInput() {
        return this._containerPort;
    }

    // load_balancer_name - computed: true, optional: true, required: false
    private _loadBalancerName?: string; 
    public get loadBalancerName() {
        return this.getStringAttribute('load_balancer_name');
    }
    public set loadBalancerName(value: string) {
        this._loadBalancerName = value;
    }
    public resetLoadBalancerName() {
        this._loadBalancerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerNameInput() {
        return this._loadBalancerName;
    }

    // target_group_arn - computed: true, optional: true, required: false
    private _targetGroupArn?: string; 
    public get targetGroupArn() {
        return this.getStringAttribute('target_group_arn');
    }
    public set targetGroupArn(value: string) {
        this._targetGroupArn = value;
    }
    public resetTargetGroupArn() {
        this._targetGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupArnInput() {
        return this._targetGroupArn;
    }
}

export class LoadBalancerPropertyList extends cdktn.ComplexList {
    public internalValue? : LoadBalancerProperty[] | cdktn.IResolvable

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
    public get(index: number): LoadBalancerPropertyOutputReference {
        return new LoadBalancerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricConfigurationProperty {
    /**
    * The list of metric names to configure. The supported metric names are ``CPUUtilization`` and ``MemoryUtilization``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#metric_names CcService#metric_names}
    */
    readonly metricNames?: string[];
    /**
    * The resolution, in seconds, at which to collect the metrics. The valid values are ``20`` and ``60``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#resolution_seconds CcService#resolution_seconds}
    */
    readonly resolutionSeconds?: number;
}
export class MetricConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricNames = this._metricNames;
        }
        if (this._resolutionSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.resolutionSeconds = this._resolutionSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricNames = undefined;
            this._resolutionSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricNames = value.metricNames;
            this._resolutionSeconds = value.resolutionSeconds;
        }
    }

    // metric_names - computed: true, optional: true, required: false
    private _metricNames?: string[]; 
    public get metricNames() {
        return this.getListAttribute('metric_names');
    }
    public set metricNames(value: string[]) {
        this._metricNames = value;
    }
    public resetMetricNames() {
        this._metricNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNamesInput() {
        return this._metricNames;
    }

    // resolution_seconds - computed: true, optional: true, required: false
    private _resolutionSeconds?: number; 
    public get resolutionSeconds() {
        return this.getNumberAttribute('resolution_seconds');
    }
    public set resolutionSeconds(value: number) {
        this._resolutionSeconds = value;
    }
    public resetResolutionSeconds() {
        this._resolutionSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolutionSecondsInput() {
        return this._resolutionSeconds;
    }
}

export class MetricConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricConfigurationPropertyOutputReference {
        return new MetricConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MonitoringConfigurationProperty {
    /**
    * The list of metric configurations for the service monitoring.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#metric_configurations CcService#metric_configurations}
    */
    readonly metricConfigurations?: MetricConfigurationProperty[] | cdktn.IResolvable;
}
export class MonitoringConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoringConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricConfigurations = this._metricConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricConfigurations.internalValue = value.metricConfigurations;
        }
    }

    // metric_configurations - computed: true, optional: true, required: false
    private _metricConfigurations = new MetricConfigurationPropertyList(this, "metric_configurations", false);
    public get metricConfigurations() {
        return this._metricConfigurations;
    }
    public putMetricConfigurations(value: MetricConfigurationProperty[] | cdktn.IResolvable) {
        this._metricConfigurations.internalValue = value;
    }
    public resetMetricConfigurations() {
        this._metricConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricConfigurationsInput() {
        return this._metricConfigurations.internalValue;
    }
}
export interface AwsVpcConfigurationProperty {
    /**
    * Whether the task's elastic network interface receives a public IP address. 
    *  Consider the following when you set this value:
    *   +  When you use ``create-service`` or ``update-service``, the default is ``DISABLED``. 
    *   +  When the service ``deploymentController`` is ``ECS``, the value must be ``DISABLED``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#assign_public_ip CcService#assign_public_ip}
    */
    readonly assignPublicIp?: string;
    /**
    * The IDs of the security groups associated with the task or service. If you don't specify a security group, the default security group for the VPC is used. There's a limit of 5 security groups that can be specified.
    *   All specified security groups must be from the same VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#security_groups CcService#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * The IDs of the subnets associated with the task or service. There's a limit of 16 subnets that can be specified.
    *   All specified subnets must be from the same VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#subnets CcService#subnets}
    */
    readonly subnets?: string[];
}
export class AwsVpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsVpcConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assignPublicIp !== undefined) {
            hasAnyValues = true;
            internalValueResult.assignPublicIp = this._assignPublicIp;
        }
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

    public set internalValue(value: AwsVpcConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assignPublicIp = undefined;
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
            this._assignPublicIp = value.assignPublicIp;
            this._securityGroups = value.securityGroups;
            this._subnets = value.subnets;
        }
    }

    // assign_public_ip - computed: true, optional: true, required: false
    private _assignPublicIp?: string; 
    public get assignPublicIp() {
        return this.getStringAttribute('assign_public_ip');
    }
    public set assignPublicIp(value: string) {
        this._assignPublicIp = value;
    }
    public resetAssignPublicIp() {
        this._assignPublicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assignPublicIpInput() {
        return this._assignPublicIp;
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

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface NetworkConfigurationProperty {
    /**
    * The VPC subnets and security groups that are associated with a task.
    *   All specified subnets and security groups must be from the same VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#awsvpc_configuration CcService#awsvpc_configuration}
    */
    readonly awsvpcConfiguration?: AwsVpcConfigurationProperty;
}
export class NetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsvpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsvpcConfiguration = this._awsvpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsvpcConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsvpcConfiguration.internalValue = value.awsvpcConfiguration;
        }
    }

    // awsvpc_configuration - computed: true, optional: true, required: false
    private _awsvpcConfiguration = new AwsVpcConfigurationPropertyOutputReference(this, "awsvpc_configuration");
    public get awsvpcConfiguration() {
        return this._awsvpcConfiguration;
    }
    public putAwsvpcConfiguration(value: AwsVpcConfigurationProperty) {
        this._awsvpcConfiguration.internalValue = value;
    }
    public resetAwsvpcConfiguration() {
        this._awsvpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsvpcConfigurationInput() {
        return this._awsvpcConfiguration.internalValue;
    }
}
export interface PlacementConstraintProperty {
    /**
    * A cluster query language expression to apply to the constraint. The expression can have a maximum length of 2000 characters. You can't specify an expression if the constraint type is ``distinctInstance``. For more information, see [Cluster query language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#expression CcService#expression}
    */
    readonly expression?: string;
    /**
    * The type of constraint. Use ``distinctInstance`` to ensure that each task in a particular group is running on a different container instance. Use ``memberOf`` to restrict the selection to a group of valid candidates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#type CcService#type}
    */
    readonly type?: string;
}
export class PlacementConstraintPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PlacementConstraintProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PlacementConstraintProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._type = value.type;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
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

export class PlacementConstraintPropertyList extends cdktn.ComplexList {
    public internalValue? : PlacementConstraintProperty[] | cdktn.IResolvable

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
    public get(index: number): PlacementConstraintPropertyOutputReference {
        return new PlacementConstraintPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PlacementStrategyProperty {
    /**
    * The field to apply the placement strategy against. For the ``spread`` placement strategy, valid values are ``instanceId`` (or ``host``, which has the same effect), or any platform or custom attribute that's applied to a container instance, such as ``attribute:ecs.availability-zone``. For the ``binpack`` placement strategy, valid values are ``cpu`` and ``memory``. For the ``random`` placement strategy, this field is not used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#field CcService#field}
    */
    readonly field?: string;
    /**
    * The type of placement strategy. The ``random`` placement strategy randomly places tasks on available candidates. The ``spread`` placement strategy spreads placement across available candidates evenly based on the ``field`` parameter. The ``binpack`` strategy places tasks on available candidates that have the least available amount of the resource that's specified with the ``field`` parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory but still enough to run the task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#type CcService#type}
    */
    readonly type?: string;
}
export class PlacementStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PlacementStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._field !== undefined) {
            hasAnyValues = true;
            internalValueResult.field = this._field;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PlacementStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._field = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._field = value.field;
            this._type = value.type;
        }
    }

    // field - computed: true, optional: true, required: false
    private _field?: string; 
    public get field() {
        return this.getStringAttribute('field');
    }
    public set field(value: string) {
        this._field = value;
    }
    public resetField() {
        this._field = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldInput() {
        return this._field;
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

export class PlacementStrategyPropertyList extends cdktn.ComplexList {
    public internalValue? : PlacementStrategyProperty[] | cdktn.IResolvable

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
    public get(index: number): PlacementStrategyPropertyOutputReference {
        return new PlacementStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServiceConnectAccessLogConfigurationProperty {
    /**
    * The format for Service Connect access log output. Choose TEXT for human-readable logs or JSON for structured data that integrates well with log analysis tools.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#format CcService#format}
    */
    readonly format?: string;
    /**
    * Specifies whether to include query parameters in Service Connect access logs.
    *  When enabled, query parameters from HTTP requests are included in the access logs. Consider security and privacy implications when enabling this feature, as query parameters may contain sensitive information such as request IDs and tokens. By default, this parameter is ``DISABLED``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#include_query_parameters CcService#include_query_parameters}
    */
    readonly includeQueryParameters?: string;
}
export class ServiceConnectAccessLogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceConnectAccessLogConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._includeQueryParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeQueryParameters = this._includeQueryParameters;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceConnectAccessLogConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._format = undefined;
            this._includeQueryParameters = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._format = value.format;
            this._includeQueryParameters = value.includeQueryParameters;
        }
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // include_query_parameters - computed: true, optional: true, required: false
    private _includeQueryParameters?: string; 
    public get includeQueryParameters() {
        return this.getStringAttribute('include_query_parameters');
    }
    public set includeQueryParameters(value: string) {
        this._includeQueryParameters = value;
    }
    public resetIncludeQueryParameters() {
        this._includeQueryParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeQueryParametersInput() {
        return this._includeQueryParameters;
    }
}
export interface SecretProperty {
    /**
    * The name of the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#name CcService#name}
    */
    readonly name?: string;
    /**
    * The secret to expose to the container. The supported values are either the full ARN of the ASMlong secret or the full ARN of the parameter in the SSM Parameter Store.
    *  For information about the require IAMlong permissions, see [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam) (for Secrets Manager) or [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html) (for Systems Manager Parameter store) in the *Amazon Elastic Container Service Developer Guide*.
    *   If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#value_from CcService#value_from}
    */
    readonly valueFrom?: string;
}
export class SecretPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SecretProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._valueFrom !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueFrom = this._valueFrom;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecretProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._valueFrom = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._valueFrom = value.valueFrom;
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

    // value_from - computed: true, optional: true, required: false
    private _valueFrom?: string; 
    public get valueFrom() {
        return this.getStringAttribute('value_from');
    }
    public set valueFrom(value: string) {
        this._valueFrom = value;
    }
    public resetValueFrom() {
        this._valueFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueFromInput() {
        return this._valueFrom;
    }
}

export class SecretPropertyList extends cdktn.ComplexList {
    public internalValue? : SecretProperty[] | cdktn.IResolvable

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
    public get(index: number): SecretPropertyOutputReference {
        return new SecretPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LogConfigurationProperty {
    /**
    * The log driver to use for the container.
    *  For tasks on FARGATElong, the supported log drivers are ``awslogs``, ``splunk``, and ``awsfirelens``.
    *  For tasks hosted on Amazon EC2 instances, the supported log drivers are ``awslogs``, ``fluentd``, ``gelf``, ``json-file``, ``journald``, ``syslog``, ``splunk``, and ``awsfirelens``.
    *  For more information about using the ``awslogs`` log driver, see [Send Amazon ECS logs to CloudWatch](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  For more information about using the ``awsfirelens`` log driver, see [Send Amazon ECS logs to an service or Partner](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html).
    *   If you have a custom driver that isn't listed, you can fork the Amazon ECS container agent project that's [available on GitHub](https://docs.aws.amazon.com/https://github.com/aws/amazon-ecs-agent) and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, we don't currently provide support for running modified copies of this software.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#log_driver CcService#log_driver}
    */
    readonly logDriver?: string;
    /**
    * The configuration options to send to the log driver.
    *  The options you can specify depend on the log driver. Some of the options you can specify when you use the ``awslogs`` log driver to route logs to Amazon CloudWatch include the following:
    *   + awslogs-create-group Required: No Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to false. Your IAM policy must include the logs:CreateLogGroup permission before you attempt to use awslogs-create-group. + awslogs-region Required: Yes Specify the Region that the awslogs log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option. + awslogs-group Required: Yes Make sure to specify a log group that the awslogs log driver sends its log streams to. + awslogs-stream-prefix Required: Yes, when using Fargate.Optional when using EC2. Use the awslogs-stream-prefix option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format prefix-name/container-name/ecs-task-id. If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option. For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to. You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console. + awslogs-datetime-format Required: No This option defines a multiline start pattern in Python strftime format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry. For more information, see awslogs-datetime-format. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. + awslogs-multiline-pattern Required: No This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. For more information, see awslogs-multiline-pattern. This option is ignored if awslogs-datetime-format is also configured. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. 
    *  The following options apply to all supported log drivers.
    *   + mode Required: No Valid values: non-blocking | blocking This option defines the delivery mode of log messages from the container to the log driver specified using logDriver. The delivery mode you choose affects application availability when the flow of logs from container is interrupted. If you use the blocking mode and the flow of logs is interrupted, calls from container code to write to the stdout and stderr streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure. If you use the non-blocking mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the max-buffer-size option. This prevents the application from becoming unresponsive when logs cannot be sent. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see Preventing log loss with non-blocking mode in the awslogs container log driver. You can set a default mode for all containers in a specific Region by using the defaultLogDriverMode account setting. If you don't specify the mode option or configure the account setting, Amazon ECS will default to the non-blocking mode. For more information about the account setting, see Default log driver mode in the Amazon Elastic Container Service Developer Guide. On June 25, 2025, Amazon ECS changed the default log driver mode from blocking to non-blocking to prioritize task availability over logging. To continue using the blocking mode after this change, do one of the following: Set the mode option in your container definition's logConfiguration as blocking. Set the defaultLogDriverMode account setting to blocking. + max-buffer-size Required: No Default value: 10m When non-blocking mode is used, the max-buffer-size log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost. 
    *  To route logs using the ``splunk`` log router, you need to specify a ``splunk-token`` and a ``splunk-url``.
    *  When you use the ``awsfirelens`` log router to route logs to an AWS Service or AWS Partner Network destination for log storage and analytics, you can set the ``log-driver-buffer-limit`` option to limit the number of events that are buffered in memory, before being sent to the log router container. It can help to resolve potential log loss issue because high throughput might result in memory running out for the buffer inside of Docker.
    *  Other options you can specify when using ``awsfirelens`` to route logs depend on the destination. When you export logs to Amazon Data Firehose, you can specify the AWS Region with ``region`` and a name for the log stream with ``delivery_stream``.
    *  When you export logs to Amazon Kinesis Data Streams, you can specify an AWS Region with ``region`` and a data stream name with ``stream``.
    *   When you export logs to Amazon OpenSearch Service, you can specify options like ``Name``, ``Host`` (OpenSearch Service endpoint without protocol), ``Port``, ``Index``, ``Type``, ``Aws_auth``, ``Aws_region``, ``Suppress_Type_Name``, and ``tls``. For more information, see [Under the hood: FireLens for Amazon ECS Tasks](https://docs.aws.amazon.com/containers/under-the-hood-firelens-for-amazon-ecs-tasks/).
    *  When you export logs to Amazon S3, you can specify the bucket using the ``bucket`` option. You can also specify ``region``, ``total_file_size``, ``upload_timeout``, and ``use_put_object`` as options.
    *  This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#options CcService#options}
    */
    readonly options?: { [key: string]: string };
    /**
    * The secrets to pass to the log configuration. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#secret_options CcService#secret_options}
    */
    readonly secretOptions?: SecretProperty[] | cdktn.IResolvable;
}
export class LogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logDriver !== undefined) {
            hasAnyValues = true;
            internalValueResult.logDriver = this._logDriver;
        }
        if (this._options !== undefined) {
            hasAnyValues = true;
            internalValueResult.options = this._options;
        }
        if (this._secretOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretOptions = this._secretOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logDriver = undefined;
            this._options = undefined;
            this._secretOptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logDriver = value.logDriver;
            this._options = value.options;
            this._secretOptions.internalValue = value.secretOptions;
        }
    }

    // log_driver - computed: true, optional: true, required: false
    private _logDriver?: string; 
    public get logDriver() {
        return this.getStringAttribute('log_driver');
    }
    public set logDriver(value: string) {
        this._logDriver = value;
    }
    public resetLogDriver() {
        this._logDriver = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDriverInput() {
        return this._logDriver;
    }

    // options - computed: true, optional: true, required: false
    private _options?: { [key: string]: string }; 
    public get options() {
        return this.getStringMapAttribute('options');
    }
    public set options(value: { [key: string]: string }) {
        this._options = value;
    }
    public resetOptions() {
        this._options = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options;
    }

    // secret_options - computed: true, optional: true, required: false
    private _secretOptions = new SecretPropertyList(this, "secret_options", false);
    public get secretOptions() {
        return this._secretOptions;
    }
    public putSecretOptions(value: SecretProperty[] | cdktn.IResolvable) {
        this._secretOptions.internalValue = value;
    }
    public resetSecretOptions() {
        this._secretOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretOptionsInput() {
        return this._secretOptions.internalValue;
    }
}
export interface ServiceConnectTestTrafficRulesHeaderValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#exact CcService#exact}
    */
    readonly exact?: string;
}
export class ServiceConnectTestTrafficRulesHeaderValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceConnectTestTrafficRulesHeaderValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exact !== undefined) {
            hasAnyValues = true;
            internalValueResult.exact = this._exact;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceConnectTestTrafficRulesHeaderValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exact = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exact = value.exact;
        }
    }

    // exact - computed: true, optional: true, required: false
    private _exact?: string; 
    public get exact() {
        return this.getStringAttribute('exact');
    }
    public set exact(value: string) {
        this._exact = value;
    }
    public resetExact() {
        this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exactInput() {
        return this._exact;
    }
}
export interface ServiceConnectTestTrafficRulesHeaderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#name CcService#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#value CcService#value}
    */
    readonly value?: ServiceConnectTestTrafficRulesHeaderValueProperty;
}
export class ServiceConnectTestTrafficRulesHeaderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceConnectTestTrafficRulesHeaderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceConnectTestTrafficRulesHeaderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value.internalValue = value.value;
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

    // value - computed: true, optional: true, required: false
    private _value = new ServiceConnectTestTrafficRulesHeaderValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: ServiceConnectTestTrafficRulesHeaderValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface ServiceConnectTestTrafficRulesProperty {
    /**
    * The HTTP header-based routing rules that determine which requests should be routed to the new service version during blue/green deployment testing. These rules provide fine-grained control over test traffic routing based on request headers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#header CcService#header}
    */
    readonly header?: ServiceConnectTestTrafficRulesHeaderProperty;
}
export class ServiceConnectTestTrafficRulesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceConnectTestTrafficRulesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._header?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceConnectTestTrafficRulesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._header.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._header.internalValue = value.header;
        }
    }

    // header - computed: true, optional: true, required: false
    private _header = new ServiceConnectTestTrafficRulesHeaderPropertyOutputReference(this, "header");
    public get header() {
        return this._header;
    }
    public putHeader(value: ServiceConnectTestTrafficRulesHeaderProperty) {
        this._header.internalValue = value;
    }
    public resetHeader() {
        this._header.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header.internalValue;
    }
}
export interface ServiceConnectClientAliasProperty {
    /**
    * The ``dnsName`` is the name that you use in the applications of client tasks to connect to this service. The name must be a valid DNS name but doesn't need to be fully-qualified. The name can include up to 127 characters. The name can include lowercase letters, numbers, underscores (_), hyphens (-), and periods (.). The name can't start with a hyphen.
    *  If this parameter isn't specified, the default value of ``discoveryName.namespace`` is used. If the ``discoveryName`` isn't specified, the port mapping name from the task definition is used in ``portName.namespace``.
    *  To avoid changing your applications in client Amazon ECS services, set this to the same name that the client application uses by default. For example, a few common names are ``database``, ``db``, or the lowercase name of a database, such as ``mysql`` or ``redis``. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#dns_name CcService#dns_name}
    */
    readonly dnsName?: string;
    /**
    * The listening port number for the Service Connect proxy. This port is available inside of all of the tasks within the same namespace.
    *  To avoid changing your applications in client Amazon ECS services, set this to the same port that the client application uses by default. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#port CcService#port}
    */
    readonly port?: number;
    /**
    * The configuration for test traffic routing rules used during blue/green deployments with Amazon ECS Service Connect. This allows you to route a portion of traffic to the new service revision of your service for testing before shifting all production traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#test_traffic_rules CcService#test_traffic_rules}
    */
    readonly testTrafficRules?: ServiceConnectTestTrafficRulesProperty;
}
export class ServiceConnectClientAliasPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ServiceConnectClientAliasProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dnsName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsName = this._dnsName;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._testTrafficRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.testTrafficRules = this._testTrafficRules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceConnectClientAliasProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dnsName = undefined;
            this._port = undefined;
            this._testTrafficRules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dnsName = value.dnsName;
            this._port = value.port;
            this._testTrafficRules.internalValue = value.testTrafficRules;
        }
    }

    // dns_name - computed: true, optional: true, required: false
    private _dnsName?: string; 
    public get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    public set dnsName(value: string) {
        this._dnsName = value;
    }
    public resetDnsName() {
        this._dnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsNameInput() {
        return this._dnsName;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // test_traffic_rules - computed: true, optional: true, required: false
    private _testTrafficRules = new ServiceConnectTestTrafficRulesPropertyOutputReference(this, "test_traffic_rules");
    public get testTrafficRules() {
        return this._testTrafficRules;
    }
    public putTestTrafficRules(value: ServiceConnectTestTrafficRulesProperty) {
        this._testTrafficRules.internalValue = value;
    }
    public resetTestTrafficRules() {
        this._testTrafficRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get testTrafficRulesInput() {
        return this._testTrafficRules.internalValue;
    }
}

export class ServiceConnectClientAliasPropertyList extends cdktn.ComplexList {
    public internalValue? : ServiceConnectClientAliasProperty[] | cdktn.IResolvable

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
    public get(index: number): ServiceConnectClientAliasPropertyOutputReference {
        return new ServiceConnectClientAliasPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TimeoutConfigurationProperty {
    /**
    * The amount of time in seconds a connection will stay active while idle. A value of ``0`` can be set to disable ``idleTimeout``.
    *  The ``idleTimeout`` default for ``HTTP``/``HTTP2``/``GRPC`` is 5 minutes.
    *  The ``idleTimeout`` default for ``TCP`` is 1 hour.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#idle_timeout_seconds CcService#idle_timeout_seconds}
    */
    readonly idleTimeoutSeconds?: number;
    /**
    * The amount of time waiting for the upstream to respond with a complete response per request. A value of ``0`` can be set to disable ``perRequestTimeout``. ``perRequestTimeout`` can only be set if Service Connect ``appProtocol`` isn't ``TCP``. Only ``idleTimeout`` is allowed for ``TCP````appProtocol``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#per_request_timeout_seconds CcService#per_request_timeout_seconds}
    */
    readonly perRequestTimeoutSeconds?: number;
}
export class TimeoutConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimeoutConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleTimeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleTimeoutSeconds = this._idleTimeoutSeconds;
        }
        if (this._perRequestTimeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.perRequestTimeoutSeconds = this._perRequestTimeoutSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeoutConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleTimeoutSeconds = undefined;
            this._perRequestTimeoutSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleTimeoutSeconds = value.idleTimeoutSeconds;
            this._perRequestTimeoutSeconds = value.perRequestTimeoutSeconds;
        }
    }

    // idle_timeout_seconds - computed: true, optional: true, required: false
    private _idleTimeoutSeconds?: number; 
    public get idleTimeoutSeconds() {
        return this.getNumberAttribute('idle_timeout_seconds');
    }
    public set idleTimeoutSeconds(value: number) {
        this._idleTimeoutSeconds = value;
    }
    public resetIdleTimeoutSeconds() {
        this._idleTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleTimeoutSecondsInput() {
        return this._idleTimeoutSeconds;
    }

    // per_request_timeout_seconds - computed: true, optional: true, required: false
    private _perRequestTimeoutSeconds?: number; 
    public get perRequestTimeoutSeconds() {
        return this.getNumberAttribute('per_request_timeout_seconds');
    }
    public set perRequestTimeoutSeconds(value: number) {
        this._perRequestTimeoutSeconds = value;
    }
    public resetPerRequestTimeoutSeconds() {
        this._perRequestTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perRequestTimeoutSecondsInput() {
        return this._perRequestTimeoutSeconds;
    }
}
export interface ServiceConnectTlsCertificateAuthorityProperty {
    /**
    * The ARN of the AWS Private Certificate Authority certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#aws_pca_authority_arn CcService#aws_pca_authority_arn}
    */
    readonly awsPcaAuthorityArn?: string;
}
export class ServiceConnectTlsCertificateAuthorityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceConnectTlsCertificateAuthorityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsPcaAuthorityArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsPcaAuthorityArn = this._awsPcaAuthorityArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceConnectTlsCertificateAuthorityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsPcaAuthorityArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsPcaAuthorityArn = value.awsPcaAuthorityArn;
        }
    }

    // aws_pca_authority_arn - computed: true, optional: true, required: false
    private _awsPcaAuthorityArn?: string; 
    public get awsPcaAuthorityArn() {
        return this.getStringAttribute('aws_pca_authority_arn');
    }
    public set awsPcaAuthorityArn(value: string) {
        this._awsPcaAuthorityArn = value;
    }
    public resetAwsPcaAuthorityArn() {
        this._awsPcaAuthorityArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsPcaAuthorityArnInput() {
        return this._awsPcaAuthorityArn;
    }
}
export interface ServiceConnectTlsConfigurationProperty {
    /**
    * The signer certificate authority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#issuer_certificate_authority CcService#issuer_certificate_authority}
    */
    readonly issuerCertificateAuthority?: ServiceConnectTlsCertificateAuthorityProperty;
    /**
    * The AWS Key Management Service key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#kms_key CcService#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that's associated with the Service Connect TLS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#role_arn CcService#role_arn}
    */
    readonly roleArn?: string;
}
export class ServiceConnectTlsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceConnectTlsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._issuerCertificateAuthority?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuerCertificateAuthority = this._issuerCertificateAuthority?.internalValue;
        }
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceConnectTlsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._issuerCertificateAuthority.internalValue = undefined;
            this._kmsKey = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._issuerCertificateAuthority.internalValue = value.issuerCertificateAuthority;
            this._kmsKey = value.kmsKey;
            this._roleArn = value.roleArn;
        }
    }

    // issuer_certificate_authority - computed: true, optional: true, required: false
    private _issuerCertificateAuthority = new ServiceConnectTlsCertificateAuthorityPropertyOutputReference(this, "issuer_certificate_authority");
    public get issuerCertificateAuthority() {
        return this._issuerCertificateAuthority;
    }
    public putIssuerCertificateAuthority(value: ServiceConnectTlsCertificateAuthorityProperty) {
        this._issuerCertificateAuthority.internalValue = value;
    }
    public resetIssuerCertificateAuthority() {
        this._issuerCertificateAuthority.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerCertificateAuthorityInput() {
        return this._issuerCertificateAuthority.internalValue;
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
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
export interface ServiceConnectServiceProperty {
    /**
    * The list of client aliases for this Service Connect service. You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1.
    *  Each alias ("endpoint") is a fully-qualified name and port number that other Amazon ECS tasks ("clients") can use to connect to this service.
    *  Each name and port mapping must be unique within the namespace.
    *  For each ``ServiceConnectService``, you must provide at least one ``clientAlias`` with one ``port``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#client_aliases CcService#client_aliases}
    */
    readonly clientAliases?: ServiceConnectClientAliasProperty[] | cdktn.IResolvable;
    /**
    * The ``discoveryName`` is the name of the new CMAP service that Amazon ECS creates for this Amazon ECS service. This must be unique within the CMAP namespace. The name can contain up to 64 characters. The name can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.
    *  If the ``discoveryName`` isn't specified, the port mapping name from the task definition is used in ``portName.namespace``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#discovery_name CcService#discovery_name}
    */
    readonly discoveryName?: string;
    /**
    * The port number for the Service Connect proxy to listen on.
    *  Use the value of this field to bypass the proxy for traffic on the port number specified in the named ``portMapping`` in the task definition of this application, and then use it in your VPC security groups to allow traffic into the proxy for this Amazon ECS service.
    *  In ``awsvpc`` mode and Fargate, the default value is the container port number. The container port number is in the ``portMapping`` in the task definition. In bridge mode, the default value is the ephemeral port of the Service Connect proxy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#ingress_port_override CcService#ingress_port_override}
    */
    readonly ingressPortOverride?: number;
    /**
    * The ``portName`` must match the name of one of the ``portMappings`` from all the containers in the task definition of this Amazon ECS service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#port_name CcService#port_name}
    */
    readonly portName?: string;
    /**
    * A reference to an object that represents the configured timeouts for Service Connect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#timeout CcService#timeout}
    */
    readonly timeout?: TimeoutConfigurationProperty;
    /**
    * A reference to an object that represents a Transport Layer Security (TLS) configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#tls CcService#tls}
    */
    readonly tls?: ServiceConnectTlsConfigurationProperty;
}
export class ServiceConnectServicePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ServiceConnectServiceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientAliases?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientAliases = this._clientAliases?.internalValue;
        }
        if (this._discoveryName !== undefined) {
            hasAnyValues = true;
            internalValueResult.discoveryName = this._discoveryName;
        }
        if (this._ingressPortOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.ingressPortOverride = this._ingressPortOverride;
        }
        if (this._portName !== undefined) {
            hasAnyValues = true;
            internalValueResult.portName = this._portName;
        }
        if (this._timeout?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout?.internalValue;
        }
        if (this._tls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tls = this._tls?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceConnectServiceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientAliases.internalValue = undefined;
            this._discoveryName = undefined;
            this._ingressPortOverride = undefined;
            this._portName = undefined;
            this._timeout.internalValue = undefined;
            this._tls.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientAliases.internalValue = value.clientAliases;
            this._discoveryName = value.discoveryName;
            this._ingressPortOverride = value.ingressPortOverride;
            this._portName = value.portName;
            this._timeout.internalValue = value.timeout;
            this._tls.internalValue = value.tls;
        }
    }

    // client_aliases - computed: true, optional: true, required: false
    private _clientAliases = new ServiceConnectClientAliasPropertyList(this, "client_aliases", false);
    public get clientAliases() {
        return this._clientAliases;
    }
    public putClientAliases(value: ServiceConnectClientAliasProperty[] | cdktn.IResolvable) {
        this._clientAliases.internalValue = value;
    }
    public resetClientAliases() {
        this._clientAliases.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientAliasesInput() {
        return this._clientAliases.internalValue;
    }

    // discovery_name - computed: true, optional: true, required: false
    private _discoveryName?: string; 
    public get discoveryName() {
        return this.getStringAttribute('discovery_name');
    }
    public set discoveryName(value: string) {
        this._discoveryName = value;
    }
    public resetDiscoveryName() {
        this._discoveryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get discoveryNameInput() {
        return this._discoveryName;
    }

    // ingress_port_override - computed: true, optional: true, required: false
    private _ingressPortOverride?: number; 
    public get ingressPortOverride() {
        return this.getNumberAttribute('ingress_port_override');
    }
    public set ingressPortOverride(value: number) {
        this._ingressPortOverride = value;
    }
    public resetIngressPortOverride() {
        this._ingressPortOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingressPortOverrideInput() {
        return this._ingressPortOverride;
    }

    // port_name - computed: true, optional: true, required: false
    private _portName?: string; 
    public get portName() {
        return this.getStringAttribute('port_name');
    }
    public set portName(value: string) {
        this._portName = value;
    }
    public resetPortName() {
        this._portName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portNameInput() {
        return this._portName;
    }

    // timeout - computed: true, optional: true, required: false
    private _timeout = new TimeoutConfigurationPropertyOutputReference(this, "timeout");
    public get timeout() {
        return this._timeout;
    }
    public putTimeout(value: TimeoutConfigurationProperty) {
        this._timeout.internalValue = value;
    }
    public resetTimeout() {
        this._timeout.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
        return this._timeout.internalValue;
    }

    // tls - computed: true, optional: true, required: false
    private _tls = new ServiceConnectTlsConfigurationPropertyOutputReference(this, "tls");
    public get tls() {
        return this._tls;
    }
    public putTls(value: ServiceConnectTlsConfigurationProperty) {
        this._tls.internalValue = value;
    }
    public resetTls() {
        this._tls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsInput() {
        return this._tls.internalValue;
    }
}

export class ServiceConnectServicePropertyList extends cdktn.ComplexList {
    public internalValue? : ServiceConnectServiceProperty[] | cdktn.IResolvable

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
    public get(index: number): ServiceConnectServicePropertyOutputReference {
        return new ServiceConnectServicePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServiceConnectConfigurationProperty {
    /**
    * The configuration for Service Connect access logging. Access logs capture detailed information about requests made to your service, including request patterns, response codes, and timing data. They can be useful for debugging connectivity issues, monitoring service performance, and auditing service-to-service communication for security and compliance purposes.
    *   To enable access logs, you must also specify a ``logConfiguration`` in the ``serviceConnectConfiguration``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#access_log_configuration CcService#access_log_configuration}
    */
    readonly accessLogConfiguration?: ServiceConnectAccessLogConfigurationProperty;
    /**
    * Specifies whether to use Service Connect with this service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#enabled CcService#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The log configuration for the container. This parameter maps to ``LogConfig`` in the docker container create command and the ``--log-driver`` option to docker run.
    *  By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition.
    *  Understand the following when specifying a log configuration for your containers.
    *   +  Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.
    *  For tasks on FARGATElong, the supported log drivers are ``awslogs``, ``splunk``, and ``awsfirelens``.
    *  For tasks hosted on Amazon EC2 instances, the supported log drivers are ``awslogs``, ``fluentd``, ``gelf``, ``json-file``, ``journald``,``syslog``, ``splunk``, and ``awsfirelens``.
    *   +  This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.
    *   +  For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the ``ECS_AVAILABLE_LOGGING_DRIVERS`` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
    *   +  For tasks that are on FARGATElong, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#log_configuration CcService#log_configuration}
    */
    readonly logConfiguration?: LogConfigurationProperty;
    /**
    * The namespace name or full Amazon Resource Name (ARN) of the CMAPlong namespace for use with Service Connect. The namespace must be in the same AWS Region as the Amazon ECS service and cluster. The type of namespace doesn't affect Service Connect. For more information about CMAPlong, see [Working with Services](https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#namespace CcService#namespace}
    */
    readonly namespace?: string;
    /**
    * The list of Service Connect service objects. These are names and aliases (also known as endpoints) that are used by other Amazon ECS services to connect to this service. 
    *  This field is not required for a "client" Amazon ECS service that's a member of a namespace only to connect to other services within the namespace. An example of this would be a frontend application that accepts incoming requests from either a load balancer that's attached to the service or by other means.
    *  An object selects a port from the task definition, assigns a name for the CMAPlong service, and a list of aliases (endpoints) and ports for client applications to refer to this service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#services CcService#services}
    */
    readonly services?: ServiceConnectServiceProperty[] | cdktn.IResolvable;
}
export class ServiceConnectConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceConnectConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessLogConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessLogConfiguration = this._accessLogConfiguration?.internalValue;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logConfiguration = this._logConfiguration?.internalValue;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._services?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.services = this._services?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceConnectConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessLogConfiguration.internalValue = undefined;
            this._enabled = undefined;
            this._logConfiguration.internalValue = undefined;
            this._namespace = undefined;
            this._services.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessLogConfiguration.internalValue = value.accessLogConfiguration;
            this._enabled = value.enabled;
            this._logConfiguration.internalValue = value.logConfiguration;
            this._namespace = value.namespace;
            this._services.internalValue = value.services;
        }
    }

    // access_log_configuration - computed: true, optional: true, required: false
    private _accessLogConfiguration = new ServiceConnectAccessLogConfigurationPropertyOutputReference(this, "access_log_configuration");
    public get accessLogConfiguration() {
        return this._accessLogConfiguration;
    }
    public putAccessLogConfiguration(value: ServiceConnectAccessLogConfigurationProperty) {
        this._accessLogConfiguration.internalValue = value;
    }
    public resetAccessLogConfiguration() {
        this._accessLogConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessLogConfigurationInput() {
        return this._accessLogConfiguration.internalValue;
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

    // log_configuration - computed: true, optional: true, required: false
    private _logConfiguration = new LogConfigurationPropertyOutputReference(this, "log_configuration");
    public get logConfiguration() {
        return this._logConfiguration;
    }
    public putLogConfiguration(value: LogConfigurationProperty) {
        this._logConfiguration.internalValue = value;
    }
    public resetLogConfiguration() {
        this._logConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigurationInput() {
        return this._logConfiguration.internalValue;
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }

    // services - computed: true, optional: true, required: false
    private _services = new ServiceConnectServicePropertyList(this, "services", false);
    public get services() {
        return this._services;
    }
    public putServices(value: ServiceConnectServiceProperty[] | cdktn.IResolvable) {
        this._services.internalValue = value;
    }
    public resetServices() {
        this._services.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get servicesInput() {
        return this._services.internalValue;
    }
}
export interface ServiceRegistryProperty {
    /**
    * The container name value to be used for your service discovery service. It's already specified in the task definition. If the task definition that your service task specifies uses the ``bridge`` or ``host`` network mode, you must specify a ``containerName`` and ``containerPort`` combination from the task definition. If the task definition that your service task specifies uses the ``awsvpc`` network mode and a type SRV DNS record is used, you must specify either a ``containerName`` and ``containerPort`` combination or a ``port`` value. However, you can't specify both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#container_name CcService#container_name}
    */
    readonly containerName?: string;
    /**
    * The port value to be used for your service discovery service. It's already specified in the task definition. If the task definition your service task specifies uses the ``bridge`` or ``host`` network mode, you must specify a ``containerName`` and ``containerPort`` combination from the task definition. If the task definition your service task specifies uses the ``awsvpc`` network mode and a type SRV DNS record is used, you must specify either a ``containerName`` and ``containerPort`` combination or a ``port`` value. However, you can't specify both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#container_port CcService#container_port}
    */
    readonly containerPort?: number;
    /**
    * The port value used if your service discovery service specified an SRV record. This field might be used if both the ``awsvpc`` network mode and SRV records are used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#port CcService#port}
    */
    readonly port?: number;
    /**
    * The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is CMAP. For more information, see [CreateService](https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#registry_arn CcService#registry_arn}
    */
    readonly registryArn?: string;
}
export class ServiceRegistryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ServiceRegistryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerName = this._containerName;
        }
        if (this._containerPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPort = this._containerPort;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._registryArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.registryArn = this._registryArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceRegistryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerName = undefined;
            this._containerPort = undefined;
            this._port = undefined;
            this._registryArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerName = value.containerName;
            this._containerPort = value.containerPort;
            this._port = value.port;
            this._registryArn = value.registryArn;
        }
    }

    // container_name - computed: true, optional: true, required: false
    private _containerName?: string; 
    public get containerName() {
        return this.getStringAttribute('container_name');
    }
    public set containerName(value: string) {
        this._containerName = value;
    }
    public resetContainerName() {
        this._containerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerNameInput() {
        return this._containerName;
    }

    // container_port - computed: true, optional: true, required: false
    private _containerPort?: number; 
    public get containerPort() {
        return this.getNumberAttribute('container_port');
    }
    public set containerPort(value: number) {
        this._containerPort = value;
    }
    public resetContainerPort() {
        this._containerPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerPortInput() {
        return this._containerPort;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // registry_arn - computed: true, optional: true, required: false
    private _registryArn?: string; 
    public get registryArn() {
        return this.getStringAttribute('registry_arn');
    }
    public set registryArn(value: string) {
        this._registryArn = value;
    }
    public resetRegistryArn() {
        this._registryArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registryArnInput() {
        return this._registryArn;
    }
}

export class ServiceRegistryPropertyList extends cdktn.ComplexList {
    public internalValue? : ServiceRegistryProperty[] | cdktn.IResolvable

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
    public get(index: number): ServiceRegistryPropertyOutputReference {
        return new ServiceRegistryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#key CcService#key}
    */
    readonly key?: string;
    /**
    * The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#value CcService#value}
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
export interface TagsProperty {
    /**
    * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#key CcService#key}
    */
    readonly key?: string;
    /**
    * The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#value CcService#value}
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
export interface EBSTagSpecificationProperty {
    /**
    * Determines whether to propagate the tags from the task definition to the Amazon EBS volume. Tags can only propagate to a ``SERVICE`` specified in ``ServiceVolumeConfiguration``. If no value is specified, the tags aren't propagated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#propagate_tags CcService#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * The type of volume resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#resource_type CcService#resource_type}
    */
    readonly resourceType?: string;
    /**
    * The tags applied to this Amazon EBS volume. ``AmazonECSCreated`` and ``AmazonECSManaged`` are reserved tags that can't be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#tags CcService#tags}
    */
    readonly tags?: TagsProperty[] | cdktn.IResolvable;
}
export class EBSTagSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EBSTagSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._propagateTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.propagateTags = this._propagateTags;
        }
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

    public set internalValue(value: EBSTagSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._propagateTags = undefined;
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
            this._propagateTags = value.propagateTags;
            this._resourceType = value.resourceType;
            this._tags.internalValue = value.tags;
        }
    }

    // propagate_tags - computed: true, optional: true, required: false
    private _propagateTags?: string; 
    public get propagateTags() {
        return this.getStringAttribute('propagate_tags');
    }
    public set propagateTags(value: string) {
        this._propagateTags = value;
    }
    public resetPropagateTags() {
        this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsInput() {
        return this._propagateTags;
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

export class EBSTagSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : EBSTagSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): EBSTagSpecificationPropertyOutputReference {
        return new EBSTagSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServiceManagedEBSVolumeConfigurationProperty {
    /**
    * Indicates whether the volume should be encrypted. If you turn on Region-level Amazon EBS encryption by default but set this value as ``false``, the setting is overridden and the volume is encrypted with the KMS key specified for Amazon EBS encryption by default. This parameter maps 1:1 with the ``Encrypted`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#encrypted CcService#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * The filesystem type for the volume. For volumes created from a snapshot, you must specify the same filesystem type that the volume was using when the snapshot was created. If there is a filesystem type mismatch, the tasks will fail to start.
    *  The available Linux filesystem types are ``ext3``, ``ext4``, and ``xfs``. If no value is specified, the ``xfs`` filesystem type is used by default.
    *  The available Windows filesystem types are ``NTFS``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#filesystem_type CcService#filesystem_type}
    */
    readonly filesystemType?: string;
    /**
    * The number of I/O operations per second (IOPS). For ``gp3``, ``io1``, and ``io2`` volumes, this represents the number of IOPS that are provisioned for the volume. For ``gp2`` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
    *  The following are the supported values for each volume type.
    *   +  ``gp3``: 3,000 - 16,000 IOPS
    *   +  ``io1``: 100 - 64,000 IOPS
    *   +  ``io2``: 100 - 256,000 IOPS
    *   
    *  This parameter is required for ``io1`` and ``io2`` volume types. The default for ``gp3`` volumes is ``3,000 IOPS``. This parameter is not supported for ``st1``, ``sc1``, or ``standard`` volume types.
    *  This parameter maps 1:1 with the ``Iops`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#iops CcService#iops}
    */
    readonly iops?: number;
    /**
    * The Amazon Resource Name (ARN) identifier of the AWS Key Management Service key to use for Amazon EBS encryption. When a key is specified using this parameter, it overrides Amazon EBS default encryption or any KMS key that you specified for cluster-level managed storage encryption. This parameter maps 1:1 with the ``KmsKeyId`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*. For more information about encrypting Amazon EBS volumes attached to tasks, see [Encrypt data stored in Amazon EBS volumes attached to Amazon ECS tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html).
    *   AWS authenticates the AWS Key Management Service key asynchronously. Therefore, if you specify an ID, alias, or ARN that is invalid, the action can appear to complete, but eventually fails.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#kms_key_id CcService#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The ARN of the IAM role to associate with this volume. This is the Amazon ECS infrastructure IAM role that is used to manage your AWS infrastructure. We recommend using the Amazon ECS-managed ``AmazonECSInfrastructureRolePolicyForVolumes`` IAM policy with this role. For more information, see [Amazon ECS infrastructure IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html) in the *Amazon ECS Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#role_arn CcService#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The size of the volume in GiB. You must specify either a volume size or a snapshot ID. If you specify a snapshot ID, the snapshot size is used for the volume size by default. You can optionally specify a volume size greater than or equal to the snapshot size. This parameter maps 1:1 with the ``Size`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
    *  The following are the supported volume size values for each volume type.
    *   +  ``gp2`` and ``gp3``: 1-16,384
    *   +  ``io1`` and ``io2``: 4-16,384
    *   +  ``st1`` and ``sc1``: 125-16,384
    *   +  ``standard``: 1-1,024
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#size_in_gi_b CcService#size_in_gi_b}
    */
    readonly sizeInGiB?: number;
    /**
    * The snapshot that Amazon ECS uses to create volumes for attachment to tasks maintained by the service. You must specify either ``snapshotId`` or ``sizeInGiB`` in your volume configuration. This parameter maps 1:1 with the ``SnapshotId`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#snapshot_id CcService#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * The tags to apply to the volume. Amazon ECS applies service-managed tags by default. This parameter maps 1:1 with the ``TagSpecifications.N`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#tag_specifications CcService#tag_specifications}
    */
    readonly tagSpecifications?: EBSTagSpecificationProperty[] | cdktn.IResolvable;
    /**
    * The throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s. This parameter maps 1:1 with the ``Throughput`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
    *   This parameter is only supported for the ``gp3`` volume type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#throughput CcService#throughput}
    */
    readonly throughput?: number;
    /**
    * The rate, in MiB/s, at which data is fetched from a snapshot of an existing EBS volume to create new volumes for attachment to the tasks maintained by the service. This property can be specified only if you specify a ``snapshotId``. For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EBS User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#volume_initialization_rate CcService#volume_initialization_rate}
    */
    readonly volumeInitializationRate?: number;
    /**
    * The volume type. This parameter maps 1:1 with the ``VolumeType`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html) in the *Amazon EC2 User Guide*.
    *  The following are the supported volume types.
    *   +  General Purpose SSD: ``gp2``|``gp3``
    *   +  Provisioned IOPS SSD: ``io1``|``io2``
    *   +  Throughput Optimized HDD: ``st1``
    *   +  Cold HDD: ``sc1``
    *   +  Magnetic: ``standard``
    *   The magnetic volume type is not supported on Fargate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#volume_type CcService#volume_type}
    */
    readonly volumeType?: string;
}
export class ServiceManagedEBSVolumeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceManagedEBSVolumeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.encrypted = this._encrypted;
        }
        if (this._filesystemType !== undefined) {
            hasAnyValues = true;
            internalValueResult.filesystemType = this._filesystemType;
        }
        if (this._iops !== undefined) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._sizeInGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeInGiB = this._sizeInGiB;
        }
        if (this._snapshotId !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotId = this._snapshotId;
        }
        if (this._tagSpecifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagSpecifications = this._tagSpecifications?.internalValue;
        }
        if (this._throughput !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughput = this._throughput;
        }
        if (this._volumeInitializationRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeInitializationRate = this._volumeInitializationRate;
        }
        if (this._volumeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeType = this._volumeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceManagedEBSVolumeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encrypted = undefined;
            this._filesystemType = undefined;
            this._iops = undefined;
            this._kmsKeyId = undefined;
            this._roleArn = undefined;
            this._sizeInGiB = undefined;
            this._snapshotId = undefined;
            this._tagSpecifications.internalValue = undefined;
            this._throughput = undefined;
            this._volumeInitializationRate = undefined;
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
            this._filesystemType = value.filesystemType;
            this._iops = value.iops;
            this._kmsKeyId = value.kmsKeyId;
            this._roleArn = value.roleArn;
            this._sizeInGiB = value.sizeInGiB;
            this._snapshotId = value.snapshotId;
            this._tagSpecifications.internalValue = value.tagSpecifications;
            this._throughput = value.throughput;
            this._volumeInitializationRate = value.volumeInitializationRate;
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

    // filesystem_type - computed: true, optional: true, required: false
    private _filesystemType?: string; 
    public get filesystemType() {
        return this.getStringAttribute('filesystem_type');
    }
    public set filesystemType(value: string) {
        this._filesystemType = value;
    }
    public resetFilesystemType() {
        this._filesystemType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filesystemTypeInput() {
        return this._filesystemType;
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

    // size_in_gi_b - computed: true, optional: true, required: false
    private _sizeInGiB?: number; 
    public get sizeInGiB() {
        return this.getNumberAttribute('size_in_gi_b');
    }
    public set sizeInGiB(value: number) {
        this._sizeInGiB = value;
    }
    public resetSizeInGiB() {
        this._sizeInGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInGiBInput() {
        return this._sizeInGiB;
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

    // tag_specifications - computed: true, optional: true, required: false
    private _tagSpecifications = new EBSTagSpecificationPropertyList(this, "tag_specifications", false);
    public get tagSpecifications() {
        return this._tagSpecifications;
    }
    public putTagSpecifications(value: EBSTagSpecificationProperty[] | cdktn.IResolvable) {
        this._tagSpecifications.internalValue = value;
    }
    public resetTagSpecifications() {
        this._tagSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagSpecificationsInput() {
        return this._tagSpecifications.internalValue;
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
export interface ServiceVolumeConfigurationProperty {
    /**
    * The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task in the service. The Amazon EBS volumes are visible in your account in the Amazon EC2 console once they are created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#managed_ebs_volume CcService#managed_ebs_volume}
    */
    readonly managedEbsVolume?: ServiceManagedEBSVolumeConfigurationProperty;
    /**
    * The name of the volume. This value must match the volume name from the ``Volume`` object in the task definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#name CcService#name}
    */
    readonly name?: string;
}
export class ServiceVolumeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ServiceVolumeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._managedEbsVolume?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedEbsVolume = this._managedEbsVolume?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceVolumeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._managedEbsVolume.internalValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._managedEbsVolume.internalValue = value.managedEbsVolume;
            this._name = value.name;
        }
    }

    // managed_ebs_volume - computed: true, optional: true, required: false
    private _managedEbsVolume = new ServiceManagedEBSVolumeConfigurationPropertyOutputReference(this, "managed_ebs_volume");
    public get managedEbsVolume() {
        return this._managedEbsVolume;
    }
    public putManagedEbsVolume(value: ServiceManagedEBSVolumeConfigurationProperty) {
        this._managedEbsVolume.internalValue = value;
    }
    public resetManagedEbsVolume() {
        this._managedEbsVolume.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedEbsVolumeInput() {
        return this._managedEbsVolume.internalValue;
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

export class ServiceVolumeConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : ServiceVolumeConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): ServiceVolumeConfigurationPropertyOutputReference {
        return new ServiceVolumeConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VpcLatticeConfigurationProperty {
    /**
    * The name of the port mapping to register in the VPC Lattice target group. This is the name of the ``portMapping`` you defined in your task definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#port_name CcService#port_name}
    */
    readonly portName?: string;
    /**
    * The ARN of the IAM role to associate with this VPC Lattice configuration. This is the Amazon ECS infrastructure IAM role that is used to manage your VPC Lattice infrastructure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#role_arn CcService#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The full Amazon Resource Name (ARN) of the target group or groups associated with the VPC Lattice configuration that the Amazon ECS tasks will be registered to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_service#target_group_arn CcService#target_group_arn}
    */
    readonly targetGroupArn?: string;
}
export class VpcLatticeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VpcLatticeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._portName !== undefined) {
            hasAnyValues = true;
            internalValueResult.portName = this._portName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._targetGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupArn = this._targetGroupArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcLatticeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._portName = undefined;
            this._roleArn = undefined;
            this._targetGroupArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._portName = value.portName;
            this._roleArn = value.roleArn;
            this._targetGroupArn = value.targetGroupArn;
        }
    }

    // port_name - computed: true, optional: true, required: false
    private _portName?: string; 
    public get portName() {
        return this.getStringAttribute('port_name');
    }
    public set portName(value: string) {
        this._portName = value;
    }
    public resetPortName() {
        this._portName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portNameInput() {
        return this._portName;
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

    // target_group_arn - computed: true, optional: true, required: false
    private _targetGroupArn?: string; 
    public get targetGroupArn() {
        return this.getStringAttribute('target_group_arn');
    }
    public set targetGroupArn(value: string) {
        this._targetGroupArn = value;
    }
    public resetTargetGroupArn() {
        this._targetGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupArnInput() {
        return this._targetGroupArn;
    }
}

export class VpcLatticeConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : VpcLatticeConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): VpcLatticeConfigurationPropertyOutputReference {
        return new VpcLatticeConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
