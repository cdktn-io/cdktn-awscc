// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcJobProps extends cdktn.TerraformMetaArguments {
    /**
    * The number of capacity units that are allocated to this job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#allocated_capacity CcJob#allocated_capacity}
    */
    readonly allocatedCapacity?: number;
    /**
    * The code that executes a job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#command CcJob#command}
    */
    readonly command: CcJob.JobCommandProperty;
    /**
    * Specifies the connections used by a job
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#connections CcJob#connections}
    */
    readonly connections?: CcJob.ConnectionsListProperty;
    /**
    * The default arguments for this job, specified as name-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#default_arguments CcJob#default_arguments}
    */
    readonly defaultArguments?: string;
    /**
    * A description of the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#description CcJob#description}
    */
    readonly description?: string;
    /**
    * Indicates whether the job is run with a standard or flexible execution class.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#execution_class CcJob#execution_class}
    */
    readonly executionClass?: string;
    /**
    * The maximum number of concurrent runs that are allowed for this job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#execution_property CcJob#execution_property}
    */
    readonly executionProperty?: CcJob.ExecutionPropertyProperty;
    /**
    * Glue version determines the versions of Apache Spark and Python that AWS Glue supports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#glue_version CcJob#glue_version}
    */
    readonly glueVersion?: string;
    /**
    * Property description not available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#job_mode CcJob#job_mode}
    */
    readonly jobMode?: string;
    /**
    * Property description not available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#job_run_queuing_enabled CcJob#job_run_queuing_enabled}
    */
    readonly jobRunQueuingEnabled?: boolean | cdktn.IResolvable;
    /**
    * This field is reserved for future use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#log_uri CcJob#log_uri}
    */
    readonly logUri?: string;
    /**
    * Property description not available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#maintenance_window CcJob#maintenance_window}
    */
    readonly maintenanceWindow?: string;
    /**
    * The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#max_capacity CcJob#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * The maximum number of times to retry this job after a JobRun fails
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#max_retries CcJob#max_retries}
    */
    readonly maxRetries?: number;
    /**
    * The name you assign to the job definition
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#name CcJob#name}
    */
    readonly name?: string;
    /**
    * Non-overridable arguments for this job, specified as name-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#non_overridable_arguments CcJob#non_overridable_arguments}
    */
    readonly nonOverridableArguments?: string;
    /**
    * Specifies configuration properties of a notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#notification_property CcJob#notification_property}
    */
    readonly notificationProperty?: CcJob.NotificationPropertyProperty;
    /**
    * The number of workers of a defined workerType that are allocated when a job runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#number_of_workers CcJob#number_of_workers}
    */
    readonly numberOfWorkers?: number;
    /**
    * The name or Amazon Resource Name (ARN) of the IAM role associated with this job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#role CcJob#role}
    */
    readonly role: string;
    /**
    * The name of the SecurityConfiguration structure to be used with this job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#security_configuration CcJob#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * The tags to use with this job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#tags CcJob#tags}
    */
    readonly tags?: string;
    /**
    * The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#timeout CcJob#timeout}
    */
    readonly timeout?: number;
    /**
    * TThe type of predefined worker that is allocated when a job runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#worker_type CcJob#worker_type}
    */
    readonly workerType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job awscc_glue_job}
*/
export class CcJob extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_job";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcJob resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcJob to import
    * @param importFromId The id of the existing CcJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcJob to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_job", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job awscc_glue_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcJobProps
    */
    public constructor(scope: Construct, id: string, config: CcJobProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_job',
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
        this._allocatedCapacity = config.allocatedCapacity;
        this._command.internalValue = config.command;
        this._connections.internalValue = config.connections;
        this._defaultArguments = config.defaultArguments;
        this._description = config.description;
        this._executionClass = config.executionClass;
        this._executionProperty.internalValue = config.executionProperty;
        this._glueVersion = config.glueVersion;
        this._jobMode = config.jobMode;
        this._jobRunQueuingEnabled = config.jobRunQueuingEnabled;
        this._logUri = config.logUri;
        this._maintenanceWindow = config.maintenanceWindow;
        this._maxCapacity = config.maxCapacity;
        this._maxRetries = config.maxRetries;
        this._name = config.name;
        this._nonOverridableArguments = config.nonOverridableArguments;
        this._notificationProperty.internalValue = config.notificationProperty;
        this._numberOfWorkers = config.numberOfWorkers;
        this._role = config.role;
        this._securityConfiguration = config.securityConfiguration;
        this._tags = config.tags;
        this._timeout = config.timeout;
        this._workerType = config.workerType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocated_capacity - computed: true, optional: true, required: false
    private _allocatedCapacity?: number; 
    public get allocatedCapacity() {
        return this.getNumberAttribute('allocated_capacity');
    }
    public set allocatedCapacity(value: number) {
        this._allocatedCapacity = value;
    }
    public resetAllocatedCapacity() {
        this._allocatedCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocatedCapacityInput() {
        return this._allocatedCapacity;
    }

    // command - computed: false, optional: false, required: true
    private _command = new CcJob.JobCommandPropertyOutputReference(this, "command");
    public get command() {
        return this._command;
    }
    public putCommand(value: CcJob.JobCommandProperty) {
        this._command.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get commandInput() {
        return this._command.internalValue;
    }

    // connections - computed: true, optional: true, required: false
    private _connections = new CcJob.ConnectionsListPropertyOutputReference(this, "connections");
    public get connections() {
        return this._connections;
    }
    public putConnections(value: CcJob.ConnectionsListProperty) {
        this._connections.internalValue = value;
    }
    public resetConnections() {
        this._connections.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionsInput() {
        return this._connections.internalValue;
    }

    // default_arguments - computed: true, optional: true, required: false
    private _defaultArguments?: string; 
    public get defaultArguments() {
        return this.getStringAttribute('default_arguments');
    }
    public set defaultArguments(value: string) {
        this._defaultArguments = value;
    }
    public resetDefaultArguments() {
        this._defaultArguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultArgumentsInput() {
        return this._defaultArguments;
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

    // execution_class - computed: true, optional: true, required: false
    private _executionClass?: string; 
    public get executionClass() {
        return this.getStringAttribute('execution_class');
    }
    public set executionClass(value: string) {
        this._executionClass = value;
    }
    public resetExecutionClass() {
        this._executionClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionClassInput() {
        return this._executionClass;
    }

    // execution_property - computed: true, optional: true, required: false
    private _executionProperty = new CcJob.ExecutionPropertyPropertyOutputReference(this, "execution_property");
    public get executionProperty() {
        return this._executionProperty;
    }
    public putExecutionProperty(value: CcJob.ExecutionPropertyProperty) {
        this._executionProperty.internalValue = value;
    }
    public resetExecutionProperty() {
        this._executionProperty.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionPropertyInput() {
        return this._executionProperty.internalValue;
    }

    // glue_version - computed: true, optional: true, required: false
    private _glueVersion?: string; 
    public get glueVersion() {
        return this.getStringAttribute('glue_version');
    }
    public set glueVersion(value: string) {
        this._glueVersion = value;
    }
    public resetGlueVersion() {
        this._glueVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueVersionInput() {
        return this._glueVersion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // job_mode - computed: true, optional: true, required: false
    private _jobMode?: string; 
    public get jobMode() {
        return this.getStringAttribute('job_mode');
    }
    public set jobMode(value: string) {
        this._jobMode = value;
    }
    public resetJobMode() {
        this._jobMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobModeInput() {
        return this._jobMode;
    }

    // job_run_queuing_enabled - computed: true, optional: true, required: false
    private _jobRunQueuingEnabled?: boolean | cdktn.IResolvable; 
    public get jobRunQueuingEnabled() {
        return this.getBooleanAttribute('job_run_queuing_enabled');
    }
    public set jobRunQueuingEnabled(value: boolean | cdktn.IResolvable) {
        this._jobRunQueuingEnabled = value;
    }
    public resetJobRunQueuingEnabled() {
        this._jobRunQueuingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobRunQueuingEnabledInput() {
        return this._jobRunQueuingEnabled;
    }

    // log_uri - computed: true, optional: true, required: false
    private _logUri?: string; 
    public get logUri() {
        return this.getStringAttribute('log_uri');
    }
    public set logUri(value: string) {
        this._logUri = value;
    }
    public resetLogUri() {
        this._logUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logUriInput() {
        return this._logUri;
    }

    // maintenance_window - computed: true, optional: true, required: false
    private _maintenanceWindow?: string; 
    public get maintenanceWindow() {
        return this.getStringAttribute('maintenance_window');
    }
    public set maintenanceWindow(value: string) {
        this._maintenanceWindow = value;
    }
    public resetMaintenanceWindow() {
        this._maintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceWindowInput() {
        return this._maintenanceWindow;
    }

    // max_capacity - computed: true, optional: true, required: false
    private _maxCapacity?: number; 
    public get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
        this._maxCapacity = value;
    }
    public resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
        return this._maxCapacity;
    }

    // max_retries - computed: true, optional: true, required: false
    private _maxRetries?: number; 
    public get maxRetries() {
        return this.getNumberAttribute('max_retries');
    }
    public set maxRetries(value: number) {
        this._maxRetries = value;
    }
    public resetMaxRetries() {
        this._maxRetries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRetriesInput() {
        return this._maxRetries;
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

    // non_overridable_arguments - computed: true, optional: true, required: false
    private _nonOverridableArguments?: string; 
    public get nonOverridableArguments() {
        return this.getStringAttribute('non_overridable_arguments');
    }
    public set nonOverridableArguments(value: string) {
        this._nonOverridableArguments = value;
    }
    public resetNonOverridableArguments() {
        this._nonOverridableArguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nonOverridableArgumentsInput() {
        return this._nonOverridableArguments;
    }

    // notification_property - computed: true, optional: true, required: false
    private _notificationProperty = new CcJob.NotificationPropertyPropertyOutputReference(this, "notification_property");
    public get notificationProperty() {
        return this._notificationProperty;
    }
    public putNotificationProperty(value: CcJob.NotificationPropertyProperty) {
        this._notificationProperty.internalValue = value;
    }
    public resetNotificationProperty() {
        this._notificationProperty.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationPropertyInput() {
        return this._notificationProperty.internalValue;
    }

    // number_of_workers - computed: true, optional: true, required: false
    private _numberOfWorkers?: number; 
    public get numberOfWorkers() {
        return this.getNumberAttribute('number_of_workers');
    }
    public set numberOfWorkers(value: number) {
        this._numberOfWorkers = value;
    }
    public resetNumberOfWorkers() {
        this._numberOfWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfWorkersInput() {
        return this._numberOfWorkers;
    }

    // role - computed: false, optional: false, required: true
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
    }

    // security_configuration - computed: true, optional: true, required: false
    private _securityConfiguration?: string; 
    public get securityConfiguration() {
        return this.getStringAttribute('security_configuration');
    }
    public set securityConfiguration(value: string) {
        this._securityConfiguration = value;
    }
    public resetSecurityConfiguration() {
        this._securityConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityConfigurationInput() {
        return this._securityConfiguration;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: string; 
    public get tags() {
        return this.getStringAttribute('tags');
    }
    public set tags(value: string) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
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

    // worker_type - computed: true, optional: true, required: false
    private _workerType?: string; 
    public get workerType() {
        return this.getStringAttribute('worker_type');
    }
    public set workerType(value: string) {
        this._workerType = value;
    }
    public resetWorkerType() {
        this._workerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerTypeInput() {
        return this._workerType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            allocated_capacity: cdktn.numberToTerraform(this._allocatedCapacity),
            command: ccJobJobCommandPropertyToTerraform(this._command.internalValue),
            connections: ccJobConnectionsListPropertyToTerraform(this._connections.internalValue),
            default_arguments: cdktn.stringToTerraform(this._defaultArguments),
            description: cdktn.stringToTerraform(this._description),
            execution_class: cdktn.stringToTerraform(this._executionClass),
            execution_property: ccJobExecutionPropertyPropertyToTerraform(this._executionProperty.internalValue),
            glue_version: cdktn.stringToTerraform(this._glueVersion),
            job_mode: cdktn.stringToTerraform(this._jobMode),
            job_run_queuing_enabled: cdktn.booleanToTerraform(this._jobRunQueuingEnabled),
            log_uri: cdktn.stringToTerraform(this._logUri),
            maintenance_window: cdktn.stringToTerraform(this._maintenanceWindow),
            max_capacity: cdktn.numberToTerraform(this._maxCapacity),
            max_retries: cdktn.numberToTerraform(this._maxRetries),
            name: cdktn.stringToTerraform(this._name),
            non_overridable_arguments: cdktn.stringToTerraform(this._nonOverridableArguments),
            notification_property: ccJobNotificationPropertyPropertyToTerraform(this._notificationProperty.internalValue),
            number_of_workers: cdktn.numberToTerraform(this._numberOfWorkers),
            role: cdktn.stringToTerraform(this._role),
            security_configuration: cdktn.stringToTerraform(this._securityConfiguration),
            tags: cdktn.stringToTerraform(this._tags),
            timeout: cdktn.numberToTerraform(this._timeout),
            worker_type: cdktn.stringToTerraform(this._workerType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allocated_capacity: {
                value: cdktn.numberToHclTerraform(this._allocatedCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            command: {
                value: ccJobJobCommandPropertyToHclTerraform(this._command.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.JobCommandProperty",
            },
            connections: {
                value: ccJobConnectionsListPropertyToHclTerraform(this._connections.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.ConnectionsListProperty",
            },
            default_arguments: {
                value: cdktn.stringToHclTerraform(this._defaultArguments),
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
            execution_class: {
                value: cdktn.stringToHclTerraform(this._executionClass),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            execution_property: {
                value: ccJobExecutionPropertyPropertyToHclTerraform(this._executionProperty.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.ExecutionPropertyProperty",
            },
            glue_version: {
                value: cdktn.stringToHclTerraform(this._glueVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_mode: {
                value: cdktn.stringToHclTerraform(this._jobMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_run_queuing_enabled: {
                value: cdktn.booleanToHclTerraform(this._jobRunQueuingEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            log_uri: {
                value: cdktn.stringToHclTerraform(this._logUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            maintenance_window: {
                value: cdktn.stringToHclTerraform(this._maintenanceWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_capacity: {
                value: cdktn.numberToHclTerraform(this._maxCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_retries: {
                value: cdktn.numberToHclTerraform(this._maxRetries),
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
            non_overridable_arguments: {
                value: cdktn.stringToHclTerraform(this._nonOverridableArguments),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_property: {
                value: ccJobNotificationPropertyPropertyToHclTerraform(this._notificationProperty.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.NotificationPropertyProperty",
            },
            number_of_workers: {
                value: cdktn.numberToHclTerraform(this._numberOfWorkers),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            role: {
                value: cdktn.stringToHclTerraform(this._role),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_configuration: {
                value: cdktn.stringToHclTerraform(this._securityConfiguration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.stringToHclTerraform(this._tags),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            timeout: {
                value: cdktn.numberToHclTerraform(this._timeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            worker_type: {
                value: cdktn.stringToHclTerraform(this._workerType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccJobJobCommandPropertyToTerraform(struct?: CcJob.JobCommandProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        python_version: cdktn.stringToTerraform(struct!.pythonVersion),
        runtime: cdktn.stringToTerraform(struct!.runtime),
        script_location: cdktn.stringToTerraform(struct!.scriptLocation),
    }
}


export function ccJobJobCommandPropertyToHclTerraform(struct?: CcJob.JobCommandProperty | cdktn.IResolvable): any {
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
        python_version: {
            value: cdktn.stringToHclTerraform(struct!.pythonVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        runtime: {
            value: cdktn.stringToHclTerraform(struct!.runtime),
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


export function ccJobConnectionsListPropertyToTerraform(struct?: CcJob.ConnectionsListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connections: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.connections),
    }
}


export function ccJobConnectionsListPropertyToHclTerraform(struct?: CcJob.ConnectionsListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connections: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.connections),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobExecutionPropertyPropertyToTerraform(struct?: CcJob.ExecutionPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_concurrent_runs: cdktn.numberToTerraform(struct!.maxConcurrentRuns),
    }
}


export function ccJobExecutionPropertyPropertyToHclTerraform(struct?: CcJob.ExecutionPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_concurrent_runs: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrentRuns),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobNotificationPropertyPropertyToTerraform(struct?: CcJob.NotificationPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        notify_delay_after: cdktn.numberToTerraform(struct!.notifyDelayAfter),
    }
}


export function ccJobNotificationPropertyPropertyToHclTerraform(struct?: CcJob.NotificationPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        notify_delay_after: {
            value: cdktn.numberToHclTerraform(struct!.notifyDelayAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcJob {
export interface JobCommandProperty {
    /**
    * The name of the job command
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#name CcJob#name}
    */
    readonly name?: string;
    /**
    * The Python version being used to execute a Python shell job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#python_version CcJob#python_version}
    */
    readonly pythonVersion?: string;
    /**
    * Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#runtime CcJob#runtime}
    */
    readonly runtime?: string;
    /**
    * Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#script_location CcJob#script_location}
    */
    readonly scriptLocation?: string;
}
export class JobCommandPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JobCommandProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._pythonVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.pythonVersion = this._pythonVersion;
        }
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        if (this._scriptLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.scriptLocation = this._scriptLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JobCommandProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._pythonVersion = undefined;
            this._runtime = undefined;
            this._scriptLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._pythonVersion = value.pythonVersion;
            this._runtime = value.runtime;
            this._scriptLocation = value.scriptLocation;
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

    // python_version - computed: true, optional: true, required: false
    private _pythonVersion?: string; 
    public get pythonVersion() {
        return this.getStringAttribute('python_version');
    }
    public set pythonVersion(value: string) {
        this._pythonVersion = value;
    }
    public resetPythonVersion() {
        this._pythonVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pythonVersionInput() {
        return this._pythonVersion;
    }

    // runtime - computed: true, optional: true, required: false
    private _runtime?: string; 
    public get runtime() {
        return this.getStringAttribute('runtime');
    }
    public set runtime(value: string) {
        this._runtime = value;
    }
    public resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
        return this._runtime;
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
export interface ConnectionsListProperty {
    /**
    * A list of connections used by the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#connections CcJob#connections}
    */
    readonly connections?: string[];
}
export class ConnectionsListPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionsListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connections !== undefined) {
            hasAnyValues = true;
            internalValueResult.connections = this._connections;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionsListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connections = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connections = value.connections;
        }
    }

    // connections - computed: true, optional: true, required: false
    private _connections?: string[]; 
    public get connections() {
        return this.getListAttribute('connections');
    }
    public set connections(value: string[]) {
        this._connections = value;
    }
    public resetConnections() {
        this._connections = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionsInput() {
        return this._connections;
    }
}
export interface ExecutionPropertyProperty {
    /**
    * The maximum number of concurrent runs allowed for the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#max_concurrent_runs CcJob#max_concurrent_runs}
    */
    readonly maxConcurrentRuns?: number;
}
export class ExecutionPropertyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExecutionPropertyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxConcurrentRuns !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExecutionPropertyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxConcurrentRuns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxConcurrentRuns = value.maxConcurrentRuns;
        }
    }

    // max_concurrent_runs - computed: true, optional: true, required: false
    private _maxConcurrentRuns?: number; 
    public get maxConcurrentRuns() {
        return this.getNumberAttribute('max_concurrent_runs');
    }
    public set maxConcurrentRuns(value: number) {
        this._maxConcurrentRuns = value;
    }
    public resetMaxConcurrentRuns() {
        this._maxConcurrentRuns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentRunsInput() {
        return this._maxConcurrentRuns;
    }
}
export interface NotificationPropertyProperty {
    /**
    * It is the number of minutes to wait before sending a job run delay notification after a job run starts
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_job#notify_delay_after CcJob#notify_delay_after}
    */
    readonly notifyDelayAfter?: number;
}
export class NotificationPropertyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationPropertyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._notifyDelayAfter !== undefined) {
            hasAnyValues = true;
            internalValueResult.notifyDelayAfter = this._notifyDelayAfter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationPropertyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._notifyDelayAfter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._notifyDelayAfter = value.notifyDelayAfter;
        }
    }

    // notify_delay_after - computed: true, optional: true, required: false
    private _notifyDelayAfter?: number; 
    public get notifyDelayAfter() {
        return this.getNumberAttribute('notify_delay_after');
    }
    public set notifyDelayAfter(value: number) {
        this._notifyDelayAfter = value;
    }
    public resetNotifyDelayAfter() {
        this._notifyDelayAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notifyDelayAfterInput() {
        return this._notifyDelayAfter;
    }
}
}
