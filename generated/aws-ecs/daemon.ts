// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDaemonProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#capacity_provider_arns CcDaemon#capacity_provider_arns}
    */
    readonly capacityProviderArns?: string[];
    /**
    * The Amazon Resource Name (ARN) of the cluster that the daemon is running in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#cluster_arn CcDaemon#cluster_arn}
    */
    readonly clusterArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#daemon_name CcDaemon#daemon_name}
    */
    readonly daemonName?: string;
    /**
    * The Amazon Resource Name (ARN) of the daemon task definition used by this revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#daemon_task_definition_arn CcDaemon#daemon_task_definition_arn}
    */
    readonly daemonTaskDefinitionArn?: string;
    /**
    * The deployment configuration used for this daemon deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#deployment_configuration CcDaemon#deployment_configuration}
    */
    readonly deploymentConfiguration?: CcDaemon.DaemonDeploymentConfigurationProperty;
    /**
    * Specifies whether Amazon ECS managed tags are turned on for the daemon tasks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#enable_ecs_managed_tags CcDaemon#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether the execute command functionality is turned on for the daemon tasks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#enable_execute_command CcDaemon#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether tags are propagated from the daemon to the daemon tasks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#propagate_tags CcDaemon#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#tags CcDaemon#tags}
    */
    readonly tags?: CcDaemon.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon awscc_ecs_daemon}
*/
export class CcDaemon extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecs_daemon";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDaemon resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDaemon to import
    * @param importFromId The id of the existing CcDaemon that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDaemon to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_daemon", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon awscc_ecs_daemon} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDaemonProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDaemonProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecs_daemon',
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
        this._capacityProviderArns = config.capacityProviderArns;
        this._clusterArn = config.clusterArn;
        this._daemonName = config.daemonName;
        this._daemonTaskDefinitionArn = config.daemonTaskDefinitionArn;
        this._deploymentConfiguration.internalValue = config.deploymentConfiguration;
        this._enableEcsManagedTags = config.enableEcsManagedTags;
        this._enableExecuteCommand = config.enableExecuteCommand;
        this._propagateTags = config.propagateTags;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // capacity_provider_arns - computed: true, optional: true, required: false
    private _capacityProviderArns?: string[]; 
    public get capacityProviderArns() {
        return this.getListAttribute('capacity_provider_arns');
    }
    public set capacityProviderArns(value: string[]) {
        this._capacityProviderArns = value;
    }
    public resetCapacityProviderArns() {
        this._capacityProviderArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderArnsInput() {
        return this._capacityProviderArns;
    }

    // cluster_arn - computed: true, optional: true, required: false
    private _clusterArn?: string; 
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
        this._clusterArn = value;
    }
    public resetClusterArn() {
        this._clusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
        return this._clusterArn;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // daemon_arn - computed: true, optional: false, required: false
    public get daemonArn() {
        return this.getStringAttribute('daemon_arn');
    }

    // daemon_name - computed: true, optional: true, required: false
    private _daemonName?: string; 
    public get daemonName() {
        return this.getStringAttribute('daemon_name');
    }
    public set daemonName(value: string) {
        this._daemonName = value;
    }
    public resetDaemonName() {
        this._daemonName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daemonNameInput() {
        return this._daemonName;
    }

    // daemon_status - computed: true, optional: false, required: false
    public get daemonStatus() {
        return this.getStringAttribute('daemon_status');
    }

    // daemon_task_definition_arn - computed: true, optional: true, required: false
    private _daemonTaskDefinitionArn?: string; 
    public get daemonTaskDefinitionArn() {
        return this.getStringAttribute('daemon_task_definition_arn');
    }
    public set daemonTaskDefinitionArn(value: string) {
        this._daemonTaskDefinitionArn = value;
    }
    public resetDaemonTaskDefinitionArn() {
        this._daemonTaskDefinitionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daemonTaskDefinitionArnInput() {
        return this._daemonTaskDefinitionArn;
    }

    // deployment_arn - computed: true, optional: false, required: false
    public get deploymentArn() {
        return this.getStringAttribute('deployment_arn');
    }

    // deployment_configuration - computed: true, optional: true, required: false
    private _deploymentConfiguration = new CcDaemon.DaemonDeploymentConfigurationPropertyOutputReference(this, "deployment_configuration");
    public get deploymentConfiguration() {
        return this._deploymentConfiguration;
    }
    public putDeploymentConfiguration(value: CcDaemon.DaemonDeploymentConfigurationProperty) {
        this._deploymentConfiguration.internalValue = value;
    }
    public resetDeploymentConfiguration() {
        this._deploymentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentConfigurationInput() {
        return this._deploymentConfiguration.internalValue;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDaemon.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDaemon.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            capacity_provider_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._capacityProviderArns),
            cluster_arn: cdktn.stringToTerraform(this._clusterArn),
            daemon_name: cdktn.stringToTerraform(this._daemonName),
            daemon_task_definition_arn: cdktn.stringToTerraform(this._daemonTaskDefinitionArn),
            deployment_configuration: ccDaemonDaemonDeploymentConfigurationPropertyToTerraform(this._deploymentConfiguration.internalValue),
            enable_ecs_managed_tags: cdktn.booleanToTerraform(this._enableEcsManagedTags),
            enable_execute_command: cdktn.booleanToTerraform(this._enableExecuteCommand),
            propagate_tags: cdktn.stringToTerraform(this._propagateTags),
            tags: cdktn.listMapper(ccDaemonTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capacity_provider_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._capacityProviderArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            cluster_arn: {
                value: cdktn.stringToHclTerraform(this._clusterArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            daemon_name: {
                value: cdktn.stringToHclTerraform(this._daemonName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            daemon_task_definition_arn: {
                value: cdktn.stringToHclTerraform(this._daemonTaskDefinitionArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deployment_configuration: {
                value: ccDaemonDaemonDeploymentConfigurationPropertyToHclTerraform(this._deploymentConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDaemon.DaemonDeploymentConfigurationProperty",
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
            propagate_tags: {
                value: cdktn.stringToHclTerraform(this._propagateTags),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDaemonTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDaemon.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDaemonDaemonAlarmConfigurationPropertyToTerraform(struct?: CcDaemon.DaemonAlarmConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alarmNames),
        enable: cdktn.booleanToTerraform(struct!.enable),
    }
}


export function ccDaemonDaemonAlarmConfigurationPropertyToHclTerraform(struct?: CcDaemon.DaemonAlarmConfigurationProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDaemonDaemonDeploymentConfigurationPropertyToTerraform(struct?: CcDaemon.DaemonDeploymentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarms: ccDaemonDaemonAlarmConfigurationPropertyToTerraform(struct!.alarms),
        bake_time_in_minutes: cdktn.numberToTerraform(struct!.bakeTimeInMinutes),
        drain_percent: cdktn.numberToTerraform(struct!.drainPercent),
    }
}


export function ccDaemonDaemonDeploymentConfigurationPropertyToHclTerraform(struct?: CcDaemon.DaemonDeploymentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarms: {
            value: ccDaemonDaemonAlarmConfigurationPropertyToHclTerraform(struct!.alarms),
            isBlock: true,
            type: "struct",
            storageClassType: "DaemonAlarmConfigurationProperty",
        },
        bake_time_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.bakeTimeInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        drain_percent: {
            value: cdktn.numberToHclTerraform(struct!.drainPercent),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDaemonTagPropertyToTerraform(struct?: CcDaemon.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDaemonTagPropertyToHclTerraform(struct?: CcDaemon.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDaemon {
export interface DaemonAlarmConfigurationProperty {
    /**
    * The CloudWatch alarm names to monitor during a daemon deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#alarm_names CcDaemon#alarm_names}
    */
    readonly alarmNames?: string[];
    /**
    * Determines whether to use the CloudWatch alarm option in the daemon deployment process. The default value is ``false``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#enable CcDaemon#enable}
    */
    readonly enable?: boolean | cdktn.IResolvable;
}
export class DaemonAlarmConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DaemonAlarmConfigurationProperty | cdktn.IResolvable | undefined {
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DaemonAlarmConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmNames = undefined;
            this._enable = undefined;
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
}
export interface DaemonDeploymentConfigurationProperty {
    /**
    * The CloudWatch alarm configuration for the daemon deployment. When alarms are triggered during a deployment, the deployment can be automatically rolled back.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#alarms CcDaemon#alarms}
    */
    readonly alarms?: DaemonAlarmConfigurationProperty;
    /**
    * The amount of time (in minutes) to wait after a successful deployment step before proceeding. This allows time to monitor for issues before continuing. The default value is 0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#bake_time_in_minutes CcDaemon#bake_time_in_minutes}
    */
    readonly bakeTimeInMinutes?: number;
    /**
    * The percentage of container instances to drain simultaneously during a daemon deployment. Valid values are between 0.0 and 100.0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#drain_percent CcDaemon#drain_percent}
    */
    readonly drainPercent?: number;
}
export class DaemonDeploymentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DaemonDeploymentConfigurationProperty | cdktn.IResolvable | undefined {
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
        if (this._drainPercent !== undefined) {
            hasAnyValues = true;
            internalValueResult.drainPercent = this._drainPercent;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DaemonDeploymentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarms.internalValue = undefined;
            this._bakeTimeInMinutes = undefined;
            this._drainPercent = undefined;
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
            this._drainPercent = value.drainPercent;
        }
    }

    // alarms - computed: true, optional: true, required: false
    private _alarms = new DaemonAlarmConfigurationPropertyOutputReference(this, "alarms");
    public get alarms() {
        return this._alarms;
    }
    public putAlarms(value: DaemonAlarmConfigurationProperty) {
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

    // drain_percent - computed: true, optional: true, required: false
    private _drainPercent?: number; 
    public get drainPercent() {
        return this.getNumberAttribute('drain_percent');
    }
    public set drainPercent(value: number) {
        this._drainPercent = value;
    }
    public resetDrainPercent() {
        this._drainPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drainPercentInput() {
        return this._drainPercent;
    }
}
export interface TagProperty {
    /**
    * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#key CcDaemon#key}
    */
    readonly key?: string;
    /**
    * The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecs_daemon#value CcDaemon#value}
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
