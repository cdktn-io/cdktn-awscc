// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRestoreTestingSelectionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#iam_role_arn CcRestoreTestingSelection#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#protected_resource_arns CcRestoreTestingSelection#protected_resource_arns}
    */
    readonly protectedResourceArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#protected_resource_conditions CcRestoreTestingSelection#protected_resource_conditions}
    */
    readonly protectedResourceConditions?: CcRestoreTestingSelection.ProtectedResourceConditionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#protected_resource_type CcRestoreTestingSelection#protected_resource_type}
    */
    readonly protectedResourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#restore_metadata_overrides CcRestoreTestingSelection#restore_metadata_overrides}
    */
    readonly restoreMetadataOverrides?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#restore_testing_plan_name CcRestoreTestingSelection#restore_testing_plan_name}
    */
    readonly restoreTestingPlanName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#restore_testing_selection_name CcRestoreTestingSelection#restore_testing_selection_name}
    */
    readonly restoreTestingSelectionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#validation_window_hours CcRestoreTestingSelection#validation_window_hours}
    */
    readonly validationWindowHours?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection awscc_backup_restore_testing_selection}
*/
export class CcRestoreTestingSelection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_backup_restore_testing_selection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRestoreTestingSelection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRestoreTestingSelection to import
    * @param importFromId The id of the existing CcRestoreTestingSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRestoreTestingSelection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_restore_testing_selection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection awscc_backup_restore_testing_selection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRestoreTestingSelectionProps
    */
    public constructor(scope: Construct, id: string, config: CcRestoreTestingSelectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_backup_restore_testing_selection',
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
        this._iamRoleArn = config.iamRoleArn;
        this._protectedResourceArns = config.protectedResourceArns;
        this._protectedResourceConditions.internalValue = config.protectedResourceConditions;
        this._protectedResourceType = config.protectedResourceType;
        this._restoreMetadataOverrides = config.restoreMetadataOverrides;
        this._restoreTestingPlanName = config.restoreTestingPlanName;
        this._restoreTestingSelectionName = config.restoreTestingSelectionName;
        this._validationWindowHours = config.validationWindowHours;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // iam_role_arn - computed: false, optional: false, required: true
    private _iamRoleArn?: string; 
    public get iamRoleArn() {
        return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string) {
        this._iamRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
        return this._iamRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // protected_resource_arns - computed: true, optional: true, required: false
    private _protectedResourceArns?: string[]; 
    public get protectedResourceArns() {
        return this.getListAttribute('protected_resource_arns');
    }
    public set protectedResourceArns(value: string[]) {
        this._protectedResourceArns = value;
    }
    public resetProtectedResourceArns() {
        this._protectedResourceArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protectedResourceArnsInput() {
        return this._protectedResourceArns;
    }

    // protected_resource_conditions - computed: true, optional: true, required: false
    private _protectedResourceConditions = new CcRestoreTestingSelection.ProtectedResourceConditionsPropertyOutputReference(this, "protected_resource_conditions");
    public get protectedResourceConditions() {
        return this._protectedResourceConditions;
    }
    public putProtectedResourceConditions(value: CcRestoreTestingSelection.ProtectedResourceConditionsProperty) {
        this._protectedResourceConditions.internalValue = value;
    }
    public resetProtectedResourceConditions() {
        this._protectedResourceConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protectedResourceConditionsInput() {
        return this._protectedResourceConditions.internalValue;
    }

    // protected_resource_type - computed: false, optional: false, required: true
    private _protectedResourceType?: string; 
    public get protectedResourceType() {
        return this.getStringAttribute('protected_resource_type');
    }
    public set protectedResourceType(value: string) {
        this._protectedResourceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protectedResourceTypeInput() {
        return this._protectedResourceType;
    }

    // restore_metadata_overrides - computed: true, optional: true, required: false
    private _restoreMetadataOverrides?: { [key: string]: string }; 
    public get restoreMetadataOverrides() {
        return this.getStringMapAttribute('restore_metadata_overrides');
    }
    public set restoreMetadataOverrides(value: { [key: string]: string }) {
        this._restoreMetadataOverrides = value;
    }
    public resetRestoreMetadataOverrides() {
        this._restoreMetadataOverrides = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restoreMetadataOverridesInput() {
        return this._restoreMetadataOverrides;
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

    // restore_testing_selection_name - computed: false, optional: false, required: true
    private _restoreTestingSelectionName?: string; 
    public get restoreTestingSelectionName() {
        return this.getStringAttribute('restore_testing_selection_name');
    }
    public set restoreTestingSelectionName(value: string) {
        this._restoreTestingSelectionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restoreTestingSelectionNameInput() {
        return this._restoreTestingSelectionName;
    }

    // validation_window_hours - computed: true, optional: true, required: false
    private _validationWindowHours?: number; 
    public get validationWindowHours() {
        return this.getNumberAttribute('validation_window_hours');
    }
    public set validationWindowHours(value: number) {
        this._validationWindowHours = value;
    }
    public resetValidationWindowHours() {
        this._validationWindowHours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationWindowHoursInput() {
        return this._validationWindowHours;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            iam_role_arn: cdktn.stringToTerraform(this._iamRoleArn),
            protected_resource_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._protectedResourceArns),
            protected_resource_conditions: ccRestoreTestingSelectionProtectedResourceConditionsPropertyToTerraform(this._protectedResourceConditions.internalValue),
            protected_resource_type: cdktn.stringToTerraform(this._protectedResourceType),
            restore_metadata_overrides: cdktn.hashMapper(cdktn.stringToTerraform)(this._restoreMetadataOverrides),
            restore_testing_plan_name: cdktn.stringToTerraform(this._restoreTestingPlanName),
            restore_testing_selection_name: cdktn.stringToTerraform(this._restoreTestingSelectionName),
            validation_window_hours: cdktn.numberToTerraform(this._validationWindowHours),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            iam_role_arn: {
                value: cdktn.stringToHclTerraform(this._iamRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            protected_resource_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._protectedResourceArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            protected_resource_conditions: {
                value: ccRestoreTestingSelectionProtectedResourceConditionsPropertyToHclTerraform(this._protectedResourceConditions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRestoreTestingSelection.ProtectedResourceConditionsProperty",
            },
            protected_resource_type: {
                value: cdktn.stringToHclTerraform(this._protectedResourceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            restore_metadata_overrides: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._restoreMetadataOverrides),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            restore_testing_plan_name: {
                value: cdktn.stringToHclTerraform(this._restoreTestingPlanName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            restore_testing_selection_name: {
                value: cdktn.stringToHclTerraform(this._restoreTestingSelectionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validation_window_hours: {
                value: cdktn.numberToHclTerraform(this._validationWindowHours),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRestoreTestingSelectionKeyValuePropertyToTerraform(struct?: CcRestoreTestingSelection.KeyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRestoreTestingSelectionKeyValuePropertyToHclTerraform(struct?: CcRestoreTestingSelection.KeyValueProperty | cdktn.IResolvable): any {
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


export function ccRestoreTestingSelectionStringNotEqualsPropertyToTerraform(struct?: CcRestoreTestingSelection.StringNotEqualsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRestoreTestingSelectionStringNotEqualsPropertyToHclTerraform(struct?: CcRestoreTestingSelection.StringNotEqualsProperty | cdktn.IResolvable): any {
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


export function ccRestoreTestingSelectionProtectedResourceConditionsPropertyToTerraform(struct?: CcRestoreTestingSelection.ProtectedResourceConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        string_equals: cdktn.listMapper(ccRestoreTestingSelectionKeyValuePropertyToTerraform, false)(struct!.stringEquals),
        string_not_equals: cdktn.listMapper(ccRestoreTestingSelectionStringNotEqualsPropertyToTerraform, false)(struct!.stringNotEquals),
    }
}


export function ccRestoreTestingSelectionProtectedResourceConditionsPropertyToHclTerraform(struct?: CcRestoreTestingSelection.ProtectedResourceConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        string_equals: {
            value: cdktn.listMapperHcl(ccRestoreTestingSelectionKeyValuePropertyToHclTerraform, false)(struct!.stringEquals),
            isBlock: true,
            type: "list",
            storageClassType: "KeyValuePropertyList",
        },
        string_not_equals: {
            value: cdktn.listMapperHcl(ccRestoreTestingSelectionStringNotEqualsPropertyToHclTerraform, false)(struct!.stringNotEquals),
            isBlock: true,
            type: "list",
            storageClassType: "StringNotEqualsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcRestoreTestingSelection {
export interface KeyValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#key CcRestoreTestingSelection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#value CcRestoreTestingSelection#value}
    */
    readonly value?: string;
}
export class KeyValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KeyValueProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: KeyValueProperty | cdktn.IResolvable | undefined) {
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

export class KeyValuePropertyList extends cdktn.ComplexList {
    public internalValue? : KeyValueProperty[] | cdktn.IResolvable

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
    public get(index: number): KeyValuePropertyOutputReference {
        return new KeyValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StringNotEqualsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#key CcRestoreTestingSelection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#value CcRestoreTestingSelection#value}
    */
    readonly value?: string;
}
export class StringNotEqualsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StringNotEqualsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: StringNotEqualsProperty | cdktn.IResolvable | undefined) {
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

export class StringNotEqualsPropertyList extends cdktn.ComplexList {
    public internalValue? : StringNotEqualsProperty[] | cdktn.IResolvable

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
    public get(index: number): StringNotEqualsPropertyOutputReference {
        return new StringNotEqualsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProtectedResourceConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#string_equals CcRestoreTestingSelection#string_equals}
    */
    readonly stringEquals?: KeyValueProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_restore_testing_selection#string_not_equals CcRestoreTestingSelection#string_not_equals}
    */
    readonly stringNotEquals?: StringNotEqualsProperty[] | cdktn.IResolvable;
}
export class ProtectedResourceConditionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProtectedResourceConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._stringEquals?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringEquals = this._stringEquals?.internalValue;
        }
        if (this._stringNotEquals?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringNotEquals = this._stringNotEquals?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProtectedResourceConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._stringEquals.internalValue = undefined;
            this._stringNotEquals.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._stringEquals.internalValue = value.stringEquals;
            this._stringNotEquals.internalValue = value.stringNotEquals;
        }
    }

    // string_equals - computed: true, optional: true, required: false
    private _stringEquals = new KeyValuePropertyList(this, "string_equals", false);
    public get stringEquals() {
        return this._stringEquals;
    }
    public putStringEquals(value: KeyValueProperty[] | cdktn.IResolvable) {
        this._stringEquals.internalValue = value;
    }
    public resetStringEquals() {
        this._stringEquals.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringEqualsInput() {
        return this._stringEquals.internalValue;
    }

    // string_not_equals - computed: true, optional: true, required: false
    private _stringNotEquals = new StringNotEqualsPropertyList(this, "string_not_equals", false);
    public get stringNotEquals() {
        return this._stringNotEquals;
    }
    public putStringNotEquals(value: StringNotEqualsProperty[] | cdktn.IResolvable) {
        this._stringNotEquals.internalValue = value;
    }
    public resetStringNotEquals() {
        this._stringNotEquals.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringNotEqualsInput() {
        return this._stringNotEquals.internalValue;
    }
}
}
