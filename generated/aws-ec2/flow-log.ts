// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFlowLogProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#deliver_cross_account_role CcFlowLog#deliver_cross_account_role}
    */
    readonly deliverCrossAccountRole?: string;
    /**
    * The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#deliver_logs_permission_arn CcFlowLog#deliver_logs_permission_arn}
    */
    readonly deliverLogsPermissionArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#destination_options CcFlowLog#destination_options}
    */
    readonly destinationOptions?: CcFlowLog.DestinationOptionsProperty;
    /**
    * Specifies the destination to which the flow log data is to be published. Flow log data can be published to a CloudWatch Logs log group, an Amazon S3 bucket, or a Kinesis Firehose stream. The value specified for this parameter depends on the value specified for LogDestinationType.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#log_destination CcFlowLog#log_destination}
    */
    readonly logDestination?: string;
    /**
    * Specifies the type of destination to which the flow log data is to be published. Flow log data can be published to CloudWatch Logs or Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#log_destination_type CcFlowLog#log_destination_type}
    */
    readonly logDestinationType?: string;
    /**
    * The fields to include in the flow log record, in the order in which they should appear.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#log_format CcFlowLog#log_format}
    */
    readonly logFormat?: string;
    /**
    * The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#log_group_name CcFlowLog#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#max_aggregation_interval CcFlowLog#max_aggregation_interval}
    */
    readonly maxAggregationInterval?: number;
    /**
    * The ID of the subnet, network interface, or VPC for which you want to create a flow log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#resource_id CcFlowLog#resource_id}
    */
    readonly resourceId: string;
    /**
    * The type of resource for which to create the flow log. For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#resource_type CcFlowLog#resource_type}
    */
    readonly resourceType: string;
    /**
    * The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#tag_field_specifications CcFlowLog#tag_field_specifications}
    */
    readonly tagFieldSpecifications?: CcFlowLog.TagFieldSpecificationProperty[] | cdktn.IResolvable;
    /**
    * The tags to apply to the flow logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#tags CcFlowLog#tags}
    */
    readonly tags?: CcFlowLog.TagProperty[] | cdktn.IResolvable;
    /**
    * The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#traffic_type CcFlowLog#traffic_type}
    */
    readonly trafficType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log awscc_ec2_flow_log}
*/
export class CcFlowLog extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_flow_log";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFlowLog resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFlowLog to import
    * @param importFromId The id of the existing CcFlowLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFlowLog to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_flow_log", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log awscc_ec2_flow_log} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFlowLogProps
    */
    public constructor(scope: Construct, id: string, config: CcFlowLogProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_flow_log',
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
        this._deliverCrossAccountRole = config.deliverCrossAccountRole;
        this._deliverLogsPermissionArn = config.deliverLogsPermissionArn;
        this._destinationOptions.internalValue = config.destinationOptions;
        this._logDestination = config.logDestination;
        this._logDestinationType = config.logDestinationType;
        this._logFormat = config.logFormat;
        this._logGroupName = config.logGroupName;
        this._maxAggregationInterval = config.maxAggregationInterval;
        this._resourceId = config.resourceId;
        this._resourceType = config.resourceType;
        this._tagFieldSpecifications.internalValue = config.tagFieldSpecifications;
        this._tags.internalValue = config.tags;
        this._trafficType = config.trafficType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // deliver_cross_account_role - computed: true, optional: true, required: false
    private _deliverCrossAccountRole?: string; 
    public get deliverCrossAccountRole() {
        return this.getStringAttribute('deliver_cross_account_role');
    }
    public set deliverCrossAccountRole(value: string) {
        this._deliverCrossAccountRole = value;
    }
    public resetDeliverCrossAccountRole() {
        this._deliverCrossAccountRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliverCrossAccountRoleInput() {
        return this._deliverCrossAccountRole;
    }

    // deliver_logs_permission_arn - computed: true, optional: true, required: false
    private _deliverLogsPermissionArn?: string; 
    public get deliverLogsPermissionArn() {
        return this.getStringAttribute('deliver_logs_permission_arn');
    }
    public set deliverLogsPermissionArn(value: string) {
        this._deliverLogsPermissionArn = value;
    }
    public resetDeliverLogsPermissionArn() {
        this._deliverLogsPermissionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliverLogsPermissionArnInput() {
        return this._deliverLogsPermissionArn;
    }

    // destination_options - computed: true, optional: true, required: false
    private _destinationOptions = new CcFlowLog.DestinationOptionsPropertyOutputReference(this, "destination_options");
    public get destinationOptions() {
        return this._destinationOptions;
    }
    public putDestinationOptions(value: CcFlowLog.DestinationOptionsProperty) {
        this._destinationOptions.internalValue = value;
    }
    public resetDestinationOptions() {
        this._destinationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationOptionsInput() {
        return this._destinationOptions.internalValue;
    }

    // flow_log_id - computed: true, optional: false, required: false
    public get flowLogId() {
        return this.getStringAttribute('flow_log_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // log_destination_type - computed: true, optional: true, required: false
    private _logDestinationType?: string; 
    public get logDestinationType() {
        return this.getStringAttribute('log_destination_type');
    }
    public set logDestinationType(value: string) {
        this._logDestinationType = value;
    }
    public resetLogDestinationType() {
        this._logDestinationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDestinationTypeInput() {
        return this._logDestinationType;
    }

    // log_format - computed: true, optional: true, required: false
    private _logFormat?: string; 
    public get logFormat() {
        return this.getStringAttribute('log_format');
    }
    public set logFormat(value: string) {
        this._logFormat = value;
    }
    public resetLogFormat() {
        this._logFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logFormatInput() {
        return this._logFormat;
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // max_aggregation_interval - computed: true, optional: true, required: false
    private _maxAggregationInterval?: number; 
    public get maxAggregationInterval() {
        return this.getNumberAttribute('max_aggregation_interval');
    }
    public set maxAggregationInterval(value: number) {
        this._maxAggregationInterval = value;
    }
    public resetMaxAggregationInterval() {
        this._maxAggregationInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAggregationIntervalInput() {
        return this._maxAggregationInterval;
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // resource_type - computed: false, optional: false, required: true
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // tag_field_specifications - computed: true, optional: true, required: false
    private _tagFieldSpecifications = new CcFlowLog.TagFieldSpecificationPropertyList(this, "tag_field_specifications", false);
    public get tagFieldSpecifications() {
        return this._tagFieldSpecifications;
    }
    public putTagFieldSpecifications(value: CcFlowLog.TagFieldSpecificationProperty[] | cdktn.IResolvable) {
        this._tagFieldSpecifications.internalValue = value;
    }
    public resetTagFieldSpecifications() {
        this._tagFieldSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagFieldSpecificationsInput() {
        return this._tagFieldSpecifications.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFlowLog.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFlowLog.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // traffic_type - computed: true, optional: true, required: false
    private _trafficType?: string; 
    public get trafficType() {
        return this.getStringAttribute('traffic_type');
    }
    public set trafficType(value: string) {
        this._trafficType = value;
    }
    public resetTrafficType() {
        this._trafficType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficTypeInput() {
        return this._trafficType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            deliver_cross_account_role: cdktn.stringToTerraform(this._deliverCrossAccountRole),
            deliver_logs_permission_arn: cdktn.stringToTerraform(this._deliverLogsPermissionArn),
            destination_options: ccFlowLogDestinationOptionsPropertyToTerraform(this._destinationOptions.internalValue),
            log_destination: cdktn.stringToTerraform(this._logDestination),
            log_destination_type: cdktn.stringToTerraform(this._logDestinationType),
            log_format: cdktn.stringToTerraform(this._logFormat),
            log_group_name: cdktn.stringToTerraform(this._logGroupName),
            max_aggregation_interval: cdktn.numberToTerraform(this._maxAggregationInterval),
            resource_id: cdktn.stringToTerraform(this._resourceId),
            resource_type: cdktn.stringToTerraform(this._resourceType),
            tag_field_specifications: cdktn.listMapper(ccFlowLogTagFieldSpecificationPropertyToTerraform, false)(this._tagFieldSpecifications.internalValue),
            tags: cdktn.listMapper(ccFlowLogTagPropertyToTerraform, false)(this._tags.internalValue),
            traffic_type: cdktn.stringToTerraform(this._trafficType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            deliver_cross_account_role: {
                value: cdktn.stringToHclTerraform(this._deliverCrossAccountRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deliver_logs_permission_arn: {
                value: cdktn.stringToHclTerraform(this._deliverLogsPermissionArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_options: {
                value: ccFlowLogDestinationOptionsPropertyToHclTerraform(this._destinationOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFlowLog.DestinationOptionsProperty",
            },
            log_destination: {
                value: cdktn.stringToHclTerraform(this._logDestination),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_destination_type: {
                value: cdktn.stringToHclTerraform(this._logDestinationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_format: {
                value: cdktn.stringToHclTerraform(this._logFormat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_group_name: {
                value: cdktn.stringToHclTerraform(this._logGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_aggregation_interval: {
                value: cdktn.numberToHclTerraform(this._maxAggregationInterval),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            resource_id: {
                value: cdktn.stringToHclTerraform(this._resourceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_type: {
                value: cdktn.stringToHclTerraform(this._resourceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tag_field_specifications: {
                value: cdktn.listMapperHcl(ccFlowLogTagFieldSpecificationPropertyToHclTerraform, false)(this._tagFieldSpecifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFlowLog.TagFieldSpecificationPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFlowLogTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFlowLog.TagPropertyList",
            },
            traffic_type: {
                value: cdktn.stringToHclTerraform(this._trafficType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFlowLogDestinationOptionsPropertyToTerraform(struct?: CcFlowLog.DestinationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_format: cdktn.stringToTerraform(struct!.fileFormat),
        hive_compatible_partitions: cdktn.booleanToTerraform(struct!.hiveCompatiblePartitions),
        per_hour_partition: cdktn.booleanToTerraform(struct!.perHourPartition),
    }
}


export function ccFlowLogDestinationOptionsPropertyToHclTerraform(struct?: CcFlowLog.DestinationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_format: {
            value: cdktn.stringToHclTerraform(struct!.fileFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hive_compatible_partitions: {
            value: cdktn.booleanToHclTerraform(struct!.hiveCompatiblePartitions),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        per_hour_partition: {
            value: cdktn.booleanToHclTerraform(struct!.perHourPartition),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowLogTagFieldSpecificationPropertyToTerraform(struct?: CcFlowLog.TagFieldSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        tag_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tagKeys),
    }
}


export function ccFlowLogTagFieldSpecificationPropertyToHclTerraform(struct?: CcFlowLog.TagFieldSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_keys: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tagKeys),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowLogTagPropertyToTerraform(struct?: CcFlowLog.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFlowLogTagPropertyToHclTerraform(struct?: CcFlowLog.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFlowLog {
export interface DestinationOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#file_format CcFlowLog#file_format}
    */
    readonly fileFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#hive_compatible_partitions CcFlowLog#hive_compatible_partitions}
    */
    readonly hiveCompatiblePartitions?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#per_hour_partition CcFlowLog#per_hour_partition}
    */
    readonly perHourPartition?: boolean | cdktn.IResolvable;
}
export class DestinationOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileFormat = this._fileFormat;
        }
        if (this._hiveCompatiblePartitions !== undefined) {
            hasAnyValues = true;
            internalValueResult.hiveCompatiblePartitions = this._hiveCompatiblePartitions;
        }
        if (this._perHourPartition !== undefined) {
            hasAnyValues = true;
            internalValueResult.perHourPartition = this._perHourPartition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileFormat = undefined;
            this._hiveCompatiblePartitions = undefined;
            this._perHourPartition = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileFormat = value.fileFormat;
            this._hiveCompatiblePartitions = value.hiveCompatiblePartitions;
            this._perHourPartition = value.perHourPartition;
        }
    }

    // file_format - computed: true, optional: true, required: false
    private _fileFormat?: string; 
    public get fileFormat() {
        return this.getStringAttribute('file_format');
    }
    public set fileFormat(value: string) {
        this._fileFormat = value;
    }
    public resetFileFormat() {
        this._fileFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileFormatInput() {
        return this._fileFormat;
    }

    // hive_compatible_partitions - computed: true, optional: true, required: false
    private _hiveCompatiblePartitions?: boolean | cdktn.IResolvable; 
    public get hiveCompatiblePartitions() {
        return this.getBooleanAttribute('hive_compatible_partitions');
    }
    public set hiveCompatiblePartitions(value: boolean | cdktn.IResolvable) {
        this._hiveCompatiblePartitions = value;
    }
    public resetHiveCompatiblePartitions() {
        this._hiveCompatiblePartitions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiveCompatiblePartitionsInput() {
        return this._hiveCompatiblePartitions;
    }

    // per_hour_partition - computed: true, optional: true, required: false
    private _perHourPartition?: boolean | cdktn.IResolvable; 
    public get perHourPartition() {
        return this.getBooleanAttribute('per_hour_partition');
    }
    public set perHourPartition(value: boolean | cdktn.IResolvable) {
        this._perHourPartition = value;
    }
    public resetPerHourPartition() {
        this._perHourPartition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perHourPartitionInput() {
        return this._perHourPartition;
    }
}
export interface TagFieldSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#resource_type CcFlowLog#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#tag_keys CcFlowLog#tag_keys}
    */
    readonly tagKeys?: string[];
}
export class TagFieldSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagFieldSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        if (this._tagKeys !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagKeys = this._tagKeys;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagFieldSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceType = undefined;
            this._tagKeys = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceType = value.resourceType;
            this._tagKeys = value.tagKeys;
        }
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

    // tag_keys - computed: true, optional: true, required: false
    private _tagKeys?: string[]; 
    public get tagKeys() {
        return this.getListAttribute('tag_keys');
    }
    public set tagKeys(value: string[]) {
        this._tagKeys = value;
    }
    public resetTagKeys() {
        this._tagKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeysInput() {
        return this._tagKeys;
    }
}

export class TagFieldSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : TagFieldSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): TagFieldSpecificationPropertyOutputReference {
        return new TagFieldSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#key CcFlowLog#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_flow_log#value CcFlowLog#value}
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
