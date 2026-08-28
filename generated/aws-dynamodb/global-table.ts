// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGlobalTableProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#attribute_definitions CcGlobalTable#attribute_definitions}
    */
    readonly attributeDefinitions?: CcGlobalTable.AttributeDefinitionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#billing_mode CcGlobalTable#billing_mode}
    */
    readonly billingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#global_secondary_indexes CcGlobalTable#global_secondary_indexes}
    */
    readonly globalSecondaryIndexes?: CcGlobalTable.GlobalSecondaryIndexProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#global_table_source_arn CcGlobalTable#global_table_source_arn}
    */
    readonly globalTableSourceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#global_table_witnesses CcGlobalTable#global_table_witnesses}
    */
    readonly globalTableWitnesses?: CcGlobalTable.GlobalTableWitnessProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#key_schema CcGlobalTable#key_schema}
    */
    readonly keySchema?: CcGlobalTable.KeySchemaProperty2[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#local_secondary_indexes CcGlobalTable#local_secondary_indexes}
    */
    readonly localSecondaryIndexes?: CcGlobalTable.LocalSecondaryIndexProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#multi_region_consistency CcGlobalTable#multi_region_consistency}
    */
    readonly multiRegionConsistency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_on_demand_throughput_settings CcGlobalTable#read_on_demand_throughput_settings}
    */
    readonly readOnDemandThroughputSettings?: CcGlobalTable.ReadOnDemandThroughputSettingsProperty2;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_provisioned_throughput_settings CcGlobalTable#read_provisioned_throughput_settings}
    */
    readonly readProvisionedThroughputSettings?: CcGlobalTable.ReadProvisionedThroughputSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#replicas CcGlobalTable#replicas}
    */
    readonly replicas: CcGlobalTable.ReplicaSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#sse_specification CcGlobalTable#sse_specification}
    */
    readonly sseSpecification?: CcGlobalTable.SSESpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#stream_specification CcGlobalTable#stream_specification}
    */
    readonly streamSpecification?: CcGlobalTable.StreamSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#table_name CcGlobalTable#table_name}
    */
    readonly tableName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#time_to_live_specification CcGlobalTable#time_to_live_specification}
    */
    readonly timeToLiveSpecification?: CcGlobalTable.TimeToLiveSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#warm_throughput CcGlobalTable#warm_throughput}
    */
    readonly warmThroughput?: CcGlobalTable.WarmThroughputProperty2;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#write_on_demand_throughput_settings CcGlobalTable#write_on_demand_throughput_settings}
    */
    readonly writeOnDemandThroughputSettings?: CcGlobalTable.WriteOnDemandThroughputSettingsProperty2;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#write_provisioned_throughput_settings CcGlobalTable#write_provisioned_throughput_settings}
    */
    readonly writeProvisionedThroughputSettings?: CcGlobalTable.WriteProvisionedThroughputSettingsProperty2;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table awscc_dynamodb_global_table}
*/
export class CcGlobalTable extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dynamodb_global_table";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGlobalTable resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGlobalTable to import
    * @param importFromId The id of the existing CcGlobalTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGlobalTable to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dynamodb_global_table", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table awscc_dynamodb_global_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGlobalTableProps
    */
    public constructor(scope: Construct, id: string, config: CcGlobalTableProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_dynamodb_global_table',
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
        this._attributeDefinitions.internalValue = config.attributeDefinitions;
        this._billingMode = config.billingMode;
        this._globalSecondaryIndexes.internalValue = config.globalSecondaryIndexes;
        this._globalTableSourceArn = config.globalTableSourceArn;
        this._globalTableWitnesses.internalValue = config.globalTableWitnesses;
        this._keySchema.internalValue = config.keySchema;
        this._localSecondaryIndexes.internalValue = config.localSecondaryIndexes;
        this._multiRegionConsistency = config.multiRegionConsistency;
        this._readOnDemandThroughputSettings.internalValue = config.readOnDemandThroughputSettings;
        this._readProvisionedThroughputSettings.internalValue = config.readProvisionedThroughputSettings;
        this._replicas.internalValue = config.replicas;
        this._sseSpecification.internalValue = config.sseSpecification;
        this._streamSpecification.internalValue = config.streamSpecification;
        this._tableName = config.tableName;
        this._timeToLiveSpecification.internalValue = config.timeToLiveSpecification;
        this._warmThroughput.internalValue = config.warmThroughput;
        this._writeOnDemandThroughputSettings.internalValue = config.writeOnDemandThroughputSettings;
        this._writeProvisionedThroughputSettings.internalValue = config.writeProvisionedThroughputSettings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // attribute_definitions - computed: true, optional: true, required: false
    private _attributeDefinitions = new CcGlobalTable.AttributeDefinitionPropertyList(this, "attribute_definitions", true);
    public get attributeDefinitions() {
        return this._attributeDefinitions;
    }
    public putAttributeDefinitions(value: CcGlobalTable.AttributeDefinitionProperty[] | cdktn.IResolvable) {
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

    // global_secondary_indexes - computed: true, optional: true, required: false
    private _globalSecondaryIndexes = new CcGlobalTable.GlobalSecondaryIndexPropertyList(this, "global_secondary_indexes", true);
    public get globalSecondaryIndexes() {
        return this._globalSecondaryIndexes;
    }
    public putGlobalSecondaryIndexes(value: CcGlobalTable.GlobalSecondaryIndexProperty[] | cdktn.IResolvable) {
        this._globalSecondaryIndexes.internalValue = value;
    }
    public resetGlobalSecondaryIndexes() {
        this._globalSecondaryIndexes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalSecondaryIndexesInput() {
        return this._globalSecondaryIndexes.internalValue;
    }

    // global_table_source_arn - computed: true, optional: true, required: false
    private _globalTableSourceArn?: string; 
    public get globalTableSourceArn() {
        return this.getStringAttribute('global_table_source_arn');
    }
    public set globalTableSourceArn(value: string) {
        this._globalTableSourceArn = value;
    }
    public resetGlobalTableSourceArn() {
        this._globalTableSourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalTableSourceArnInput() {
        return this._globalTableSourceArn;
    }

    // global_table_witnesses - computed: true, optional: true, required: false
    private _globalTableWitnesses = new CcGlobalTable.GlobalTableWitnessPropertyList(this, "global_table_witnesses", true);
    public get globalTableWitnesses() {
        return this._globalTableWitnesses;
    }
    public putGlobalTableWitnesses(value: CcGlobalTable.GlobalTableWitnessProperty[] | cdktn.IResolvable) {
        this._globalTableWitnesses.internalValue = value;
    }
    public resetGlobalTableWitnesses() {
        this._globalTableWitnesses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalTableWitnessesInput() {
        return this._globalTableWitnesses.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // key_schema - computed: true, optional: true, required: false
    private _keySchema = new CcGlobalTable.KeySchemaProperty2List(this, "key_schema", false);
    public get keySchema() {
        return this._keySchema;
    }
    public putKeySchema(value: CcGlobalTable.KeySchemaProperty2[] | cdktn.IResolvable) {
        this._keySchema.internalValue = value;
    }
    public resetKeySchema() {
        this._keySchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keySchemaInput() {
        return this._keySchema.internalValue;
    }

    // local_secondary_indexes - computed: true, optional: true, required: false
    private _localSecondaryIndexes = new CcGlobalTable.LocalSecondaryIndexPropertyList(this, "local_secondary_indexes", true);
    public get localSecondaryIndexes() {
        return this._localSecondaryIndexes;
    }
    public putLocalSecondaryIndexes(value: CcGlobalTable.LocalSecondaryIndexProperty[] | cdktn.IResolvable) {
        this._localSecondaryIndexes.internalValue = value;
    }
    public resetLocalSecondaryIndexes() {
        this._localSecondaryIndexes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localSecondaryIndexesInput() {
        return this._localSecondaryIndexes.internalValue;
    }

    // multi_region_consistency - computed: true, optional: true, required: false
    private _multiRegionConsistency?: string; 
    public get multiRegionConsistency() {
        return this.getStringAttribute('multi_region_consistency');
    }
    public set multiRegionConsistency(value: string) {
        this._multiRegionConsistency = value;
    }
    public resetMultiRegionConsistency() {
        this._multiRegionConsistency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiRegionConsistencyInput() {
        return this._multiRegionConsistency;
    }

    // read_on_demand_throughput_settings - computed: true, optional: true, required: false
    private _readOnDemandThroughputSettings = new CcGlobalTable.ReadOnDemandThroughputSettingsProperty2OutputReference(this, "read_on_demand_throughput_settings");
    public get readOnDemandThroughputSettings() {
        return this._readOnDemandThroughputSettings;
    }
    public putReadOnDemandThroughputSettings(value: CcGlobalTable.ReadOnDemandThroughputSettingsProperty2) {
        this._readOnDemandThroughputSettings.internalValue = value;
    }
    public resetReadOnDemandThroughputSettings() {
        this._readOnDemandThroughputSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readOnDemandThroughputSettingsInput() {
        return this._readOnDemandThroughputSettings.internalValue;
    }

    // read_provisioned_throughput_settings - computed: true, optional: true, required: false
    private _readProvisionedThroughputSettings = new CcGlobalTable.ReadProvisionedThroughputSettingsPropertyOutputReference(this, "read_provisioned_throughput_settings");
    public get readProvisionedThroughputSettings() {
        return this._readProvisionedThroughputSettings;
    }
    public putReadProvisionedThroughputSettings(value: CcGlobalTable.ReadProvisionedThroughputSettingsProperty) {
        this._readProvisionedThroughputSettings.internalValue = value;
    }
    public resetReadProvisionedThroughputSettings() {
        this._readProvisionedThroughputSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readProvisionedThroughputSettingsInput() {
        return this._readProvisionedThroughputSettings.internalValue;
    }

    // replicas - computed: false, optional: false, required: true
    private _replicas = new CcGlobalTable.ReplicaSpecificationPropertyList(this, "replicas", true);
    public get replicas() {
        return this._replicas;
    }
    public putReplicas(value: CcGlobalTable.ReplicaSpecificationProperty[] | cdktn.IResolvable) {
        this._replicas.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicasInput() {
        return this._replicas.internalValue;
    }

    // sse_specification - computed: true, optional: true, required: false
    private _sseSpecification = new CcGlobalTable.SSESpecificationPropertyOutputReference(this, "sse_specification");
    public get sseSpecification() {
        return this._sseSpecification;
    }
    public putSseSpecification(value: CcGlobalTable.SSESpecificationProperty) {
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
    private _streamSpecification = new CcGlobalTable.StreamSpecificationPropertyOutputReference(this, "stream_specification");
    public get streamSpecification() {
        return this._streamSpecification;
    }
    public putStreamSpecification(value: CcGlobalTable.StreamSpecificationProperty) {
        this._streamSpecification.internalValue = value;
    }
    public resetStreamSpecification() {
        this._streamSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamSpecificationInput() {
        return this._streamSpecification.internalValue;
    }

    // table_id - computed: true, optional: false, required: false
    public get tableId() {
        return this.getStringAttribute('table_id');
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

    // time_to_live_specification - computed: true, optional: true, required: false
    private _timeToLiveSpecification = new CcGlobalTable.TimeToLiveSpecificationPropertyOutputReference(this, "time_to_live_specification");
    public get timeToLiveSpecification() {
        return this._timeToLiveSpecification;
    }
    public putTimeToLiveSpecification(value: CcGlobalTable.TimeToLiveSpecificationProperty) {
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
    private _warmThroughput = new CcGlobalTable.WarmThroughputProperty2OutputReference(this, "warm_throughput");
    public get warmThroughput() {
        return this._warmThroughput;
    }
    public putWarmThroughput(value: CcGlobalTable.WarmThroughputProperty2) {
        this._warmThroughput.internalValue = value;
    }
    public resetWarmThroughput() {
        this._warmThroughput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmThroughputInput() {
        return this._warmThroughput.internalValue;
    }

    // write_on_demand_throughput_settings - computed: true, optional: true, required: false
    private _writeOnDemandThroughputSettings = new CcGlobalTable.WriteOnDemandThroughputSettingsProperty2OutputReference(this, "write_on_demand_throughput_settings");
    public get writeOnDemandThroughputSettings() {
        return this._writeOnDemandThroughputSettings;
    }
    public putWriteOnDemandThroughputSettings(value: CcGlobalTable.WriteOnDemandThroughputSettingsProperty2) {
        this._writeOnDemandThroughputSettings.internalValue = value;
    }
    public resetWriteOnDemandThroughputSettings() {
        this._writeOnDemandThroughputSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeOnDemandThroughputSettingsInput() {
        return this._writeOnDemandThroughputSettings.internalValue;
    }

    // write_provisioned_throughput_settings - computed: true, optional: true, required: false
    private _writeProvisionedThroughputSettings = new CcGlobalTable.WriteProvisionedThroughputSettingsProperty2OutputReference(this, "write_provisioned_throughput_settings");
    public get writeProvisionedThroughputSettings() {
        return this._writeProvisionedThroughputSettings;
    }
    public putWriteProvisionedThroughputSettings(value: CcGlobalTable.WriteProvisionedThroughputSettingsProperty2) {
        this._writeProvisionedThroughputSettings.internalValue = value;
    }
    public resetWriteProvisionedThroughputSettings() {
        this._writeProvisionedThroughputSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeProvisionedThroughputSettingsInput() {
        return this._writeProvisionedThroughputSettings.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            attribute_definitions: cdktn.listMapper(ccGlobalTableAttributeDefinitionPropertyToTerraform, false)(this._attributeDefinitions.internalValue),
            billing_mode: cdktn.stringToTerraform(this._billingMode),
            global_secondary_indexes: cdktn.listMapper(ccGlobalTableGlobalSecondaryIndexPropertyToTerraform, false)(this._globalSecondaryIndexes.internalValue),
            global_table_source_arn: cdktn.stringToTerraform(this._globalTableSourceArn),
            global_table_witnesses: cdktn.listMapper(ccGlobalTableGlobalTableWitnessPropertyToTerraform, false)(this._globalTableWitnesses.internalValue),
            key_schema: cdktn.listMapper(ccGlobalTableKeySchemaProperty2ToTerraform, false)(this._keySchema.internalValue),
            local_secondary_indexes: cdktn.listMapper(ccGlobalTableLocalSecondaryIndexPropertyToTerraform, false)(this._localSecondaryIndexes.internalValue),
            multi_region_consistency: cdktn.stringToTerraform(this._multiRegionConsistency),
            read_on_demand_throughput_settings: ccGlobalTableReadOnDemandThroughputSettingsProperty2ToTerraform(this._readOnDemandThroughputSettings.internalValue),
            read_provisioned_throughput_settings: ccGlobalTableReadProvisionedThroughputSettingsPropertyToTerraform(this._readProvisionedThroughputSettings.internalValue),
            replicas: cdktn.listMapper(ccGlobalTableReplicaSpecificationPropertyToTerraform, false)(this._replicas.internalValue),
            sse_specification: ccGlobalTableSSESpecificationPropertyToTerraform(this._sseSpecification.internalValue),
            stream_specification: ccGlobalTableStreamSpecificationPropertyToTerraform(this._streamSpecification.internalValue),
            table_name: cdktn.stringToTerraform(this._tableName),
            time_to_live_specification: ccGlobalTableTimeToLiveSpecificationPropertyToTerraform(this._timeToLiveSpecification.internalValue),
            warm_throughput: ccGlobalTableWarmThroughputProperty2ToTerraform(this._warmThroughput.internalValue),
            write_on_demand_throughput_settings: ccGlobalTableWriteOnDemandThroughputSettingsProperty2ToTerraform(this._writeOnDemandThroughputSettings.internalValue),
            write_provisioned_throughput_settings: ccGlobalTableWriteProvisionedThroughputSettingsProperty2ToTerraform(this._writeProvisionedThroughputSettings.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            attribute_definitions: {
                value: cdktn.listMapperHcl(ccGlobalTableAttributeDefinitionPropertyToHclTerraform, false)(this._attributeDefinitions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcGlobalTable.AttributeDefinitionPropertyList",
            },
            billing_mode: {
                value: cdktn.stringToHclTerraform(this._billingMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            global_secondary_indexes: {
                value: cdktn.listMapperHcl(ccGlobalTableGlobalSecondaryIndexPropertyToHclTerraform, false)(this._globalSecondaryIndexes.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcGlobalTable.GlobalSecondaryIndexPropertyList",
            },
            global_table_source_arn: {
                value: cdktn.stringToHclTerraform(this._globalTableSourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            global_table_witnesses: {
                value: cdktn.listMapperHcl(ccGlobalTableGlobalTableWitnessPropertyToHclTerraform, false)(this._globalTableWitnesses.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcGlobalTable.GlobalTableWitnessPropertyList",
            },
            key_schema: {
                value: cdktn.listMapperHcl(ccGlobalTableKeySchemaProperty2ToHclTerraform, false)(this._keySchema.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGlobalTable.KeySchemaProperty2List",
            },
            local_secondary_indexes: {
                value: cdktn.listMapperHcl(ccGlobalTableLocalSecondaryIndexPropertyToHclTerraform, false)(this._localSecondaryIndexes.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcGlobalTable.LocalSecondaryIndexPropertyList",
            },
            multi_region_consistency: {
                value: cdktn.stringToHclTerraform(this._multiRegionConsistency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            read_on_demand_throughput_settings: {
                value: ccGlobalTableReadOnDemandThroughputSettingsProperty2ToHclTerraform(this._readOnDemandThroughputSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGlobalTable.ReadOnDemandThroughputSettingsProperty2",
            },
            read_provisioned_throughput_settings: {
                value: ccGlobalTableReadProvisionedThroughputSettingsPropertyToHclTerraform(this._readProvisionedThroughputSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGlobalTable.ReadProvisionedThroughputSettingsProperty",
            },
            replicas: {
                value: cdktn.listMapperHcl(ccGlobalTableReplicaSpecificationPropertyToHclTerraform, false)(this._replicas.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcGlobalTable.ReplicaSpecificationPropertyList",
            },
            sse_specification: {
                value: ccGlobalTableSSESpecificationPropertyToHclTerraform(this._sseSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGlobalTable.SSESpecificationProperty",
            },
            stream_specification: {
                value: ccGlobalTableStreamSpecificationPropertyToHclTerraform(this._streamSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGlobalTable.StreamSpecificationProperty",
            },
            table_name: {
                value: cdktn.stringToHclTerraform(this._tableName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            time_to_live_specification: {
                value: ccGlobalTableTimeToLiveSpecificationPropertyToHclTerraform(this._timeToLiveSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGlobalTable.TimeToLiveSpecificationProperty",
            },
            warm_throughput: {
                value: ccGlobalTableWarmThroughputProperty2ToHclTerraform(this._warmThroughput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGlobalTable.WarmThroughputProperty2",
            },
            write_on_demand_throughput_settings: {
                value: ccGlobalTableWriteOnDemandThroughputSettingsProperty2ToHclTerraform(this._writeOnDemandThroughputSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGlobalTable.WriteOnDemandThroughputSettingsProperty2",
            },
            write_provisioned_throughput_settings: {
                value: ccGlobalTableWriteProvisionedThroughputSettingsProperty2ToHclTerraform(this._writeProvisionedThroughputSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGlobalTable.WriteProvisionedThroughputSettingsProperty2",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGlobalTableAttributeDefinitionPropertyToTerraform(struct?: CcGlobalTable.AttributeDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_name: cdktn.stringToTerraform(struct!.attributeName),
        attribute_type: cdktn.stringToTerraform(struct!.attributeType),
    }
}


export function ccGlobalTableAttributeDefinitionPropertyToHclTerraform(struct?: CcGlobalTable.AttributeDefinitionProperty | cdktn.IResolvable): any {
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


export function ccGlobalTableKeySchemaPropertyToTerraform(struct?: CcGlobalTable.KeySchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_name: cdktn.stringToTerraform(struct!.attributeName),
        key_type: cdktn.stringToTerraform(struct!.keyType),
    }
}


export function ccGlobalTableKeySchemaPropertyToHclTerraform(struct?: CcGlobalTable.KeySchemaProperty | cdktn.IResolvable): any {
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


export function ccGlobalTableProjectionPropertyToTerraform(struct?: CcGlobalTable.ProjectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        non_key_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nonKeyAttributes),
        projection_type: cdktn.stringToTerraform(struct!.projectionType),
    }
}


export function ccGlobalTableProjectionPropertyToHclTerraform(struct?: CcGlobalTable.ProjectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        non_key_attributes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nonKeyAttributes),
            isBlock: false,
            type: "set",
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


export function ccGlobalTableReadOnDemandThroughputSettingsPropertyToTerraform(struct?: CcGlobalTable.ReadOnDemandThroughputSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_read_request_units: cdktn.numberToTerraform(struct!.maxReadRequestUnits),
    }
}


export function ccGlobalTableReadOnDemandThroughputSettingsPropertyToHclTerraform(struct?: CcGlobalTable.ReadOnDemandThroughputSettingsProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableGlobalReadProvisionedThroughputSettingsPropertyToTerraform(struct?: CcGlobalTable.GlobalReadProvisionedThroughputSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
    }
}


export function ccGlobalTableGlobalReadProvisionedThroughputSettingsPropertyToHclTerraform(struct?: CcGlobalTable.GlobalReadProvisionedThroughputSettingsProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableWarmThroughputPropertyToTerraform(struct?: CcGlobalTable.WarmThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_units_per_second: cdktn.numberToTerraform(struct!.readUnitsPerSecond),
        write_units_per_second: cdktn.numberToTerraform(struct!.writeUnitsPerSecond),
    }
}


export function ccGlobalTableWarmThroughputPropertyToHclTerraform(struct?: CcGlobalTable.WarmThroughputProperty | cdktn.IResolvable): any {
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


export function ccGlobalTableWriteOnDemandThroughputSettingsPropertyToTerraform(struct?: CcGlobalTable.WriteOnDemandThroughputSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_write_request_units: cdktn.numberToTerraform(struct!.maxWriteRequestUnits),
    }
}


export function ccGlobalTableWriteOnDemandThroughputSettingsPropertyToHclTerraform(struct?: CcGlobalTable.WriteOnDemandThroughputSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccGlobalTableTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct?: CcGlobalTable.TargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
        scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
        scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccGlobalTableTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct?: CcGlobalTable.TargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disable_scale_in: {
            value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        scale_in_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_out_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
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


export function ccGlobalTableCapacityAutoScalingSettingsPropertyToTerraform(struct?: CcGlobalTable.CapacityAutoScalingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
        min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
        seed_capacity: cdktn.numberToTerraform(struct!.seedCapacity),
        target_tracking_scaling_policy_configuration: ccGlobalTableTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
    }
}


export function ccGlobalTableCapacityAutoScalingSettingsPropertyToHclTerraform(struct?: CcGlobalTable.CapacityAutoScalingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_capacity: {
            value: cdktn.numberToHclTerraform(struct!.maxCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_capacity: {
            value: cdktn.numberToHclTerraform(struct!.minCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        seed_capacity: {
            value: cdktn.numberToHclTerraform(struct!.seedCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_tracking_scaling_policy_configuration: {
            value: ccGlobalTableTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetTrackingScalingPolicyConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableWriteProvisionedThroughputSettingsPropertyToTerraform(struct?: CcGlobalTable.WriteProvisionedThroughputSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        write_capacity_auto_scaling_settings: ccGlobalTableCapacityAutoScalingSettingsPropertyToTerraform(struct!.writeCapacityAutoScalingSettings),
    }
}


export function ccGlobalTableWriteProvisionedThroughputSettingsPropertyToHclTerraform(struct?: CcGlobalTable.WriteProvisionedThroughputSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        write_capacity_auto_scaling_settings: {
            value: ccGlobalTableCapacityAutoScalingSettingsPropertyToHclTerraform(struct!.writeCapacityAutoScalingSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityAutoScalingSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableGlobalSecondaryIndexPropertyToTerraform(struct?: CcGlobalTable.GlobalSecondaryIndexProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        index_name: cdktn.stringToTerraform(struct!.indexName),
        key_schema: cdktn.listMapper(ccGlobalTableKeySchemaPropertyToTerraform, false)(struct!.keySchema),
        projection: ccGlobalTableProjectionPropertyToTerraform(struct!.projection),
        read_on_demand_throughput_settings: ccGlobalTableReadOnDemandThroughputSettingsPropertyToTerraform(struct!.readOnDemandThroughputSettings),
        read_provisioned_throughput_settings: ccGlobalTableGlobalReadProvisionedThroughputSettingsPropertyToTerraform(struct!.readProvisionedThroughputSettings),
        warm_throughput: ccGlobalTableWarmThroughputPropertyToTerraform(struct!.warmThroughput),
        write_on_demand_throughput_settings: ccGlobalTableWriteOnDemandThroughputSettingsPropertyToTerraform(struct!.writeOnDemandThroughputSettings),
        write_provisioned_throughput_settings: ccGlobalTableWriteProvisionedThroughputSettingsPropertyToTerraform(struct!.writeProvisionedThroughputSettings),
    }
}


export function ccGlobalTableGlobalSecondaryIndexPropertyToHclTerraform(struct?: CcGlobalTable.GlobalSecondaryIndexProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccGlobalTableKeySchemaPropertyToHclTerraform, false)(struct!.keySchema),
            isBlock: true,
            type: "list",
            storageClassType: "KeySchemaPropertyList",
        },
        projection: {
            value: ccGlobalTableProjectionPropertyToHclTerraform(struct!.projection),
            isBlock: true,
            type: "struct",
            storageClassType: "ProjectionProperty",
        },
        read_on_demand_throughput_settings: {
            value: ccGlobalTableReadOnDemandThroughputSettingsPropertyToHclTerraform(struct!.readOnDemandThroughputSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "ReadOnDemandThroughputSettingsProperty",
        },
        read_provisioned_throughput_settings: {
            value: ccGlobalTableGlobalReadProvisionedThroughputSettingsPropertyToHclTerraform(struct!.readProvisionedThroughputSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "GlobalReadProvisionedThroughputSettingsProperty",
        },
        warm_throughput: {
            value: ccGlobalTableWarmThroughputPropertyToHclTerraform(struct!.warmThroughput),
            isBlock: true,
            type: "struct",
            storageClassType: "WarmThroughputProperty",
        },
        write_on_demand_throughput_settings: {
            value: ccGlobalTableWriteOnDemandThroughputSettingsPropertyToHclTerraform(struct!.writeOnDemandThroughputSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "WriteOnDemandThroughputSettingsProperty",
        },
        write_provisioned_throughput_settings: {
            value: ccGlobalTableWriteProvisionedThroughputSettingsPropertyToHclTerraform(struct!.writeProvisionedThroughputSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "WriteProvisionedThroughputSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableGlobalTableWitnessPropertyToTerraform(struct?: CcGlobalTable.GlobalTableWitnessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccGlobalTableGlobalTableWitnessPropertyToHclTerraform(struct?: CcGlobalTable.GlobalTableWitnessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableKeySchemaProperty2ToTerraform(struct?: CcGlobalTable.KeySchemaProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_name: cdktn.stringToTerraform(struct!.attributeName),
        key_type: cdktn.stringToTerraform(struct!.keyType),
    }
}


export function ccGlobalTableKeySchemaProperty2ToHclTerraform(struct?: CcGlobalTable.KeySchemaProperty2 | cdktn.IResolvable): any {
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


export function ccGlobalTableLocalSecondaryIndexesKeySchemaPropertyToTerraform(struct?: CcGlobalTable.LocalSecondaryIndexesKeySchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_name: cdktn.stringToTerraform(struct!.attributeName),
        key_type: cdktn.stringToTerraform(struct!.keyType),
    }
}


export function ccGlobalTableLocalSecondaryIndexesKeySchemaPropertyToHclTerraform(struct?: CcGlobalTable.LocalSecondaryIndexesKeySchemaProperty | cdktn.IResolvable): any {
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


export function ccGlobalTableLocalSecondaryIndexesProjectionPropertyToTerraform(struct?: CcGlobalTable.LocalSecondaryIndexesProjectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        non_key_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nonKeyAttributes),
        projection_type: cdktn.stringToTerraform(struct!.projectionType),
    }
}


export function ccGlobalTableLocalSecondaryIndexesProjectionPropertyToHclTerraform(struct?: CcGlobalTable.LocalSecondaryIndexesProjectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        non_key_attributes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nonKeyAttributes),
            isBlock: false,
            type: "set",
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


export function ccGlobalTableLocalSecondaryIndexPropertyToTerraform(struct?: CcGlobalTable.LocalSecondaryIndexProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        index_name: cdktn.stringToTerraform(struct!.indexName),
        key_schema: cdktn.listMapper(ccGlobalTableLocalSecondaryIndexesKeySchemaPropertyToTerraform, false)(struct!.keySchema),
        projection: ccGlobalTableLocalSecondaryIndexesProjectionPropertyToTerraform(struct!.projection),
    }
}


export function ccGlobalTableLocalSecondaryIndexPropertyToHclTerraform(struct?: CcGlobalTable.LocalSecondaryIndexProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccGlobalTableLocalSecondaryIndexesKeySchemaPropertyToHclTerraform, false)(struct!.keySchema),
            isBlock: true,
            type: "list",
            storageClassType: "LocalSecondaryIndexesKeySchemaPropertyList",
        },
        projection: {
            value: ccGlobalTableLocalSecondaryIndexesProjectionPropertyToHclTerraform(struct!.projection),
            isBlock: true,
            type: "struct",
            storageClassType: "LocalSecondaryIndexesProjectionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableReadOnDemandThroughputSettingsProperty2ToTerraform(struct?: CcGlobalTable.ReadOnDemandThroughputSettingsProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_read_request_units: cdktn.numberToTerraform(struct!.maxReadRequestUnits),
    }
}


export function ccGlobalTableReadOnDemandThroughputSettingsProperty2ToHclTerraform(struct?: CcGlobalTable.ReadOnDemandThroughputSettingsProperty2 | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableReadProvisionedThroughputSettingsPropertyToTerraform(struct?: CcGlobalTable.ReadProvisionedThroughputSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
    }
}


export function ccGlobalTableReadProvisionedThroughputSettingsPropertyToHclTerraform(struct?: CcGlobalTable.ReadProvisionedThroughputSettingsProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableContributorInsightsSpecificationPropertyToTerraform(struct?: CcGlobalTable.ContributorInsightsSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccGlobalTableContributorInsightsSpecificationPropertyToHclTerraform(struct?: CcGlobalTable.ContributorInsightsSpecificationProperty | cdktn.IResolvable): any {
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


export function ccGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationPropertyToTerraform(struct?: CcGlobalTable.ReplicasGlobalSecondaryIndexesContributorInsightsSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationPropertyToHclTerraform(struct?: CcGlobalTable.ReplicasGlobalSecondaryIndexesContributorInsightsSpecificationProperty | cdktn.IResolvable): any {
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


export function ccGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsPropertyToTerraform(struct?: CcGlobalTable.ReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_read_request_units: cdktn.numberToTerraform(struct!.maxReadRequestUnits),
    }
}


export function ccGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsPropertyToHclTerraform(struct?: CcGlobalTable.ReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct?: CcGlobalTable.ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
        scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
        scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct?: CcGlobalTable.ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disable_scale_in: {
            value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        scale_in_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_out_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
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


export function ccGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsPropertyToTerraform(struct?: CcGlobalTable.ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
        min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
        seed_capacity: cdktn.numberToTerraform(struct!.seedCapacity),
        target_tracking_scaling_policy_configuration: ccGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
    }
}


export function ccGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsPropertyToHclTerraform(struct?: CcGlobalTable.ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_capacity: {
            value: cdktn.numberToHclTerraform(struct!.maxCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_capacity: {
            value: cdktn.numberToHclTerraform(struct!.minCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        seed_capacity: {
            value: cdktn.numberToHclTerraform(struct!.seedCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_tracking_scaling_policy_configuration: {
            value: ccGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableReadProvisionedThroughputSettingsProperty2ToTerraform(struct?: CcGlobalTable.ReadProvisionedThroughputSettingsProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_capacity_auto_scaling_settings: ccGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsPropertyToTerraform(struct!.readCapacityAutoScalingSettings),
        read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
    }
}


export function ccGlobalTableReadProvisionedThroughputSettingsProperty2ToHclTerraform(struct?: CcGlobalTable.ReadProvisionedThroughputSettingsProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        read_capacity_auto_scaling_settings: {
            value: ccGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsPropertyToHclTerraform(struct!.readCapacityAutoScalingSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty",
        },
        read_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableReplicaGlobalSecondaryIndexSpecificationPropertyToTerraform(struct?: CcGlobalTable.ReplicaGlobalSecondaryIndexSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contributor_insights_specification: ccGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationPropertyToTerraform(struct!.contributorInsightsSpecification),
        index_name: cdktn.stringToTerraform(struct!.indexName),
        read_on_demand_throughput_settings: ccGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsPropertyToTerraform(struct!.readOnDemandThroughputSettings),
        read_provisioned_throughput_settings: ccGlobalTableReadProvisionedThroughputSettingsProperty2ToTerraform(struct!.readProvisionedThroughputSettings),
    }
}


export function ccGlobalTableReplicaGlobalSecondaryIndexSpecificationPropertyToHclTerraform(struct?: CcGlobalTable.ReplicaGlobalSecondaryIndexSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contributor_insights_specification: {
            value: ccGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationPropertyToHclTerraform(struct!.contributorInsightsSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicasGlobalSecondaryIndexesContributorInsightsSpecificationProperty",
        },
        index_name: {
            value: cdktn.stringToHclTerraform(struct!.indexName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        read_on_demand_throughput_settings: {
            value: ccGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsPropertyToHclTerraform(struct!.readOnDemandThroughputSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsProperty",
        },
        read_provisioned_throughput_settings: {
            value: ccGlobalTableReadProvisionedThroughputSettingsProperty2ToHclTerraform(struct!.readProvisionedThroughputSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "ReadProvisionedThroughputSettingsProperty2",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableKinesisStreamSpecificationPropertyToTerraform(struct?: CcGlobalTable.KinesisStreamSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        approximate_creation_date_time_precision: cdktn.stringToTerraform(struct!.approximateCreationDateTimePrecision),
        stream_arn: cdktn.stringToTerraform(struct!.streamArn),
    }
}


export function ccGlobalTableKinesisStreamSpecificationPropertyToHclTerraform(struct?: CcGlobalTable.KinesisStreamSpecificationProperty | cdktn.IResolvable): any {
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


export function ccGlobalTablePointInTimeRecoverySpecificationPropertyToTerraform(struct?: CcGlobalTable.PointInTimeRecoverySpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        point_in_time_recovery_enabled: cdktn.booleanToTerraform(struct!.pointInTimeRecoveryEnabled),
        recovery_period_in_days: cdktn.numberToTerraform(struct!.recoveryPeriodInDays),
    }
}


export function ccGlobalTablePointInTimeRecoverySpecificationPropertyToHclTerraform(struct?: CcGlobalTable.PointInTimeRecoverySpecificationProperty | cdktn.IResolvable): any {
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


export function ccGlobalTableReplicasReadOnDemandThroughputSettingsPropertyToTerraform(struct?: CcGlobalTable.ReplicasReadOnDemandThroughputSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_read_request_units: cdktn.numberToTerraform(struct!.maxReadRequestUnits),
    }
}


export function ccGlobalTableReplicasReadOnDemandThroughputSettingsPropertyToHclTerraform(struct?: CcGlobalTable.ReplicasReadOnDemandThroughputSettingsProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct?: CcGlobalTable.ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
        scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
        scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct?: CcGlobalTable.ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disable_scale_in: {
            value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        scale_in_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_out_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
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


export function ccGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsPropertyToTerraform(struct?: CcGlobalTable.ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
        min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
        seed_capacity: cdktn.numberToTerraform(struct!.seedCapacity),
        target_tracking_scaling_policy_configuration: ccGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
    }
}


export function ccGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsPropertyToHclTerraform(struct?: CcGlobalTable.ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_capacity: {
            value: cdktn.numberToHclTerraform(struct!.maxCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_capacity: {
            value: cdktn.numberToHclTerraform(struct!.minCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        seed_capacity: {
            value: cdktn.numberToHclTerraform(struct!.seedCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_tracking_scaling_policy_configuration: {
            value: ccGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableReplicasReadProvisionedThroughputSettingsPropertyToTerraform(struct?: CcGlobalTable.ReplicasReadProvisionedThroughputSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_capacity_auto_scaling_settings: ccGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsPropertyToTerraform(struct!.readCapacityAutoScalingSettings),
        read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
    }
}


export function ccGlobalTableReplicasReadProvisionedThroughputSettingsPropertyToHclTerraform(struct?: CcGlobalTable.ReplicasReadProvisionedThroughputSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        read_capacity_auto_scaling_settings: {
            value: ccGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsPropertyToHclTerraform(struct!.readCapacityAutoScalingSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty",
        },
        read_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableResourcePolicyPropertyToTerraform(struct?: CcGlobalTable.ResourcePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_document: cdktn.stringToTerraform(struct!.policyDocument),
    }
}


export function ccGlobalTableResourcePolicyPropertyToHclTerraform(struct?: CcGlobalTable.ResourcePolicyProperty | cdktn.IResolvable): any {
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


export function ccGlobalTableTagPropertyToTerraform(struct?: CcGlobalTable.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccGlobalTableTagPropertyToHclTerraform(struct?: CcGlobalTable.TagProperty | cdktn.IResolvable): any {
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


export function ccGlobalTableReplicaStreamSpecificationPropertyToTerraform(struct?: CcGlobalTable.ReplicaStreamSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_policy: ccGlobalTableResourcePolicyPropertyToTerraform(struct!.resourcePolicy),
        tags: cdktn.listMapper(ccGlobalTableTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccGlobalTableReplicaStreamSpecificationPropertyToHclTerraform(struct?: CcGlobalTable.ReplicaStreamSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_policy: {
            value: ccGlobalTableResourcePolicyPropertyToHclTerraform(struct!.resourcePolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "ResourcePolicyProperty",
        },
        tags: {
            value: cdktn.listMapperHcl(ccGlobalTableTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "set",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableReplicasResourcePolicyPropertyToTerraform(struct?: CcGlobalTable.ReplicasResourcePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_document: cdktn.stringToTerraform(struct!.policyDocument),
    }
}


export function ccGlobalTableReplicasResourcePolicyPropertyToHclTerraform(struct?: CcGlobalTable.ReplicasResourcePolicyProperty | cdktn.IResolvable): any {
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


export function ccGlobalTableReplicaSSESpecificationPropertyToTerraform(struct?: CcGlobalTable.ReplicaSSESpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_master_key_id: cdktn.stringToTerraform(struct!.kmsMasterKeyId),
    }
}


export function ccGlobalTableReplicaSSESpecificationPropertyToHclTerraform(struct?: CcGlobalTable.ReplicaSSESpecificationProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableTagsPropertyToTerraform(struct?: CcGlobalTable.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccGlobalTableTagsPropertyToHclTerraform(struct?: CcGlobalTable.TagsProperty | cdktn.IResolvable): any {
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


export function ccGlobalTableReplicaSpecificationPropertyToTerraform(struct?: CcGlobalTable.ReplicaSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contributor_insights_specification: ccGlobalTableContributorInsightsSpecificationPropertyToTerraform(struct!.contributorInsightsSpecification),
        deletion_protection_enabled: cdktn.booleanToTerraform(struct!.deletionProtectionEnabled),
        global_secondary_indexes: cdktn.listMapper(ccGlobalTableReplicaGlobalSecondaryIndexSpecificationPropertyToTerraform, false)(struct!.globalSecondaryIndexes),
        global_table_settings_replication_mode: cdktn.stringToTerraform(struct!.globalTableSettingsReplicationMode),
        kinesis_stream_specification: ccGlobalTableKinesisStreamSpecificationPropertyToTerraform(struct!.kinesisStreamSpecification),
        point_in_time_recovery_specification: ccGlobalTablePointInTimeRecoverySpecificationPropertyToTerraform(struct!.pointInTimeRecoverySpecification),
        read_on_demand_throughput_settings: ccGlobalTableReplicasReadOnDemandThroughputSettingsPropertyToTerraform(struct!.readOnDemandThroughputSettings),
        read_provisioned_throughput_settings: ccGlobalTableReplicasReadProvisionedThroughputSettingsPropertyToTerraform(struct!.readProvisionedThroughputSettings),
        region: cdktn.stringToTerraform(struct!.region),
        replica_stream_specification: ccGlobalTableReplicaStreamSpecificationPropertyToTerraform(struct!.replicaStreamSpecification),
        resource_policy: ccGlobalTableReplicasResourcePolicyPropertyToTerraform(struct!.resourcePolicy),
        sse_specification: ccGlobalTableReplicaSSESpecificationPropertyToTerraform(struct!.sseSpecification),
        table_class: cdktn.stringToTerraform(struct!.tableClass),
        tags: cdktn.listMapper(ccGlobalTableTagsPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccGlobalTableReplicaSpecificationPropertyToHclTerraform(struct?: CcGlobalTable.ReplicaSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contributor_insights_specification: {
            value: ccGlobalTableContributorInsightsSpecificationPropertyToHclTerraform(struct!.contributorInsightsSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "ContributorInsightsSpecificationProperty",
        },
        deletion_protection_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.deletionProtectionEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        global_secondary_indexes: {
            value: cdktn.listMapperHcl(ccGlobalTableReplicaGlobalSecondaryIndexSpecificationPropertyToHclTerraform, false)(struct!.globalSecondaryIndexes),
            isBlock: true,
            type: "set",
            storageClassType: "ReplicaGlobalSecondaryIndexSpecificationPropertyList",
        },
        global_table_settings_replication_mode: {
            value: cdktn.stringToHclTerraform(struct!.globalTableSettingsReplicationMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kinesis_stream_specification: {
            value: ccGlobalTableKinesisStreamSpecificationPropertyToHclTerraform(struct!.kinesisStreamSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisStreamSpecificationProperty",
        },
        point_in_time_recovery_specification: {
            value: ccGlobalTablePointInTimeRecoverySpecificationPropertyToHclTerraform(struct!.pointInTimeRecoverySpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PointInTimeRecoverySpecificationProperty",
        },
        read_on_demand_throughput_settings: {
            value: ccGlobalTableReplicasReadOnDemandThroughputSettingsPropertyToHclTerraform(struct!.readOnDemandThroughputSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicasReadOnDemandThroughputSettingsProperty",
        },
        read_provisioned_throughput_settings: {
            value: ccGlobalTableReplicasReadProvisionedThroughputSettingsPropertyToHclTerraform(struct!.readProvisionedThroughputSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicasReadProvisionedThroughputSettingsProperty",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        replica_stream_specification: {
            value: ccGlobalTableReplicaStreamSpecificationPropertyToHclTerraform(struct!.replicaStreamSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicaStreamSpecificationProperty",
        },
        resource_policy: {
            value: ccGlobalTableReplicasResourcePolicyPropertyToHclTerraform(struct!.resourcePolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicasResourcePolicyProperty",
        },
        sse_specification: {
            value: ccGlobalTableReplicaSSESpecificationPropertyToHclTerraform(struct!.sseSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicaSSESpecificationProperty",
        },
        table_class: {
            value: cdktn.stringToHclTerraform(struct!.tableClass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(ccGlobalTableTagsPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "set",
            storageClassType: "TagsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableSSESpecificationPropertyToTerraform(struct?: CcGlobalTable.SSESpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sse_enabled: cdktn.booleanToTerraform(struct!.sseEnabled),
        sse_type: cdktn.stringToTerraform(struct!.sseType),
    }
}


export function ccGlobalTableSSESpecificationPropertyToHclTerraform(struct?: CcGlobalTable.SSESpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccGlobalTableStreamSpecificationPropertyToTerraform(struct?: CcGlobalTable.StreamSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        stream_view_type: cdktn.stringToTerraform(struct!.streamViewType),
    }
}


export function ccGlobalTableStreamSpecificationPropertyToHclTerraform(struct?: CcGlobalTable.StreamSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        stream_view_type: {
            value: cdktn.stringToHclTerraform(struct!.streamViewType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableTimeToLiveSpecificationPropertyToTerraform(struct?: CcGlobalTable.TimeToLiveSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_name: cdktn.stringToTerraform(struct!.attributeName),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccGlobalTableTimeToLiveSpecificationPropertyToHclTerraform(struct?: CcGlobalTable.TimeToLiveSpecificationProperty | cdktn.IResolvable): any {
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


export function ccGlobalTableWarmThroughputProperty2ToTerraform(struct?: CcGlobalTable.WarmThroughputProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_units_per_second: cdktn.numberToTerraform(struct!.readUnitsPerSecond),
        write_units_per_second: cdktn.numberToTerraform(struct!.writeUnitsPerSecond),
    }
}


export function ccGlobalTableWarmThroughputProperty2ToHclTerraform(struct?: CcGlobalTable.WarmThroughputProperty2 | cdktn.IResolvable): any {
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


export function ccGlobalTableWriteOnDemandThroughputSettingsProperty2ToTerraform(struct?: CcGlobalTable.WriteOnDemandThroughputSettingsProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_write_request_units: cdktn.numberToTerraform(struct!.maxWriteRequestUnits),
    }
}


export function ccGlobalTableWriteOnDemandThroughputSettingsProperty2ToHclTerraform(struct?: CcGlobalTable.WriteOnDemandThroughputSettingsProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct?: CcGlobalTable.WriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
        scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
        scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct?: CcGlobalTable.WriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disable_scale_in: {
            value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        scale_in_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_out_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
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


export function ccGlobalTableWriteCapacityAutoScalingSettingsPropertyToTerraform(struct?: CcGlobalTable.WriteCapacityAutoScalingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
        min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
        seed_capacity: cdktn.numberToTerraform(struct!.seedCapacity),
        target_tracking_scaling_policy_configuration: ccGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
    }
}


export function ccGlobalTableWriteCapacityAutoScalingSettingsPropertyToHclTerraform(struct?: CcGlobalTable.WriteCapacityAutoScalingSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_capacity: {
            value: cdktn.numberToHclTerraform(struct!.maxCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_capacity: {
            value: cdktn.numberToHclTerraform(struct!.minCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        seed_capacity: {
            value: cdktn.numberToHclTerraform(struct!.seedCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_tracking_scaling_policy_configuration: {
            value: ccGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGlobalTableWriteProvisionedThroughputSettingsProperty2ToTerraform(struct?: CcGlobalTable.WriteProvisionedThroughputSettingsProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        write_capacity_auto_scaling_settings: ccGlobalTableWriteCapacityAutoScalingSettingsPropertyToTerraform(struct!.writeCapacityAutoScalingSettings),
    }
}


export function ccGlobalTableWriteProvisionedThroughputSettingsProperty2ToHclTerraform(struct?: CcGlobalTable.WriteProvisionedThroughputSettingsProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        write_capacity_auto_scaling_settings: {
            value: ccGlobalTableWriteCapacityAutoScalingSettingsPropertyToHclTerraform(struct!.writeCapacityAutoScalingSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "WriteCapacityAutoScalingSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcGlobalTable {
export interface AttributeDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#attribute_name CcGlobalTable#attribute_name}
    */
    readonly attributeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#attribute_type CcGlobalTable#attribute_type}
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
export interface KeySchemaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#attribute_name CcGlobalTable#attribute_name}
    */
    readonly attributeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#key_type CcGlobalTable#key_type}
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
export interface ProjectionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#non_key_attributes CcGlobalTable#non_key_attributes}
    */
    readonly nonKeyAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#projection_type CcGlobalTable#projection_type}
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
        return cdktn.Fn.tolist(this.getListAttribute('non_key_attributes'));
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
export interface ReadOnDemandThroughputSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#max_read_request_units CcGlobalTable#max_read_request_units}
    */
    readonly maxReadRequestUnits?: number;
}
export class ReadOnDemandThroughputSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReadOnDemandThroughputSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxReadRequestUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxReadRequestUnits = this._maxReadRequestUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReadOnDemandThroughputSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxReadRequestUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxReadRequestUnits = value.maxReadRequestUnits;
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
}
export interface GlobalReadProvisionedThroughputSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_capacity_units CcGlobalTable#read_capacity_units}
    */
    readonly readCapacityUnits?: number;
}
export class GlobalReadProvisionedThroughputSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlobalReadProvisionedThroughputSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.readCapacityUnits = this._readCapacityUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlobalReadProvisionedThroughputSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readCapacityUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readCapacityUnits = value.readCapacityUnits;
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
}
export interface WarmThroughputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_units_per_second CcGlobalTable#read_units_per_second}
    */
    readonly readUnitsPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#write_units_per_second CcGlobalTable#write_units_per_second}
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
export interface WriteOnDemandThroughputSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#max_write_request_units CcGlobalTable#max_write_request_units}
    */
    readonly maxWriteRequestUnits?: number;
}
export class WriteOnDemandThroughputSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WriteOnDemandThroughputSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxWriteRequestUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxWriteRequestUnits = this._maxWriteRequestUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WriteOnDemandThroughputSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxWriteRequestUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxWriteRequestUnits = value.maxWriteRequestUnits;
        }
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
export interface TargetTrackingScalingPolicyConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#disable_scale_in CcGlobalTable#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#scale_in_cooldown CcGlobalTable#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#scale_out_cooldown CcGlobalTable#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#target_value CcGlobalTable#target_value}
    */
    readonly targetValue?: number;
}
export class TargetTrackingScalingPolicyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disableScaleIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._scaleInCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInCooldown = this._scaleInCooldown;
        }
        if (this._scaleOutCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disableScaleIn = undefined;
            this._scaleInCooldown = undefined;
            this._scaleOutCooldown = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableScaleIn = value.disableScaleIn;
            this._scaleInCooldown = value.scaleInCooldown;
            this._scaleOutCooldown = value.scaleOutCooldown;
            this._targetValue = value.targetValue;
        }
    }

    // disable_scale_in - computed: true, optional: true, required: false
    private _disableScaleIn?: boolean | cdktn.IResolvable; 
    public get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    public set disableScaleIn(value: boolean | cdktn.IResolvable) {
        this._disableScaleIn = value;
    }
    public resetDisableScaleIn() {
        this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableScaleInInput() {
        return this._disableScaleIn;
    }

    // scale_in_cooldown - computed: true, optional: true, required: false
    private _scaleInCooldown?: number; 
    public get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    public set scaleInCooldown(value: number) {
        this._scaleInCooldown = value;
    }
    public resetScaleInCooldown() {
        this._scaleInCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInCooldownInput() {
        return this._scaleInCooldown;
    }

    // scale_out_cooldown - computed: true, optional: true, required: false
    private _scaleOutCooldown?: number; 
    public get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    public set scaleOutCooldown(value: number) {
        this._scaleOutCooldown = value;
    }
    public resetScaleOutCooldown() {
        this._scaleOutCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutCooldownInput() {
        return this._scaleOutCooldown;
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
export interface CapacityAutoScalingSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#max_capacity CcGlobalTable#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#min_capacity CcGlobalTable#min_capacity}
    */
    readonly minCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#seed_capacity CcGlobalTable#seed_capacity}
    */
    readonly seedCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#target_tracking_scaling_policy_configuration CcGlobalTable#target_tracking_scaling_policy_configuration}
    */
    readonly targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfigurationProperty;
}
export class CapacityAutoScalingSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityAutoScalingSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._minCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.minCapacity = this._minCapacity;
        }
        if (this._seedCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.seedCapacity = this._seedCapacity;
        }
        if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityAutoScalingSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
            this._seedCapacity = undefined;
            this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxCapacity = value.maxCapacity;
            this._minCapacity = value.minCapacity;
            this._seedCapacity = value.seedCapacity;
            this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
        }
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

    // min_capacity - computed: true, optional: true, required: false
    private _minCapacity?: number; 
    public get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    public set minCapacity(value: number) {
        this._minCapacity = value;
    }
    public resetMinCapacity() {
        this._minCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityInput() {
        return this._minCapacity;
    }

    // seed_capacity - computed: true, optional: true, required: false
    private _seedCapacity?: number; 
    public get seedCapacity() {
        return this.getNumberAttribute('seed_capacity');
    }
    public set seedCapacity(value: number) {
        this._seedCapacity = value;
    }
    public resetSeedCapacity() {
        this._seedCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get seedCapacityInput() {
        return this._seedCapacity;
    }

    // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
    private _targetTrackingScalingPolicyConfiguration = new TargetTrackingScalingPolicyConfigurationPropertyOutputReference(this, "target_tracking_scaling_policy_configuration");
    public get targetTrackingScalingPolicyConfiguration() {
        return this._targetTrackingScalingPolicyConfiguration;
    }
    public putTargetTrackingScalingPolicyConfiguration(value: TargetTrackingScalingPolicyConfigurationProperty) {
        this._targetTrackingScalingPolicyConfiguration.internalValue = value;
    }
    public resetTargetTrackingScalingPolicyConfiguration() {
        this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingScalingPolicyConfigurationInput() {
        return this._targetTrackingScalingPolicyConfiguration.internalValue;
    }
}
export interface WriteProvisionedThroughputSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#write_capacity_auto_scaling_settings CcGlobalTable#write_capacity_auto_scaling_settings}
    */
    readonly writeCapacityAutoScalingSettings?: CapacityAutoScalingSettingsProperty;
}
export class WriteProvisionedThroughputSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WriteProvisionedThroughputSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._writeCapacityAutoScalingSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeCapacityAutoScalingSettings = this._writeCapacityAutoScalingSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WriteProvisionedThroughputSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._writeCapacityAutoScalingSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._writeCapacityAutoScalingSettings.internalValue = value.writeCapacityAutoScalingSettings;
        }
    }

    // write_capacity_auto_scaling_settings - computed: true, optional: true, required: false
    private _writeCapacityAutoScalingSettings = new CapacityAutoScalingSettingsPropertyOutputReference(this, "write_capacity_auto_scaling_settings");
    public get writeCapacityAutoScalingSettings() {
        return this._writeCapacityAutoScalingSettings;
    }
    public putWriteCapacityAutoScalingSettings(value: CapacityAutoScalingSettingsProperty) {
        this._writeCapacityAutoScalingSettings.internalValue = value;
    }
    public resetWriteCapacityAutoScalingSettings() {
        this._writeCapacityAutoScalingSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeCapacityAutoScalingSettingsInput() {
        return this._writeCapacityAutoScalingSettings.internalValue;
    }
}
export interface GlobalSecondaryIndexProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#index_name CcGlobalTable#index_name}
    */
    readonly indexName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#key_schema CcGlobalTable#key_schema}
    */
    readonly keySchema?: KeySchemaProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#projection CcGlobalTable#projection}
    */
    readonly projection?: ProjectionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_on_demand_throughput_settings CcGlobalTable#read_on_demand_throughput_settings}
    */
    readonly readOnDemandThroughputSettings?: ReadOnDemandThroughputSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_provisioned_throughput_settings CcGlobalTable#read_provisioned_throughput_settings}
    */
    readonly readProvisionedThroughputSettings?: GlobalReadProvisionedThroughputSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#warm_throughput CcGlobalTable#warm_throughput}
    */
    readonly warmThroughput?: WarmThroughputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#write_on_demand_throughput_settings CcGlobalTable#write_on_demand_throughput_settings}
    */
    readonly writeOnDemandThroughputSettings?: WriteOnDemandThroughputSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#write_provisioned_throughput_settings CcGlobalTable#write_provisioned_throughput_settings}
    */
    readonly writeProvisionedThroughputSettings?: WriteProvisionedThroughputSettingsProperty;
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
        if (this._readOnDemandThroughputSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnDemandThroughputSettings = this._readOnDemandThroughputSettings?.internalValue;
        }
        if (this._readProvisionedThroughputSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.readProvisionedThroughputSettings = this._readProvisionedThroughputSettings?.internalValue;
        }
        if (this._warmThroughput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.warmThroughput = this._warmThroughput?.internalValue;
        }
        if (this._writeOnDemandThroughputSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeOnDemandThroughputSettings = this._writeOnDemandThroughputSettings?.internalValue;
        }
        if (this._writeProvisionedThroughputSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeProvisionedThroughputSettings = this._writeProvisionedThroughputSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlobalSecondaryIndexProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._indexName = undefined;
            this._keySchema.internalValue = undefined;
            this._projection.internalValue = undefined;
            this._readOnDemandThroughputSettings.internalValue = undefined;
            this._readProvisionedThroughputSettings.internalValue = undefined;
            this._warmThroughput.internalValue = undefined;
            this._writeOnDemandThroughputSettings.internalValue = undefined;
            this._writeProvisionedThroughputSettings.internalValue = undefined;
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
            this._readOnDemandThroughputSettings.internalValue = value.readOnDemandThroughputSettings;
            this._readProvisionedThroughputSettings.internalValue = value.readProvisionedThroughputSettings;
            this._warmThroughput.internalValue = value.warmThroughput;
            this._writeOnDemandThroughputSettings.internalValue = value.writeOnDemandThroughputSettings;
            this._writeProvisionedThroughputSettings.internalValue = value.writeProvisionedThroughputSettings;
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

    // read_on_demand_throughput_settings - computed: true, optional: true, required: false
    private _readOnDemandThroughputSettings = new ReadOnDemandThroughputSettingsPropertyOutputReference(this, "read_on_demand_throughput_settings");
    public get readOnDemandThroughputSettings() {
        return this._readOnDemandThroughputSettings;
    }
    public putReadOnDemandThroughputSettings(value: ReadOnDemandThroughputSettingsProperty) {
        this._readOnDemandThroughputSettings.internalValue = value;
    }
    public resetReadOnDemandThroughputSettings() {
        this._readOnDemandThroughputSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readOnDemandThroughputSettingsInput() {
        return this._readOnDemandThroughputSettings.internalValue;
    }

    // read_provisioned_throughput_settings - computed: true, optional: true, required: false
    private _readProvisionedThroughputSettings = new GlobalReadProvisionedThroughputSettingsPropertyOutputReference(this, "read_provisioned_throughput_settings");
    public get readProvisionedThroughputSettings() {
        return this._readProvisionedThroughputSettings;
    }
    public putReadProvisionedThroughputSettings(value: GlobalReadProvisionedThroughputSettingsProperty) {
        this._readProvisionedThroughputSettings.internalValue = value;
    }
    public resetReadProvisionedThroughputSettings() {
        this._readProvisionedThroughputSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readProvisionedThroughputSettingsInput() {
        return this._readProvisionedThroughputSettings.internalValue;
    }

    // warm_throughput - computed: true, optional: true, required: false
    private _warmThroughput = new WarmThroughputPropertyOutputReference(this, "warm_throughput");
    public get warmThroughput() {
        return this._warmThroughput;
    }
    public putWarmThroughput(value: WarmThroughputProperty) {
        this._warmThroughput.internalValue = value;
    }
    public resetWarmThroughput() {
        this._warmThroughput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmThroughputInput() {
        return this._warmThroughput.internalValue;
    }

    // write_on_demand_throughput_settings - computed: true, optional: true, required: false
    private _writeOnDemandThroughputSettings = new WriteOnDemandThroughputSettingsPropertyOutputReference(this, "write_on_demand_throughput_settings");
    public get writeOnDemandThroughputSettings() {
        return this._writeOnDemandThroughputSettings;
    }
    public putWriteOnDemandThroughputSettings(value: WriteOnDemandThroughputSettingsProperty) {
        this._writeOnDemandThroughputSettings.internalValue = value;
    }
    public resetWriteOnDemandThroughputSettings() {
        this._writeOnDemandThroughputSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeOnDemandThroughputSettingsInput() {
        return this._writeOnDemandThroughputSettings.internalValue;
    }

    // write_provisioned_throughput_settings - computed: true, optional: true, required: false
    private _writeProvisionedThroughputSettings = new WriteProvisionedThroughputSettingsPropertyOutputReference(this, "write_provisioned_throughput_settings");
    public get writeProvisionedThroughputSettings() {
        return this._writeProvisionedThroughputSettings;
    }
    public putWriteProvisionedThroughputSettings(value: WriteProvisionedThroughputSettingsProperty) {
        this._writeProvisionedThroughputSettings.internalValue = value;
    }
    public resetWriteProvisionedThroughputSettings() {
        this._writeProvisionedThroughputSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeProvisionedThroughputSettingsInput() {
        return this._writeProvisionedThroughputSettings.internalValue;
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
export interface GlobalTableWitnessProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#region CcGlobalTable#region}
    */
    readonly region?: string;
}
export class GlobalTableWitnessPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GlobalTableWitnessProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlobalTableWitnessProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._region = value.region;
        }
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }
}

export class GlobalTableWitnessPropertyList extends cdktn.ComplexList {
    public internalValue? : GlobalTableWitnessProperty[] | cdktn.IResolvable

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
    public get(index: number): GlobalTableWitnessPropertyOutputReference {
        return new GlobalTableWitnessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KeySchemaProperty2 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#attribute_name CcGlobalTable#attribute_name}
    */
    readonly attributeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#key_type CcGlobalTable#key_type}
    */
    readonly keyType?: string;
}
export class KeySchemaProperty2OutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KeySchemaProperty2 | cdktn.IResolvable | undefined {
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

    public set internalValue(value: KeySchemaProperty2 | cdktn.IResolvable | undefined) {
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

export class KeySchemaProperty2List extends cdktn.ComplexList {
    public internalValue? : KeySchemaProperty2[] | cdktn.IResolvable

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
    public get(index: number): KeySchemaProperty2OutputReference {
        return new KeySchemaProperty2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LocalSecondaryIndexesKeySchemaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#attribute_name CcGlobalTable#attribute_name}
    */
    readonly attributeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#key_type CcGlobalTable#key_type}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#non_key_attributes CcGlobalTable#non_key_attributes}
    */
    readonly nonKeyAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#projection_type CcGlobalTable#projection_type}
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
        return cdktn.Fn.tolist(this.getListAttribute('non_key_attributes'));
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#index_name CcGlobalTable#index_name}
    */
    readonly indexName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#key_schema CcGlobalTable#key_schema}
    */
    readonly keySchema?: LocalSecondaryIndexesKeySchemaProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#projection CcGlobalTable#projection}
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
export interface ReadOnDemandThroughputSettingsProperty2 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#max_read_request_units CcGlobalTable#max_read_request_units}
    */
    readonly maxReadRequestUnits?: number;
}
export class ReadOnDemandThroughputSettingsProperty2OutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReadOnDemandThroughputSettingsProperty2 | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxReadRequestUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxReadRequestUnits = this._maxReadRequestUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReadOnDemandThroughputSettingsProperty2 | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxReadRequestUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxReadRequestUnits = value.maxReadRequestUnits;
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
}
export interface ReadProvisionedThroughputSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_capacity_units CcGlobalTable#read_capacity_units}
    */
    readonly readCapacityUnits?: number;
}
export class ReadProvisionedThroughputSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReadProvisionedThroughputSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.readCapacityUnits = this._readCapacityUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReadProvisionedThroughputSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readCapacityUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readCapacityUnits = value.readCapacityUnits;
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
}
export interface ContributorInsightsSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#enabled CcGlobalTable#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#mode CcGlobalTable#mode}
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
export interface ReplicasGlobalSecondaryIndexesContributorInsightsSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#enabled CcGlobalTable#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#mode CcGlobalTable#mode}
    */
    readonly mode?: string;
}
export class ReplicasGlobalSecondaryIndexesContributorInsightsSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicasGlobalSecondaryIndexesContributorInsightsSpecificationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ReplicasGlobalSecondaryIndexesContributorInsightsSpecificationProperty | cdktn.IResolvable | undefined) {
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
export interface ReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#max_read_request_units CcGlobalTable#max_read_request_units}
    */
    readonly maxReadRequestUnits?: number;
}
export class ReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxReadRequestUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxReadRequestUnits = this._maxReadRequestUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxReadRequestUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxReadRequestUnits = value.maxReadRequestUnits;
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
}
export interface ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#disable_scale_in CcGlobalTable#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#scale_in_cooldown CcGlobalTable#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#scale_out_cooldown CcGlobalTable#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#target_value CcGlobalTable#target_value}
    */
    readonly targetValue?: number;
}
export class ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disableScaleIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._scaleInCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInCooldown = this._scaleInCooldown;
        }
        if (this._scaleOutCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disableScaleIn = undefined;
            this._scaleInCooldown = undefined;
            this._scaleOutCooldown = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableScaleIn = value.disableScaleIn;
            this._scaleInCooldown = value.scaleInCooldown;
            this._scaleOutCooldown = value.scaleOutCooldown;
            this._targetValue = value.targetValue;
        }
    }

    // disable_scale_in - computed: true, optional: true, required: false
    private _disableScaleIn?: boolean | cdktn.IResolvable; 
    public get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    public set disableScaleIn(value: boolean | cdktn.IResolvable) {
        this._disableScaleIn = value;
    }
    public resetDisableScaleIn() {
        this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableScaleInInput() {
        return this._disableScaleIn;
    }

    // scale_in_cooldown - computed: true, optional: true, required: false
    private _scaleInCooldown?: number; 
    public get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    public set scaleInCooldown(value: number) {
        this._scaleInCooldown = value;
    }
    public resetScaleInCooldown() {
        this._scaleInCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInCooldownInput() {
        return this._scaleInCooldown;
    }

    // scale_out_cooldown - computed: true, optional: true, required: false
    private _scaleOutCooldown?: number; 
    public get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    public set scaleOutCooldown(value: number) {
        this._scaleOutCooldown = value;
    }
    public resetScaleOutCooldown() {
        this._scaleOutCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutCooldownInput() {
        return this._scaleOutCooldown;
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
export interface ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#max_capacity CcGlobalTable#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#min_capacity CcGlobalTable#min_capacity}
    */
    readonly minCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#seed_capacity CcGlobalTable#seed_capacity}
    */
    readonly seedCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#target_tracking_scaling_policy_configuration CcGlobalTable#target_tracking_scaling_policy_configuration}
    */
    readonly targetTrackingScalingPolicyConfiguration?: ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty;
}
export class ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._minCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.minCapacity = this._minCapacity;
        }
        if (this._seedCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.seedCapacity = this._seedCapacity;
        }
        if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
            this._seedCapacity = undefined;
            this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxCapacity = value.maxCapacity;
            this._minCapacity = value.minCapacity;
            this._seedCapacity = value.seedCapacity;
            this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
        }
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

    // min_capacity - computed: true, optional: true, required: false
    private _minCapacity?: number; 
    public get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    public set minCapacity(value: number) {
        this._minCapacity = value;
    }
    public resetMinCapacity() {
        this._minCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityInput() {
        return this._minCapacity;
    }

    // seed_capacity - computed: true, optional: true, required: false
    private _seedCapacity?: number; 
    public get seedCapacity() {
        return this.getNumberAttribute('seed_capacity');
    }
    public set seedCapacity(value: number) {
        this._seedCapacity = value;
    }
    public resetSeedCapacity() {
        this._seedCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get seedCapacityInput() {
        return this._seedCapacity;
    }

    // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
    private _targetTrackingScalingPolicyConfiguration = new ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyOutputReference(this, "target_tracking_scaling_policy_configuration");
    public get targetTrackingScalingPolicyConfiguration() {
        return this._targetTrackingScalingPolicyConfiguration;
    }
    public putTargetTrackingScalingPolicyConfiguration(value: ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty) {
        this._targetTrackingScalingPolicyConfiguration.internalValue = value;
    }
    public resetTargetTrackingScalingPolicyConfiguration() {
        this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingScalingPolicyConfigurationInput() {
        return this._targetTrackingScalingPolicyConfiguration.internalValue;
    }
}
export interface ReadProvisionedThroughputSettingsProperty2 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_capacity_auto_scaling_settings CcGlobalTable#read_capacity_auto_scaling_settings}
    */
    readonly readCapacityAutoScalingSettings?: ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_capacity_units CcGlobalTable#read_capacity_units}
    */
    readonly readCapacityUnits?: number;
}
export class ReadProvisionedThroughputSettingsProperty2OutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReadProvisionedThroughputSettingsProperty2 | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readCapacityAutoScalingSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.readCapacityAutoScalingSettings = this._readCapacityAutoScalingSettings?.internalValue;
        }
        if (this._readCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.readCapacityUnits = this._readCapacityUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReadProvisionedThroughputSettingsProperty2 | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readCapacityAutoScalingSettings.internalValue = undefined;
            this._readCapacityUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readCapacityAutoScalingSettings.internalValue = value.readCapacityAutoScalingSettings;
            this._readCapacityUnits = value.readCapacityUnits;
        }
    }

    // read_capacity_auto_scaling_settings - computed: true, optional: true, required: false
    private _readCapacityAutoScalingSettings = new ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsPropertyOutputReference(this, "read_capacity_auto_scaling_settings");
    public get readCapacityAutoScalingSettings() {
        return this._readCapacityAutoScalingSettings;
    }
    public putReadCapacityAutoScalingSettings(value: ReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty) {
        this._readCapacityAutoScalingSettings.internalValue = value;
    }
    public resetReadCapacityAutoScalingSettings() {
        this._readCapacityAutoScalingSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readCapacityAutoScalingSettingsInput() {
        return this._readCapacityAutoScalingSettings.internalValue;
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
}
export interface ReplicaGlobalSecondaryIndexSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#contributor_insights_specification CcGlobalTable#contributor_insights_specification}
    */
    readonly contributorInsightsSpecification?: ReplicasGlobalSecondaryIndexesContributorInsightsSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#index_name CcGlobalTable#index_name}
    */
    readonly indexName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_on_demand_throughput_settings CcGlobalTable#read_on_demand_throughput_settings}
    */
    readonly readOnDemandThroughputSettings?: ReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_provisioned_throughput_settings CcGlobalTable#read_provisioned_throughput_settings}
    */
    readonly readProvisionedThroughputSettings?: ReadProvisionedThroughputSettingsProperty2;
}
export class ReplicaGlobalSecondaryIndexSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReplicaGlobalSecondaryIndexSpecificationProperty | cdktn.IResolvable | undefined {
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
        if (this._readOnDemandThroughputSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnDemandThroughputSettings = this._readOnDemandThroughputSettings?.internalValue;
        }
        if (this._readProvisionedThroughputSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.readProvisionedThroughputSettings = this._readProvisionedThroughputSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicaGlobalSecondaryIndexSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contributorInsightsSpecification.internalValue = undefined;
            this._indexName = undefined;
            this._readOnDemandThroughputSettings.internalValue = undefined;
            this._readProvisionedThroughputSettings.internalValue = undefined;
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
            this._readOnDemandThroughputSettings.internalValue = value.readOnDemandThroughputSettings;
            this._readProvisionedThroughputSettings.internalValue = value.readProvisionedThroughputSettings;
        }
    }

    // contributor_insights_specification - computed: true, optional: true, required: false
    private _contributorInsightsSpecification = new ReplicasGlobalSecondaryIndexesContributorInsightsSpecificationPropertyOutputReference(this, "contributor_insights_specification");
    public get contributorInsightsSpecification() {
        return this._contributorInsightsSpecification;
    }
    public putContributorInsightsSpecification(value: ReplicasGlobalSecondaryIndexesContributorInsightsSpecificationProperty) {
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

    // read_on_demand_throughput_settings - computed: true, optional: true, required: false
    private _readOnDemandThroughputSettings = new ReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsPropertyOutputReference(this, "read_on_demand_throughput_settings");
    public get readOnDemandThroughputSettings() {
        return this._readOnDemandThroughputSettings;
    }
    public putReadOnDemandThroughputSettings(value: ReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsProperty) {
        this._readOnDemandThroughputSettings.internalValue = value;
    }
    public resetReadOnDemandThroughputSettings() {
        this._readOnDemandThroughputSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readOnDemandThroughputSettingsInput() {
        return this._readOnDemandThroughputSettings.internalValue;
    }

    // read_provisioned_throughput_settings - computed: true, optional: true, required: false
    private _readProvisionedThroughputSettings = new ReadProvisionedThroughputSettingsProperty2OutputReference(this, "read_provisioned_throughput_settings");
    public get readProvisionedThroughputSettings() {
        return this._readProvisionedThroughputSettings;
    }
    public putReadProvisionedThroughputSettings(value: ReadProvisionedThroughputSettingsProperty2) {
        this._readProvisionedThroughputSettings.internalValue = value;
    }
    public resetReadProvisionedThroughputSettings() {
        this._readProvisionedThroughputSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readProvisionedThroughputSettingsInput() {
        return this._readProvisionedThroughputSettings.internalValue;
    }
}

export class ReplicaGlobalSecondaryIndexSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : ReplicaGlobalSecondaryIndexSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): ReplicaGlobalSecondaryIndexSpecificationPropertyOutputReference {
        return new ReplicaGlobalSecondaryIndexSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KinesisStreamSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#approximate_creation_date_time_precision CcGlobalTable#approximate_creation_date_time_precision}
    */
    readonly approximateCreationDateTimePrecision?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#stream_arn CcGlobalTable#stream_arn}
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
export interface PointInTimeRecoverySpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#point_in_time_recovery_enabled CcGlobalTable#point_in_time_recovery_enabled}
    */
    readonly pointInTimeRecoveryEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#recovery_period_in_days CcGlobalTable#recovery_period_in_days}
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
export interface ReplicasReadOnDemandThroughputSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#max_read_request_units CcGlobalTable#max_read_request_units}
    */
    readonly maxReadRequestUnits?: number;
}
export class ReplicasReadOnDemandThroughputSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicasReadOnDemandThroughputSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxReadRequestUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxReadRequestUnits = this._maxReadRequestUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicasReadOnDemandThroughputSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxReadRequestUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxReadRequestUnits = value.maxReadRequestUnits;
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
}
export interface ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#disable_scale_in CcGlobalTable#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#scale_in_cooldown CcGlobalTable#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#scale_out_cooldown CcGlobalTable#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#target_value CcGlobalTable#target_value}
    */
    readonly targetValue?: number;
}
export class ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disableScaleIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._scaleInCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInCooldown = this._scaleInCooldown;
        }
        if (this._scaleOutCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disableScaleIn = undefined;
            this._scaleInCooldown = undefined;
            this._scaleOutCooldown = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableScaleIn = value.disableScaleIn;
            this._scaleInCooldown = value.scaleInCooldown;
            this._scaleOutCooldown = value.scaleOutCooldown;
            this._targetValue = value.targetValue;
        }
    }

    // disable_scale_in - computed: true, optional: true, required: false
    private _disableScaleIn?: boolean | cdktn.IResolvable; 
    public get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    public set disableScaleIn(value: boolean | cdktn.IResolvable) {
        this._disableScaleIn = value;
    }
    public resetDisableScaleIn() {
        this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableScaleInInput() {
        return this._disableScaleIn;
    }

    // scale_in_cooldown - computed: true, optional: true, required: false
    private _scaleInCooldown?: number; 
    public get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    public set scaleInCooldown(value: number) {
        this._scaleInCooldown = value;
    }
    public resetScaleInCooldown() {
        this._scaleInCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInCooldownInput() {
        return this._scaleInCooldown;
    }

    // scale_out_cooldown - computed: true, optional: true, required: false
    private _scaleOutCooldown?: number; 
    public get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    public set scaleOutCooldown(value: number) {
        this._scaleOutCooldown = value;
    }
    public resetScaleOutCooldown() {
        this._scaleOutCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutCooldownInput() {
        return this._scaleOutCooldown;
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
export interface ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#max_capacity CcGlobalTable#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#min_capacity CcGlobalTable#min_capacity}
    */
    readonly minCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#seed_capacity CcGlobalTable#seed_capacity}
    */
    readonly seedCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#target_tracking_scaling_policy_configuration CcGlobalTable#target_tracking_scaling_policy_configuration}
    */
    readonly targetTrackingScalingPolicyConfiguration?: ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty;
}
export class ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._minCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.minCapacity = this._minCapacity;
        }
        if (this._seedCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.seedCapacity = this._seedCapacity;
        }
        if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
            this._seedCapacity = undefined;
            this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxCapacity = value.maxCapacity;
            this._minCapacity = value.minCapacity;
            this._seedCapacity = value.seedCapacity;
            this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
        }
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

    // min_capacity - computed: true, optional: true, required: false
    private _minCapacity?: number; 
    public get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    public set minCapacity(value: number) {
        this._minCapacity = value;
    }
    public resetMinCapacity() {
        this._minCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityInput() {
        return this._minCapacity;
    }

    // seed_capacity - computed: true, optional: true, required: false
    private _seedCapacity?: number; 
    public get seedCapacity() {
        return this.getNumberAttribute('seed_capacity');
    }
    public set seedCapacity(value: number) {
        this._seedCapacity = value;
    }
    public resetSeedCapacity() {
        this._seedCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get seedCapacityInput() {
        return this._seedCapacity;
    }

    // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
    private _targetTrackingScalingPolicyConfiguration = new ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyOutputReference(this, "target_tracking_scaling_policy_configuration");
    public get targetTrackingScalingPolicyConfiguration() {
        return this._targetTrackingScalingPolicyConfiguration;
    }
    public putTargetTrackingScalingPolicyConfiguration(value: ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty) {
        this._targetTrackingScalingPolicyConfiguration.internalValue = value;
    }
    public resetTargetTrackingScalingPolicyConfiguration() {
        this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingScalingPolicyConfigurationInput() {
        return this._targetTrackingScalingPolicyConfiguration.internalValue;
    }
}
export interface ReplicasReadProvisionedThroughputSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_capacity_auto_scaling_settings CcGlobalTable#read_capacity_auto_scaling_settings}
    */
    readonly readCapacityAutoScalingSettings?: ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_capacity_units CcGlobalTable#read_capacity_units}
    */
    readonly readCapacityUnits?: number;
}
export class ReplicasReadProvisionedThroughputSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicasReadProvisionedThroughputSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readCapacityAutoScalingSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.readCapacityAutoScalingSettings = this._readCapacityAutoScalingSettings?.internalValue;
        }
        if (this._readCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.readCapacityUnits = this._readCapacityUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicasReadProvisionedThroughputSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readCapacityAutoScalingSettings.internalValue = undefined;
            this._readCapacityUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readCapacityAutoScalingSettings.internalValue = value.readCapacityAutoScalingSettings;
            this._readCapacityUnits = value.readCapacityUnits;
        }
    }

    // read_capacity_auto_scaling_settings - computed: true, optional: true, required: false
    private _readCapacityAutoScalingSettings = new ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsPropertyOutputReference(this, "read_capacity_auto_scaling_settings");
    public get readCapacityAutoScalingSettings() {
        return this._readCapacityAutoScalingSettings;
    }
    public putReadCapacityAutoScalingSettings(value: ReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsProperty) {
        this._readCapacityAutoScalingSettings.internalValue = value;
    }
    public resetReadCapacityAutoScalingSettings() {
        this._readCapacityAutoScalingSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readCapacityAutoScalingSettingsInput() {
        return this._readCapacityAutoScalingSettings.internalValue;
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
}
export interface ResourcePolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#policy_document CcGlobalTable#policy_document}
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
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#key CcGlobalTable#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#value CcGlobalTable#value}
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
export interface ReplicaStreamSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#resource_policy CcGlobalTable#resource_policy}
    */
    readonly resourcePolicy?: ResourcePolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#tags CcGlobalTable#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
}
export class ReplicaStreamSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicaStreamSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourcePolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourcePolicy = this._resourcePolicy?.internalValue;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicaStreamSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourcePolicy.internalValue = undefined;
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
            this._tags.internalValue = value.tags;
        }
    }

    // resource_policy - computed: true, optional: true, required: false
    private _resourcePolicy = new ResourcePolicyPropertyOutputReference(this, "resource_policy");
    public get resourcePolicy() {
        return this._resourcePolicy;
    }
    public putResourcePolicy(value: ResourcePolicyProperty) {
        this._resourcePolicy.internalValue = value;
    }
    public resetResourcePolicy() {
        this._resourcePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePolicyInput() {
        return this._resourcePolicy.internalValue;
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
export interface ReplicasResourcePolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#policy_document CcGlobalTable#policy_document}
    */
    readonly policyDocument?: string;
}
export class ReplicasResourcePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicasResourcePolicyProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ReplicasResourcePolicyProperty | cdktn.IResolvable | undefined) {
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
export interface ReplicaSSESpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#kms_master_key_id CcGlobalTable#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
}
export class ReplicaSSESpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicaSSESpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsMasterKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsMasterKeyId = this._kmsMasterKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicaSSESpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsMasterKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsMasterKeyId = value.kmsMasterKeyId;
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
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#key CcGlobalTable#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#value CcGlobalTable#value}
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
export interface ReplicaSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#contributor_insights_specification CcGlobalTable#contributor_insights_specification}
    */
    readonly contributorInsightsSpecification?: ContributorInsightsSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#deletion_protection_enabled CcGlobalTable#deletion_protection_enabled}
    */
    readonly deletionProtectionEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#global_secondary_indexes CcGlobalTable#global_secondary_indexes}
    */
    readonly globalSecondaryIndexes?: ReplicaGlobalSecondaryIndexSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#global_table_settings_replication_mode CcGlobalTable#global_table_settings_replication_mode}
    */
    readonly globalTableSettingsReplicationMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#kinesis_stream_specification CcGlobalTable#kinesis_stream_specification}
    */
    readonly kinesisStreamSpecification?: KinesisStreamSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#point_in_time_recovery_specification CcGlobalTable#point_in_time_recovery_specification}
    */
    readonly pointInTimeRecoverySpecification?: PointInTimeRecoverySpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_on_demand_throughput_settings CcGlobalTable#read_on_demand_throughput_settings}
    */
    readonly readOnDemandThroughputSettings?: ReplicasReadOnDemandThroughputSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_provisioned_throughput_settings CcGlobalTable#read_provisioned_throughput_settings}
    */
    readonly readProvisionedThroughputSettings?: ReplicasReadProvisionedThroughputSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#region CcGlobalTable#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#replica_stream_specification CcGlobalTable#replica_stream_specification}
    */
    readonly replicaStreamSpecification?: ReplicaStreamSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#resource_policy CcGlobalTable#resource_policy}
    */
    readonly resourcePolicy?: ReplicasResourcePolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#sse_specification CcGlobalTable#sse_specification}
    */
    readonly sseSpecification?: ReplicaSSESpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#table_class CcGlobalTable#table_class}
    */
    readonly tableClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#tags CcGlobalTable#tags}
    */
    readonly tags?: TagsProperty[] | cdktn.IResolvable;
}
export class ReplicaSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReplicaSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contributorInsightsSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contributorInsightsSpecification = this._contributorInsightsSpecification?.internalValue;
        }
        if (this._deletionProtectionEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.deletionProtectionEnabled = this._deletionProtectionEnabled;
        }
        if (this._globalSecondaryIndexes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.globalSecondaryIndexes = this._globalSecondaryIndexes?.internalValue;
        }
        if (this._globalTableSettingsReplicationMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.globalTableSettingsReplicationMode = this._globalTableSettingsReplicationMode;
        }
        if (this._kinesisStreamSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisStreamSpecification = this._kinesisStreamSpecification?.internalValue;
        }
        if (this._pointInTimeRecoverySpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pointInTimeRecoverySpecification = this._pointInTimeRecoverySpecification?.internalValue;
        }
        if (this._readOnDemandThroughputSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnDemandThroughputSettings = this._readOnDemandThroughputSettings?.internalValue;
        }
        if (this._readProvisionedThroughputSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.readProvisionedThroughputSettings = this._readProvisionedThroughputSettings?.internalValue;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._replicaStreamSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicaStreamSpecification = this._replicaStreamSpecification?.internalValue;
        }
        if (this._resourcePolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourcePolicy = this._resourcePolicy?.internalValue;
        }
        if (this._sseSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sseSpecification = this._sseSpecification?.internalValue;
        }
        if (this._tableClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableClass = this._tableClass;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicaSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contributorInsightsSpecification.internalValue = undefined;
            this._deletionProtectionEnabled = undefined;
            this._globalSecondaryIndexes.internalValue = undefined;
            this._globalTableSettingsReplicationMode = undefined;
            this._kinesisStreamSpecification.internalValue = undefined;
            this._pointInTimeRecoverySpecification.internalValue = undefined;
            this._readOnDemandThroughputSettings.internalValue = undefined;
            this._readProvisionedThroughputSettings.internalValue = undefined;
            this._region = undefined;
            this._replicaStreamSpecification.internalValue = undefined;
            this._resourcePolicy.internalValue = undefined;
            this._sseSpecification.internalValue = undefined;
            this._tableClass = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contributorInsightsSpecification.internalValue = value.contributorInsightsSpecification;
            this._deletionProtectionEnabled = value.deletionProtectionEnabled;
            this._globalSecondaryIndexes.internalValue = value.globalSecondaryIndexes;
            this._globalTableSettingsReplicationMode = value.globalTableSettingsReplicationMode;
            this._kinesisStreamSpecification.internalValue = value.kinesisStreamSpecification;
            this._pointInTimeRecoverySpecification.internalValue = value.pointInTimeRecoverySpecification;
            this._readOnDemandThroughputSettings.internalValue = value.readOnDemandThroughputSettings;
            this._readProvisionedThroughputSettings.internalValue = value.readProvisionedThroughputSettings;
            this._region = value.region;
            this._replicaStreamSpecification.internalValue = value.replicaStreamSpecification;
            this._resourcePolicy.internalValue = value.resourcePolicy;
            this._sseSpecification.internalValue = value.sseSpecification;
            this._tableClass = value.tableClass;
            this._tags.internalValue = value.tags;
        }
    }

    // contributor_insights_specification - computed: true, optional: true, required: false
    private _contributorInsightsSpecification = new ContributorInsightsSpecificationPropertyOutputReference(this, "contributor_insights_specification");
    public get contributorInsightsSpecification() {
        return this._contributorInsightsSpecification;
    }
    public putContributorInsightsSpecification(value: ContributorInsightsSpecificationProperty) {
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
    private _globalSecondaryIndexes = new ReplicaGlobalSecondaryIndexSpecificationPropertyList(this, "global_secondary_indexes", true);
    public get globalSecondaryIndexes() {
        return this._globalSecondaryIndexes;
    }
    public putGlobalSecondaryIndexes(value: ReplicaGlobalSecondaryIndexSpecificationProperty[] | cdktn.IResolvable) {
        this._globalSecondaryIndexes.internalValue = value;
    }
    public resetGlobalSecondaryIndexes() {
        this._globalSecondaryIndexes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalSecondaryIndexesInput() {
        return this._globalSecondaryIndexes.internalValue;
    }

    // global_table_settings_replication_mode - computed: true, optional: true, required: false
    private _globalTableSettingsReplicationMode?: string; 
    public get globalTableSettingsReplicationMode() {
        return this.getStringAttribute('global_table_settings_replication_mode');
    }
    public set globalTableSettingsReplicationMode(value: string) {
        this._globalTableSettingsReplicationMode = value;
    }
    public resetGlobalTableSettingsReplicationMode() {
        this._globalTableSettingsReplicationMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalTableSettingsReplicationModeInput() {
        return this._globalTableSettingsReplicationMode;
    }

    // kinesis_stream_specification - computed: true, optional: true, required: false
    private _kinesisStreamSpecification = new KinesisStreamSpecificationPropertyOutputReference(this, "kinesis_stream_specification");
    public get kinesisStreamSpecification() {
        return this._kinesisStreamSpecification;
    }
    public putKinesisStreamSpecification(value: KinesisStreamSpecificationProperty) {
        this._kinesisStreamSpecification.internalValue = value;
    }
    public resetKinesisStreamSpecification() {
        this._kinesisStreamSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisStreamSpecificationInput() {
        return this._kinesisStreamSpecification.internalValue;
    }

    // point_in_time_recovery_specification - computed: true, optional: true, required: false
    private _pointInTimeRecoverySpecification = new PointInTimeRecoverySpecificationPropertyOutputReference(this, "point_in_time_recovery_specification");
    public get pointInTimeRecoverySpecification() {
        return this._pointInTimeRecoverySpecification;
    }
    public putPointInTimeRecoverySpecification(value: PointInTimeRecoverySpecificationProperty) {
        this._pointInTimeRecoverySpecification.internalValue = value;
    }
    public resetPointInTimeRecoverySpecification() {
        this._pointInTimeRecoverySpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pointInTimeRecoverySpecificationInput() {
        return this._pointInTimeRecoverySpecification.internalValue;
    }

    // read_on_demand_throughput_settings - computed: true, optional: true, required: false
    private _readOnDemandThroughputSettings = new ReplicasReadOnDemandThroughputSettingsPropertyOutputReference(this, "read_on_demand_throughput_settings");
    public get readOnDemandThroughputSettings() {
        return this._readOnDemandThroughputSettings;
    }
    public putReadOnDemandThroughputSettings(value: ReplicasReadOnDemandThroughputSettingsProperty) {
        this._readOnDemandThroughputSettings.internalValue = value;
    }
    public resetReadOnDemandThroughputSettings() {
        this._readOnDemandThroughputSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readOnDemandThroughputSettingsInput() {
        return this._readOnDemandThroughputSettings.internalValue;
    }

    // read_provisioned_throughput_settings - computed: true, optional: true, required: false
    private _readProvisionedThroughputSettings = new ReplicasReadProvisionedThroughputSettingsPropertyOutputReference(this, "read_provisioned_throughput_settings");
    public get readProvisionedThroughputSettings() {
        return this._readProvisionedThroughputSettings;
    }
    public putReadProvisionedThroughputSettings(value: ReplicasReadProvisionedThroughputSettingsProperty) {
        this._readProvisionedThroughputSettings.internalValue = value;
    }
    public resetReadProvisionedThroughputSettings() {
        this._readProvisionedThroughputSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readProvisionedThroughputSettingsInput() {
        return this._readProvisionedThroughputSettings.internalValue;
    }

    // region - computed: false, optional: false, required: true
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // replica_stream_specification - computed: true, optional: true, required: false
    private _replicaStreamSpecification = new ReplicaStreamSpecificationPropertyOutputReference(this, "replica_stream_specification");
    public get replicaStreamSpecification() {
        return this._replicaStreamSpecification;
    }
    public putReplicaStreamSpecification(value: ReplicaStreamSpecificationProperty) {
        this._replicaStreamSpecification.internalValue = value;
    }
    public resetReplicaStreamSpecification() {
        this._replicaStreamSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaStreamSpecificationInput() {
        return this._replicaStreamSpecification.internalValue;
    }

    // resource_policy - computed: true, optional: true, required: false
    private _resourcePolicy = new ReplicasResourcePolicyPropertyOutputReference(this, "resource_policy");
    public get resourcePolicy() {
        return this._resourcePolicy;
    }
    public putResourcePolicy(value: ReplicasResourcePolicyProperty) {
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
    private _sseSpecification = new ReplicaSSESpecificationPropertyOutputReference(this, "sse_specification");
    public get sseSpecification() {
        return this._sseSpecification;
    }
    public putSseSpecification(value: ReplicaSSESpecificationProperty) {
        this._sseSpecification.internalValue = value;
    }
    public resetSseSpecification() {
        this._sseSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseSpecificationInput() {
        return this._sseSpecification.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagsProperty[] | cdktn.IResolvable) {
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

export class ReplicaSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : ReplicaSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): ReplicaSpecificationPropertyOutputReference {
        return new ReplicaSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SSESpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#sse_enabled CcGlobalTable#sse_enabled}
    */
    readonly sseEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#sse_type CcGlobalTable#sse_type}
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
            this._sseEnabled = value.sseEnabled;
            this._sseType = value.sseType;
        }
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
export interface StreamSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#stream_view_type CcGlobalTable#stream_view_type}
    */
    readonly streamViewType?: string;
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
        if (this._streamViewType !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamViewType = this._streamViewType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StreamSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._streamViewType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._streamViewType = value.streamViewType;
        }
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
}
export interface TimeToLiveSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#attribute_name CcGlobalTable#attribute_name}
    */
    readonly attributeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#enabled CcGlobalTable#enabled}
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
export interface WarmThroughputProperty2 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#read_units_per_second CcGlobalTable#read_units_per_second}
    */
    readonly readUnitsPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#write_units_per_second CcGlobalTable#write_units_per_second}
    */
    readonly writeUnitsPerSecond?: number;
}
export class WarmThroughputProperty2OutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WarmThroughputProperty2 | cdktn.IResolvable | undefined {
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

    public set internalValue(value: WarmThroughputProperty2 | cdktn.IResolvable | undefined) {
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
export interface WriteOnDemandThroughputSettingsProperty2 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#max_write_request_units CcGlobalTable#max_write_request_units}
    */
    readonly maxWriteRequestUnits?: number;
}
export class WriteOnDemandThroughputSettingsProperty2OutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WriteOnDemandThroughputSettingsProperty2 | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxWriteRequestUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxWriteRequestUnits = this._maxWriteRequestUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WriteOnDemandThroughputSettingsProperty2 | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxWriteRequestUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxWriteRequestUnits = value.maxWriteRequestUnits;
        }
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
export interface WriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#disable_scale_in CcGlobalTable#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#scale_in_cooldown CcGlobalTable#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#scale_out_cooldown CcGlobalTable#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#target_value CcGlobalTable#target_value}
    */
    readonly targetValue?: number;
}
export class WriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disableScaleIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._scaleInCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInCooldown = this._scaleInCooldown;
        }
        if (this._scaleOutCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disableScaleIn = undefined;
            this._scaleInCooldown = undefined;
            this._scaleOutCooldown = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableScaleIn = value.disableScaleIn;
            this._scaleInCooldown = value.scaleInCooldown;
            this._scaleOutCooldown = value.scaleOutCooldown;
            this._targetValue = value.targetValue;
        }
    }

    // disable_scale_in - computed: true, optional: true, required: false
    private _disableScaleIn?: boolean | cdktn.IResolvable; 
    public get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    public set disableScaleIn(value: boolean | cdktn.IResolvable) {
        this._disableScaleIn = value;
    }
    public resetDisableScaleIn() {
        this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableScaleInInput() {
        return this._disableScaleIn;
    }

    // scale_in_cooldown - computed: true, optional: true, required: false
    private _scaleInCooldown?: number; 
    public get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    public set scaleInCooldown(value: number) {
        this._scaleInCooldown = value;
    }
    public resetScaleInCooldown() {
        this._scaleInCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInCooldownInput() {
        return this._scaleInCooldown;
    }

    // scale_out_cooldown - computed: true, optional: true, required: false
    private _scaleOutCooldown?: number; 
    public get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    public set scaleOutCooldown(value: number) {
        this._scaleOutCooldown = value;
    }
    public resetScaleOutCooldown() {
        this._scaleOutCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutCooldownInput() {
        return this._scaleOutCooldown;
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
export interface WriteCapacityAutoScalingSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#max_capacity CcGlobalTable#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#min_capacity CcGlobalTable#min_capacity}
    */
    readonly minCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#seed_capacity CcGlobalTable#seed_capacity}
    */
    readonly seedCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#target_tracking_scaling_policy_configuration CcGlobalTable#target_tracking_scaling_policy_configuration}
    */
    readonly targetTrackingScalingPolicyConfiguration?: WriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty;
}
export class WriteCapacityAutoScalingSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WriteCapacityAutoScalingSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._minCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.minCapacity = this._minCapacity;
        }
        if (this._seedCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.seedCapacity = this._seedCapacity;
        }
        if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WriteCapacityAutoScalingSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
            this._seedCapacity = undefined;
            this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxCapacity = value.maxCapacity;
            this._minCapacity = value.minCapacity;
            this._seedCapacity = value.seedCapacity;
            this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
        }
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

    // min_capacity - computed: true, optional: true, required: false
    private _minCapacity?: number; 
    public get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    public set minCapacity(value: number) {
        this._minCapacity = value;
    }
    public resetMinCapacity() {
        this._minCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityInput() {
        return this._minCapacity;
    }

    // seed_capacity - computed: true, optional: true, required: false
    private _seedCapacity?: number; 
    public get seedCapacity() {
        return this.getNumberAttribute('seed_capacity');
    }
    public set seedCapacity(value: number) {
        this._seedCapacity = value;
    }
    public resetSeedCapacity() {
        this._seedCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get seedCapacityInput() {
        return this._seedCapacity;
    }

    // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
    private _targetTrackingScalingPolicyConfiguration = new WriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationPropertyOutputReference(this, "target_tracking_scaling_policy_configuration");
    public get targetTrackingScalingPolicyConfiguration() {
        return this._targetTrackingScalingPolicyConfiguration;
    }
    public putTargetTrackingScalingPolicyConfiguration(value: WriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationProperty) {
        this._targetTrackingScalingPolicyConfiguration.internalValue = value;
    }
    public resetTargetTrackingScalingPolicyConfiguration() {
        this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingScalingPolicyConfigurationInput() {
        return this._targetTrackingScalingPolicyConfiguration.internalValue;
    }
}
export interface WriteProvisionedThroughputSettingsProperty2 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dynamodb_global_table#write_capacity_auto_scaling_settings CcGlobalTable#write_capacity_auto_scaling_settings}
    */
    readonly writeCapacityAutoScalingSettings?: WriteCapacityAutoScalingSettingsProperty;
}
export class WriteProvisionedThroughputSettingsProperty2OutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WriteProvisionedThroughputSettingsProperty2 | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._writeCapacityAutoScalingSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeCapacityAutoScalingSettings = this._writeCapacityAutoScalingSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WriteProvisionedThroughputSettingsProperty2 | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._writeCapacityAutoScalingSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._writeCapacityAutoScalingSettings.internalValue = value.writeCapacityAutoScalingSettings;
        }
    }

    // write_capacity_auto_scaling_settings - computed: true, optional: true, required: false
    private _writeCapacityAutoScalingSettings = new WriteCapacityAutoScalingSettingsPropertyOutputReference(this, "write_capacity_auto_scaling_settings");
    public get writeCapacityAutoScalingSettings() {
        return this._writeCapacityAutoScalingSettings;
    }
    public putWriteCapacityAutoScalingSettings(value: WriteCapacityAutoScalingSettingsProperty) {
        this._writeCapacityAutoScalingSettings.internalValue = value;
    }
    public resetWriteCapacityAutoScalingSettings() {
        this._writeCapacityAutoScalingSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeCapacityAutoScalingSettingsInput() {
        return this._writeCapacityAutoScalingSettings.internalValue;
    }
}
}
