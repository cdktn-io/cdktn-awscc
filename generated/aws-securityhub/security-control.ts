// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSecurityControlProps extends cdktn.TerraformMetaArguments {
    /**
    * The most recent reason for updating the customizable properties of a security control. This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#last_update_reason CcSecurityControl#last_update_reason}
    */
    readonly lastUpdateReason?: string;
    /**
    * An object that identifies the name of a control parameter, its current value, and whether it has been customized.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#parameters CcSecurityControl#parameters}
    */
    readonly parameters: { [key: string]: CcSecurityControl.ParameterConfigurationProperty } | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#security_control_arn CcSecurityControl#security_control_arn}
    */
    readonly securityControlArn?: string;
    /**
    * The unique identifier of a security control across standards. Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#security_control_id CcSecurityControl#security_control_id}
    */
    readonly securityControlId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control awscc_securityhub_security_control}
*/
export class CcSecurityControl extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityhub_security_control";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSecurityControl resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSecurityControl to import
    * @param importFromId The id of the existing CcSecurityControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSecurityControl to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_security_control", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control awscc_securityhub_security_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSecurityControlProps
    */
    public constructor(scope: Construct, id: string, config: CcSecurityControlProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityhub_security_control',
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
        this._lastUpdateReason = config.lastUpdateReason;
        this._parameters.internalValue = config.parameters;
        this._securityControlArn = config.securityControlArn;
        this._securityControlId = config.securityControlId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_update_reason - computed: true, optional: true, required: false
    private _lastUpdateReason?: string; 
    public get lastUpdateReason() {
        return this.getStringAttribute('last_update_reason');
    }
    public set lastUpdateReason(value: string) {
        this._lastUpdateReason = value;
    }
    public resetLastUpdateReason() {
        this._lastUpdateReason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastUpdateReasonInput() {
        return this._lastUpdateReason;
    }

    // parameters - computed: false, optional: false, required: true
    private _parameters = new CcSecurityControl.ParameterConfigurationPropertyMap(this, "parameters");
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: { [key: string]: CcSecurityControl.ParameterConfigurationProperty } | cdktn.IResolvable) {
        this._parameters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }

    // security_control_arn - computed: true, optional: true, required: false
    private _securityControlArn?: string; 
    public get securityControlArn() {
        return this.getStringAttribute('security_control_arn');
    }
    public set securityControlArn(value: string) {
        this._securityControlArn = value;
    }
    public resetSecurityControlArn() {
        this._securityControlArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityControlArnInput() {
        return this._securityControlArn;
    }

    // security_control_id - computed: true, optional: true, required: false
    private _securityControlId?: string; 
    public get securityControlId() {
        return this.getStringAttribute('security_control_id');
    }
    public set securityControlId(value: string) {
        this._securityControlId = value;
    }
    public resetSecurityControlId() {
        this._securityControlId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityControlIdInput() {
        return this._securityControlId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            last_update_reason: cdktn.stringToTerraform(this._lastUpdateReason),
            parameters: cdktn.hashMapper(ccSecurityControlParameterConfigurationPropertyToTerraform)(this._parameters.internalValue),
            security_control_arn: cdktn.stringToTerraform(this._securityControlArn),
            security_control_id: cdktn.stringToTerraform(this._securityControlId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            last_update_reason: {
                value: cdktn.stringToHclTerraform(this._lastUpdateReason),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameters: {
                value: cdktn.hashMapperHcl(ccSecurityControlParameterConfigurationPropertyToHclTerraform)(this._parameters.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcSecurityControl.ParameterConfigurationPropertyMap",
            },
            security_control_arn: {
                value: cdktn.stringToHclTerraform(this._securityControlArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_control_id: {
                value: cdktn.stringToHclTerraform(this._securityControlId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSecurityControlParameterValuePropertyToTerraform(struct?: CcSecurityControl.ParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean: cdktn.booleanToTerraform(struct!.boolean),
        double: cdktn.numberToTerraform(struct!.double),
        enum: cdktn.stringToTerraform(struct!.enum),
        enum_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enumList),
        integer: cdktn.numberToTerraform(struct!.integer),
        integer_list: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.integerList),
        string: cdktn.stringToTerraform(struct!.string),
        string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringList),
    }
}


export function ccSecurityControlParameterValuePropertyToHclTerraform(struct?: CcSecurityControl.ParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean: {
            value: cdktn.booleanToHclTerraform(struct!.boolean),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        double: {
            value: cdktn.numberToHclTerraform(struct!.double),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        enum: {
            value: cdktn.stringToHclTerraform(struct!.enum),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enum_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enumList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        integer: {
            value: cdktn.numberToHclTerraform(struct!.integer),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        integer_list: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.integerList),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        string: {
            value: cdktn.stringToHclTerraform(struct!.string),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        string_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityControlParameterConfigurationPropertyToTerraform(struct?: CcSecurityControl.ParameterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: ccSecurityControlParameterValuePropertyToTerraform(struct!.value),
        value_type: cdktn.stringToTerraform(struct!.valueType),
    }
}


export function ccSecurityControlParameterConfigurationPropertyToHclTerraform(struct?: CcSecurityControl.ParameterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value: {
            value: ccSecurityControlParameterValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "ParameterValueProperty",
        },
        value_type: {
            value: cdktn.stringToHclTerraform(struct!.valueType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSecurityControl {
export interface ParameterValueProperty {
    /**
    * A control parameter that is a boolean.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#boolean CcSecurityControl#boolean}
    */
    readonly boolean?: boolean | cdktn.IResolvable;
    /**
    * A control parameter that is a double.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#double CcSecurityControl#double}
    */
    readonly double?: number;
    /**
    * A control parameter that is a enum.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#enum CcSecurityControl#enum}
    */
    readonly enum?: string;
    /**
    * A control parameter that is a list of enums.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#enum_list CcSecurityControl#enum_list}
    */
    readonly enumList?: string[];
    /**
    * A control parameter that is a integer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#integer CcSecurityControl#integer}
    */
    readonly integer?: number;
    /**
    * A control parameter that is a list of integers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#integer_list CcSecurityControl#integer_list}
    */
    readonly integerList?: number[];
    /**
    * A control parameter that is a string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#string CcSecurityControl#string}
    */
    readonly string?: string;
    /**
    * A control parameter that is a list of strings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#string_list CcSecurityControl#string_list}
    */
    readonly stringList?: string[];
}
export class ParameterValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ParameterValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._boolean !== undefined) {
            hasAnyValues = true;
            internalValueResult.boolean = this._boolean;
        }
        if (this._double !== undefined) {
            hasAnyValues = true;
            internalValueResult.double = this._double;
        }
        if (this._enum !== undefined) {
            hasAnyValues = true;
            internalValueResult.enum = this._enum;
        }
        if (this._enumList !== undefined) {
            hasAnyValues = true;
            internalValueResult.enumList = this._enumList;
        }
        if (this._integer !== undefined) {
            hasAnyValues = true;
            internalValueResult.integer = this._integer;
        }
        if (this._integerList !== undefined) {
            hasAnyValues = true;
            internalValueResult.integerList = this._integerList;
        }
        if (this._string !== undefined) {
            hasAnyValues = true;
            internalValueResult.string = this._string;
        }
        if (this._stringList !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringList = this._stringList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParameterValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._boolean = undefined;
            this._double = undefined;
            this._enum = undefined;
            this._enumList = undefined;
            this._integer = undefined;
            this._integerList = undefined;
            this._string = undefined;
            this._stringList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._boolean = value.boolean;
            this._double = value.double;
            this._enum = value.enum;
            this._enumList = value.enumList;
            this._integer = value.integer;
            this._integerList = value.integerList;
            this._string = value.string;
            this._stringList = value.stringList;
        }
    }

    // boolean - computed: true, optional: true, required: false
    private _boolean?: boolean | cdktn.IResolvable; 
    public get boolean() {
        return this.getBooleanAttribute('boolean');
    }
    public set boolean(value: boolean | cdktn.IResolvable) {
        this._boolean = value;
    }
    public resetBoolean() {
        this._boolean = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanInput() {
        return this._boolean;
    }

    // double - computed: true, optional: true, required: false
    private _double?: number; 
    public get double() {
        return this.getNumberAttribute('double');
    }
    public set double(value: number) {
        this._double = value;
    }
    public resetDouble() {
        this._double = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleInput() {
        return this._double;
    }

    // enum - computed: true, optional: true, required: false
    private _enum?: string; 
    public get enum() {
        return this.getStringAttribute('enum');
    }
    public set enum(value: string) {
        this._enum = value;
    }
    public resetEnum() {
        this._enum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enumInput() {
        return this._enum;
    }

    // enum_list - computed: true, optional: true, required: false
    private _enumList?: string[]; 
    public get enumList() {
        return this.getListAttribute('enum_list');
    }
    public set enumList(value: string[]) {
        this._enumList = value;
    }
    public resetEnumList() {
        this._enumList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enumListInput() {
        return this._enumList;
    }

    // integer - computed: true, optional: true, required: false
    private _integer?: number; 
    public get integer() {
        return this.getNumberAttribute('integer');
    }
    public set integer(value: number) {
        this._integer = value;
    }
    public resetInteger() {
        this._integer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integerInput() {
        return this._integer;
    }

    // integer_list - computed: true, optional: true, required: false
    private _integerList?: number[]; 
    public get integerList() {
        return this.getNumberListAttribute('integer_list');
    }
    public set integerList(value: number[]) {
        this._integerList = value;
    }
    public resetIntegerList() {
        this._integerList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integerListInput() {
        return this._integerList;
    }

    // string - computed: true, optional: true, required: false
    private _string?: string; 
    public get string() {
        return this.getStringAttribute('string');
    }
    public set string(value: string) {
        this._string = value;
    }
    public resetString() {
        this._string = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringInput() {
        return this._string;
    }

    // string_list - computed: true, optional: true, required: false
    private _stringList?: string[]; 
    public get stringList() {
        return this.getListAttribute('string_list');
    }
    public set stringList(value: string[]) {
        this._stringList = value;
    }
    public resetStringList() {
        this._stringList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringListInput() {
        return this._stringList;
    }
}
export interface ParameterConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#value CcSecurityControl#value}
    */
    readonly value?: ParameterValueProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#value_type CcSecurityControl#value_type}
    */
    readonly valueType?: string;
}
export class ParameterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): ParameterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        if (this._valueType !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueType = this._valueType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParameterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value.internalValue = undefined;
            this._valueType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value.internalValue = value.value;
            this._valueType = value.valueType;
        }
    }

    // value - computed: true, optional: true, required: false
    private _value = new ParameterValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: ParameterValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }

    // value_type - computed: true, optional: true, required: false
    private _valueType?: string; 
    public get valueType() {
        return this.getStringAttribute('value_type');
    }
    public set valueType(value: string) {
        this._valueType = value;
    }
    public resetValueType() {
        this._valueType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueTypeInput() {
        return this._valueType;
    }
}

export class ParameterConfigurationPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ParameterConfigurationProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): ParameterConfigurationPropertyOutputReference {
        return new ParameterConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
}
