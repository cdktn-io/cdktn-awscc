// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataTableAttributeProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#data_table_arn CcDataTableAttribute#data_table_arn}
    */
    readonly dataTableArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#description CcDataTableAttribute#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#instance_arn CcDataTableAttribute#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#name CcDataTableAttribute#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#primary CcDataTableAttribute#primary}
    */
    readonly primary?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#validation CcDataTableAttribute#validation}
    */
    readonly validation?: CcDataTableAttribute.ValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#value_type CcDataTableAttribute#value_type}
    */
    readonly valueType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute awscc_connect_data_table_attribute}
*/
export class CcDataTableAttribute extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_data_table_attribute";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataTableAttribute resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataTableAttribute to import
    * @param importFromId The id of the existing CcDataTableAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataTableAttribute to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_data_table_attribute", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute awscc_connect_data_table_attribute} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataTableAttributeProps
    */
    public constructor(scope: Construct, id: string, config: CcDataTableAttributeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_data_table_attribute',
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
        this._dataTableArn = config.dataTableArn;
        this._description = config.description;
        this._instanceArn = config.instanceArn;
        this._name = config.name;
        this._primary = config.primary;
        this._validation.internalValue = config.validation;
        this._valueType = config.valueType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // attribute_id - computed: true, optional: false, required: false
    public get attributeId() {
        return this.getStringAttribute('attribute_id');
    }

    // data_table_arn - computed: false, optional: false, required: true
    private _dataTableArn?: string; 
    public get dataTableArn() {
        return this.getStringAttribute('data_table_arn');
    }
    public set dataTableArn(value: string) {
        this._dataTableArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTableArnInput() {
        return this._dataTableArn;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
    }

    // last_modified_region - computed: true, optional: false, required: false
    public get lastModifiedRegion() {
        return this.getStringAttribute('last_modified_region');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getNumberAttribute('last_modified_time');
    }

    // lock_version - computed: true, optional: false, required: false
    private _lockVersion = new CcDataTableAttribute.LockVersionPropertyOutputReference(this, "lock_version");
    public get lockVersion() {
        return this._lockVersion;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // primary - computed: true, optional: true, required: false
    private _primary?: boolean | cdktn.IResolvable; 
    public get primary() {
        return this.getBooleanAttribute('primary');
    }
    public set primary(value: boolean | cdktn.IResolvable) {
        this._primary = value;
    }
    public resetPrimary() {
        this._primary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryInput() {
        return this._primary;
    }

    // validation - computed: true, optional: true, required: false
    private _validation = new CcDataTableAttribute.ValidationPropertyOutputReference(this, "validation");
    public get validation() {
        return this._validation;
    }
    public putValidation(value: CcDataTableAttribute.ValidationProperty) {
        this._validation.internalValue = value;
    }
    public resetValidation() {
        this._validation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
        return this._validation.internalValue;
    }

    // value_type - computed: false, optional: false, required: true
    private _valueType?: string; 
    public get valueType() {
        return this.getStringAttribute('value_type');
    }
    public set valueType(value: string) {
        this._valueType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueTypeInput() {
        return this._valueType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            data_table_arn: cdktn.stringToTerraform(this._dataTableArn),
            description: cdktn.stringToTerraform(this._description),
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            name: cdktn.stringToTerraform(this._name),
            primary: cdktn.booleanToTerraform(this._primary),
            validation: ccDataTableAttributeValidationPropertyToTerraform(this._validation.internalValue),
            value_type: cdktn.stringToTerraform(this._valueType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_table_arn: {
                value: cdktn.stringToHclTerraform(this._dataTableArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            primary: {
                value: cdktn.booleanToHclTerraform(this._primary),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            validation: {
                value: ccDataTableAttributeValidationPropertyToHclTerraform(this._validation.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataTableAttribute.ValidationProperty",
            },
            value_type: {
                value: cdktn.stringToHclTerraform(this._valueType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataTableAttributeLockVersionPropertyToTerraform(struct?: CcDataTableAttribute.LockVersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataTableAttributeLockVersionPropertyToHclTerraform(struct?: CcDataTableAttribute.LockVersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataTableAttributeEnumPropertyToTerraform(struct?: CcDataTableAttribute.EnumProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        strict: cdktn.booleanToTerraform(struct!.strict),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccDataTableAttributeEnumPropertyToHclTerraform(struct?: CcDataTableAttribute.EnumProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        strict: {
            value: cdktn.booleanToHclTerraform(struct!.strict),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataTableAttributeValidationPropertyToTerraform(struct?: CcDataTableAttribute.ValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enum: ccDataTableAttributeEnumPropertyToTerraform(struct!.enum),
        exclusive_maximum: cdktn.numberToTerraform(struct!.exclusiveMaximum),
        exclusive_minimum: cdktn.numberToTerraform(struct!.exclusiveMinimum),
        max_length: cdktn.numberToTerraform(struct!.maxLength),
        max_values: cdktn.numberToTerraform(struct!.maxValues),
        maximum: cdktn.numberToTerraform(struct!.maximum),
        min_length: cdktn.numberToTerraform(struct!.minLength),
        min_values: cdktn.numberToTerraform(struct!.minValues),
        minimum: cdktn.numberToTerraform(struct!.minimum),
        multiple_of: cdktn.numberToTerraform(struct!.multipleOf),
    }
}


export function ccDataTableAttributeValidationPropertyToHclTerraform(struct?: CcDataTableAttribute.ValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enum: {
            value: ccDataTableAttributeEnumPropertyToHclTerraform(struct!.enum),
            isBlock: true,
            type: "struct",
            storageClassType: "EnumProperty",
        },
        exclusive_maximum: {
            value: cdktn.numberToHclTerraform(struct!.exclusiveMaximum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        exclusive_minimum: {
            value: cdktn.numberToHclTerraform(struct!.exclusiveMinimum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_length: {
            value: cdktn.numberToHclTerraform(struct!.maxLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_values: {
            value: cdktn.numberToHclTerraform(struct!.maxValues),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum: {
            value: cdktn.numberToHclTerraform(struct!.maximum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_length: {
            value: cdktn.numberToHclTerraform(struct!.minLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_values: {
            value: cdktn.numberToHclTerraform(struct!.minValues),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum: {
            value: cdktn.numberToHclTerraform(struct!.minimum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        multiple_of: {
            value: cdktn.numberToHclTerraform(struct!.multipleOf),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDataTableAttribute {
export interface LockVersionProperty {
}
export class LockVersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LockVersionProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LockVersionProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // attribute - computed: true, optional: false, required: false
    public get attribute() {
        return this.getStringAttribute('attribute');
    }

    // data_table - computed: true, optional: false, required: false
    public get dataTable() {
        return this.getStringAttribute('data_table');
    }
}
export interface EnumProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#strict CcDataTableAttribute#strict}
    */
    readonly strict?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#values CcDataTableAttribute#values}
    */
    readonly values?: string[];
}
export class EnumPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EnumProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._strict !== undefined) {
            hasAnyValues = true;
            internalValueResult.strict = this._strict;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnumProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._strict = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._strict = value.strict;
            this._values = value.values;
        }
    }

    // strict - computed: true, optional: true, required: false
    private _strict?: boolean | cdktn.IResolvable; 
    public get strict() {
        return this.getBooleanAttribute('strict');
    }
    public set strict(value: boolean | cdktn.IResolvable) {
        this._strict = value;
    }
    public resetStrict() {
        this._strict = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strictInput() {
        return this._strict;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}
export interface ValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#enum CcDataTableAttribute#enum}
    */
    readonly enum?: EnumProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#exclusive_maximum CcDataTableAttribute#exclusive_maximum}
    */
    readonly exclusiveMaximum?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#exclusive_minimum CcDataTableAttribute#exclusive_minimum}
    */
    readonly exclusiveMinimum?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#max_length CcDataTableAttribute#max_length}
    */
    readonly maxLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#max_values CcDataTableAttribute#max_values}
    */
    readonly maxValues?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#maximum CcDataTableAttribute#maximum}
    */
    readonly maximum?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#min_length CcDataTableAttribute#min_length}
    */
    readonly minLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#min_values CcDataTableAttribute#min_values}
    */
    readonly minValues?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#minimum CcDataTableAttribute#minimum}
    */
    readonly minimum?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_attribute#multiple_of CcDataTableAttribute#multiple_of}
    */
    readonly multipleOf?: number;
}
export class ValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enum?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.enum = this._enum?.internalValue;
        }
        if (this._exclusiveMaximum !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusiveMaximum = this._exclusiveMaximum;
        }
        if (this._exclusiveMinimum !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusiveMinimum = this._exclusiveMinimum;
        }
        if (this._maxLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxLength = this._maxLength;
        }
        if (this._maxValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValues = this._maxValues;
        }
        if (this._maximum !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximum = this._maximum;
        }
        if (this._minLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.minLength = this._minLength;
        }
        if (this._minValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValues = this._minValues;
        }
        if (this._minimum !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimum = this._minimum;
        }
        if (this._multipleOf !== undefined) {
            hasAnyValues = true;
            internalValueResult.multipleOf = this._multipleOf;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enum.internalValue = undefined;
            this._exclusiveMaximum = undefined;
            this._exclusiveMinimum = undefined;
            this._maxLength = undefined;
            this._maxValues = undefined;
            this._maximum = undefined;
            this._minLength = undefined;
            this._minValues = undefined;
            this._minimum = undefined;
            this._multipleOf = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enum.internalValue = value.enum;
            this._exclusiveMaximum = value.exclusiveMaximum;
            this._exclusiveMinimum = value.exclusiveMinimum;
            this._maxLength = value.maxLength;
            this._maxValues = value.maxValues;
            this._maximum = value.maximum;
            this._minLength = value.minLength;
            this._minValues = value.minValues;
            this._minimum = value.minimum;
            this._multipleOf = value.multipleOf;
        }
    }

    // enum - computed: true, optional: true, required: false
    private _enum = new EnumPropertyOutputReference(this, "enum");
    public get enum() {
        return this._enum;
    }
    public putEnum(value: EnumProperty) {
        this._enum.internalValue = value;
    }
    public resetEnum() {
        this._enum.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enumInput() {
        return this._enum.internalValue;
    }

    // exclusive_maximum - computed: true, optional: true, required: false
    private _exclusiveMaximum?: number; 
    public get exclusiveMaximum() {
        return this.getNumberAttribute('exclusive_maximum');
    }
    public set exclusiveMaximum(value: number) {
        this._exclusiveMaximum = value;
    }
    public resetExclusiveMaximum() {
        this._exclusiveMaximum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusiveMaximumInput() {
        return this._exclusiveMaximum;
    }

    // exclusive_minimum - computed: true, optional: true, required: false
    private _exclusiveMinimum?: number; 
    public get exclusiveMinimum() {
        return this.getNumberAttribute('exclusive_minimum');
    }
    public set exclusiveMinimum(value: number) {
        this._exclusiveMinimum = value;
    }
    public resetExclusiveMinimum() {
        this._exclusiveMinimum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusiveMinimumInput() {
        return this._exclusiveMinimum;
    }

    // max_length - computed: true, optional: true, required: false
    private _maxLength?: number; 
    public get maxLength() {
        return this.getNumberAttribute('max_length');
    }
    public set maxLength(value: number) {
        this._maxLength = value;
    }
    public resetMaxLength() {
        this._maxLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxLengthInput() {
        return this._maxLength;
    }

    // max_values - computed: true, optional: true, required: false
    private _maxValues?: number; 
    public get maxValues() {
        return this.getNumberAttribute('max_values');
    }
    public set maxValues(value: number) {
        this._maxValues = value;
    }
    public resetMaxValues() {
        this._maxValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValuesInput() {
        return this._maxValues;
    }

    // maximum - computed: true, optional: true, required: false
    private _maximum?: number; 
    public get maximum() {
        return this.getNumberAttribute('maximum');
    }
    public set maximum(value: number) {
        this._maximum = value;
    }
    public resetMaximum() {
        this._maximum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumInput() {
        return this._maximum;
    }

    // min_length - computed: true, optional: true, required: false
    private _minLength?: number; 
    public get minLength() {
        return this.getNumberAttribute('min_length');
    }
    public set minLength(value: number) {
        this._minLength = value;
    }
    public resetMinLength() {
        this._minLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minLengthInput() {
        return this._minLength;
    }

    // min_values - computed: true, optional: true, required: false
    private _minValues?: number; 
    public get minValues() {
        return this.getNumberAttribute('min_values');
    }
    public set minValues(value: number) {
        this._minValues = value;
    }
    public resetMinValues() {
        this._minValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValuesInput() {
        return this._minValues;
    }

    // minimum - computed: true, optional: true, required: false
    private _minimum?: number; 
    public get minimum() {
        return this.getNumberAttribute('minimum');
    }
    public set minimum(value: number) {
        this._minimum = value;
    }
    public resetMinimum() {
        this._minimum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumInput() {
        return this._minimum;
    }

    // multiple_of - computed: true, optional: true, required: false
    private _multipleOf?: number; 
    public get multipleOf() {
        return this.getNumberAttribute('multiple_of');
    }
    public set multipleOf(value: number) {
        this._multipleOf = value;
    }
    public resetMultipleOf() {
        this._multipleOf = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multipleOfInput() {
        return this._multipleOf;
    }
}
}
