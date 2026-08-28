// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_snapshot_schedule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSnapshotScheduleProps extends cdktn.TerraformMetaArguments {
    /**
    * The definition of the snapshot schedule. The definition is made up of schedule expressions, for example "cron(30 12 *)" or "rate(12 hours)".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_snapshot_schedule#schedule_definitions CcSnapshotSchedule#schedule_definitions}
    */
    readonly scheduleDefinitions: string[];
    /**
    * The description of the snapshot schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_snapshot_schedule#schedule_description CcSnapshotSchedule#schedule_description}
    */
    readonly scheduleDescription?: string;
    /**
    * A unique identifier for the snapshot schedule. Only alphanumeric characters are allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_snapshot_schedule#schedule_identifier CcSnapshotSchedule#schedule_identifier}
    */
    readonly scheduleIdentifier: string;
    /**
    * An optional set of tags for the snapshot schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_snapshot_schedule#tags CcSnapshotSchedule#tags}
    */
    readonly tags?: CcSnapshotSchedule.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_snapshot_schedule awscc_redshift_snapshot_schedule}
*/
export class CcSnapshotSchedule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshift_snapshot_schedule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSnapshotSchedule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSnapshotSchedule to import
    * @param importFromId The id of the existing CcSnapshotSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_snapshot_schedule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSnapshotSchedule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_snapshot_schedule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_snapshot_schedule awscc_redshift_snapshot_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSnapshotScheduleProps
    */
    public constructor(scope: Construct, id: string, config: CcSnapshotScheduleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshift_snapshot_schedule',
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
        this._scheduleDefinitions = config.scheduleDefinitions;
        this._scheduleDescription = config.scheduleDescription;
        this._scheduleIdentifier = config.scheduleIdentifier;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // associated_cluster_count - computed: true, optional: false, required: false
    public get associatedClusterCount() {
        return this.getNumberAttribute('associated_cluster_count');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // schedule_definitions - computed: false, optional: false, required: true
    private _scheduleDefinitions?: string[]; 
    public get scheduleDefinitions() {
        return this.getListAttribute('schedule_definitions');
    }
    public set scheduleDefinitions(value: string[]) {
        this._scheduleDefinitions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleDefinitionsInput() {
        return this._scheduleDefinitions;
    }

    // schedule_description - computed: true, optional: true, required: false
    private _scheduleDescription?: string; 
    public get scheduleDescription() {
        return this.getStringAttribute('schedule_description');
    }
    public set scheduleDescription(value: string) {
        this._scheduleDescription = value;
    }
    public resetScheduleDescription() {
        this._scheduleDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleDescriptionInput() {
        return this._scheduleDescription;
    }

    // schedule_identifier - computed: false, optional: false, required: true
    private _scheduleIdentifier?: string; 
    public get scheduleIdentifier() {
        return this.getStringAttribute('schedule_identifier');
    }
    public set scheduleIdentifier(value: string) {
        this._scheduleIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleIdentifierInput() {
        return this._scheduleIdentifier;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSnapshotSchedule.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSnapshotSchedule.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            schedule_definitions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._scheduleDefinitions),
            schedule_description: cdktn.stringToTerraform(this._scheduleDescription),
            schedule_identifier: cdktn.stringToTerraform(this._scheduleIdentifier),
            tags: cdktn.listMapper(ccSnapshotScheduleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            schedule_definitions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._scheduleDefinitions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            schedule_description: {
                value: cdktn.stringToHclTerraform(this._scheduleDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule_identifier: {
                value: cdktn.stringToHclTerraform(this._scheduleIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSnapshotScheduleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSnapshotSchedule.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSnapshotScheduleTagPropertyToTerraform(struct?: CcSnapshotSchedule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSnapshotScheduleTagPropertyToHclTerraform(struct?: CcSnapshotSchedule.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSnapshotSchedule {
export interface TagProperty {
    /**
    * The key, or name, for the resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_snapshot_schedule#key CcSnapshotSchedule#key}
    */
    readonly key?: string;
    /**
    * The value for the resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_snapshot_schedule#value CcSnapshotSchedule#value}
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
