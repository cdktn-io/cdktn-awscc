// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcZonalAutoshiftConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration#practice_run_configuration CcZonalAutoshiftConfiguration#practice_run_configuration}
    */
    readonly practiceRunConfiguration?: CcZonalAutoshiftConfiguration.PracticeRunConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_identifier CcZonalAutoshiftConfiguration#resource_identifier}
    */
    readonly resourceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status CcZonalAutoshiftConfiguration#zonal_autoshift_status}
    */
    readonly zonalAutoshiftStatus?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration awscc_arczonalshift_zonal_autoshift_configuration}
*/
export class CcZonalAutoshiftConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_arczonalshift_zonal_autoshift_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcZonalAutoshiftConfiguration to import
    * @param importFromId The id of the existing CcZonalAutoshiftConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcZonalAutoshiftConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_arczonalshift_zonal_autoshift_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration awscc_arczonalshift_zonal_autoshift_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcZonalAutoshiftConfigurationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcZonalAutoshiftConfigurationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_arczonalshift_zonal_autoshift_configuration',
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
        this._practiceRunConfiguration.internalValue = config.practiceRunConfiguration;
        this._resourceIdentifier = config.resourceIdentifier;
        this._zonalAutoshiftStatus = config.zonalAutoshiftStatus;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // practice_run_configuration - computed: true, optional: true, required: false
    private _practiceRunConfiguration = new CcZonalAutoshiftConfiguration.PracticeRunConfigurationPropertyOutputReference(this, "practice_run_configuration");
    public get practiceRunConfiguration() {
        return this._practiceRunConfiguration;
    }
    public putPracticeRunConfiguration(value: CcZonalAutoshiftConfiguration.PracticeRunConfigurationProperty) {
        this._practiceRunConfiguration.internalValue = value;
    }
    public resetPracticeRunConfiguration() {
        this._practiceRunConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get practiceRunConfigurationInput() {
        return this._practiceRunConfiguration.internalValue;
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

    // zonal_autoshift_status - computed: true, optional: true, required: false
    private _zonalAutoshiftStatus?: string; 
    public get zonalAutoshiftStatus() {
        return this.getStringAttribute('zonal_autoshift_status');
    }
    public set zonalAutoshiftStatus(value: string) {
        this._zonalAutoshiftStatus = value;
    }
    public resetZonalAutoshiftStatus() {
        this._zonalAutoshiftStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zonalAutoshiftStatusInput() {
        return this._zonalAutoshiftStatus;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            practice_run_configuration: ccZonalAutoshiftConfigurationPracticeRunConfigurationPropertyToTerraform(this._practiceRunConfiguration.internalValue),
            resource_identifier: cdktn.stringToTerraform(this._resourceIdentifier),
            zonal_autoshift_status: cdktn.stringToTerraform(this._zonalAutoshiftStatus),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            practice_run_configuration: {
                value: ccZonalAutoshiftConfigurationPracticeRunConfigurationPropertyToHclTerraform(this._practiceRunConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcZonalAutoshiftConfiguration.PracticeRunConfigurationProperty",
            },
            resource_identifier: {
                value: cdktn.stringToHclTerraform(this._resourceIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zonal_autoshift_status: {
                value: cdktn.stringToHclTerraform(this._zonalAutoshiftStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccZonalAutoshiftConfigurationControlConditionPropertyToTerraform(struct?: CcZonalAutoshiftConfiguration.ControlConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_identifier: cdktn.stringToTerraform(struct!.alarmIdentifier),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccZonalAutoshiftConfigurationControlConditionPropertyToHclTerraform(struct?: CcZonalAutoshiftConfiguration.ControlConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_identifier: {
            value: cdktn.stringToHclTerraform(struct!.alarmIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccZonalAutoshiftConfigurationOutcomeAlarmsPropertyToTerraform(struct?: CcZonalAutoshiftConfiguration.OutcomeAlarmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_identifier: cdktn.stringToTerraform(struct!.alarmIdentifier),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccZonalAutoshiftConfigurationOutcomeAlarmsPropertyToHclTerraform(struct?: CcZonalAutoshiftConfiguration.OutcomeAlarmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_identifier: {
            value: cdktn.stringToHclTerraform(struct!.alarmIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccZonalAutoshiftConfigurationPracticeRunConfigurationPropertyToTerraform(struct?: CcZonalAutoshiftConfiguration.PracticeRunConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        blocked_dates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.blockedDates),
        blocked_windows: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.blockedWindows),
        blocking_alarms: cdktn.listMapper(ccZonalAutoshiftConfigurationControlConditionPropertyToTerraform, false)(struct!.blockingAlarms),
        outcome_alarms: cdktn.listMapper(ccZonalAutoshiftConfigurationOutcomeAlarmsPropertyToTerraform, false)(struct!.outcomeAlarms),
    }
}


export function ccZonalAutoshiftConfigurationPracticeRunConfigurationPropertyToHclTerraform(struct?: CcZonalAutoshiftConfiguration.PracticeRunConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        blocked_dates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.blockedDates),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        blocked_windows: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.blockedWindows),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        blocking_alarms: {
            value: cdktn.listMapperHcl(ccZonalAutoshiftConfigurationControlConditionPropertyToHclTerraform, false)(struct!.blockingAlarms),
            isBlock: true,
            type: "list",
            storageClassType: "ControlConditionPropertyList",
        },
        outcome_alarms: {
            value: cdktn.listMapperHcl(ccZonalAutoshiftConfigurationOutcomeAlarmsPropertyToHclTerraform, false)(struct!.outcomeAlarms),
            isBlock: true,
            type: "list",
            storageClassType: "OutcomeAlarmsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcZonalAutoshiftConfiguration {
export interface ControlConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier CcZonalAutoshiftConfiguration#alarm_identifier}
    */
    readonly alarmIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type CcZonalAutoshiftConfiguration#type}
    */
    readonly type?: string;
}
export class ControlConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ControlConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmIdentifier = this._alarmIdentifier;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ControlConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmIdentifier = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmIdentifier = value.alarmIdentifier;
            this._type = value.type;
        }
    }

    // alarm_identifier - computed: true, optional: true, required: false
    private _alarmIdentifier?: string; 
    public get alarmIdentifier() {
        return this.getStringAttribute('alarm_identifier');
    }
    public set alarmIdentifier(value: string) {
        this._alarmIdentifier = value;
    }
    public resetAlarmIdentifier() {
        this._alarmIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmIdentifierInput() {
        return this._alarmIdentifier;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class ControlConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : ControlConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): ControlConditionPropertyOutputReference {
        return new ControlConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OutcomeAlarmsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier CcZonalAutoshiftConfiguration#alarm_identifier}
    */
    readonly alarmIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type CcZonalAutoshiftConfiguration#type}
    */
    readonly type?: string;
}
export class OutcomeAlarmsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OutcomeAlarmsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmIdentifier = this._alarmIdentifier;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutcomeAlarmsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmIdentifier = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmIdentifier = value.alarmIdentifier;
            this._type = value.type;
        }
    }

    // alarm_identifier - computed: true, optional: true, required: false
    private _alarmIdentifier?: string; 
    public get alarmIdentifier() {
        return this.getStringAttribute('alarm_identifier');
    }
    public set alarmIdentifier(value: string) {
        this._alarmIdentifier = value;
    }
    public resetAlarmIdentifier() {
        this._alarmIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmIdentifierInput() {
        return this._alarmIdentifier;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class OutcomeAlarmsPropertyList extends cdktn.ComplexList {
    public internalValue? : OutcomeAlarmsProperty[] | cdktn.IResolvable

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
    public get(index: number): OutcomeAlarmsPropertyOutputReference {
        return new OutcomeAlarmsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PracticeRunConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_dates CcZonalAutoshiftConfiguration#blocked_dates}
    */
    readonly blockedDates?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_windows CcZonalAutoshiftConfiguration#blocked_windows}
    */
    readonly blockedWindows?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocking_alarms CcZonalAutoshiftConfiguration#blocking_alarms}
    */
    readonly blockingAlarms?: ControlConditionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/arczonalshift_zonal_autoshift_configuration#outcome_alarms CcZonalAutoshiftConfiguration#outcome_alarms}
    */
    readonly outcomeAlarms?: OutcomeAlarmsProperty[] | cdktn.IResolvable;
}
export class PracticeRunConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PracticeRunConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blockedDates !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockedDates = this._blockedDates;
        }
        if (this._blockedWindows !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockedWindows = this._blockedWindows;
        }
        if (this._blockingAlarms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockingAlarms = this._blockingAlarms?.internalValue;
        }
        if (this._outcomeAlarms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outcomeAlarms = this._outcomeAlarms?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PracticeRunConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blockedDates = undefined;
            this._blockedWindows = undefined;
            this._blockingAlarms.internalValue = undefined;
            this._outcomeAlarms.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blockedDates = value.blockedDates;
            this._blockedWindows = value.blockedWindows;
            this._blockingAlarms.internalValue = value.blockingAlarms;
            this._outcomeAlarms.internalValue = value.outcomeAlarms;
        }
    }

    // blocked_dates - computed: true, optional: true, required: false
    private _blockedDates?: string[]; 
    public get blockedDates() {
        return this.getListAttribute('blocked_dates');
    }
    public set blockedDates(value: string[]) {
        this._blockedDates = value;
    }
    public resetBlockedDates() {
        this._blockedDates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockedDatesInput() {
        return this._blockedDates;
    }

    // blocked_windows - computed: true, optional: true, required: false
    private _blockedWindows?: string[]; 
    public get blockedWindows() {
        return this.getListAttribute('blocked_windows');
    }
    public set blockedWindows(value: string[]) {
        this._blockedWindows = value;
    }
    public resetBlockedWindows() {
        this._blockedWindows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockedWindowsInput() {
        return this._blockedWindows;
    }

    // blocking_alarms - computed: true, optional: true, required: false
    private _blockingAlarms = new ControlConditionPropertyList(this, "blocking_alarms", false);
    public get blockingAlarms() {
        return this._blockingAlarms;
    }
    public putBlockingAlarms(value: ControlConditionProperty[] | cdktn.IResolvable) {
        this._blockingAlarms.internalValue = value;
    }
    public resetBlockingAlarms() {
        this._blockingAlarms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockingAlarmsInput() {
        return this._blockingAlarms.internalValue;
    }

    // outcome_alarms - computed: true, optional: true, required: false
    private _outcomeAlarms = new OutcomeAlarmsPropertyList(this, "outcome_alarms", false);
    public get outcomeAlarms() {
        return this._outcomeAlarms;
    }
    public putOutcomeAlarms(value: OutcomeAlarmsProperty[] | cdktn.IResolvable) {
        this._outcomeAlarms.internalValue = value;
    }
    public resetOutcomeAlarms() {
        this._outcomeAlarms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outcomeAlarmsInput() {
        return this._outcomeAlarms.internalValue;
    }
}
}
