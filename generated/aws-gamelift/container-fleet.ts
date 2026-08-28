// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContainerFleetProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#billing_type CcContainerFleet#billing_type}
    */
    readonly billingType?: string;
    /**
    * Provides details about how to drain old tasks and replace them with new updated tasks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#deployment_configuration CcContainerFleet#deployment_configuration}
    */
    readonly deploymentConfiguration?: CcContainerFleet.DeploymentConfigurationProperty;
    /**
    * A human-readable description of a fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#description CcContainerFleet#description}
    */
    readonly description?: string;
    /**
    * A unique identifier for an AWS IAM role that manages access to your AWS services. Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#fleet_role_arn CcContainerFleet#fleet_role_arn}
    */
    readonly fleetRoleArn: string;
    /**
    * The name of the container group definition that will be created per game server. You must specify GAME_SERVER container group. You have the option to also specify one PER_INSTANCE container group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#game_server_container_group_definition_name CcContainerFleet#game_server_container_group_definition_name}
    */
    readonly gameServerContainerGroupDefinitionName?: string;
    /**
    * The number of desired game server container groups per instance, a number between 1-5000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#game_server_container_groups_per_instance CcContainerFleet#game_server_container_groups_per_instance}
    */
    readonly gameServerContainerGroupsPerInstance?: number;
    /**
    * A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#game_session_creation_limit_policy CcContainerFleet#game_session_creation_limit_policy}
    */
    readonly gameSessionCreationLimitPolicy?: CcContainerFleet.GameSessionCreationLimitPolicyProperty;
    /**
    * Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#instance_connection_port_range CcContainerFleet#instance_connection_port_range}
    */
    readonly instanceConnectionPortRange?: CcContainerFleet.ConnectionPortRangeProperty;
    /**
    * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#instance_inbound_permissions CcContainerFleet#instance_inbound_permissions}
    */
    readonly instanceInboundPermissions?: CcContainerFleet.IpPermissionProperty[] | cdktn.IResolvable;
    /**
    * The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#instance_type CcContainerFleet#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#locations CcContainerFleet#locations}
    */
    readonly locations?: CcContainerFleet.LocationConfigurationProperty[] | cdktn.IResolvable;
    /**
    * A policy the location and provider of logs from the fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#log_configuration CcContainerFleet#log_configuration}
    */
    readonly logConfiguration?: CcContainerFleet.LogConfigurationProperty;
    /**
    * The name of an Amazon CloudWatch metric group. A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#metric_groups CcContainerFleet#metric_groups}
    */
    readonly metricGroups?: string[];
    /**
    * A game session protection policy to apply to all game sessions hosted on instances in this fleet. When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#new_game_session_protection_policy CcContainerFleet#new_game_session_protection_policy}
    */
    readonly newGameSessionProtectionPolicy?: string;
    /**
    * The name of the container group definition that will be created per instance. This field is optional if you specify GameServerContainerGroupDefinitionName.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#per_instance_container_group_definition_name CcContainerFleet#per_instance_container_group_definition_name}
    */
    readonly perInstanceContainerGroupDefinitionName?: string;
    /**
    * The player gateway mode for the container fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#player_gateway_mode CcContainerFleet#player_gateway_mode}
    */
    readonly playerGatewayMode?: string;
    /**
    * A list of rules that control how a fleet is scaled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#scaling_policies CcContainerFleet#scaling_policies}
    */
    readonly scalingPolicies?: CcContainerFleet.ScalingPolicyProperty[] | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#tags CcContainerFleet#tags}
    */
    readonly tags?: CcContainerFleet.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet awscc_gamelift_container_fleet}
*/
export class CcContainerFleet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_gamelift_container_fleet";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContainerFleet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContainerFleet to import
    * @param importFromId The id of the existing CcContainerFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContainerFleet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_gamelift_container_fleet", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet awscc_gamelift_container_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContainerFleetProps
    */
    public constructor(scope: Construct, id: string, config: CcContainerFleetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_gamelift_container_fleet',
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
        this._billingType = config.billingType;
        this._deploymentConfiguration.internalValue = config.deploymentConfiguration;
        this._description = config.description;
        this._fleetRoleArn = config.fleetRoleArn;
        this._gameServerContainerGroupDefinitionName = config.gameServerContainerGroupDefinitionName;
        this._gameServerContainerGroupsPerInstance = config.gameServerContainerGroupsPerInstance;
        this._gameSessionCreationLimitPolicy.internalValue = config.gameSessionCreationLimitPolicy;
        this._instanceConnectionPortRange.internalValue = config.instanceConnectionPortRange;
        this._instanceInboundPermissions.internalValue = config.instanceInboundPermissions;
        this._instanceType = config.instanceType;
        this._locations.internalValue = config.locations;
        this._logConfiguration.internalValue = config.logConfiguration;
        this._metricGroups = config.metricGroups;
        this._newGameSessionProtectionPolicy = config.newGameSessionProtectionPolicy;
        this._perInstanceContainerGroupDefinitionName = config.perInstanceContainerGroupDefinitionName;
        this._playerGatewayMode = config.playerGatewayMode;
        this._scalingPolicies.internalValue = config.scalingPolicies;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // billing_type - computed: true, optional: true, required: false
    private _billingType?: string; 
    public get billingType() {
        return this.getStringAttribute('billing_type');
    }
    public set billingType(value: string) {
        this._billingType = value;
    }
    public resetBillingType() {
        this._billingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingTypeInput() {
        return this._billingType;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // deployment_configuration - computed: true, optional: true, required: false
    private _deploymentConfiguration = new CcContainerFleet.DeploymentConfigurationPropertyOutputReference(this, "deployment_configuration");
    public get deploymentConfiguration() {
        return this._deploymentConfiguration;
    }
    public putDeploymentConfiguration(value: CcContainerFleet.DeploymentConfigurationProperty) {
        this._deploymentConfiguration.internalValue = value;
    }
    public resetDeploymentConfiguration() {
        this._deploymentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentConfigurationInput() {
        return this._deploymentConfiguration.internalValue;
    }

    // deployment_details - computed: true, optional: false, required: false
    private _deploymentDetails = new CcContainerFleet.DeploymentDetailsPropertyOutputReference(this, "deployment_details");
    public get deploymentDetails() {
        return this._deploymentDetails;
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

    // fleet_arn - computed: true, optional: false, required: false
    public get fleetArn() {
        return this.getStringAttribute('fleet_arn');
    }

    // fleet_id - computed: true, optional: false, required: false
    public get fleetId() {
        return this.getStringAttribute('fleet_id');
    }

    // fleet_role_arn - computed: false, optional: false, required: true
    private _fleetRoleArn?: string; 
    public get fleetRoleArn() {
        return this.getStringAttribute('fleet_role_arn');
    }
    public set fleetRoleArn(value: string) {
        this._fleetRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetRoleArnInput() {
        return this._fleetRoleArn;
    }

    // game_server_container_group_definition_arn - computed: true, optional: false, required: false
    public get gameServerContainerGroupDefinitionArn() {
        return this.getStringAttribute('game_server_container_group_definition_arn');
    }

    // game_server_container_group_definition_name - computed: true, optional: true, required: false
    private _gameServerContainerGroupDefinitionName?: string; 
    public get gameServerContainerGroupDefinitionName() {
        return this.getStringAttribute('game_server_container_group_definition_name');
    }
    public set gameServerContainerGroupDefinitionName(value: string) {
        this._gameServerContainerGroupDefinitionName = value;
    }
    public resetGameServerContainerGroupDefinitionName() {
        this._gameServerContainerGroupDefinitionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gameServerContainerGroupDefinitionNameInput() {
        return this._gameServerContainerGroupDefinitionName;
    }

    // game_server_container_groups_per_instance - computed: true, optional: true, required: false
    private _gameServerContainerGroupsPerInstance?: number; 
    public get gameServerContainerGroupsPerInstance() {
        return this.getNumberAttribute('game_server_container_groups_per_instance');
    }
    public set gameServerContainerGroupsPerInstance(value: number) {
        this._gameServerContainerGroupsPerInstance = value;
    }
    public resetGameServerContainerGroupsPerInstance() {
        this._gameServerContainerGroupsPerInstance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gameServerContainerGroupsPerInstanceInput() {
        return this._gameServerContainerGroupsPerInstance;
    }

    // game_session_creation_limit_policy - computed: true, optional: true, required: false
    private _gameSessionCreationLimitPolicy = new CcContainerFleet.GameSessionCreationLimitPolicyPropertyOutputReference(this, "game_session_creation_limit_policy");
    public get gameSessionCreationLimitPolicy() {
        return this._gameSessionCreationLimitPolicy;
    }
    public putGameSessionCreationLimitPolicy(value: CcContainerFleet.GameSessionCreationLimitPolicyProperty) {
        this._gameSessionCreationLimitPolicy.internalValue = value;
    }
    public resetGameSessionCreationLimitPolicy() {
        this._gameSessionCreationLimitPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gameSessionCreationLimitPolicyInput() {
        return this._gameSessionCreationLimitPolicy.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_connection_port_range - computed: true, optional: true, required: false
    private _instanceConnectionPortRange = new CcContainerFleet.ConnectionPortRangePropertyOutputReference(this, "instance_connection_port_range");
    public get instanceConnectionPortRange() {
        return this._instanceConnectionPortRange;
    }
    public putInstanceConnectionPortRange(value: CcContainerFleet.ConnectionPortRangeProperty) {
        this._instanceConnectionPortRange.internalValue = value;
    }
    public resetInstanceConnectionPortRange() {
        this._instanceConnectionPortRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceConnectionPortRangeInput() {
        return this._instanceConnectionPortRange.internalValue;
    }

    // instance_inbound_permissions - computed: true, optional: true, required: false
    private _instanceInboundPermissions = new CcContainerFleet.IpPermissionPropertyList(this, "instance_inbound_permissions", false);
    public get instanceInboundPermissions() {
        return this._instanceInboundPermissions;
    }
    public putInstanceInboundPermissions(value: CcContainerFleet.IpPermissionProperty[] | cdktn.IResolvable) {
        this._instanceInboundPermissions.internalValue = value;
    }
    public resetInstanceInboundPermissions() {
        this._instanceInboundPermissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInboundPermissionsInput() {
        return this._instanceInboundPermissions.internalValue;
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

    // locations - computed: true, optional: true, required: false
    private _locations = new CcContainerFleet.LocationConfigurationPropertyList(this, "locations", false);
    public get locations() {
        return this._locations;
    }
    public putLocations(value: CcContainerFleet.LocationConfigurationProperty[] | cdktn.IResolvable) {
        this._locations.internalValue = value;
    }
    public resetLocations() {
        this._locations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationsInput() {
        return this._locations.internalValue;
    }

    // log_configuration - computed: true, optional: true, required: false
    private _logConfiguration = new CcContainerFleet.LogConfigurationPropertyOutputReference(this, "log_configuration");
    public get logConfiguration() {
        return this._logConfiguration;
    }
    public putLogConfiguration(value: CcContainerFleet.LogConfigurationProperty) {
        this._logConfiguration.internalValue = value;
    }
    public resetLogConfiguration() {
        this._logConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigurationInput() {
        return this._logConfiguration.internalValue;
    }

    // maximum_game_server_container_groups_per_instance - computed: true, optional: false, required: false
    public get maximumGameServerContainerGroupsPerInstance() {
        return this.getNumberAttribute('maximum_game_server_container_groups_per_instance');
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

    // per_instance_container_group_definition_arn - computed: true, optional: false, required: false
    public get perInstanceContainerGroupDefinitionArn() {
        return this.getStringAttribute('per_instance_container_group_definition_arn');
    }

    // per_instance_container_group_definition_name - computed: true, optional: true, required: false
    private _perInstanceContainerGroupDefinitionName?: string; 
    public get perInstanceContainerGroupDefinitionName() {
        return this.getStringAttribute('per_instance_container_group_definition_name');
    }
    public set perInstanceContainerGroupDefinitionName(value: string) {
        this._perInstanceContainerGroupDefinitionName = value;
    }
    public resetPerInstanceContainerGroupDefinitionName() {
        this._perInstanceContainerGroupDefinitionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perInstanceContainerGroupDefinitionNameInput() {
        return this._perInstanceContainerGroupDefinitionName;
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

    // scaling_policies - computed: true, optional: true, required: false
    private _scalingPolicies = new CcContainerFleet.ScalingPolicyPropertyList(this, "scaling_policies", false);
    public get scalingPolicies() {
        return this._scalingPolicies;
    }
    public putScalingPolicies(value: CcContainerFleet.ScalingPolicyProperty[] | cdktn.IResolvable) {
        this._scalingPolicies.internalValue = value;
    }
    public resetScalingPolicies() {
        this._scalingPolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingPoliciesInput() {
        return this._scalingPolicies.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcContainerFleet.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcContainerFleet.TagProperty[] | cdktn.IResolvable) {
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
            billing_type: cdktn.stringToTerraform(this._billingType),
            deployment_configuration: ccContainerFleetDeploymentConfigurationPropertyToTerraform(this._deploymentConfiguration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            fleet_role_arn: cdktn.stringToTerraform(this._fleetRoleArn),
            game_server_container_group_definition_name: cdktn.stringToTerraform(this._gameServerContainerGroupDefinitionName),
            game_server_container_groups_per_instance: cdktn.numberToTerraform(this._gameServerContainerGroupsPerInstance),
            game_session_creation_limit_policy: ccContainerFleetGameSessionCreationLimitPolicyPropertyToTerraform(this._gameSessionCreationLimitPolicy.internalValue),
            instance_connection_port_range: ccContainerFleetConnectionPortRangePropertyToTerraform(this._instanceConnectionPortRange.internalValue),
            instance_inbound_permissions: cdktn.listMapper(ccContainerFleetIpPermissionPropertyToTerraform, false)(this._instanceInboundPermissions.internalValue),
            instance_type: cdktn.stringToTerraform(this._instanceType),
            locations: cdktn.listMapper(ccContainerFleetLocationConfigurationPropertyToTerraform, false)(this._locations.internalValue),
            log_configuration: ccContainerFleetLogConfigurationPropertyToTerraform(this._logConfiguration.internalValue),
            metric_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._metricGroups),
            new_game_session_protection_policy: cdktn.stringToTerraform(this._newGameSessionProtectionPolicy),
            per_instance_container_group_definition_name: cdktn.stringToTerraform(this._perInstanceContainerGroupDefinitionName),
            player_gateway_mode: cdktn.stringToTerraform(this._playerGatewayMode),
            scaling_policies: cdktn.listMapper(ccContainerFleetScalingPolicyPropertyToTerraform, false)(this._scalingPolicies.internalValue),
            tags: cdktn.listMapper(ccContainerFleetTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            billing_type: {
                value: cdktn.stringToHclTerraform(this._billingType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deployment_configuration: {
                value: ccContainerFleetDeploymentConfigurationPropertyToHclTerraform(this._deploymentConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcContainerFleet.DeploymentConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fleet_role_arn: {
                value: cdktn.stringToHclTerraform(this._fleetRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            game_server_container_group_definition_name: {
                value: cdktn.stringToHclTerraform(this._gameServerContainerGroupDefinitionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            game_server_container_groups_per_instance: {
                value: cdktn.numberToHclTerraform(this._gameServerContainerGroupsPerInstance),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            game_session_creation_limit_policy: {
                value: ccContainerFleetGameSessionCreationLimitPolicyPropertyToHclTerraform(this._gameSessionCreationLimitPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcContainerFleet.GameSessionCreationLimitPolicyProperty",
            },
            instance_connection_port_range: {
                value: ccContainerFleetConnectionPortRangePropertyToHclTerraform(this._instanceConnectionPortRange.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcContainerFleet.ConnectionPortRangeProperty",
            },
            instance_inbound_permissions: {
                value: cdktn.listMapperHcl(ccContainerFleetIpPermissionPropertyToHclTerraform, false)(this._instanceInboundPermissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcContainerFleet.IpPermissionPropertyList",
            },
            instance_type: {
                value: cdktn.stringToHclTerraform(this._instanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            locations: {
                value: cdktn.listMapperHcl(ccContainerFleetLocationConfigurationPropertyToHclTerraform, false)(this._locations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcContainerFleet.LocationConfigurationPropertyList",
            },
            log_configuration: {
                value: ccContainerFleetLogConfigurationPropertyToHclTerraform(this._logConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcContainerFleet.LogConfigurationProperty",
            },
            metric_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._metricGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            new_game_session_protection_policy: {
                value: cdktn.stringToHclTerraform(this._newGameSessionProtectionPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            per_instance_container_group_definition_name: {
                value: cdktn.stringToHclTerraform(this._perInstanceContainerGroupDefinitionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            player_gateway_mode: {
                value: cdktn.stringToHclTerraform(this._playerGatewayMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scaling_policies: {
                value: cdktn.listMapperHcl(ccContainerFleetScalingPolicyPropertyToHclTerraform, false)(this._scalingPolicies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcContainerFleet.ScalingPolicyPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccContainerFleetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcContainerFleet.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccContainerFleetDeploymentConfigurationPropertyToTerraform(struct?: CcContainerFleet.DeploymentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        impairment_strategy: cdktn.stringToTerraform(struct!.impairmentStrategy),
        minimum_healthy_percentage: cdktn.numberToTerraform(struct!.minimumHealthyPercentage),
        protection_strategy: cdktn.stringToTerraform(struct!.protectionStrategy),
    }
}


export function ccContainerFleetDeploymentConfigurationPropertyToHclTerraform(struct?: CcContainerFleet.DeploymentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        impairment_strategy: {
            value: cdktn.stringToHclTerraform(struct!.impairmentStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        minimum_healthy_percentage: {
            value: cdktn.numberToHclTerraform(struct!.minimumHealthyPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        protection_strategy: {
            value: cdktn.stringToHclTerraform(struct!.protectionStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerFleetDeploymentDetailsPropertyToTerraform(struct?: CcContainerFleet.DeploymentDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccContainerFleetDeploymentDetailsPropertyToHclTerraform(struct?: CcContainerFleet.DeploymentDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccContainerFleetGameSessionCreationLimitPolicyPropertyToTerraform(struct?: CcContainerFleet.GameSessionCreationLimitPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        new_game_sessions_per_creator: cdktn.numberToTerraform(struct!.newGameSessionsPerCreator),
        policy_period_in_minutes: cdktn.numberToTerraform(struct!.policyPeriodInMinutes),
    }
}


export function ccContainerFleetGameSessionCreationLimitPolicyPropertyToHclTerraform(struct?: CcContainerFleet.GameSessionCreationLimitPolicyProperty | cdktn.IResolvable): any {
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


export function ccContainerFleetConnectionPortRangePropertyToTerraform(struct?: CcContainerFleet.ConnectionPortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccContainerFleetConnectionPortRangePropertyToHclTerraform(struct?: CcContainerFleet.ConnectionPortRangeProperty | cdktn.IResolvable): any {
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


export function ccContainerFleetIpPermissionPropertyToTerraform(struct?: CcContainerFleet.IpPermissionProperty | cdktn.IResolvable): any {
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


export function ccContainerFleetIpPermissionPropertyToHclTerraform(struct?: CcContainerFleet.IpPermissionProperty | cdktn.IResolvable): any {
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


export function ccContainerFleetManagedCapacityConfigurationPropertyToTerraform(struct?: CcContainerFleet.ManagedCapacityConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scale_in_after_inactivity_minutes: cdktn.numberToTerraform(struct!.scaleInAfterInactivityMinutes),
        zero_capacity_strategy: cdktn.stringToTerraform(struct!.zeroCapacityStrategy),
    }
}


export function ccContainerFleetManagedCapacityConfigurationPropertyToHclTerraform(struct?: CcContainerFleet.ManagedCapacityConfigurationProperty | cdktn.IResolvable): any {
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


export function ccContainerFleetLocationCapacityPropertyToTerraform(struct?: CcContainerFleet.LocationCapacityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        desired_ec2_instances: cdktn.numberToTerraform(struct!.desiredEc2Instances),
        managed_capacity_configuration: ccContainerFleetManagedCapacityConfigurationPropertyToTerraform(struct!.managedCapacityConfiguration),
        max_size: cdktn.numberToTerraform(struct!.maxSize),
        min_size: cdktn.numberToTerraform(struct!.minSize),
    }
}


export function ccContainerFleetLocationCapacityPropertyToHclTerraform(struct?: CcContainerFleet.LocationCapacityProperty | cdktn.IResolvable): any {
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
            value: ccContainerFleetManagedCapacityConfigurationPropertyToHclTerraform(struct!.managedCapacityConfiguration),
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


export function ccContainerFleetLocationConfigurationPropertyToTerraform(struct?: CcContainerFleet.LocationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        location: cdktn.stringToTerraform(struct!.location),
        location_capacity: ccContainerFleetLocationCapacityPropertyToTerraform(struct!.locationCapacity),
        player_gateway_status: cdktn.stringToTerraform(struct!.playerGatewayStatus),
        stopped_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stoppedActions),
    }
}


export function ccContainerFleetLocationConfigurationPropertyToHclTerraform(struct?: CcContainerFleet.LocationConfigurationProperty | cdktn.IResolvable): any {
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
            value: ccContainerFleetLocationCapacityPropertyToHclTerraform(struct!.locationCapacity),
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
        stopped_actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stoppedActions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerFleetLogConfigurationPropertyToTerraform(struct?: CcContainerFleet.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_destination: cdktn.stringToTerraform(struct!.logDestination),
        log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
        s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
    }
}


export function ccContainerFleetLogConfigurationPropertyToHclTerraform(struct?: CcContainerFleet.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_destination: {
            value: cdktn.stringToHclTerraform(struct!.logDestination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.logGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerFleetTargetConfigurationPropertyToTerraform(struct?: CcContainerFleet.TargetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccContainerFleetTargetConfigurationPropertyToHclTerraform(struct?: CcContainerFleet.TargetConfigurationProperty | cdktn.IResolvable): any {
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


export function ccContainerFleetScalingPolicyPropertyToTerraform(struct?: CcContainerFleet.ScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
        evaluation_periods: cdktn.numberToTerraform(struct!.evaluationPeriods),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        name: cdktn.stringToTerraform(struct!.name),
        policy_type: cdktn.stringToTerraform(struct!.policyType),
        scaling_adjustment: cdktn.numberToTerraform(struct!.scalingAdjustment),
        scaling_adjustment_type: cdktn.stringToTerraform(struct!.scalingAdjustmentType),
        target_configuration: ccContainerFleetTargetConfigurationPropertyToTerraform(struct!.targetConfiguration),
        threshold: cdktn.numberToTerraform(struct!.threshold),
    }
}


export function ccContainerFleetScalingPolicyPropertyToHclTerraform(struct?: CcContainerFleet.ScalingPolicyProperty | cdktn.IResolvable): any {
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
        target_configuration: {
            value: ccContainerFleetTargetConfigurationPropertyToHclTerraform(struct!.targetConfiguration),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerFleetTagPropertyToTerraform(struct?: CcContainerFleet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccContainerFleetTagPropertyToHclTerraform(struct?: CcContainerFleet.TagProperty | cdktn.IResolvable): any {
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


export namespace CcContainerFleet {
export interface DeploymentConfigurationProperty {
    /**
    * The strategy to apply in case of impairment; defaults to MAINTAIN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#impairment_strategy CcContainerFleet#impairment_strategy}
    */
    readonly impairmentStrategy?: string;
    /**
    * The minimum percentage of healthy required; defaults to 75.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#minimum_healthy_percentage CcContainerFleet#minimum_healthy_percentage}
    */
    readonly minimumHealthyPercentage?: number;
    /**
    * The protection strategy for deployment on the container fleet; defaults to WITH_PROTECTION.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#protection_strategy CcContainerFleet#protection_strategy}
    */
    readonly protectionStrategy?: string;
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
        if (this._impairmentStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.impairmentStrategy = this._impairmentStrategy;
        }
        if (this._minimumHealthyPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumHealthyPercentage = this._minimumHealthyPercentage;
        }
        if (this._protectionStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.protectionStrategy = this._protectionStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._impairmentStrategy = undefined;
            this._minimumHealthyPercentage = undefined;
            this._protectionStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._impairmentStrategy = value.impairmentStrategy;
            this._minimumHealthyPercentage = value.minimumHealthyPercentage;
            this._protectionStrategy = value.protectionStrategy;
        }
    }

    // impairment_strategy - computed: true, optional: true, required: false
    private _impairmentStrategy?: string; 
    public get impairmentStrategy() {
        return this.getStringAttribute('impairment_strategy');
    }
    public set impairmentStrategy(value: string) {
        this._impairmentStrategy = value;
    }
    public resetImpairmentStrategy() {
        this._impairmentStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get impairmentStrategyInput() {
        return this._impairmentStrategy;
    }

    // minimum_healthy_percentage - computed: true, optional: true, required: false
    private _minimumHealthyPercentage?: number; 
    public get minimumHealthyPercentage() {
        return this.getNumberAttribute('minimum_healthy_percentage');
    }
    public set minimumHealthyPercentage(value: number) {
        this._minimumHealthyPercentage = value;
    }
    public resetMinimumHealthyPercentage() {
        this._minimumHealthyPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumHealthyPercentageInput() {
        return this._minimumHealthyPercentage;
    }

    // protection_strategy - computed: true, optional: true, required: false
    private _protectionStrategy?: string; 
    public get protectionStrategy() {
        return this.getStringAttribute('protection_strategy');
    }
    public set protectionStrategy(value: string) {
        this._protectionStrategy = value;
    }
    public resetProtectionStrategy() {
        this._protectionStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protectionStrategyInput() {
        return this._protectionStrategy;
    }
}
export interface DeploymentDetailsProperty {
}
export class DeploymentDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentDetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentDetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // latest_deployment_id - computed: true, optional: false, required: false
    public get latestDeploymentId() {
        return this.getStringAttribute('latest_deployment_id');
    }
}
export interface GameSessionCreationLimitPolicyProperty {
    /**
    * The maximum number of game sessions that an individual can create during the policy period.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#new_game_sessions_per_creator CcContainerFleet#new_game_sessions_per_creator}
    */
    readonly newGameSessionsPerCreator?: number;
    /**
    * The time span used in evaluating the resource creation limit policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#policy_period_in_minutes CcContainerFleet#policy_period_in_minutes}
    */
    readonly policyPeriodInMinutes?: number;
}
export class GameSessionCreationLimitPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GameSessionCreationLimitPolicyProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: GameSessionCreationLimitPolicyProperty | cdktn.IResolvable | undefined) {
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
export interface ConnectionPortRangeProperty {
    /**
    * A starting value for a range of allowed port numbers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#from_port CcContainerFleet#from_port}
    */
    readonly fromPort?: number;
    /**
    * An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#to_port CcContainerFleet#to_port}
    */
    readonly toPort?: number;
}
export class ConnectionPortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionPortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionPortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
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
export interface IpPermissionProperty {
    /**
    * A starting value for a range of allowed port numbers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#from_port CcContainerFleet#from_port}
    */
    readonly fromPort?: number;
    /**
    * A range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#ip_range CcContainerFleet#ip_range}
    */
    readonly ipRange?: string;
    /**
    * The network communication protocol used by the fleet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#protocol CcContainerFleet#protocol}
    */
    readonly protocol?: string;
    /**
    * An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#to_port CcContainerFleet#to_port}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#scale_in_after_inactivity_minutes CcContainerFleet#scale_in_after_inactivity_minutes}
    */
    readonly scaleInAfterInactivityMinutes?: number;
    /**
    * The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity. Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#zero_capacity_strategy CcContainerFleet#zero_capacity_strategy}
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
    * Defaults to MinSize if not defined. The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits. If any auto-scaling policy is defined for the container fleet, the desired instance will only be applied once during fleet creation and will be ignored in updates to avoid conflicts with auto-scaling. During updates with any auto-scaling policy defined, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#desired_ec2_instances CcContainerFleet#desired_ec2_instances}
    */
    readonly desiredEc2Instances?: number;
    /**
    * Configuration options for Amazon GameLift Servers-managed capacity behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#managed_capacity_configuration CcContainerFleet#managed_capacity_configuration}
    */
    readonly managedCapacityConfiguration?: ManagedCapacityConfigurationProperty;
    /**
    * The maximum value that is allowed for the fleet's instance count for a location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#max_size CcContainerFleet#max_size}
    */
    readonly maxSize?: number;
    /**
    * The minimum value allowed for the fleet's instance count for a location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#min_size CcContainerFleet#min_size}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#location CcContainerFleet#location}
    */
    readonly location?: string;
    /**
    * Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#location_capacity CcContainerFleet#location_capacity}
    */
    readonly locationCapacity?: LocationCapacityProperty;
    /**
    * The player gateway status for the location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#player_gateway_status CcContainerFleet#player_gateway_status}
    */
    readonly playerGatewayStatus?: string;
    /**
    * A list of fleet actions that have been suspended in the fleet location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#stopped_actions CcContainerFleet#stopped_actions}
    */
    readonly stoppedActions?: string[];
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
        if (this._stoppedActions !== undefined) {
            hasAnyValues = true;
            internalValueResult.stoppedActions = this._stoppedActions;
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
            this._stoppedActions = undefined;
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
            this._stoppedActions = value.stoppedActions;
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

    // stopped_actions - computed: true, optional: true, required: false
    private _stoppedActions?: string[]; 
    public get stoppedActions() {
        return this.getListAttribute('stopped_actions');
    }
    public set stoppedActions(value: string[]) {
        this._stoppedActions = value;
    }
    public resetStoppedActions() {
        this._stoppedActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stoppedActionsInput() {
        return this._stoppedActions;
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
export interface LogConfigurationProperty {
    /**
    * Configures the service that provides logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#log_destination CcContainerFleet#log_destination}
    */
    readonly logDestination?: string;
    /**
    * If log destination is CLOUDWATCH, logs are sent to the specified log group in Amazon CloudWatch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#log_group_arn CcContainerFleet#log_group_arn}
    */
    readonly logGroupArn?: string;
    /**
    * The name of the S3 bucket to pull logs from if S3 is the LogDestination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#s3_bucket_name CcContainerFleet#s3_bucket_name}
    */
    readonly s3BucketName?: string;
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
        if (this._logDestination !== undefined) {
            hasAnyValues = true;
            internalValueResult.logDestination = this._logDestination;
        }
        if (this._logGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupArn = this._logGroupArn;
        }
        if (this._s3BucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketName = this._s3BucketName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logDestination = undefined;
            this._logGroupArn = undefined;
            this._s3BucketName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logDestination = value.logDestination;
            this._logGroupArn = value.logGroupArn;
            this._s3BucketName = value.s3BucketName;
        }
    }

    // log_destination - computed: true, optional: true, required: false
    private _logDestination?: string; 
    public get logDestination() {
        return this.getStringAttribute('log_destination');
    }
    public set logDestination(value: string) {
        this._logDestination = value;
    }
    public resetLogDestination() {
        this._logDestination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDestinationInput() {
        return this._logDestination;
    }

    // log_group_arn - computed: true, optional: true, required: false
    private _logGroupArn?: string; 
    public get logGroupArn() {
        return this.getStringAttribute('log_group_arn');
    }
    public set logGroupArn(value: string) {
        this._logGroupArn = value;
    }
    public resetLogGroupArn() {
        this._logGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupArnInput() {
        return this._logGroupArn;
    }

    // s3_bucket_name - computed: true, optional: true, required: false
    private _s3BucketName?: string; 
    public get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
        this._s3BucketName = value;
    }
    public resetS3BucketName() {
        this._s3BucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
        return this._s3BucketName;
    }
}
export interface TargetConfigurationProperty {
    /**
    * Desired value to use with a target-based scaling policy. The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#target_value CcContainerFleet#target_value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#comparison_operator CcContainerFleet#comparison_operator}
    */
    readonly comparisonOperator?: string;
    /**
    * Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#evaluation_periods CcContainerFleet#evaluation_periods}
    */
    readonly evaluationPeriods?: number;
    /**
    * Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#metric_name CcContainerFleet#metric_name}
    */
    readonly metricName?: string;
    /**
    * A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#name CcContainerFleet#name}
    */
    readonly name?: string;
    /**
    * The type of scaling policy to create. For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#policy_type CcContainerFleet#policy_type}
    */
    readonly policyType?: string;
    /**
    * Amount of adjustment to make, based on the scaling adjustment type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#scaling_adjustment CcContainerFleet#scaling_adjustment}
    */
    readonly scalingAdjustment?: number;
    /**
    * The type of adjustment to make to a fleet's instance count.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#scaling_adjustment_type CcContainerFleet#scaling_adjustment_type}
    */
    readonly scalingAdjustmentType?: string;
    /**
    * An object that contains settings for a target-based scaling policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#target_configuration CcContainerFleet#target_configuration}
    */
    readonly targetConfiguration?: TargetConfigurationProperty;
    /**
    * Metric value used to trigger a scaling event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#threshold CcContainerFleet#threshold}
    */
    readonly threshold?: number;
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
        if (this._targetConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetConfiguration = this._targetConfiguration?.internalValue;
        }
        if (this._threshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.threshold = this._threshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScalingPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparisonOperator = undefined;
            this._evaluationPeriods = undefined;
            this._metricName = undefined;
            this._name = undefined;
            this._policyType = undefined;
            this._scalingAdjustment = undefined;
            this._scalingAdjustmentType = undefined;
            this._targetConfiguration.internalValue = undefined;
            this._threshold = undefined;
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
            this._metricName = value.metricName;
            this._name = value.name;
            this._policyType = value.policyType;
            this._scalingAdjustment = value.scalingAdjustment;
            this._scalingAdjustmentType = value.scalingAdjustmentType;
            this._targetConfiguration.internalValue = value.targetConfiguration;
            this._threshold = value.threshold;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#key CcContainerFleet#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_container_fleet#value CcContainerFleet#value}
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
