// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRestoreTestingPlanProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#recovery_point_selection CcRestoreTestingPlan#recovery_point_selection}
    */
    readonly recoveryPointSelection: CcRestoreTestingPlan.RestoreTestingRecoveryPointSelectionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#restore_testing_plan_name CcRestoreTestingPlan#restore_testing_plan_name}
    */
    readonly restoreTestingPlanName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#schedule_expression CcRestoreTestingPlan#schedule_expression}
    */
    readonly scheduleExpression: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#schedule_expression_timezone CcRestoreTestingPlan#schedule_expression_timezone}
    */
    readonly scheduleExpressionTimezone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#start_window_hours CcRestoreTestingPlan#start_window_hours}
    */
    readonly startWindowHours?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#tags CcRestoreTestingPlan#tags}
    */
    readonly tags?: CcRestoreTestingPlan.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan awscc_backup_restore_testing_plan}
*/
export class CcRestoreTestingPlan extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_backup_restore_testing_plan";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRestoreTestingPlan resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRestoreTestingPlan to import
    * @param importFromId The id of the existing CcRestoreTestingPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRestoreTestingPlan to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_restore_testing_plan", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan awscc_backup_restore_testing_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRestoreTestingPlanProps
    */
    public constructor(scope: Construct, id: string, config: CcRestoreTestingPlanProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_backup_restore_testing_plan',
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
        this._recoveryPointSelection.internalValue = config.recoveryPointSelection;
        this._restoreTestingPlanName = config.restoreTestingPlanName;
        this._scheduleExpression = config.scheduleExpression;
        this._scheduleExpressionTimezone = config.scheduleExpressionTimezone;
        this._startWindowHours = config.startWindowHours;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // recovery_point_selection - computed: false, optional: false, required: true
    private _recoveryPointSelection = new CcRestoreTestingPlan.RestoreTestingRecoveryPointSelectionPropertyOutputReference(this, "recovery_point_selection");
    public get recoveryPointSelection() {
        return this._recoveryPointSelection;
    }
    public putRecoveryPointSelection(value: CcRestoreTestingPlan.RestoreTestingRecoveryPointSelectionProperty) {
        this._recoveryPointSelection.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recoveryPointSelectionInput() {
        return this._recoveryPointSelection.internalValue;
    }

    // restore_testing_plan_arn - computed: true, optional: false, required: false
    public get restoreTestingPlanArn() {
        return this.getStringAttribute('restore_testing_plan_arn');
    }

    // restore_testing_plan_name - computed: false, optional: false, required: true
    private _restoreTestingPlanName?: string; 
    public get restoreTestingPlanName() {
        return this.getStringAttribute('restore_testing_plan_name');
    }
    public set restoreTestingPlanName(value: string) {
        this._restoreTestingPlanName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restoreTestingPlanNameInput() {
        return this._restoreTestingPlanName;
    }

    // schedule_expression - computed: false, optional: false, required: true
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
    }

    // schedule_expression_timezone - computed: true, optional: true, required: false
    private _scheduleExpressionTimezone?: string; 
    public get scheduleExpressionTimezone() {
        return this.getStringAttribute('schedule_expression_timezone');
    }
    public set scheduleExpressionTimezone(value: string) {
        this._scheduleExpressionTimezone = value;
    }
    public resetScheduleExpressionTimezone() {
        this._scheduleExpressionTimezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionTimezoneInput() {
        return this._scheduleExpressionTimezone;
    }

    // start_window_hours - computed: true, optional: true, required: false
    private _startWindowHours?: number; 
    public get startWindowHours() {
        return this.getNumberAttribute('start_window_hours');
    }
    public set startWindowHours(value: number) {
        this._startWindowHours = value;
    }
    public resetStartWindowHours() {
        this._startWindowHours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startWindowHoursInput() {
        return this._startWindowHours;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRestoreTestingPlan.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRestoreTestingPlan.TagProperty[] | cdktn.IResolvable) {
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
            recovery_point_selection: ccRestoreTestingPlanRestoreTestingRecoveryPointSelectionPropertyToTerraform(this._recoveryPointSelection.internalValue),
            restore_testing_plan_name: cdktn.stringToTerraform(this._restoreTestingPlanName),
            schedule_expression: cdktn.stringToTerraform(this._scheduleExpression),
            schedule_expression_timezone: cdktn.stringToTerraform(this._scheduleExpressionTimezone),
            start_window_hours: cdktn.numberToTerraform(this._startWindowHours),
            tags: cdktn.listMapper(ccRestoreTestingPlanTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            recovery_point_selection: {
                value: ccRestoreTestingPlanRestoreTestingRecoveryPointSelectionPropertyToHclTerraform(this._recoveryPointSelection.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRestoreTestingPlan.RestoreTestingRecoveryPointSelectionProperty",
            },
            restore_testing_plan_name: {
                value: cdktn.stringToHclTerraform(this._restoreTestingPlanName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule_expression: {
                value: cdktn.stringToHclTerraform(this._scheduleExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule_expression_timezone: {
                value: cdktn.stringToHclTerraform(this._scheduleExpressionTimezone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            start_window_hours: {
                value: cdktn.numberToHclTerraform(this._startWindowHours),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRestoreTestingPlanTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRestoreTestingPlan.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRestoreTestingPlanRestoreTestingRecoveryPointSelectionPropertyToTerraform(struct?: CcRestoreTestingPlan.RestoreTestingRecoveryPointSelectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        algorithm: cdktn.stringToTerraform(struct!.algorithm),
        exclude_vaults: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeVaults),
        include_vaults: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeVaults),
        recovery_point_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.recoveryPointTypes),
        selection_window_days: cdktn.numberToTerraform(struct!.selectionWindowDays),
    }
}


export function ccRestoreTestingPlanRestoreTestingRecoveryPointSelectionPropertyToHclTerraform(struct?: CcRestoreTestingPlan.RestoreTestingRecoveryPointSelectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        algorithm: {
            value: cdktn.stringToHclTerraform(struct!.algorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exclude_vaults: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeVaults),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        include_vaults: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeVaults),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        recovery_point_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.recoveryPointTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        selection_window_days: {
            value: cdktn.numberToHclTerraform(struct!.selectionWindowDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRestoreTestingPlanTagPropertyToTerraform(struct?: CcRestoreTestingPlan.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRestoreTestingPlanTagPropertyToHclTerraform(struct?: CcRestoreTestingPlan.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRestoreTestingPlan {
export interface RestoreTestingRecoveryPointSelectionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#algorithm CcRestoreTestingPlan#algorithm}
    */
    readonly algorithm: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#exclude_vaults CcRestoreTestingPlan#exclude_vaults}
    */
    readonly excludeVaults?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#include_vaults CcRestoreTestingPlan#include_vaults}
    */
    readonly includeVaults: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#recovery_point_types CcRestoreTestingPlan#recovery_point_types}
    */
    readonly recoveryPointTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#selection_window_days CcRestoreTestingPlan#selection_window_days}
    */
    readonly selectionWindowDays?: number;
}
export class RestoreTestingRecoveryPointSelectionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestoreTestingRecoveryPointSelectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._algorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithm = this._algorithm;
        }
        if (this._excludeVaults !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeVaults = this._excludeVaults;
        }
        if (this._includeVaults !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeVaults = this._includeVaults;
        }
        if (this._recoveryPointTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.recoveryPointTypes = this._recoveryPointTypes;
        }
        if (this._selectionWindowDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.selectionWindowDays = this._selectionWindowDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestoreTestingRecoveryPointSelectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._algorithm = undefined;
            this._excludeVaults = undefined;
            this._includeVaults = undefined;
            this._recoveryPointTypes = undefined;
            this._selectionWindowDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._algorithm = value.algorithm;
            this._excludeVaults = value.excludeVaults;
            this._includeVaults = value.includeVaults;
            this._recoveryPointTypes = value.recoveryPointTypes;
            this._selectionWindowDays = value.selectionWindowDays;
        }
    }

    // algorithm - computed: false, optional: false, required: true
    private _algorithm?: string; 
    public get algorithm() {
        return this.getStringAttribute('algorithm');
    }
    public set algorithm(value: string) {
        this._algorithm = value;
    }
    // Temporarily expose input value. Use with caution.
    public get algorithmInput() {
        return this._algorithm;
    }

    // exclude_vaults - computed: true, optional: true, required: false
    private _excludeVaults?: string[]; 
    public get excludeVaults() {
        return this.getListAttribute('exclude_vaults');
    }
    public set excludeVaults(value: string[]) {
        this._excludeVaults = value;
    }
    public resetExcludeVaults() {
        this._excludeVaults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeVaultsInput() {
        return this._excludeVaults;
    }

    // include_vaults - computed: false, optional: false, required: true
    private _includeVaults?: string[]; 
    public get includeVaults() {
        return this.getListAttribute('include_vaults');
    }
    public set includeVaults(value: string[]) {
        this._includeVaults = value;
    }
    // Temporarily expose input value. Use with caution.
    public get includeVaultsInput() {
        return this._includeVaults;
    }

    // recovery_point_types - computed: false, optional: false, required: true
    private _recoveryPointTypes?: string[]; 
    public get recoveryPointTypes() {
        return this.getListAttribute('recovery_point_types');
    }
    public set recoveryPointTypes(value: string[]) {
        this._recoveryPointTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recoveryPointTypesInput() {
        return this._recoveryPointTypes;
    }

    // selection_window_days - computed: true, optional: true, required: false
    private _selectionWindowDays?: number; 
    public get selectionWindowDays() {
        return this.getNumberAttribute('selection_window_days');
    }
    public set selectionWindowDays(value: number) {
        this._selectionWindowDays = value;
    }
    public resetSelectionWindowDays() {
        this._selectionWindowDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectionWindowDaysInput() {
        return this._selectionWindowDays;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#key CcRestoreTestingPlan#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_plan#value CcRestoreTestingPlan#value}
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
