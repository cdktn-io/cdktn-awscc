// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTaskSetProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#capacity_provider_strategy CcTaskSet#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: CcTaskSet.CapacityProviderStrategyItemProperty[] | cdktn.IResolvable;
    /**
    * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#cluster CcTaskSet#cluster}
    */
    readonly cluster: string;
    /**
    * An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the ECS_TASK_SET_EXTERNAL_ID AWS Cloud Map attribute set to the provided value. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#external_id CcTaskSet#external_id}
    */
    readonly externalId?: string;
    /**
    * The launch type that new tasks in the task set will use. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html in the Amazon Elastic Container Service Developer Guide. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#launch_type CcTaskSet#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#load_balancers CcTaskSet#load_balancers}
    */
    readonly loadBalancers?: CcTaskSet.LoadBalancerProperty[] | cdktn.IResolvable;
    /**
    * An object representing the network configuration for a task or service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#network_configuration CcTaskSet#network_configuration}
    */
    readonly networkConfiguration?: CcTaskSet.NetworkConfigurationProperty;
    /**
    * The platform version that the tasks in the task set should use. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#platform_version CcTaskSet#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * A floating-point percentage of the desired number of tasks to place and keep running in the task set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#scale CcTaskSet#scale}
    */
    readonly scale?: CcTaskSet.ScaleProperty;
    /**
    * The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#service CcTaskSet#service}
    */
    readonly service: string;
    /**
    * The details of the service discovery registries to assign to this task set. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#service_registries CcTaskSet#service_registries}
    */
    readonly serviceRegistries?: CcTaskSet.ServiceRegistryProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#tags CcTaskSet#tags}
    */
    readonly tags?: CcTaskSet.TagProperty[] | cdktn.IResolvable;
    /**
    * The short name or full Amazon Resource Name (ARN) of the task definition for the tasks in the task set to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#task_definition CcTaskSet#task_definition}
    */
    readonly taskDefinition: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set awscc_ecs_task_set}
*/
export class CcTaskSet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecs_task_set";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTaskSet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTaskSet to import
    * @param importFromId The id of the existing CcTaskSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTaskSet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_task_set", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set awscc_ecs_task_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTaskSetProps
    */
    public constructor(scope: Construct, id: string, config: CcTaskSetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecs_task_set',
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
        this._capacityProviderStrategy.internalValue = config.capacityProviderStrategy;
        this._cluster = config.cluster;
        this._externalId = config.externalId;
        this._launchType = config.launchType;
        this._loadBalancers.internalValue = config.loadBalancers;
        this._networkConfiguration.internalValue = config.networkConfiguration;
        this._platformVersion = config.platformVersion;
        this._scale.internalValue = config.scale;
        this._service = config.service;
        this._serviceRegistries.internalValue = config.serviceRegistries;
        this._tags.internalValue = config.tags;
        this._taskDefinition = config.taskDefinition;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // capacity_provider_strategy - computed: true, optional: true, required: false
    private _capacityProviderStrategy = new CcTaskSet.CapacityProviderStrategyItemPropertyList(this, "capacity_provider_strategy", false);
    public get capacityProviderStrategy() {
        return this._capacityProviderStrategy;
    }
    public putCapacityProviderStrategy(value: CcTaskSet.CapacityProviderStrategyItemProperty[] | cdktn.IResolvable) {
        this._capacityProviderStrategy.internalValue = value;
    }
    public resetCapacityProviderStrategy() {
        this._capacityProviderStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderStrategyInput() {
        return this._capacityProviderStrategy.internalValue;
    }

    // cluster - computed: false, optional: false, required: true
    private _cluster?: string; 
    public get cluster() {
        return this.getStringAttribute('cluster');
    }
    public set cluster(value: string) {
        this._cluster = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterInput() {
        return this._cluster;
    }

    // external_id - computed: true, optional: true, required: false
    private _externalId?: string; 
    public get externalId() {
        return this.getStringAttribute('external_id');
    }
    public set externalId(value: string) {
        this._externalId = value;
    }
    public resetExternalId() {
        this._externalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalIdInput() {
        return this._externalId;
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
    private _loadBalancers = new CcTaskSet.LoadBalancerPropertyList(this, "load_balancers", false);
    public get loadBalancers() {
        return this._loadBalancers;
    }
    public putLoadBalancers(value: CcTaskSet.LoadBalancerProperty[] | cdktn.IResolvable) {
        this._loadBalancers.internalValue = value;
    }
    public resetLoadBalancers() {
        this._loadBalancers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancersInput() {
        return this._loadBalancers.internalValue;
    }

    // network_configuration - computed: true, optional: true, required: false
    private _networkConfiguration = new CcTaskSet.NetworkConfigurationPropertyOutputReference(this, "network_configuration");
    public get networkConfiguration() {
        return this._networkConfiguration;
    }
    public putNetworkConfiguration(value: CcTaskSet.NetworkConfigurationProperty) {
        this._networkConfiguration.internalValue = value;
    }
    public resetNetworkConfiguration() {
        this._networkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
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

    // scale - computed: true, optional: true, required: false
    private _scale = new CcTaskSet.ScalePropertyOutputReference(this, "scale");
    public get scale() {
        return this._scale;
    }
    public putScale(value: CcTaskSet.ScaleProperty) {
        this._scale.internalValue = value;
    }
    public resetScale() {
        this._scale.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInput() {
        return this._scale.internalValue;
    }

    // service - computed: false, optional: false, required: true
    private _service?: string; 
    public get service() {
        return this.getStringAttribute('service');
    }
    public set service(value: string) {
        this._service = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceInput() {
        return this._service;
    }

    // service_registries - computed: true, optional: true, required: false
    private _serviceRegistries = new CcTaskSet.ServiceRegistryPropertyList(this, "service_registries", false);
    public get serviceRegistries() {
        return this._serviceRegistries;
    }
    public putServiceRegistries(value: CcTaskSet.ServiceRegistryProperty[] | cdktn.IResolvable) {
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
    private _tags = new CcTaskSet.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTaskSet.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // task_definition - computed: false, optional: false, required: true
    private _taskDefinition?: string; 
    public get taskDefinition() {
        return this.getStringAttribute('task_definition');
    }
    public set taskDefinition(value: string) {
        this._taskDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDefinitionInput() {
        return this._taskDefinition;
    }

    // task_set_id - computed: true, optional: false, required: false
    public get taskSetId() {
        return this.getStringAttribute('task_set_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            capacity_provider_strategy: cdktn.listMapper(ccTaskSetCapacityProviderStrategyItemPropertyToTerraform, false)(this._capacityProviderStrategy.internalValue),
            cluster: cdktn.stringToTerraform(this._cluster),
            external_id: cdktn.stringToTerraform(this._externalId),
            launch_type: cdktn.stringToTerraform(this._launchType),
            load_balancers: cdktn.listMapper(ccTaskSetLoadBalancerPropertyToTerraform, false)(this._loadBalancers.internalValue),
            network_configuration: ccTaskSetNetworkConfigurationPropertyToTerraform(this._networkConfiguration.internalValue),
            platform_version: cdktn.stringToTerraform(this._platformVersion),
            scale: ccTaskSetScalePropertyToTerraform(this._scale.internalValue),
            service: cdktn.stringToTerraform(this._service),
            service_registries: cdktn.listMapper(ccTaskSetServiceRegistryPropertyToTerraform, false)(this._serviceRegistries.internalValue),
            tags: cdktn.listMapper(ccTaskSetTagPropertyToTerraform, false)(this._tags.internalValue),
            task_definition: cdktn.stringToTerraform(this._taskDefinition),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capacity_provider_strategy: {
                value: cdktn.listMapperHcl(ccTaskSetCapacityProviderStrategyItemPropertyToHclTerraform, false)(this._capacityProviderStrategy.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTaskSet.CapacityProviderStrategyItemPropertyList",
            },
            cluster: {
                value: cdktn.stringToHclTerraform(this._cluster),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            external_id: {
                value: cdktn.stringToHclTerraform(this._externalId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            launch_type: {
                value: cdktn.stringToHclTerraform(this._launchType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            load_balancers: {
                value: cdktn.listMapperHcl(ccTaskSetLoadBalancerPropertyToHclTerraform, false)(this._loadBalancers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTaskSet.LoadBalancerPropertyList",
            },
            network_configuration: {
                value: ccTaskSetNetworkConfigurationPropertyToHclTerraform(this._networkConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTaskSet.NetworkConfigurationProperty",
            },
            platform_version: {
                value: cdktn.stringToHclTerraform(this._platformVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scale: {
                value: ccTaskSetScalePropertyToHclTerraform(this._scale.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTaskSet.ScaleProperty",
            },
            service: {
                value: cdktn.stringToHclTerraform(this._service),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_registries: {
                value: cdktn.listMapperHcl(ccTaskSetServiceRegistryPropertyToHclTerraform, false)(this._serviceRegistries.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTaskSet.ServiceRegistryPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTaskSetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTaskSet.TagPropertyList",
            },
            task_definition: {
                value: cdktn.stringToHclTerraform(this._taskDefinition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTaskSetCapacityProviderStrategyItemPropertyToTerraform(struct?: CcTaskSet.CapacityProviderStrategyItemProperty | cdktn.IResolvable): any {
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


export function ccTaskSetCapacityProviderStrategyItemPropertyToHclTerraform(struct?: CcTaskSet.CapacityProviderStrategyItemProperty | cdktn.IResolvable): any {
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


export function ccTaskSetLoadBalancerPropertyToTerraform(struct?: CcTaskSet.LoadBalancerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_name: cdktn.stringToTerraform(struct!.containerName),
        container_port: cdktn.numberToTerraform(struct!.containerPort),
        target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
    }
}


export function ccTaskSetLoadBalancerPropertyToHclTerraform(struct?: CcTaskSet.LoadBalancerProperty | cdktn.IResolvable): any {
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


export function ccTaskSetAwsVpcConfigurationPropertyToTerraform(struct?: CcTaskSet.AwsVpcConfigurationProperty | cdktn.IResolvable): any {
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


export function ccTaskSetAwsVpcConfigurationPropertyToHclTerraform(struct?: CcTaskSet.AwsVpcConfigurationProperty | cdktn.IResolvable): any {
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


export function ccTaskSetNetworkConfigurationPropertyToTerraform(struct?: CcTaskSet.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_vpc_configuration: ccTaskSetAwsVpcConfigurationPropertyToTerraform(struct!.awsVpcConfiguration),
    }
}


export function ccTaskSetNetworkConfigurationPropertyToHclTerraform(struct?: CcTaskSet.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_vpc_configuration: {
            value: ccTaskSetAwsVpcConfigurationPropertyToHclTerraform(struct!.awsVpcConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AwsVpcConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskSetScalePropertyToTerraform(struct?: CcTaskSet.ScaleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccTaskSetScalePropertyToHclTerraform(struct?: CcTaskSet.ScaleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
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


export function ccTaskSetServiceRegistryPropertyToTerraform(struct?: CcTaskSet.ServiceRegistryProperty | cdktn.IResolvable): any {
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


export function ccTaskSetServiceRegistryPropertyToHclTerraform(struct?: CcTaskSet.ServiceRegistryProperty | cdktn.IResolvable): any {
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


export function ccTaskSetTagPropertyToTerraform(struct?: CcTaskSet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskSetTagPropertyToHclTerraform(struct?: CcTaskSet.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTaskSet {
export interface CapacityProviderStrategyItemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#base CcTaskSet#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#capacity_provider CcTaskSet#capacity_provider}
    */
    readonly capacityProvider?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#weight CcTaskSet#weight}
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
export interface LoadBalancerProperty {
    /**
    * The name of the container (as it appears in a container definition) to associate with the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#container_name CcTaskSet#container_name}
    */
    readonly containerName?: string;
    /**
    * The port on the container to associate with the load balancer. This port must correspond to a containerPort in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they are launched on must allow ingress traffic on the hostPort of the port mapping.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#container_port CcTaskSet#container_port}
    */
    readonly containerPort?: number;
    /**
    * The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set. A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. If you are using a Classic Load Balancer this should be omitted. For services using the ECS deployment controller, you can specify one or multiple target groups. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html in the Amazon Elastic Container Service Developer Guide. For services using the CODE_DEPLOY deployment controller, you are required to define two target groups for the load balancer. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html in the Amazon Elastic Container Service Developer Guide. If your service's task definition uses the awsvpc network mode (which is required for the Fargate launch type), you must choose ip as the target type, not instance, when creating your target groups because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#target_group_arn CcTaskSet#target_group_arn}
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
        if (this._containerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerName = this._containerName;
        }
        if (this._containerPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPort = this._containerPort;
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
            this._containerName = undefined;
            this._containerPort = undefined;
            this._targetGroupArn = undefined;
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
            this._targetGroupArn = value.targetGroupArn;
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
export interface AwsVpcConfigurationProperty {
    /**
    * Whether the task's elastic network interface receives a public IP address. The default value is DISABLED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#assign_public_ip CcTaskSet#assign_public_ip}
    */
    readonly assignPublicIp?: string;
    /**
    * The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#security_groups CcTaskSet#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per AwsVpcConfiguration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#subnets CcTaskSet#subnets}
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
    * The VPC subnets and security groups associated with a task. All specified subnets and security groups must be from the same VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#aws_vpc_configuration CcTaskSet#aws_vpc_configuration}
    */
    readonly awsVpcConfiguration?: AwsVpcConfigurationProperty;
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
        if (this._awsVpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsVpcConfiguration = this._awsVpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsVpcConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsVpcConfiguration.internalValue = value.awsVpcConfiguration;
        }
    }

    // aws_vpc_configuration - computed: true, optional: true, required: false
    private _awsVpcConfiguration = new AwsVpcConfigurationPropertyOutputReference(this, "aws_vpc_configuration");
    public get awsVpcConfiguration() {
        return this._awsVpcConfiguration;
    }
    public putAwsVpcConfiguration(value: AwsVpcConfigurationProperty) {
        this._awsVpcConfiguration.internalValue = value;
    }
    public resetAwsVpcConfiguration() {
        this._awsVpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsVpcConfigurationInput() {
        return this._awsVpcConfiguration.internalValue;
    }
}
export interface ScaleProperty {
    /**
    * The unit of measure for the scale value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#unit CcTaskSet#unit}
    */
    readonly unit?: string;
    /**
    * The value, specified as a percent total of a service's desiredCount, to scale the task set. Accepted values are numbers between 0 and 100.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#value CcTaskSet#value}
    */
    readonly value?: number;
}
export class ScalePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScaleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScaleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
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
export interface ServiceRegistryProperty {
    /**
    * The container name value, already specified in the task definition, to be used for your service discovery service. If the task definition that your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition that your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#container_name CcTaskSet#container_name}
    */
    readonly containerName?: string;
    /**
    * The port value, already specified in the task definition, to be used for your service discovery service. If the task definition your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#container_port CcTaskSet#container_port}
    */
    readonly containerPort?: number;
    /**
    * The port value used if your service discovery service specified an SRV record. This field may be used if both the awsvpc network mode and SRV records are used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#port CcTaskSet#port}
    */
    readonly port?: number;
    /**
    * The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is AWS Cloud Map. For more information, see https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#registry_arn CcTaskSet#registry_arn}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#key CcTaskSet#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_task_set#value CcTaskSet#value}
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
