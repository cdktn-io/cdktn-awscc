// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInfluxDbBackupProps extends cdktn.TerraformMetaArguments {
    /**
    * The id of the DB instance or DB cluster to back up.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#db_resource_id CcInfluxDbBackup#db_resource_id}
    */
    readonly dbResourceId: string;
    /**
    * The name of the backup. Must be unique within the account and region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#name CcInfluxDbBackup#name}
    */
    readonly name: string;
    /**
    * The number of days to retain the backup. Valid values are 1 to 3650.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#retention_days CcInfluxDbBackup#retention_days}
    */
    readonly retentionDays?: number;
    /**
    * A list of key-value pairs to associate with the backup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#tags CcInfluxDbBackup#tags}
    */
    readonly tags?: CcInfluxDbBackup.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup awscc_timestream_influx_db_backup}
*/
export class CcInfluxDbBackup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_timestream_influx_db_backup";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInfluxDbBackup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInfluxDbBackup to import
    * @param importFromId The id of the existing CcInfluxDbBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInfluxDbBackup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_timestream_influx_db_backup", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup awscc_timestream_influx_db_backup} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInfluxDbBackupProps
    */
    public constructor(scope: Construct, id: string, config: CcInfluxDbBackupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_timestream_influx_db_backup',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._dbResourceId = config.dbResourceId;
        this._name = config.name;
        this._retentionDays = config.retentionDays;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocated_storage - computed: true, optional: false, required: false
    public get allocatedStorage() {
        return this.getNumberAttribute('allocated_storage');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // cluster_configuration - computed: true, optional: false, required: false
    private _clusterConfiguration = new CcInfluxDbBackup.ClusterConfigurationPropertyOutputReference(this, "cluster_configuration");
    public get clusterConfiguration() {
        return this._clusterConfiguration;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // db_instance_type - computed: true, optional: false, required: false
    public get dbInstanceType() {
        return this.getStringAttribute('db_instance_type');
    }

    // db_parameter_group_id - computed: true, optional: false, required: false
    public get dbParameterGroupId() {
        return this.getStringAttribute('db_parameter_group_id');
    }

    // db_resource_id - computed: false, optional: false, required: true
    private _dbResourceId?: string; 
    public get dbResourceId() {
        return this.getStringAttribute('db_resource_id');
    }
    public set dbResourceId(value: string) {
        this._dbResourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbResourceIdInput() {
        return this._dbResourceId;
    }

    // db_storage_type - computed: true, optional: false, required: false
    public get dbStorageType() {
        return this.getStringAttribute('db_storage_type');
    }

    // deployment_type - computed: true, optional: false, required: false
    public get deploymentType() {
        return this.getStringAttribute('deployment_type');
    }

    // engine_type - computed: true, optional: false, required: false
    public get engineType() {
        return this.getStringAttribute('engine_type');
    }

    // expires_after - computed: true, optional: false, required: false
    public get expiresAfter() {
        return this.getStringAttribute('expires_after');
    }

    // failover_mode - computed: true, optional: false, required: false
    public get failoverMode() {
        return this.getStringAttribute('failover_mode');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // influx_auth_parameters_secret_arn - computed: true, optional: false, required: false
    public get influxAuthParametersSecretArn() {
        return this.getStringAttribute('influx_auth_parameters_secret_arn');
    }

    // influx_db_backup_id - computed: true, optional: false, required: false
    public get influxDbBackupId() {
        return this.getStringAttribute('influx_db_backup_id');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }

    // log_delivery_configuration - computed: true, optional: false, required: false
    private _logDeliveryConfiguration = new CcInfluxDbBackup.LogDeliveryConfigurationPropertyOutputReference(this, "log_delivery_configuration");
    public get logDeliveryConfiguration() {
        return this._logDeliveryConfiguration;
    }

    // maintenance_schedule - computed: true, optional: false, required: false
    private _maintenanceSchedule = new CcInfluxDbBackup.MaintenanceSchedulePropertyOutputReference(this, "maintenance_schedule");
    public get maintenanceSchedule() {
        return this._maintenanceSchedule;
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

    // network_type - computed: true, optional: false, required: false
    public get networkType() {
        return this.getStringAttribute('network_type');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getNumberAttribute('port');
    }

    // publicly_accessible - computed: true, optional: false, required: false
    public get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }

    // retention_days - computed: true, optional: true, required: false
    private _retentionDays?: number; 
    public get retentionDays() {
        return this.getNumberAttribute('retention_days');
    }
    public set retentionDays(value: number) {
        this._retentionDays = value;
    }
    public resetRetentionDays() {
        this._retentionDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionDaysInput() {
        return this._retentionDays;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcInfluxDbBackup.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcInfluxDbBackup.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // vpc_security_group_ids - computed: true, optional: false, required: false
    public get vpcSecurityGroupIds() {
        return this.getListAttribute('vpc_security_group_ids');
    }

    // vpc_subnet_ids - computed: true, optional: false, required: false
    public get vpcSubnetIds() {
        return this.getListAttribute('vpc_subnet_ids');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            db_resource_id: cdktn.stringToTerraform(this._dbResourceId),
            name: cdktn.stringToTerraform(this._name),
            retention_days: cdktn.numberToTerraform(this._retentionDays),
            tags: cdktn.listMapper(ccInfluxDbBackupTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            db_resource_id: {
                value: cdktn.stringToHclTerraform(this._dbResourceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retention_days: {
                value: cdktn.numberToHclTerraform(this._retentionDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccInfluxDbBackupTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcInfluxDbBackup.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInfluxDbBackupClusterConfigurationPropertyToTerraform(struct?: CcInfluxDbBackup.ClusterConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccInfluxDbBackupClusterConfigurationPropertyToHclTerraform(struct?: CcInfluxDbBackup.ClusterConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccInfluxDbBackupS3ConfigurationPropertyToTerraform(struct?: CcInfluxDbBackup.S3ConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccInfluxDbBackupS3ConfigurationPropertyToHclTerraform(struct?: CcInfluxDbBackup.S3ConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccInfluxDbBackupLogDeliveryConfigurationPropertyToTerraform(struct?: CcInfluxDbBackup.LogDeliveryConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccInfluxDbBackupLogDeliveryConfigurationPropertyToHclTerraform(struct?: CcInfluxDbBackup.LogDeliveryConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccInfluxDbBackupMaintenanceSchedulePropertyToTerraform(struct?: CcInfluxDbBackup.MaintenanceScheduleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccInfluxDbBackupMaintenanceSchedulePropertyToHclTerraform(struct?: CcInfluxDbBackup.MaintenanceScheduleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccInfluxDbBackupTagsPropertyToTerraform(struct?: CcInfluxDbBackup.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInfluxDbBackupTagsPropertyToHclTerraform(struct?: CcInfluxDbBackup.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcInfluxDbBackup {
export interface ClusterConfigurationProperty {
}
export class ClusterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterConfigurationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterConfigurationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // dedicated_compactor - computed: true, optional: false, required: false
    public get dedicatedCompactor() {
        return this.getBooleanAttribute('dedicated_compactor');
    }

    // ingest_query_instances - computed: true, optional: false, required: false
    public get ingestQueryInstances() {
        return this.getNumberAttribute('ingest_query_instances');
    }

    // query_only_instances - computed: true, optional: false, required: false
    public get queryOnlyInstances() {
        return this.getNumberAttribute('query_only_instances');
    }
}
export interface S3ConfigurationProperty {
}
export class S3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ConfigurationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ConfigurationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // bucket_name - computed: true, optional: false, required: false
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
export interface LogDeliveryConfigurationProperty {
}
export class LogDeliveryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogDeliveryConfigurationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogDeliveryConfigurationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // s3_configuration - computed: true, optional: false, required: false
    private _s3Configuration = new S3ConfigurationPropertyOutputReference(this, "s3_configuration");
    public get s3Configuration() {
        return this._s3Configuration;
    }
}
export interface MaintenanceScheduleProperty {
}
export class MaintenanceSchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaintenanceScheduleProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MaintenanceScheduleProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // preferred_maintenance_window - computed: true, optional: false, required: false
    public get preferredMaintenanceWindow() {
        return this.getStringAttribute('preferred_maintenance_window');
    }

    // timezone - computed: true, optional: false, required: false
    public get timezone() {
        return this.getStringAttribute('timezone');
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#key CcInfluxDbBackup#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#value CcInfluxDbBackup#value}
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
}
