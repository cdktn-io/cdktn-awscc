// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcReplicationTaskProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_start_position CcReplicationTask#cdc_start_position}
    */
    readonly cdcStartPosition?: string;
    /**
    * Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_start_time CcReplicationTask#cdc_start_time}
    */
    readonly cdcStartTime?: number;
    /**
    * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#cdc_stop_position CcReplicationTask#cdc_stop_position}
    */
    readonly cdcStopPosition?: string;
    /**
    * The migration type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#migration_type CcReplicationTask#migration_type}
    */
    readonly migrationType: string;
    /**
    * The Amazon Resource Name (ARN) of a replication instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_instance_arn CcReplicationTask#replication_instance_arn}
    */
    readonly replicationInstanceArn: string;
    /**
    * An identifier for the replication task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_task_identifier CcReplicationTask#replication_task_identifier}
    */
    readonly replicationTaskIdentifier?: string;
    /**
    * Overall settings for the task, in JSON format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#replication_task_settings CcReplicationTask#replication_task_settings}
    */
    readonly replicationTaskSettings?: string;
    /**
    * A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#resource_identifier CcReplicationTask#resource_identifier}
    */
    readonly resourceIdentifier?: string;
    /**
    * An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#source_endpoint_arn CcReplicationTask#source_endpoint_arn}
    */
    readonly sourceEndpointArn: string;
    /**
    * The table mappings for the task, in JSON format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#table_mappings CcReplicationTask#table_mappings}
    */
    readonly tableMappings: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#tags CcReplicationTask#tags}
    */
    readonly tags?: CcReplicationTask.TagProperty[] | cdktn.IResolvable;
    /**
    * An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#target_endpoint_arn CcReplicationTask#target_endpoint_arn}
    */
    readonly targetEndpointArn: string;
    /**
    * Supplemental information that the task requires to migrate the data for certain source and target endpoints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#task_data CcReplicationTask#task_data}
    */
    readonly taskData?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task awscc_dms_replication_task}
*/
export class CcReplicationTask extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dms_replication_task";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcReplicationTask resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcReplicationTask to import
    * @param importFromId The id of the existing CcReplicationTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcReplicationTask to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_replication_task", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task awscc_dms_replication_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcReplicationTaskProps
    */
    public constructor(scope: Construct, id: string, config: CcReplicationTaskProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_dms_replication_task',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.101.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._cdcStartPosition = config.cdcStartPosition;
        this._cdcStartTime = config.cdcStartTime;
        this._cdcStopPosition = config.cdcStopPosition;
        this._migrationType = config.migrationType;
        this._replicationInstanceArn = config.replicationInstanceArn;
        this._replicationTaskIdentifier = config.replicationTaskIdentifier;
        this._replicationTaskSettings = config.replicationTaskSettings;
        this._resourceIdentifier = config.resourceIdentifier;
        this._sourceEndpointArn = config.sourceEndpointArn;
        this._tableMappings = config.tableMappings;
        this._tags.internalValue = config.tags;
        this._targetEndpointArn = config.targetEndpointArn;
        this._taskData = config.taskData;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cdc_start_position - computed: true, optional: true, required: false
    private _cdcStartPosition?: string; 
    public get cdcStartPosition() {
        return this.getStringAttribute('cdc_start_position');
    }
    public set cdcStartPosition(value: string) {
        this._cdcStartPosition = value;
    }
    public resetCdcStartPosition() {
        this._cdcStartPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcStartPositionInput() {
        return this._cdcStartPosition;
    }

    // cdc_start_time - computed: true, optional: true, required: false
    private _cdcStartTime?: number; 
    public get cdcStartTime() {
        return this.getNumberAttribute('cdc_start_time');
    }
    public set cdcStartTime(value: number) {
        this._cdcStartTime = value;
    }
    public resetCdcStartTime() {
        this._cdcStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcStartTimeInput() {
        return this._cdcStartTime;
    }

    // cdc_stop_position - computed: true, optional: true, required: false
    private _cdcStopPosition?: string; 
    public get cdcStopPosition() {
        return this.getStringAttribute('cdc_stop_position');
    }
    public set cdcStopPosition(value: string) {
        this._cdcStopPosition = value;
    }
    public resetCdcStopPosition() {
        this._cdcStopPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcStopPositionInput() {
        return this._cdcStopPosition;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // migration_type - computed: false, optional: false, required: true
    private _migrationType?: string; 
    public get migrationType() {
        return this.getStringAttribute('migration_type');
    }
    public set migrationType(value: string) {
        this._migrationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get migrationTypeInput() {
        return this._migrationType;
    }

    // replication_instance_arn - computed: false, optional: false, required: true
    private _replicationInstanceArn?: string; 
    public get replicationInstanceArn() {
        return this.getStringAttribute('replication_instance_arn');
    }
    public set replicationInstanceArn(value: string) {
        this._replicationInstanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationInstanceArnInput() {
        return this._replicationInstanceArn;
    }

    // replication_task_arn - computed: true, optional: false, required: false
    public get replicationTaskArn() {
        return this.getStringAttribute('replication_task_arn');
    }

    // replication_task_identifier - computed: true, optional: true, required: false
    private _replicationTaskIdentifier?: string; 
    public get replicationTaskIdentifier() {
        return this.getStringAttribute('replication_task_identifier');
    }
    public set replicationTaskIdentifier(value: string) {
        this._replicationTaskIdentifier = value;
    }
    public resetReplicationTaskIdentifier() {
        this._replicationTaskIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationTaskIdentifierInput() {
        return this._replicationTaskIdentifier;
    }

    // replication_task_settings - computed: true, optional: true, required: false
    private _replicationTaskSettings?: string; 
    public get replicationTaskSettings() {
        return this.getStringAttribute('replication_task_settings');
    }
    public set replicationTaskSettings(value: string) {
        this._replicationTaskSettings = value;
    }
    public resetReplicationTaskSettings() {
        this._replicationTaskSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationTaskSettingsInput() {
        return this._replicationTaskSettings;
    }

    // resource_identifier - computed: true, optional: true, required: false
    private _resourceIdentifier?: string; 
    public get resourceIdentifier() {
        return this.getStringAttribute('resource_identifier');
    }
    public set resourceIdentifier(value: string) {
        this._resourceIdentifier = value;
    }
    public resetResourceIdentifier() {
        this._resourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdentifierInput() {
        return this._resourceIdentifier;
    }

    // source_endpoint_arn - computed: false, optional: false, required: true
    private _sourceEndpointArn?: string; 
    public get sourceEndpointArn() {
        return this.getStringAttribute('source_endpoint_arn');
    }
    public set sourceEndpointArn(value: string) {
        this._sourceEndpointArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceEndpointArnInput() {
        return this._sourceEndpointArn;
    }

    // table_mappings - computed: false, optional: false, required: true
    private _tableMappings?: string; 
    public get tableMappings() {
        return this.getStringAttribute('table_mappings');
    }
    public set tableMappings(value: string) {
        this._tableMappings = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableMappingsInput() {
        return this._tableMappings;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcReplicationTask.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcReplicationTask.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_endpoint_arn - computed: false, optional: false, required: true
    private _targetEndpointArn?: string; 
    public get targetEndpointArn() {
        return this.getStringAttribute('target_endpoint_arn');
    }
    public set targetEndpointArn(value: string) {
        this._targetEndpointArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetEndpointArnInput() {
        return this._targetEndpointArn;
    }

    // task_data - computed: true, optional: true, required: false
    private _taskData?: string; 
    public get taskData() {
        return this.getStringAttribute('task_data');
    }
    public set taskData(value: string) {
        this._taskData = value;
    }
    public resetTaskData() {
        this._taskData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDataInput() {
        return this._taskData;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cdc_start_position: cdktn.stringToTerraform(this._cdcStartPosition),
            cdc_start_time: cdktn.numberToTerraform(this._cdcStartTime),
            cdc_stop_position: cdktn.stringToTerraform(this._cdcStopPosition),
            migration_type: cdktn.stringToTerraform(this._migrationType),
            replication_instance_arn: cdktn.stringToTerraform(this._replicationInstanceArn),
            replication_task_identifier: cdktn.stringToTerraform(this._replicationTaskIdentifier),
            replication_task_settings: cdktn.stringToTerraform(this._replicationTaskSettings),
            resource_identifier: cdktn.stringToTerraform(this._resourceIdentifier),
            source_endpoint_arn: cdktn.stringToTerraform(this._sourceEndpointArn),
            table_mappings: cdktn.stringToTerraform(this._tableMappings),
            tags: cdktn.listMapper(ccReplicationTaskTagPropertyToTerraform, false)(this._tags.internalValue),
            target_endpoint_arn: cdktn.stringToTerraform(this._targetEndpointArn),
            task_data: cdktn.stringToTerraform(this._taskData),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cdc_start_position: {
                value: cdktn.stringToHclTerraform(this._cdcStartPosition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cdc_start_time: {
                value: cdktn.numberToHclTerraform(this._cdcStartTime),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cdc_stop_position: {
                value: cdktn.stringToHclTerraform(this._cdcStopPosition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            migration_type: {
                value: cdktn.stringToHclTerraform(this._migrationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_instance_arn: {
                value: cdktn.stringToHclTerraform(this._replicationInstanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_task_identifier: {
                value: cdktn.stringToHclTerraform(this._replicationTaskIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_task_settings: {
                value: cdktn.stringToHclTerraform(this._replicationTaskSettings),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_identifier: {
                value: cdktn.stringToHclTerraform(this._resourceIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_endpoint_arn: {
                value: cdktn.stringToHclTerraform(this._sourceEndpointArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            table_mappings: {
                value: cdktn.stringToHclTerraform(this._tableMappings),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccReplicationTaskTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcReplicationTask.TagPropertyList",
            },
            target_endpoint_arn: {
                value: cdktn.stringToHclTerraform(this._targetEndpointArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            task_data: {
                value: cdktn.stringToHclTerraform(this._taskData),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccReplicationTaskTagPropertyToTerraform(struct?: CcReplicationTask.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccReplicationTaskTagPropertyToHclTerraform(struct?: CcReplicationTask.TagProperty | cdktn.IResolvable): any {
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


export namespace CcReplicationTask {
export interface TagProperty {
    /**
    * Tag key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#key CcReplicationTask#key}
    */
    readonly key?: string;
    /**
    * Tag value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dms_replication_task#value CcReplicationTask#value}
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
