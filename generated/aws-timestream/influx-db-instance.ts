// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInfluxDBInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * The allocated storage for the InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#allocated_storage CcInfluxDBInstance#allocated_storage}
    */
    readonly allocatedStorage?: number;
    /**
    * The bucket for the InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#bucket CcInfluxDBInstance#bucket}
    */
    readonly bucket?: string;
    /**
    * The compute instance of the InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_instance_type CcInfluxDBInstance#db_instance_type}
    */
    readonly dbInstanceType?: string;
    /**
    * The name of an existing InfluxDB parameter group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_parameter_group_identifier CcInfluxDBInstance#db_parameter_group_identifier}
    */
    readonly dbParameterGroupIdentifier?: string;
    /**
    * The storage type of the InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#db_storage_type CcInfluxDBInstance#db_storage_type}
    */
    readonly dbStorageType?: string;
    /**
    * Deployment type of the InfluxDB Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#deployment_type CcInfluxDBInstance#deployment_type}
    */
    readonly deploymentType?: string;
    /**
    * Configuration for sending logs to customer account from the InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#log_delivery_configuration CcInfluxDBInstance#log_delivery_configuration}
    */
    readonly logDeliveryConfiguration?: CcInfluxDBInstance.LogDeliveryConfigurationProperty;
    /**
    * The maintenance schedule for the InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#maintenance_schedule CcInfluxDBInstance#maintenance_schedule}
    */
    readonly maintenanceSchedule?: CcInfluxDBInstance.MaintenanceScheduleProperty;
    /**
    * The unique name that is associated with the InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#name CcInfluxDBInstance#name}
    */
    readonly name?: string;
    /**
    * Network type of the InfluxDB Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#network_type CcInfluxDBInstance#network_type}
    */
    readonly networkType?: string;
    /**
    * The organization for the InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#organization CcInfluxDBInstance#organization}
    */
    readonly organization?: string;
    /**
    * The password for the InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#password CcInfluxDBInstance#password}
    */
    readonly password?: string;
    /**
    * The port number on which InfluxDB accepts connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#port CcInfluxDBInstance#port}
    */
    readonly port?: number;
    /**
    * Attach a public IP to the customer ENI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#publicly_accessible CcInfluxDBInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktn.IResolvable;
    /**
    * An arbitrary set of tags (key-value pairs) for this DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#tags CcInfluxDBInstance#tags}
    */
    readonly tags?: CcInfluxDBInstance.TagProperty[] | cdktn.IResolvable;
    /**
    * The username for the InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#username CcInfluxDBInstance#username}
    */
    readonly username?: string;
    /**
    * A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#vpc_security_group_ids CcInfluxDBInstance#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * A list of EC2 subnet IDs for this InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#vpc_subnet_ids CcInfluxDBInstance#vpc_subnet_ids}
    */
    readonly vpcSubnetIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance awscc_timestream_influx_db_instance}
*/
export class CcInfluxDBInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_timestream_influx_db_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInfluxDBInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInfluxDBInstance to import
    * @param importFromId The id of the existing CcInfluxDBInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInfluxDBInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_timestream_influx_db_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance awscc_timestream_influx_db_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInfluxDBInstanceProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcInfluxDBInstanceProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_timestream_influx_db_instance',
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
        this._allocatedStorage = config.allocatedStorage;
        this._bucket = config.bucket;
        this._dbInstanceType = config.dbInstanceType;
        this._dbParameterGroupIdentifier = config.dbParameterGroupIdentifier;
        this._dbStorageType = config.dbStorageType;
        this._deploymentType = config.deploymentType;
        this._logDeliveryConfiguration.internalValue = config.logDeliveryConfiguration;
        this._maintenanceSchedule.internalValue = config.maintenanceSchedule;
        this._name = config.name;
        this._networkType = config.networkType;
        this._organization = config.organization;
        this._password = config.password;
        this._port = config.port;
        this._publiclyAccessible = config.publiclyAccessible;
        this._tags.internalValue = config.tags;
        this._username = config.username;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        this._vpcSubnetIds = config.vpcSubnetIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocated_storage - computed: true, optional: true, required: false
    private _allocatedStorage?: number; 
    public get allocatedStorage() {
        return this.getNumberAttribute('allocated_storage');
    }
    public set allocatedStorage(value: number) {
        this._allocatedStorage = value;
    }
    public resetAllocatedStorage() {
        this._allocatedStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocatedStorageInput() {
        return this._allocatedStorage;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
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

    // db_instance_type - computed: true, optional: true, required: false
    private _dbInstanceType?: string; 
    public get dbInstanceType() {
        return this.getStringAttribute('db_instance_type');
    }
    public set dbInstanceType(value: string) {
        this._dbInstanceType = value;
    }
    public resetDbInstanceType() {
        this._dbInstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceTypeInput() {
        return this._dbInstanceType;
    }

    // db_parameter_group_identifier - computed: true, optional: true, required: false
    private _dbParameterGroupIdentifier?: string; 
    public get dbParameterGroupIdentifier() {
        return this.getStringAttribute('db_parameter_group_identifier');
    }
    public set dbParameterGroupIdentifier(value: string) {
        this._dbParameterGroupIdentifier = value;
    }
    public resetDbParameterGroupIdentifier() {
        this._dbParameterGroupIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbParameterGroupIdentifierInput() {
        return this._dbParameterGroupIdentifier;
    }

    // db_storage_type - computed: true, optional: true, required: false
    private _dbStorageType?: string; 
    public get dbStorageType() {
        return this.getStringAttribute('db_storage_type');
    }
    public set dbStorageType(value: string) {
        this._dbStorageType = value;
    }
    public resetDbStorageType() {
        this._dbStorageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbStorageTypeInput() {
        return this._dbStorageType;
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

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // influx_auth_parameters_secret_arn - computed: true, optional: false, required: false
    public get influxAuthParametersSecretArn() {
        return this.getStringAttribute('influx_auth_parameters_secret_arn');
    }

    // influx_db_instance_id - computed: true, optional: false, required: false
    public get influxDbInstanceId() {
        return this.getStringAttribute('influx_db_instance_id');
    }

    // log_delivery_configuration - computed: true, optional: true, required: false
    private _logDeliveryConfiguration = new CcInfluxDBInstance.LogDeliveryConfigurationPropertyOutputReference(this, "log_delivery_configuration");
    public get logDeliveryConfiguration() {
        return this._logDeliveryConfiguration;
    }
    public putLogDeliveryConfiguration(value: CcInfluxDBInstance.LogDeliveryConfigurationProperty) {
        this._logDeliveryConfiguration.internalValue = value;
    }
    public resetLogDeliveryConfiguration() {
        this._logDeliveryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDeliveryConfigurationInput() {
        return this._logDeliveryConfiguration.internalValue;
    }

    // maintenance_schedule - computed: true, optional: true, required: false
    private _maintenanceSchedule = new CcInfluxDBInstance.MaintenanceSchedulePropertyOutputReference(this, "maintenance_schedule");
    public get maintenanceSchedule() {
        return this._maintenanceSchedule;
    }
    public putMaintenanceSchedule(value: CcInfluxDBInstance.MaintenanceScheduleProperty) {
        this._maintenanceSchedule.internalValue = value;
    }
    public resetMaintenanceSchedule() {
        this._maintenanceSchedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceScheduleInput() {
        return this._maintenanceSchedule.internalValue;
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

    // network_type - computed: true, optional: true, required: false
    private _networkType?: string; 
    public get networkType() {
        return this.getStringAttribute('network_type');
    }
    public set networkType(value: string) {
        this._networkType = value;
    }
    public resetNetworkType() {
        this._networkType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkTypeInput() {
        return this._networkType;
    }

    // next_maintenance_time - computed: true, optional: false, required: false
    public get nextMaintenanceTime() {
        return this.getStringAttribute('next_maintenance_time');
    }

    // organization - computed: true, optional: true, required: false
    private _organization?: string; 
    public get organization() {
        return this.getStringAttribute('organization');
    }
    public set organization(value: string) {
        this._organization = value;
    }
    public resetOrganization() {
        this._organization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationInput() {
        return this._organization;
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
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

    // publicly_accessible - computed: true, optional: true, required: false
    private _publiclyAccessible?: boolean | cdktn.IResolvable; 
    public get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }
    public set publiclyAccessible(value: boolean | cdktn.IResolvable) {
        this._publiclyAccessible = value;
    }
    public resetPubliclyAccessible() {
        this._publiclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publiclyAccessibleInput() {
        return this._publiclyAccessible;
    }

    // secondary_availability_zone - computed: true, optional: false, required: false
    public get secondaryAvailabilityZone() {
        return this.getStringAttribute('secondary_availability_zone');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcInfluxDBInstance.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcInfluxDBInstance.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string[]; 
    public get vpcSecurityGroupIds() {
        return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[]) {
        this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
        this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
        return this._vpcSecurityGroupIds;
    }

    // vpc_subnet_ids - computed: true, optional: true, required: false
    private _vpcSubnetIds?: string[]; 
    public get vpcSubnetIds() {
        return this.getListAttribute('vpc_subnet_ids');
    }
    public set vpcSubnetIds(value: string[]) {
        this._vpcSubnetIds = value;
    }
    public resetVpcSubnetIds() {
        this._vpcSubnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSubnetIdsInput() {
        return this._vpcSubnetIds;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            allocated_storage: cdktn.numberToTerraform(this._allocatedStorage),
            bucket: cdktn.stringToTerraform(this._bucket),
            db_instance_type: cdktn.stringToTerraform(this._dbInstanceType),
            db_parameter_group_identifier: cdktn.stringToTerraform(this._dbParameterGroupIdentifier),
            db_storage_type: cdktn.stringToTerraform(this._dbStorageType),
            deployment_type: cdktn.stringToTerraform(this._deploymentType),
            log_delivery_configuration: ccInfluxDBInstanceLogDeliveryConfigurationPropertyToTerraform(this._logDeliveryConfiguration.internalValue),
            maintenance_schedule: ccInfluxDBInstanceMaintenanceSchedulePropertyToTerraform(this._maintenanceSchedule.internalValue),
            name: cdktn.stringToTerraform(this._name),
            network_type: cdktn.stringToTerraform(this._networkType),
            organization: cdktn.stringToTerraform(this._organization),
            password: cdktn.stringToTerraform(this._password),
            port: cdktn.numberToTerraform(this._port),
            publicly_accessible: cdktn.booleanToTerraform(this._publiclyAccessible),
            tags: cdktn.listMapper(ccInfluxDBInstanceTagPropertyToTerraform, false)(this._tags.internalValue),
            username: cdktn.stringToTerraform(this._username),
            vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroupIds),
            vpc_subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSubnetIds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allocated_storage: {
                value: cdktn.numberToHclTerraform(this._allocatedStorage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            bucket: {
                value: cdktn.stringToHclTerraform(this._bucket),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_instance_type: {
                value: cdktn.stringToHclTerraform(this._dbInstanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_parameter_group_identifier: {
                value: cdktn.stringToHclTerraform(this._dbParameterGroupIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_storage_type: {
                value: cdktn.stringToHclTerraform(this._dbStorageType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deployment_type: {
                value: cdktn.stringToHclTerraform(this._deploymentType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_delivery_configuration: {
                value: ccInfluxDBInstanceLogDeliveryConfigurationPropertyToHclTerraform(this._logDeliveryConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInfluxDBInstance.LogDeliveryConfigurationProperty",
            },
            maintenance_schedule: {
                value: ccInfluxDBInstanceMaintenanceSchedulePropertyToHclTerraform(this._maintenanceSchedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInfluxDBInstance.MaintenanceScheduleProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_type: {
                value: cdktn.stringToHclTerraform(this._networkType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organization: {
                value: cdktn.stringToHclTerraform(this._organization),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            password: {
                value: cdktn.stringToHclTerraform(this._password),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            port: {
                value: cdktn.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            publicly_accessible: {
                value: cdktn.booleanToHclTerraform(this._publiclyAccessible),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccInfluxDBInstanceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcInfluxDBInstance.TagPropertyList",
            },
            username: {
                value: cdktn.stringToHclTerraform(this._username),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            vpc_subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSubnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInfluxDBInstanceS3ConfigurationPropertyToTerraform(struct?: CcInfluxDBInstance.S3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccInfluxDBInstanceS3ConfigurationPropertyToHclTerraform(struct?: CcInfluxDBInstance.S3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInfluxDBInstanceLogDeliveryConfigurationPropertyToTerraform(struct?: CcInfluxDBInstance.LogDeliveryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_configuration: ccInfluxDBInstanceS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    }
}


export function ccInfluxDBInstanceLogDeliveryConfigurationPropertyToHclTerraform(struct?: CcInfluxDBInstance.LogDeliveryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_configuration: {
            value: ccInfluxDBInstanceS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInfluxDBInstanceMaintenanceSchedulePropertyToTerraform(struct?: CcInfluxDBInstance.MaintenanceScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        preferred_maintenance_window: cdktn.stringToTerraform(struct!.preferredMaintenanceWindow),
        timezone: cdktn.stringToTerraform(struct!.timezone),
    }
}


export function ccInfluxDBInstanceMaintenanceSchedulePropertyToHclTerraform(struct?: CcInfluxDBInstance.MaintenanceScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        preferred_maintenance_window: {
            value: cdktn.stringToHclTerraform(struct!.preferredMaintenanceWindow),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timezone: {
            value: cdktn.stringToHclTerraform(struct!.timezone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInfluxDBInstanceTagPropertyToTerraform(struct?: CcInfluxDBInstance.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInfluxDBInstanceTagPropertyToHclTerraform(struct?: CcInfluxDBInstance.TagProperty | cdktn.IResolvable): any {
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


export namespace CcInfluxDBInstance {
export interface S3ConfigurationProperty {
    /**
    * The bucket name for logs to be sent from the InfluxDB instance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#bucket_name CcInfluxDBInstance#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Specifies whether logging to customer specified bucket is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#enabled CcInfluxDBInstance#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class S3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._enabled = value.enabled;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
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
}
export interface LogDeliveryConfigurationProperty {
    /**
    * S3 configuration for sending logs to customer account from the InfluxDB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#s3_configuration CcInfluxDBInstance#s3_configuration}
    */
    readonly s3Configuration?: S3ConfigurationProperty;
}
export class LogDeliveryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogDeliveryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogDeliveryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Configuration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Configuration.internalValue = value.s3Configuration;
        }
    }

    // s3_configuration - computed: true, optional: true, required: false
    private _s3Configuration = new S3ConfigurationPropertyOutputReference(this, "s3_configuration");
    public get s3Configuration() {
        return this._s3Configuration;
    }
    public putS3Configuration(value: S3ConfigurationProperty) {
        this._s3Configuration.internalValue = value;
    }
    public resetS3Configuration() {
        this._s3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ConfigurationInput() {
        return this._s3Configuration.internalValue;
    }
}
export interface MaintenanceScheduleProperty {
    /**
    * The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#preferred_maintenance_window CcInfluxDBInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * The IANA timezone identifier for the maintenance schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#timezone CcInfluxDBInstance#timezone}
    */
    readonly timezone?: string;
}
export class MaintenanceSchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaintenanceScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._preferredMaintenanceWindow !== undefined) {
            hasAnyValues = true;
            internalValueResult.preferredMaintenanceWindow = this._preferredMaintenanceWindow;
        }
        if (this._timezone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timezone = this._timezone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MaintenanceScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._preferredMaintenanceWindow = undefined;
            this._timezone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._preferredMaintenanceWindow = value.preferredMaintenanceWindow;
            this._timezone = value.timezone;
        }
    }

    // preferred_maintenance_window - computed: true, optional: true, required: false
    private _preferredMaintenanceWindow?: string; 
    public get preferredMaintenanceWindow() {
        return this.getStringAttribute('preferred_maintenance_window');
    }
    public set preferredMaintenanceWindow(value: string) {
        this._preferredMaintenanceWindow = value;
    }
    public resetPreferredMaintenanceWindow() {
        this._preferredMaintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredMaintenanceWindowInput() {
        return this._preferredMaintenanceWindow;
    }

    // timezone - computed: true, optional: true, required: false
    private _timezone?: string; 
    public get timezone() {
        return this.getStringAttribute('timezone');
    }
    public set timezone(value: string) {
        this._timezone = value;
    }
    public resetTimezone() {
        this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timezoneInput() {
        return this._timezone;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#key CcInfluxDBInstance#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/timestream_influx_db_instance#value CcInfluxDBInstance#value}
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
