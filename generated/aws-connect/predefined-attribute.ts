// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_predefined_attribute

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPredefinedAttributeProps extends cdktn.TerraformMetaArguments {
    /**
    * Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_predefined_attribute#attribute_configuration CcPredefinedAttribute#attribute_configuration}
    */
    readonly attributeConfiguration?: CcPredefinedAttribute.AttributeConfigurationProperty;
    /**
    * The identifier of the Amazon Connect instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_predefined_attribute#instance_arn CcPredefinedAttribute#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * The name of the predefined attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_predefined_attribute#name CcPredefinedAttribute#name}
    */
    readonly name: string;
    /**
    * The assigned purposes of the predefined attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_predefined_attribute#purposes CcPredefinedAttribute#purposes}
    */
    readonly purposes?: string[];
    /**
    * The values of a predefined attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_predefined_attribute#values CcPredefinedAttribute#values}
    */
    readonly values?: CcPredefinedAttribute.ValuesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_predefined_attribute awscc_connect_predefined_attribute}
*/
export class CcPredefinedAttribute extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_predefined_attribute";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPredefinedAttribute resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPredefinedAttribute to import
    * @param importFromId The id of the existing CcPredefinedAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_predefined_attribute#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPredefinedAttribute to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_predefined_attribute", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_predefined_attribute awscc_connect_predefined_attribute} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPredefinedAttributeProps
    */
    public constructor(scope: Construct, id: string, config: CcPredefinedAttributeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_predefined_attribute',
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
        this._attributeConfiguration.internalValue = config.attributeConfiguration;
        this._instanceArn = config.instanceArn;
        this._name = config.name;
        this._purposes = config.purposes;
        this._values.internalValue = config.values;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // attribute_configuration - computed: true, optional: true, required: false
    private _attributeConfiguration = new CcPredefinedAttribute.AttributeConfigurationPropertyOutputReference(this, "attribute_configuration");
    public get attributeConfiguration() {
        return this._attributeConfiguration;
    }
    public putAttributeConfiguration(value: CcPredefinedAttribute.AttributeConfigurationProperty) {
        this._attributeConfiguration.internalValue = value;
    }
    public resetAttributeConfiguration() {
        this._attributeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeConfigurationInput() {
        return this._attributeConfiguration.internalValue;
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

    // purposes - computed: true, optional: true, required: false
    private _purposes?: string[]; 
    public get purposes() {
        return this.getListAttribute('purposes');
    }
    public set purposes(value: string[]) {
        this._purposes = value;
    }
    public resetPurposes() {
        this._purposes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get purposesInput() {
        return this._purposes;
    }

    // values - computed: true, optional: true, required: false
    private _values = new CcPredefinedAttribute.ValuesPropertyOutputReference(this, "values");
    public get values() {
        return this._values;
    }
    public putValues(value: CcPredefinedAttribute.ValuesProperty) {
        this._values.internalValue = value;
    }
    public resetValues() {
        this._values.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            attribute_configuration: ccPredefinedAttributeAttributeConfigurationPropertyToTerraform(this._attributeConfiguration.internalValue),
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            name: cdktn.stringToTerraform(this._name),
            purposes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._purposes),
            values: ccPredefinedAttributeValuesPropertyToTerraform(this._values.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            attribute_configuration: {
                value: ccPredefinedAttributeAttributeConfigurationPropertyToHclTerraform(this._attributeConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPredefinedAttribute.AttributeConfigurationProperty",
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
            purposes: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._purposes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            values: {
                value: ccPredefinedAttributeValuesPropertyToHclTerraform(this._values.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPredefinedAttribute.ValuesProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPredefinedAttributeAttributeConfigurationPropertyToTerraform(struct?: CcPredefinedAttribute.AttributeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_value_validation_on_association: cdktn.booleanToTerraform(struct!.enableValueValidationOnAssociation),
        is_read_only: cdktn.booleanToTerraform(struct!.isReadOnly),
    }
}


export function ccPredefinedAttributeAttributeConfigurationPropertyToHclTerraform(struct?: CcPredefinedAttribute.AttributeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_value_validation_on_association: {
            value: cdktn.booleanToHclTerraform(struct!.enableValueValidationOnAssociation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_read_only: {
            value: cdktn.booleanToHclTerraform(struct!.isReadOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPredefinedAttributeValuesPropertyToTerraform(struct?: CcPredefinedAttribute.ValuesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringList),
    }
}


export function ccPredefinedAttributeValuesPropertyToHclTerraform(struct?: CcPredefinedAttribute.ValuesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export namespace CcPredefinedAttribute {
export interface AttributeConfigurationProperty {
    /**
    * Enables customers to enforce strict validation on the specific values that this predefined attribute can hold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_predefined_attribute#enable_value_validation_on_association CcPredefinedAttribute#enable_value_validation_on_association}
    */
    readonly enableValueValidationOnAssociation?: boolean | cdktn.IResolvable;
    /**
    * Allows the predefined attribute to show up and be managed in the Amazon Connect UI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_predefined_attribute#is_read_only CcPredefinedAttribute#is_read_only}
    */
    readonly isReadOnly?: boolean | cdktn.IResolvable;
}
export class AttributeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AttributeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableValueValidationOnAssociation !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableValueValidationOnAssociation = this._enableValueValidationOnAssociation;
        }
        if (this._isReadOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.isReadOnly = this._isReadOnly;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableValueValidationOnAssociation = undefined;
            this._isReadOnly = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableValueValidationOnAssociation = value.enableValueValidationOnAssociation;
            this._isReadOnly = value.isReadOnly;
        }
    }

    // enable_value_validation_on_association - computed: true, optional: true, required: false
    private _enableValueValidationOnAssociation?: boolean | cdktn.IResolvable; 
    public get enableValueValidationOnAssociation() {
        return this.getBooleanAttribute('enable_value_validation_on_association');
    }
    public set enableValueValidationOnAssociation(value: boolean | cdktn.IResolvable) {
        this._enableValueValidationOnAssociation = value;
    }
    public resetEnableValueValidationOnAssociation() {
        this._enableValueValidationOnAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableValueValidationOnAssociationInput() {
        return this._enableValueValidationOnAssociation;
    }

    // is_read_only - computed: true, optional: true, required: false
    private _isReadOnly?: boolean | cdktn.IResolvable; 
    public get isReadOnly() {
        return this.getBooleanAttribute('is_read_only');
    }
    public set isReadOnly(value: boolean | cdktn.IResolvable) {
        this._isReadOnly = value;
    }
    public resetIsReadOnly() {
        this._isReadOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isReadOnlyInput() {
        return this._isReadOnly;
    }
}
export interface ValuesProperty {
    /**
    * Predefined attribute values of type string list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_predefined_attribute#string_list CcPredefinedAttribute#string_list}
    */
    readonly stringList?: string[];
}
export class ValuesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValuesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._stringList !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringList = this._stringList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValuesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._stringList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._stringList = value.stringList;
        }
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
}
