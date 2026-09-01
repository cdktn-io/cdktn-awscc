// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTableProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of attributes that describe the key schema for the table and indexes.
    *  This property is required to create a DDB table.
    *  Update requires: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt). Replacement if you edit an existing AttributeDefinition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#attribute_definitions CcTable#attribute_definitions}
    */
    readonly attributeDefinitions?: CcTable.AttributeDefinitionProperty[] | cdktn.IResolvable;
    /**
    * Specify how you are charged for read and write throughput and how you manage capacity.
    *  Valid values include:
    *   +  ``PAY_PER_REQUEST`` - We recommend using ``PAY_PER_REQUEST`` for most DynamoDB workloads. ``PAY_PER_REQUEST`` sets the billing mode to [On-demand capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html). 
    *   +  ``PROVISIONED`` - We recommend using ``PROVISIONED`` for steady workloads with predictable growth where capacity requirements can be reliably forecasted. ``PROVISIONED`` sets the billing mode to [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html).
    *   
    *  If not specified, the default is ``PROVISIONED``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#billing_mode CcTable#billing_mode}
    */
    readonly billingMode?: string;
    /**
    * The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#contributor_insights_specification CcTable#contributor_insights_specification}
    */
    readonly contributorInsightsSpecification?: CcTable.ContributorInsightsSpecificationProperty;
    /**
    * Determines if a table is protected from deletion. When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#deletion_protection_enabled CcTable#deletion_protection_enabled}
    */
    readonly deletionProtectionEnabled?: boolean | cdktn.IResolvable;
    /**
    * Global secondary indexes to be created on the table. You can create up to 20 global secondary indexes.
    *   If you update a table to include a new global secondary index, CFNlong initiates the index creation and then proceeds with the stack update. CFNlong doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is ``ACTIVE``. You can track its status by using the DynamoDB [DescribeTable](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html) command.
    *  If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index. 
    *  Updates are not supported. The following are exceptions:
    *   +  If you update either the contributor insights specification or the provisioned throughput values of global secondary indexes, you can update the table without interruption.
    *   +  You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#global_secondary_indexes CcTable#global_secondary_indexes}
    */
    readonly globalSecondaryIndexes?: CcTable.GlobalSecondaryIndexProperty[] | cdktn.IResolvable;
    /**
    * Specifies the properties of data being imported from the S3 bucket source to the" table.
    *   If you specify the ``ImportSourceSpecification`` property, and also specify either the ``StreamSpecification``, the ``TableClass`` property, the ``DeletionProtectionEnabled`` property, or the ``WarmThroughput`` property, the IAM entity creating/updating stack must have ``UpdateTable`` permission.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#import_source_specification CcTable#import_source_specification}
    */
    readonly importSourceSpecification?: CcTable.ImportSourceSpecificationProperty;
    /**
    * Specifies the attributes that make up the primary key for the table. The attributes in the ``KeySchema`` property must also be defined in the ``AttributeDefinitions`` property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#key_schema CcTable#key_schema}
    */
    readonly keySchema: string;
    /**
    * The Kinesis Data Streams configuration for the specified table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#kinesis_stream_specification CcTable#kinesis_stream_specification}
    */
    readonly kinesisStreamSpecification?: CcTable.KinesisStreamSpecificationProperty;
    /**
    * Local secondary indexes to be created on the table. You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#local_secondary_indexes CcTable#local_secondary_indexes}
    */
    readonly localSecondaryIndexes?: CcTable.LocalSecondaryIndexProperty[] | cdktn.IResolvable;
    /**
    * Sets the maximum number of read and write units for the specified on-demand table. If you use this property, you must specify ``MaxReadRequestUnits``, ``MaxWriteRequestUnits``, or both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#on_demand_throughput CcTable#on_demand_throughput}
    */
    readonly onDemandThroughput?: CcTable.OnDemandThroughputProperty;
    /**
    * The settings used to enable point in time recovery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#point_in_time_recovery_specification CcTable#point_in_time_recovery_specification}
    */
    readonly pointInTimeRecoverySpecification?: CcTable.PointInTimeRecoverySpecificationProperty;
    /**
    * Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``. For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html). 
    *  If you set ``BillingMode`` as ``PROVISIONED``, you must specify this property. If you set ``BillingMode`` as ``PAY_PER_REQUEST``, you cannot specify this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#provisioned_throughput CcTable#provisioned_throughput}
    */
    readonly provisionedThroughput?: CcTable.ProvisionedThroughputProperty;
    /**
    * An AWS resource-based policy document in JSON format that will be attached to the table.
    *  When you attach a resource-based policy while creating a table, the policy application is *strongly consistent*.
    *  The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit. For a full list of all considerations that apply for resource-based policies, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
    *   You need to specify the ``CreateTable`` and ``PutResourcePolicy`` IAM actions for authorizing a user to create a table with a resource-based policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#resource_policy CcTable#resource_policy}
    */
    readonly resourcePolicy?: CcTable.ResourcePolicyProperty;
    /**
    * Specifies the settings to enable server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#sse_specification CcTable#sse_specification}
    */
    readonly sseSpecification?: CcTable.SSESpecificationProperty;
    /**
    * The settings for the DDB table stream, which captures changes to items stored in the table. Including this property in your CFNlong template automatically enables streaming.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#stream_specification CcTable#stream_specification}
    */
    readonly streamSpecification?: CcTable.StreamSpecificationProperty;
    /**
    * The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#table_class CcTable#table_class}
    */
    readonly tableClass?: string;
    /**
    * A name for the table. If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
    *   If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#table_name CcTable#table_name}
    */
    readonly tableName?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#tags CcTable#tags}
    */
    readonly tags?: CcTable.TagsProperty[] | cdktn.IResolvable;
    /**
    * Specifies the Time to Live (TTL) settings for the table.
    *   For detailed information about the limits in DynamoDB, see [Limits in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#time_to_live_specification CcTable#time_to_live_specification}
    */
    readonly timeToLiveSpecification?: CcTable.TimeToLiveSpecificationProperty;
    /**
    * Represents the warm throughput (in read units per second and write units per second) for creating a table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#warm_throughput CcTable#warm_throughput}
    */
    readonly warmThroughput?: CcTable.WarmThroughputProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table awscc_dynamodb_table}
*/
export class CcTable extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dynamodb_table";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTable resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTable to import
    * @param importFromId The id of the existing CcTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTable to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dynamodb_table", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table awscc_dynamodb_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTableProps
    */
    public constructor(scope: Construct, id: string, config: CcTableProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_dynamodb_table',
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
        this._attributeDefinitions.internalValue = config.attributeDefinitions;
        this._billingMode = config.billingMode;
        this._contributorInsightsSpecification.internalValue = config.contributorInsightsSpecification;
        this._deletionProtectionEnabled = config.deletionProtectionEnabled;
        this._globalSecondaryIndexes.internalValue = config.globalSecondaryIndexes;
        this._importSourceSpecification.internalValue = config.importSourceSpecification;
        this._keySchema = config.keySchema;
        this._kinesisStreamSpecification.internalValue = config.kinesisStreamSpecification;
        this._localSecondaryIndexes.internalValue = config.localSecondaryIndexes;
        this._onDemandThroughput.internalValue = config.onDemandThroughput;
        this._pointInTimeRecoverySpecification.internalValue = config.pointInTimeRecoverySpecification;
        this._provisionedThroughput.internalValue = config.provisionedThroughput;
        this._resourcePolicy.internalValue = config.resourcePolicy;
        this._sseSpecification.internalValue = config.sseSpecification;
        this._streamSpecification.internalValue = config.streamSpecification;
        this._tableClass = config.tableClass;
        this._tableName = config.tableName;
        this._tags.internalValue = config.tags;
        this._timeToLiveSpecification.internalValue = config.timeToLiveSpecification;
        this._warmThroughput.internalValue = config.warmThroughput;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // attribute_definitions - computed: true, optional: true, required: false
    private _attributeDefinitions = new CcTable.AttributeDefinitionPropertyList(this, "attribute_definitions", false);
    public get attributeDefinitions() {
        return this._attributeDefinitions;
    }
    public putAttributeDefinitions(value: CcTable.AttributeDefinitionProperty[] | cdktn.IResolvable) {
        this._attributeDefinitions.internalValue = value;
    }
    public resetAttributeDefinitions() {
        this._attributeDefinitions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeDefinitionsInput() {
        return this._attributeDefinitions.internalValue;
    }

    // billing_mode - computed: true, optional: true, required: false
    private _billingMode?: string; 
    public get billingMode() {
        return this.getStringAttribute('billing_mode');
    }
    public set billingMode(value: string) {
        this._billingMode = value;
    }
    public resetBillingMode() {
        this._billingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingModeInput() {
        return this._billingMode;
    }

    // contributor_insights_specification - computed: true, optional: true, required: false
    private _contributorInsightsSpecification = new CcTable.ContributorInsightsSpecificationPropertyOutputReference(this, "contributor_insights_specification");
    public get contributorInsightsSpecification() {
        return this._contributorInsightsSpecification;
    }
    public putContributorInsightsSpecification(value: CcTable.ContributorInsightsSpecificationProperty) {
        this._contributorInsightsSpecification.internalValue = value;
    }
    public resetContributorInsightsSpecification() {
        this._contributorInsightsSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contributorInsightsSpecificationInput() {
        return this._contributorInsightsSpecification.internalValue;
    }

    // deletion_protection_enabled - computed: true, optional: true, required: false
    private _deletionProtectionEnabled?: boolean | cdktn.IResolvable; 
    public get deletionProtectionEnabled() {
        return this.getBooleanAttribute('deletion_protection_enabled');
    }
    public set deletionProtectionEnabled(value: boolean | cdktn.IResolvable) {
        this._deletionProtectionEnabled = value;
    }
    public resetDeletionProtectionEnabled() {
        this._deletionProtectionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionEnabledInput() {
        return this._deletionProtectionEnabled;
    }

    // global_secondary_indexes - computed: true, optional: true, required: false
    private _globalSecondaryIndexes = new CcTable.GlobalSecondaryIndexPropertyList(this, "global_secondary_indexes", false);
    public get globalSecondaryIndexes() {
        return this._globalSecondaryIndexes;
    }
    public putGlobalSecondaryIndexes(value: CcTable.GlobalSecondaryIndexProperty[] | cdktn.IResolvable) {
        this._globalSecondaryIndexes.internalValue = value;
    }
    public resetGlobalSecondaryIndexes() {
        this._globalSecondaryIndexes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalSecondaryIndexesInput() {
        return this._globalSecondaryIndexes.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // import_source_specification - computed: true, optional: true, required: false
    private _importSourceSpecification = new CcTable.ImportSourceSpecificationPropertyOutputReference(this, "import_source_specification");
    public get importSourceSpecification() {
        return this._importSourceSpecification;
    }
    public putImportSourceSpecification(value: CcTable.ImportSourceSpecificationProperty) {
        this._importSourceSpecification.internalValue = value;
    }
    public resetImportSourceSpecification() {
        this._importSourceSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get importSourceSpecificationInput() {
        return this._importSourceSpecification.internalValue;
    }

    // key_schema - computed: false, optional: false, required: true
    private _keySchema?: string; 
    public get keySchema() {
        return this.getStringAttribute('key_schema');
    }
    public set keySchema(value: string) {
        this._keySchema = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keySchemaInput() {
        return this._keySchema;
    }

    // kinesis_stream_specification - computed: true, optional: true, required: false
    private _kinesisStreamSpecification = new CcTable.KinesisStreamSpecificationPropertyOutputReference(this, "kinesis_stream_specification");
    public get kinesisStreamSpecification() {
        return this._kinesisStreamSpecification;
    }
    public putKinesisStreamSpecification(value: CcTable.KinesisStreamSpecificationProperty) {
        this._kinesisStreamSpecification.internalValue = value;
    }
    public resetKinesisStreamSpecification() {
        this._kinesisStreamSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisStreamSpecificationInput() {
        return this._kinesisStreamSpecification.internalValue;
    }

    // local_secondary_indexes - computed: true, optional: true, required: false
    private _localSecondaryIndexes = new CcTable.LocalSecondaryIndexPropertyList(this, "local_secondary_indexes", false);
    public get localSecondaryIndexes() {
        return this._localSecondaryIndexes;
    }
    public putLocalSecondaryIndexes(value: CcTable.LocalSecondaryIndexProperty[] | cdktn.IResolvable) {
        this._localSecondaryIndexes.internalValue = value;
    }
    public resetLocalSecondaryIndexes() {
        this._localSecondaryIndexes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localSecondaryIndexesInput() {
        return this._localSecondaryIndexes.internalValue;
    }

    // on_demand_throughput - computed: true, optional: true, required: false
    private _onDemandThroughput = new CcTable.OnDemandThroughputPropertyOutputReference(this, "on_demand_throughput");
    public get onDemandThroughput() {
        return this._onDemandThroughput;
    }
    public putOnDemandThroughput(value: CcTable.OnDemandThroughputProperty) {
        this._onDemandThroughput.internalValue = value;
    }
    public resetOnDemandThroughput() {
        this._onDemandThroughput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandThroughputInput() {
        return this._onDemandThroughput.internalValue;
    }

    // point_in_time_recovery_specification - computed: true, optional: true, required: false
    private _pointInTimeRecoverySpecification = new CcTable.PointInTimeRecoverySpecificationPropertyOutputReference(this, "point_in_time_recovery_specification");
    public get pointInTimeRecoverySpecification() {
        return this._pointInTimeRecoverySpecification;
    }
    public putPointInTimeRecoverySpecification(value: CcTable.PointInTimeRecoverySpecificationProperty) {
        this._pointInTimeRecoverySpecification.internalValue = value;
    }
    public resetPointInTimeRecoverySpecification() {
        this._pointInTimeRecoverySpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pointInTimeRecoverySpecificationInput() {
        return this._pointInTimeRecoverySpecification.internalValue;
    }

    // provisioned_throughput - computed: true, optional: true, required: false
    private _provisionedThroughput = new CcTable.ProvisionedThroughputPropertyOutputReference(this, "provisioned_throughput");
    public get provisionedThroughput() {
        return this._provisionedThroughput;
    }
    public putProvisionedThroughput(value: CcTable.ProvisionedThroughputProperty) {
        this._provisionedThroughput.internalValue = value;
    }
    public resetProvisionedThroughput() {
        this._provisionedThroughput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedThroughputInput() {
        return this._provisionedThroughput.internalValue;
    }

    // resource_policy - computed: true, optional: true, required: false
    private _resourcePolicy = new CcTable.ResourcePolicyPropertyOutputReference(this, "resource_policy");
    public get resourcePolicy() {
        return this._resourcePolicy;
    }
    public putResourcePolicy(value: CcTable.ResourcePolicyProperty) {
        this._resourcePolicy.internalValue = value;
    }
    public resetResourcePolicy() {
        this._resourcePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePolicyInput() {
        return this._resourcePolicy.internalValue;
    }

    // sse_specification - computed: true, optional: true, required: false
    private _sseSpecification = new CcTable.SSESpecificationPropertyOutputReference(this, "sse_specification");
    public get sseSpecification() {
        return this._sseSpecification;
    }
    public putSseSpecification(value: CcTable.SSESpecificationProperty) {
        this._sseSpecification.internalValue = value;
    }
    public resetSseSpecification() {
        this._sseSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseSpecificationInput() {
        return this._sseSpecification.internalValue;
    }

    // stream_arn - computed: true, optional: false, required: false
    public get streamArn() {
        return this.getStringAttribute('stream_arn');
    }

    // stream_specification - computed: true, optional: true, required: false
    private _streamSpecification = new CcTable.StreamSpecificationPropertyOutputReference(this, "stream_specification");
    public get streamSpecification() {
        return this._streamSpecification;
    }
    public putStreamSpecification(value: CcTable.StreamSpecificationProperty) {
        this._streamSpecification.internalValue = value;
    }
    public resetStreamSpecification() {
        this._streamSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamSpecificationInput() {
        return this._streamSpecification.internalValue;
    }

    // table_class - computed: true, optional: true, required: false
    private _tableClass?: string; 
    public get tableClass() {
        return this.getStringAttribute('table_class');
    }
    public set tableClass(value: string) {
        this._tableClass = value;
    }
    public resetTableClass() {
        this._tableClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableClassInput() {
        return this._tableClass;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTable.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTable.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // time_to_live_specification - computed: true, optional: true, required: false
    private _timeToLiveSpecification = new CcTable.TimeToLiveSpecificationPropertyOutputReference(this, "time_to_live_specification");
    public get timeToLiveSpecification() {
        return this._timeToLiveSpecification;
    }
    public putTimeToLiveSpecification(value: CcTable.TimeToLiveSpecificationProperty) {
        this._timeToLiveSpecification.internalValue = value;
    }
    public resetTimeToLiveSpecification() {
        this._timeToLiveSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeToLiveSpecificationInput() {
        return this._timeToLiveSpecification.internalValue;
    }

    // warm_throughput - computed: true, optional: true, required: false
    private _warmThroughput = new CcTable.WarmThroughputPropertyOutputReference(this, "warm_throughput");
    public get warmThroughput() {
        return this._warmThroughput;
    }
    public putWarmThroughput(value: CcTable.WarmThroughputProperty) {
        this._warmThroughput.internalValue = value;
    }
    public resetWarmThroughput() {
        this._warmThroughput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmThroughputInput() {
        return this._warmThroughput.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            attribute_definitions: cdktn.listMapper(ccTableAttributeDefinitionPropertyToTerraform, false)(this._attributeDefinitions.internalValue),
            billing_mode: cdktn.stringToTerraform(this._billingMode),
            contributor_insights_specification: ccTableContributorInsightsSpecificationPropertyToTerraform(this._contributorInsightsSpecification.internalValue),
            deletion_protection_enabled: cdktn.booleanToTerraform(this._deletionProtectionEnabled),
            global_secondary_indexes: cdktn.listMapper(ccTableGlobalSecondaryIndexPropertyToTerraform, false)(this._globalSecondaryIndexes.internalValue),
            import_source_specification: ccTableImportSourceSpecificationPropertyToTerraform(this._importSourceSpecification.internalValue),
            key_schema: cdktn.stringToTerraform(this._keySchema),
            kinesis_stream_specification: ccTableKinesisStreamSpecificationPropertyToTerraform(this._kinesisStreamSpecification.internalValue),
            local_secondary_indexes: cdktn.listMapper(ccTableLocalSecondaryIndexPropertyToTerraform, false)(this._localSecondaryIndexes.internalValue),
            on_demand_throughput: ccTableOnDemandThroughputPropertyToTerraform(this._onDemandThroughput.internalValue),
            point_in_time_recovery_specification: ccTablePointInTimeRecoverySpecificationPropertyToTerraform(this._pointInTimeRecoverySpecification.internalValue),
            provisioned_throughput: ccTableProvisionedThroughputPropertyToTerraform(this._provisionedThroughput.internalValue),
            resource_policy: ccTableResourcePolicyPropertyToTerraform(this._resourcePolicy.internalValue),
            sse_specification: ccTableSSESpecificationPropertyToTerraform(this._sseSpecification.internalValue),
            stream_specification: ccTableStreamSpecificationPropertyToTerraform(this._streamSpecification.internalValue),
            table_class: cdktn.stringToTerraform(this._tableClass),
            table_name: cdktn.stringToTerraform(this._tableName),
            tags: cdktn.listMapper(ccTableTagsPropertyToTerraform, false)(this._tags.internalValue),
            time_to_live_specification: ccTableTimeToLiveSpecificationPropertyToTerraform(this._timeToLiveSpecification.internalValue),
            warm_throughput: ccTableWarmThroughputPropertyToTerraform(this._warmThroughput.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            attribute_definitions: {
                value: cdktn.listMapperHcl(ccTableAttributeDefinitionPropertyToHclTerraform, false)(this._attributeDefinitions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTable.AttributeDefinitionPropertyList",
            },
            billing_mode: {
                value: cdktn.stringToHclTerraform(this._billingMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            contributor_insights_specification: {
                value: ccTableContributorInsightsSpecificationPropertyToHclTerraform(this._contributorInsightsSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.ContributorInsightsSpecificationProperty",
            },
            deletion_protection_enabled: {
                value: cdktn.booleanToHclTerraform(this._deletionProtectionEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            global_secondary_indexes: {
                value: cdktn.listMapperHcl(ccTableGlobalSecondaryIndexPropertyToHclTerraform, false)(this._globalSecondaryIndexes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTable.GlobalSecondaryIndexPropertyList",
            },
            import_source_specification: {
                value: ccTableImportSourceSpecificationPropertyToHclTerraform(this._importSourceSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.ImportSourceSpecificationProperty",
            },
            key_schema: {
                value: cdktn.stringToHclTerraform(this._keySchema),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kinesis_stream_specification: {
                value: ccTableKinesisStreamSpecificationPropertyToHclTerraform(this._kinesisStreamSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.KinesisStreamSpecificationProperty",
            },
            local_secondary_indexes: {
                value: cdktn.listMapperHcl(ccTableLocalSecondaryIndexPropertyToHclTerraform, false)(this._localSecondaryIndexes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTable.LocalSecondaryIndexPropertyList",
            },
            on_demand_throughput: {
                value: ccTableOnDemandThroughputPropertyToHclTerraform(this._onDemandThroughput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.OnDemandThroughputProperty",
            },
            point_in_time_recovery_specification: {
                value: ccTablePointInTimeRecoverySpecificationPropertyToHclTerraform(this._pointInTimeRecoverySpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.PointInTimeRecoverySpecificationProperty",
            },
            provisioned_throughput: {
                value: ccTableProvisionedThroughputPropertyToHclTerraform(this._provisionedThroughput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.ProvisionedThroughputProperty",
            },
            resource_policy: {
                value: ccTableResourcePolicyPropertyToHclTerraform(this._resourcePolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.ResourcePolicyProperty",
            },
            sse_specification: {
                value: ccTableSSESpecificationPropertyToHclTerraform(this._sseSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.SSESpecificationProperty",
            },
            stream_specification: {
                value: ccTableStreamSpecificationPropertyToHclTerraform(this._streamSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.StreamSpecificationProperty",
            },
            table_class: {
                value: cdktn.stringToHclTerraform(this._tableClass),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            table_name: {
                value: cdktn.stringToHclTerraform(this._tableName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTableTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTable.TagsPropertyList",
            },
            time_to_live_specification: {
                value: ccTableTimeToLiveSpecificationPropertyToHclTerraform(this._timeToLiveSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.TimeToLiveSpecificationProperty",
            },
            warm_throughput: {
                value: ccTableWarmThroughputPropertyToHclTerraform(this._warmThroughput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.WarmThroughputProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTableAttributeDefinitionPropertyToTerraform(struct?: CcTable.AttributeDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_name: cdktn.stringToTerraform(struct!.attributeName),
        attribute_type: cdktn.stringToTerraform(struct!.attributeType),
    }
}


export function ccTableAttributeDefinitionPropertyToHclTerraform(struct?: CcTable.AttributeDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute_name: {
            value: cdktn.stringToHclTerraform(struct!.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_type: {
            value: cdktn.stringToHclTerraform(struct!.attributeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableContributorInsightsSpecificationPropertyToTerraform(struct?: CcTable.ContributorInsightsSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccTableContributorInsightsSpecificationPropertyToHclTerraform(struct?: CcTable.ContributorInsightsSpecificationProperty | cdktn.IResolvable): any {
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
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableGlobalSecondaryIndexesContributorInsightsSpecificationPropertyToTerraform(struct?: CcTable.GlobalSecondaryIndexesContributorInsightsSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccTableGlobalSecondaryIndexesContributorInsightsSpecificationPropertyToHclTerraform(struct?: CcTable.GlobalSecondaryIndexesContributorInsightsSpecificationProperty | cdktn.IResolvable): any {
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
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableKeySchemaPropertyToTerraform(struct?: CcTable.KeySchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_name: cdktn.stringToTerraform(struct!.attributeName),
        key_type: cdktn.stringToTerraform(struct!.keyType),
    }
}


export function ccTableKeySchemaPropertyToHclTerraform(struct?: CcTable.KeySchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute_name: {
            value: cdktn.stringToHclTerraform(struct!.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_type: {
            value: cdktn.stringToHclTerraform(struct!.keyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableGlobalSecondaryIndexesOnDemandThroughputPropertyToTerraform(struct?: CcTable.GlobalSecondaryIndexesOnDemandThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_read_request_units: cdktn.numberToTerraform(struct!.maxReadRequestUnits),
        max_write_request_units: cdktn.numberToTerraform(struct!.maxWriteRequestUnits),
    }
}


export function ccTableGlobalSecondaryIndexesOnDemandThroughputPropertyToHclTerraform(struct?: CcTable.GlobalSecondaryIndexesOnDemandThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_read_request_units: {
            value: cdktn.numberToHclTerraform(struct!.maxReadRequestUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_write_request_units: {
            value: cdktn.numberToHclTerraform(struct!.maxWriteRequestUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableProjectionPropertyToTerraform(struct?: CcTable.ProjectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        non_key_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nonKeyAttributes),
        projection_type: cdktn.stringToTerraform(struct!.projectionType),
    }
}


export function ccTableProjectionPropertyToHclTerraform(struct?: CcTable.ProjectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        non_key_attributes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nonKeyAttributes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        projection_type: {
            value: cdktn.stringToHclTerraform(struct!.projectionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableGlobalSecondaryIndexesProvisionedThroughputPropertyToTerraform(struct?: CcTable.GlobalSecondaryIndexesProvisionedThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
        write_capacity_units: cdktn.numberToTerraform(struct!.writeCapacityUnits),
    }
}


export function ccTableGlobalSecondaryIndexesProvisionedThroughputPropertyToHclTerraform(struct?: CcTable.GlobalSecondaryIndexesProvisionedThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        read_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        write_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.writeCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableGlobalSecondaryIndexesWarmThroughputPropertyToTerraform(struct?: CcTable.GlobalSecondaryIndexesWarmThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_units_per_second: cdktn.numberToTerraform(struct!.readUnitsPerSecond),
        write_units_per_second: cdktn.numberToTerraform(struct!.writeUnitsPerSecond),
    }
}


export function ccTableGlobalSecondaryIndexesWarmThroughputPropertyToHclTerraform(struct?: CcTable.GlobalSecondaryIndexesWarmThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        read_units_per_second: {
            value: cdktn.numberToHclTerraform(struct!.readUnitsPerSecond),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        write_units_per_second: {
            value: cdktn.numberToHclTerraform(struct!.writeUnitsPerSecond),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableGlobalSecondaryIndexPropertyToTerraform(struct?: CcTable.GlobalSecondaryIndexProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contributor_insights_specification: ccTableGlobalSecondaryIndexesContributorInsightsSpecificationPropertyToTerraform(struct!.contributorInsightsSpecification),
        index_name: cdktn.stringToTerraform(struct!.indexName),
        key_schema: cdktn.listMapper(ccTableKeySchemaPropertyToTerraform, false)(struct!.keySchema),
        on_demand_throughput: ccTableGlobalSecondaryIndexesOnDemandThroughputPropertyToTerraform(struct!.onDemandThroughput),
        projection: ccTableProjectionPropertyToTerraform(struct!.projection),
        provisioned_throughput: ccTableGlobalSecondaryIndexesProvisionedThroughputPropertyToTerraform(struct!.provisionedThroughput),
        warm_throughput: ccTableGlobalSecondaryIndexesWarmThroughputPropertyToTerraform(struct!.warmThroughput),
    }
}


export function ccTableGlobalSecondaryIndexPropertyToHclTerraform(struct?: CcTable.GlobalSecondaryIndexProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contributor_insights_specification: {
            value: ccTableGlobalSecondaryIndexesContributorInsightsSpecificationPropertyToHclTerraform(struct!.contributorInsightsSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "GlobalSecondaryIndexesContributorInsightsSpecificationProperty",
        },
        index_name: {
            value: cdktn.stringToHclTerraform(struct!.indexName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_schema: {
            value: cdktn.listMapperHcl(ccTableKeySchemaPropertyToHclTerraform, false)(struct!.keySchema),
            isBlock: true,
            type: "list",
            storageClassType: "KeySchemaPropertyList",
        },
        on_demand_throughput: {
            value: ccTableGlobalSecondaryIndexesOnDemandThroughputPropertyToHclTerraform(struct!.onDemandThroughput),
            isBlock: true,
            type: "struct",
            storageClassType: "GlobalSecondaryIndexesOnDemandThroughputProperty",
        },
        projection: {
            value: ccTableProjectionPropertyToHclTerraform(struct!.projection),
            isBlock: true,
            type: "struct",
            storageClassType: "ProjectionProperty",
        },
        provisioned_throughput: {
            value: ccTableGlobalSecondaryIndexesProvisionedThroughputPropertyToHclTerraform(struct!.provisionedThroughput),
            isBlock: true,
            type: "struct",
            storageClassType: "GlobalSecondaryIndexesProvisionedThroughputProperty",
        },
        warm_throughput: {
            value: ccTableGlobalSecondaryIndexesWarmThroughputPropertyToHclTerraform(struct!.warmThroughput),
            isBlock: true,
            type: "struct",
            storageClassType: "GlobalSecondaryIndexesWarmThroughputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableCsvPropertyToTerraform(struct?: CcTable.CsvProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delimiter: cdktn.stringToTerraform(struct!.delimiter),
        header_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.headerList),
    }
}


export function ccTableCsvPropertyToHclTerraform(struct?: CcTable.CsvProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delimiter: {
            value: cdktn.stringToHclTerraform(struct!.delimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.headerList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableInputFormatOptionsPropertyToTerraform(struct?: CcTable.InputFormatOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        csv: ccTableCsvPropertyToTerraform(struct!.csv),
    }
}


export function ccTableInputFormatOptionsPropertyToHclTerraform(struct?: CcTable.InputFormatOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        csv: {
            value: ccTableCsvPropertyToHclTerraform(struct!.csv),
            isBlock: true,
            type: "struct",
            storageClassType: "CsvProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableS3BucketSourcePropertyToTerraform(struct?: CcTable.S3BucketSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_bucket_owner: cdktn.stringToTerraform(struct!.s3BucketOwner),
        s3_key_prefix: cdktn.stringToTerraform(struct!.s3KeyPrefix),
    }
}


export function ccTableS3BucketSourcePropertyToHclTerraform(struct?: CcTable.S3BucketSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_key_prefix: {
            value: cdktn.stringToHclTerraform(struct!.s3KeyPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableImportSourceSpecificationPropertyToTerraform(struct?: CcTable.ImportSourceSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_compression_type: cdktn.stringToTerraform(struct!.inputCompressionType),
        input_format: cdktn.stringToTerraform(struct!.inputFormat),
        input_format_options: ccTableInputFormatOptionsPropertyToTerraform(struct!.inputFormatOptions),
        s3_bucket_source: ccTableS3BucketSourcePropertyToTerraform(struct!.s3BucketSource),
    }
}


export function ccTableImportSourceSpecificationPropertyToHclTerraform(struct?: CcTable.ImportSourceSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_compression_type: {
            value: cdktn.stringToHclTerraform(struct!.inputCompressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_format: {
            value: cdktn.stringToHclTerraform(struct!.inputFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_format_options: {
            value: ccTableInputFormatOptionsPropertyToHclTerraform(struct!.inputFormatOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "InputFormatOptionsProperty",
        },
        s3_bucket_source: {
            value: ccTableS3BucketSourcePropertyToHclTerraform(struct!.s3BucketSource),
            isBlock: true,
            type: "struct",
            storageClassType: "S3BucketSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableKinesisStreamSpecificationPropertyToTerraform(struct?: CcTable.KinesisStreamSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        approximate_creation_date_time_precision: cdktn.stringToTerraform(struct!.approximateCreationDateTimePrecision),
        stream_arn: cdktn.stringToTerraform(struct!.streamArn),
    }
}


export function ccTableKinesisStreamSpecificationPropertyToHclTerraform(struct?: CcTable.KinesisStreamSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        approximate_creation_date_time_precision: {
            value: cdktn.stringToHclTerraform(struct!.approximateCreationDateTimePrecision),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stream_arn: {
            value: cdktn.stringToHclTerraform(struct!.streamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableLocalSecondaryIndexesKeySchemaPropertyToTerraform(struct?: CcTable.LocalSecondaryIndexesKeySchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_name: cdktn.stringToTerraform(struct!.attributeName),
        key_type: cdktn.stringToTerraform(struct!.keyType),
    }
}


export function ccTableLocalSecondaryIndexesKeySchemaPropertyToHclTerraform(struct?: CcTable.LocalSecondaryIndexesKeySchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute_name: {
            value: cdktn.stringToHclTerraform(struct!.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_type: {
            value: cdktn.stringToHclTerraform(struct!.keyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableLocalSecondaryIndexesProjectionPropertyToTerraform(struct?: CcTable.LocalSecondaryIndexesProjectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        non_key_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nonKeyAttributes),
        projection_type: cdktn.stringToTerraform(struct!.projectionType),
    }
}


export function ccTableLocalSecondaryIndexesProjectionPropertyToHclTerraform(struct?: CcTable.LocalSecondaryIndexesProjectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        non_key_attributes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nonKeyAttributes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        projection_type: {
            value: cdktn.stringToHclTerraform(struct!.projectionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableLocalSecondaryIndexPropertyToTerraform(struct?: CcTable.LocalSecondaryIndexProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        index_name: cdktn.stringToTerraform(struct!.indexName),
        key_schema: cdktn.listMapper(ccTableLocalSecondaryIndexesKeySchemaPropertyToTerraform, false)(struct!.keySchema),
        projection: ccTableLocalSecondaryIndexesProjectionPropertyToTerraform(struct!.projection),
    }
}


export function ccTableLocalSecondaryIndexPropertyToHclTerraform(struct?: CcTable.LocalSecondaryIndexProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        index_name: {
            value: cdktn.stringToHclTerraform(struct!.indexName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_schema: {
            value: cdktn.listMapperHcl(ccTableLocalSecondaryIndexesKeySchemaPropertyToHclTerraform, false)(struct!.keySchema),
            isBlock: true,
            type: "list",
            storageClassType: "LocalSecondaryIndexesKeySchemaPropertyList",
        },
        projection: {
            value: ccTableLocalSecondaryIndexesProjectionPropertyToHclTerraform(struct!.projection),
            isBlock: true,
            type: "struct",
            storageClassType: "LocalSecondaryIndexesProjectionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableOnDemandThroughputPropertyToTerraform(struct?: CcTable.OnDemandThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_read_request_units: cdktn.numberToTerraform(struct!.maxReadRequestUnits),
        max_write_request_units: cdktn.numberToTerraform(struct!.maxWriteRequestUnits),
    }
}


export function ccTableOnDemandThroughputPropertyToHclTerraform(struct?: CcTable.OnDemandThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_read_request_units: {
            value: cdktn.numberToHclTerraform(struct!.maxReadRequestUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_write_request_units: {
            value: cdktn.numberToHclTerraform(struct!.maxWriteRequestUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTablePointInTimeRecoverySpecificationPropertyToTerraform(struct?: CcTable.PointInTimeRecoverySpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        point_in_time_recovery_enabled: cdktn.booleanToTerraform(struct!.pointInTimeRecoveryEnabled),
        recovery_period_in_days: cdktn.numberToTerraform(struct!.recoveryPeriodInDays),
    }
}


export function ccTablePointInTimeRecoverySpecificationPropertyToHclTerraform(struct?: CcTable.PointInTimeRecoverySpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        point_in_time_recovery_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.pointInTimeRecoveryEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        recovery_period_in_days: {
            value: cdktn.numberToHclTerraform(struct!.recoveryPeriodInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableProvisionedThroughputPropertyToTerraform(struct?: CcTable.ProvisionedThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
        write_capacity_units: cdktn.numberToTerraform(struct!.writeCapacityUnits),
    }
}


export function ccTableProvisionedThroughputPropertyToHclTerraform(struct?: CcTable.ProvisionedThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        read_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        write_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.writeCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableResourcePolicyPropertyToTerraform(struct?: CcTable.ResourcePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_document: cdktn.stringToTerraform(struct!.policyDocument),
    }
}


export function ccTableResourcePolicyPropertyToHclTerraform(struct?: CcTable.ResourcePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy_document: {
            value: cdktn.stringToHclTerraform(struct!.policyDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableSSESpecificationPropertyToTerraform(struct?: CcTable.SSESpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_master_key_id: cdktn.stringToTerraform(struct!.kmsMasterKeyId),
        sse_enabled: cdktn.booleanToTerraform(struct!.sseEnabled),
        sse_type: cdktn.stringToTerraform(struct!.sseType),
    }
}


export function ccTableSSESpecificationPropertyToHclTerraform(struct?: CcTable.SSESpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_master_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsMasterKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sse_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.sseEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sse_type: {
            value: cdktn.stringToHclTerraform(struct!.sseType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableStreamSpecificationResourcePolicyPropertyToTerraform(struct?: CcTable.StreamSpecificationResourcePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_document: cdktn.stringToTerraform(struct!.policyDocument),
    }
}


export function ccTableStreamSpecificationResourcePolicyPropertyToHclTerraform(struct?: CcTable.StreamSpecificationResourcePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy_document: {
            value: cdktn.stringToHclTerraform(struct!.policyDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableTagPropertyToTerraform(struct?: CcTable.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTableTagPropertyToHclTerraform(struct?: CcTable.TagProperty | cdktn.IResolvable): any {
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


export function ccTableStreamSpecificationPropertyToTerraform(struct?: CcTable.StreamSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_policy: ccTableStreamSpecificationResourcePolicyPropertyToTerraform(struct!.resourcePolicy),
        stream_view_type: cdktn.stringToTerraform(struct!.streamViewType),
        tags: cdktn.listMapper(ccTableTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccTableStreamSpecificationPropertyToHclTerraform(struct?: CcTable.StreamSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_policy: {
            value: ccTableStreamSpecificationResourcePolicyPropertyToHclTerraform(struct!.resourcePolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "StreamSpecificationResourcePolicyProperty",
        },
        stream_view_type: {
            value: cdktn.stringToHclTerraform(struct!.streamViewType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(ccTableTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "set",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableTagsPropertyToTerraform(struct?: CcTable.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTableTagsPropertyToHclTerraform(struct?: CcTable.TagsProperty | cdktn.IResolvable): any {
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


export function ccTableTimeToLiveSpecificationPropertyToTerraform(struct?: CcTable.TimeToLiveSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_name: cdktn.stringToTerraform(struct!.attributeName),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccTableTimeToLiveSpecificationPropertyToHclTerraform(struct?: CcTable.TimeToLiveSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute_name: {
            value: cdktn.stringToHclTerraform(struct!.attributeName),
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


export function ccTableWarmThroughputPropertyToTerraform(struct?: CcTable.WarmThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_units_per_second: cdktn.numberToTerraform(struct!.readUnitsPerSecond),
        write_units_per_second: cdktn.numberToTerraform(struct!.writeUnitsPerSecond),
    }
}


export function ccTableWarmThroughputPropertyToHclTerraform(struct?: CcTable.WarmThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        read_units_per_second: {
            value: cdktn.numberToHclTerraform(struct!.readUnitsPerSecond),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        write_units_per_second: {
            value: cdktn.numberToHclTerraform(struct!.writeUnitsPerSecond),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTable {
export interface AttributeDefinitionProperty {
    /**
    * A name for the attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#attribute_name CcTable#attribute_name}
    */
    readonly attributeName?: string;
    /**
    * The data type for the attribute, where:
    *   +  ``S`` - the attribute is of type String
    *   +  ``N`` - the attribute is of type Number
    *   +  ``B`` - the attribute is of type Binary
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#attribute_type CcTable#attribute_type}
    */
    readonly attributeType?: string;
}
export class AttributeDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AttributeDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeName = this._attributeName;
        }
        if (this._attributeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeType = this._attributeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributeDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeName = undefined;
            this._attributeType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeName = value.attributeName;
            this._attributeType = value.attributeType;
        }
    }

    // attribute_name - computed: true, optional: true, required: false
    private _attributeName?: string; 
    public get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    public set attributeName(value: string) {
        this._attributeName = value;
    }
    public resetAttributeName() {
        this._attributeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeNameInput() {
        return this._attributeName;
    }

    // attribute_type - computed: true, optional: true, required: false
    private _attributeType?: string; 
    public get attributeType() {
        return this.getStringAttribute('attribute_type');
    }
    public set attributeType(value: string) {
        this._attributeType = value;
    }
    public resetAttributeType() {
        this._attributeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeTypeInput() {
        return this._attributeType;
    }
}

export class AttributeDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : AttributeDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): AttributeDefinitionPropertyOutputReference {
        return new AttributeDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ContributorInsightsSpecificationProperty {
    /**
    * Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#enabled CcTable#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Specifies the CloudWatch Contributor Insights mode for a table. Valid values are ``ACCESSED_AND_THROTTLED_KEYS`` (tracks all access and throttled events) or ``THROTTLED_KEYS`` (tracks only throttled events). This setting determines what type of contributor insights data is collected for the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#mode CcTable#mode}
    */
    readonly mode?: string;
}
export class ContributorInsightsSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContributorInsightsSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContributorInsightsSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._mode = value.mode;
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

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }
}
export interface GlobalSecondaryIndexesContributorInsightsSpecificationProperty {
    /**
    * Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#enabled CcTable#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Specifies the CloudWatch Contributor Insights mode for a table. Valid values are ``ACCESSED_AND_THROTTLED_KEYS`` (tracks all access and throttled events) or ``THROTTLED_KEYS`` (tracks only throttled events). This setting determines what type of contributor insights data is collected for the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#mode CcTable#mode}
    */
    readonly mode?: string;
}
export class GlobalSecondaryIndexesContributorInsightsSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlobalSecondaryIndexesContributorInsightsSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlobalSecondaryIndexesContributorInsightsSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._mode = value.mode;
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

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }
}
export interface KeySchemaProperty {
    /**
    * The name of a key attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#attribute_name CcTable#attribute_name}
    */
    readonly attributeName?: string;
    /**
    * The role that this key attribute will assume:
    *   +  ``HASH`` - partition key
    *   +  ``RANGE`` - sort key
    *   
    *   The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
    *  The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#key_type CcTable#key_type}
    */
    readonly keyType?: string;
}
export class KeySchemaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KeySchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeName = this._attributeName;
        }
        if (this._keyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyType = this._keyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeySchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeName = undefined;
            this._keyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeName = value.attributeName;
            this._keyType = value.keyType;
        }
    }

    // attribute_name - computed: true, optional: true, required: false
    private _attributeName?: string; 
    public get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    public set attributeName(value: string) {
        this._attributeName = value;
    }
    public resetAttributeName() {
        this._attributeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeNameInput() {
        return this._attributeName;
    }

    // key_type - computed: true, optional: true, required: false
    private _keyType?: string; 
    public get keyType() {
        return this.getStringAttribute('key_type');
    }
    public set keyType(value: string) {
        this._keyType = value;
    }
    public resetKeyType() {
        this._keyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyTypeInput() {
        return this._keyType;
    }
}

export class KeySchemaPropertyList extends cdktn.ComplexList {
    public internalValue? : KeySchemaProperty[] | cdktn.IResolvable

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
    public get(index: number): KeySchemaPropertyOutputReference {
        return new KeySchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface GlobalSecondaryIndexesOnDemandThroughputProperty {
    /**
    * Maximum number of read request units for the specified table.
    *  To specify a maximum ``OnDemandThroughput`` on your table, set the value of ``MaxReadRequestUnits`` as greater than or equal to 1. To remove the maximum ``OnDemandThroughput`` that is currently set on your table, set the value of ``MaxReadRequestUnits`` to -1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#max_read_request_units CcTable#max_read_request_units}
    */
    readonly maxReadRequestUnits?: number;
    /**
    * Maximum number of write request units for the specified table.
    *  To specify a maximum ``OnDemandThroughput`` on your table, set the value of ``MaxWriteRequestUnits`` as greater than or equal to 1. To remove the maximum ``OnDemandThroughput`` that is currently set on your table, set the value of ``MaxWriteRequestUnits`` to -1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#max_write_request_units CcTable#max_write_request_units}
    */
    readonly maxWriteRequestUnits?: number;
}
export class GlobalSecondaryIndexesOnDemandThroughputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlobalSecondaryIndexesOnDemandThroughputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxReadRequestUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxReadRequestUnits = this._maxReadRequestUnits;
        }
        if (this._maxWriteRequestUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxWriteRequestUnits = this._maxWriteRequestUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlobalSecondaryIndexesOnDemandThroughputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxReadRequestUnits = undefined;
            this._maxWriteRequestUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxReadRequestUnits = value.maxReadRequestUnits;
            this._maxWriteRequestUnits = value.maxWriteRequestUnits;
        }
    }

    // max_read_request_units - computed: true, optional: true, required: false
    private _maxReadRequestUnits?: number; 
    public get maxReadRequestUnits() {
        return this.getNumberAttribute('max_read_request_units');
    }
    public set maxReadRequestUnits(value: number) {
        this._maxReadRequestUnits = value;
    }
    public resetMaxReadRequestUnits() {
        this._maxReadRequestUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxReadRequestUnitsInput() {
        return this._maxReadRequestUnits;
    }

    // max_write_request_units - computed: true, optional: true, required: false
    private _maxWriteRequestUnits?: number; 
    public get maxWriteRequestUnits() {
        return this.getNumberAttribute('max_write_request_units');
    }
    public set maxWriteRequestUnits(value: number) {
        this._maxWriteRequestUnits = value;
    }
    public resetMaxWriteRequestUnits() {
        this._maxWriteRequestUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxWriteRequestUnitsInput() {
        return this._maxWriteRequestUnits;
    }
}
export interface ProjectionProperty {
    /**
    * Represents the non-key attribute names which will be projected into the index.
    *  For global and local secondary indexes, the total count of ``NonKeyAttributes`` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of ``INCLUDE``. You still can specify the ProjectionType of ``ALL`` to project all attributes from the source table, even if the table has more than 100 attributes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#non_key_attributes CcTable#non_key_attributes}
    */
    readonly nonKeyAttributes?: string[];
    /**
    * The set of attributes that are projected into the index:
    *   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.
    *   +  ``INCLUDE`` - In addition to the attributes described in ``KEYS_ONLY``, the secondary index will include other non-key attributes that you specify.
    *   +  ``ALL`` - All of the table attributes are projected into the index.
    *   
    *  When using the DynamoDB console, ``ALL`` is selected by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#projection_type CcTable#projection_type}
    */
    readonly projectionType?: string;
}
export class ProjectionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProjectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._nonKeyAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.nonKeyAttributes = this._nonKeyAttributes;
        }
        if (this._projectionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectionType = this._projectionType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProjectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nonKeyAttributes = undefined;
            this._projectionType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nonKeyAttributes = value.nonKeyAttributes;
            this._projectionType = value.projectionType;
        }
    }

    // non_key_attributes - computed: true, optional: true, required: false
    private _nonKeyAttributes?: string[]; 
    public get nonKeyAttributes() {
        return this.getListAttribute('non_key_attributes');
    }
    public set nonKeyAttributes(value: string[]) {
        this._nonKeyAttributes = value;
    }
    public resetNonKeyAttributes() {
        this._nonKeyAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nonKeyAttributesInput() {
        return this._nonKeyAttributes;
    }

    // projection_type - computed: true, optional: true, required: false
    private _projectionType?: string; 
    public get projectionType() {
        return this.getStringAttribute('projection_type');
    }
    public set projectionType(value: string) {
        this._projectionType = value;
    }
    public resetProjectionType() {
        this._projectionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectionTypeInput() {
        return this._projectionType;
    }
}
export interface GlobalSecondaryIndexesProvisionedThroughputProperty {
    /**
    * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
    *  If read/write capacity mode is ``PAY_PER_REQUEST`` the value is set to 0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#read_capacity_units CcTable#read_capacity_units}
    */
    readonly readCapacityUnits?: number;
    /**
    * The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
    *  If read/write capacity mode is ``PAY_PER_REQUEST`` the value is set to 0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#write_capacity_units CcTable#write_capacity_units}
    */
    readonly writeCapacityUnits?: number;
}
export class GlobalSecondaryIndexesProvisionedThroughputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlobalSecondaryIndexesProvisionedThroughputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.readCapacityUnits = this._readCapacityUnits;
        }
        if (this._writeCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeCapacityUnits = this._writeCapacityUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlobalSecondaryIndexesProvisionedThroughputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readCapacityUnits = undefined;
            this._writeCapacityUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readCapacityUnits = value.readCapacityUnits;
            this._writeCapacityUnits = value.writeCapacityUnits;
        }
    }

    // read_capacity_units - computed: true, optional: true, required: false
    private _readCapacityUnits?: number; 
    public get readCapacityUnits() {
        return this.getNumberAttribute('read_capacity_units');
    }
    public set readCapacityUnits(value: number) {
        this._readCapacityUnits = value;
    }
    public resetReadCapacityUnits() {
        this._readCapacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readCapacityUnitsInput() {
        return this._readCapacityUnits;
    }

    // write_capacity_units - computed: true, optional: true, required: false
    private _writeCapacityUnits?: number; 
    public get writeCapacityUnits() {
        return this.getNumberAttribute('write_capacity_units');
    }
    public set writeCapacityUnits(value: number) {
        this._writeCapacityUnits = value;
    }
    public resetWriteCapacityUnits() {
        this._writeCapacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeCapacityUnitsInput() {
        return this._writeCapacityUnits;
    }
}
export interface GlobalSecondaryIndexesWarmThroughputProperty {
    /**
    * Represents the number of read operations your base table can instantaneously support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#read_units_per_second CcTable#read_units_per_second}
    */
    readonly readUnitsPerSecond?: number;
    /**
    * Represents the number of write operations your base table can instantaneously support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#write_units_per_second CcTable#write_units_per_second}
    */
    readonly writeUnitsPerSecond?: number;
}
export class GlobalSecondaryIndexesWarmThroughputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlobalSecondaryIndexesWarmThroughputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readUnitsPerSecond !== undefined) {
            hasAnyValues = true;
            internalValueResult.readUnitsPerSecond = this._readUnitsPerSecond;
        }
        if (this._writeUnitsPerSecond !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeUnitsPerSecond = this._writeUnitsPerSecond;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlobalSecondaryIndexesWarmThroughputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readUnitsPerSecond = undefined;
            this._writeUnitsPerSecond = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readUnitsPerSecond = value.readUnitsPerSecond;
            this._writeUnitsPerSecond = value.writeUnitsPerSecond;
        }
    }

    // read_units_per_second - computed: true, optional: true, required: false
    private _readUnitsPerSecond?: number; 
    public get readUnitsPerSecond() {
        return this.getNumberAttribute('read_units_per_second');
    }
    public set readUnitsPerSecond(value: number) {
        this._readUnitsPerSecond = value;
    }
    public resetReadUnitsPerSecond() {
        this._readUnitsPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readUnitsPerSecondInput() {
        return this._readUnitsPerSecond;
    }

    // write_units_per_second - computed: true, optional: true, required: false
    private _writeUnitsPerSecond?: number; 
    public get writeUnitsPerSecond() {
        return this.getNumberAttribute('write_units_per_second');
    }
    public set writeUnitsPerSecond(value: number) {
        this._writeUnitsPerSecond = value;
    }
    public resetWriteUnitsPerSecond() {
        this._writeUnitsPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeUnitsPerSecondInput() {
        return this._writeUnitsPerSecond;
    }
}
export interface GlobalSecondaryIndexProperty {
    /**
    * The settings used to specify whether to enable CloudWatch Contributor Insights for the global table and define which events to monitor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#contributor_insights_specification CcTable#contributor_insights_specification}
    */
    readonly contributorInsightsSpecification?: GlobalSecondaryIndexesContributorInsightsSpecificationProperty;
    /**
    * The name of the global secondary index. The name must be unique among all other indexes on this table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#index_name CcTable#index_name}
    */
    readonly indexName?: string;
    /**
    * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:
    *   +  ``HASH`` - partition key
    *   +  ``RANGE`` - sort key
    *   
    *   The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
    *  The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#key_schema CcTable#key_schema}
    */
    readonly keySchema?: KeySchemaProperty[] | cdktn.IResolvable;
    /**
    * The maximum number of read and write units for the specified global secondary index. If you use this parameter, you must specify ``MaxReadRequestUnits``, ``MaxWriteRequestUnits``, or both. You must use either ``OnDemandThroughput`` or ``ProvisionedThroughput`` based on your table's capacity mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#on_demand_throughput CcTable#on_demand_throughput}
    */
    readonly onDemandThroughput?: GlobalSecondaryIndexesOnDemandThroughputProperty;
    /**
    * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#projection CcTable#projection}
    */
    readonly projection?: ProjectionProperty;
    /**
    * Represents the provisioned throughput settings for the specified global secondary index. You must use either ``OnDemandThroughput`` or ``ProvisionedThroughput`` based on your table's capacity mode.
    *  For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#provisioned_throughput CcTable#provisioned_throughput}
    */
    readonly provisionedThroughput?: GlobalSecondaryIndexesProvisionedThroughputProperty;
    /**
    * Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index. If you use this parameter, you must specify ``ReadUnitsPerSecond``, ``WriteUnitsPerSecond``, or both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#warm_throughput CcTable#warm_throughput}
    */
    readonly warmThroughput?: GlobalSecondaryIndexesWarmThroughputProperty;
}
export class GlobalSecondaryIndexPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GlobalSecondaryIndexProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contributorInsightsSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contributorInsightsSpecification = this._contributorInsightsSpecification?.internalValue;
        }
        if (this._indexName !== undefined) {
            hasAnyValues = true;
            internalValueResult.indexName = this._indexName;
        }
        if (this._keySchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keySchema = this._keySchema?.internalValue;
        }
        if (this._onDemandThroughput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandThroughput = this._onDemandThroughput?.internalValue;
        }
        if (this._projection?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.projection = this._projection?.internalValue;
        }
        if (this._provisionedThroughput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedThroughput = this._provisionedThroughput?.internalValue;
        }
        if (this._warmThroughput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.warmThroughput = this._warmThroughput?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlobalSecondaryIndexProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contributorInsightsSpecification.internalValue = undefined;
            this._indexName = undefined;
            this._keySchema.internalValue = undefined;
            this._onDemandThroughput.internalValue = undefined;
            this._projection.internalValue = undefined;
            this._provisionedThroughput.internalValue = undefined;
            this._warmThroughput.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contributorInsightsSpecification.internalValue = value.contributorInsightsSpecification;
            this._indexName = value.indexName;
            this._keySchema.internalValue = value.keySchema;
            this._onDemandThroughput.internalValue = value.onDemandThroughput;
            this._projection.internalValue = value.projection;
            this._provisionedThroughput.internalValue = value.provisionedThroughput;
            this._warmThroughput.internalValue = value.warmThroughput;
        }
    }

    // contributor_insights_specification - computed: true, optional: true, required: false
    private _contributorInsightsSpecification = new GlobalSecondaryIndexesContributorInsightsSpecificationPropertyOutputReference(this, "contributor_insights_specification");
    public get contributorInsightsSpecification() {
        return this._contributorInsightsSpecification;
    }
    public putContributorInsightsSpecification(value: GlobalSecondaryIndexesContributorInsightsSpecificationProperty) {
        this._contributorInsightsSpecification.internalValue = value;
    }
    public resetContributorInsightsSpecification() {
        this._contributorInsightsSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contributorInsightsSpecificationInput() {
        return this._contributorInsightsSpecification.internalValue;
    }

    // index_name - computed: true, optional: true, required: false
    private _indexName?: string; 
    public get indexName() {
        return this.getStringAttribute('index_name');
    }
    public set indexName(value: string) {
        this._indexName = value;
    }
    public resetIndexName() {
        this._indexName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexNameInput() {
        return this._indexName;
    }

    // key_schema - computed: true, optional: true, required: false
    private _keySchema = new KeySchemaPropertyList(this, "key_schema", false);
    public get keySchema() {
        return this._keySchema;
    }
    public putKeySchema(value: KeySchemaProperty[] | cdktn.IResolvable) {
        this._keySchema.internalValue = value;
    }
    public resetKeySchema() {
        this._keySchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keySchemaInput() {
        return this._keySchema.internalValue;
    }

    // on_demand_throughput - computed: true, optional: true, required: false
    private _onDemandThroughput = new GlobalSecondaryIndexesOnDemandThroughputPropertyOutputReference(this, "on_demand_throughput");
    public get onDemandThroughput() {
        return this._onDemandThroughput;
    }
    public putOnDemandThroughput(value: GlobalSecondaryIndexesOnDemandThroughputProperty) {
        this._onDemandThroughput.internalValue = value;
    }
    public resetOnDemandThroughput() {
        this._onDemandThroughput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandThroughputInput() {
        return this._onDemandThroughput.internalValue;
    }

    // projection - computed: true, optional: true, required: false
    private _projection = new ProjectionPropertyOutputReference(this, "projection");
    public get projection() {
        return this._projection;
    }
    public putProjection(value: ProjectionProperty) {
        this._projection.internalValue = value;
    }
    public resetProjection() {
        this._projection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectionInput() {
        return this._projection.internalValue;
    }

    // provisioned_throughput - computed: true, optional: true, required: false
    private _provisionedThroughput = new GlobalSecondaryIndexesProvisionedThroughputPropertyOutputReference(this, "provisioned_throughput");
    public get provisionedThroughput() {
        return this._provisionedThroughput;
    }
    public putProvisionedThroughput(value: GlobalSecondaryIndexesProvisionedThroughputProperty) {
        this._provisionedThroughput.internalValue = value;
    }
    public resetProvisionedThroughput() {
        this._provisionedThroughput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedThroughputInput() {
        return this._provisionedThroughput.internalValue;
    }

    // warm_throughput - computed: true, optional: true, required: false
    private _warmThroughput = new GlobalSecondaryIndexesWarmThroughputPropertyOutputReference(this, "warm_throughput");
    public get warmThroughput() {
        return this._warmThroughput;
    }
    public putWarmThroughput(value: GlobalSecondaryIndexesWarmThroughputProperty) {
        this._warmThroughput.internalValue = value;
    }
    public resetWarmThroughput() {
        this._warmThroughput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmThroughputInput() {
        return this._warmThroughput.internalValue;
    }
}

export class GlobalSecondaryIndexPropertyList extends cdktn.ComplexList {
    public internalValue? : GlobalSecondaryIndexProperty[] | cdktn.IResolvable

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
    public get(index: number): GlobalSecondaryIndexPropertyOutputReference {
        return new GlobalSecondaryIndexPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CsvProperty {
    /**
    * The delimiter used for separating items in the CSV file being imported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#delimiter CcTable#delimiter}
    */
    readonly delimiter?: string;
    /**
    * List of the headers used to specify a common header for all source CSV files being imported. If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#header_list CcTable#header_list}
    */
    readonly headerList?: string[];
}
export class CsvPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CsvProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._delimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.delimiter = this._delimiter;
        }
        if (this._headerList !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerList = this._headerList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CsvProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._delimiter = undefined;
            this._headerList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._delimiter = value.delimiter;
            this._headerList = value.headerList;
        }
    }

    // delimiter - computed: true, optional: true, required: false
    private _delimiter?: string; 
    public get delimiter() {
        return this.getStringAttribute('delimiter');
    }
    public set delimiter(value: string) {
        this._delimiter = value;
    }
    public resetDelimiter() {
        this._delimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delimiterInput() {
        return this._delimiter;
    }

    // header_list - computed: true, optional: true, required: false
    private _headerList?: string[]; 
    public get headerList() {
        return this.getListAttribute('header_list');
    }
    public set headerList(value: string[]) {
        this._headerList = value;
    }
    public resetHeaderList() {
        this._headerList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerListInput() {
        return this._headerList;
    }
}
export interface InputFormatOptionsProperty {
    /**
    * The options for imported source files in CSV format. The values are Delimiter and HeaderList.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#csv CcTable#csv}
    */
    readonly csv?: CsvProperty;
}
export class InputFormatOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputFormatOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._csv?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.csv = this._csv?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputFormatOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._csv.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._csv.internalValue = value.csv;
        }
    }

    // csv - computed: true, optional: true, required: false
    private _csv = new CsvPropertyOutputReference(this, "csv");
    public get csv() {
        return this._csv;
    }
    public putCsv(value: CsvProperty) {
        this._csv.internalValue = value;
    }
    public resetCsv() {
        this._csv.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvInput() {
        return this._csv.internalValue;
    }
}
export interface S3BucketSourceProperty {
    /**
    * The S3 bucket that is being imported from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#s3_bucket CcTable#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * The account number of the S3 bucket that is being imported from. If the bucket is owned by the requester this is optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#s3_bucket_owner CcTable#s3_bucket_owner}
    */
    readonly s3BucketOwner?: string;
    /**
    * The key prefix shared by all S3 Objects that are being imported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#s3_key_prefix CcTable#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export class S3BucketSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3BucketSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3BucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketOwner = this._s3BucketOwner;
        }
        if (this._s3KeyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3KeyPrefix = this._s3KeyPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3BucketSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Bucket = undefined;
            this._s3BucketOwner = undefined;
            this._s3KeyPrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Bucket = value.s3Bucket;
            this._s3BucketOwner = value.s3BucketOwner;
            this._s3KeyPrefix = value.s3KeyPrefix;
        }
    }

    // s3_bucket - computed: true, optional: true, required: false
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    public resetS3Bucket() {
        this._s3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_bucket_owner - computed: true, optional: true, required: false
    private _s3BucketOwner?: string; 
    public get s3BucketOwner() {
        return this.getStringAttribute('s3_bucket_owner');
    }
    public set s3BucketOwner(value: string) {
        this._s3BucketOwner = value;
    }
    public resetS3BucketOwner() {
        this._s3BucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketOwnerInput() {
        return this._s3BucketOwner;
    }

    // s3_key_prefix - computed: true, optional: true, required: false
    private _s3KeyPrefix?: string; 
    public get s3KeyPrefix() {
        return this.getStringAttribute('s3_key_prefix');
    }
    public set s3KeyPrefix(value: string) {
        this._s3KeyPrefix = value;
    }
    public resetS3KeyPrefix() {
        this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyPrefixInput() {
        return this._s3KeyPrefix;
    }
}
export interface ImportSourceSpecificationProperty {
    /**
    * Type of compression to be used on the input coming from the imported table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#input_compression_type CcTable#input_compression_type}
    */
    readonly inputCompressionType?: string;
    /**
    * The format of the source data. Valid values for ``ImportFormat`` are ``CSV``, ``DYNAMODB_JSON`` or ``ION``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#input_format CcTable#input_format}
    */
    readonly inputFormat?: string;
    /**
    * Additional properties that specify how the input is formatted,
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#input_format_options CcTable#input_format_options}
    */
    readonly inputFormatOptions?: InputFormatOptionsProperty;
    /**
    * The S3 bucket that provides the source for the import.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#s3_bucket_source CcTable#s3_bucket_source}
    */
    readonly s3BucketSource?: S3BucketSourceProperty;
}
export class ImportSourceSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImportSourceSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputCompressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputCompressionType = this._inputCompressionType;
        }
        if (this._inputFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputFormat = this._inputFormat;
        }
        if (this._inputFormatOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputFormatOptions = this._inputFormatOptions?.internalValue;
        }
        if (this._s3BucketSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketSource = this._s3BucketSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImportSourceSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputCompressionType = undefined;
            this._inputFormat = undefined;
            this._inputFormatOptions.internalValue = undefined;
            this._s3BucketSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputCompressionType = value.inputCompressionType;
            this._inputFormat = value.inputFormat;
            this._inputFormatOptions.internalValue = value.inputFormatOptions;
            this._s3BucketSource.internalValue = value.s3BucketSource;
        }
    }

    // input_compression_type - computed: true, optional: true, required: false
    private _inputCompressionType?: string; 
    public get inputCompressionType() {
        return this.getStringAttribute('input_compression_type');
    }
    public set inputCompressionType(value: string) {
        this._inputCompressionType = value;
    }
    public resetInputCompressionType() {
        this._inputCompressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputCompressionTypeInput() {
        return this._inputCompressionType;
    }

    // input_format - computed: true, optional: true, required: false
    private _inputFormat?: string; 
    public get inputFormat() {
        return this.getStringAttribute('input_format');
    }
    public set inputFormat(value: string) {
        this._inputFormat = value;
    }
    public resetInputFormat() {
        this._inputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputFormatInput() {
        return this._inputFormat;
    }

    // input_format_options - computed: true, optional: true, required: false
    private _inputFormatOptions = new InputFormatOptionsPropertyOutputReference(this, "input_format_options");
    public get inputFormatOptions() {
        return this._inputFormatOptions;
    }
    public putInputFormatOptions(value: InputFormatOptionsProperty) {
        this._inputFormatOptions.internalValue = value;
    }
    public resetInputFormatOptions() {
        this._inputFormatOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputFormatOptionsInput() {
        return this._inputFormatOptions.internalValue;
    }

    // s3_bucket_source - computed: true, optional: true, required: false
    private _s3BucketSource = new S3BucketSourcePropertyOutputReference(this, "s3_bucket_source");
    public get s3BucketSource() {
        return this._s3BucketSource;
    }
    public putS3BucketSource(value: S3BucketSourceProperty) {
        this._s3BucketSource.internalValue = value;
    }
    public resetS3BucketSource() {
        this._s3BucketSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketSourceInput() {
        return this._s3BucketSource.internalValue;
    }
}
export interface KinesisStreamSpecificationProperty {
    /**
    * The precision for the time and date that the stream was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#approximate_creation_date_time_precision CcTable#approximate_creation_date_time_precision}
    */
    readonly approximateCreationDateTimePrecision?: string;
    /**
    * The ARN for a specific Kinesis data stream.
    *  Length Constraints: Minimum length of 37. Maximum length of 1024.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#stream_arn CcTable#stream_arn}
    */
    readonly streamArn?: string;
}
export class KinesisStreamSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisStreamSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._approximateCreationDateTimePrecision !== undefined) {
            hasAnyValues = true;
            internalValueResult.approximateCreationDateTimePrecision = this._approximateCreationDateTimePrecision;
        }
        if (this._streamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamArn = this._streamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisStreamSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._approximateCreationDateTimePrecision = undefined;
            this._streamArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._approximateCreationDateTimePrecision = value.approximateCreationDateTimePrecision;
            this._streamArn = value.streamArn;
        }
    }

    // approximate_creation_date_time_precision - computed: true, optional: true, required: false
    private _approximateCreationDateTimePrecision?: string; 
    public get approximateCreationDateTimePrecision() {
        return this.getStringAttribute('approximate_creation_date_time_precision');
    }
    public set approximateCreationDateTimePrecision(value: string) {
        this._approximateCreationDateTimePrecision = value;
    }
    public resetApproximateCreationDateTimePrecision() {
        this._approximateCreationDateTimePrecision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approximateCreationDateTimePrecisionInput() {
        return this._approximateCreationDateTimePrecision;
    }

    // stream_arn - computed: true, optional: true, required: false
    private _streamArn?: string; 
    public get streamArn() {
        return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
        this._streamArn = value;
    }
    public resetStreamArn() {
        this._streamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
        return this._streamArn;
    }
}
export interface LocalSecondaryIndexesKeySchemaProperty {
    /**
    * The name of a key attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#attribute_name CcTable#attribute_name}
    */
    readonly attributeName?: string;
    /**
    * The role that this key attribute will assume:
    *   +  ``HASH`` - partition key
    *   +  ``RANGE`` - sort key
    *   
    *   The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
    *  The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#key_type CcTable#key_type}
    */
    readonly keyType?: string;
}
export class LocalSecondaryIndexesKeySchemaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LocalSecondaryIndexesKeySchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeName = this._attributeName;
        }
        if (this._keyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyType = this._keyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocalSecondaryIndexesKeySchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeName = undefined;
            this._keyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeName = value.attributeName;
            this._keyType = value.keyType;
        }
    }

    // attribute_name - computed: true, optional: true, required: false
    private _attributeName?: string; 
    public get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    public set attributeName(value: string) {
        this._attributeName = value;
    }
    public resetAttributeName() {
        this._attributeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeNameInput() {
        return this._attributeName;
    }

    // key_type - computed: true, optional: true, required: false
    private _keyType?: string; 
    public get keyType() {
        return this.getStringAttribute('key_type');
    }
    public set keyType(value: string) {
        this._keyType = value;
    }
    public resetKeyType() {
        this._keyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyTypeInput() {
        return this._keyType;
    }
}

export class LocalSecondaryIndexesKeySchemaPropertyList extends cdktn.ComplexList {
    public internalValue? : LocalSecondaryIndexesKeySchemaProperty[] | cdktn.IResolvable

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
    public get(index: number): LocalSecondaryIndexesKeySchemaPropertyOutputReference {
        return new LocalSecondaryIndexesKeySchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LocalSecondaryIndexesProjectionProperty {
    /**
    * Represents the non-key attribute names which will be projected into the index.
    *  For global and local secondary indexes, the total count of ``NonKeyAttributes`` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of ``INCLUDE``. You still can specify the ProjectionType of ``ALL`` to project all attributes from the source table, even if the table has more than 100 attributes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#non_key_attributes CcTable#non_key_attributes}
    */
    readonly nonKeyAttributes?: string[];
    /**
    * The set of attributes that are projected into the index:
    *   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.
    *   +  ``INCLUDE`` - In addition to the attributes described in ``KEYS_ONLY``, the secondary index will include other non-key attributes that you specify.
    *   +  ``ALL`` - All of the table attributes are projected into the index.
    *   
    *  When using the DynamoDB console, ``ALL`` is selected by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#projection_type CcTable#projection_type}
    */
    readonly projectionType?: string;
}
export class LocalSecondaryIndexesProjectionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LocalSecondaryIndexesProjectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._nonKeyAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.nonKeyAttributes = this._nonKeyAttributes;
        }
        if (this._projectionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectionType = this._projectionType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocalSecondaryIndexesProjectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nonKeyAttributes = undefined;
            this._projectionType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nonKeyAttributes = value.nonKeyAttributes;
            this._projectionType = value.projectionType;
        }
    }

    // non_key_attributes - computed: true, optional: true, required: false
    private _nonKeyAttributes?: string[]; 
    public get nonKeyAttributes() {
        return this.getListAttribute('non_key_attributes');
    }
    public set nonKeyAttributes(value: string[]) {
        this._nonKeyAttributes = value;
    }
    public resetNonKeyAttributes() {
        this._nonKeyAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nonKeyAttributesInput() {
        return this._nonKeyAttributes;
    }

    // projection_type - computed: true, optional: true, required: false
    private _projectionType?: string; 
    public get projectionType() {
        return this.getStringAttribute('projection_type');
    }
    public set projectionType(value: string) {
        this._projectionType = value;
    }
    public resetProjectionType() {
        this._projectionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectionTypeInput() {
        return this._projectionType;
    }
}
export interface LocalSecondaryIndexProperty {
    /**
    * The name of the local secondary index. The name must be unique among all other indexes on this table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#index_name CcTable#index_name}
    */
    readonly indexName?: string;
    /**
    * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:
    *   +  ``HASH`` - partition key
    *   +  ``RANGE`` - sort key
    *   
    *   The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
    *  The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#key_schema CcTable#key_schema}
    */
    readonly keySchema?: LocalSecondaryIndexesKeySchemaProperty[] | cdktn.IResolvable;
    /**
    * Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#projection CcTable#projection}
    */
    readonly projection?: LocalSecondaryIndexesProjectionProperty;
}
export class LocalSecondaryIndexPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LocalSecondaryIndexProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._indexName !== undefined) {
            hasAnyValues = true;
            internalValueResult.indexName = this._indexName;
        }
        if (this._keySchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keySchema = this._keySchema?.internalValue;
        }
        if (this._projection?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.projection = this._projection?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocalSecondaryIndexProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._indexName = undefined;
            this._keySchema.internalValue = undefined;
            this._projection.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._indexName = value.indexName;
            this._keySchema.internalValue = value.keySchema;
            this._projection.internalValue = value.projection;
        }
    }

    // index_name - computed: true, optional: true, required: false
    private _indexName?: string; 
    public get indexName() {
        return this.getStringAttribute('index_name');
    }
    public set indexName(value: string) {
        this._indexName = value;
    }
    public resetIndexName() {
        this._indexName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexNameInput() {
        return this._indexName;
    }

    // key_schema - computed: true, optional: true, required: false
    private _keySchema = new LocalSecondaryIndexesKeySchemaPropertyList(this, "key_schema", false);
    public get keySchema() {
        return this._keySchema;
    }
    public putKeySchema(value: LocalSecondaryIndexesKeySchemaProperty[] | cdktn.IResolvable) {
        this._keySchema.internalValue = value;
    }
    public resetKeySchema() {
        this._keySchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keySchemaInput() {
        return this._keySchema.internalValue;
    }

    // projection - computed: true, optional: true, required: false
    private _projection = new LocalSecondaryIndexesProjectionPropertyOutputReference(this, "projection");
    public get projection() {
        return this._projection;
    }
    public putProjection(value: LocalSecondaryIndexesProjectionProperty) {
        this._projection.internalValue = value;
    }
    public resetProjection() {
        this._projection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectionInput() {
        return this._projection.internalValue;
    }
}

export class LocalSecondaryIndexPropertyList extends cdktn.ComplexList {
    public internalValue? : LocalSecondaryIndexProperty[] | cdktn.IResolvable

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
    public get(index: number): LocalSecondaryIndexPropertyOutputReference {
        return new LocalSecondaryIndexPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OnDemandThroughputProperty {
    /**
    * Maximum number of read request units for the specified table.
    *  To specify a maximum ``OnDemandThroughput`` on your table, set the value of ``MaxReadRequestUnits`` as greater than or equal to 1. To remove the maximum ``OnDemandThroughput`` that is currently set on your table, set the value of ``MaxReadRequestUnits`` to -1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#max_read_request_units CcTable#max_read_request_units}
    */
    readonly maxReadRequestUnits?: number;
    /**
    * Maximum number of write request units for the specified table.
    *  To specify a maximum ``OnDemandThroughput`` on your table, set the value of ``MaxWriteRequestUnits`` as greater than or equal to 1. To remove the maximum ``OnDemandThroughput`` that is currently set on your table, set the value of ``MaxWriteRequestUnits`` to -1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#max_write_request_units CcTable#max_write_request_units}
    */
    readonly maxWriteRequestUnits?: number;
}
export class OnDemandThroughputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnDemandThroughputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxReadRequestUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxReadRequestUnits = this._maxReadRequestUnits;
        }
        if (this._maxWriteRequestUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxWriteRequestUnits = this._maxWriteRequestUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnDemandThroughputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxReadRequestUnits = undefined;
            this._maxWriteRequestUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxReadRequestUnits = value.maxReadRequestUnits;
            this._maxWriteRequestUnits = value.maxWriteRequestUnits;
        }
    }

    // max_read_request_units - computed: true, optional: true, required: false
    private _maxReadRequestUnits?: number; 
    public get maxReadRequestUnits() {
        return this.getNumberAttribute('max_read_request_units');
    }
    public set maxReadRequestUnits(value: number) {
        this._maxReadRequestUnits = value;
    }
    public resetMaxReadRequestUnits() {
        this._maxReadRequestUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxReadRequestUnitsInput() {
        return this._maxReadRequestUnits;
    }

    // max_write_request_units - computed: true, optional: true, required: false
    private _maxWriteRequestUnits?: number; 
    public get maxWriteRequestUnits() {
        return this.getNumberAttribute('max_write_request_units');
    }
    public set maxWriteRequestUnits(value: number) {
        this._maxWriteRequestUnits = value;
    }
    public resetMaxWriteRequestUnits() {
        this._maxWriteRequestUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxWriteRequestUnitsInput() {
        return this._maxWriteRequestUnits;
    }
}
export interface PointInTimeRecoverySpecificationProperty {
    /**
    * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#point_in_time_recovery_enabled CcTable#point_in_time_recovery_enabled}
    */
    readonly pointInTimeRecoveryEnabled?: boolean | cdktn.IResolvable;
    /**
    * The number of preceding days for which continuous backups are taken and maintained. Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#recovery_period_in_days CcTable#recovery_period_in_days}
    */
    readonly recoveryPeriodInDays?: number;
}
export class PointInTimeRecoverySpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PointInTimeRecoverySpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pointInTimeRecoveryEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.pointInTimeRecoveryEnabled = this._pointInTimeRecoveryEnabled;
        }
        if (this._recoveryPeriodInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.recoveryPeriodInDays = this._recoveryPeriodInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PointInTimeRecoverySpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pointInTimeRecoveryEnabled = undefined;
            this._recoveryPeriodInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pointInTimeRecoveryEnabled = value.pointInTimeRecoveryEnabled;
            this._recoveryPeriodInDays = value.recoveryPeriodInDays;
        }
    }

    // point_in_time_recovery_enabled - computed: true, optional: true, required: false
    private _pointInTimeRecoveryEnabled?: boolean | cdktn.IResolvable; 
    public get pointInTimeRecoveryEnabled() {
        return this.getBooleanAttribute('point_in_time_recovery_enabled');
    }
    public set pointInTimeRecoveryEnabled(value: boolean | cdktn.IResolvable) {
        this._pointInTimeRecoveryEnabled = value;
    }
    public resetPointInTimeRecoveryEnabled() {
        this._pointInTimeRecoveryEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pointInTimeRecoveryEnabledInput() {
        return this._pointInTimeRecoveryEnabled;
    }

    // recovery_period_in_days - computed: true, optional: true, required: false
    private _recoveryPeriodInDays?: number; 
    public get recoveryPeriodInDays() {
        return this.getNumberAttribute('recovery_period_in_days');
    }
    public set recoveryPeriodInDays(value: number) {
        this._recoveryPeriodInDays = value;
    }
    public resetRecoveryPeriodInDays() {
        this._recoveryPeriodInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recoveryPeriodInDaysInput() {
        return this._recoveryPeriodInDays;
    }
}
export interface ProvisionedThroughputProperty {
    /**
    * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
    *  If read/write capacity mode is ``PAY_PER_REQUEST`` the value is set to 0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#read_capacity_units CcTable#read_capacity_units}
    */
    readonly readCapacityUnits?: number;
    /**
    * The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
    *  If read/write capacity mode is ``PAY_PER_REQUEST`` the value is set to 0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#write_capacity_units CcTable#write_capacity_units}
    */
    readonly writeCapacityUnits?: number;
}
export class ProvisionedThroughputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProvisionedThroughputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.readCapacityUnits = this._readCapacityUnits;
        }
        if (this._writeCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeCapacityUnits = this._writeCapacityUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisionedThroughputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readCapacityUnits = undefined;
            this._writeCapacityUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readCapacityUnits = value.readCapacityUnits;
            this._writeCapacityUnits = value.writeCapacityUnits;
        }
    }

    // read_capacity_units - computed: true, optional: true, required: false
    private _readCapacityUnits?: number; 
    public get readCapacityUnits() {
        return this.getNumberAttribute('read_capacity_units');
    }
    public set readCapacityUnits(value: number) {
        this._readCapacityUnits = value;
    }
    public resetReadCapacityUnits() {
        this._readCapacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readCapacityUnitsInput() {
        return this._readCapacityUnits;
    }

    // write_capacity_units - computed: true, optional: true, required: false
    private _writeCapacityUnits?: number; 
    public get writeCapacityUnits() {
        return this.getNumberAttribute('write_capacity_units');
    }
    public set writeCapacityUnits(value: number) {
        this._writeCapacityUnits = value;
    }
    public resetWriteCapacityUnits() {
        this._writeCapacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeCapacityUnitsInput() {
        return this._writeCapacityUnits;
    }
}
export interface ResourcePolicyProperty {
    /**
    * A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#policy_document CcTable#policy_document}
    */
    readonly policyDocument?: string;
}
export class ResourcePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourcePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policyDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyDocument = this._policyDocument;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policyDocument = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policyDocument = value.policyDocument;
        }
    }

    // policy_document - computed: true, optional: true, required: false
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    public resetPolicyDocument() {
        this._policyDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }
}
export interface SSESpecificationProperty {
    /**
    * The KMS key that should be used for the KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key ``alias/aws/dynamodb``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#kms_master_key_id CcTable#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key. If enabled (true), server-side encryption type is set to ``KMS`` and an AWS managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#sse_enabled CcTable#sse_enabled}
    */
    readonly sseEnabled?: boolean | cdktn.IResolvable;
    /**
    * Server-side encryption type. The only supported value is:
    *   +  ``KMS`` - Server-side encryption that uses KMSlong. The key is stored in your account and is managed by KMS (KMS charges apply).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#sse_type CcTable#sse_type}
    */
    readonly sseType?: string;
}
export class SSESpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SSESpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsMasterKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsMasterKeyId = this._kmsMasterKeyId;
        }
        if (this._sseEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.sseEnabled = this._sseEnabled;
        }
        if (this._sseType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sseType = this._sseType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SSESpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsMasterKeyId = undefined;
            this._sseEnabled = undefined;
            this._sseType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsMasterKeyId = value.kmsMasterKeyId;
            this._sseEnabled = value.sseEnabled;
            this._sseType = value.sseType;
        }
    }

    // kms_master_key_id - computed: true, optional: true, required: false
    private _kmsMasterKeyId?: string; 
    public get kmsMasterKeyId() {
        return this.getStringAttribute('kms_master_key_id');
    }
    public set kmsMasterKeyId(value: string) {
        this._kmsMasterKeyId = value;
    }
    public resetKmsMasterKeyId() {
        this._kmsMasterKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsMasterKeyIdInput() {
        return this._kmsMasterKeyId;
    }

    // sse_enabled - computed: true, optional: true, required: false
    private _sseEnabled?: boolean | cdktn.IResolvable; 
    public get sseEnabled() {
        return this.getBooleanAttribute('sse_enabled');
    }
    public set sseEnabled(value: boolean | cdktn.IResolvable) {
        this._sseEnabled = value;
    }
    public resetSseEnabled() {
        this._sseEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseEnabledInput() {
        return this._sseEnabled;
    }

    // sse_type - computed: true, optional: true, required: false
    private _sseType?: string; 
    public get sseType() {
        return this.getStringAttribute('sse_type');
    }
    public set sseType(value: string) {
        this._sseType = value;
    }
    public resetSseType() {
        this._sseType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseTypeInput() {
        return this._sseType;
    }
}
export interface StreamSpecificationResourcePolicyProperty {
    /**
    * A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#policy_document CcTable#policy_document}
    */
    readonly policyDocument?: string;
}
export class StreamSpecificationResourcePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StreamSpecificationResourcePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policyDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyDocument = this._policyDocument;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StreamSpecificationResourcePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policyDocument = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policyDocument = value.policyDocument;
        }
    }

    // policy_document - computed: true, optional: true, required: false
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    public resetPolicyDocument() {
        this._policyDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }
}
export interface TagProperty {
    /**
    * The key of the tag. Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#key CcTable#key}
    */
    readonly key?: string;
    /**
    * The value of the tag. Tag values are case-sensitive and can be null.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#value CcTable#value}
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
export interface StreamSpecificationProperty {
    /**
    * Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams. Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
    *   When you remove the ``StreamSpecification`` property from the template, DynamoDB disables the stream but retains any attached resource policy until the stream is deleted after 24 hours. When you modify the ``StreamViewType`` property, DynamoDB creates a new stream and retains the old stream's resource policy. The old stream and its resource policy are deleted after the 24-hour retention period.
    *   In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#resource_policy CcTable#resource_policy}
    */
    readonly resourcePolicy?: StreamSpecificationResourcePolicyProperty;
    /**
    * When an item in the table is modified, ``StreamViewType`` determines what information is written to the stream for this table. Valid values for ``StreamViewType`` are:
    *   +  ``KEYS_ONLY`` - Only the key attributes of the modified item are written to the stream.
    *   +  ``NEW_IMAGE`` - The entire item, as it appears after it was modified, is written to the stream.
    *   +  ``OLD_IMAGE`` - The entire item, as it appeared before it was modified, is written to the stream.
    *   +  ``NEW_AND_OLD_IMAGES`` - Both the new and the old item images of the item are written to the stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#stream_view_type CcTable#stream_view_type}
    */
    readonly streamViewType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#tags CcTable#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
}
export class StreamSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StreamSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourcePolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourcePolicy = this._resourcePolicy?.internalValue;
        }
        if (this._streamViewType !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamViewType = this._streamViewType;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StreamSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourcePolicy.internalValue = undefined;
            this._streamViewType = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourcePolicy.internalValue = value.resourcePolicy;
            this._streamViewType = value.streamViewType;
            this._tags.internalValue = value.tags;
        }
    }

    // resource_policy - computed: true, optional: true, required: false
    private _resourcePolicy = new StreamSpecificationResourcePolicyPropertyOutputReference(this, "resource_policy");
    public get resourcePolicy() {
        return this._resourcePolicy;
    }
    public putResourcePolicy(value: StreamSpecificationResourcePolicyProperty) {
        this._resourcePolicy.internalValue = value;
    }
    public resetResourcePolicy() {
        this._resourcePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePolicyInput() {
        return this._resourcePolicy.internalValue;
    }

    // stream_view_type - computed: true, optional: true, required: false
    private _streamViewType?: string; 
    public get streamViewType() {
        return this.getStringAttribute('stream_view_type');
    }
    public set streamViewType(value: string) {
        this._streamViewType = value;
    }
    public resetStreamViewType() {
        this._streamViewType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamViewTypeInput() {
        return this._streamViewType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}
export interface TagsProperty {
    /**
    * The key of the tag. Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#key CcTable#key}
    */
    readonly key?: string;
    /**
    * The value of the tag. Tag values are case-sensitive and can be null.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#value CcTable#value}
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
export interface TimeToLiveSpecificationProperty {
    /**
    * The name of the TTL attribute used to store the expiration time for items in the table.
    *    +  The ``AttributeName`` property is required when enabling the TTL, or when TTL is already enabled.
    *   +  To update this property, you must first disable TTL and then enable TTL with the new attribute name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#attribute_name CcTable#attribute_name}
    */
    readonly attributeName?: string;
    /**
    * Indicates whether TTL is to be enabled (true) or disabled (false) on the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#enabled CcTable#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class TimeToLiveSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimeToLiveSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeName = this._attributeName;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeToLiveSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeName = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeName = value.attributeName;
            this._enabled = value.enabled;
        }
    }

    // attribute_name - computed: true, optional: true, required: false
    private _attributeName?: string; 
    public get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    public set attributeName(value: string) {
        this._attributeName = value;
    }
    public resetAttributeName() {
        this._attributeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeNameInput() {
        return this._attributeName;
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
export interface WarmThroughputProperty {
    /**
    * Represents the number of read operations your base table can instantaneously support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#read_units_per_second CcTable#read_units_per_second}
    */
    readonly readUnitsPerSecond?: number;
    /**
    * Represents the number of write operations your base table can instantaneously support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dynamodb_table#write_units_per_second CcTable#write_units_per_second}
    */
    readonly writeUnitsPerSecond?: number;
}
export class WarmThroughputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WarmThroughputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readUnitsPerSecond !== undefined) {
            hasAnyValues = true;
            internalValueResult.readUnitsPerSecond = this._readUnitsPerSecond;
        }
        if (this._writeUnitsPerSecond !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeUnitsPerSecond = this._writeUnitsPerSecond;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WarmThroughputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readUnitsPerSecond = undefined;
            this._writeUnitsPerSecond = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readUnitsPerSecond = value.readUnitsPerSecond;
            this._writeUnitsPerSecond = value.writeUnitsPerSecond;
        }
    }

    // read_units_per_second - computed: true, optional: true, required: false
    private _readUnitsPerSecond?: number; 
    public get readUnitsPerSecond() {
        return this.getNumberAttribute('read_units_per_second');
    }
    public set readUnitsPerSecond(value: number) {
        this._readUnitsPerSecond = value;
    }
    public resetReadUnitsPerSecond() {
        this._readUnitsPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readUnitsPerSecondInput() {
        return this._readUnitsPerSecond;
    }

    // write_units_per_second - computed: true, optional: true, required: false
    private _writeUnitsPerSecond?: number; 
    public get writeUnitsPerSecond() {
        return this.getNumberAttribute('write_units_per_second');
    }
    public set writeUnitsPerSecond(value: number) {
        this._writeUnitsPerSecond = value;
    }
    public resetWriteUnitsPerSecond() {
        this._writeUnitsPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeUnitsPerSecondInput() {
        return this._writeUnitsPerSecond;
    }
}
}
