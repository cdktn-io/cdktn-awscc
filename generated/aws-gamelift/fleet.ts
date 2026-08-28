// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFleetProps extends cdktn.TerraformMetaArguments {
    /**
    * Configuration for Anywhere fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#anywhere_configuration CcFleet#anywhere_configuration}
    */
    readonly anywhereConfiguration?: CcFleet.AnywhereConfigurationProperty;
    /**
    * Determines when and how to apply fleet or location capacities. Allowed options are ON_UPDATE (default), ON_CREATE_AND_UPDATE and ON_CREATE_AND_UPDATE_WITH_AUTOSCALING. If you choose ON_CREATE_AND_UPDATE_WITH_AUTOSCALING, MinSize and MaxSize will still be applied on creation and on updates, but DesiredEC2Instances will only be applied once on fleet creation and will be ignored during updates to prevent conflicts with auto-scaling. During updates with ON_CREATE_AND_UPDATE_WITH_AUTOSCALING chosen, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#apply_capacity CcFleet#apply_capacity}
    */
    readonly applyCapacity?: string;
    /**
    * A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#build_id CcFleet#build_id}
    */
    readonly buildId?: string;
    /**
    * Indicates whether to generate a TLS/SSL certificate for the new fleet. TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not set, certificate generation is disabled. This fleet setting cannot be changed once the fleet is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#certificate_configuration CcFleet#certificate_configuration}
    */
    readonly certificateConfiguration?: CcFleet.CertificateConfigurationProperty;
    /**
    * ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#compute_type CcFleet#compute_type}
    */
    readonly computeType?: string;
    /**
    * A human-readable description of a fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#description CcFleet#description}
    */
    readonly description?: string;
    /**
    * [DEPRECATED] The number of EC2 instances that you want this fleet to host. When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#desired_ec2_instances CcFleet#desired_ec2_instances}
    */
    readonly desiredEc2Instances?: number;
    /**
    * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#ec2_inbound_permissions CcFleet#ec2_inbound_permissions}
    */
    readonly ec2InboundPermissions?: CcFleet.IpPermissionProperty[] | cdktn.IResolvable;
    /**
    * The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#ec2_instance_type CcFleet#ec2_instance_type}
    */
    readonly ec2InstanceType?: string;
    /**
    * Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#fleet_type CcFleet#fleet_type}
    */
    readonly fleetType?: string;
    /**
    * A unique identifier for an AWS IAM role that manages access to your AWS services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#instance_role_arn CcFleet#instance_role_arn}
    */
    readonly instanceRoleArn?: string;
    /**
    * Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#instance_role_credentials_provider CcFleet#instance_role_credentials_provider}
    */
    readonly instanceRoleCredentialsProvider?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#locations CcFleet#locations}
    */
    readonly locations?: CcFleet.LocationConfigurationProperty[] | cdktn.IResolvable;
    /**
    * This parameter is no longer used. When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#log_paths CcFleet#log_paths}
    */
    readonly logPaths?: string[];
    /**
    * [DEPRECATED] The maximum value that is allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#max_size CcFleet#max_size}
    */
    readonly maxSize?: number;
    /**
    * The name of an Amazon CloudWatch metric group. A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#metric_groups CcFleet#metric_groups}
    */
    readonly metricGroups?: string[];
    /**
    * [DEPRECATED] The minimum value allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#min_size CcFleet#min_size}
    */
    readonly minSize?: number;
    /**
    * A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#name CcFleet#name}
    */
    readonly name: string;
    /**
    * A game session protection policy to apply to all game sessions hosted on instances in this fleet. When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#new_game_session_protection_policy CcFleet#new_game_session_protection_policy}
    */
    readonly newGameSessionProtectionPolicy?: string;
    /**
    * A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your account ID in the AWS Management Console under account settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#peer_vpc_aws_account_id CcFleet#peer_vpc_aws_account_id}
    */
    readonly peerVpcAwsAccountId?: string;
    /**
    * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#peer_vpc_id CcFleet#peer_vpc_id}
    */
    readonly peerVpcId?: string;
    /**
    * Configuration for player gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#player_gateway_configuration CcFleet#player_gateway_configuration}
    */
    readonly playerGatewayConfiguration?: CcFleet.PlayerGatewayConfigurationProperty;
    /**
    * The player gateway mode for the fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#player_gateway_mode CcFleet#player_gateway_mode}
    */
    readonly playerGatewayMode?: string;
    /**
    * A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#resource_creation_limit_policy CcFleet#resource_creation_limit_policy}
    */
    readonly resourceCreationLimitPolicy?: CcFleet.ResourceCreationLimitPolicyProperty;
    /**
    * Instructions for launching server processes on each instance in the fleet. Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception.
    * 
    * This parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration has replaced these parameters, but fleets that use them will continue to work.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#runtime_configuration CcFleet#runtime_configuration}
    */
    readonly runtimeConfiguration?: CcFleet.RuntimeConfigurationProperty;
    /**
    * A list of rules that control how a fleet is scaled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#scaling_policies CcFleet#scaling_policies}
    */
    readonly scalingPolicies?: CcFleet.ScalingPolicyProperty[] | cdktn.IResolvable;
    /**
    * A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.
    * 
    * Note: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#script_id CcFleet#script_id}
    */
    readonly scriptId?: string;
    /**
    * This parameter is no longer used but is retained for backward compatibility. Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#server_launch_parameters CcFleet#server_launch_parameters}
    */
    readonly serverLaunchParameters?: string;
    /**
    * This parameter is no longer used. Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#server_launch_path CcFleet#server_launch_path}
    */
    readonly serverLaunchPath?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#tags CcFleet#tags}
    */
    readonly tags?: CcFleet.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet awscc_gamelift_fleet}
*/
export class CcFleet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_gamelift_fleet";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFleet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFleet to import
    * @param importFromId The id of the existing CcFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFleet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_gamelift_fleet", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet awscc_gamelift_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFleetProps
    */
    public constructor(scope: Construct, id: string, config: CcFleetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_gamelift_fleet',
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
        this._anywhereConfiguration.internalValue = config.anywhereConfiguration;
        this._applyCapacity = config.applyCapacity;
        this._buildId = config.buildId;
        this._certificateConfiguration.internalValue = config.certificateConfiguration;
        this._computeType = config.computeType;
        this._description = config.description;
        this._desiredEc2Instances = config.desiredEc2Instances;
        this._ec2InboundPermissions.internalValue = config.ec2InboundPermissions;
        this._ec2InstanceType = config.ec2InstanceType;
        this._fleetType = config.fleetType;
        this._instanceRoleArn = config.instanceRoleArn;
        this._instanceRoleCredentialsProvider = config.instanceRoleCredentialsProvider;
        this._locations.internalValue = config.locations;
        this._logPaths = config.logPaths;
        this._maxSize = config.maxSize;
        this._metricGroups = config.metricGroups;
        this._minSize = config.minSize;
        this._name = config.name;
        this._newGameSessionProtectionPolicy = config.newGameSessionProtectionPolicy;
        this._peerVpcAwsAccountId = config.peerVpcAwsAccountId;
        this._peerVpcId = config.peerVpcId;
        this._playerGatewayConfiguration.internalValue = config.playerGatewayConfiguration;
        this._playerGatewayMode = config.playerGatewayMode;
        this._resourceCreationLimitPolicy.internalValue = config.resourceCreationLimitPolicy;
        this._runtimeConfiguration.internalValue = config.runtimeConfiguration;
        this._scalingPolicies.internalValue = config.scalingPolicies;
        this._scriptId = config.scriptId;
        this._serverLaunchParameters = config.serverLaunchParameters;
        this._serverLaunchPath = config.serverLaunchPath;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // anywhere_configuration - computed: true, optional: true, required: false
    private _anywhereConfiguration = new CcFleet.AnywhereConfigurationPropertyOutputReference(this, "anywhere_configuration");
    public get anywhereConfiguration() {
        return this._anywhereConfiguration;
    }
    public putAnywhereConfiguration(value: CcFleet.AnywhereConfigurationProperty) {
        this._anywhereConfiguration.internalValue = value;
    }
    public resetAnywhereConfiguration() {
        this._anywhereConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get anywhereConfigurationInput() {
        return this._anywhereConfiguration.internalValue;
    }

    // apply_capacity - computed: true, optional: true, required: false
    private _applyCapacity?: string; 
    public get applyCapacity() {
        return this.getStringAttribute('apply_capacity');
    }
    public set applyCapacity(value: string) {
        this._applyCapacity = value;
    }
    public resetApplyCapacity() {
        this._applyCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applyCapacityInput() {
        return this._applyCapacity;
    }

    // build_id - computed: true, optional: true, required: false
    private _buildId?: string; 
    public get buildId() {
        return this.getStringAttribute('build_id');
    }
    public set buildId(value: string) {
        this._buildId = value;
    }
    public resetBuildId() {
        this._buildId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildIdInput() {
        return this._buildId;
    }

    // certificate_configuration - computed: true, optional: true, required: false
    private _certificateConfiguration = new CcFleet.CertificateConfigurationPropertyOutputReference(this, "certificate_configuration");
    public get certificateConfiguration() {
        return this._certificateConfiguration;
    }
    public putCertificateConfiguration(value: CcFleet.CertificateConfigurationProperty) {
        this._certificateConfiguration.internalValue = value;
    }
    public resetCertificateConfiguration() {
        this._certificateConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateConfigurationInput() {
        return this._certificateConfiguration.internalValue;
    }

    // compute_type - computed: true, optional: true, required: false
    private _computeType?: string; 
    public get computeType() {
        return this.getStringAttribute('compute_type');
    }
    public set computeType(value: string) {
        this._computeType = value;
    }
    public resetComputeType() {
        this._computeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeTypeInput() {
        return this._computeType;
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

    // desired_ec2_instances - computed: true, optional: true, required: false
    private _desiredEc2Instances?: number; 
    public get desiredEc2Instances() {
        return this.getNumberAttribute('desired_ec2_instances');
    }
    public set desiredEc2Instances(value: number) {
        this._desiredEc2Instances = value;
    }
    public resetDesiredEc2Instances() {
        this._desiredEc2Instances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredEc2InstancesInput() {
        return this._desiredEc2Instances;
    }

    // ec2_inbound_permissions - computed: true, optional: true, required: false
    private _ec2InboundPermissions = new CcFleet.IpPermissionPropertyList(this, "ec2_inbound_permissions", false);
    public get ec2InboundPermissions() {
        return this._ec2InboundPermissions;
    }
    public putEc2InboundPermissions(value: CcFleet.IpPermissionProperty[] | cdktn.IResolvable) {
        this._ec2InboundPermissions.internalValue = value;
    }
    public resetEc2InboundPermissions() {
        this._ec2InboundPermissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2InboundPermissionsInput() {
        return this._ec2InboundPermissions.internalValue;
    }

    // ec2_instance_type - computed: true, optional: true, required: false
    private _ec2InstanceType?: string; 
    public get ec2InstanceType() {
        return this.getStringAttribute('ec2_instance_type');
    }
    public set ec2InstanceType(value: string) {
        this._ec2InstanceType = value;
    }
    public resetEc2InstanceType() {
        this._ec2InstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2InstanceTypeInput() {
        return this._ec2InstanceType;
    }

    // fleet_arn - computed: true, optional: false, required: false
    public get fleetArn() {
        return this.getStringAttribute('fleet_arn');
    }

    // fleet_id - computed: true, optional: false, required: false
    public get fleetId() {
        return this.getStringAttribute('fleet_id');
    }

    // fleet_type - computed: true, optional: true, required: false
    private _fleetType?: string; 
    public get fleetType() {
        return this.getStringAttribute('fleet_type');
    }
    public set fleetType(value: string) {
        this._fleetType = value;
    }
    public resetFleetType() {
        this._fleetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetTypeInput() {
        return this._fleetType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_role_arn - computed: true, optional: true, required: false
    private _instanceRoleArn?: string; 
    public get instanceRoleArn() {
        return this.getStringAttribute('instance_role_arn');
    }
    public set instanceRoleArn(value: string) {
        this._instanceRoleArn = value;
    }
    public resetInstanceRoleArn() {
        this._instanceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRoleArnInput() {
        return this._instanceRoleArn;
    }

    // instance_role_credentials_provider - computed: true, optional: true, required: false
    private _instanceRoleCredentialsProvider?: string; 
    public get instanceRoleCredentialsProvider() {
        return this.getStringAttribute('instance_role_credentials_provider');
    }
    public set instanceRoleCredentialsProvider(value: string) {
        this._instanceRoleCredentialsProvider = value;
    }
    public resetInstanceRoleCredentialsProvider() {
        this._instanceRoleCredentialsProvider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRoleCredentialsProviderInput() {
        return this._instanceRoleCredentialsProvider;
    }

    // locations - computed: true, optional: true, required: false
    private _locations = new CcFleet.LocationConfigurationPropertyList(this, "locations", false);
    public get locations() {
        return this._locations;
    }
    public putLocations(value: CcFleet.LocationConfigurationProperty[] | cdktn.IResolvable) {
        this._locations.internalValue = value;
    }
    public resetLocations() {
        this._locations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationsInput() {
        return this._locations.internalValue;
    }

    // log_paths - computed: true, optional: true, required: false
    private _logPaths?: string[]; 
    public get logPaths() {
        return this.getListAttribute('log_paths');
    }
    public set logPaths(value: string[]) {
        this._logPaths = value;
    }
    public resetLogPaths() {
        this._logPaths = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logPathsInput() {
        return this._logPaths;
    }

    // max_size - computed: true, optional: true, required: false
    private _maxSize?: number; 
    public get maxSize() {
        return this.getNumberAttribute('max_size');
    }
    public set maxSize(value: number) {
        this._maxSize = value;
    }
    public resetMaxSize() {
        this._maxSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSizeInput() {
        return this._maxSize;
    }

    // metric_groups - computed: true, optional: true, required: false
    private _metricGroups?: string[]; 
    public get metricGroups() {
        return this.getListAttribute('metric_groups');
    }
    public set metricGroups(value: string[]) {
        this._metricGroups = value;
    }
    public resetMetricGroups() {
        this._metricGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricGroupsInput() {
        return this._metricGroups;
    }

    // min_size - computed: true, optional: true, required: false
    private _minSize?: number; 
    public get minSize() {
        return this.getNumberAttribute('min_size');
    }
    public set minSize(value: number) {
        this._minSize = value;
    }
    public resetMinSize() {
        this._minSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minSizeInput() {
        return this._minSize;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // new_game_session_protection_policy - computed: true, optional: true, required: false
    private _newGameSessionProtectionPolicy?: string; 
    public get newGameSessionProtectionPolicy() {
        return this.getStringAttribute('new_game_session_protection_policy');
    }
    public set newGameSessionProtectionPolicy(value: string) {
        this._newGameSessionProtectionPolicy = value;
    }
    public resetNewGameSessionProtectionPolicy() {
        this._newGameSessionProtectionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get newGameSessionProtectionPolicyInput() {
        return this._newGameSessionProtectionPolicy;
    }

    // peer_vpc_aws_account_id - computed: true, optional: true, required: false
    private _peerVpcAwsAccountId?: string; 
    public get peerVpcAwsAccountId() {
        return this.getStringAttribute('peer_vpc_aws_account_id');
    }
    public set peerVpcAwsAccountId(value: string) {
        this._peerVpcAwsAccountId = value;
    }
    public resetPeerVpcAwsAccountId() {
        this._peerVpcAwsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerVpcAwsAccountIdInput() {
        return this._peerVpcAwsAccountId;
    }

    // peer_vpc_id - computed: true, optional: true, required: false
    private _peerVpcId?: string; 
    public get peerVpcId() {
        return this.getStringAttribute('peer_vpc_id');
    }
    public set peerVpcId(value: string) {
        this._peerVpcId = value;
    }
    public resetPeerVpcId() {
        this._peerVpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerVpcIdInput() {
        return this._peerVpcId;
    }

    // player_gateway_configuration - computed: true, optional: true, required: false
    private _playerGatewayConfiguration = new CcFleet.PlayerGatewayConfigurationPropertyOutputReference(this, "player_gateway_configuration");
    public get playerGatewayConfiguration() {
        return this._playerGatewayConfiguration;
    }
    public putPlayerGatewayConfiguration(value: CcFleet.PlayerGatewayConfigurationProperty) {
        this._playerGatewayConfiguration.internalValue = value;
    }
    public resetPlayerGatewayConfiguration() {
        this._playerGatewayConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get playerGatewayConfigurationInput() {
        return this._playerGatewayConfiguration.internalValue;
    }

    // player_gateway_mode - computed: true, optional: true, required: false
    private _playerGatewayMode?: string; 
    public get playerGatewayMode() {
        return this.getStringAttribute('player_gateway_mode');
    }
    public set playerGatewayMode(value: string) {
        this._playerGatewayMode = value;
    }
    public resetPlayerGatewayMode() {
        this._playerGatewayMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get playerGatewayModeInput() {
        return this._playerGatewayMode;
    }

    // resource_creation_limit_policy - computed: true, optional: true, required: false
    private _resourceCreationLimitPolicy = new CcFleet.ResourceCreationLimitPolicyPropertyOutputReference(this, "resource_creation_limit_policy");
    public get resourceCreationLimitPolicy() {
        return this._resourceCreationLimitPolicy;
    }
    public putResourceCreationLimitPolicy(value: CcFleet.ResourceCreationLimitPolicyProperty) {
        this._resourceCreationLimitPolicy.internalValue = value;
    }
    public resetResourceCreationLimitPolicy() {
        this._resourceCreationLimitPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceCreationLimitPolicyInput() {
        return this._resourceCreationLimitPolicy.internalValue;
    }

    // runtime_configuration - computed: true, optional: true, required: false
    private _runtimeConfiguration = new CcFleet.RuntimeConfigurationPropertyOutputReference(this, "runtime_configuration");
    public get runtimeConfiguration() {
        return this._runtimeConfiguration;
    }
    public putRuntimeConfiguration(value: CcFleet.RuntimeConfigurationProperty) {
        this._runtimeConfiguration.internalValue = value;
    }
    public resetRuntimeConfiguration() {
        this._runtimeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeConfigurationInput() {
        return this._runtimeConfiguration.internalValue;
    }

    // scaling_policies - computed: true, optional: true, required: false
    private _scalingPolicies = new CcFleet.ScalingPolicyPropertyList(this, "scaling_policies", false);
    public get scalingPolicies() {
        return this._scalingPolicies;
    }
    public putScalingPolicies(value: CcFleet.ScalingPolicyProperty[] | cdktn.IResolvable) {
        this._scalingPolicies.internalValue = value;
    }
    public resetScalingPolicies() {
        this._scalingPolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingPoliciesInput() {
        return this._scalingPolicies.internalValue;
    }

    // script_id - computed: true, optional: true, required: false
    private _scriptId?: string; 
    public get scriptId() {
        return this.getStringAttribute('script_id');
    }
    public set scriptId(value: string) {
        this._scriptId = value;
    }
    public resetScriptId() {
        this._scriptId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptIdInput() {
        return this._scriptId;
    }

    // server_launch_parameters - computed: true, optional: true, required: false
    private _serverLaunchParameters?: string; 
    public get serverLaunchParameters() {
        return this.getStringAttribute('server_launch_parameters');
    }
    public set serverLaunchParameters(value: string) {
        this._serverLaunchParameters = value;
    }
    public resetServerLaunchParameters() {
        this._serverLaunchParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverLaunchParametersInput() {
        return this._serverLaunchParameters;
    }

    // server_launch_path - computed: true, optional: true, required: false
    private _serverLaunchPath?: string; 
    public get serverLaunchPath() {
        return this.getStringAttribute('server_launch_path');
    }
    public set serverLaunchPath(value: string) {
        this._serverLaunchPath = value;
    }
    public resetServerLaunchPath() {
        this._serverLaunchPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverLaunchPathInput() {
        return this._serverLaunchPath;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFleet.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFleet.TagProperty[] | cdktn.IResolvable) {
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
            anywhere_configuration: ccFleetAnywhereConfigurationPropertyToTerraform(this._anywhereConfiguration.internalValue),
            apply_capacity: cdktn.stringToTerraform(this._applyCapacity),
            build_id: cdktn.stringToTerraform(this._buildId),
            certificate_configuration: ccFleetCertificateConfigurationPropertyToTerraform(this._certificateConfiguration.internalValue),
            compute_type: cdktn.stringToTerraform(this._computeType),
            description: cdktn.stringToTerraform(this._description),
            desired_ec2_instances: cdktn.numberToTerraform(this._desiredEc2Instances),
            ec2_inbound_permissions: cdktn.listMapper(ccFleetIpPermissionPropertyToTerraform, false)(this._ec2InboundPermissions.internalValue),
            ec2_instance_type: cdktn.stringToTerraform(this._ec2InstanceType),
            fleet_type: cdktn.stringToTerraform(this._fleetType),
            instance_role_arn: cdktn.stringToTerraform(this._instanceRoleArn),
            instance_role_credentials_provider: cdktn.stringToTerraform(this._instanceRoleCredentialsProvider),
            locations: cdktn.listMapper(ccFleetLocationConfigurationPropertyToTerraform, false)(this._locations.internalValue),
            log_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(this._logPaths),
            max_size: cdktn.numberToTerraform(this._maxSize),
            metric_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._metricGroups),
            min_size: cdktn.numberToTerraform(this._minSize),
            name: cdktn.stringToTerraform(this._name),
            new_game_session_protection_policy: cdktn.stringToTerraform(this._newGameSessionProtectionPolicy),
            peer_vpc_aws_account_id: cdktn.stringToTerraform(this._peerVpcAwsAccountId),
            peer_vpc_id: cdktn.stringToTerraform(this._peerVpcId),
            player_gateway_configuration: ccFleetPlayerGatewayConfigurationPropertyToTerraform(this._playerGatewayConfiguration.internalValue),
            player_gateway_mode: cdktn.stringToTerraform(this._playerGatewayMode),
            resource_creation_limit_policy: ccFleetResourceCreationLimitPolicyPropertyToTerraform(this._resourceCreationLimitPolicy.internalValue),
            runtime_configuration: ccFleetRuntimeConfigurationPropertyToTerraform(this._runtimeConfiguration.internalValue),
            scaling_policies: cdktn.listMapper(ccFleetScalingPolicyPropertyToTerraform, false)(this._scalingPolicies.internalValue),
            script_id: cdktn.stringToTerraform(this._scriptId),
            server_launch_parameters: cdktn.stringToTerraform(this._serverLaunchParameters),
            server_launch_path: cdktn.stringToTerraform(this._serverLaunchPath),
            tags: cdktn.listMapper(ccFleetTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            anywhere_configuration: {
                value: ccFleetAnywhereConfigurationPropertyToHclTerraform(this._anywhereConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFleet.AnywhereConfigurationProperty",
            },
            apply_capacity: {
                value: cdktn.stringToHclTerraform(this._applyCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            build_id: {
                value: cdktn.stringToHclTerraform(this._buildId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_configuration: {
                value: ccFleetCertificateConfigurationPropertyToHclTerraform(this._certificateConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFleet.CertificateConfigurationProperty",
            },
            compute_type: {
                value: cdktn.stringToHclTerraform(this._computeType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            desired_ec2_instances: {
                value: cdktn.numberToHclTerraform(this._desiredEc2Instances),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ec2_inbound_permissions: {
                value: cdktn.listMapperHcl(ccFleetIpPermissionPropertyToHclTerraform, false)(this._ec2InboundPermissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFleet.IpPermissionPropertyList",
            },
            ec2_instance_type: {
                value: cdktn.stringToHclTerraform(this._ec2InstanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fleet_type: {
                value: cdktn.stringToHclTerraform(this._fleetType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_role_arn: {
                value: cdktn.stringToHclTerraform(this._instanceRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_role_credentials_provider: {
                value: cdktn.stringToHclTerraform(this._instanceRoleCredentialsProvider),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            locations: {
                value: cdktn.listMapperHcl(ccFleetLocationConfigurationPropertyToHclTerraform, false)(this._locations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFleet.LocationConfigurationPropertyList",
            },
            log_paths: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._logPaths),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            max_size: {
                value: cdktn.numberToHclTerraform(this._maxSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            metric_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._metricGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            min_size: {
                value: cdktn.numberToHclTerraform(this._minSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            new_game_session_protection_policy: {
                value: cdktn.stringToHclTerraform(this._newGameSessionProtectionPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peer_vpc_aws_account_id: {
                value: cdktn.stringToHclTerraform(this._peerVpcAwsAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peer_vpc_id: {
                value: cdktn.stringToHclTerraform(this._peerVpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            player_gateway_configuration: {
                value: ccFleetPlayerGatewayConfigurationPropertyToHclTerraform(this._playerGatewayConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFleet.PlayerGatewayConfigurationProperty",
            },
            player_gateway_mode: {
                value: cdktn.stringToHclTerraform(this._playerGatewayMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_creation_limit_policy: {
                value: ccFleetResourceCreationLimitPolicyPropertyToHclTerraform(this._resourceCreationLimitPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFleet.ResourceCreationLimitPolicyProperty",
            },
            runtime_configuration: {
                value: ccFleetRuntimeConfigurationPropertyToHclTerraform(this._runtimeConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFleet.RuntimeConfigurationProperty",
            },
            scaling_policies: {
                value: cdktn.listMapperHcl(ccFleetScalingPolicyPropertyToHclTerraform, false)(this._scalingPolicies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFleet.ScalingPolicyPropertyList",
            },
            script_id: {
                value: cdktn.stringToHclTerraform(this._scriptId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_launch_parameters: {
                value: cdktn.stringToHclTerraform(this._serverLaunchParameters),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_launch_path: {
                value: cdktn.stringToHclTerraform(this._serverLaunchPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFleetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFleet.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFleetAnywhereConfigurationPropertyToTerraform(struct?: CcFleet.AnywhereConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cost: cdktn.stringToTerraform(struct!.cost),
    }
}


export function ccFleetAnywhereConfigurationPropertyToHclTerraform(struct?: CcFleet.AnywhereConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cost: {
            value: cdktn.stringToHclTerraform(struct!.cost),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetCertificateConfigurationPropertyToTerraform(struct?: CcFleet.CertificateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_type: cdktn.stringToTerraform(struct!.certificateType),
    }
}


export function ccFleetCertificateConfigurationPropertyToHclTerraform(struct?: CcFleet.CertificateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_type: {
            value: cdktn.stringToHclTerraform(struct!.certificateType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetIpPermissionPropertyToTerraform(struct?: CcFleet.IpPermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        ip_range: cdktn.stringToTerraform(struct!.ipRange),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccFleetIpPermissionPropertyToHclTerraform(struct?: CcFleet.IpPermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ip_range: {
            value: cdktn.stringToHclTerraform(struct!.ipRange),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetManagedCapacityConfigurationPropertyToTerraform(struct?: CcFleet.ManagedCapacityConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scale_in_after_inactivity_minutes: cdktn.numberToTerraform(struct!.scaleInAfterInactivityMinutes),
        zero_capacity_strategy: cdktn.stringToTerraform(struct!.zeroCapacityStrategy),
    }
}


export function ccFleetManagedCapacityConfigurationPropertyToHclTerraform(struct?: CcFleet.ManagedCapacityConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scale_in_after_inactivity_minutes: {
            value: cdktn.numberToHclTerraform(struct!.scaleInAfterInactivityMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        zero_capacity_strategy: {
            value: cdktn.stringToHclTerraform(struct!.zeroCapacityStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetLocationCapacityPropertyToTerraform(struct?: CcFleet.LocationCapacityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        desired_ec2_instances: cdktn.numberToTerraform(struct!.desiredEc2Instances),
        managed_capacity_configuration: ccFleetManagedCapacityConfigurationPropertyToTerraform(struct!.managedCapacityConfiguration),
        max_size: cdktn.numberToTerraform(struct!.maxSize),
        min_size: cdktn.numberToTerraform(struct!.minSize),
    }
}


export function ccFleetLocationCapacityPropertyToHclTerraform(struct?: CcFleet.LocationCapacityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        desired_ec2_instances: {
            value: cdktn.numberToHclTerraform(struct!.desiredEc2Instances),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        managed_capacity_configuration: {
            value: ccFleetManagedCapacityConfigurationPropertyToHclTerraform(struct!.managedCapacityConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedCapacityConfigurationProperty",
        },
        max_size: {
            value: cdktn.numberToHclTerraform(struct!.maxSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_size: {
            value: cdktn.numberToHclTerraform(struct!.minSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetLocationConfigurationPropertyToTerraform(struct?: CcFleet.LocationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        location: cdktn.stringToTerraform(struct!.location),
        location_capacity: ccFleetLocationCapacityPropertyToTerraform(struct!.locationCapacity),
        player_gateway_status: cdktn.stringToTerraform(struct!.playerGatewayStatus),
    }
}


export function ccFleetLocationConfigurationPropertyToHclTerraform(struct?: CcFleet.LocationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        location: {
            value: cdktn.stringToHclTerraform(struct!.location),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        location_capacity: {
            value: ccFleetLocationCapacityPropertyToHclTerraform(struct!.locationCapacity),
            isBlock: true,
            type: "struct",
            storageClassType: "LocationCapacityProperty",
        },
        player_gateway_status: {
            value: cdktn.stringToHclTerraform(struct!.playerGatewayStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetPlayerGatewayConfigurationPropertyToTerraform(struct?: CcFleet.PlayerGatewayConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        game_server_ip_protocol_supported: cdktn.stringToTerraform(struct!.gameServerIpProtocolSupported),
    }
}


export function ccFleetPlayerGatewayConfigurationPropertyToHclTerraform(struct?: CcFleet.PlayerGatewayConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        game_server_ip_protocol_supported: {
            value: cdktn.stringToHclTerraform(struct!.gameServerIpProtocolSupported),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetResourceCreationLimitPolicyPropertyToTerraform(struct?: CcFleet.ResourceCreationLimitPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        new_game_sessions_per_creator: cdktn.numberToTerraform(struct!.newGameSessionsPerCreator),
        policy_period_in_minutes: cdktn.numberToTerraform(struct!.policyPeriodInMinutes),
    }
}


export function ccFleetResourceCreationLimitPolicyPropertyToHclTerraform(struct?: CcFleet.ResourceCreationLimitPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        new_game_sessions_per_creator: {
            value: cdktn.numberToHclTerraform(struct!.newGameSessionsPerCreator),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        policy_period_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.policyPeriodInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetServerProcessPropertyToTerraform(struct?: CcFleet.ServerProcessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        concurrent_executions: cdktn.numberToTerraform(struct!.concurrentExecutions),
        launch_path: cdktn.stringToTerraform(struct!.launchPath),
        parameters: cdktn.stringToTerraform(struct!.parameters),
    }
}


export function ccFleetServerProcessPropertyToHclTerraform(struct?: CcFleet.ServerProcessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        concurrent_executions: {
            value: cdktn.numberToHclTerraform(struct!.concurrentExecutions),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        launch_path: {
            value: cdktn.stringToHclTerraform(struct!.launchPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameters: {
            value: cdktn.stringToHclTerraform(struct!.parameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetRuntimeConfigurationPropertyToTerraform(struct?: CcFleet.RuntimeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        game_session_activation_timeout_seconds: cdktn.numberToTerraform(struct!.gameSessionActivationTimeoutSeconds),
        max_concurrent_game_session_activations: cdktn.numberToTerraform(struct!.maxConcurrentGameSessionActivations),
        server_processes: cdktn.listMapper(ccFleetServerProcessPropertyToTerraform, false)(struct!.serverProcesses),
    }
}


export function ccFleetRuntimeConfigurationPropertyToHclTerraform(struct?: CcFleet.RuntimeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        game_session_activation_timeout_seconds: {
            value: cdktn.numberToHclTerraform(struct!.gameSessionActivationTimeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_concurrent_game_session_activations: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrentGameSessionActivations),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_processes: {
            value: cdktn.listMapperHcl(ccFleetServerProcessPropertyToHclTerraform, false)(struct!.serverProcesses),
            isBlock: true,
            type: "list",
            storageClassType: "ServerProcessPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetTargetConfigurationPropertyToTerraform(struct?: CcFleet.TargetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccFleetTargetConfigurationPropertyToHclTerraform(struct?: CcFleet.TargetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_value: {
            value: cdktn.numberToHclTerraform(struct!.targetValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetScalingPolicyPropertyToTerraform(struct?: CcFleet.ScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
        evaluation_periods: cdktn.numberToTerraform(struct!.evaluationPeriods),
        location: cdktn.stringToTerraform(struct!.location),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        name: cdktn.stringToTerraform(struct!.name),
        policy_type: cdktn.stringToTerraform(struct!.policyType),
        scaling_adjustment: cdktn.numberToTerraform(struct!.scalingAdjustment),
        scaling_adjustment_type: cdktn.stringToTerraform(struct!.scalingAdjustmentType),
        status: cdktn.stringToTerraform(struct!.status),
        target_configuration: ccFleetTargetConfigurationPropertyToTerraform(struct!.targetConfiguration),
        threshold: cdktn.numberToTerraform(struct!.threshold),
        update_status: cdktn.stringToTerraform(struct!.updateStatus),
    }
}


export function ccFleetScalingPolicyPropertyToHclTerraform(struct?: CcFleet.ScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison_operator: {
            value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        evaluation_periods: {
            value: cdktn.numberToHclTerraform(struct!.evaluationPeriods),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        location: {
            value: cdktn.stringToHclTerraform(struct!.location),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
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
        policy_type: {
            value: cdktn.stringToHclTerraform(struct!.policyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scaling_adjustment: {
            value: cdktn.numberToHclTerraform(struct!.scalingAdjustment),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scaling_adjustment_type: {
            value: cdktn.stringToHclTerraform(struct!.scalingAdjustmentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_configuration: {
            value: ccFleetTargetConfigurationPropertyToHclTerraform(struct!.targetConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetConfigurationProperty",
        },
        threshold: {
            value: cdktn.numberToHclTerraform(struct!.threshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        update_status: {
            value: cdktn.stringToHclTerraform(struct!.updateStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetTagPropertyToTerraform(struct?: CcFleet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFleetTagPropertyToHclTerraform(struct?: CcFleet.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFleet {
export interface AnywhereConfigurationProperty {
    /**
    * Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#cost CcFleet#cost}
    */
    readonly cost?: string;
}
export class AnywhereConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnywhereConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cost !== undefined) {
            hasAnyValues = true;
            internalValueResult.cost = this._cost;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnywhereConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cost = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cost = value.cost;
        }
    }

    // cost - computed: true, optional: true, required: false
    private _cost?: string; 
    public get cost() {
        return this.getStringAttribute('cost');
    }
    public set cost(value: string) {
        this._cost = value;
    }
    public resetCost() {
        this._cost = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get costInput() {
        return this._cost;
    }
}
export interface CertificateConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#certificate_type CcFleet#certificate_type}
    */
    readonly certificateType?: string;
}
export class CertificateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CertificateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateType !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateType = this._certificateType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CertificateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateType = value.certificateType;
        }
    }

    // certificate_type - computed: true, optional: true, required: false
    private _certificateType?: string; 
    public get certificateType() {
        return this.getStringAttribute('certificate_type');
    }
    public set certificateType(value: string) {
        this._certificateType = value;
    }
    public resetCertificateType() {
        this._certificateType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateTypeInput() {
        return this._certificateType;
    }
}
export interface IpPermissionProperty {
    /**
    * A starting value for a range of allowed port numbers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#from_port CcFleet#from_port}
    */
    readonly fromPort?: number;
    /**
    * A range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#ip_range CcFleet#ip_range}
    */
    readonly ipRange?: string;
    /**
    * The network communication protocol used by the fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#protocol CcFleet#protocol}
    */
    readonly protocol?: string;
    /**
    * An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#to_port CcFleet#to_port}
    */
    readonly toPort?: number;
}
export class IpPermissionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IpPermissionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._ipRange !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipRange = this._ipRange;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IpPermissionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._ipRange = undefined;
            this._protocol = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._ipRange = value.ipRange;
            this._protocol = value.protocol;
            this._toPort = value.toPort;
        }
    }

    // from_port - computed: true, optional: true, required: false
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    public resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // ip_range - computed: true, optional: true, required: false
    private _ipRange?: string; 
    public get ipRange() {
        return this.getStringAttribute('ip_range');
    }
    public set ipRange(value: string) {
        this._ipRange = value;
    }
    public resetIpRange() {
        this._ipRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipRangeInput() {
        return this._ipRange;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // to_port - computed: true, optional: true, required: false
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    public resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }
}

export class IpPermissionPropertyList extends cdktn.ComplexList {
    public internalValue? : IpPermissionProperty[] | cdktn.IResolvable

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
    public get(index: number): IpPermissionPropertyOutputReference {
        return new IpPermissionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ManagedCapacityConfigurationProperty {
    /**
    * Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#scale_in_after_inactivity_minutes CcFleet#scale_in_after_inactivity_minutes}
    */
    readonly scaleInAfterInactivityMinutes?: number;
    /**
    * The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity. Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#zero_capacity_strategy CcFleet#zero_capacity_strategy}
    */
    readonly zeroCapacityStrategy?: string;
}
export class ManagedCapacityConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedCapacityConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scaleInAfterInactivityMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInAfterInactivityMinutes = this._scaleInAfterInactivityMinutes;
        }
        if (this._zeroCapacityStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.zeroCapacityStrategy = this._zeroCapacityStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedCapacityConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scaleInAfterInactivityMinutes = undefined;
            this._zeroCapacityStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scaleInAfterInactivityMinutes = value.scaleInAfterInactivityMinutes;
            this._zeroCapacityStrategy = value.zeroCapacityStrategy;
        }
    }

    // scale_in_after_inactivity_minutes - computed: true, optional: true, required: false
    private _scaleInAfterInactivityMinutes?: number; 
    public get scaleInAfterInactivityMinutes() {
        return this.getNumberAttribute('scale_in_after_inactivity_minutes');
    }
    public set scaleInAfterInactivityMinutes(value: number) {
        this._scaleInAfterInactivityMinutes = value;
    }
    public resetScaleInAfterInactivityMinutes() {
        this._scaleInAfterInactivityMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInAfterInactivityMinutesInput() {
        return this._scaleInAfterInactivityMinutes;
    }

    // zero_capacity_strategy - computed: true, optional: true, required: false
    private _zeroCapacityStrategy?: string; 
    public get zeroCapacityStrategy() {
        return this.getStringAttribute('zero_capacity_strategy');
    }
    public set zeroCapacityStrategy(value: string) {
        this._zeroCapacityStrategy = value;
    }
    public resetZeroCapacityStrategy() {
        this._zeroCapacityStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zeroCapacityStrategyInput() {
        return this._zeroCapacityStrategy;
    }
}
export interface LocationCapacityProperty {
    /**
    * Defaults to MinSize if not defined. The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#desired_ec2_instances CcFleet#desired_ec2_instances}
    */
    readonly desiredEc2Instances?: number;
    /**
    * Configuration options for Amazon GameLift Servers-managed capacity behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#managed_capacity_configuration CcFleet#managed_capacity_configuration}
    */
    readonly managedCapacityConfiguration?: ManagedCapacityConfigurationProperty;
    /**
    * The maximum value that is allowed for the fleet's instance count for a location. When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#max_size CcFleet#max_size}
    */
    readonly maxSize?: number;
    /**
    * The minimum value allowed for the fleet's instance count for a location. When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#min_size CcFleet#min_size}
    */
    readonly minSize?: number;
}
export class LocationCapacityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LocationCapacityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._desiredEc2Instances !== undefined) {
            hasAnyValues = true;
            internalValueResult.desiredEc2Instances = this._desiredEc2Instances;
        }
        if (this._managedCapacityConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedCapacityConfiguration = this._managedCapacityConfiguration?.internalValue;
        }
        if (this._maxSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxSize = this._maxSize;
        }
        if (this._minSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.minSize = this._minSize;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocationCapacityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._desiredEc2Instances = undefined;
            this._managedCapacityConfiguration.internalValue = undefined;
            this._maxSize = undefined;
            this._minSize = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._desiredEc2Instances = value.desiredEc2Instances;
            this._managedCapacityConfiguration.internalValue = value.managedCapacityConfiguration;
            this._maxSize = value.maxSize;
            this._minSize = value.minSize;
        }
    }

    // desired_ec2_instances - computed: true, optional: true, required: false
    private _desiredEc2Instances?: number; 
    public get desiredEc2Instances() {
        return this.getNumberAttribute('desired_ec2_instances');
    }
    public set desiredEc2Instances(value: number) {
        this._desiredEc2Instances = value;
    }
    public resetDesiredEc2Instances() {
        this._desiredEc2Instances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredEc2InstancesInput() {
        return this._desiredEc2Instances;
    }

    // managed_capacity_configuration - computed: true, optional: true, required: false
    private _managedCapacityConfiguration = new ManagedCapacityConfigurationPropertyOutputReference(this, "managed_capacity_configuration");
    public get managedCapacityConfiguration() {
        return this._managedCapacityConfiguration;
    }
    public putManagedCapacityConfiguration(value: ManagedCapacityConfigurationProperty) {
        this._managedCapacityConfiguration.internalValue = value;
    }
    public resetManagedCapacityConfiguration() {
        this._managedCapacityConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedCapacityConfigurationInput() {
        return this._managedCapacityConfiguration.internalValue;
    }

    // max_size - computed: true, optional: true, required: false
    private _maxSize?: number; 
    public get maxSize() {
        return this.getNumberAttribute('max_size');
    }
    public set maxSize(value: number) {
        this._maxSize = value;
    }
    public resetMaxSize() {
        this._maxSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSizeInput() {
        return this._maxSize;
    }

    // min_size - computed: true, optional: true, required: false
    private _minSize?: number; 
    public get minSize() {
        return this.getNumberAttribute('min_size');
    }
    public set minSize(value: number) {
        this._minSize = value;
    }
    public resetMinSize() {
        this._minSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minSizeInput() {
        return this._minSize;
    }
}
export interface LocationConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#location CcFleet#location}
    */
    readonly location?: string;
    /**
    * Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#location_capacity CcFleet#location_capacity}
    */
    readonly locationCapacity?: LocationCapacityProperty;
    /**
    * The player gateway status for the location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#player_gateway_status CcFleet#player_gateway_status}
    */
    readonly playerGatewayStatus?: string;
}
export class LocationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LocationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._location !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._locationCapacity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.locationCapacity = this._locationCapacity?.internalValue;
        }
        if (this._playerGatewayStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.playerGatewayStatus = this._playerGatewayStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._location = undefined;
            this._locationCapacity.internalValue = undefined;
            this._playerGatewayStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._location = value.location;
            this._locationCapacity.internalValue = value.locationCapacity;
            this._playerGatewayStatus = value.playerGatewayStatus;
        }
    }

    // location - computed: true, optional: true, required: false
    private _location?: string; 
    public get location() {
        return this.getStringAttribute('location');
    }
    public set location(value: string) {
        this._location = value;
    }
    public resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location;
    }

    // location_capacity - computed: true, optional: true, required: false
    private _locationCapacity = new LocationCapacityPropertyOutputReference(this, "location_capacity");
    public get locationCapacity() {
        return this._locationCapacity;
    }
    public putLocationCapacity(value: LocationCapacityProperty) {
        this._locationCapacity.internalValue = value;
    }
    public resetLocationCapacity() {
        this._locationCapacity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationCapacityInput() {
        return this._locationCapacity.internalValue;
    }

    // player_gateway_status - computed: true, optional: true, required: false
    private _playerGatewayStatus?: string; 
    public get playerGatewayStatus() {
        return this.getStringAttribute('player_gateway_status');
    }
    public set playerGatewayStatus(value: string) {
        this._playerGatewayStatus = value;
    }
    public resetPlayerGatewayStatus() {
        this._playerGatewayStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get playerGatewayStatusInput() {
        return this._playerGatewayStatus;
    }
}

export class LocationConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : LocationConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): LocationConfigurationPropertyOutputReference {
        return new LocationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PlayerGatewayConfigurationProperty {
    /**
    * The IP protocol supported by the game server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#game_server_ip_protocol_supported CcFleet#game_server_ip_protocol_supported}
    */
    readonly gameServerIpProtocolSupported?: string;
}
export class PlayerGatewayConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PlayerGatewayConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gameServerIpProtocolSupported !== undefined) {
            hasAnyValues = true;
            internalValueResult.gameServerIpProtocolSupported = this._gameServerIpProtocolSupported;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PlayerGatewayConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gameServerIpProtocolSupported = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gameServerIpProtocolSupported = value.gameServerIpProtocolSupported;
        }
    }

    // game_server_ip_protocol_supported - computed: true, optional: true, required: false
    private _gameServerIpProtocolSupported?: string; 
    public get gameServerIpProtocolSupported() {
        return this.getStringAttribute('game_server_ip_protocol_supported');
    }
    public set gameServerIpProtocolSupported(value: string) {
        this._gameServerIpProtocolSupported = value;
    }
    public resetGameServerIpProtocolSupported() {
        this._gameServerIpProtocolSupported = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gameServerIpProtocolSupportedInput() {
        return this._gameServerIpProtocolSupported;
    }
}
export interface ResourceCreationLimitPolicyProperty {
    /**
    * The maximum number of game sessions that an individual can create during the policy period.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#new_game_sessions_per_creator CcFleet#new_game_sessions_per_creator}
    */
    readonly newGameSessionsPerCreator?: number;
    /**
    * The time span used in evaluating the resource creation limit policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#policy_period_in_minutes CcFleet#policy_period_in_minutes}
    */
    readonly policyPeriodInMinutes?: number;
}
export class ResourceCreationLimitPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceCreationLimitPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._newGameSessionsPerCreator !== undefined) {
            hasAnyValues = true;
            internalValueResult.newGameSessionsPerCreator = this._newGameSessionsPerCreator;
        }
        if (this._policyPeriodInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyPeriodInMinutes = this._policyPeriodInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceCreationLimitPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._newGameSessionsPerCreator = undefined;
            this._policyPeriodInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._newGameSessionsPerCreator = value.newGameSessionsPerCreator;
            this._policyPeriodInMinutes = value.policyPeriodInMinutes;
        }
    }

    // new_game_sessions_per_creator - computed: true, optional: true, required: false
    private _newGameSessionsPerCreator?: number; 
    public get newGameSessionsPerCreator() {
        return this.getNumberAttribute('new_game_sessions_per_creator');
    }
    public set newGameSessionsPerCreator(value: number) {
        this._newGameSessionsPerCreator = value;
    }
    public resetNewGameSessionsPerCreator() {
        this._newGameSessionsPerCreator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get newGameSessionsPerCreatorInput() {
        return this._newGameSessionsPerCreator;
    }

    // policy_period_in_minutes - computed: true, optional: true, required: false
    private _policyPeriodInMinutes?: number; 
    public get policyPeriodInMinutes() {
        return this.getNumberAttribute('policy_period_in_minutes');
    }
    public set policyPeriodInMinutes(value: number) {
        this._policyPeriodInMinutes = value;
    }
    public resetPolicyPeriodInMinutes() {
        this._policyPeriodInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyPeriodInMinutesInput() {
        return this._policyPeriodInMinutes;
    }
}
export interface ServerProcessProperty {
    /**
    * The number of server processes that use this configuration to run concurrently on an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#concurrent_executions CcFleet#concurrent_executions}
    */
    readonly concurrentExecutions?: number;
    /**
    * The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function. Game builds and Realtime scripts are installed on instances at the root:
    * 
    * Windows (for custom game builds only): C:\game. Example: "C:\game\MyGame\server.exe"
    * 
    * Linux: /local/game. Examples: "/local/game/MyGame/server.exe" or "/local/game/MyRealtimeScript.js"
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#launch_path CcFleet#launch_path}
    */
    readonly launchPath?: string;
    /**
    * An optional list of parameters to pass to the server executable or Realtime script on launch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#parameters CcFleet#parameters}
    */
    readonly parameters?: string;
}
export class ServerProcessPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ServerProcessProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._concurrentExecutions !== undefined) {
            hasAnyValues = true;
            internalValueResult.concurrentExecutions = this._concurrentExecutions;
        }
        if (this._launchPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchPath = this._launchPath;
        }
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerProcessProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._concurrentExecutions = undefined;
            this._launchPath = undefined;
            this._parameters = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._concurrentExecutions = value.concurrentExecutions;
            this._launchPath = value.launchPath;
            this._parameters = value.parameters;
        }
    }

    // concurrent_executions - computed: true, optional: true, required: false
    private _concurrentExecutions?: number; 
    public get concurrentExecutions() {
        return this.getNumberAttribute('concurrent_executions');
    }
    public set concurrentExecutions(value: number) {
        this._concurrentExecutions = value;
    }
    public resetConcurrentExecutions() {
        this._concurrentExecutions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get concurrentExecutionsInput() {
        return this._concurrentExecutions;
    }

    // launch_path - computed: true, optional: true, required: false
    private _launchPath?: string; 
    public get launchPath() {
        return this.getStringAttribute('launch_path');
    }
    public set launchPath(value: string) {
        this._launchPath = value;
    }
    public resetLaunchPath() {
        this._launchPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchPathInput() {
        return this._launchPath;
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: string; 
    public get parameters() {
        return this.getStringAttribute('parameters');
    }
    public set parameters(value: string) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }
}

export class ServerProcessPropertyList extends cdktn.ComplexList {
    public internalValue? : ServerProcessProperty[] | cdktn.IResolvable

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
    public get(index: number): ServerProcessPropertyOutputReference {
        return new ServerProcessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RuntimeConfigurationProperty {
    /**
    * The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING. If the game session is not active before the timeout, activation is terminated and the game session status is changed to TERMINATED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#game_session_activation_timeout_seconds CcFleet#game_session_activation_timeout_seconds}
    */
    readonly gameSessionActivationTimeoutSeconds?: number;
    /**
    * The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously. This setting limits the amount of instance resources that can be used for new game activations at any one time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#max_concurrent_game_session_activations CcFleet#max_concurrent_game_session_activations}
    */
    readonly maxConcurrentGameSessionActivations?: number;
    /**
    * A collection of server process configurations that describe which server processes to run on each instance in a fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#server_processes CcFleet#server_processes}
    */
    readonly serverProcesses?: ServerProcessProperty[] | cdktn.IResolvable;
}
export class RuntimeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuntimeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gameSessionActivationTimeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.gameSessionActivationTimeoutSeconds = this._gameSessionActivationTimeoutSeconds;
        }
        if (this._maxConcurrentGameSessionActivations !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentGameSessionActivations = this._maxConcurrentGameSessionActivations;
        }
        if (this._serverProcesses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverProcesses = this._serverProcesses?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuntimeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gameSessionActivationTimeoutSeconds = undefined;
            this._maxConcurrentGameSessionActivations = undefined;
            this._serverProcesses.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gameSessionActivationTimeoutSeconds = value.gameSessionActivationTimeoutSeconds;
            this._maxConcurrentGameSessionActivations = value.maxConcurrentGameSessionActivations;
            this._serverProcesses.internalValue = value.serverProcesses;
        }
    }

    // game_session_activation_timeout_seconds - computed: true, optional: true, required: false
    private _gameSessionActivationTimeoutSeconds?: number; 
    public get gameSessionActivationTimeoutSeconds() {
        return this.getNumberAttribute('game_session_activation_timeout_seconds');
    }
    public set gameSessionActivationTimeoutSeconds(value: number) {
        this._gameSessionActivationTimeoutSeconds = value;
    }
    public resetGameSessionActivationTimeoutSeconds() {
        this._gameSessionActivationTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gameSessionActivationTimeoutSecondsInput() {
        return this._gameSessionActivationTimeoutSeconds;
    }

    // max_concurrent_game_session_activations - computed: true, optional: true, required: false
    private _maxConcurrentGameSessionActivations?: number; 
    public get maxConcurrentGameSessionActivations() {
        return this.getNumberAttribute('max_concurrent_game_session_activations');
    }
    public set maxConcurrentGameSessionActivations(value: number) {
        this._maxConcurrentGameSessionActivations = value;
    }
    public resetMaxConcurrentGameSessionActivations() {
        this._maxConcurrentGameSessionActivations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentGameSessionActivationsInput() {
        return this._maxConcurrentGameSessionActivations;
    }

    // server_processes - computed: true, optional: true, required: false
    private _serverProcesses = new ServerProcessPropertyList(this, "server_processes", false);
    public get serverProcesses() {
        return this._serverProcesses;
    }
    public putServerProcesses(value: ServerProcessProperty[] | cdktn.IResolvable) {
        this._serverProcesses.internalValue = value;
    }
    public resetServerProcesses() {
        this._serverProcesses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverProcessesInput() {
        return this._serverProcesses.internalValue;
    }
}
export interface TargetConfigurationProperty {
    /**
    * Desired value to use with a target-based scaling policy. The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#target_value CcFleet#target_value}
    */
    readonly targetValue?: number;
}
export class TargetConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetValue = value.targetValue;
        }
    }

    // target_value - computed: true, optional: true, required: false
    private _targetValue?: number; 
    public get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    public set targetValue(value: number) {
        this._targetValue = value;
    }
    public resetTargetValue() {
        this._targetValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetValueInput() {
        return this._targetValue;
    }
}
export interface ScalingPolicyProperty {
    /**
    * Comparison operator to use when measuring a metric against the threshold value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#comparison_operator CcFleet#comparison_operator}
    */
    readonly comparisonOperator?: string;
    /**
    * Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#evaluation_periods CcFleet#evaluation_periods}
    */
    readonly evaluationPeriods?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#location CcFleet#location}
    */
    readonly location?: string;
    /**
    * Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#metric_name CcFleet#metric_name}
    */
    readonly metricName?: string;
    /**
    * A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#name CcFleet#name}
    */
    readonly name?: string;
    /**
    * The type of scaling policy to create. For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#policy_type CcFleet#policy_type}
    */
    readonly policyType?: string;
    /**
    * Amount of adjustment to make, based on the scaling adjustment type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#scaling_adjustment CcFleet#scaling_adjustment}
    */
    readonly scalingAdjustment?: number;
    /**
    * The type of adjustment to make to a fleet's instance count.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#scaling_adjustment_type CcFleet#scaling_adjustment_type}
    */
    readonly scalingAdjustmentType?: string;
    /**
    * Current status of the scaling policy. The scaling policy can be in force only when in an ACTIVE status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#status CcFleet#status}
    */
    readonly status?: string;
    /**
    * An object that contains settings for a target-based scaling policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#target_configuration CcFleet#target_configuration}
    */
    readonly targetConfiguration?: TargetConfigurationProperty;
    /**
    * Metric value used to trigger a scaling event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#threshold CcFleet#threshold}
    */
    readonly threshold?: number;
    /**
    * The current status of the fleet's scaling policies in a requested fleet location. The status PENDING_UPDATE indicates that an update was requested for the fleet but has not yet been completed for the location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#update_status CcFleet#update_status}
    */
    readonly updateStatus?: string;
}
export class ScalingPolicyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ScalingPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparisonOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._evaluationPeriods !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluationPeriods = this._evaluationPeriods;
        }
        if (this._location !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._policyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyType = this._policyType;
        }
        if (this._scalingAdjustment !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingAdjustment = this._scalingAdjustment;
        }
        if (this._scalingAdjustmentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingAdjustmentType = this._scalingAdjustmentType;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._targetConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetConfiguration = this._targetConfiguration?.internalValue;
        }
        if (this._threshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.threshold = this._threshold;
        }
        if (this._updateStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateStatus = this._updateStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScalingPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparisonOperator = undefined;
            this._evaluationPeriods = undefined;
            this._location = undefined;
            this._metricName = undefined;
            this._name = undefined;
            this._policyType = undefined;
            this._scalingAdjustment = undefined;
            this._scalingAdjustmentType = undefined;
            this._status = undefined;
            this._targetConfiguration.internalValue = undefined;
            this._threshold = undefined;
            this._updateStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparisonOperator = value.comparisonOperator;
            this._evaluationPeriods = value.evaluationPeriods;
            this._location = value.location;
            this._metricName = value.metricName;
            this._name = value.name;
            this._policyType = value.policyType;
            this._scalingAdjustment = value.scalingAdjustment;
            this._scalingAdjustmentType = value.scalingAdjustmentType;
            this._status = value.status;
            this._targetConfiguration.internalValue = value.targetConfiguration;
            this._threshold = value.threshold;
            this._updateStatus = value.updateStatus;
        }
    }

    // comparison_operator - computed: true, optional: true, required: false
    private _comparisonOperator?: string; 
    public get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    public set comparisonOperator(value: string) {
        this._comparisonOperator = value;
    }
    public resetComparisonOperator() {
        this._comparisonOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonOperatorInput() {
        return this._comparisonOperator;
    }

    // evaluation_periods - computed: true, optional: true, required: false
    private _evaluationPeriods?: number; 
    public get evaluationPeriods() {
        return this.getNumberAttribute('evaluation_periods');
    }
    public set evaluationPeriods(value: number) {
        this._evaluationPeriods = value;
    }
    public resetEvaluationPeriods() {
        this._evaluationPeriods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluationPeriodsInput() {
        return this._evaluationPeriods;
    }

    // location - computed: true, optional: true, required: false
    private _location?: string; 
    public get location() {
        return this.getStringAttribute('location');
    }
    public set location(value: string) {
        this._location = value;
    }
    public resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location;
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
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

    // policy_type - computed: true, optional: true, required: false
    private _policyType?: string; 
    public get policyType() {
        return this.getStringAttribute('policy_type');
    }
    public set policyType(value: string) {
        this._policyType = value;
    }
    public resetPolicyType() {
        this._policyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTypeInput() {
        return this._policyType;
    }

    // scaling_adjustment - computed: true, optional: true, required: false
    private _scalingAdjustment?: number; 
    public get scalingAdjustment() {
        return this.getNumberAttribute('scaling_adjustment');
    }
    public set scalingAdjustment(value: number) {
        this._scalingAdjustment = value;
    }
    public resetScalingAdjustment() {
        this._scalingAdjustment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingAdjustmentInput() {
        return this._scalingAdjustment;
    }

    // scaling_adjustment_type - computed: true, optional: true, required: false
    private _scalingAdjustmentType?: string; 
    public get scalingAdjustmentType() {
        return this.getStringAttribute('scaling_adjustment_type');
    }
    public set scalingAdjustmentType(value: string) {
        this._scalingAdjustmentType = value;
    }
    public resetScalingAdjustmentType() {
        this._scalingAdjustmentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingAdjustmentTypeInput() {
        return this._scalingAdjustmentType;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // target_configuration - computed: true, optional: true, required: false
    private _targetConfiguration = new TargetConfigurationPropertyOutputReference(this, "target_configuration");
    public get targetConfiguration() {
        return this._targetConfiguration;
    }
    public putTargetConfiguration(value: TargetConfigurationProperty) {
        this._targetConfiguration.internalValue = value;
    }
    public resetTargetConfiguration() {
        this._targetConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetConfigurationInput() {
        return this._targetConfiguration.internalValue;
    }

    // threshold - computed: true, optional: true, required: false
    private _threshold?: number; 
    public get threshold() {
        return this.getNumberAttribute('threshold');
    }
    public set threshold(value: number) {
        this._threshold = value;
    }
    public resetThreshold() {
        this._threshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdInput() {
        return this._threshold;
    }

    // update_status - computed: true, optional: true, required: false
    private _updateStatus?: string; 
    public get updateStatus() {
        return this.getStringAttribute('update_status');
    }
    public set updateStatus(value: string) {
        this._updateStatus = value;
    }
    public resetUpdateStatus() {
        this._updateStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateStatusInput() {
        return this._updateStatus;
    }
}

export class ScalingPolicyPropertyList extends cdktn.ComplexList {
    public internalValue? : ScalingPolicyProperty[] | cdktn.IResolvable

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
    public get(index: number): ScalingPolicyPropertyOutputReference {
        return new ScalingPolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#key CcFleet#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_fleet#value CcFleet#value}
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
}
