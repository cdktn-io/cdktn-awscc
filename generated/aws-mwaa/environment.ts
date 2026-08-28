// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentProps extends cdktn.TerraformMetaArguments {
    /**
    * Key/value pairs representing Airflow configuration variables.
    *     Keys are prefixed by their section:
    * 
    *     [core]
    *     dags_folder={AIRFLOW_HOME}/dags
    * 
    *     Would be represented as
    * 
    *     "core.dags_folder": "{AIRFLOW_HOME}/dags"
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#airflow_configuration_options CcEnvironment#airflow_configuration_options}
    */
    readonly airflowConfigurationOptions?: string;
    /**
    * Version of airflow to deploy to the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#airflow_version CcEnvironment#airflow_version}
    */
    readonly airflowVersion?: string;
    /**
    * Represents an S3 prefix relative to the root of an S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#dag_s3_path CcEnvironment#dag_s3_path}
    */
    readonly dagS3Path?: string;
    /**
    * Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#endpoint_management CcEnvironment#endpoint_management}
    */
    readonly endpointManagement?: string;
    /**
    * Templated configuration for airflow processes and backing infrastructure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#environment_class CcEnvironment#environment_class}
    */
    readonly environmentClass?: string;
    /**
    * IAM role to be used by tasks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#execution_role_arn CcEnvironment#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for MWAA data encryption.
    * 
    *     You can specify the CMK using any of the following:
    * 
    *     Key ID. For example, key/1234abcd-12ab-34cd-56ef-1234567890ab.
    * 
    *     Key alias. For example, alias/ExampleAlias.
    * 
    *     Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.
    * 
    *     Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.
    * 
    *     AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#kms_key CcEnvironment#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * Logging configuration for the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#logging_configuration CcEnvironment#logging_configuration}
    */
    readonly loggingConfiguration?: CcEnvironment.LoggingConfigurationProperty;
    /**
    * Maximum webserver compute units.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#max_webservers CcEnvironment#max_webservers}
    */
    readonly maxWebservers?: number;
    /**
    * Maximum worker compute units.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#max_workers CcEnvironment#max_workers}
    */
    readonly maxWorkers?: number;
    /**
    * Minimum webserver compute units.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#min_webservers CcEnvironment#min_webservers}
    */
    readonly minWebservers?: number;
    /**
    * Minimum worker compute units.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#min_workers CcEnvironment#min_workers}
    */
    readonly minWorkers?: number;
    /**
    * Customer-defined identifier for the environment, unique per customer region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#name CcEnvironment#name}
    */
    readonly name: string;
    /**
    * Configures the network resources of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#network_configuration CcEnvironment#network_configuration}
    */
    readonly networkConfiguration?: CcEnvironment.NetworkConfigurationProperty;
    /**
    * Represents an version ID for an S3 object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#plugins_s3_object_version CcEnvironment#plugins_s3_object_version}
    */
    readonly pluginsS3ObjectVersion?: string;
    /**
    * Represents an S3 prefix relative to the root of an S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#plugins_s3_path CcEnvironment#plugins_s3_path}
    */
    readonly pluginsS3Path?: string;
    /**
    * Represents an version ID for an S3 object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#requirements_s3_object_version CcEnvironment#requirements_s3_object_version}
    */
    readonly requirementsS3ObjectVersion?: string;
    /**
    * Represents an S3 prefix relative to the root of an S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#requirements_s3_path CcEnvironment#requirements_s3_path}
    */
    readonly requirementsS3Path?: string;
    /**
    * Scheduler compute units.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#schedulers CcEnvironment#schedulers}
    */
    readonly schedulers?: number;
    /**
    * ARN for the AWS S3 bucket to use as the source of DAGs and plugins for the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#source_bucket_arn CcEnvironment#source_bucket_arn}
    */
    readonly sourceBucketArn?: string;
    /**
    * Represents an version ID for an S3 object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#startup_script_s3_object_version CcEnvironment#startup_script_s3_object_version}
    */
    readonly startupScriptS3ObjectVersion?: string;
    /**
    * Represents an S3 prefix relative to the root of an S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#startup_script_s3_path CcEnvironment#startup_script_s3_path}
    */
    readonly startupScriptS3Path?: string;
    /**
    * A map of tags for the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#tags CcEnvironment#tags}
    */
    readonly tags?: string;
    /**
    * Choice for mode of webserver access including over public internet or via private VPC endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#webserver_access_mode CcEnvironment#webserver_access_mode}
    */
    readonly webserverAccessMode?: string;
    /**
    * Start time for the weekly maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#weekly_maintenance_window_start CcEnvironment#weekly_maintenance_window_start}
    */
    readonly weeklyMaintenanceWindowStart?: string;
    /**
    * The worker replacement strategy to use when updating the environment. Valid values: `FORCED`, `GRACEFUL`. FORCED means Apache Airflow workers will be stopped and replaced without waiting for tasks to complete before an update. GRACEFUL means Apache Airflow workers will be able to complete running tasks for up to 12 hours during an update before being stopped and replaced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#worker_replacement_strategy CcEnvironment#worker_replacement_strategy}
    */
    readonly workerReplacementStrategy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment awscc_mwaa_environment}
*/
export class CcEnvironment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mwaa_environment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironment to import
    * @param importFromId The id of the existing CcEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mwaa_environment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment awscc_mwaa_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentProps
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mwaa_environment',
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
        this._airflowConfigurationOptions = config.airflowConfigurationOptions;
        this._airflowVersion = config.airflowVersion;
        this._dagS3Path = config.dagS3Path;
        this._endpointManagement = config.endpointManagement;
        this._environmentClass = config.environmentClass;
        this._executionRoleArn = config.executionRoleArn;
        this._kmsKey = config.kmsKey;
        this._loggingConfiguration.internalValue = config.loggingConfiguration;
        this._maxWebservers = config.maxWebservers;
        this._maxWorkers = config.maxWorkers;
        this._minWebservers = config.minWebservers;
        this._minWorkers = config.minWorkers;
        this._name = config.name;
        this._networkConfiguration.internalValue = config.networkConfiguration;
        this._pluginsS3ObjectVersion = config.pluginsS3ObjectVersion;
        this._pluginsS3Path = config.pluginsS3Path;
        this._requirementsS3ObjectVersion = config.requirementsS3ObjectVersion;
        this._requirementsS3Path = config.requirementsS3Path;
        this._schedulers = config.schedulers;
        this._sourceBucketArn = config.sourceBucketArn;
        this._startupScriptS3ObjectVersion = config.startupScriptS3ObjectVersion;
        this._startupScriptS3Path = config.startupScriptS3Path;
        this._tags = config.tags;
        this._webserverAccessMode = config.webserverAccessMode;
        this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
        this._workerReplacementStrategy = config.workerReplacementStrategy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // airflow_configuration_options - computed: true, optional: true, required: false
    private _airflowConfigurationOptions?: string; 
    public get airflowConfigurationOptions() {
        return this.getStringAttribute('airflow_configuration_options');
    }
    public set airflowConfigurationOptions(value: string) {
        this._airflowConfigurationOptions = value;
    }
    public resetAirflowConfigurationOptions() {
        this._airflowConfigurationOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get airflowConfigurationOptionsInput() {
        return this._airflowConfigurationOptions;
    }

    // airflow_version - computed: true, optional: true, required: false
    private _airflowVersion?: string; 
    public get airflowVersion() {
        return this.getStringAttribute('airflow_version');
    }
    public set airflowVersion(value: string) {
        this._airflowVersion = value;
    }
    public resetAirflowVersion() {
        this._airflowVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get airflowVersionInput() {
        return this._airflowVersion;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // celery_executor_queue - computed: true, optional: false, required: false
    public get celeryExecutorQueue() {
        return this.getStringAttribute('celery_executor_queue');
    }

    // dag_s3_path - computed: true, optional: true, required: false
    private _dagS3Path?: string; 
    public get dagS3Path() {
        return this.getStringAttribute('dag_s3_path');
    }
    public set dagS3Path(value: string) {
        this._dagS3Path = value;
    }
    public resetDagS3Path() {
        this._dagS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dagS3PathInput() {
        return this._dagS3Path;
    }

    // database_vpc_endpoint_service - computed: true, optional: false, required: false
    public get databaseVpcEndpointService() {
        return this.getStringAttribute('database_vpc_endpoint_service');
    }

    // endpoint_management - computed: true, optional: true, required: false
    private _endpointManagement?: string; 
    public get endpointManagement() {
        return this.getStringAttribute('endpoint_management');
    }
    public set endpointManagement(value: string) {
        this._endpointManagement = value;
    }
    public resetEndpointManagement() {
        this._endpointManagement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointManagementInput() {
        return this._endpointManagement;
    }

    // environment_class - computed: true, optional: true, required: false
    private _environmentClass?: string; 
    public get environmentClass() {
        return this.getStringAttribute('environment_class');
    }
    public set environmentClass(value: string) {
        this._environmentClass = value;
    }
    public resetEnvironmentClass() {
        this._environmentClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentClassInput() {
        return this._environmentClass;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // logging_configuration - computed: true, optional: true, required: false
    private _loggingConfiguration = new CcEnvironment.LoggingConfigurationPropertyOutputReference(this, "logging_configuration");
    public get loggingConfiguration() {
        return this._loggingConfiguration;
    }
    public putLoggingConfiguration(value: CcEnvironment.LoggingConfigurationProperty) {
        this._loggingConfiguration.internalValue = value;
    }
    public resetLoggingConfiguration() {
        this._loggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationInput() {
        return this._loggingConfiguration.internalValue;
    }

    // max_webservers - computed: true, optional: true, required: false
    private _maxWebservers?: number; 
    public get maxWebservers() {
        return this.getNumberAttribute('max_webservers');
    }
    public set maxWebservers(value: number) {
        this._maxWebservers = value;
    }
    public resetMaxWebservers() {
        this._maxWebservers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxWebserversInput() {
        return this._maxWebservers;
    }

    // max_workers - computed: true, optional: true, required: false
    private _maxWorkers?: number; 
    public get maxWorkers() {
        return this.getNumberAttribute('max_workers');
    }
    public set maxWorkers(value: number) {
        this._maxWorkers = value;
    }
    public resetMaxWorkers() {
        this._maxWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxWorkersInput() {
        return this._maxWorkers;
    }

    // min_webservers - computed: true, optional: true, required: false
    private _minWebservers?: number; 
    public get minWebservers() {
        return this.getNumberAttribute('min_webservers');
    }
    public set minWebservers(value: number) {
        this._minWebservers = value;
    }
    public resetMinWebservers() {
        this._minWebservers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minWebserversInput() {
        return this._minWebservers;
    }

    // min_workers - computed: true, optional: true, required: false
    private _minWorkers?: number; 
    public get minWorkers() {
        return this.getNumberAttribute('min_workers');
    }
    public set minWorkers(value: number) {
        this._minWorkers = value;
    }
    public resetMinWorkers() {
        this._minWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minWorkersInput() {
        return this._minWorkers;
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

    // network_configuration - computed: true, optional: true, required: false
    private _networkConfiguration = new CcEnvironment.NetworkConfigurationPropertyOutputReference(this, "network_configuration");
    public get networkConfiguration() {
        return this._networkConfiguration;
    }
    public putNetworkConfiguration(value: CcEnvironment.NetworkConfigurationProperty) {
        this._networkConfiguration.internalValue = value;
    }
    public resetNetworkConfiguration() {
        this._networkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }

    // plugins_s3_object_version - computed: true, optional: true, required: false
    private _pluginsS3ObjectVersion?: string; 
    public get pluginsS3ObjectVersion() {
        return this.getStringAttribute('plugins_s3_object_version');
    }
    public set pluginsS3ObjectVersion(value: string) {
        this._pluginsS3ObjectVersion = value;
    }
    public resetPluginsS3ObjectVersion() {
        this._pluginsS3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pluginsS3ObjectVersionInput() {
        return this._pluginsS3ObjectVersion;
    }

    // plugins_s3_path - computed: true, optional: true, required: false
    private _pluginsS3Path?: string; 
    public get pluginsS3Path() {
        return this.getStringAttribute('plugins_s3_path');
    }
    public set pluginsS3Path(value: string) {
        this._pluginsS3Path = value;
    }
    public resetPluginsS3Path() {
        this._pluginsS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pluginsS3PathInput() {
        return this._pluginsS3Path;
    }

    // requirements_s3_object_version - computed: true, optional: true, required: false
    private _requirementsS3ObjectVersion?: string; 
    public get requirementsS3ObjectVersion() {
        return this.getStringAttribute('requirements_s3_object_version');
    }
    public set requirementsS3ObjectVersion(value: string) {
        this._requirementsS3ObjectVersion = value;
    }
    public resetRequirementsS3ObjectVersion() {
        this._requirementsS3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requirementsS3ObjectVersionInput() {
        return this._requirementsS3ObjectVersion;
    }

    // requirements_s3_path - computed: true, optional: true, required: false
    private _requirementsS3Path?: string; 
    public get requirementsS3Path() {
        return this.getStringAttribute('requirements_s3_path');
    }
    public set requirementsS3Path(value: string) {
        this._requirementsS3Path = value;
    }
    public resetRequirementsS3Path() {
        this._requirementsS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requirementsS3PathInput() {
        return this._requirementsS3Path;
    }

    // schedulers - computed: true, optional: true, required: false
    private _schedulers?: number; 
    public get schedulers() {
        return this.getNumberAttribute('schedulers');
    }
    public set schedulers(value: number) {
        this._schedulers = value;
    }
    public resetSchedulers() {
        this._schedulers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulersInput() {
        return this._schedulers;
    }

    // source_bucket_arn - computed: true, optional: true, required: false
    private _sourceBucketArn?: string; 
    public get sourceBucketArn() {
        return this.getStringAttribute('source_bucket_arn');
    }
    public set sourceBucketArn(value: string) {
        this._sourceBucketArn = value;
    }
    public resetSourceBucketArn() {
        this._sourceBucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceBucketArnInput() {
        return this._sourceBucketArn;
    }

    // startup_script_s3_object_version - computed: true, optional: true, required: false
    private _startupScriptS3ObjectVersion?: string; 
    public get startupScriptS3ObjectVersion() {
        return this.getStringAttribute('startup_script_s3_object_version');
    }
    public set startupScriptS3ObjectVersion(value: string) {
        this._startupScriptS3ObjectVersion = value;
    }
    public resetStartupScriptS3ObjectVersion() {
        this._startupScriptS3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startupScriptS3ObjectVersionInput() {
        return this._startupScriptS3ObjectVersion;
    }

    // startup_script_s3_path - computed: true, optional: true, required: false
    private _startupScriptS3Path?: string; 
    public get startupScriptS3Path() {
        return this.getStringAttribute('startup_script_s3_path');
    }
    public set startupScriptS3Path(value: string) {
        this._startupScriptS3Path = value;
    }
    public resetStartupScriptS3Path() {
        this._startupScriptS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startupScriptS3PathInput() {
        return this._startupScriptS3Path;
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

    // webserver_access_mode - computed: true, optional: true, required: false
    private _webserverAccessMode?: string; 
    public get webserverAccessMode() {
        return this.getStringAttribute('webserver_access_mode');
    }
    public set webserverAccessMode(value: string) {
        this._webserverAccessMode = value;
    }
    public resetWebserverAccessMode() {
        this._webserverAccessMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webserverAccessModeInput() {
        return this._webserverAccessMode;
    }

    // webserver_url - computed: true, optional: false, required: false
    public get webserverUrl() {
        return this.getStringAttribute('webserver_url');
    }

    // webserver_vpc_endpoint_service - computed: true, optional: false, required: false
    public get webserverVpcEndpointService() {
        return this.getStringAttribute('webserver_vpc_endpoint_service');
    }

    // weekly_maintenance_window_start - computed: true, optional: true, required: false
    private _weeklyMaintenanceWindowStart?: string; 
    public get weeklyMaintenanceWindowStart() {
        return this.getStringAttribute('weekly_maintenance_window_start');
    }
    public set weeklyMaintenanceWindowStart(value: string) {
        this._weeklyMaintenanceWindowStart = value;
    }
    public resetWeeklyMaintenanceWindowStart() {
        this._weeklyMaintenanceWindowStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weeklyMaintenanceWindowStartInput() {
        return this._weeklyMaintenanceWindowStart;
    }

    // worker_replacement_strategy - computed: true, optional: true, required: false
    private _workerReplacementStrategy?: string; 
    public get workerReplacementStrategy() {
        return this.getStringAttribute('worker_replacement_strategy');
    }
    public set workerReplacementStrategy(value: string) {
        this._workerReplacementStrategy = value;
    }
    public resetWorkerReplacementStrategy() {
        this._workerReplacementStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerReplacementStrategyInput() {
        return this._workerReplacementStrategy;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            airflow_configuration_options: cdktn.stringToTerraform(this._airflowConfigurationOptions),
            airflow_version: cdktn.stringToTerraform(this._airflowVersion),
            dag_s3_path: cdktn.stringToTerraform(this._dagS3Path),
            endpoint_management: cdktn.stringToTerraform(this._endpointManagement),
            environment_class: cdktn.stringToTerraform(this._environmentClass),
            execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
            kms_key: cdktn.stringToTerraform(this._kmsKey),
            logging_configuration: ccEnvironmentLoggingConfigurationPropertyToTerraform(this._loggingConfiguration.internalValue),
            max_webservers: cdktn.numberToTerraform(this._maxWebservers),
            max_workers: cdktn.numberToTerraform(this._maxWorkers),
            min_webservers: cdktn.numberToTerraform(this._minWebservers),
            min_workers: cdktn.numberToTerraform(this._minWorkers),
            name: cdktn.stringToTerraform(this._name),
            network_configuration: ccEnvironmentNetworkConfigurationPropertyToTerraform(this._networkConfiguration.internalValue),
            plugins_s3_object_version: cdktn.stringToTerraform(this._pluginsS3ObjectVersion),
            plugins_s3_path: cdktn.stringToTerraform(this._pluginsS3Path),
            requirements_s3_object_version: cdktn.stringToTerraform(this._requirementsS3ObjectVersion),
            requirements_s3_path: cdktn.stringToTerraform(this._requirementsS3Path),
            schedulers: cdktn.numberToTerraform(this._schedulers),
            source_bucket_arn: cdktn.stringToTerraform(this._sourceBucketArn),
            startup_script_s3_object_version: cdktn.stringToTerraform(this._startupScriptS3ObjectVersion),
            startup_script_s3_path: cdktn.stringToTerraform(this._startupScriptS3Path),
            tags: cdktn.stringToTerraform(this._tags),
            webserver_access_mode: cdktn.stringToTerraform(this._webserverAccessMode),
            weekly_maintenance_window_start: cdktn.stringToTerraform(this._weeklyMaintenanceWindowStart),
            worker_replacement_strategy: cdktn.stringToTerraform(this._workerReplacementStrategy),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            airflow_configuration_options: {
                value: cdktn.stringToHclTerraform(this._airflowConfigurationOptions),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            airflow_version: {
                value: cdktn.stringToHclTerraform(this._airflowVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dag_s3_path: {
                value: cdktn.stringToHclTerraform(this._dagS3Path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_management: {
                value: cdktn.stringToHclTerraform(this._endpointManagement),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_class: {
                value: cdktn.stringToHclTerraform(this._environmentClass),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._executionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key: {
                value: cdktn.stringToHclTerraform(this._kmsKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_configuration: {
                value: ccEnvironmentLoggingConfigurationPropertyToHclTerraform(this._loggingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironment.LoggingConfigurationProperty",
            },
            max_webservers: {
                value: cdktn.numberToHclTerraform(this._maxWebservers),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_workers: {
                value: cdktn.numberToHclTerraform(this._maxWorkers),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            min_webservers: {
                value: cdktn.numberToHclTerraform(this._minWebservers),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            min_workers: {
                value: cdktn.numberToHclTerraform(this._minWorkers),
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
            network_configuration: {
                value: ccEnvironmentNetworkConfigurationPropertyToHclTerraform(this._networkConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironment.NetworkConfigurationProperty",
            },
            plugins_s3_object_version: {
                value: cdktn.stringToHclTerraform(this._pluginsS3ObjectVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            plugins_s3_path: {
                value: cdktn.stringToHclTerraform(this._pluginsS3Path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            requirements_s3_object_version: {
                value: cdktn.stringToHclTerraform(this._requirementsS3ObjectVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            requirements_s3_path: {
                value: cdktn.stringToHclTerraform(this._requirementsS3Path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedulers: {
                value: cdktn.numberToHclTerraform(this._schedulers),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            source_bucket_arn: {
                value: cdktn.stringToHclTerraform(this._sourceBucketArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            startup_script_s3_object_version: {
                value: cdktn.stringToHclTerraform(this._startupScriptS3ObjectVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            startup_script_s3_path: {
                value: cdktn.stringToHclTerraform(this._startupScriptS3Path),
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
            webserver_access_mode: {
                value: cdktn.stringToHclTerraform(this._webserverAccessMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            weekly_maintenance_window_start: {
                value: cdktn.stringToHclTerraform(this._weeklyMaintenanceWindowStart),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            worker_replacement_strategy: {
                value: cdktn.stringToHclTerraform(this._workerReplacementStrategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentModuleLoggingConfigurationPropertyToTerraform(struct?: CcEnvironment.ModuleLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_level: cdktn.stringToTerraform(struct!.logLevel),
    }
}


export function ccEnvironmentModuleLoggingConfigurationPropertyToHclTerraform(struct?: CcEnvironment.ModuleLoggingConfigurationProperty | cdktn.IResolvable): any {
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
        log_level: {
            value: cdktn.stringToHclTerraform(struct!.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentSchedulerLogsPropertyToTerraform(struct?: CcEnvironment.SchedulerLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_level: cdktn.stringToTerraform(struct!.logLevel),
    }
}


export function ccEnvironmentSchedulerLogsPropertyToHclTerraform(struct?: CcEnvironment.SchedulerLogsProperty | cdktn.IResolvable): any {
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
        log_level: {
            value: cdktn.stringToHclTerraform(struct!.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentTaskLogsPropertyToTerraform(struct?: CcEnvironment.TaskLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_level: cdktn.stringToTerraform(struct!.logLevel),
    }
}


export function ccEnvironmentTaskLogsPropertyToHclTerraform(struct?: CcEnvironment.TaskLogsProperty | cdktn.IResolvable): any {
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
        log_level: {
            value: cdktn.stringToHclTerraform(struct!.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentWebserverLogsPropertyToTerraform(struct?: CcEnvironment.WebserverLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_level: cdktn.stringToTerraform(struct!.logLevel),
    }
}


export function ccEnvironmentWebserverLogsPropertyToHclTerraform(struct?: CcEnvironment.WebserverLogsProperty | cdktn.IResolvable): any {
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
        log_level: {
            value: cdktn.stringToHclTerraform(struct!.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentWorkerLogsPropertyToTerraform(struct?: CcEnvironment.WorkerLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_level: cdktn.stringToTerraform(struct!.logLevel),
    }
}


export function ccEnvironmentWorkerLogsPropertyToHclTerraform(struct?: CcEnvironment.WorkerLogsProperty | cdktn.IResolvable): any {
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
        log_level: {
            value: cdktn.stringToHclTerraform(struct!.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentLoggingConfigurationPropertyToTerraform(struct?: CcEnvironment.LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dag_processing_logs: ccEnvironmentModuleLoggingConfigurationPropertyToTerraform(struct!.dagProcessingLogs),
        scheduler_logs: ccEnvironmentSchedulerLogsPropertyToTerraform(struct!.schedulerLogs),
        task_logs: ccEnvironmentTaskLogsPropertyToTerraform(struct!.taskLogs),
        webserver_logs: ccEnvironmentWebserverLogsPropertyToTerraform(struct!.webserverLogs),
        worker_logs: ccEnvironmentWorkerLogsPropertyToTerraform(struct!.workerLogs),
    }
}


export function ccEnvironmentLoggingConfigurationPropertyToHclTerraform(struct?: CcEnvironment.LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dag_processing_logs: {
            value: ccEnvironmentModuleLoggingConfigurationPropertyToHclTerraform(struct!.dagProcessingLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "ModuleLoggingConfigurationProperty",
        },
        scheduler_logs: {
            value: ccEnvironmentSchedulerLogsPropertyToHclTerraform(struct!.schedulerLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "SchedulerLogsProperty",
        },
        task_logs: {
            value: ccEnvironmentTaskLogsPropertyToHclTerraform(struct!.taskLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "TaskLogsProperty",
        },
        webserver_logs: {
            value: ccEnvironmentWebserverLogsPropertyToHclTerraform(struct!.webserverLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "WebserverLogsProperty",
        },
        worker_logs: {
            value: ccEnvironmentWorkerLogsPropertyToHclTerraform(struct!.workerLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerLogsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentNetworkConfigurationPropertyToTerraform(struct?: CcEnvironment.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccEnvironmentNetworkConfigurationPropertyToHclTerraform(struct?: CcEnvironment.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcEnvironment {
export interface ModuleLoggingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#enabled CcEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#log_level CcEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export class ModuleLoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModuleLoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModuleLoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }

    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    public get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
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

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string; 
    public get logLevel() {
        return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string) {
        this._logLevel = value;
    }
    public resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
        return this._logLevel;
    }
}
export interface SchedulerLogsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#enabled CcEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#log_level CcEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export class SchedulerLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchedulerLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchedulerLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }

    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    public get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
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

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string; 
    public get logLevel() {
        return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string) {
        this._logLevel = value;
    }
    public resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
        return this._logLevel;
    }
}
export interface TaskLogsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#enabled CcEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#log_level CcEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export class TaskLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TaskLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TaskLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }

    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    public get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
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

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string; 
    public get logLevel() {
        return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string) {
        this._logLevel = value;
    }
    public resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
        return this._logLevel;
    }
}
export interface WebserverLogsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#enabled CcEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#log_level CcEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export class WebserverLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WebserverLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WebserverLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }

    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    public get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
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

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string; 
    public get logLevel() {
        return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string) {
        this._logLevel = value;
    }
    public resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
        return this._logLevel;
    }
}
export interface WorkerLogsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#enabled CcEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#log_level CcEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export class WorkerLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkerLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkerLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }

    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    public get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
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

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string; 
    public get logLevel() {
        return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string) {
        this._logLevel = value;
    }
    public resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
        return this._logLevel;
    }
}
export interface LoggingConfigurationProperty {
    /**
    * Logging configuration for a specific airflow component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#dag_processing_logs CcEnvironment#dag_processing_logs}
    */
    readonly dagProcessingLogs?: ModuleLoggingConfigurationProperty;
    /**
    * Logging configuration for a specific airflow component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#scheduler_logs CcEnvironment#scheduler_logs}
    */
    readonly schedulerLogs?: SchedulerLogsProperty;
    /**
    * Logging configuration for a specific airflow component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#task_logs CcEnvironment#task_logs}
    */
    readonly taskLogs?: TaskLogsProperty;
    /**
    * Logging configuration for a specific airflow component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#webserver_logs CcEnvironment#webserver_logs}
    */
    readonly webserverLogs?: WebserverLogsProperty;
    /**
    * Logging configuration for a specific airflow component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#worker_logs CcEnvironment#worker_logs}
    */
    readonly workerLogs?: WorkerLogsProperty;
}
export class LoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dagProcessingLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dagProcessingLogs = this._dagProcessingLogs?.internalValue;
        }
        if (this._schedulerLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedulerLogs = this._schedulerLogs?.internalValue;
        }
        if (this._taskLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskLogs = this._taskLogs?.internalValue;
        }
        if (this._webserverLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.webserverLogs = this._webserverLogs?.internalValue;
        }
        if (this._workerLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.workerLogs = this._workerLogs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dagProcessingLogs.internalValue = undefined;
            this._schedulerLogs.internalValue = undefined;
            this._taskLogs.internalValue = undefined;
            this._webserverLogs.internalValue = undefined;
            this._workerLogs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dagProcessingLogs.internalValue = value.dagProcessingLogs;
            this._schedulerLogs.internalValue = value.schedulerLogs;
            this._taskLogs.internalValue = value.taskLogs;
            this._webserverLogs.internalValue = value.webserverLogs;
            this._workerLogs.internalValue = value.workerLogs;
        }
    }

    // dag_processing_logs - computed: true, optional: true, required: false
    private _dagProcessingLogs = new ModuleLoggingConfigurationPropertyOutputReference(this, "dag_processing_logs");
    public get dagProcessingLogs() {
        return this._dagProcessingLogs;
    }
    public putDagProcessingLogs(value: ModuleLoggingConfigurationProperty) {
        this._dagProcessingLogs.internalValue = value;
    }
    public resetDagProcessingLogs() {
        this._dagProcessingLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dagProcessingLogsInput() {
        return this._dagProcessingLogs.internalValue;
    }

    // scheduler_logs - computed: true, optional: true, required: false
    private _schedulerLogs = new SchedulerLogsPropertyOutputReference(this, "scheduler_logs");
    public get schedulerLogs() {
        return this._schedulerLogs;
    }
    public putSchedulerLogs(value: SchedulerLogsProperty) {
        this._schedulerLogs.internalValue = value;
    }
    public resetSchedulerLogs() {
        this._schedulerLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulerLogsInput() {
        return this._schedulerLogs.internalValue;
    }

    // task_logs - computed: true, optional: true, required: false
    private _taskLogs = new TaskLogsPropertyOutputReference(this, "task_logs");
    public get taskLogs() {
        return this._taskLogs;
    }
    public putTaskLogs(value: TaskLogsProperty) {
        this._taskLogs.internalValue = value;
    }
    public resetTaskLogs() {
        this._taskLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskLogsInput() {
        return this._taskLogs.internalValue;
    }

    // webserver_logs - computed: true, optional: true, required: false
    private _webserverLogs = new WebserverLogsPropertyOutputReference(this, "webserver_logs");
    public get webserverLogs() {
        return this._webserverLogs;
    }
    public putWebserverLogs(value: WebserverLogsProperty) {
        this._webserverLogs.internalValue = value;
    }
    public resetWebserverLogs() {
        this._webserverLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webserverLogsInput() {
        return this._webserverLogs.internalValue;
    }

    // worker_logs - computed: true, optional: true, required: false
    private _workerLogs = new WorkerLogsPropertyOutputReference(this, "worker_logs");
    public get workerLogs() {
        return this._workerLogs;
    }
    public putWorkerLogs(value: WorkerLogsProperty) {
        this._workerLogs.internalValue = value;
    }
    public resetWorkerLogs() {
        this._workerLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerLogsInput() {
        return this._workerLogs.internalValue;
    }
}
export interface NetworkConfigurationProperty {
    /**
    * A list of security groups to use for the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#security_group_ids CcEnvironment#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * A list of subnets to use for the environment. These must be private subnets, in the same VPC, in two different availability zones.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mwaa_environment#subnet_ids CcEnvironment#subnet_ids}
    */
    readonly subnetIds?: string[];
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
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
}
