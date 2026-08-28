// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTaskDefinitionProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of container definitions in JSON format that describe the different containers that make up your task. For more information about container definition parameters and defaults, see [Amazon ECS Task Definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#container_definitions CcTaskDefinition#container_definitions}
    */
    readonly containerDefinitions?: CcTaskDefinition.ContainerDefinitionProperty[] | cdktn.IResolvable;
    /**
    * The number of ``cpu`` units used by the task. If you use the EC2 launch type, this field is optional. Any value can be used. If you use the Fargate launch type, this field is required. You must use one of the following values. The value that you choose determines your range of valid values for the ``memory`` parameter.
    *  If you're using the EC2 launch type or the external launch type, this field is optional. Supported values are between ``128`` CPU units (``0.125`` vCPUs) and ``196608`` CPU units (``192`` vCPUs). 
    *  This field is required for Fargate. For information about the valid values, see [Task size](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#cpu CcTaskDefinition#cpu}
    */
    readonly cpu?: string;
    /**
    * Enables fault injection and allows for fault injection requests to be accepted from the task's containers. The default value is ``false``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#enable_fault_injection CcTaskDefinition#enable_fault_injection}
    */
    readonly enableFaultInjection?: boolean | cdktn.IResolvable;
    /**
    * The ephemeral storage settings to use for tasks run with the task definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#ephemeral_storage CcTaskDefinition#ephemeral_storage}
    */
    readonly ephemeralStorage?: CcTaskDefinition.EphemeralStorageProperty;
    /**
    * The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make AWS API calls on your behalf. For informationabout the required IAM roles for Amazon ECS, see [IAM roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-ecs-iam-role-overview.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#execution_role_arn CcTaskDefinition#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * The name of a family that this task definition is registered to. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
    *  A family groups multiple versions of a task definition. Amazon ECS gives the first task definition that you registered to a family a revision number of 1. Amazon ECS gives sequential revision numbers to each task definition that you add.
    *   To use revision numbers when you update a task definition, specify this property. If you don't specify a value, CFNlong generates a new task definition each time that you update it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#family CcTaskDefinition#family}
    */
    readonly family?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#inference_accelerators CcTaskDefinition#inference_accelerators}
    */
    readonly inferenceAccelerators?: CcTaskDefinition.InferenceAcceleratorProperty[] | cdktn.IResolvable;
    /**
    * The IPC resource namespace to use for the containers in the task. The valid values are ``host``, ``task``, or ``none``. If ``host`` is specified, then all containers within the tasks that specified the ``host`` IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If ``task`` is specified, all containers within the specified task share the same IPC resources. If ``none`` is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance.
    *  If the ``host`` IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose.
    *  If you are setting namespaced kernel parameters using ``systemControls`` for the containers in the task, the following will apply to your IPC resource namespace. For more information, see [System Controls](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) in the *Amazon Elastic Container Service Developer Guide*.
    *   +  For tasks that use the ``host`` IPC mode, IPC namespace related ``systemControls`` are not supported.
    *   +  For tasks that use the ``task`` IPC mode, IPC namespace related ``systemControls`` will apply to all containers within a task.
    *   
    *   This parameter is not supported for Windows containers or tasks run on FARGATElong.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#ipc_mode CcTaskDefinition#ipc_mode}
    */
    readonly ipcMode?: string;
    /**
    * The amount (in MiB) of memory used by the task.
    *  If your tasks runs on Amazon EC2 instances, you must specify either a task-level memory value or a container-level memory value. This field is optional and any value can be used. If a task-level memory value is specified, the container-level memory value is optional. For more information regarding container-level memory and memory reservation, see [ContainerDefinition](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html).
    *  If your tasks runs on FARGATElong, this field is required. You must use one of the following values. The value you choose determines your range of valid values for the ``cpu`` parameter.
    *   +  512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available ``cpu`` values: 256 (.25 vCPU)
    *   +  1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available ``cpu`` values: 512 (.5 vCPU)
    *   +  2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available ``cpu`` values: 1024 (1 vCPU)
    *   +  Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available ``cpu`` values: 2048 (2 vCPU)
    *   +  Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available ``cpu`` values: 4096 (4 vCPU)
    *   +  Between 16 GB and 60 GB in 4 GB increments - Available ``cpu`` values: 8192 (8 vCPU)
    *  This option requires Linux platform ``1.4.0`` or later.
    *   +  Between 32GB and 120 GB in 8 GB increments - Available ``cpu`` values: 16384 (16 vCPU)
    *  This option requires Linux platform ``1.4.0`` or later.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#memory CcTaskDefinition#memory}
    */
    readonly memory?: string;
    /**
    * The Docker networking mode to use for the containers in the task. The valid values are ``none``, ``bridge``, ``awsvpc``, and ``host``. If no network mode is specified, the default is ``bridge``.
    *  For Amazon ECS tasks on Fargate, the ``awsvpc`` network mode is required. For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used. For Amazon ECS tasks on Amazon EC2 Windows instances, ``<default>`` or ``awsvpc`` can be used. If the network mode is set to ``none``, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The ``host`` and ``awsvpc`` network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the ``bridge`` mode.
    *  With the ``host`` and ``awsvpc`` network modes, exposed container ports are mapped directly to the corresponding host port (for the ``host`` network mode) or the attached elastic network interface port (for the ``awsvpc`` network mode), so you cannot take advantage of dynamic host port mappings. 
    *   When using the ``host`` network mode, you should not run containers using the root user (UID 0). It is considered best practice to use a non-root user.
    *   If the network mode is ``awsvpc``, the task is allocated an elastic network interface, and you must specify a [NetworkConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_NetworkConfiguration.html) value when you create a service or run a task with the task definition. For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  If the network mode is ``host``, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#network_mode CcTaskDefinition#network_mode}
    */
    readonly networkMode?: string;
    /**
    * The process namespace to use for the containers in the task. The valid values are ``host`` or ``task``. On Fargate for Linux containers, the only valid value is ``task``. For example, monitoring sidecars might need ``pidMode`` to access information about other containers running in the same task.
    *  If ``host`` is specified, all containers within the tasks that specified the ``host`` PID mode on the same container instance share the same process namespace with the host Amazon EC2 instance.
    *  If ``task`` is specified, all containers within the specified task share the same process namespace.
    *  If no value is specified, the The default is a private namespace for each container.
    *  If the ``host`` PID mode is used, there's a heightened risk of undesired process namespace exposure.
    *   This parameter is not supported for Windows containers.
    *    This parameter is only supported for tasks that are hosted on FARGATElong if the tasks are using platform version ``1.4.0`` or later (Linux). This isn't supported for Windows containers on Fargate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#pid_mode CcTaskDefinition#pid_mode}
    */
    readonly pidMode?: string;
    /**
    * An array of placement constraint objects to use for tasks.
    *   This parameter isn't supported for tasks run on FARGATElong.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#placement_constraints CcTaskDefinition#placement_constraints}
    */
    readonly placementConstraints?: CcTaskDefinition.TaskDefinitionPlacementConstraintProperty[] | cdktn.IResolvable;
    /**
    * The configuration details for the App Mesh proxy.
    *  Your Amazon ECS container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the ``ecs-init`` package to use a proxy configuration. If your container instances are launched from the Amazon ECS optimized AMI version ``20190301`` or later, they contain the required versions of the container agent and ``ecs-init``. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#proxy_configuration CcTaskDefinition#proxy_configuration}
    */
    readonly proxyConfiguration?: CcTaskDefinition.ProxyConfigurationProperty;
    /**
    * The task launch types the task definition was validated against. The valid values are ``MANAGED_INSTANCES``, ``EC2``, ``FARGATE``, and ``EXTERNAL``. For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#requires_compatibilities CcTaskDefinition#requires_compatibilities}
    */
    readonly requiresCompatibilities?: string[];
    /**
    * The operating system that your tasks definitions run on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#runtime_platform CcTaskDefinition#runtime_platform}
    */
    readonly runtimePlatform?: CcTaskDefinition.RuntimePlatformProperty;
    /**
    * The metadata that you apply to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value. You define both of them.
    *  The following basic restrictions apply to tags:
    *   +  Maximum number of tags per resource - 50
    *   +  For each resource, each tag key must be unique, and each tag key can have only one value.
    *   +  Maximum key length - 128 Unicode characters in UTF-8
    *   +  Maximum value length - 256 Unicode characters in UTF-8
    *   +  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
    *   +  Tag keys and values are case-sensitive.
    *   +  Do not use ``aws:``, ``AWS:``, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#tags CcTaskDefinition#tags}
    */
    readonly tags?: CcTaskDefinition.TagProperty[] | cdktn.IResolvable;
    /**
    * The short name or full Amazon Resource Name (ARN) of the IAMlong role that grants containers in the task permission to call AWS APIs on your behalf. For more information, see [Amazon ECS Task Role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  IAM roles for tasks on Windows require that the ``-EnableTaskIAMRole`` option is set when you launch the Amazon ECS-optimized Windows AMI. Your containers must also run some configuration code to use the feature. For more information, see [Windows IAM roles for tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows_task_IAM_roles.html) in the *Amazon Elastic Container Service Developer Guide*.
    *   String validation is done on the ECS side. If an invalid string value is given for ``TaskRoleArn``, it may cause the Cloudformation job to hang.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#task_role_arn CcTaskDefinition#task_role_arn}
    */
    readonly taskRoleArn?: string;
    /**
    * The list of data volume definitions for the task. For more information, see [Using data volumes in tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html) in the *Amazon Elastic Container Service Developer Guide*.
    *   The ``host`` and ``sourcePath`` parameters aren't supported for tasks run on FARGATElong.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#volumes CcTaskDefinition#volumes}
    */
    readonly volumes?: CcTaskDefinition.VolumeProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition awscc_ecs_task_definition}
*/
export class CcTaskDefinition extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecs_task_definition";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTaskDefinition resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTaskDefinition to import
    * @param importFromId The id of the existing CcTaskDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTaskDefinition to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_task_definition", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition awscc_ecs_task_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTaskDefinitionProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcTaskDefinitionProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecs_task_definition',
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
        this._containerDefinitions.internalValue = config.containerDefinitions;
        this._cpu = config.cpu;
        this._enableFaultInjection = config.enableFaultInjection;
        this._ephemeralStorage.internalValue = config.ephemeralStorage;
        this._executionRoleArn = config.executionRoleArn;
        this._family = config.family;
        this._inferenceAccelerators.internalValue = config.inferenceAccelerators;
        this._ipcMode = config.ipcMode;
        this._memory = config.memory;
        this._networkMode = config.networkMode;
        this._pidMode = config.pidMode;
        this._placementConstraints.internalValue = config.placementConstraints;
        this._proxyConfiguration.internalValue = config.proxyConfiguration;
        this._requiresCompatibilities = config.requiresCompatibilities;
        this._runtimePlatform.internalValue = config.runtimePlatform;
        this._tags.internalValue = config.tags;
        this._taskRoleArn = config.taskRoleArn;
        this._volumes.internalValue = config.volumes;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // container_definitions - computed: true, optional: true, required: false
    private _containerDefinitions = new CcTaskDefinition.ContainerDefinitionPropertyList(this, "container_definitions", true);
    public get containerDefinitions() {
        return this._containerDefinitions;
    }
    public putContainerDefinitions(value: CcTaskDefinition.ContainerDefinitionProperty[] | cdktn.IResolvable) {
        this._containerDefinitions.internalValue = value;
    }
    public resetContainerDefinitions() {
        this._containerDefinitions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerDefinitionsInput() {
        return this._containerDefinitions.internalValue;
    }

    // cpu - computed: true, optional: true, required: false
    private _cpu?: string; 
    public get cpu() {
        return this.getStringAttribute('cpu');
    }
    public set cpu(value: string) {
        this._cpu = value;
    }
    public resetCpu() {
        this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuInput() {
        return this._cpu;
    }

    // enable_fault_injection - computed: true, optional: true, required: false
    private _enableFaultInjection?: boolean | cdktn.IResolvable; 
    public get enableFaultInjection() {
        return this.getBooleanAttribute('enable_fault_injection');
    }
    public set enableFaultInjection(value: boolean | cdktn.IResolvable) {
        this._enableFaultInjection = value;
    }
    public resetEnableFaultInjection() {
        this._enableFaultInjection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableFaultInjectionInput() {
        return this._enableFaultInjection;
    }

    // ephemeral_storage - computed: true, optional: true, required: false
    private _ephemeralStorage = new CcTaskDefinition.EphemeralStoragePropertyOutputReference(this, "ephemeral_storage");
    public get ephemeralStorage() {
        return this._ephemeralStorage;
    }
    public putEphemeralStorage(value: CcTaskDefinition.EphemeralStorageProperty) {
        this._ephemeralStorage.internalValue = value;
    }
    public resetEphemeralStorage() {
        this._ephemeralStorage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralStorageInput() {
        return this._ephemeralStorage.internalValue;
    }

    // execution_role_arn - computed: true, optional: true, required: false
    private _executionRoleArn?: string; 
    public get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string) {
        this._executionRoleArn = value;
    }
    public resetExecutionRoleArn() {
        this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
        return this._executionRoleArn;
    }

    // family - computed: true, optional: true, required: false
    private _family?: string; 
    public get family() {
        return this.getStringAttribute('family');
    }
    public set family(value: string) {
        this._family = value;
    }
    public resetFamily() {
        this._family = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get familyInput() {
        return this._family;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // inference_accelerators - computed: true, optional: true, required: false
    private _inferenceAccelerators = new CcTaskDefinition.InferenceAcceleratorPropertyList(this, "inference_accelerators", true);
    public get inferenceAccelerators() {
        return this._inferenceAccelerators;
    }
    public putInferenceAccelerators(value: CcTaskDefinition.InferenceAcceleratorProperty[] | cdktn.IResolvable) {
        this._inferenceAccelerators.internalValue = value;
    }
    public resetInferenceAccelerators() {
        this._inferenceAccelerators.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceAcceleratorsInput() {
        return this._inferenceAccelerators.internalValue;
    }

    // ipc_mode - computed: true, optional: true, required: false
    private _ipcMode?: string; 
    public get ipcMode() {
        return this.getStringAttribute('ipc_mode');
    }
    public set ipcMode(value: string) {
        this._ipcMode = value;
    }
    public resetIpcMode() {
        this._ipcMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipcModeInput() {
        return this._ipcMode;
    }

    // memory - computed: true, optional: true, required: false
    private _memory?: string; 
    public get memory() {
        return this.getStringAttribute('memory');
    }
    public set memory(value: string) {
        this._memory = value;
    }
    public resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
        return this._memory;
    }

    // network_mode - computed: true, optional: true, required: false
    private _networkMode?: string; 
    public get networkMode() {
        return this.getStringAttribute('network_mode');
    }
    public set networkMode(value: string) {
        this._networkMode = value;
    }
    public resetNetworkMode() {
        this._networkMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkModeInput() {
        return this._networkMode;
    }

    // pid_mode - computed: true, optional: true, required: false
    private _pidMode?: string; 
    public get pidMode() {
        return this.getStringAttribute('pid_mode');
    }
    public set pidMode(value: string) {
        this._pidMode = value;
    }
    public resetPidMode() {
        this._pidMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pidModeInput() {
        return this._pidMode;
    }

    // placement_constraints - computed: true, optional: true, required: false
    private _placementConstraints = new CcTaskDefinition.TaskDefinitionPlacementConstraintPropertyList(this, "placement_constraints", true);
    public get placementConstraints() {
        return this._placementConstraints;
    }
    public putPlacementConstraints(value: CcTaskDefinition.TaskDefinitionPlacementConstraintProperty[] | cdktn.IResolvable) {
        this._placementConstraints.internalValue = value;
    }
    public resetPlacementConstraints() {
        this._placementConstraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementConstraintsInput() {
        return this._placementConstraints.internalValue;
    }

    // proxy_configuration - computed: true, optional: true, required: false
    private _proxyConfiguration = new CcTaskDefinition.ProxyConfigurationPropertyOutputReference(this, "proxy_configuration");
    public get proxyConfiguration() {
        return this._proxyConfiguration;
    }
    public putProxyConfiguration(value: CcTaskDefinition.ProxyConfigurationProperty) {
        this._proxyConfiguration.internalValue = value;
    }
    public resetProxyConfiguration() {
        this._proxyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get proxyConfigurationInput() {
        return this._proxyConfiguration.internalValue;
    }

    // requires_compatibilities - computed: true, optional: true, required: false
    private _requiresCompatibilities?: string[]; 
    public get requiresCompatibilities() {
        return cdktn.Fn.tolist(this.getListAttribute('requires_compatibilities'));
    }
    public set requiresCompatibilities(value: string[]) {
        this._requiresCompatibilities = value;
    }
    public resetRequiresCompatibilities() {
        this._requiresCompatibilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiresCompatibilitiesInput() {
        return this._requiresCompatibilities;
    }

    // runtime_platform - computed: true, optional: true, required: false
    private _runtimePlatform = new CcTaskDefinition.RuntimePlatformPropertyOutputReference(this, "runtime_platform");
    public get runtimePlatform() {
        return this._runtimePlatform;
    }
    public putRuntimePlatform(value: CcTaskDefinition.RuntimePlatformProperty) {
        this._runtimePlatform.internalValue = value;
    }
    public resetRuntimePlatform() {
        this._runtimePlatform.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimePlatformInput() {
        return this._runtimePlatform.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTaskDefinition.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTaskDefinition.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // task_definition_arn - computed: true, optional: false, required: false
    public get taskDefinitionArn() {
        return this.getStringAttribute('task_definition_arn');
    }

    // task_role_arn - computed: true, optional: true, required: false
    private _taskRoleArn?: string; 
    public get taskRoleArn() {
        return this.getStringAttribute('task_role_arn');
    }
    public set taskRoleArn(value: string) {
        this._taskRoleArn = value;
    }
    public resetTaskRoleArn() {
        this._taskRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskRoleArnInput() {
        return this._taskRoleArn;
    }

    // volumes - computed: true, optional: true, required: false
    private _volumes = new CcTaskDefinition.VolumePropertyList(this, "volumes", true);
    public get volumes() {
        return this._volumes;
    }
    public putVolumes(value: CcTaskDefinition.VolumeProperty[] | cdktn.IResolvable) {
        this._volumes.internalValue = value;
    }
    public resetVolumes() {
        this._volumes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumesInput() {
        return this._volumes.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            container_definitions: cdktn.listMapper(ccTaskDefinitionContainerDefinitionPropertyToTerraform, false)(this._containerDefinitions.internalValue),
            cpu: cdktn.stringToTerraform(this._cpu),
            enable_fault_injection: cdktn.booleanToTerraform(this._enableFaultInjection),
            ephemeral_storage: ccTaskDefinitionEphemeralStoragePropertyToTerraform(this._ephemeralStorage.internalValue),
            execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
            family: cdktn.stringToTerraform(this._family),
            inference_accelerators: cdktn.listMapper(ccTaskDefinitionInferenceAcceleratorPropertyToTerraform, false)(this._inferenceAccelerators.internalValue),
            ipc_mode: cdktn.stringToTerraform(this._ipcMode),
            memory: cdktn.stringToTerraform(this._memory),
            network_mode: cdktn.stringToTerraform(this._networkMode),
            pid_mode: cdktn.stringToTerraform(this._pidMode),
            placement_constraints: cdktn.listMapper(ccTaskDefinitionTaskDefinitionPlacementConstraintPropertyToTerraform, false)(this._placementConstraints.internalValue),
            proxy_configuration: ccTaskDefinitionProxyConfigurationPropertyToTerraform(this._proxyConfiguration.internalValue),
            requires_compatibilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._requiresCompatibilities),
            runtime_platform: ccTaskDefinitionRuntimePlatformPropertyToTerraform(this._runtimePlatform.internalValue),
            tags: cdktn.listMapper(ccTaskDefinitionTagPropertyToTerraform, false)(this._tags.internalValue),
            task_role_arn: cdktn.stringToTerraform(this._taskRoleArn),
            volumes: cdktn.listMapper(ccTaskDefinitionVolumePropertyToTerraform, false)(this._volumes.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            container_definitions: {
                value: cdktn.listMapperHcl(ccTaskDefinitionContainerDefinitionPropertyToHclTerraform, false)(this._containerDefinitions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTaskDefinition.ContainerDefinitionPropertyList",
            },
            cpu: {
                value: cdktn.stringToHclTerraform(this._cpu),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_fault_injection: {
                value: cdktn.booleanToHclTerraform(this._enableFaultInjection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ephemeral_storage: {
                value: ccTaskDefinitionEphemeralStoragePropertyToHclTerraform(this._ephemeralStorage.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTaskDefinition.EphemeralStorageProperty",
            },
            execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._executionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            family: {
                value: cdktn.stringToHclTerraform(this._family),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            inference_accelerators: {
                value: cdktn.listMapperHcl(ccTaskDefinitionInferenceAcceleratorPropertyToHclTerraform, false)(this._inferenceAccelerators.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTaskDefinition.InferenceAcceleratorPropertyList",
            },
            ipc_mode: {
                value: cdktn.stringToHclTerraform(this._ipcMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            memory: {
                value: cdktn.stringToHclTerraform(this._memory),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_mode: {
                value: cdktn.stringToHclTerraform(this._networkMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pid_mode: {
                value: cdktn.stringToHclTerraform(this._pidMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            placement_constraints: {
                value: cdktn.listMapperHcl(ccTaskDefinitionTaskDefinitionPlacementConstraintPropertyToHclTerraform, false)(this._placementConstraints.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTaskDefinition.TaskDefinitionPlacementConstraintPropertyList",
            },
            proxy_configuration: {
                value: ccTaskDefinitionProxyConfigurationPropertyToHclTerraform(this._proxyConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTaskDefinition.ProxyConfigurationProperty",
            },
            requires_compatibilities: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._requiresCompatibilities),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            runtime_platform: {
                value: ccTaskDefinitionRuntimePlatformPropertyToHclTerraform(this._runtimePlatform.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTaskDefinition.RuntimePlatformProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTaskDefinitionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTaskDefinition.TagPropertyList",
            },
            task_role_arn: {
                value: cdktn.stringToHclTerraform(this._taskRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            volumes: {
                value: cdktn.listMapperHcl(ccTaskDefinitionVolumePropertyToHclTerraform, false)(this._volumes.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTaskDefinition.VolumePropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTaskDefinitionContainerDependencyPropertyToTerraform(struct?: CcTaskDefinition.ContainerDependencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        condition: cdktn.stringToTerraform(struct!.condition),
        container_name: cdktn.stringToTerraform(struct!.containerName),
    }
}


export function ccTaskDefinitionContainerDependencyPropertyToHclTerraform(struct?: CcTaskDefinition.ContainerDependencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        condition: {
            value: cdktn.stringToHclTerraform(struct!.condition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        container_name: {
            value: cdktn.stringToHclTerraform(struct!.containerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionKeyValuePairPropertyToTerraform(struct?: CcTaskDefinition.KeyValuePairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskDefinitionKeyValuePairPropertyToHclTerraform(struct?: CcTaskDefinition.KeyValuePairProperty | cdktn.IResolvable): any {
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
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionEnvironmentFilePropertyToTerraform(struct?: CcTaskDefinition.EnvironmentFileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskDefinitionEnvironmentFilePropertyToHclTerraform(struct?: CcTaskDefinition.EnvironmentFileProperty | cdktn.IResolvable): any {
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
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionHostEntryPropertyToTerraform(struct?: CcTaskDefinition.HostEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hostname: cdktn.stringToTerraform(struct!.hostname),
        ip_address: cdktn.stringToTerraform(struct!.ipAddress),
    }
}


export function ccTaskDefinitionHostEntryPropertyToHclTerraform(struct?: CcTaskDefinition.HostEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hostname: {
            value: cdktn.stringToHclTerraform(struct!.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_address: {
            value: cdktn.stringToHclTerraform(struct!.ipAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionFirelensConfigurationPropertyToTerraform(struct?: CcTaskDefinition.FirelensConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.options),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTaskDefinitionFirelensConfigurationPropertyToHclTerraform(struct?: CcTaskDefinition.FirelensConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        options: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.options),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
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


export function ccTaskDefinitionHealthCheckPropertyToTerraform(struct?: CcTaskDefinition.HealthCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
        interval: cdktn.numberToTerraform(struct!.interval),
        retries: cdktn.numberToTerraform(struct!.retries),
        start_period: cdktn.numberToTerraform(struct!.startPeriod),
        timeout: cdktn.numberToTerraform(struct!.timeout),
    }
}


export function ccTaskDefinitionHealthCheckPropertyToHclTerraform(struct?: CcTaskDefinition.HealthCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        command: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        retries: {
            value: cdktn.numberToHclTerraform(struct!.retries),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_period: {
            value: cdktn.numberToHclTerraform(struct!.startPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timeout: {
            value: cdktn.numberToHclTerraform(struct!.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionKernelCapabilitiesPropertyToTerraform(struct?: CcTaskDefinition.KernelCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        add: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.add),
        drop: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.drop),
    }
}


export function ccTaskDefinitionKernelCapabilitiesPropertyToHclTerraform(struct?: CcTaskDefinition.KernelCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        add: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.add),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        drop: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.drop),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionDevicePropertyToTerraform(struct?: CcTaskDefinition.DeviceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_path: cdktn.stringToTerraform(struct!.containerPath),
        host_path: cdktn.stringToTerraform(struct!.hostPath),
        permissions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.permissions),
    }
}


export function ccTaskDefinitionDevicePropertyToHclTerraform(struct?: CcTaskDefinition.DeviceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_path: {
            value: cdktn.stringToHclTerraform(struct!.containerPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_path: {
            value: cdktn.stringToHclTerraform(struct!.hostPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permissions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.permissions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionTmpfsPropertyToTerraform(struct?: CcTaskDefinition.TmpfsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_path: cdktn.stringToTerraform(struct!.containerPath),
        mount_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.mountOptions),
        size: cdktn.numberToTerraform(struct!.size),
    }
}


export function ccTaskDefinitionTmpfsPropertyToHclTerraform(struct?: CcTaskDefinition.TmpfsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_path: {
            value: cdktn.stringToHclTerraform(struct!.containerPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mount_options: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.mountOptions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        size: {
            value: cdktn.numberToHclTerraform(struct!.size),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionLinuxParametersPropertyToTerraform(struct?: CcTaskDefinition.LinuxParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capabilities: ccTaskDefinitionKernelCapabilitiesPropertyToTerraform(struct!.capabilities),
        devices: cdktn.listMapper(ccTaskDefinitionDevicePropertyToTerraform, false)(struct!.devices),
        init_process_enabled: cdktn.booleanToTerraform(struct!.initProcessEnabled),
        max_swap: cdktn.numberToTerraform(struct!.maxSwap),
        shared_memory_size: cdktn.numberToTerraform(struct!.sharedMemorySize),
        swappiness: cdktn.numberToTerraform(struct!.swappiness),
        tmpfs: cdktn.listMapper(ccTaskDefinitionTmpfsPropertyToTerraform, false)(struct!.tmpfs),
    }
}


export function ccTaskDefinitionLinuxParametersPropertyToHclTerraform(struct?: CcTaskDefinition.LinuxParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capabilities: {
            value: ccTaskDefinitionKernelCapabilitiesPropertyToHclTerraform(struct!.capabilities),
            isBlock: true,
            type: "struct",
            storageClassType: "KernelCapabilitiesProperty",
        },
        devices: {
            value: cdktn.listMapperHcl(ccTaskDefinitionDevicePropertyToHclTerraform, false)(struct!.devices),
            isBlock: true,
            type: "list",
            storageClassType: "DevicePropertyList",
        },
        init_process_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.initProcessEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_swap: {
            value: cdktn.numberToHclTerraform(struct!.maxSwap),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        shared_memory_size: {
            value: cdktn.numberToHclTerraform(struct!.sharedMemorySize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        swappiness: {
            value: cdktn.numberToHclTerraform(struct!.swappiness),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        tmpfs: {
            value: cdktn.listMapperHcl(ccTaskDefinitionTmpfsPropertyToHclTerraform, false)(struct!.tmpfs),
            isBlock: true,
            type: "list",
            storageClassType: "TmpfsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionSecretPropertyToTerraform(struct?: CcTaskDefinition.SecretProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value_from: cdktn.stringToTerraform(struct!.valueFrom),
    }
}


export function ccTaskDefinitionSecretPropertyToHclTerraform(struct?: CcTaskDefinition.SecretProperty | cdktn.IResolvable): any {
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


export function ccTaskDefinitionLogConfigurationPropertyToTerraform(struct?: CcTaskDefinition.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_driver: cdktn.stringToTerraform(struct!.logDriver),
        options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.options),
        secret_options: cdktn.listMapper(ccTaskDefinitionSecretPropertyToTerraform, false)(struct!.secretOptions),
    }
}


export function ccTaskDefinitionLogConfigurationPropertyToHclTerraform(struct?: CcTaskDefinition.LogConfigurationProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccTaskDefinitionSecretPropertyToHclTerraform, false)(struct!.secretOptions),
            isBlock: true,
            type: "list",
            storageClassType: "SecretPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionMountPointPropertyToTerraform(struct?: CcTaskDefinition.MountPointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_path: cdktn.stringToTerraform(struct!.containerPath),
        read_only: cdktn.booleanToTerraform(struct!.readOnly),
        source_volume: cdktn.stringToTerraform(struct!.sourceVolume),
    }
}


export function ccTaskDefinitionMountPointPropertyToHclTerraform(struct?: CcTaskDefinition.MountPointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_path: {
            value: cdktn.stringToHclTerraform(struct!.containerPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        read_only: {
            value: cdktn.booleanToHclTerraform(struct!.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        source_volume: {
            value: cdktn.stringToHclTerraform(struct!.sourceVolume),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionPortMappingPropertyToTerraform(struct?: CcTaskDefinition.PortMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_protocol: cdktn.stringToTerraform(struct!.appProtocol),
        container_port: cdktn.numberToTerraform(struct!.containerPort),
        container_port_range: cdktn.stringToTerraform(struct!.containerPortRange),
        host_port: cdktn.numberToTerraform(struct!.hostPort),
        name: cdktn.stringToTerraform(struct!.name),
        protocol: cdktn.stringToTerraform(struct!.protocol),
    }
}


export function ccTaskDefinitionPortMappingPropertyToHclTerraform(struct?: CcTaskDefinition.PortMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_protocol: {
            value: cdktn.stringToHclTerraform(struct!.appProtocol),
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
        container_port_range: {
            value: cdktn.stringToHclTerraform(struct!.containerPortRange),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_port: {
            value: cdktn.numberToHclTerraform(struct!.hostPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionRepositoryCredentialsPropertyToTerraform(struct?: CcTaskDefinition.RepositoryCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        credentials_parameter: cdktn.stringToTerraform(struct!.credentialsParameter),
    }
}


export function ccTaskDefinitionRepositoryCredentialsPropertyToHclTerraform(struct?: CcTaskDefinition.RepositoryCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        credentials_parameter: {
            value: cdktn.stringToHclTerraform(struct!.credentialsParameter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionResourceRequirementPropertyToTerraform(struct?: CcTaskDefinition.ResourceRequirementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskDefinitionResourceRequirementPropertyToHclTerraform(struct?: CcTaskDefinition.ResourceRequirementProperty | cdktn.IResolvable): any {
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
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionRestartPolicyPropertyToTerraform(struct?: CcTaskDefinition.RestartPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        ignored_exit_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.ignoredExitCodes),
        restart_attempt_period: cdktn.numberToTerraform(struct!.restartAttemptPeriod),
    }
}


export function ccTaskDefinitionRestartPolicyPropertyToHclTerraform(struct?: CcTaskDefinition.RestartPolicyProperty | cdktn.IResolvable): any {
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
        ignored_exit_codes: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.ignoredExitCodes),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        restart_attempt_period: {
            value: cdktn.numberToHclTerraform(struct!.restartAttemptPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionSecretsPropertyToTerraform(struct?: CcTaskDefinition.SecretsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value_from: cdktn.stringToTerraform(struct!.valueFrom),
    }
}


export function ccTaskDefinitionSecretsPropertyToHclTerraform(struct?: CcTaskDefinition.SecretsProperty | cdktn.IResolvable): any {
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


export function ccTaskDefinitionSystemControlPropertyToTerraform(struct?: CcTaskDefinition.SystemControlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        namespace: cdktn.stringToTerraform(struct!.namespace),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskDefinitionSystemControlPropertyToHclTerraform(struct?: CcTaskDefinition.SystemControlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
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


export function ccTaskDefinitionUlimitPropertyToTerraform(struct?: CcTaskDefinition.UlimitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hard_limit: cdktn.numberToTerraform(struct!.hardLimit),
        name: cdktn.stringToTerraform(struct!.name),
        soft_limit: cdktn.numberToTerraform(struct!.softLimit),
    }
}


export function ccTaskDefinitionUlimitPropertyToHclTerraform(struct?: CcTaskDefinition.UlimitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hard_limit: {
            value: cdktn.numberToHclTerraform(struct!.hardLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        soft_limit: {
            value: cdktn.numberToHclTerraform(struct!.softLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionVolumeFromPropertyToTerraform(struct?: CcTaskDefinition.VolumeFromProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_only: cdktn.booleanToTerraform(struct!.readOnly),
        source_container: cdktn.stringToTerraform(struct!.sourceContainer),
    }
}


export function ccTaskDefinitionVolumeFromPropertyToHclTerraform(struct?: CcTaskDefinition.VolumeFromProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        read_only: {
            value: cdktn.booleanToHclTerraform(struct!.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        source_container: {
            value: cdktn.stringToHclTerraform(struct!.sourceContainer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionContainerDefinitionPropertyToTerraform(struct?: CcTaskDefinition.ContainerDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
        cpu: cdktn.numberToTerraform(struct!.cpu),
        credential_specs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.credentialSpecs),
        depends_on: cdktn.listMapper(ccTaskDefinitionContainerDependencyPropertyToTerraform, false)(struct!.dependsOn),
        disable_networking: cdktn.booleanToTerraform(struct!.disableNetworking),
        dns_search_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dnsSearchDomains),
        dns_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dnsServers),
        docker_labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dockerLabels),
        docker_security_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dockerSecurityOptions),
        entry_point: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entryPoint),
        environment: cdktn.listMapper(ccTaskDefinitionKeyValuePairPropertyToTerraform, false)(struct!.environment),
        environment_files: cdktn.listMapper(ccTaskDefinitionEnvironmentFilePropertyToTerraform, false)(struct!.environmentFiles),
        essential: cdktn.booleanToTerraform(struct!.essential),
        extra_hosts: cdktn.listMapper(ccTaskDefinitionHostEntryPropertyToTerraform, false)(struct!.extraHosts),
        firelens_configuration: ccTaskDefinitionFirelensConfigurationPropertyToTerraform(struct!.firelensConfiguration),
        health_check: ccTaskDefinitionHealthCheckPropertyToTerraform(struct!.healthCheck),
        hostname: cdktn.stringToTerraform(struct!.hostname),
        image: cdktn.stringToTerraform(struct!.image),
        interactive: cdktn.booleanToTerraform(struct!.interactive),
        links: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.links),
        linux_parameters: ccTaskDefinitionLinuxParametersPropertyToTerraform(struct!.linuxParameters),
        log_configuration: ccTaskDefinitionLogConfigurationPropertyToTerraform(struct!.logConfiguration),
        memory: cdktn.numberToTerraform(struct!.memory),
        memory_reservation: cdktn.numberToTerraform(struct!.memoryReservation),
        mount_points: cdktn.listMapper(ccTaskDefinitionMountPointPropertyToTerraform, false)(struct!.mountPoints),
        name: cdktn.stringToTerraform(struct!.name),
        port_mappings: cdktn.listMapper(ccTaskDefinitionPortMappingPropertyToTerraform, false)(struct!.portMappings),
        privileged: cdktn.booleanToTerraform(struct!.privileged),
        pseudo_terminal: cdktn.booleanToTerraform(struct!.pseudoTerminal),
        readonly_root_filesystem: cdktn.booleanToTerraform(struct!.readonlyRootFilesystem),
        repository_credentials: ccTaskDefinitionRepositoryCredentialsPropertyToTerraform(struct!.repositoryCredentials),
        resource_requirements: cdktn.listMapper(ccTaskDefinitionResourceRequirementPropertyToTerraform, false)(struct!.resourceRequirements),
        restart_policy: ccTaskDefinitionRestartPolicyPropertyToTerraform(struct!.restartPolicy),
        secrets: cdktn.listMapper(ccTaskDefinitionSecretsPropertyToTerraform, false)(struct!.secrets),
        start_timeout: cdktn.numberToTerraform(struct!.startTimeout),
        stop_timeout: cdktn.numberToTerraform(struct!.stopTimeout),
        system_controls: cdktn.listMapper(ccTaskDefinitionSystemControlPropertyToTerraform, false)(struct!.systemControls),
        ulimits: cdktn.listMapper(ccTaskDefinitionUlimitPropertyToTerraform, false)(struct!.ulimits),
        user: cdktn.stringToTerraform(struct!.user),
        version_consistency: cdktn.stringToTerraform(struct!.versionConsistency),
        volumes_from: cdktn.listMapper(ccTaskDefinitionVolumeFromPropertyToTerraform, false)(struct!.volumesFrom),
        working_directory: cdktn.stringToTerraform(struct!.workingDirectory),
    }
}


export function ccTaskDefinitionContainerDefinitionPropertyToHclTerraform(struct?: CcTaskDefinition.ContainerDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        command: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cpu: {
            value: cdktn.numberToHclTerraform(struct!.cpu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        credential_specs: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.credentialSpecs),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        depends_on: {
            value: cdktn.listMapperHcl(ccTaskDefinitionContainerDependencyPropertyToHclTerraform, false)(struct!.dependsOn),
            isBlock: true,
            type: "list",
            storageClassType: "ContainerDependencyPropertyList",
        },
        disable_networking: {
            value: cdktn.booleanToHclTerraform(struct!.disableNetworking),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        dns_search_domains: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dnsSearchDomains),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        dns_servers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dnsServers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        docker_labels: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dockerLabels),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        docker_security_options: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dockerSecurityOptions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        entry_point: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entryPoint),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        environment: {
            value: cdktn.listMapperHcl(ccTaskDefinitionKeyValuePairPropertyToHclTerraform, false)(struct!.environment),
            isBlock: true,
            type: "set",
            storageClassType: "KeyValuePairPropertyList",
        },
        environment_files: {
            value: cdktn.listMapperHcl(ccTaskDefinitionEnvironmentFilePropertyToHclTerraform, false)(struct!.environmentFiles),
            isBlock: true,
            type: "list",
            storageClassType: "EnvironmentFilePropertyList",
        },
        essential: {
            value: cdktn.booleanToHclTerraform(struct!.essential),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        extra_hosts: {
            value: cdktn.listMapperHcl(ccTaskDefinitionHostEntryPropertyToHclTerraform, false)(struct!.extraHosts),
            isBlock: true,
            type: "list",
            storageClassType: "HostEntryPropertyList",
        },
        firelens_configuration: {
            value: ccTaskDefinitionFirelensConfigurationPropertyToHclTerraform(struct!.firelensConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "FirelensConfigurationProperty",
        },
        health_check: {
            value: ccTaskDefinitionHealthCheckPropertyToHclTerraform(struct!.healthCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "HealthCheckProperty",
        },
        hostname: {
            value: cdktn.stringToHclTerraform(struct!.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image: {
            value: cdktn.stringToHclTerraform(struct!.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        interactive: {
            value: cdktn.booleanToHclTerraform(struct!.interactive),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        links: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.links),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        linux_parameters: {
            value: ccTaskDefinitionLinuxParametersPropertyToHclTerraform(struct!.linuxParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "LinuxParametersProperty",
        },
        log_configuration: {
            value: ccTaskDefinitionLogConfigurationPropertyToHclTerraform(struct!.logConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LogConfigurationProperty",
        },
        memory: {
            value: cdktn.numberToHclTerraform(struct!.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        memory_reservation: {
            value: cdktn.numberToHclTerraform(struct!.memoryReservation),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mount_points: {
            value: cdktn.listMapperHcl(ccTaskDefinitionMountPointPropertyToHclTerraform, false)(struct!.mountPoints),
            isBlock: true,
            type: "list",
            storageClassType: "MountPointPropertyList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port_mappings: {
            value: cdktn.listMapperHcl(ccTaskDefinitionPortMappingPropertyToHclTerraform, false)(struct!.portMappings),
            isBlock: true,
            type: "set",
            storageClassType: "PortMappingPropertyList",
        },
        privileged: {
            value: cdktn.booleanToHclTerraform(struct!.privileged),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        pseudo_terminal: {
            value: cdktn.booleanToHclTerraform(struct!.pseudoTerminal),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        readonly_root_filesystem: {
            value: cdktn.booleanToHclTerraform(struct!.readonlyRootFilesystem),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        repository_credentials: {
            value: ccTaskDefinitionRepositoryCredentialsPropertyToHclTerraform(struct!.repositoryCredentials),
            isBlock: true,
            type: "struct",
            storageClassType: "RepositoryCredentialsProperty",
        },
        resource_requirements: {
            value: cdktn.listMapperHcl(ccTaskDefinitionResourceRequirementPropertyToHclTerraform, false)(struct!.resourceRequirements),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceRequirementPropertyList",
        },
        restart_policy: {
            value: ccTaskDefinitionRestartPolicyPropertyToHclTerraform(struct!.restartPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "RestartPolicyProperty",
        },
        secrets: {
            value: cdktn.listMapperHcl(ccTaskDefinitionSecretsPropertyToHclTerraform, false)(struct!.secrets),
            isBlock: true,
            type: "list",
            storageClassType: "SecretsPropertyList",
        },
        start_timeout: {
            value: cdktn.numberToHclTerraform(struct!.startTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stop_timeout: {
            value: cdktn.numberToHclTerraform(struct!.stopTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        system_controls: {
            value: cdktn.listMapperHcl(ccTaskDefinitionSystemControlPropertyToHclTerraform, false)(struct!.systemControls),
            isBlock: true,
            type: "list",
            storageClassType: "SystemControlPropertyList",
        },
        ulimits: {
            value: cdktn.listMapperHcl(ccTaskDefinitionUlimitPropertyToHclTerraform, false)(struct!.ulimits),
            isBlock: true,
            type: "list",
            storageClassType: "UlimitPropertyList",
        },
        user: {
            value: cdktn.stringToHclTerraform(struct!.user),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version_consistency: {
            value: cdktn.stringToHclTerraform(struct!.versionConsistency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volumes_from: {
            value: cdktn.listMapperHcl(ccTaskDefinitionVolumeFromPropertyToHclTerraform, false)(struct!.volumesFrom),
            isBlock: true,
            type: "set",
            storageClassType: "VolumeFromPropertyList",
        },
        working_directory: {
            value: cdktn.stringToHclTerraform(struct!.workingDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionEphemeralStoragePropertyToTerraform(struct?: CcTaskDefinition.EphemeralStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        size_in_gi_b: cdktn.numberToTerraform(struct!.sizeInGiB),
    }
}


export function ccTaskDefinitionEphemeralStoragePropertyToHclTerraform(struct?: CcTaskDefinition.EphemeralStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        size_in_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.sizeInGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionInferenceAcceleratorPropertyToTerraform(struct?: CcTaskDefinition.InferenceAcceleratorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_name: cdktn.stringToTerraform(struct!.deviceName),
        device_type: cdktn.stringToTerraform(struct!.deviceType),
    }
}


export function ccTaskDefinitionInferenceAcceleratorPropertyToHclTerraform(struct?: CcTaskDefinition.InferenceAcceleratorProperty | cdktn.IResolvable): any {
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
        device_type: {
            value: cdktn.stringToHclTerraform(struct!.deviceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionTaskDefinitionPlacementConstraintPropertyToTerraform(struct?: CcTaskDefinition.TaskDefinitionPlacementConstraintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTaskDefinitionTaskDefinitionPlacementConstraintPropertyToHclTerraform(struct?: CcTaskDefinition.TaskDefinitionPlacementConstraintProperty | cdktn.IResolvable): any {
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


export function ccTaskDefinitionProxyConfigurationPropertiesPropertyToTerraform(struct?: CcTaskDefinition.ProxyConfigurationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskDefinitionProxyConfigurationPropertiesPropertyToHclTerraform(struct?: CcTaskDefinition.ProxyConfigurationPropertiesProperty | cdktn.IResolvable): any {
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
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionProxyConfigurationPropertyToTerraform(struct?: CcTaskDefinition.ProxyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_name: cdktn.stringToTerraform(struct!.containerName),
        proxy_configuration_properties: cdktn.listMapper(ccTaskDefinitionProxyConfigurationPropertiesPropertyToTerraform, false)(struct!.proxyConfigurationProperties),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTaskDefinitionProxyConfigurationPropertyToHclTerraform(struct?: CcTaskDefinition.ProxyConfigurationProperty | cdktn.IResolvable): any {
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
        proxy_configuration_properties: {
            value: cdktn.listMapperHcl(ccTaskDefinitionProxyConfigurationPropertiesPropertyToHclTerraform, false)(struct!.proxyConfigurationProperties),
            isBlock: true,
            type: "set",
            storageClassType: "ProxyConfigurationPropertiesPropertyList",
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


export function ccTaskDefinitionRuntimePlatformPropertyToTerraform(struct?: CcTaskDefinition.RuntimePlatformProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu_architecture: cdktn.stringToTerraform(struct!.cpuArchitecture),
        operating_system_family: cdktn.stringToTerraform(struct!.operatingSystemFamily),
    }
}


export function ccTaskDefinitionRuntimePlatformPropertyToHclTerraform(struct?: CcTaskDefinition.RuntimePlatformProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpu_architecture: {
            value: cdktn.stringToHclTerraform(struct!.cpuArchitecture),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operating_system_family: {
            value: cdktn.stringToHclTerraform(struct!.operatingSystemFamily),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionTagPropertyToTerraform(struct?: CcTaskDefinition.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskDefinitionTagPropertyToHclTerraform(struct?: CcTaskDefinition.TagProperty | cdktn.IResolvable): any {
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


export function ccTaskDefinitionDockerVolumeConfigurationPropertyToTerraform(struct?: CcTaskDefinition.DockerVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        autoprovision: cdktn.booleanToTerraform(struct!.autoprovision),
        driver: cdktn.stringToTerraform(struct!.driver),
        driver_opts: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.driverOpts),
        labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
        scope: cdktn.stringToTerraform(struct!.scope),
    }
}


export function ccTaskDefinitionDockerVolumeConfigurationPropertyToHclTerraform(struct?: CcTaskDefinition.DockerVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        autoprovision: {
            value: cdktn.booleanToHclTerraform(struct!.autoprovision),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        driver: {
            value: cdktn.stringToHclTerraform(struct!.driver),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        driver_opts: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.driverOpts),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        labels: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        scope: {
            value: cdktn.stringToHclTerraform(struct!.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionAuthorizationConfigPropertyToTerraform(struct?: CcTaskDefinition.AuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_point_id: cdktn.stringToTerraform(struct!.accessPointId),
        iam: cdktn.stringToTerraform(struct!.iam),
    }
}


export function ccTaskDefinitionAuthorizationConfigPropertyToHclTerraform(struct?: CcTaskDefinition.AuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_point_id: {
            value: cdktn.stringToHclTerraform(struct!.accessPointId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam: {
            value: cdktn.stringToHclTerraform(struct!.iam),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionEFSVolumeConfigurationPropertyToTerraform(struct?: CcTaskDefinition.EFSVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_config: ccTaskDefinitionAuthorizationConfigPropertyToTerraform(struct!.authorizationConfig),
        filesystem_id: cdktn.stringToTerraform(struct!.filesystemId),
        root_directory: cdktn.stringToTerraform(struct!.rootDirectory),
        transit_encryption: cdktn.stringToTerraform(struct!.transitEncryption),
        transit_encryption_port: cdktn.numberToTerraform(struct!.transitEncryptionPort),
    }
}


export function ccTaskDefinitionEFSVolumeConfigurationPropertyToHclTerraform(struct?: CcTaskDefinition.EFSVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_config: {
            value: ccTaskDefinitionAuthorizationConfigPropertyToHclTerraform(struct!.authorizationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizationConfigProperty",
        },
        filesystem_id: {
            value: cdktn.stringToHclTerraform(struct!.filesystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        root_directory: {
            value: cdktn.stringToHclTerraform(struct!.rootDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transit_encryption: {
            value: cdktn.stringToHclTerraform(struct!.transitEncryption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transit_encryption_port: {
            value: cdktn.numberToHclTerraform(struct!.transitEncryptionPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionFSxAuthorizationConfigPropertyToTerraform(struct?: CcTaskDefinition.FSxAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        credentials_parameter: cdktn.stringToTerraform(struct!.credentialsParameter),
        domain: cdktn.stringToTerraform(struct!.domain),
    }
}


export function ccTaskDefinitionFSxAuthorizationConfigPropertyToHclTerraform(struct?: CcTaskDefinition.FSxAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        credentials_parameter: {
            value: cdktn.stringToHclTerraform(struct!.credentialsParameter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domain: {
            value: cdktn.stringToHclTerraform(struct!.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionFSxWindowsFileServerVolumeConfigurationPropertyToTerraform(struct?: CcTaskDefinition.FSxWindowsFileServerVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_config: ccTaskDefinitionFSxAuthorizationConfigPropertyToTerraform(struct!.authorizationConfig),
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        root_directory: cdktn.stringToTerraform(struct!.rootDirectory),
    }
}


export function ccTaskDefinitionFSxWindowsFileServerVolumeConfigurationPropertyToHclTerraform(struct?: CcTaskDefinition.FSxWindowsFileServerVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_config: {
            value: ccTaskDefinitionFSxAuthorizationConfigPropertyToHclTerraform(struct!.authorizationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "FSxAuthorizationConfigProperty",
        },
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        root_directory: {
            value: cdktn.stringToHclTerraform(struct!.rootDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionHostVolumePropertiesPropertyToTerraform(struct?: CcTaskDefinition.HostVolumePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_path: cdktn.stringToTerraform(struct!.sourcePath),
    }
}


export function ccTaskDefinitionHostVolumePropertiesPropertyToHclTerraform(struct?: CcTaskDefinition.HostVolumePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_path: {
            value: cdktn.stringToHclTerraform(struct!.sourcePath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionS3FilesVolumeConfigurationPropertyToTerraform(struct?: CcTaskDefinition.S3FilesVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
        file_system_arn: cdktn.stringToTerraform(struct!.fileSystemArn),
        root_directory: cdktn.stringToTerraform(struct!.rootDirectory),
        transit_encryption_port: cdktn.numberToTerraform(struct!.transitEncryptionPort),
    }
}


export function ccTaskDefinitionS3FilesVolumeConfigurationPropertyToHclTerraform(struct?: CcTaskDefinition.S3FilesVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_point_arn: {
            value: cdktn.stringToHclTerraform(struct!.accessPointArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_system_arn: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        root_directory: {
            value: cdktn.stringToHclTerraform(struct!.rootDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transit_encryption_port: {
            value: cdktn.numberToHclTerraform(struct!.transitEncryptionPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionVolumePropertyToTerraform(struct?: CcTaskDefinition.VolumeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configured_at_launch: cdktn.booleanToTerraform(struct!.configuredAtLaunch),
        docker_volume_configuration: ccTaskDefinitionDockerVolumeConfigurationPropertyToTerraform(struct!.dockerVolumeConfiguration),
        efs_volume_configuration: ccTaskDefinitionEFSVolumeConfigurationPropertyToTerraform(struct!.efsVolumeConfiguration),
        fsx_windows_file_server_volume_configuration: ccTaskDefinitionFSxWindowsFileServerVolumeConfigurationPropertyToTerraform(struct!.fsxWindowsFileServerVolumeConfiguration),
        host: ccTaskDefinitionHostVolumePropertiesPropertyToTerraform(struct!.host),
        name: cdktn.stringToTerraform(struct!.name),
        s3_files_volume_configuration: ccTaskDefinitionS3FilesVolumeConfigurationPropertyToTerraform(struct!.s3FilesVolumeConfiguration),
    }
}


export function ccTaskDefinitionVolumePropertyToHclTerraform(struct?: CcTaskDefinition.VolumeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configured_at_launch: {
            value: cdktn.booleanToHclTerraform(struct!.configuredAtLaunch),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        docker_volume_configuration: {
            value: ccTaskDefinitionDockerVolumeConfigurationPropertyToHclTerraform(struct!.dockerVolumeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DockerVolumeConfigurationProperty",
        },
        efs_volume_configuration: {
            value: ccTaskDefinitionEFSVolumeConfigurationPropertyToHclTerraform(struct!.efsVolumeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EFSVolumeConfigurationProperty",
        },
        fsx_windows_file_server_volume_configuration: {
            value: ccTaskDefinitionFSxWindowsFileServerVolumeConfigurationPropertyToHclTerraform(struct!.fsxWindowsFileServerVolumeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "FSxWindowsFileServerVolumeConfigurationProperty",
        },
        host: {
            value: ccTaskDefinitionHostVolumePropertiesPropertyToHclTerraform(struct!.host),
            isBlock: true,
            type: "struct",
            storageClassType: "HostVolumePropertiesProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_files_volume_configuration: {
            value: ccTaskDefinitionS3FilesVolumeConfigurationPropertyToHclTerraform(struct!.s3FilesVolumeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3FilesVolumeConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTaskDefinition {
export interface ContainerDependencyProperty {
    /**
    * The dependency condition of the container. The following are the available conditions and their behavior:
    *   +  ``START`` - This condition emulates the behavior of links and volumes today. It validates that a dependent container is started before permitting other containers to start.
    *   +  ``COMPLETE`` - This condition validates that a dependent container runs to completion (exits) before permitting other containers to start. This can be useful for nonessential containers that run a script and then exit. This condition can't be set on an essential container.
    *   +  ``SUCCESS`` - This condition is the same as ``COMPLETE``, but it also requires that the container exits with a ``zero`` status. This condition can't be set on an essential container.
    *   +  ``HEALTHY`` - This condition validates that the dependent container passes its Docker health check before permitting other containers to start. This requires that the dependent container has health checks configured. This condition is confirmed only at task startup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#condition CcTaskDefinition#condition}
    */
    readonly condition?: string;
    /**
    * The name of a container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#container_name CcTaskDefinition#container_name}
    */
    readonly containerName?: string;
}
export class ContainerDependencyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContainerDependencyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._condition !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition;
        }
        if (this._containerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerName = this._containerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerDependencyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._condition = undefined;
            this._containerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._condition = value.condition;
            this._containerName = value.containerName;
        }
    }

    // condition - computed: true, optional: true, required: false
    private _condition?: string; 
    public get condition() {
        return this.getStringAttribute('condition');
    }
    public set condition(value: string) {
        this._condition = value;
    }
    public resetCondition() {
        this._condition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
        return this._condition;
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
}

export class ContainerDependencyPropertyList extends cdktn.ComplexList {
    public internalValue? : ContainerDependencyProperty[] | cdktn.IResolvable

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
    public get(index: number): ContainerDependencyPropertyOutputReference {
        return new ContainerDependencyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KeyValuePairProperty {
    /**
    * The name of the key-value pair. For environment variables, this is the name of the environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#name CcTaskDefinition#name}
    */
    readonly name?: string;
    /**
    * The value of the key-value pair. For environment variables, this is the value of the environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#value CcTaskDefinition#value}
    */
    readonly value?: string;
}
export class KeyValuePairPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KeyValuePairProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeyValuePairProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class KeyValuePairPropertyList extends cdktn.ComplexList {
    public internalValue? : KeyValuePairProperty[] | cdktn.IResolvable

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
    public get(index: number): KeyValuePairPropertyOutputReference {
        return new KeyValuePairPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EnvironmentFileProperty {
    /**
    * The file type to use. Environment files are objects in Amazon S3. The only supported value is ``s3``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#type CcTaskDefinition#type}
    */
    readonly type?: string;
    /**
    * The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#value CcTaskDefinition#value}
    */
    readonly value?: string;
}
export class EnvironmentFilePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EnvironmentFileProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EnvironmentFileProperty | cdktn.IResolvable | undefined) {
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

export class EnvironmentFilePropertyList extends cdktn.ComplexList {
    public internalValue? : EnvironmentFileProperty[] | cdktn.IResolvable

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
    public get(index: number): EnvironmentFilePropertyOutputReference {
        return new EnvironmentFilePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HostEntryProperty {
    /**
    * The hostname to use in the ``/etc/hosts`` entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#hostname CcTaskDefinition#hostname}
    */
    readonly hostname?: string;
    /**
    * The IP address to use in the ``/etc/hosts`` entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#ip_address CcTaskDefinition#ip_address}
    */
    readonly ipAddress?: string;
}
export class HostEntryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HostEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._ipAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddress = this._ipAddress;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HostEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostname = undefined;
            this._ipAddress = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostname = value.hostname;
            this._ipAddress = value.ipAddress;
        }
    }

    // hostname - computed: true, optional: true, required: false
    private _hostname?: string; 
    public get hostname() {
        return this.getStringAttribute('hostname');
    }
    public set hostname(value: string) {
        this._hostname = value;
    }
    public resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostnameInput() {
        return this._hostname;
    }

    // ip_address - computed: true, optional: true, required: false
    private _ipAddress?: string; 
    public get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    public set ipAddress(value: string) {
        this._ipAddress = value;
    }
    public resetIpAddress() {
        this._ipAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressInput() {
        return this._ipAddress;
    }
}

export class HostEntryPropertyList extends cdktn.ComplexList {
    public internalValue? : HostEntryProperty[] | cdktn.IResolvable

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
    public get(index: number): HostEntryPropertyOutputReference {
        return new HostEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FirelensConfigurationProperty {
    /**
    * The options to use when configuring the log router. This field is optional and can be used to add additional metadata, such as the task, task definition, cluster, and container instance details to the log event.
    *   If specified, valid option keys are:
    *   +  ``enable-ecs-log-metadata``, which can be ``true`` or ``false``
    *   +  ``config-file-type``, which can be ``s3`` or ``file``
    *   +  ``config-file-value``, which is either an S3 ARN or a file path
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#options CcTaskDefinition#options}
    */
    readonly options?: { [key: string]: string };
    /**
    * The log router to use. The valid values are ``fluentd`` or ``fluentbit``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#type CcTaskDefinition#type}
    */
    readonly type?: string;
}
export class FirelensConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirelensConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._options !== undefined) {
            hasAnyValues = true;
            internalValueResult.options = this._options;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirelensConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._options = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._options = value.options;
            this._type = value.type;
        }
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
export interface HealthCheckProperty {
    /**
    * A string array representing the command that the container runs to determine if it is healthy. The string array must start with ``CMD`` to run the command arguments directly, or ``CMD-SHELL`` to run the command with the container's default shell. 
    *   When you use the AWS Management Console JSON panel, the CLIlong, or the APIs, enclose the list of commands in double quotes and brackets.
    *   ``[ "CMD-SHELL", "curl -f http://localhost/ || exit 1" ]`` 
    *  You don't include the double quotes and brackets when you use the AWS Management Console.
    *   ``CMD-SHELL, curl -f http://localhost/ || exit 1`` 
    *  An exit code of 0 indicates success, and non-zero exit code indicates failure. For more information, see ``HealthCheck`` in the docker container create command.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#command CcTaskDefinition#command}
    */
    readonly command?: string[];
    /**
    * The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds. This value applies only when you specify a ``command``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#interval CcTaskDefinition#interval}
    */
    readonly interval?: number;
    /**
    * The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3. This value applies only when you specify a ``command``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#retries CcTaskDefinition#retries}
    */
    readonly retries?: number;
    /**
    * The optional grace period to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You can specify between 0 and 300 seconds. By default, the ``startPeriod`` is off. This value applies only when you specify a ``command``. 
    *   If a health check succeeds within the ``startPeriod``, then the container is considered healthy and any subsequent failures count toward the maximum number of retries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#start_period CcTaskDefinition#start_period}
    */
    readonly startPeriod?: number;
    /**
    * The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5. This value applies only when you specify a ``command``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#timeout CcTaskDefinition#timeout}
    */
    readonly timeout?: number;
}
export class HealthCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HealthCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._command !== undefined) {
            hasAnyValues = true;
            internalValueResult.command = this._command;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._retries !== undefined) {
            hasAnyValues = true;
            internalValueResult.retries = this._retries;
        }
        if (this._startPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.startPeriod = this._startPeriod;
        }
        if (this._timeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._command = undefined;
            this._interval = undefined;
            this._retries = undefined;
            this._startPeriod = undefined;
            this._timeout = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._command = value.command;
            this._interval = value.interval;
            this._retries = value.retries;
            this._startPeriod = value.startPeriod;
            this._timeout = value.timeout;
        }
    }

    // command - computed: true, optional: true, required: false
    private _command?: string[]; 
    public get command() {
        return this.getListAttribute('command');
    }
    public set command(value: string[]) {
        this._command = value;
    }
    public resetCommand() {
        this._command = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commandInput() {
        return this._command;
    }

    // interval - computed: true, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // retries - computed: true, optional: true, required: false
    private _retries?: number; 
    public get retries() {
        return this.getNumberAttribute('retries');
    }
    public set retries(value: number) {
        this._retries = value;
    }
    public resetRetries() {
        this._retries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retriesInput() {
        return this._retries;
    }

    // start_period - computed: true, optional: true, required: false
    private _startPeriod?: number; 
    public get startPeriod() {
        return this.getNumberAttribute('start_period');
    }
    public set startPeriod(value: number) {
        this._startPeriod = value;
    }
    public resetStartPeriod() {
        this._startPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startPeriodInput() {
        return this._startPeriod;
    }

    // timeout - computed: true, optional: true, required: false
    private _timeout?: number; 
    public get timeout() {
        return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number) {
        this._timeout = value;
    }
    public resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
        return this._timeout;
    }
}
export interface KernelCapabilitiesProperty {
    /**
    * The Linux capabilities for the container that have been added to the default configuration provided by Docker. This parameter maps to ``CapAdd`` in the docker container create command and the ``--cap-add`` option to docker run.
    *   Tasks launched on FARGATElong only support adding the ``SYS_PTRACE`` kernel capability.
    *   Valid values: ``"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#add CcTaskDefinition#add}
    */
    readonly add?: string[];
    /**
    * The Linux capabilities for the container that have been removed from the default configuration provided by Docker. This parameter maps to ``CapDrop`` in the docker container create command and the ``--cap-drop`` option to docker run.
    *  Valid values: ``"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#drop CcTaskDefinition#drop}
    */
    readonly drop?: string[];
}
export class KernelCapabilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KernelCapabilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._add !== undefined) {
            hasAnyValues = true;
            internalValueResult.add = this._add;
        }
        if (this._drop !== undefined) {
            hasAnyValues = true;
            internalValueResult.drop = this._drop;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KernelCapabilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._add = undefined;
            this._drop = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._add = value.add;
            this._drop = value.drop;
        }
    }

    // add - computed: true, optional: true, required: false
    private _add?: string[]; 
    public get add() {
        return this.getListAttribute('add');
    }
    public set add(value: string[]) {
        this._add = value;
    }
    public resetAdd() {
        this._add = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addInput() {
        return this._add;
    }

    // drop - computed: true, optional: true, required: false
    private _drop?: string[]; 
    public get drop() {
        return this.getListAttribute('drop');
    }
    public set drop(value: string[]) {
        this._drop = value;
    }
    public resetDrop() {
        this._drop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dropInput() {
        return this._drop;
    }
}
export interface DeviceProperty {
    /**
    * The path inside the container at which to expose the host device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#container_path CcTaskDefinition#container_path}
    */
    readonly containerPath?: string;
    /**
    * The path for the device on the host container instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#host_path CcTaskDefinition#host_path}
    */
    readonly hostPath?: string;
    /**
    * The explicit permissions to provide to the container for the device. By default, the container has permissions for ``read``, ``write``, and ``mknod`` for the device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#permissions CcTaskDefinition#permissions}
    */
    readonly permissions?: string[];
}
export class DevicePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DeviceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPath = this._containerPath;
        }
        if (this._hostPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostPath = this._hostPath;
        }
        if (this._permissions !== undefined) {
            hasAnyValues = true;
            internalValueResult.permissions = this._permissions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeviceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerPath = undefined;
            this._hostPath = undefined;
            this._permissions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerPath = value.containerPath;
            this._hostPath = value.hostPath;
            this._permissions = value.permissions;
        }
    }

    // container_path - computed: true, optional: true, required: false
    private _containerPath?: string; 
    public get containerPath() {
        return this.getStringAttribute('container_path');
    }
    public set containerPath(value: string) {
        this._containerPath = value;
    }
    public resetContainerPath() {
        this._containerPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerPathInput() {
        return this._containerPath;
    }

    // host_path - computed: true, optional: true, required: false
    private _hostPath?: string; 
    public get hostPath() {
        return this.getStringAttribute('host_path');
    }
    public set hostPath(value: string) {
        this._hostPath = value;
    }
    public resetHostPath() {
        this._hostPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostPathInput() {
        return this._hostPath;
    }

    // permissions - computed: true, optional: true, required: false
    private _permissions?: string[]; 
    public get permissions() {
        return cdktn.Fn.tolist(this.getListAttribute('permissions'));
    }
    public set permissions(value: string[]) {
        this._permissions = value;
    }
    public resetPermissions() {
        this._permissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions;
    }
}

export class DevicePropertyList extends cdktn.ComplexList {
    public internalValue? : DeviceProperty[] | cdktn.IResolvable

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
    public get(index: number): DevicePropertyOutputReference {
        return new DevicePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TmpfsProperty {
    /**
    * The absolute file path where the tmpfs volume is to be mounted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#container_path CcTaskDefinition#container_path}
    */
    readonly containerPath?: string;
    /**
    * The list of tmpfs volume mount options.
    *  Valid values: ``"defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" | "exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" | "atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid" | "nr_inodes" | "nr_blocks" | "mpol"``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#mount_options CcTaskDefinition#mount_options}
    */
    readonly mountOptions?: string[];
    /**
    * The maximum size (in MiB) of the tmpfs volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#size CcTaskDefinition#size}
    */
    readonly size?: number;
}
export class TmpfsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TmpfsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPath = this._containerPath;
        }
        if (this._mountOptions !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountOptions = this._mountOptions;
        }
        if (this._size !== undefined) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TmpfsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerPath = undefined;
            this._mountOptions = undefined;
            this._size = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerPath = value.containerPath;
            this._mountOptions = value.mountOptions;
            this._size = value.size;
        }
    }

    // container_path - computed: true, optional: true, required: false
    private _containerPath?: string; 
    public get containerPath() {
        return this.getStringAttribute('container_path');
    }
    public set containerPath(value: string) {
        this._containerPath = value;
    }
    public resetContainerPath() {
        this._containerPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerPathInput() {
        return this._containerPath;
    }

    // mount_options - computed: true, optional: true, required: false
    private _mountOptions?: string[]; 
    public get mountOptions() {
        return this.getListAttribute('mount_options');
    }
    public set mountOptions(value: string[]) {
        this._mountOptions = value;
    }
    public resetMountOptions() {
        this._mountOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountOptionsInput() {
        return this._mountOptions;
    }

    // size - computed: true, optional: true, required: false
    private _size?: number; 
    public get size() {
        return this.getNumberAttribute('size');
    }
    public set size(value: number) {
        this._size = value;
    }
    public resetSize() {
        this._size = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInput() {
        return this._size;
    }
}

export class TmpfsPropertyList extends cdktn.ComplexList {
    public internalValue? : TmpfsProperty[] | cdktn.IResolvable

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
    public get(index: number): TmpfsPropertyOutputReference {
        return new TmpfsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LinuxParametersProperty {
    /**
    * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
    *   For tasks that use the Fargate launch type, ``capabilities`` is supported for all platform versions but the ``add`` parameter is only supported if using platform version 1.4.0 or later.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#capabilities CcTaskDefinition#capabilities}
    */
    readonly capabilities?: KernelCapabilitiesProperty;
    /**
    * Any host devices to expose to the container. This parameter maps to ``Devices`` in the docker container create command and the ``--device`` option to docker run.
    *   If you're using tasks that use the Fargate launch type, the ``devices`` parameter isn't supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#devices CcTaskDefinition#devices}
    */
    readonly devices?: DeviceProperty[] | cdktn.IResolvable;
    /**
    * Run an ``init`` process inside the container that forwards signals and reaps processes. This parameter maps to the ``--init`` option to docker run. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#init_process_enabled CcTaskDefinition#init_process_enabled}
    */
    readonly initProcessEnabled?: boolean | cdktn.IResolvable;
    /**
    * The total amount of swap memory (in MiB) a container can use. This parameter will be translated to the ``--memory-swap`` option to docker run where the value would be the sum of the container memory plus the ``maxSwap`` value.
    *  If a ``maxSwap`` value of ``0`` is specified, the container will not use swap. Accepted values are ``0`` or any positive integer. If the ``maxSwap`` parameter is omitted, the container will use the swap configuration for the container instance it is running on. A ``maxSwap`` value must be set for the ``swappiness`` parameter to be used.
    *   If you're using tasks that use the Fargate launch type, the ``maxSwap`` parameter isn't supported.
    *  If you're using tasks on Amazon Linux 2023 the ``swappiness`` parameter isn't supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#max_swap CcTaskDefinition#max_swap}
    */
    readonly maxSwap?: number;
    /**
    * The value for the size (in MiB) of the ``/dev/shm`` volume. This parameter maps to the ``--shm-size`` option to docker run.
    *   If you are using tasks that use the Fargate launch type, the ``sharedMemorySize`` parameter is not supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#shared_memory_size CcTaskDefinition#shared_memory_size}
    */
    readonly sharedMemorySize?: number;
    /**
    * This allows you to tune a container's memory swappiness behavior. A ``swappiness`` value of ``0`` will cause swapping to not happen unless absolutely necessary. A ``swappiness`` value of ``100`` will cause pages to be swapped very aggressively. Accepted values are whole numbers between ``0`` and ``100``. If the ``swappiness`` parameter is not specified, a default value of ``60`` is used. If a value is not specified for ``maxSwap`` then this parameter is ignored. This parameter maps to the ``--memory-swappiness`` option to docker run.
    *   If you're using tasks that use the Fargate launch type, the ``swappiness`` parameter isn't supported.
    *  If you're using tasks on Amazon Linux 2023 the ``swappiness`` parameter isn't supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#swappiness CcTaskDefinition#swappiness}
    */
    readonly swappiness?: number;
    /**
    * The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the ``--tmpfs`` option to docker run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#tmpfs CcTaskDefinition#tmpfs}
    */
    readonly tmpfs?: TmpfsProperty[] | cdktn.IResolvable;
}
export class LinuxParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LinuxParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capabilities?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capabilities = this._capabilities?.internalValue;
        }
        if (this._devices?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.devices = this._devices?.internalValue;
        }
        if (this._initProcessEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.initProcessEnabled = this._initProcessEnabled;
        }
        if (this._maxSwap !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxSwap = this._maxSwap;
        }
        if (this._sharedMemorySize !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharedMemorySize = this._sharedMemorySize;
        }
        if (this._swappiness !== undefined) {
            hasAnyValues = true;
            internalValueResult.swappiness = this._swappiness;
        }
        if (this._tmpfs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tmpfs = this._tmpfs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LinuxParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capabilities.internalValue = undefined;
            this._devices.internalValue = undefined;
            this._initProcessEnabled = undefined;
            this._maxSwap = undefined;
            this._sharedMemorySize = undefined;
            this._swappiness = undefined;
            this._tmpfs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capabilities.internalValue = value.capabilities;
            this._devices.internalValue = value.devices;
            this._initProcessEnabled = value.initProcessEnabled;
            this._maxSwap = value.maxSwap;
            this._sharedMemorySize = value.sharedMemorySize;
            this._swappiness = value.swappiness;
            this._tmpfs.internalValue = value.tmpfs;
        }
    }

    // capabilities - computed: true, optional: true, required: false
    private _capabilities = new KernelCapabilitiesPropertyOutputReference(this, "capabilities");
    public get capabilities() {
        return this._capabilities;
    }
    public putCapabilities(value: KernelCapabilitiesProperty) {
        this._capabilities.internalValue = value;
    }
    public resetCapabilities() {
        this._capabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capabilitiesInput() {
        return this._capabilities.internalValue;
    }

    // devices - computed: true, optional: true, required: false
    private _devices = new DevicePropertyList(this, "devices", false);
    public get devices() {
        return this._devices;
    }
    public putDevices(value: DeviceProperty[] | cdktn.IResolvable) {
        this._devices.internalValue = value;
    }
    public resetDevices() {
        this._devices.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get devicesInput() {
        return this._devices.internalValue;
    }

    // init_process_enabled - computed: true, optional: true, required: false
    private _initProcessEnabled?: boolean | cdktn.IResolvable; 
    public get initProcessEnabled() {
        return this.getBooleanAttribute('init_process_enabled');
    }
    public set initProcessEnabled(value: boolean | cdktn.IResolvable) {
        this._initProcessEnabled = value;
    }
    public resetInitProcessEnabled() {
        this._initProcessEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initProcessEnabledInput() {
        return this._initProcessEnabled;
    }

    // max_swap - computed: true, optional: true, required: false
    private _maxSwap?: number; 
    public get maxSwap() {
        return this.getNumberAttribute('max_swap');
    }
    public set maxSwap(value: number) {
        this._maxSwap = value;
    }
    public resetMaxSwap() {
        this._maxSwap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSwapInput() {
        return this._maxSwap;
    }

    // shared_memory_size - computed: true, optional: true, required: false
    private _sharedMemorySize?: number; 
    public get sharedMemorySize() {
        return this.getNumberAttribute('shared_memory_size');
    }
    public set sharedMemorySize(value: number) {
        this._sharedMemorySize = value;
    }
    public resetSharedMemorySize() {
        this._sharedMemorySize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharedMemorySizeInput() {
        return this._sharedMemorySize;
    }

    // swappiness - computed: true, optional: true, required: false
    private _swappiness?: number; 
    public get swappiness() {
        return this.getNumberAttribute('swappiness');
    }
    public set swappiness(value: number) {
        this._swappiness = value;
    }
    public resetSwappiness() {
        this._swappiness = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get swappinessInput() {
        return this._swappiness;
    }

    // tmpfs - computed: true, optional: true, required: false
    private _tmpfs = new TmpfsPropertyList(this, "tmpfs", false);
    public get tmpfs() {
        return this._tmpfs;
    }
    public putTmpfs(value: TmpfsProperty[] | cdktn.IResolvable) {
        this._tmpfs.internalValue = value;
    }
    public resetTmpfs() {
        this._tmpfs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tmpfsInput() {
        return this._tmpfs.internalValue;
    }
}
export interface SecretProperty {
    /**
    * The name of the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#name CcTaskDefinition#name}
    */
    readonly name?: string;
    /**
    * The secret to expose to the container. The supported values are either the full ARN of the ASMlong secret or the full ARN of the parameter in the SSM Parameter Store.
    *  For information about the require IAMlong permissions, see [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam) (for Secrets Manager) or [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html) (for Systems Manager Parameter store) in the *Amazon Elastic Container Service Developer Guide*.
    *   If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#value_from CcTaskDefinition#value_from}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#log_driver CcTaskDefinition#log_driver}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#options CcTaskDefinition#options}
    */
    readonly options?: { [key: string]: string };
    /**
    * The secrets to pass to the log configuration. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#secret_options CcTaskDefinition#secret_options}
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
export interface MountPointProperty {
    /**
    * The path on the container to mount the host volume at.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#container_path CcTaskDefinition#container_path}
    */
    readonly containerPath?: string;
    /**
    * If this value is ``true``, the container has read-only access to the volume. If this value is ``false``, then the container can write to the volume. The default value is ``false``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#read_only CcTaskDefinition#read_only}
    */
    readonly readOnly?: boolean | cdktn.IResolvable;
    /**
    * The name of the volume to mount. Must be a volume name referenced in the ``name`` parameter of task definition ``volume``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#source_volume CcTaskDefinition#source_volume}
    */
    readonly sourceVolume?: string;
}
export class MountPointPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MountPointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPath = this._containerPath;
        }
        if (this._readOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnly = this._readOnly;
        }
        if (this._sourceVolume !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceVolume = this._sourceVolume;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MountPointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerPath = undefined;
            this._readOnly = undefined;
            this._sourceVolume = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerPath = value.containerPath;
            this._readOnly = value.readOnly;
            this._sourceVolume = value.sourceVolume;
        }
    }

    // container_path - computed: true, optional: true, required: false
    private _containerPath?: string; 
    public get containerPath() {
        return this.getStringAttribute('container_path');
    }
    public set containerPath(value: string) {
        this._containerPath = value;
    }
    public resetContainerPath() {
        this._containerPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerPathInput() {
        return this._containerPath;
    }

    // read_only - computed: true, optional: true, required: false
    private _readOnly?: boolean | cdktn.IResolvable; 
    public get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    public set readOnly(value: boolean | cdktn.IResolvable) {
        this._readOnly = value;
    }
    public resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readOnlyInput() {
        return this._readOnly;
    }

    // source_volume - computed: true, optional: true, required: false
    private _sourceVolume?: string; 
    public get sourceVolume() {
        return this.getStringAttribute('source_volume');
    }
    public set sourceVolume(value: string) {
        this._sourceVolume = value;
    }
    public resetSourceVolume() {
        this._sourceVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceVolumeInput() {
        return this._sourceVolume;
    }
}

export class MountPointPropertyList extends cdktn.ComplexList {
    public internalValue? : MountPointProperty[] | cdktn.IResolvable

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
    public get(index: number): MountPointPropertyOutputReference {
        return new MountPointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PortMappingProperty {
    /**
    * The application protocol that's used for the port mapping. This parameter only applies to Service Connect. We recommend that you set this parameter to be consistent with the protocol that your application uses. If you set this parameter, Amazon ECS adds protocol-specific connection handling to the Service Connect proxy. If you set this parameter, Amazon ECS adds protocol-specific telemetry in the Amazon ECS console and CloudWatch.
    *  If you don't set a value for this parameter, then TCP is used. However, Amazon ECS doesn't add protocol-specific telemetry for TCP.
    *  ``appProtocol`` is immutable in a Service Connect service. Updating this field requires a service deletion and redeployment.
    *  Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#app_protocol CcTaskDefinition#app_protocol}
    */
    readonly appProtocol?: string;
    /**
    * The port number on the container that's bound to the user-specified or automatically assigned host port.
    *  If you use containers in a task with the ``awsvpc`` or ``host`` network mode, specify the exposed ports using ``containerPort``.
    *  If you use containers in a task with the ``bridge`` network mode and you specify a container port and not a host port, your container automatically receives a host port in the ephemeral port range. For more information, see ``hostPort``. Port mappings that are automatically assigned in this way do not count toward the 100 reserved ports limit of a container instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#container_port CcTaskDefinition#container_port}
    */
    readonly containerPort?: number;
    /**
    * The port number range on the container that's bound to the dynamically mapped host port range. 
    *  The following rules apply when you specify a ``containerPortRange``:
    *   +  You must use either the ``bridge`` network mode or the ``awsvpc`` network mode.
    *   +  This parameter is available for both the EC2 and FARGATElong launch types.
    *   +  This parameter is available for both the Linux and Windows operating systems.
    *   +  The container instance must have at least version 1.67.0 of the container agent and at least version 1.67.0-1 of the ``ecs-init`` package 
    *   +  You can specify a maximum of 100 port ranges per container.
    *   +  You do not specify a ``hostPortRange``. The value of the ``hostPortRange`` is set as follows:
    *   +  For containers in a task with the ``awsvpc`` network mode, the ``hostPortRange`` is set to the same value as the ``containerPortRange``. This is a static mapping strategy.
    *   +  For containers in a task with the ``bridge`` network mode, the Amazon ECS agent finds open host ports from the default ephemeral range and passes it to docker to bind them to the container ports.
    *   
    *   +  The ``containerPortRange`` valid values are between 1 and 65535.
    *   +  A port can only be included in one port mapping per container.
    *   +  You cannot specify overlapping port ranges.
    *   +  The first port in the range must be less than last port in the range.
    *   +  Docker recommends that you turn off the docker-proxy in the Docker daemon config file when you have a large number of ports.
    *  For more information, see [Issue #11185](https://docs.aws.amazon.com/https://github.com/moby/moby/issues/11185) on the Github website.
    *  For information about how to turn off the docker-proxy in the Docker daemon config file, see [Docker daemon](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap_container_instance.html#bootstrap_docker_daemon) in the *Amazon ECS Developer Guide*.
    *   
    *  You can call [DescribeTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) to view the ``hostPortRange`` which are the host ports that are bound to the container ports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#container_port_range CcTaskDefinition#container_port_range}
    */
    readonly containerPortRange?: string;
    /**
    * The port number on the container instance to reserve for your container.
    *  If you specify a ``containerPortRange``, leave this field empty and the value of the ``hostPort`` is set as follows:
    *   +  For containers in a task with the ``awsvpc`` network mode, the ``hostPort`` is set to the same value as the ``containerPort``. This is a static mapping strategy.
    *   +  For containers in a task with the ``bridge`` network mode, the Amazon ECS agent finds open ports on the host and automatically binds them to the container ports. This is a dynamic mapping strategy.
    *   
    *  If you use containers in a task with the ``awsvpc`` or ``host`` network mode, the ``hostPort`` can either be left blank or set to the same value as the ``containerPort``.
    *  If you use containers in a task with the ``bridge`` network mode, you can specify a non-reserved host port for your container port mapping, or you can omit the ``hostPort`` (or set it to ``0``) while specifying a ``containerPort`` and your container automatically receives a port in the ephemeral port range for your container instance operating system and Docker version.
    *  The default ephemeral port range for Docker version 1.6.0 and later is listed on the instance under ``/proc/sys/net/ipv4/ip_local_port_range``. If this kernel parameter is unavailable, the default ephemeral port range from 49153 through 65535 (Linux) or 49152 through 65535 (Windows) is used. Do not attempt to specify a host port in the ephemeral port range as these are reserved for automatic assignment. In general, ports below 32768 are outside of the ephemeral port range.
    *  The default reserved ports are 22 for SSH, the Docker ports 2375 and 2376, and the Amazon ECS container agent ports 51678-51680. Any host port that was previously specified in a running task is also reserved while the task is running. That is, after a task stops, the host port is released. The current reserved ports are displayed in the ``remainingResources`` of [DescribeContainerInstances](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html) output. A container instance can have up to 100 reserved ports at a time. This number includes the default reserved ports. Automatically assigned ports aren't included in the 100 reserved ports quota.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#host_port CcTaskDefinition#host_port}
    */
    readonly hostPort?: number;
    /**
    * The name that's used for the port mapping. This parameter is the name that you use in the ``serviceConnectConfiguration`` and the ``vpcLatticeConfigurations`` of a service. The name can include up to 64 characters. The characters can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#name CcTaskDefinition#name}
    */
    readonly name?: string;
    /**
    * The protocol used for the port mapping. Valid values are ``tcp`` and ``udp``. The default is ``tcp``. ``protocol`` is immutable in a Service Connect service. Updating this field requires a service deletion and redeployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#protocol CcTaskDefinition#protocol}
    */
    readonly protocol?: string;
}
export class PortMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PortMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appProtocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.appProtocol = this._appProtocol;
        }
        if (this._containerPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPort = this._containerPort;
        }
        if (this._containerPortRange !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPortRange = this._containerPortRange;
        }
        if (this._hostPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostPort = this._hostPort;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PortMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appProtocol = undefined;
            this._containerPort = undefined;
            this._containerPortRange = undefined;
            this._hostPort = undefined;
            this._name = undefined;
            this._protocol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appProtocol = value.appProtocol;
            this._containerPort = value.containerPort;
            this._containerPortRange = value.containerPortRange;
            this._hostPort = value.hostPort;
            this._name = value.name;
            this._protocol = value.protocol;
        }
    }

    // app_protocol - computed: true, optional: true, required: false
    private _appProtocol?: string; 
    public get appProtocol() {
        return this.getStringAttribute('app_protocol');
    }
    public set appProtocol(value: string) {
        this._appProtocol = value;
    }
    public resetAppProtocol() {
        this._appProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appProtocolInput() {
        return this._appProtocol;
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

    // container_port_range - computed: true, optional: true, required: false
    private _containerPortRange?: string; 
    public get containerPortRange() {
        return this.getStringAttribute('container_port_range');
    }
    public set containerPortRange(value: string) {
        this._containerPortRange = value;
    }
    public resetContainerPortRange() {
        this._containerPortRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerPortRangeInput() {
        return this._containerPortRange;
    }

    // host_port - computed: true, optional: true, required: false
    private _hostPort?: number; 
    public get hostPort() {
        return this.getNumberAttribute('host_port');
    }
    public set hostPort(value: number) {
        this._hostPort = value;
    }
    public resetHostPort() {
        this._hostPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostPortInput() {
        return this._hostPort;
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
}

export class PortMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : PortMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): PortMappingPropertyOutputReference {
        return new PortMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RepositoryCredentialsProperty {
    /**
    * The Amazon Resource Name (ARN) of the secret containing the private repository credentials.
    *   When you use the Amazon ECS API, CLI, or AWS SDK, if the secret exists in the same Region as the task that you're launching then you can use either the full ARN or the name of the secret. When you use the AWS Management Console, you must specify the full ARN of the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#credentials_parameter CcTaskDefinition#credentials_parameter}
    */
    readonly credentialsParameter?: string;
}
export class RepositoryCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RepositoryCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._credentialsParameter !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialsParameter = this._credentialsParameter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RepositoryCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._credentialsParameter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._credentialsParameter = value.credentialsParameter;
        }
    }

    // credentials_parameter - computed: true, optional: true, required: false
    private _credentialsParameter?: string; 
    public get credentialsParameter() {
        return this.getStringAttribute('credentials_parameter');
    }
    public set credentialsParameter(value: string) {
        this._credentialsParameter = value;
    }
    public resetCredentialsParameter() {
        this._credentialsParameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsParameterInput() {
        return this._credentialsParameter;
    }
}
export interface ResourceRequirementProperty {
    /**
    * The type of resource to assign to a container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#type CcTaskDefinition#type}
    */
    readonly type?: string;
    /**
    * The value for the specified resource type.
    *  When the type is ``GPU``, the value is the number of physical ``GPUs`` the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on. You can also specify ``ALL`` to allocate all available GPUs on the instance to the container.
    *  When the type is ``NeuronDevice``, the value must be ``ALL``. This allocates all available Neuron devices on the instance to the container. Only one container in a task can specify ``NeuronDevice`` resources. This resource type is only supported on Managed Instances.
    *  When the type is ``InferenceAccelerator``, the ``value`` matches the ``deviceName`` for an [InferenceAccelerator](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_InferenceAccelerator.html) specified in a task definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#value CcTaskDefinition#value}
    */
    readonly value?: string;
}
export class ResourceRequirementPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceRequirementProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ResourceRequirementProperty | cdktn.IResolvable | undefined) {
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

export class ResourceRequirementPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceRequirementProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceRequirementPropertyOutputReference {
        return new ResourceRequirementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RestartPolicyProperty {
    /**
    * Specifies whether a restart policy is enabled for the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#enabled CcTaskDefinition#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * A list of exit codes that Amazon ECS will ignore and not attempt a restart on. You can specify a maximum of 50 container exit codes. By default, Amazon ECS does not ignore any exit codes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#ignored_exit_codes CcTaskDefinition#ignored_exit_codes}
    */
    readonly ignoredExitCodes?: number[];
    /**
    * A period of time (in seconds) that the container must run for before a restart can be attempted. A container can be restarted only once every ``restartAttemptPeriod`` seconds. If a container isn't able to run for this time period and exits early, it will not be restarted. You can set a minimum ``restartAttemptPeriod`` of 60 seconds and a maximum ``restartAttemptPeriod`` of 1800 seconds. By default, a container must run for 300 seconds before it can be restarted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#restart_attempt_period CcTaskDefinition#restart_attempt_period}
    */
    readonly restartAttemptPeriod?: number;
}
export class RestartPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestartPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._ignoredExitCodes !== undefined) {
            hasAnyValues = true;
            internalValueResult.ignoredExitCodes = this._ignoredExitCodes;
        }
        if (this._restartAttemptPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.restartAttemptPeriod = this._restartAttemptPeriod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestartPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._ignoredExitCodes = undefined;
            this._restartAttemptPeriod = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._ignoredExitCodes = value.ignoredExitCodes;
            this._restartAttemptPeriod = value.restartAttemptPeriod;
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

    // ignored_exit_codes - computed: true, optional: true, required: false
    private _ignoredExitCodes?: number[]; 
    public get ignoredExitCodes() {
        return this.getNumberListAttribute('ignored_exit_codes');
    }
    public set ignoredExitCodes(value: number[]) {
        this._ignoredExitCodes = value;
    }
    public resetIgnoredExitCodes() {
        this._ignoredExitCodes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignoredExitCodesInput() {
        return this._ignoredExitCodes;
    }

    // restart_attempt_period - computed: true, optional: true, required: false
    private _restartAttemptPeriod?: number; 
    public get restartAttemptPeriod() {
        return this.getNumberAttribute('restart_attempt_period');
    }
    public set restartAttemptPeriod(value: number) {
        this._restartAttemptPeriod = value;
    }
    public resetRestartAttemptPeriod() {
        this._restartAttemptPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restartAttemptPeriodInput() {
        return this._restartAttemptPeriod;
    }
}
export interface SecretsProperty {
    /**
    * The name of the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#name CcTaskDefinition#name}
    */
    readonly name?: string;
    /**
    * The secret to expose to the container. The supported values are either the full ARN of the ASMlong secret or the full ARN of the parameter in the SSM Parameter Store.
    *  For information about the require IAMlong permissions, see [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam) (for Secrets Manager) or [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html) (for Systems Manager Parameter store) in the *Amazon Elastic Container Service Developer Guide*.
    *   If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#value_from CcTaskDefinition#value_from}
    */
    readonly valueFrom?: string;
}
export class SecretsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SecretsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SecretsProperty | cdktn.IResolvable | undefined) {
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

export class SecretsPropertyList extends cdktn.ComplexList {
    public internalValue? : SecretsProperty[] | cdktn.IResolvable

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
    public get(index: number): SecretsPropertyOutputReference {
        return new SecretsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SystemControlProperty {
    /**
    * The namespaced kernel parameter to set a ``value`` for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#namespace CcTaskDefinition#namespace}
    */
    readonly namespace?: string;
    /**
    * The namespaced kernel parameter to set a ``value`` for.
    *  Valid IPC namespace values: ``"kernel.msgmax" | "kernel.msgmnb" | "kernel.msgmni" | "kernel.sem" | "kernel.shmall" | "kernel.shmmax" | "kernel.shmmni" | "kernel.shm_rmid_forced"``, and ``Sysctls`` that start with ``"fs.mqueue.*"``
    *  Valid network namespace values: ``Sysctls`` that start with ``"net.*"``. Only namespaced ``Sysctls`` that exist within the container starting with "net.* are accepted.
    *  All of these values are supported by Fargate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#value CcTaskDefinition#value}
    */
    readonly value?: string;
}
export class SystemControlPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SystemControlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SystemControlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._namespace = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._namespace = value.namespace;
            this._value = value.value;
        }
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

export class SystemControlPropertyList extends cdktn.ComplexList {
    public internalValue? : SystemControlProperty[] | cdktn.IResolvable

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
    public get(index: number): SystemControlPropertyOutputReference {
        return new SystemControlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface UlimitProperty {
    /**
    * The hard limit for the ``ulimit`` type. The value can be specified in bytes, seconds, or as a count, depending on the ``type`` of the ``ulimit``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#hard_limit CcTaskDefinition#hard_limit}
    */
    readonly hardLimit?: number;
    /**
    * The ``type`` of the ``ulimit``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#name CcTaskDefinition#name}
    */
    readonly name?: string;
    /**
    * The soft limit for the ``ulimit`` type. The value can be specified in bytes, seconds, or as a count, depending on the ``type`` of the ``ulimit``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#soft_limit CcTaskDefinition#soft_limit}
    */
    readonly softLimit?: number;
}
export class UlimitPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UlimitProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hardLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.hardLimit = this._hardLimit;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._softLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.softLimit = this._softLimit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UlimitProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hardLimit = undefined;
            this._name = undefined;
            this._softLimit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hardLimit = value.hardLimit;
            this._name = value.name;
            this._softLimit = value.softLimit;
        }
    }

    // hard_limit - computed: true, optional: true, required: false
    private _hardLimit?: number; 
    public get hardLimit() {
        return this.getNumberAttribute('hard_limit');
    }
    public set hardLimit(value: number) {
        this._hardLimit = value;
    }
    public resetHardLimit() {
        this._hardLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hardLimitInput() {
        return this._hardLimit;
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

    // soft_limit - computed: true, optional: true, required: false
    private _softLimit?: number; 
    public get softLimit() {
        return this.getNumberAttribute('soft_limit');
    }
    public set softLimit(value: number) {
        this._softLimit = value;
    }
    public resetSoftLimit() {
        this._softLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get softLimitInput() {
        return this._softLimit;
    }
}

export class UlimitPropertyList extends cdktn.ComplexList {
    public internalValue? : UlimitProperty[] | cdktn.IResolvable

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
    public get(index: number): UlimitPropertyOutputReference {
        return new UlimitPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VolumeFromProperty {
    /**
    * If this value is ``true``, the container has read-only access to the volume. If this value is ``false``, then the container can write to the volume. The default value is ``false``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#read_only CcTaskDefinition#read_only}
    */
    readonly readOnly?: boolean | cdktn.IResolvable;
    /**
    * The name of another container within the same task definition to mount volumes from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#source_container CcTaskDefinition#source_container}
    */
    readonly sourceContainer?: string;
}
export class VolumeFromPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VolumeFromProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnly = this._readOnly;
        }
        if (this._sourceContainer !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceContainer = this._sourceContainer;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VolumeFromProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readOnly = undefined;
            this._sourceContainer = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readOnly = value.readOnly;
            this._sourceContainer = value.sourceContainer;
        }
    }

    // read_only - computed: true, optional: true, required: false
    private _readOnly?: boolean | cdktn.IResolvable; 
    public get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    public set readOnly(value: boolean | cdktn.IResolvable) {
        this._readOnly = value;
    }
    public resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readOnlyInput() {
        return this._readOnly;
    }

    // source_container - computed: true, optional: true, required: false
    private _sourceContainer?: string; 
    public get sourceContainer() {
        return this.getStringAttribute('source_container');
    }
    public set sourceContainer(value: string) {
        this._sourceContainer = value;
    }
    public resetSourceContainer() {
        this._sourceContainer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceContainerInput() {
        return this._sourceContainer;
    }
}

export class VolumeFromPropertyList extends cdktn.ComplexList {
    public internalValue? : VolumeFromProperty[] | cdktn.IResolvable

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
    public get(index: number): VolumeFromPropertyOutputReference {
        return new VolumeFromPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ContainerDefinitionProperty {
    /**
    * The command that's passed to the container. This parameter maps to ``Cmd`` in the docker container create command and the ``COMMAND`` parameter to docker run. If there are multiple arguments, each argument is a separated string in the array.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#command CcTaskDefinition#command}
    */
    readonly command?: string[];
    /**
    * The number of ``cpu`` units reserved for the container. This parameter maps to ``CpuShares`` in the docker container create command and the ``--cpu-shares`` option to docker run.
    *  This field is optional for tasks using the Fargate launch type, and the only requirement is that the total amount of CPU reserved for all containers within a task be lower than the task-level ``cpu`` value.
    *   You can determine the number of CPU units that are available per EC2 instance type by multiplying the vCPUs listed for that instance type on the [Amazon EC2 Instances](https://docs.aws.amazon.com/ec2/instance-types/) detail page by 1,024.
    *   Linux containers share unallocated CPU units with other containers on the container instance with the same ratio as their allocated amount. For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that's the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task is guaranteed a minimum of 512 CPU units when needed. Moreover, each container could float to higher CPU usage if the other container was not using it. If both tasks were 100% active all of the time, they would be limited to 512 CPU units.
    *  On Linux container instances, the Docker daemon on the container instance uses the CPU value to calculate the relative CPU share ratios for running containers. The minimum valid CPU share value that the Linux kernel allows is 2, and the maximum valid CPU share value that the Linux kernel allows is 262144. However, the CPU parameter isn't required, and you can use CPU values below 2 or above 262144 in your container definitions. For CPU values below 2 (including null) or above 262144, the behavior varies based on your Amazon ECS container agent version:
    *   +  *Agent versions less than or equal to 1.1.0:* Null and zero CPU values are passed to Docker as 0, which Docker then converts to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux kernel converts to two CPU shares.
    *   +  *Agent versions greater than or equal to 1.2.0:* Null, zero, and CPU values of 1 are passed to Docker as 2.
    *   +  *Agent versions greater than or equal to 1.84.0:* CPU values greater than 256 vCPU are passed to Docker as 256, which is equivalent to 262144 CPU shares.
    *   
    *  On Windows container instances, the CPU limit is enforced as an absolute limit, or a quota. Windows containers only have access to the specified amount of CPU that's described in the task definition. A null or zero CPU value is passed to Docker as ``0``, which Windows interprets as 1% of one CPU.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#cpu CcTaskDefinition#cpu}
    */
    readonly cpu?: number;
    /**
    * A list of ARNs in SSM or Amazon S3 to a credential spec (``CredSpec``) file that configures the container for Active Directory authentication. We recommend that you use this parameter instead of the ``dockerSecurityOptions``. The maximum number of ARNs is 1.
    *  There are two formats for each ARN.
    *   + credentialspecdomainless:MyARN You use credentialspecdomainless:MyARN to provide a CredSpec with an additional section for a secret in . You provide the login credentials to the domain in the secret. Each task that runs on any container instance can join different domains. You can use this format without joining the container instance to a domain. + credentialspec:MyARN You use credentialspec:MyARN to provide a CredSpec for a single domain. You must join the container instance to the domain before you start any tasks that use this task definition. 
    *  In both formats, replace ``MyARN`` with the ARN in SSM or Amazon S3.
    *  If you provide a ``credentialspecdomainless:MyARN``, the ``credspec`` must provide a ARN in ASMlong for a secret containing the username, password, and the domain to connect to. For better security, the instance isn't joined to the domain for domainless authentication. Other applications on the instance can't use the domainless credentials. You can use this parameter to run tasks on the same instance, even it the tasks need to join different domains. For more information, see [Using gMSAs for Windows Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html) and [Using gMSAs for Linux Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#credential_specs CcTaskDefinition#credential_specs}
    */
    readonly credentialSpecs?: string[];
    /**
    * The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.
    *  For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent to turn on container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide*. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the ``ecs-init`` package. If your container instances are launched from version ``20190301`` or later, then they contain the required versions of the container agent and ``ecs-init``. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  For tasks using the Fargate launch type, the task or service requires the following platforms:
    *   +  Linux platform version ``1.3.0`` or later.
    *   +  Windows platform version ``1.0.0`` or later.
    *   
    *  If the task definition is used in a blue/green deployment that uses [AWS::CodeDeploy::DeploymentGroup BlueGreenDeploymentConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html), the ``dependsOn`` parameter is not supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#depends_on CcTaskDefinition#depends_on}
    */
    readonly dependsOn?: ContainerDependencyProperty[] | cdktn.IResolvable;
    /**
    * When this parameter is true, networking is off within the container. This parameter maps to ``NetworkDisabled`` in the docker container create command.
    *   This parameter is not supported for Windows containers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#disable_networking CcTaskDefinition#disable_networking}
    */
    readonly disableNetworking?: boolean | cdktn.IResolvable;
    /**
    * A list of DNS search domains that are presented to the container. This parameter maps to ``DnsSearch`` in the docker container create command and the ``--dns-search`` option to docker run.
    *   This parameter is not supported for Windows containers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#dns_search_domains CcTaskDefinition#dns_search_domains}
    */
    readonly dnsSearchDomains?: string[];
    /**
    * A list of DNS servers that are presented to the container. This parameter maps to ``Dns`` in the docker container create command and the ``--dns`` option to docker run.
    *   This parameter is not supported for Windows containers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#dns_servers CcTaskDefinition#dns_servers}
    */
    readonly dnsServers?: string[];
    /**
    * A key/value map of labels to add to the container. This parameter maps to ``Labels`` in the docker container create command and the ``--label`` option to docker run. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#docker_labels CcTaskDefinition#docker_labels}
    */
    readonly dockerLabels?: { [key: string]: string };
    /**
    * A list of strings to provide custom configuration for multiple security systems. This field isn't valid for containers in tasks using the Fargate launch type.
    *  For Linux tasks on EC2, this parameter can be used to reference custom labels for SELinux and AppArmor multi-level security systems.
    *  For any tasks on EC2, this parameter can be used to reference a credential spec file that configures a container for Active Directory authentication. For more information, see [Using gMSAs for Windows Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html) and [Using gMSAs for Linux Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  This parameter maps to ``SecurityOpt`` in the docker container create command and the ``--security-opt`` option to docker run.
    *   The Amazon ECS container agent running on a container instance must register with the ``ECS_SELINUX_CAPABLE=true`` or ``ECS_APPARMOR_CAPABLE=true`` environment variables before containers placed on that instance can use these security options. For more information, see [Amazon ECS Container Agent Configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
    *   Valid values: "no-new-privileges" | "apparmor:PROFILE" | "label:value" | "credentialspec:CredentialSpecFilePath"
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#docker_security_options CcTaskDefinition#docker_security_options}
    */
    readonly dockerSecurityOptions?: string[];
    /**
    * Early versions of the Amazon ECS container agent don't properly handle ``entryPoint`` parameters. If you have problems using ``entryPoint``, update your container agent or enter your commands and arguments as ``command`` array items instead.
    *   The entry point that's passed to the container. This parameter maps to ``Entrypoint`` in the docker container create command and the ``--entrypoint`` option to docker run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#entry_point CcTaskDefinition#entry_point}
    */
    readonly entryPoint?: string[];
    /**
    * The environment variables to pass to a container. This parameter maps to ``Env`` in the docker container create command and the ``--env`` option to docker run.
    *   We don't recommend that you use plaintext environment variables for sensitive information, such as credential data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#environment CcTaskDefinition#environment}
    */
    readonly environment?: KeyValuePairProperty[] | cdktn.IResolvable;
    /**
    * A list of files containing the environment variables to pass to a container. This parameter maps to the ``--env-file`` option to docker run.
    *  You can specify up to ten environment files. The file must have a ``.env`` file extension. Each line in an environment file contains an environment variable in ``VARIABLE=VALUE`` format. Lines beginning with ``#`` are treated as comments and are ignored.
    *  If there are environment variables specified using the ``environment`` parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see [Specifying Environment Variables](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#environment_files CcTaskDefinition#environment_files}
    */
    readonly environmentFiles?: EnvironmentFileProperty[] | cdktn.IResolvable;
    /**
    * If the ``essential`` parameter of a container is marked as ``true``, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the ``essential`` parameter of a container is marked as ``false``, its failure doesn't affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential.
    *  All tasks must have at least one essential container. If you have an application that's composed of multiple containers, group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see [Application Architecture](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#essential CcTaskDefinition#essential}
    */
    readonly essential?: boolean | cdktn.IResolvable;
    /**
    * A list of hostnames and IP address mappings to append to the ``/etc/hosts`` file on the container. This parameter maps to ``ExtraHosts`` in the docker container create command and the ``--add-host`` option to docker run.
    *   This parameter isn't supported for Windows containers or tasks that use the ``awsvpc`` network mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#extra_hosts CcTaskDefinition#extra_hosts}
    */
    readonly extraHosts?: HostEntryProperty[] | cdktn.IResolvable;
    /**
    * The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see [Custom Log Routing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#firelens_configuration CcTaskDefinition#firelens_configuration}
    */
    readonly firelensConfiguration?: FirelensConfigurationProperty;
    /**
    * The container health check command and associated configuration parameters for the container. This parameter maps to ``HealthCheck`` in the docker container create command and the ``HEALTHCHECK`` parameter of docker run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#health_check CcTaskDefinition#health_check}
    */
    readonly healthCheck?: HealthCheckProperty;
    /**
    * The hostname to use for your container. This parameter maps to ``Hostname`` in the docker container create command and the ``--hostname`` option to docker run.
    *   The ``hostname`` parameter is not supported if you're using the ``awsvpc`` network mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#hostname CcTaskDefinition#hostname}
    */
    readonly hostname?: string;
    /**
    * The image used to start a container. This string is passed directly to the Docker daemon. By default, images in the Docker Hub registry are available. Other repositories are specified with either ``repository-url/image:tag`` or ``repository-url/image@digest``. For images using tags (repository-url/image:tag), up to 255 characters total are allowed, including letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs (#). For images using digests (repository-url/image@digest), the 255 character limit applies only to the repository URL and image name (everything before the @ sign). The only supported hash function is sha256, and the hash value after sha256: must be exactly 64 characters (only letters A-F, a-f, and numbers 0-9 are allowed). This parameter maps to ``Image`` in the docker container create command and the ``IMAGE`` parameter of docker run.
    *   +  When a new task starts, the Amazon ECS container agent pulls the latest version of the specified image and tag for the container to use. However, subsequent updates to a repository image aren't propagated to already running tasks.
    *   +  Images in Amazon ECR repositories can be specified by either using the full ``registry/repository:tag`` or ``registry/repository@digest``. For example, ``012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>:latest`` or ``012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>@sha256:94afd1f2e64d908bc90dbca0035a5b567EXAMPLE``. 
    *   +  Images in official repositories on Docker Hub use a single name (for example, ``ubuntu`` or ``mongo``).
    *   +  Images in other repositories on Docker Hub are qualified with an organization name (for example, ``amazon/amazon-ecs-agent``).
    *   +  Images in other online repositories are qualified further by a domain name (for example, ``quay.io/assemblyline/ubuntu``).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#image CcTaskDefinition#image}
    */
    readonly image?: string;
    /**
    * When this parameter is ``true``, you can deploy containerized applications that require ``stdin`` or a ``tty`` to be allocated. This parameter maps to ``OpenStdin`` in the docker container create command and the ``--interactive`` option to docker run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#interactive CcTaskDefinition#interactive}
    */
    readonly interactive?: boolean | cdktn.IResolvable;
    /**
    * The ``links`` parameter allows containers to communicate with each other without the need for port mappings. This parameter is only supported if the network mode of a task definition is ``bridge``. The ``name:internalName`` construct is analogous to ``name:alias`` in Docker links. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.. This parameter maps to ``Links`` in the docker container create command and the ``--link`` option to docker run.
    *   This parameter is not supported for Windows containers.
    *    Containers that are collocated on a single container instance may be able to communicate with each other without requiring links or host port mappings. Network isolation is achieved on the container instance using security groups and VPC settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#links CcTaskDefinition#links}
    */
    readonly links?: string[];
    /**
    * Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. For more information see [KernelCapabilities](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html).
    *   This parameter is not supported for Windows containers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#linux_parameters CcTaskDefinition#linux_parameters}
    */
    readonly linuxParameters?: LinuxParametersProperty;
    /**
    * The log configuration specification for the container.
    *  This parameter maps to ``LogConfig`` in the docker Create a container command and the ``--log-driver`` option to docker run. By default, containers use the same logging driver that the Docker daemon uses. However, the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see [Configure logging drivers](https://docs.aws.amazon.com/https://docs.docker.com/engine/admin/logging/overview/) in the Docker documentation.
    *   Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the [LogConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html) data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.
    *   This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
    *   The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the ``ECS_AVAILABLE_LOGGING_DRIVERS`` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Container Agent Configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#log_configuration CcTaskDefinition#log_configuration}
    */
    readonly logConfiguration?: LogConfigurationProperty;
    /**
    * The amount (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. The total amount of memory reserved for all containers within a task must be lower than the task ``memory`` value, if one is specified. This parameter maps to ``Memory`` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the ``--memory`` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/#security-configuration).
    *  If using the Fargate launch type, this parameter is optional.
    *  If using the EC2 launch type, you must specify either a task-level memory value or a container-level memory value. If you specify both a container-level ``memory`` and ``memoryReservation`` value, ``memory`` must be greater than ``memoryReservation``. If you specify ``memoryReservation``, then that value is subtracted from the available memory resources for the container instance where the container is placed. Otherwise, the value of ``memory`` is used.
    *  The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a container, so you should not specify fewer than 6 MiB of memory for your containers.
    *  The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a container, so you should not specify fewer than 4 MiB of memory for your containers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#memory CcTaskDefinition#memory}
    */
    readonly memory?: number;
    /**
    * The soft limit (in MiB) of memory to reserve for the container. When system memory is under heavy contention, Docker attempts to keep the container memory to this soft limit. However, your container can consume more memory when it needs to, up to either the hard limit specified with the ``memory`` parameter (if applicable), or all of the available memory on the container instance, whichever comes first. This parameter maps to ``MemoryReservation`` in the docker container create command and the ``--memory-reservation`` option to docker run.
    *  If a task-level memory value is not specified, you must specify a non-zero integer for one or both of ``memory`` or ``memoryReservation`` in a container definition. If you specify both, ``memory`` must be greater than ``memoryReservation``. If you specify ``memoryReservation``, then that value is subtracted from the available memory resources for the container instance where the container is placed. Otherwise, the value of ``memory`` is used.
    *  For example, if your container normally uses 128 MiB of memory, but occasionally bursts to 256 MiB of memory for short periods of time, you can set a ``memoryReservation`` of 128 MiB, and a ``memory`` hard limit of 300 MiB. This configuration would allow the container to only reserve 128 MiB of memory from the remaining resources on the container instance, but also allow the container to consume more memory resources when needed.
    *  The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a container. So, don't specify less than 6 MiB of memory for your containers. 
    *  The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a container. So, don't specify less than 4 MiB of memory for your containers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#memory_reservation CcTaskDefinition#memory_reservation}
    */
    readonly memoryReservation?: number;
    /**
    * The mount points for data volumes in your container.
    *  This parameter maps to ``Volumes`` in the docker container create command and the ``--volume`` option to docker run.
    *  Windows containers can mount whole directories on the same drive as ``$env:ProgramData``. Windows containers can't mount directories on a different drive, and mount point can't be across drives.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#mount_points CcTaskDefinition#mount_points}
    */
    readonly mountPoints?: MountPointProperty[] | cdktn.IResolvable;
    /**
    * The name of a container. If you're linking multiple containers together in a task definition, the ``name`` of one container can be entered in the ``links`` of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. This parameter maps to ``name`` in the docker container create command and the ``--name`` option to docker run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#name CcTaskDefinition#name}
    */
    readonly name?: string;
    /**
    * The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic.
    *  For task definitions that use the ``awsvpc`` network mode, you should only specify the ``containerPort``. The ``hostPort`` can be left blank or it must be the same value as the ``containerPort``.
    *  Port mappings on Windows use the ``NetNAT`` gateway address rather than ``localhost``. There is no loopback for port mappings on Windows, so you cannot access a container's mapped port from the host itself. 
    *  This parameter maps to ``PortBindings`` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the ``--publish`` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/). If the network mode of a task definition is set to ``none``, then you can't specify port mappings. If the network mode of a task definition is set to ``host``, then host ports must either be undefined or they must match the container port in the port mapping.
    *   After a task reaches the ``RUNNING`` status, manual and automatic host and container port assignments are visible in the *Network Bindings* section of a container description for a selected task in the Amazon ECS console. The assignments are also visible in the ``networkBindings`` section [DescribeTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#port_mappings CcTaskDefinition#port_mappings}
    */
    readonly portMappings?: PortMappingProperty[] | cdktn.IResolvable;
    /**
    * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the ``root`` user). This parameter maps to ``Privileged`` in the docker container create command and the ``--privileged`` option to docker run
    *   This parameter is not supported for Windows containers or tasks run on FARGATElong.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#privileged CcTaskDefinition#privileged}
    */
    readonly privileged?: boolean | cdktn.IResolvable;
    /**
    * When this parameter is ``true``, a TTY is allocated. This parameter maps to ``Tty`` in the docker container create command and the ``--tty`` option to docker run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#pseudo_terminal CcTaskDefinition#pseudo_terminal}
    */
    readonly pseudoTerminal?: boolean | cdktn.IResolvable;
    /**
    * When this parameter is true, the container is given read-only access to its root file system. This parameter maps to ``ReadonlyRootfs`` in the docker container create command and the ``--read-only`` option to docker run.
    *   This parameter is not supported for Windows containers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#readonly_root_filesystem CcTaskDefinition#readonly_root_filesystem}
    */
    readonly readonlyRootFilesystem?: boolean | cdktn.IResolvable;
    /**
    * The private repository authentication credentials to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#repository_credentials CcTaskDefinition#repository_credentials}
    */
    readonly repositoryCredentials?: RepositoryCredentialsProperty;
    /**
    * The type and amount of a resource to assign to a container. The supported resources are GPUs and Neuron devices.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#resource_requirements CcTaskDefinition#resource_requirements}
    */
    readonly resourceRequirements?: ResourceRequirementProperty[] | cdktn.IResolvable;
    /**
    * The restart policy for a container. When you set up a restart policy, Amazon ECS can restart the container without needing to replace the task. For more information, see [Restart individual containers in Amazon ECS tasks with container restart policies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-restart-policy.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#restart_policy CcTaskDefinition#restart_policy}
    */
    readonly restartPolicy?: RestartPolicyProperty;
    /**
    * The secrets to pass to the container. For more information, see [Specifying Sensitive Data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#secrets CcTaskDefinition#secrets}
    */
    readonly secrets?: SecretsProperty[] | cdktn.IResolvable;
    /**
    * Time duration (in seconds) to wait before giving up on resolving dependencies for a container. For example, you specify two containers in a task definition with containerA having a dependency on containerB reaching a ``COMPLETE``, ``SUCCESS``, or ``HEALTHY`` status. If a ``startTimeout`` value is specified for containerB and it doesn't reach the desired status within that time then containerA gives up and not start. This results in the task transitioning to a ``STOPPED`` state.
    *   When the ``ECS_CONTAINER_START_TIMEOUT`` container agent configuration variable is used, it's enforced independently from this start timeout value.
    *   For tasks using the Fargate launch type, the task or service requires the following platforms:
    *   +  Linux platform version ``1.3.0`` or later.
    *   +  Windows platform version ``1.0.0`` or later.
    *   
    *  For tasks using the EC2 launch type, your container instances require at least version ``1.26.0`` of the container agent to use a container start timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide*. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version ``1.26.0-1`` of the ``ecs-init`` package. If your container instances are launched from version ``20190301`` or later, then they contain the required versions of the container agent and ``ecs-init``. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  The valid values for Fargate are 2-120 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#start_timeout CcTaskDefinition#start_timeout}
    */
    readonly startTimeout?: number;
    /**
    * Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own.
    *  For tasks using the Fargate launch type, the task or service requires the following platforms:
    *   +  Linux platform version ``1.3.0`` or later.
    *   +  Windows platform version ``1.0.0`` or later.
    *   
    *  For tasks that use the Fargate launch type, the max stop timeout value is 120 seconds and if the parameter is not specified, the default value of 30 seconds is used.
    *  For tasks that use the EC2 launch type, if the ``stopTimeout`` parameter isn't specified, the value set for the Amazon ECS container agent configuration variable ``ECS_CONTAINER_STOP_TIMEOUT`` is used. If neither the ``stopTimeout`` parameter or the ``ECS_CONTAINER_STOP_TIMEOUT`` agent configuration variable are set, then the default values of 30 seconds for Linux containers and 30 seconds on Windows containers are used. Your container instances require at least version 1.26.0 of the container agent to use a container stop timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide*. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the ``ecs-init`` package. If your container instances are launched from version ``20190301`` or later, then they contain the required versions of the container agent and ``ecs-init``. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  The valid values for Fargate are 2-120 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#stop_timeout CcTaskDefinition#stop_timeout}
    */
    readonly stopTimeout?: number;
    /**
    * A list of namespaced kernel parameters to set in the container. This parameter maps to ``Sysctls`` in the docker container create command and the ``--sysctl`` option to docker run. For example, you can configure ``net.ipv4.tcp_keepalive_time`` setting to maintain longer lived connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#system_controls CcTaskDefinition#system_controls}
    */
    readonly systemControls?: SystemControlProperty[] | cdktn.IResolvable;
    /**
    * A list of ``ulimits`` to set in the container. This parameter maps to ``Ulimits`` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the ``--ulimit`` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/). Valid naming values are displayed in the [Ulimit](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Ulimit.html) data type. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
    *   This parameter is not supported for Windows containers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#ulimits CcTaskDefinition#ulimits}
    */
    readonly ulimits?: UlimitProperty[] | cdktn.IResolvable;
    /**
    * The user to use inside the container. This parameter maps to ``User`` in the docker container create command and the ``--user`` option to docker run.
    *   When running tasks using the ``host`` network mode, don't run containers using the root user (UID 0). We recommend using a non-root user for better security.
    *   You can specify the ``user`` using the following formats. If specifying a UID or GID, you must specify it as a positive integer.
    *   +   ``user`` 
    *   +   ``user:group`` 
    *   +   ``uid`` 
    *   +   ``uid:gid`` 
    *   +   ``user:gid`` 
    *   +   ``uid:group`` 
    *   
    *   This parameter is not supported for Windows containers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#user CcTaskDefinition#user}
    */
    readonly user?: string;
    /**
    * Specifies whether Amazon ECS will resolve the container image tag provided in the container definition to an image digest. By default, the value is ``enabled``. If you set the value for a container as ``disabled``, Amazon ECS will not resolve the provided container image tag to a digest and will use the original image URI specified in the container definition for deployment. For more information about container image resolution, see [Container image resolution](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html#deployment-container-image-stability) in the *Amazon ECS Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#version_consistency CcTaskDefinition#version_consistency}
    */
    readonly versionConsistency?: string;
    /**
    * Data volumes to mount from another container. This parameter maps to ``VolumesFrom`` in the docker container create command and the ``--volumes-from`` option to docker run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#volumes_from CcTaskDefinition#volumes_from}
    */
    readonly volumesFrom?: VolumeFromProperty[] | cdktn.IResolvable;
    /**
    * The working directory to run commands inside the container in. This parameter maps to ``WorkingDir`` in the docker container create command and the ``--workdir`` option to docker run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#working_directory CcTaskDefinition#working_directory}
    */
    readonly workingDirectory?: string;
}
export class ContainerDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContainerDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._command !== undefined) {
            hasAnyValues = true;
            internalValueResult.command = this._command;
        }
        if (this._cpu !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpu = this._cpu;
        }
        if (this._credentialSpecs !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialSpecs = this._credentialSpecs;
        }
        if (this._dependsOn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dependsOn = this._dependsOn?.internalValue;
        }
        if (this._disableNetworking !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableNetworking = this._disableNetworking;
        }
        if (this._dnsSearchDomains !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsSearchDomains = this._dnsSearchDomains;
        }
        if (this._dnsServers !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsServers = this._dnsServers;
        }
        if (this._dockerLabels !== undefined) {
            hasAnyValues = true;
            internalValueResult.dockerLabels = this._dockerLabels;
        }
        if (this._dockerSecurityOptions !== undefined) {
            hasAnyValues = true;
            internalValueResult.dockerSecurityOptions = this._dockerSecurityOptions;
        }
        if (this._entryPoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.entryPoint = this._entryPoint;
        }
        if (this._environment?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment?.internalValue;
        }
        if (this._environmentFiles?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.environmentFiles = this._environmentFiles?.internalValue;
        }
        if (this._essential !== undefined) {
            hasAnyValues = true;
            internalValueResult.essential = this._essential;
        }
        if (this._extraHosts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extraHosts = this._extraHosts?.internalValue;
        }
        if (this._firelensConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firelensConfiguration = this._firelensConfiguration?.internalValue;
        }
        if (this._healthCheck?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthCheck = this._healthCheck?.internalValue;
        }
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._interactive !== undefined) {
            hasAnyValues = true;
            internalValueResult.interactive = this._interactive;
        }
        if (this._links !== undefined) {
            hasAnyValues = true;
            internalValueResult.links = this._links;
        }
        if (this._linuxParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linuxParameters = this._linuxParameters?.internalValue;
        }
        if (this._logConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logConfiguration = this._logConfiguration?.internalValue;
        }
        if (this._memory !== undefined) {
            hasAnyValues = true;
            internalValueResult.memory = this._memory;
        }
        if (this._memoryReservation !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryReservation = this._memoryReservation;
        }
        if (this._mountPoints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPoints = this._mountPoints?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._portMappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.portMappings = this._portMappings?.internalValue;
        }
        if (this._privileged !== undefined) {
            hasAnyValues = true;
            internalValueResult.privileged = this._privileged;
        }
        if (this._pseudoTerminal !== undefined) {
            hasAnyValues = true;
            internalValueResult.pseudoTerminal = this._pseudoTerminal;
        }
        if (this._readonlyRootFilesystem !== undefined) {
            hasAnyValues = true;
            internalValueResult.readonlyRootFilesystem = this._readonlyRootFilesystem;
        }
        if (this._repositoryCredentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryCredentials = this._repositoryCredentials?.internalValue;
        }
        if (this._resourceRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
        }
        if (this._restartPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.restartPolicy = this._restartPolicy?.internalValue;
        }
        if (this._secrets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secrets = this._secrets?.internalValue;
        }
        if (this._startTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTimeout = this._startTimeout;
        }
        if (this._stopTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.stopTimeout = this._stopTimeout;
        }
        if (this._systemControls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.systemControls = this._systemControls?.internalValue;
        }
        if (this._ulimits?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ulimits = this._ulimits?.internalValue;
        }
        if (this._user !== undefined) {
            hasAnyValues = true;
            internalValueResult.user = this._user;
        }
        if (this._versionConsistency !== undefined) {
            hasAnyValues = true;
            internalValueResult.versionConsistency = this._versionConsistency;
        }
        if (this._volumesFrom?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumesFrom = this._volumesFrom?.internalValue;
        }
        if (this._workingDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.workingDirectory = this._workingDirectory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._command = undefined;
            this._cpu = undefined;
            this._credentialSpecs = undefined;
            this._dependsOn.internalValue = undefined;
            this._disableNetworking = undefined;
            this._dnsSearchDomains = undefined;
            this._dnsServers = undefined;
            this._dockerLabels = undefined;
            this._dockerSecurityOptions = undefined;
            this._entryPoint = undefined;
            this._environment.internalValue = undefined;
            this._environmentFiles.internalValue = undefined;
            this._essential = undefined;
            this._extraHosts.internalValue = undefined;
            this._firelensConfiguration.internalValue = undefined;
            this._healthCheck.internalValue = undefined;
            this._hostname = undefined;
            this._image = undefined;
            this._interactive = undefined;
            this._links = undefined;
            this._linuxParameters.internalValue = undefined;
            this._logConfiguration.internalValue = undefined;
            this._memory = undefined;
            this._memoryReservation = undefined;
            this._mountPoints.internalValue = undefined;
            this._name = undefined;
            this._portMappings.internalValue = undefined;
            this._privileged = undefined;
            this._pseudoTerminal = undefined;
            this._readonlyRootFilesystem = undefined;
            this._repositoryCredentials.internalValue = undefined;
            this._resourceRequirements.internalValue = undefined;
            this._restartPolicy.internalValue = undefined;
            this._secrets.internalValue = undefined;
            this._startTimeout = undefined;
            this._stopTimeout = undefined;
            this._systemControls.internalValue = undefined;
            this._ulimits.internalValue = undefined;
            this._user = undefined;
            this._versionConsistency = undefined;
            this._volumesFrom.internalValue = undefined;
            this._workingDirectory = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._command = value.command;
            this._cpu = value.cpu;
            this._credentialSpecs = value.credentialSpecs;
            this._dependsOn.internalValue = value.dependsOn;
            this._disableNetworking = value.disableNetworking;
            this._dnsSearchDomains = value.dnsSearchDomains;
            this._dnsServers = value.dnsServers;
            this._dockerLabels = value.dockerLabels;
            this._dockerSecurityOptions = value.dockerSecurityOptions;
            this._entryPoint = value.entryPoint;
            this._environment.internalValue = value.environment;
            this._environmentFiles.internalValue = value.environmentFiles;
            this._essential = value.essential;
            this._extraHosts.internalValue = value.extraHosts;
            this._firelensConfiguration.internalValue = value.firelensConfiguration;
            this._healthCheck.internalValue = value.healthCheck;
            this._hostname = value.hostname;
            this._image = value.image;
            this._interactive = value.interactive;
            this._links = value.links;
            this._linuxParameters.internalValue = value.linuxParameters;
            this._logConfiguration.internalValue = value.logConfiguration;
            this._memory = value.memory;
            this._memoryReservation = value.memoryReservation;
            this._mountPoints.internalValue = value.mountPoints;
            this._name = value.name;
            this._portMappings.internalValue = value.portMappings;
            this._privileged = value.privileged;
            this._pseudoTerminal = value.pseudoTerminal;
            this._readonlyRootFilesystem = value.readonlyRootFilesystem;
            this._repositoryCredentials.internalValue = value.repositoryCredentials;
            this._resourceRequirements.internalValue = value.resourceRequirements;
            this._restartPolicy.internalValue = value.restartPolicy;
            this._secrets.internalValue = value.secrets;
            this._startTimeout = value.startTimeout;
            this._stopTimeout = value.stopTimeout;
            this._systemControls.internalValue = value.systemControls;
            this._ulimits.internalValue = value.ulimits;
            this._user = value.user;
            this._versionConsistency = value.versionConsistency;
            this._volumesFrom.internalValue = value.volumesFrom;
            this._workingDirectory = value.workingDirectory;
        }
    }

    // command - computed: true, optional: true, required: false
    private _command?: string[]; 
    public get command() {
        return this.getListAttribute('command');
    }
    public set command(value: string[]) {
        this._command = value;
    }
    public resetCommand() {
        this._command = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commandInput() {
        return this._command;
    }

    // cpu - computed: true, optional: true, required: false
    private _cpu?: number; 
    public get cpu() {
        return this.getNumberAttribute('cpu');
    }
    public set cpu(value: number) {
        this._cpu = value;
    }
    public resetCpu() {
        this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuInput() {
        return this._cpu;
    }

    // credential_specs - computed: true, optional: true, required: false
    private _credentialSpecs?: string[]; 
    public get credentialSpecs() {
        return this.getListAttribute('credential_specs');
    }
    public set credentialSpecs(value: string[]) {
        this._credentialSpecs = value;
    }
    public resetCredentialSpecs() {
        this._credentialSpecs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialSpecsInput() {
        return this._credentialSpecs;
    }

    // depends_on - computed: true, optional: true, required: false
    private _dependsOn = new ContainerDependencyPropertyList(this, "depends_on", false);
    public get dependsOn() {
        return this._dependsOn;
    }
    public putDependsOn(value: ContainerDependencyProperty[] | cdktn.IResolvable) {
        this._dependsOn.internalValue = value;
    }
    public resetDependsOn() {
        this._dependsOn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependsOnInput() {
        return this._dependsOn.internalValue;
    }

    // disable_networking - computed: true, optional: true, required: false
    private _disableNetworking?: boolean | cdktn.IResolvable; 
    public get disableNetworking() {
        return this.getBooleanAttribute('disable_networking');
    }
    public set disableNetworking(value: boolean | cdktn.IResolvable) {
        this._disableNetworking = value;
    }
    public resetDisableNetworking() {
        this._disableNetworking = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableNetworkingInput() {
        return this._disableNetworking;
    }

    // dns_search_domains - computed: true, optional: true, required: false
    private _dnsSearchDomains?: string[]; 
    public get dnsSearchDomains() {
        return this.getListAttribute('dns_search_domains');
    }
    public set dnsSearchDomains(value: string[]) {
        this._dnsSearchDomains = value;
    }
    public resetDnsSearchDomains() {
        this._dnsSearchDomains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsSearchDomainsInput() {
        return this._dnsSearchDomains;
    }

    // dns_servers - computed: true, optional: true, required: false
    private _dnsServers?: string[]; 
    public get dnsServers() {
        return this.getListAttribute('dns_servers');
    }
    public set dnsServers(value: string[]) {
        this._dnsServers = value;
    }
    public resetDnsServers() {
        this._dnsServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsServersInput() {
        return this._dnsServers;
    }

    // docker_labels - computed: true, optional: true, required: false
    private _dockerLabels?: { [key: string]: string }; 
    public get dockerLabels() {
        return this.getStringMapAttribute('docker_labels');
    }
    public set dockerLabels(value: { [key: string]: string }) {
        this._dockerLabels = value;
    }
    public resetDockerLabels() {
        this._dockerLabels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dockerLabelsInput() {
        return this._dockerLabels;
    }

    // docker_security_options - computed: true, optional: true, required: false
    private _dockerSecurityOptions?: string[]; 
    public get dockerSecurityOptions() {
        return this.getListAttribute('docker_security_options');
    }
    public set dockerSecurityOptions(value: string[]) {
        this._dockerSecurityOptions = value;
    }
    public resetDockerSecurityOptions() {
        this._dockerSecurityOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dockerSecurityOptionsInput() {
        return this._dockerSecurityOptions;
    }

    // entry_point - computed: true, optional: true, required: false
    private _entryPoint?: string[]; 
    public get entryPoint() {
        return this.getListAttribute('entry_point');
    }
    public set entryPoint(value: string[]) {
        this._entryPoint = value;
    }
    public resetEntryPoint() {
        this._entryPoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entryPointInput() {
        return this._entryPoint;
    }

    // environment - computed: true, optional: true, required: false
    private _environment = new KeyValuePairPropertyList(this, "environment", true);
    public get environment() {
        return this._environment;
    }
    public putEnvironment(value: KeyValuePairProperty[] | cdktn.IResolvable) {
        this._environment.internalValue = value;
    }
    public resetEnvironment() {
        this._environment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment.internalValue;
    }

    // environment_files - computed: true, optional: true, required: false
    private _environmentFiles = new EnvironmentFilePropertyList(this, "environment_files", false);
    public get environmentFiles() {
        return this._environmentFiles;
    }
    public putEnvironmentFiles(value: EnvironmentFileProperty[] | cdktn.IResolvable) {
        this._environmentFiles.internalValue = value;
    }
    public resetEnvironmentFiles() {
        this._environmentFiles.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentFilesInput() {
        return this._environmentFiles.internalValue;
    }

    // essential - computed: true, optional: true, required: false
    private _essential?: boolean | cdktn.IResolvable; 
    public get essential() {
        return this.getBooleanAttribute('essential');
    }
    public set essential(value: boolean | cdktn.IResolvable) {
        this._essential = value;
    }
    public resetEssential() {
        this._essential = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get essentialInput() {
        return this._essential;
    }

    // extra_hosts - computed: true, optional: true, required: false
    private _extraHosts = new HostEntryPropertyList(this, "extra_hosts", false);
    public get extraHosts() {
        return this._extraHosts;
    }
    public putExtraHosts(value: HostEntryProperty[] | cdktn.IResolvable) {
        this._extraHosts.internalValue = value;
    }
    public resetExtraHosts() {
        this._extraHosts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extraHostsInput() {
        return this._extraHosts.internalValue;
    }

    // firelens_configuration - computed: true, optional: true, required: false
    private _firelensConfiguration = new FirelensConfigurationPropertyOutputReference(this, "firelens_configuration");
    public get firelensConfiguration() {
        return this._firelensConfiguration;
    }
    public putFirelensConfiguration(value: FirelensConfigurationProperty) {
        this._firelensConfiguration.internalValue = value;
    }
    public resetFirelensConfiguration() {
        this._firelensConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firelensConfigurationInput() {
        return this._firelensConfiguration.internalValue;
    }

    // health_check - computed: true, optional: true, required: false
    private _healthCheck = new HealthCheckPropertyOutputReference(this, "health_check");
    public get healthCheck() {
        return this._healthCheck;
    }
    public putHealthCheck(value: HealthCheckProperty) {
        this._healthCheck.internalValue = value;
    }
    public resetHealthCheck() {
        this._healthCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckInput() {
        return this._healthCheck.internalValue;
    }

    // hostname - computed: true, optional: true, required: false
    private _hostname?: string; 
    public get hostname() {
        return this.getStringAttribute('hostname');
    }
    public set hostname(value: string) {
        this._hostname = value;
    }
    public resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostnameInput() {
        return this._hostname;
    }

    // image - computed: true, optional: true, required: false
    private _image?: string; 
    public get image() {
        return this.getStringAttribute('image');
    }
    public set image(value: string) {
        this._image = value;
    }
    public resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
        return this._image;
    }

    // interactive - computed: true, optional: true, required: false
    private _interactive?: boolean | cdktn.IResolvable; 
    public get interactive() {
        return this.getBooleanAttribute('interactive');
    }
    public set interactive(value: boolean | cdktn.IResolvable) {
        this._interactive = value;
    }
    public resetInteractive() {
        this._interactive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interactiveInput() {
        return this._interactive;
    }

    // links - computed: true, optional: true, required: false
    private _links?: string[]; 
    public get links() {
        return cdktn.Fn.tolist(this.getListAttribute('links'));
    }
    public set links(value: string[]) {
        this._links = value;
    }
    public resetLinks() {
        this._links = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linksInput() {
        return this._links;
    }

    // linux_parameters - computed: true, optional: true, required: false
    private _linuxParameters = new LinuxParametersPropertyOutputReference(this, "linux_parameters");
    public get linuxParameters() {
        return this._linuxParameters;
    }
    public putLinuxParameters(value: LinuxParametersProperty) {
        this._linuxParameters.internalValue = value;
    }
    public resetLinuxParameters() {
        this._linuxParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linuxParametersInput() {
        return this._linuxParameters.internalValue;
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

    // memory - computed: true, optional: true, required: false
    private _memory?: number; 
    public get memory() {
        return this.getNumberAttribute('memory');
    }
    public set memory(value: number) {
        this._memory = value;
    }
    public resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
        return this._memory;
    }

    // memory_reservation - computed: true, optional: true, required: false
    private _memoryReservation?: number; 
    public get memoryReservation() {
        return this.getNumberAttribute('memory_reservation');
    }
    public set memoryReservation(value: number) {
        this._memoryReservation = value;
    }
    public resetMemoryReservation() {
        this._memoryReservation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryReservationInput() {
        return this._memoryReservation;
    }

    // mount_points - computed: true, optional: true, required: false
    private _mountPoints = new MountPointPropertyList(this, "mount_points", false);
    public get mountPoints() {
        return this._mountPoints;
    }
    public putMountPoints(value: MountPointProperty[] | cdktn.IResolvable) {
        this._mountPoints.internalValue = value;
    }
    public resetMountPoints() {
        this._mountPoints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPointsInput() {
        return this._mountPoints.internalValue;
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

    // port_mappings - computed: true, optional: true, required: false
    private _portMappings = new PortMappingPropertyList(this, "port_mappings", true);
    public get portMappings() {
        return this._portMappings;
    }
    public putPortMappings(value: PortMappingProperty[] | cdktn.IResolvable) {
        this._portMappings.internalValue = value;
    }
    public resetPortMappings() {
        this._portMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portMappingsInput() {
        return this._portMappings.internalValue;
    }

    // privileged - computed: true, optional: true, required: false
    private _privileged?: boolean | cdktn.IResolvable; 
    public get privileged() {
        return this.getBooleanAttribute('privileged');
    }
    public set privileged(value: boolean | cdktn.IResolvable) {
        this._privileged = value;
    }
    public resetPrivileged() {
        this._privileged = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privilegedInput() {
        return this._privileged;
    }

    // pseudo_terminal - computed: true, optional: true, required: false
    private _pseudoTerminal?: boolean | cdktn.IResolvable; 
    public get pseudoTerminal() {
        return this.getBooleanAttribute('pseudo_terminal');
    }
    public set pseudoTerminal(value: boolean | cdktn.IResolvable) {
        this._pseudoTerminal = value;
    }
    public resetPseudoTerminal() {
        this._pseudoTerminal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pseudoTerminalInput() {
        return this._pseudoTerminal;
    }

    // readonly_root_filesystem - computed: true, optional: true, required: false
    private _readonlyRootFilesystem?: boolean | cdktn.IResolvable; 
    public get readonlyRootFilesystem() {
        return this.getBooleanAttribute('readonly_root_filesystem');
    }
    public set readonlyRootFilesystem(value: boolean | cdktn.IResolvable) {
        this._readonlyRootFilesystem = value;
    }
    public resetReadonlyRootFilesystem() {
        this._readonlyRootFilesystem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readonlyRootFilesystemInput() {
        return this._readonlyRootFilesystem;
    }

    // repository_credentials - computed: true, optional: true, required: false
    private _repositoryCredentials = new RepositoryCredentialsPropertyOutputReference(this, "repository_credentials");
    public get repositoryCredentials() {
        return this._repositoryCredentials;
    }
    public putRepositoryCredentials(value: RepositoryCredentialsProperty) {
        this._repositoryCredentials.internalValue = value;
    }
    public resetRepositoryCredentials() {
        this._repositoryCredentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryCredentialsInput() {
        return this._repositoryCredentials.internalValue;
    }

    // resource_requirements - computed: true, optional: true, required: false
    private _resourceRequirements = new ResourceRequirementPropertyList(this, "resource_requirements", false);
    public get resourceRequirements() {
        return this._resourceRequirements;
    }
    public putResourceRequirements(value: ResourceRequirementProperty[] | cdktn.IResolvable) {
        this._resourceRequirements.internalValue = value;
    }
    public resetResourceRequirements() {
        this._resourceRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceRequirementsInput() {
        return this._resourceRequirements.internalValue;
    }

    // restart_policy - computed: true, optional: true, required: false
    private _restartPolicy = new RestartPolicyPropertyOutputReference(this, "restart_policy");
    public get restartPolicy() {
        return this._restartPolicy;
    }
    public putRestartPolicy(value: RestartPolicyProperty) {
        this._restartPolicy.internalValue = value;
    }
    public resetRestartPolicy() {
        this._restartPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restartPolicyInput() {
        return this._restartPolicy.internalValue;
    }

    // secrets - computed: true, optional: true, required: false
    private _secrets = new SecretsPropertyList(this, "secrets", false);
    public get secrets() {
        return this._secrets;
    }
    public putSecrets(value: SecretsProperty[] | cdktn.IResolvable) {
        this._secrets.internalValue = value;
    }
    public resetSecrets() {
        this._secrets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsInput() {
        return this._secrets.internalValue;
    }

    // start_timeout - computed: true, optional: true, required: false
    private _startTimeout?: number; 
    public get startTimeout() {
        return this.getNumberAttribute('start_timeout');
    }
    public set startTimeout(value: number) {
        this._startTimeout = value;
    }
    public resetStartTimeout() {
        this._startTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeoutInput() {
        return this._startTimeout;
    }

    // stop_timeout - computed: true, optional: true, required: false
    private _stopTimeout?: number; 
    public get stopTimeout() {
        return this.getNumberAttribute('stop_timeout');
    }
    public set stopTimeout(value: number) {
        this._stopTimeout = value;
    }
    public resetStopTimeout() {
        this._stopTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stopTimeoutInput() {
        return this._stopTimeout;
    }

    // system_controls - computed: true, optional: true, required: false
    private _systemControls = new SystemControlPropertyList(this, "system_controls", false);
    public get systemControls() {
        return this._systemControls;
    }
    public putSystemControls(value: SystemControlProperty[] | cdktn.IResolvable) {
        this._systemControls.internalValue = value;
    }
    public resetSystemControls() {
        this._systemControls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemControlsInput() {
        return this._systemControls.internalValue;
    }

    // ulimits - computed: true, optional: true, required: false
    private _ulimits = new UlimitPropertyList(this, "ulimits", false);
    public get ulimits() {
        return this._ulimits;
    }
    public putUlimits(value: UlimitProperty[] | cdktn.IResolvable) {
        this._ulimits.internalValue = value;
    }
    public resetUlimits() {
        this._ulimits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ulimitsInput() {
        return this._ulimits.internalValue;
    }

    // user - computed: true, optional: true, required: false
    private _user?: string; 
    public get user() {
        return this.getStringAttribute('user');
    }
    public set user(value: string) {
        this._user = value;
    }
    public resetUser() {
        this._user = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
        return this._user;
    }

    // version_consistency - computed: true, optional: true, required: false
    private _versionConsistency?: string; 
    public get versionConsistency() {
        return this.getStringAttribute('version_consistency');
    }
    public set versionConsistency(value: string) {
        this._versionConsistency = value;
    }
    public resetVersionConsistency() {
        this._versionConsistency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionConsistencyInput() {
        return this._versionConsistency;
    }

    // volumes_from - computed: true, optional: true, required: false
    private _volumesFrom = new VolumeFromPropertyList(this, "volumes_from", true);
    public get volumesFrom() {
        return this._volumesFrom;
    }
    public putVolumesFrom(value: VolumeFromProperty[] | cdktn.IResolvable) {
        this._volumesFrom.internalValue = value;
    }
    public resetVolumesFrom() {
        this._volumesFrom.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumesFromInput() {
        return this._volumesFrom.internalValue;
    }

    // working_directory - computed: true, optional: true, required: false
    private _workingDirectory?: string; 
    public get workingDirectory() {
        return this.getStringAttribute('working_directory');
    }
    public set workingDirectory(value: string) {
        this._workingDirectory = value;
    }
    public resetWorkingDirectory() {
        this._workingDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workingDirectoryInput() {
        return this._workingDirectory;
    }
}

export class ContainerDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : ContainerDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): ContainerDefinitionPropertyOutputReference {
        return new ContainerDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EphemeralStorageProperty {
    /**
    * The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is ``21`` GiB and the maximum supported value is ``200`` GiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#size_in_gi_b CcTaskDefinition#size_in_gi_b}
    */
    readonly sizeInGiB?: number;
}
export class EphemeralStoragePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EphemeralStorageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sizeInGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeInGiB = this._sizeInGiB;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EphemeralStorageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sizeInGiB = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sizeInGiB = value.sizeInGiB;
        }
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
}
export interface InferenceAcceleratorProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#device_name CcTaskDefinition#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#device_type CcTaskDefinition#device_type}
    */
    readonly deviceType?: string;
}
export class InferenceAcceleratorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InferenceAcceleratorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deviceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceName = this._deviceName;
        }
        if (this._deviceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceType = this._deviceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceAcceleratorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deviceName = undefined;
            this._deviceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deviceName = value.deviceName;
            this._deviceType = value.deviceType;
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

    // device_type - computed: true, optional: true, required: false
    private _deviceType?: string; 
    public get deviceType() {
        return this.getStringAttribute('device_type');
    }
    public set deviceType(value: string) {
        this._deviceType = value;
    }
    public resetDeviceType() {
        this._deviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTypeInput() {
        return this._deviceType;
    }
}

export class InferenceAcceleratorPropertyList extends cdktn.ComplexList {
    public internalValue? : InferenceAcceleratorProperty[] | cdktn.IResolvable

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
    public get(index: number): InferenceAcceleratorPropertyOutputReference {
        return new InferenceAcceleratorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TaskDefinitionPlacementConstraintProperty {
    /**
    * A cluster query language expression to apply to the constraint. For more information, see [Cluster query language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#expression CcTaskDefinition#expression}
    */
    readonly expression?: string;
    /**
    * The type of constraint. The ``MemberOf`` constraint restricts selection to be from a group of valid candidates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#type CcTaskDefinition#type}
    */
    readonly type?: string;
}
export class TaskDefinitionPlacementConstraintPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TaskDefinitionPlacementConstraintProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TaskDefinitionPlacementConstraintProperty | cdktn.IResolvable | undefined) {
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

export class TaskDefinitionPlacementConstraintPropertyList extends cdktn.ComplexList {
    public internalValue? : TaskDefinitionPlacementConstraintProperty[] | cdktn.IResolvable

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
    public get(index: number): TaskDefinitionPlacementConstraintPropertyOutputReference {
        return new TaskDefinitionPlacementConstraintPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProxyConfigurationPropertiesProperty {
    /**
    * The name of the key-value pair. For environment variables, this is the name of the environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#name CcTaskDefinition#name}
    */
    readonly name?: string;
    /**
    * The value of the key-value pair. For environment variables, this is the value of the environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#value CcTaskDefinition#value}
    */
    readonly value?: string;
}
export class ProxyConfigurationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProxyConfigurationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProxyConfigurationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class ProxyConfigurationPropertiesPropertyList extends cdktn.ComplexList {
    public internalValue? : ProxyConfigurationPropertiesProperty[] | cdktn.IResolvable

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
    public get(index: number): ProxyConfigurationPropertiesPropertyOutputReference {
        return new ProxyConfigurationPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProxyConfigurationProperty {
    /**
    * The name of the container that will serve as the App Mesh proxy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#container_name CcTaskDefinition#container_name}
    */
    readonly containerName?: string;
    /**
    * The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.
    *   +  ``IgnoredUID`` - (Required) The user ID (UID) of the proxy container as defined by the ``user`` parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If ``IgnoredGID`` is specified, this field can be empty.
    *   +  ``IgnoredGID`` - (Required) The group ID (GID) of the proxy container as defined by the ``user`` parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If ``IgnoredUID`` is specified, this field can be empty.
    *   +  ``AppPorts`` - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the ``ProxyIngressPort`` and ``ProxyEgressPort``.
    *   +  ``ProxyIngressPort`` - (Required) Specifies the port that incoming traffic to the ``AppPorts`` is directed to.
    *   +  ``ProxyEgressPort`` - (Required) Specifies the port that outgoing traffic from the ``AppPorts`` is directed to.
    *   +  ``EgressIgnoredPorts`` - (Required) The egress traffic going to the specified ports is ignored and not redirected to the ``ProxyEgressPort``. It can be an empty list.
    *   +  ``EgressIgnoredIPs`` - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the ``ProxyEgressPort``. It can be an empty list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#proxy_configuration_properties CcTaskDefinition#proxy_configuration_properties}
    */
    readonly proxyConfigurationProperties?: ProxyConfigurationPropertiesProperty[] | cdktn.IResolvable;
    /**
    * The proxy type. The only supported value is ``APPMESH``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#type CcTaskDefinition#type}
    */
    readonly type?: string;
}
export class ProxyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProxyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerName = this._containerName;
        }
        if (this._proxyConfigurationProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.proxyConfigurationProperties = this._proxyConfigurationProperties?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProxyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerName = undefined;
            this._proxyConfigurationProperties.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerName = value.containerName;
            this._proxyConfigurationProperties.internalValue = value.proxyConfigurationProperties;
            this._type = value.type;
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

    // proxy_configuration_properties - computed: true, optional: true, required: false
    private _proxyConfigurationProperties = new ProxyConfigurationPropertiesPropertyList(this, "proxy_configuration_properties", true);
    public get proxyConfigurationProperties() {
        return this._proxyConfigurationProperties;
    }
    public putProxyConfigurationProperties(value: ProxyConfigurationPropertiesProperty[] | cdktn.IResolvable) {
        this._proxyConfigurationProperties.internalValue = value;
    }
    public resetProxyConfigurationProperties() {
        this._proxyConfigurationProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get proxyConfigurationPropertiesInput() {
        return this._proxyConfigurationProperties.internalValue;
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
export interface RuntimePlatformProperty {
    /**
    * The CPU architecture.
    *  You can run your Linux tasks on an ARM-based platform by setting the value to ``ARM64``. This option is available for tasks that run on Linux Amazon EC2 instance, Amazon ECS Managed Instances, or Linux containers on Fargate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#cpu_architecture CcTaskDefinition#cpu_architecture}
    */
    readonly cpuArchitecture?: string;
    /**
    * The operating system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#operating_system_family CcTaskDefinition#operating_system_family}
    */
    readonly operatingSystemFamily?: string;
}
export class RuntimePlatformPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuntimePlatformProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cpuArchitecture !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuArchitecture = this._cpuArchitecture;
        }
        if (this._operatingSystemFamily !== undefined) {
            hasAnyValues = true;
            internalValueResult.operatingSystemFamily = this._operatingSystemFamily;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuntimePlatformProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpuArchitecture = undefined;
            this._operatingSystemFamily = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpuArchitecture = value.cpuArchitecture;
            this._operatingSystemFamily = value.operatingSystemFamily;
        }
    }

    // cpu_architecture - computed: true, optional: true, required: false
    private _cpuArchitecture?: string; 
    public get cpuArchitecture() {
        return this.getStringAttribute('cpu_architecture');
    }
    public set cpuArchitecture(value: string) {
        this._cpuArchitecture = value;
    }
    public resetCpuArchitecture() {
        this._cpuArchitecture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuArchitectureInput() {
        return this._cpuArchitecture;
    }

    // operating_system_family - computed: true, optional: true, required: false
    private _operatingSystemFamily?: string; 
    public get operatingSystemFamily() {
        return this.getStringAttribute('operating_system_family');
    }
    public set operatingSystemFamily(value: string) {
        this._operatingSystemFamily = value;
    }
    public resetOperatingSystemFamily() {
        this._operatingSystemFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatingSystemFamilyInput() {
        return this._operatingSystemFamily;
    }
}
export interface TagProperty {
    /**
    * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#key CcTaskDefinition#key}
    */
    readonly key?: string;
    /**
    * The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#value CcTaskDefinition#value}
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
export interface DockerVolumeConfigurationProperty {
    /**
    * If this value is ``true``, the Docker volume is created if it doesn't already exist.
    *   This field is only used if the ``scope`` is ``shared``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#autoprovision CcTaskDefinition#autoprovision}
    */
    readonly autoprovision?: boolean | cdktn.IResolvable;
    /**
    * The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use ``docker plugin ls`` to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. This parameter maps to ``Driver`` in the docker container create command and the ``xxdriver`` option to docker volume create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#driver CcTaskDefinition#driver}
    */
    readonly driver?: string;
    /**
    * A map of Docker driver-specific options passed through. This parameter maps to ``DriverOpts`` in the docker create-volume command and the ``xxopt`` option to docker volume create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#driver_opts CcTaskDefinition#driver_opts}
    */
    readonly driverOpts?: { [key: string]: string };
    /**
    * Custom metadata to add to your Docker volume. This parameter maps to ``Labels`` in the docker container create command and the ``xxlabel`` option to docker volume create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#labels CcTaskDefinition#labels}
    */
    readonly labels?: { [key: string]: string };
    /**
    * The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a ``task`` are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as ``shared`` persist after the task stops.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#scope CcTaskDefinition#scope}
    */
    readonly scope?: string;
}
export class DockerVolumeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DockerVolumeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoprovision !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoprovision = this._autoprovision;
        }
        if (this._driver !== undefined) {
            hasAnyValues = true;
            internalValueResult.driver = this._driver;
        }
        if (this._driverOpts !== undefined) {
            hasAnyValues = true;
            internalValueResult.driverOpts = this._driverOpts;
        }
        if (this._labels !== undefined) {
            hasAnyValues = true;
            internalValueResult.labels = this._labels;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DockerVolumeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoprovision = undefined;
            this._driver = undefined;
            this._driverOpts = undefined;
            this._labels = undefined;
            this._scope = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoprovision = value.autoprovision;
            this._driver = value.driver;
            this._driverOpts = value.driverOpts;
            this._labels = value.labels;
            this._scope = value.scope;
        }
    }

    // autoprovision - computed: true, optional: true, required: false
    private _autoprovision?: boolean | cdktn.IResolvable; 
    public get autoprovision() {
        return this.getBooleanAttribute('autoprovision');
    }
    public set autoprovision(value: boolean | cdktn.IResolvable) {
        this._autoprovision = value;
    }
    public resetAutoprovision() {
        this._autoprovision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoprovisionInput() {
        return this._autoprovision;
    }

    // driver - computed: true, optional: true, required: false
    private _driver?: string; 
    public get driver() {
        return this.getStringAttribute('driver');
    }
    public set driver(value: string) {
        this._driver = value;
    }
    public resetDriver() {
        this._driver = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get driverInput() {
        return this._driver;
    }

    // driver_opts - computed: true, optional: true, required: false
    private _driverOpts?: { [key: string]: string }; 
    public get driverOpts() {
        return this.getStringMapAttribute('driver_opts');
    }
    public set driverOpts(value: { [key: string]: string }) {
        this._driverOpts = value;
    }
    public resetDriverOpts() {
        this._driverOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get driverOptsInput() {
        return this._driverOpts;
    }

    // labels - computed: true, optional: true, required: false
    private _labels?: { [key: string]: string }; 
    public get labels() {
        return this.getStringMapAttribute('labels');
    }
    public set labels(value: { [key: string]: string }) {
        this._labels = value;
    }
    public resetLabels() {
        this._labels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelsInput() {
        return this._labels;
    }

    // scope - computed: true, optional: true, required: false
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    public resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
    }
}
export interface AuthorizationConfigProperty {
    /**
    * The Amazon EFS access point ID to use. If an access point is specified, the root directory value specified in the ``EFSVolumeConfiguration`` must either be omitted or set to ``/`` which will enforce the path set on the EFS access point. If an access point is used, transit encryption must be on in the ``EFSVolumeConfiguration``. For more information, see [Working with Amazon EFS access points](https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html) in the *Amazon Elastic File System User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#access_point_id CcTaskDefinition#access_point_id}
    */
    readonly accessPointId?: string;
    /**
    * Determines whether to use the Amazon ECS task role defined in a task definition when mounting the Amazon EFS file system. If it is turned on, transit encryption must be turned on in the ``EFSVolumeConfiguration``. If this parameter is omitted, the default value of ``DISABLED`` is used. For more information, see [Using Amazon EFS access points](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html#efs-volume-accesspoints) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#iam CcTaskDefinition#iam}
    */
    readonly iam?: string;
}
export class AuthorizationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessPointId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessPointId = this._accessPointId;
        }
        if (this._iam !== undefined) {
            hasAnyValues = true;
            internalValueResult.iam = this._iam;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessPointId = undefined;
            this._iam = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessPointId = value.accessPointId;
            this._iam = value.iam;
        }
    }

    // access_point_id - computed: true, optional: true, required: false
    private _accessPointId?: string; 
    public get accessPointId() {
        return this.getStringAttribute('access_point_id');
    }
    public set accessPointId(value: string) {
        this._accessPointId = value;
    }
    public resetAccessPointId() {
        this._accessPointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPointIdInput() {
        return this._accessPointId;
    }

    // iam - computed: true, optional: true, required: false
    private _iam?: string; 
    public get iam() {
        return this.getStringAttribute('iam');
    }
    public set iam(value: string) {
        this._iam = value;
    }
    public resetIam() {
        this._iam = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInput() {
        return this._iam;
    }
}
export interface EFSVolumeConfigurationProperty {
    /**
    * The authorization configuration details for the Amazon EFS file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#authorization_config CcTaskDefinition#authorization_config}
    */
    readonly authorizationConfig?: AuthorizationConfigProperty;
    /**
    * The Amazon EFS file system ID to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#filesystem_id CcTaskDefinition#filesystem_id}
    */
    readonly filesystemId?: string;
    /**
    * The directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is omitted, the root of the Amazon EFS volume will be used. Specifying ``/`` will have the same effect as omitting this parameter.
    *   If an EFS access point is specified in the ``authorizationConfig``, the root directory parameter must either be omitted or set to ``/`` which will enforce the path set on the EFS access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#root_directory CcTaskDefinition#root_directory}
    */
    readonly rootDirectory?: string;
    /**
    * Determines whether to use encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be turned on if Amazon EFS IAM authorization is used. If this parameter is omitted, the default value of ``DISABLED`` is used. For more information, see [Encrypting data in transit](https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html) in the *Amazon Elastic File System User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#transit_encryption CcTaskDefinition#transit_encryption}
    */
    readonly transitEncryption?: string;
    /**
    * The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server. If you do not specify a transit encryption port, it will use the port selection strategy that the Amazon EFS mount helper uses. For more information, see [EFS mount helper](https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html) in the *Amazon Elastic File System User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#transit_encryption_port CcTaskDefinition#transit_encryption_port}
    */
    readonly transitEncryptionPort?: number;
}
export class EFSVolumeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EFSVolumeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        if (this._filesystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.filesystemId = this._filesystemId;
        }
        if (this._rootDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootDirectory = this._rootDirectory;
        }
        if (this._transitEncryption !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitEncryption = this._transitEncryption;
        }
        if (this._transitEncryptionPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitEncryptionPort = this._transitEncryptionPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EFSVolumeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = undefined;
            this._filesystemId = undefined;
            this._rootDirectory = undefined;
            this._transitEncryption = undefined;
            this._transitEncryptionPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = value.authorizationConfig;
            this._filesystemId = value.filesystemId;
            this._rootDirectory = value.rootDirectory;
            this._transitEncryption = value.transitEncryption;
            this._transitEncryptionPort = value.transitEncryptionPort;
        }
    }

    // authorization_config - computed: true, optional: true, required: false
    private _authorizationConfig = new AuthorizationConfigPropertyOutputReference(this, "authorization_config");
    public get authorizationConfig() {
        return this._authorizationConfig;
    }
    public putAuthorizationConfig(value: AuthorizationConfigProperty) {
        this._authorizationConfig.internalValue = value;
    }
    public resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
    }

    // filesystem_id - computed: true, optional: true, required: false
    private _filesystemId?: string; 
    public get filesystemId() {
        return this.getStringAttribute('filesystem_id');
    }
    public set filesystemId(value: string) {
        this._filesystemId = value;
    }
    public resetFilesystemId() {
        this._filesystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filesystemIdInput() {
        return this._filesystemId;
    }

    // root_directory - computed: true, optional: true, required: false
    private _rootDirectory?: string; 
    public get rootDirectory() {
        return this.getStringAttribute('root_directory');
    }
    public set rootDirectory(value: string) {
        this._rootDirectory = value;
    }
    public resetRootDirectory() {
        this._rootDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootDirectoryInput() {
        return this._rootDirectory;
    }

    // transit_encryption - computed: true, optional: true, required: false
    private _transitEncryption?: string; 
    public get transitEncryption() {
        return this.getStringAttribute('transit_encryption');
    }
    public set transitEncryption(value: string) {
        this._transitEncryption = value;
    }
    public resetTransitEncryption() {
        this._transitEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitEncryptionInput() {
        return this._transitEncryption;
    }

    // transit_encryption_port - computed: true, optional: true, required: false
    private _transitEncryptionPort?: number; 
    public get transitEncryptionPort() {
        return this.getNumberAttribute('transit_encryption_port');
    }
    public set transitEncryptionPort(value: number) {
        this._transitEncryptionPort = value;
    }
    public resetTransitEncryptionPort() {
        this._transitEncryptionPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitEncryptionPortInput() {
        return this._transitEncryptionPort;
    }
}
export interface FSxAuthorizationConfigProperty {
    /**
    * The authorization credential option to use. The authorization credential options can be provided using either the Amazon Resource Name (ARN) of an ASMlong secret or SSM Parameter Store parameter. The ARN refers to the stored credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#credentials_parameter CcTaskDefinition#credentials_parameter}
    */
    readonly credentialsParameter?: string;
    /**
    * A fully qualified domain name hosted by an [](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html) Managed Microsoft AD (Active Directory) or self-hosted AD on Amazon EC2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#domain CcTaskDefinition#domain}
    */
    readonly domain?: string;
}
export class FSxAuthorizationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FSxAuthorizationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._credentialsParameter !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialsParameter = this._credentialsParameter;
        }
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FSxAuthorizationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._credentialsParameter = undefined;
            this._domain = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._credentialsParameter = value.credentialsParameter;
            this._domain = value.domain;
        }
    }

    // credentials_parameter - computed: true, optional: true, required: false
    private _credentialsParameter?: string; 
    public get credentialsParameter() {
        return this.getStringAttribute('credentials_parameter');
    }
    public set credentialsParameter(value: string) {
        this._credentialsParameter = value;
    }
    public resetCredentialsParameter() {
        this._credentialsParameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsParameterInput() {
        return this._credentialsParameter;
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }
}
export interface FSxWindowsFileServerVolumeConfigurationProperty {
    /**
    * The authorization configuration details for the Amazon FSx for Windows File Server file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#authorization_config CcTaskDefinition#authorization_config}
    */
    readonly authorizationConfig?: FSxAuthorizationConfigProperty;
    /**
    * The Amazon FSx for Windows File Server file system ID to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#file_system_id CcTaskDefinition#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * The directory within the Amazon FSx for Windows File Server file system to mount as the root directory inside the host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#root_directory CcTaskDefinition#root_directory}
    */
    readonly rootDirectory?: string;
}
export class FSxWindowsFileServerVolumeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FSxWindowsFileServerVolumeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._rootDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootDirectory = this._rootDirectory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FSxWindowsFileServerVolumeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = undefined;
            this._fileSystemId = undefined;
            this._rootDirectory = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = value.authorizationConfig;
            this._fileSystemId = value.fileSystemId;
            this._rootDirectory = value.rootDirectory;
        }
    }

    // authorization_config - computed: true, optional: true, required: false
    private _authorizationConfig = new FSxAuthorizationConfigPropertyOutputReference(this, "authorization_config");
    public get authorizationConfig() {
        return this._authorizationConfig;
    }
    public putAuthorizationConfig(value: FSxAuthorizationConfigProperty) {
        this._authorizationConfig.internalValue = value;
    }
    public resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    public resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // root_directory - computed: true, optional: true, required: false
    private _rootDirectory?: string; 
    public get rootDirectory() {
        return this.getStringAttribute('root_directory');
    }
    public set rootDirectory(value: string) {
        this._rootDirectory = value;
    }
    public resetRootDirectory() {
        this._rootDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootDirectoryInput() {
        return this._rootDirectory;
    }
}
export interface HostVolumePropertiesProperty {
    /**
    * When the ``host`` parameter is used, specify a ``sourcePath`` to declare the path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the ``host`` parameter contains a ``sourcePath`` file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the ``sourcePath`` value doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
    *  If you're using the Fargate launch type, the ``sourcePath`` parameter is not supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#source_path CcTaskDefinition#source_path}
    */
    readonly sourcePath?: string;
}
export class HostVolumePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HostVolumePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourcePath !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePath = this._sourcePath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HostVolumePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourcePath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourcePath = value.sourcePath;
        }
    }

    // source_path - computed: true, optional: true, required: false
    private _sourcePath?: string; 
    public get sourcePath() {
        return this.getStringAttribute('source_path');
    }
    public set sourcePath(value: string) {
        this._sourcePath = value;
    }
    public resetSourcePath() {
        this._sourcePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePathInput() {
        return this._sourcePath;
    }
}
export interface S3FilesVolumeConfigurationProperty {
    /**
    * The full ARN of the S3 Files access point to use. If an access point is specified, the root directory value specified in the ``S3FilesVolumeConfiguration`` must either be omitted or set to ``/`` which will enforce the path set on the S3 Files access point. For more information, see [Creating S3 Files access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-files-access-points-creating.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#access_point_arn CcTaskDefinition#access_point_arn}
    */
    readonly accessPointArn?: string;
    /**
    * The full ARN of the S3 Files file system to mount.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#file_system_arn CcTaskDefinition#file_system_arn}
    */
    readonly fileSystemArn?: string;
    /**
    * The directory within the Amazon S3 Files file system to mount as the root directory. If this parameter is omitted, the root of the Amazon S3 Files file system will be used. Specifying ``/`` will have the same effect as omitting this parameter.
    *   If a S3 Files access point is specified in the ``accessPointArn``, the root directory parameter must either be omitted or set to ``/`` which will enforce the path set on the S3 Files access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#root_directory CcTaskDefinition#root_directory}
    */
    readonly rootDirectory?: string;
    /**
    * The port to use for sending encrypted data between the ECS host and the S3 Files file system. If you do not specify a transit encryption port, it will use the port selection strategy that the Amazon S3 Files mount helper uses. For more information, see [S3 Files mount helper](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-files-mounting.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#transit_encryption_port CcTaskDefinition#transit_encryption_port}
    */
    readonly transitEncryptionPort?: number;
}
export class S3FilesVolumeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3FilesVolumeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessPointArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessPointArn = this._accessPointArn;
        }
        if (this._fileSystemArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemArn = this._fileSystemArn;
        }
        if (this._rootDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootDirectory = this._rootDirectory;
        }
        if (this._transitEncryptionPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitEncryptionPort = this._transitEncryptionPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3FilesVolumeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessPointArn = undefined;
            this._fileSystemArn = undefined;
            this._rootDirectory = undefined;
            this._transitEncryptionPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessPointArn = value.accessPointArn;
            this._fileSystemArn = value.fileSystemArn;
            this._rootDirectory = value.rootDirectory;
            this._transitEncryptionPort = value.transitEncryptionPort;
        }
    }

    // access_point_arn - computed: true, optional: true, required: false
    private _accessPointArn?: string; 
    public get accessPointArn() {
        return this.getStringAttribute('access_point_arn');
    }
    public set accessPointArn(value: string) {
        this._accessPointArn = value;
    }
    public resetAccessPointArn() {
        this._accessPointArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPointArnInput() {
        return this._accessPointArn;
    }

    // file_system_arn - computed: true, optional: true, required: false
    private _fileSystemArn?: string; 
    public get fileSystemArn() {
        return this.getStringAttribute('file_system_arn');
    }
    public set fileSystemArn(value: string) {
        this._fileSystemArn = value;
    }
    public resetFileSystemArn() {
        this._fileSystemArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemArnInput() {
        return this._fileSystemArn;
    }

    // root_directory - computed: true, optional: true, required: false
    private _rootDirectory?: string; 
    public get rootDirectory() {
        return this.getStringAttribute('root_directory');
    }
    public set rootDirectory(value: string) {
        this._rootDirectory = value;
    }
    public resetRootDirectory() {
        this._rootDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootDirectoryInput() {
        return this._rootDirectory;
    }

    // transit_encryption_port - computed: true, optional: true, required: false
    private _transitEncryptionPort?: number; 
    public get transitEncryptionPort() {
        return this.getNumberAttribute('transit_encryption_port');
    }
    public set transitEncryptionPort(value: number) {
        this._transitEncryptionPort = value;
    }
    public resetTransitEncryptionPort() {
        this._transitEncryptionPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitEncryptionPortInput() {
        return this._transitEncryptionPort;
    }
}
export interface VolumeProperty {
    /**
    * Indicates whether the volume should be configured at launch time. This is used to create Amazon EBS volumes for standalone tasks or tasks created as part of a service. Each task definition revision may only have one volume configured at launch in the volume configuration.
    *  To configure a volume at launch time, use this task definition revision and specify a ``volumeConfigurations`` object when calling the ``CreateService``, ``UpdateService``, ``RunTask`` or ``StartTask`` APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#configured_at_launch CcTaskDefinition#configured_at_launch}
    */
    readonly configuredAtLaunch?: boolean | cdktn.IResolvable;
    /**
    * This parameter is specified when you use Docker volumes.
    *  Windows containers only support the use of the ``local`` driver. To use bind mounts, specify the ``host`` parameter instead.
    *   Docker volumes aren't supported by tasks run on FARGATElong.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#docker_volume_configuration CcTaskDefinition#docker_volume_configuration}
    */
    readonly dockerVolumeConfiguration?: DockerVolumeConfigurationProperty;
    /**
    * This parameter is specified when you use an Amazon Elastic File System file system for task storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#efs_volume_configuration CcTaskDefinition#efs_volume_configuration}
    */
    readonly efsVolumeConfiguration?: EFSVolumeConfigurationProperty;
    /**
    * This parameter is specified when you use Amazon FSx for Windows File Server file system for task storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#fsx_windows_file_server_volume_configuration CcTaskDefinition#fsx_windows_file_server_volume_configuration}
    */
    readonly fsxWindowsFileServerVolumeConfiguration?: FSxWindowsFileServerVolumeConfigurationProperty;
    /**
    * This parameter is specified when you use bind mount host volumes. The contents of the ``host`` parameter determine whether your bind mount host volume persists on the host container instance and where it's stored. If the ``host`` parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
    *  Windows containers can mount whole directories on the same drive as ``$env:ProgramData``. Windows containers can't mount directories on a different drive, and mount point can't be across drives. For example, you can mount ``C:\my\path:C:\my\path`` and ``D:\:D:\``, but not ``D:\my\path:C:\my\path`` or ``D:\:C:\my\path``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#host CcTaskDefinition#host}
    */
    readonly host?: HostVolumePropertiesProperty;
    /**
    * The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
    *  When using a volume configured at launch, the ``name`` is required and must also be specified as the volume name in the ``ServiceVolumeConfiguration`` or ``TaskVolumeConfiguration`` parameter when creating your service or standalone task.
    *  For all other types of volumes, this name is referenced in the ``sourceVolume`` parameter of the ``mountPoints`` object in the container definition.
    *  When a volume is using the ``efsVolumeConfiguration``, the name is required.
    *  When a volume is using the ``s3filesVolumeConfiguration``, the name is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#name CcTaskDefinition#name}
    */
    readonly name?: string;
    /**
    * This parameter is specified when you use an Amazon S3 Files file system for task storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_task_definition#s3_files_volume_configuration CcTaskDefinition#s3_files_volume_configuration}
    */
    readonly s3FilesVolumeConfiguration?: S3FilesVolumeConfigurationProperty;
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
        if (this._configuredAtLaunch !== undefined) {
            hasAnyValues = true;
            internalValueResult.configuredAtLaunch = this._configuredAtLaunch;
        }
        if (this._dockerVolumeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dockerVolumeConfiguration = this._dockerVolumeConfiguration?.internalValue;
        }
        if (this._efsVolumeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.efsVolumeConfiguration = this._efsVolumeConfiguration?.internalValue;
        }
        if (this._fsxWindowsFileServerVolumeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxWindowsFileServerVolumeConfiguration = this._fsxWindowsFileServerVolumeConfiguration?.internalValue;
        }
        if (this._host?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._s3FilesVolumeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3FilesVolumeConfiguration = this._s3FilesVolumeConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VolumeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configuredAtLaunch = undefined;
            this._dockerVolumeConfiguration.internalValue = undefined;
            this._efsVolumeConfiguration.internalValue = undefined;
            this._fsxWindowsFileServerVolumeConfiguration.internalValue = undefined;
            this._host.internalValue = undefined;
            this._name = undefined;
            this._s3FilesVolumeConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configuredAtLaunch = value.configuredAtLaunch;
            this._dockerVolumeConfiguration.internalValue = value.dockerVolumeConfiguration;
            this._efsVolumeConfiguration.internalValue = value.efsVolumeConfiguration;
            this._fsxWindowsFileServerVolumeConfiguration.internalValue = value.fsxWindowsFileServerVolumeConfiguration;
            this._host.internalValue = value.host;
            this._name = value.name;
            this._s3FilesVolumeConfiguration.internalValue = value.s3FilesVolumeConfiguration;
        }
    }

    // configured_at_launch - computed: true, optional: true, required: false
    private _configuredAtLaunch?: boolean | cdktn.IResolvable; 
    public get configuredAtLaunch() {
        return this.getBooleanAttribute('configured_at_launch');
    }
    public set configuredAtLaunch(value: boolean | cdktn.IResolvable) {
        this._configuredAtLaunch = value;
    }
    public resetConfiguredAtLaunch() {
        this._configuredAtLaunch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configuredAtLaunchInput() {
        return this._configuredAtLaunch;
    }

    // docker_volume_configuration - computed: true, optional: true, required: false
    private _dockerVolumeConfiguration = new DockerVolumeConfigurationPropertyOutputReference(this, "docker_volume_configuration");
    public get dockerVolumeConfiguration() {
        return this._dockerVolumeConfiguration;
    }
    public putDockerVolumeConfiguration(value: DockerVolumeConfigurationProperty) {
        this._dockerVolumeConfiguration.internalValue = value;
    }
    public resetDockerVolumeConfiguration() {
        this._dockerVolumeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dockerVolumeConfigurationInput() {
        return this._dockerVolumeConfiguration.internalValue;
    }

    // efs_volume_configuration - computed: true, optional: true, required: false
    private _efsVolumeConfiguration = new EFSVolumeConfigurationPropertyOutputReference(this, "efs_volume_configuration");
    public get efsVolumeConfiguration() {
        return this._efsVolumeConfiguration;
    }
    public putEfsVolumeConfiguration(value: EFSVolumeConfigurationProperty) {
        this._efsVolumeConfiguration.internalValue = value;
    }
    public resetEfsVolumeConfiguration() {
        this._efsVolumeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get efsVolumeConfigurationInput() {
        return this._efsVolumeConfiguration.internalValue;
    }

    // fsx_windows_file_server_volume_configuration - computed: true, optional: true, required: false
    private _fsxWindowsFileServerVolumeConfiguration = new FSxWindowsFileServerVolumeConfigurationPropertyOutputReference(this, "fsx_windows_file_server_volume_configuration");
    public get fsxWindowsFileServerVolumeConfiguration() {
        return this._fsxWindowsFileServerVolumeConfiguration;
    }
    public putFsxWindowsFileServerVolumeConfiguration(value: FSxWindowsFileServerVolumeConfigurationProperty) {
        this._fsxWindowsFileServerVolumeConfiguration.internalValue = value;
    }
    public resetFsxWindowsFileServerVolumeConfiguration() {
        this._fsxWindowsFileServerVolumeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxWindowsFileServerVolumeConfigurationInput() {
        return this._fsxWindowsFileServerVolumeConfiguration.internalValue;
    }

    // host - computed: true, optional: true, required: false
    private _host = new HostVolumePropertiesPropertyOutputReference(this, "host");
    public get host() {
        return this._host;
    }
    public putHost(value: HostVolumePropertiesProperty) {
        this._host.internalValue = value;
    }
    public resetHost() {
        this._host.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host.internalValue;
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

    // s3_files_volume_configuration - computed: true, optional: true, required: false
    private _s3FilesVolumeConfiguration = new S3FilesVolumeConfigurationPropertyOutputReference(this, "s3_files_volume_configuration");
    public get s3FilesVolumeConfiguration() {
        return this._s3FilesVolumeConfiguration;
    }
    public putS3FilesVolumeConfiguration(value: S3FilesVolumeConfigurationProperty) {
        this._s3FilesVolumeConfiguration.internalValue = value;
    }
    public resetS3FilesVolumeConfiguration() {
        this._s3FilesVolumeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3FilesVolumeConfigurationInput() {
        return this._s3FilesVolumeConfiguration.internalValue;
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
