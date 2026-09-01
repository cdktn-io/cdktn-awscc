// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLegalHoldProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the legal hold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#description CcLegalHold#description}
    */
    readonly description: string;
    /**
    * The criteria to assign a set of resources, such as resource types or backup vaults.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#recovery_point_selection CcLegalHold#recovery_point_selection}
    */
    readonly recoveryPointSelection: CcLegalHold.RecoveryPointSelectionProperty;
    /**
    * Optional tags to include.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#tags CcLegalHold#tags}
    */
    readonly tags?: CcLegalHold.TagsItemsProperty[] | cdktn.IResolvable;
    /**
    * The title of the legal hold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#title CcLegalHold#title}
    */
    readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold awscc_backup_legal_hold}
*/
export class CcLegalHold extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_backup_legal_hold";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLegalHold resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLegalHold to import
    * @param importFromId The id of the existing CcLegalHold that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLegalHold to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_legal_hold", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold awscc_backup_legal_hold} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLegalHoldProps
    */
    public constructor(scope: Construct, id: string, config: CcLegalHoldProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_backup_legal_hold',
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
        this._description = config.description;
        this._recoveryPointSelection.internalValue = config.recoveryPointSelection;
        this._tags.internalValue = config.tags;
        this._title = config.title;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
        return this.getStringAttribute('creation_date');
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // legal_hold_id - computed: true, optional: false, required: false
    public get legalHoldId() {
        return this.getStringAttribute('legal_hold_id');
    }

    // recovery_point_selection - computed: false, optional: false, required: true
    private _recoveryPointSelection = new CcLegalHold.RecoveryPointSelectionPropertyOutputReference(this, "recovery_point_selection");
    public get recoveryPointSelection() {
        return this._recoveryPointSelection;
    }
    public putRecoveryPointSelection(value: CcLegalHold.RecoveryPointSelectionProperty) {
        this._recoveryPointSelection.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recoveryPointSelectionInput() {
        return this._recoveryPointSelection.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLegalHold.TagsItemsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLegalHold.TagsItemsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // title - computed: false, optional: false, required: true
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            recovery_point_selection: ccLegalHoldRecoveryPointSelectionPropertyToTerraform(this._recoveryPointSelection.internalValue),
            tags: cdktn.listMapper(ccLegalHoldTagsItemsPropertyToTerraform, false)(this._tags.internalValue),
            title: cdktn.stringToTerraform(this._title),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recovery_point_selection: {
                value: ccLegalHoldRecoveryPointSelectionPropertyToHclTerraform(this._recoveryPointSelection.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLegalHold.RecoveryPointSelectionProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLegalHoldTagsItemsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLegalHold.TagsItemsPropertyList",
            },
            title: {
                value: cdktn.stringToHclTerraform(this._title),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLegalHoldDateRangePropertyToTerraform(struct?: CcLegalHold.DateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_date: cdktn.stringToTerraform(struct!.fromDate),
        to_date: cdktn.stringToTerraform(struct!.toDate),
    }
}


export function ccLegalHoldDateRangePropertyToHclTerraform(struct?: CcLegalHold.DateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_date: {
            value: cdktn.stringToHclTerraform(struct!.fromDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to_date: {
            value: cdktn.stringToHclTerraform(struct!.toDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLegalHoldRecoveryPointSelectionPropertyToTerraform(struct?: CcLegalHold.RecoveryPointSelectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccLegalHoldDateRangePropertyToTerraform(struct!.dateRange),
        resource_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceIdentifiers),
        vault_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vaultNames),
    }
}


export function ccLegalHoldRecoveryPointSelectionPropertyToHclTerraform(struct?: CcLegalHold.RecoveryPointSelectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccLegalHoldDateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "DateRangeProperty",
        },
        resource_identifiers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceIdentifiers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        vault_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vaultNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLegalHoldTagsItemsPropertyToTerraform(struct?: CcLegalHold.TagsItemsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLegalHoldTagsItemsPropertyToHclTerraform(struct?: CcLegalHold.TagsItemsProperty | cdktn.IResolvable): any {
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


export namespace CcLegalHold {
export interface DateRangeProperty {
    /**
    * The beginning date, inclusive. ISO 8601 date-time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#from_date CcLegalHold#from_date}
    */
    readonly fromDate?: string;
    /**
    * The end date, inclusive. ISO 8601 date-time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#to_date CcLegalHold#to_date}
    */
    readonly toDate?: string;
}
export class DateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DateRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromDate = this._fromDate;
        }
        if (this._toDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.toDate = this._toDate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DateRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromDate = undefined;
            this._toDate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromDate = value.fromDate;
            this._toDate = value.toDate;
        }
    }

    // from_date - computed: true, optional: true, required: false
    private _fromDate?: string; 
    public get fromDate() {
        return this.getStringAttribute('from_date');
    }
    public set fromDate(value: string) {
        this._fromDate = value;
    }
    public resetFromDate() {
        this._fromDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromDateInput() {
        return this._fromDate;
    }

    // to_date - computed: true, optional: true, required: false
    private _toDate?: string; 
    public get toDate() {
        return this.getStringAttribute('to_date');
    }
    public set toDate(value: string) {
        this._toDate = value;
    }
    public resetToDate() {
        this._toDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toDateInput() {
        return this._toDate;
    }
}
export interface RecoveryPointSelectionProperty {
    /**
    * A date range for filtering recovery points.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#date_range CcLegalHold#date_range}
    */
    readonly dateRange?: DateRangeProperty;
    /**
    * The resources included in the resource selection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#resource_identifiers CcLegalHold#resource_identifiers}
    */
    readonly resourceIdentifiers?: string[];
    /**
    * The names of the vaults in which the selected recovery points are contained.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#vault_names CcLegalHold#vault_names}
    */
    readonly vaultNames?: string[];
}
export class RecoveryPointSelectionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RecoveryPointSelectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
        if (this._resourceIdentifiers !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceIdentifiers = this._resourceIdentifiers;
        }
        if (this._vaultNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.vaultNames = this._vaultNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecoveryPointSelectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
            this._resourceIdentifiers = undefined;
            this._vaultNames = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = value.dateRange;
            this._resourceIdentifiers = value.resourceIdentifiers;
            this._vaultNames = value.vaultNames;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new DateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: DateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // resource_identifiers - computed: true, optional: true, required: false
    private _resourceIdentifiers?: string[]; 
    public get resourceIdentifiers() {
        return this.getListAttribute('resource_identifiers');
    }
    public set resourceIdentifiers(value: string[]) {
        this._resourceIdentifiers = value;
    }
    public resetResourceIdentifiers() {
        this._resourceIdentifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdentifiersInput() {
        return this._resourceIdentifiers;
    }

    // vault_names - computed: true, optional: true, required: false
    private _vaultNames?: string[]; 
    public get vaultNames() {
        return this.getListAttribute('vault_names');
    }
    public set vaultNames(value: string[]) {
        this._vaultNames = value;
    }
    public resetVaultNames() {
        this._vaultNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vaultNamesInput() {
        return this._vaultNames;
    }
}
export interface TagsItemsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#key CcLegalHold#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_legal_hold#value CcLegalHold#value}
    */
    readonly value?: string;
}
export class TagsItemsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsItemsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsItemsProperty | cdktn.IResolvable | undefined) {
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

export class TagsItemsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsItemsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsItemsPropertyOutputReference {
        return new TagsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
