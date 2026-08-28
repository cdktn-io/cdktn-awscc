// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_scheduled_audit

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScheduledAuditProps extends cdktn.TerraformMetaArguments {
    /**
    * The day of the month on which the scheduled audit takes place. Can be 1 through 31 or LAST. This field is required if the frequency parameter is set to MONTHLY.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_scheduled_audit#day_of_month CcScheduledAudit#day_of_month}
    */
    readonly dayOfMonth?: string;
    /**
    * The day of the week on which the scheduled audit takes place. Can be one of SUN, MON, TUE,WED, THU, FRI, or SAT. This field is required if the frequency parameter is set to WEEKLY or BIWEEKLY.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_scheduled_audit#day_of_week CcScheduledAudit#day_of_week}
    */
    readonly dayOfWeek?: string;
    /**
    * How often the scheduled audit takes place. Can be one of DAILY, WEEKLY, BIWEEKLY, or MONTHLY.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_scheduled_audit#frequency CcScheduledAudit#frequency}
    */
    readonly frequency: string;
    /**
    * The name you want to give to the scheduled audit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_scheduled_audit#scheduled_audit_name CcScheduledAudit#scheduled_audit_name}
    */
    readonly scheduledAuditName?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_scheduled_audit#tags CcScheduledAudit#tags}
    */
    readonly tags?: CcScheduledAudit.TagProperty[] | cdktn.IResolvable;
    /**
    * Which checks are performed during the scheduled audit. Checks must be enabled for your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_scheduled_audit#target_check_names CcScheduledAudit#target_check_names}
    */
    readonly targetCheckNames: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_scheduled_audit awscc_iot_scheduled_audit}
*/
export class CcScheduledAudit extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_scheduled_audit";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScheduledAudit resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScheduledAudit to import
    * @param importFromId The id of the existing CcScheduledAudit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_scheduled_audit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScheduledAudit to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_scheduled_audit", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_scheduled_audit awscc_iot_scheduled_audit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScheduledAuditProps
    */
    public constructor(scope: Construct, id: string, config: CcScheduledAuditProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_scheduled_audit',
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
        this._dayOfMonth = config.dayOfMonth;
        this._dayOfWeek = config.dayOfWeek;
        this._frequency = config.frequency;
        this._scheduledAuditName = config.scheduledAuditName;
        this._tags.internalValue = config.tags;
        this._targetCheckNames = config.targetCheckNames;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // day_of_month - computed: true, optional: true, required: false
    private _dayOfMonth?: string; 
    public get dayOfMonth() {
        return this.getStringAttribute('day_of_month');
    }
    public set dayOfMonth(value: string) {
        this._dayOfMonth = value;
    }
    public resetDayOfMonth() {
        this._dayOfMonth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dayOfMonthInput() {
        return this._dayOfMonth;
    }

    // day_of_week - computed: true, optional: true, required: false
    private _dayOfWeek?: string; 
    public get dayOfWeek() {
        return this.getStringAttribute('day_of_week');
    }
    public set dayOfWeek(value: string) {
        this._dayOfWeek = value;
    }
    public resetDayOfWeek() {
        this._dayOfWeek = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dayOfWeekInput() {
        return this._dayOfWeek;
    }

    // frequency - computed: false, optional: false, required: true
    private _frequency?: string; 
    public get frequency() {
        return this.getStringAttribute('frequency');
    }
    public set frequency(value: string) {
        this._frequency = value;
    }
    // Temporarily expose input value. Use with caution.
    public get frequencyInput() {
        return this._frequency;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // scheduled_audit_arn - computed: true, optional: false, required: false
    public get scheduledAuditArn() {
        return this.getStringAttribute('scheduled_audit_arn');
    }

    // scheduled_audit_name - computed: true, optional: true, required: false
    private _scheduledAuditName?: string; 
    public get scheduledAuditName() {
        return this.getStringAttribute('scheduled_audit_name');
    }
    public set scheduledAuditName(value: string) {
        this._scheduledAuditName = value;
    }
    public resetScheduledAuditName() {
        this._scheduledAuditName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledAuditNameInput() {
        return this._scheduledAuditName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcScheduledAudit.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcScheduledAudit.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_check_names - computed: false, optional: false, required: true
    private _targetCheckNames?: string[]; 
    public get targetCheckNames() {
        return cdktn.Fn.tolist(this.getListAttribute('target_check_names'));
    }
    public set targetCheckNames(value: string[]) {
        this._targetCheckNames = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetCheckNamesInput() {
        return this._targetCheckNames;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            day_of_month: cdktn.stringToTerraform(this._dayOfMonth),
            day_of_week: cdktn.stringToTerraform(this._dayOfWeek),
            frequency: cdktn.stringToTerraform(this._frequency),
            scheduled_audit_name: cdktn.stringToTerraform(this._scheduledAuditName),
            tags: cdktn.listMapper(ccScheduledAuditTagPropertyToTerraform, false)(this._tags.internalValue),
            target_check_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targetCheckNames),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            day_of_month: {
                value: cdktn.stringToHclTerraform(this._dayOfMonth),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            day_of_week: {
                value: cdktn.stringToHclTerraform(this._dayOfWeek),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            frequency: {
                value: cdktn.stringToHclTerraform(this._frequency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scheduled_audit_name: {
                value: cdktn.stringToHclTerraform(this._scheduledAuditName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccScheduledAuditTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcScheduledAudit.TagPropertyList",
            },
            target_check_names: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targetCheckNames),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccScheduledAuditTagPropertyToTerraform(struct?: CcScheduledAudit.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScheduledAuditTagPropertyToHclTerraform(struct?: CcScheduledAudit.TagProperty | cdktn.IResolvable): any {
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


export namespace CcScheduledAudit {
export interface TagProperty {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_scheduled_audit#key CcScheduledAudit#key}
    */
    readonly key?: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_scheduled_audit#value CcScheduledAudit#value}
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
