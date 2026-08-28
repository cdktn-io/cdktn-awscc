// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcThingTypeProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#deprecate_thing_type CcThingType#deprecate_thing_type}
    */
    readonly deprecateThingType?: boolean | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#tags CcThingType#tags}
    */
    readonly tags?: CcThingType.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#thing_type_name CcThingType#thing_type_name}
    */
    readonly thingTypeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#thing_type_properties CcThingType#thing_type_properties}
    */
    readonly thingTypeProperties?: CcThingType.ThingTypePropertiesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type awscc_iot_thing_type}
*/
export class CcThingType extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_thing_type";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcThingType resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcThingType to import
    * @param importFromId The id of the existing CcThingType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcThingType to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_thing_type", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type awscc_iot_thing_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcThingTypeProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcThingTypeProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_thing_type',
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
        this._deprecateThingType = config.deprecateThingType;
        this._tags.internalValue = config.tags;
        this._thingTypeName = config.thingTypeName;
        this._thingTypeProperties.internalValue = config.thingTypeProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // deprecate_thing_type - computed: true, optional: true, required: false
    private _deprecateThingType?: boolean | cdktn.IResolvable; 
    public get deprecateThingType() {
        return this.getBooleanAttribute('deprecate_thing_type');
    }
    public set deprecateThingType(value: boolean | cdktn.IResolvable) {
        this._deprecateThingType = value;
    }
    public resetDeprecateThingType() {
        this._deprecateThingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deprecateThingTypeInput() {
        return this._deprecateThingType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcThingType.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcThingType.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // thing_type_id - computed: true, optional: false, required: false
    public get thingTypeId() {
        return this.getStringAttribute('thing_type_id');
    }

    // thing_type_name - computed: true, optional: true, required: false
    private _thingTypeName?: string; 
    public get thingTypeName() {
        return this.getStringAttribute('thing_type_name');
    }
    public set thingTypeName(value: string) {
        this._thingTypeName = value;
    }
    public resetThingTypeName() {
        this._thingTypeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thingTypeNameInput() {
        return this._thingTypeName;
    }

    // thing_type_properties - computed: true, optional: true, required: false
    private _thingTypeProperties = new CcThingType.ThingTypePropertiesPropertyOutputReference(this, "thing_type_properties");
    public get thingTypeProperties() {
        return this._thingTypeProperties;
    }
    public putThingTypeProperties(value: CcThingType.ThingTypePropertiesProperty) {
        this._thingTypeProperties.internalValue = value;
    }
    public resetThingTypeProperties() {
        this._thingTypeProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thingTypePropertiesInput() {
        return this._thingTypeProperties.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            deprecate_thing_type: cdktn.booleanToTerraform(this._deprecateThingType),
            tags: cdktn.listMapper(ccThingTypeTagPropertyToTerraform, false)(this._tags.internalValue),
            thing_type_name: cdktn.stringToTerraform(this._thingTypeName),
            thing_type_properties: ccThingTypeThingTypePropertiesPropertyToTerraform(this._thingTypeProperties.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            deprecate_thing_type: {
                value: cdktn.booleanToHclTerraform(this._deprecateThingType),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccThingTypeTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcThingType.TagPropertyList",
            },
            thing_type_name: {
                value: cdktn.stringToHclTerraform(this._thingTypeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            thing_type_properties: {
                value: ccThingTypeThingTypePropertiesPropertyToHclTerraform(this._thingTypeProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcThingType.ThingTypePropertiesProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccThingTypeTagPropertyToTerraform(struct?: CcThingType.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccThingTypeTagPropertyToHclTerraform(struct?: CcThingType.TagProperty | cdktn.IResolvable): any {
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


export function ccThingTypePropagatingAttributePropertyToTerraform(struct?: CcThingType.PropagatingAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_attribute: cdktn.stringToTerraform(struct!.connectionAttribute),
        thing_attribute: cdktn.stringToTerraform(struct!.thingAttribute),
        user_property_key: cdktn.stringToTerraform(struct!.userPropertyKey),
    }
}


export function ccThingTypePropagatingAttributePropertyToHclTerraform(struct?: CcThingType.PropagatingAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_attribute: {
            value: cdktn.stringToHclTerraform(struct!.connectionAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        thing_attribute: {
            value: cdktn.stringToHclTerraform(struct!.thingAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_property_key: {
            value: cdktn.stringToHclTerraform(struct!.userPropertyKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThingTypeMqtt5ConfigurationPropertyToTerraform(struct?: CcThingType.Mqtt5ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        propagating_attributes: cdktn.listMapper(ccThingTypePropagatingAttributePropertyToTerraform, false)(struct!.propagatingAttributes),
    }
}


export function ccThingTypeMqtt5ConfigurationPropertyToHclTerraform(struct?: CcThingType.Mqtt5ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        propagating_attributes: {
            value: cdktn.listMapperHcl(ccThingTypePropagatingAttributePropertyToHclTerraform, false)(struct!.propagatingAttributes),
            isBlock: true,
            type: "list",
            storageClassType: "PropagatingAttributePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThingTypeThingTypePropertiesPropertyToTerraform(struct?: CcThingType.ThingTypePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mqtt_5_configuration: ccThingTypeMqtt5ConfigurationPropertyToTerraform(struct!.mqtt5Configuration),
        searchable_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.searchableAttributes),
        thing_type_description: cdktn.stringToTerraform(struct!.thingTypeDescription),
    }
}


export function ccThingTypeThingTypePropertiesPropertyToHclTerraform(struct?: CcThingType.ThingTypePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mqtt_5_configuration: {
            value: ccThingTypeMqtt5ConfigurationPropertyToHclTerraform(struct!.mqtt5Configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "Mqtt5ConfigurationProperty",
        },
        searchable_attributes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.searchableAttributes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        thing_type_description: {
            value: cdktn.stringToHclTerraform(struct!.thingTypeDescription),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcThingType {
export interface TagProperty {
    /**
    * Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#key CcThingType#key}
    */
    readonly key?: string;
    /**
    * Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#value CcThingType#value}
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
export interface PropagatingAttributeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#connection_attribute CcThingType#connection_attribute}
    */
    readonly connectionAttribute?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#thing_attribute CcThingType#thing_attribute}
    */
    readonly thingAttribute?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#user_property_key CcThingType#user_property_key}
    */
    readonly userPropertyKey?: string;
}
export class PropagatingAttributePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PropagatingAttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionAttribute = this._connectionAttribute;
        }
        if (this._thingAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.thingAttribute = this._thingAttribute;
        }
        if (this._userPropertyKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPropertyKey = this._userPropertyKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PropagatingAttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionAttribute = undefined;
            this._thingAttribute = undefined;
            this._userPropertyKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionAttribute = value.connectionAttribute;
            this._thingAttribute = value.thingAttribute;
            this._userPropertyKey = value.userPropertyKey;
        }
    }

    // connection_attribute - computed: true, optional: true, required: false
    private _connectionAttribute?: string; 
    public get connectionAttribute() {
        return this.getStringAttribute('connection_attribute');
    }
    public set connectionAttribute(value: string) {
        this._connectionAttribute = value;
    }
    public resetConnectionAttribute() {
        this._connectionAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionAttributeInput() {
        return this._connectionAttribute;
    }

    // thing_attribute - computed: true, optional: true, required: false
    private _thingAttribute?: string; 
    public get thingAttribute() {
        return this.getStringAttribute('thing_attribute');
    }
    public set thingAttribute(value: string) {
        this._thingAttribute = value;
    }
    public resetThingAttribute() {
        this._thingAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thingAttributeInput() {
        return this._thingAttribute;
    }

    // user_property_key - computed: true, optional: true, required: false
    private _userPropertyKey?: string; 
    public get userPropertyKey() {
        return this.getStringAttribute('user_property_key');
    }
    public set userPropertyKey(value: string) {
        this._userPropertyKey = value;
    }
    public resetUserPropertyKey() {
        this._userPropertyKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPropertyKeyInput() {
        return this._userPropertyKey;
    }
}

export class PropagatingAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : PropagatingAttributeProperty[] | cdktn.IResolvable

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
    public get(index: number): PropagatingAttributePropertyOutputReference {
        return new PropagatingAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Mqtt5ConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#propagating_attributes CcThingType#propagating_attributes}
    */
    readonly propagatingAttributes?: PropagatingAttributeProperty[] | cdktn.IResolvable;
}
export class Mqtt5ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Mqtt5ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._propagatingAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propagatingAttributes = this._propagatingAttributes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Mqtt5ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._propagatingAttributes.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._propagatingAttributes.internalValue = value.propagatingAttributes;
        }
    }

    // propagating_attributes - computed: true, optional: true, required: false
    private _propagatingAttributes = new PropagatingAttributePropertyList(this, "propagating_attributes", false);
    public get propagatingAttributes() {
        return this._propagatingAttributes;
    }
    public putPropagatingAttributes(value: PropagatingAttributeProperty[] | cdktn.IResolvable) {
        this._propagatingAttributes.internalValue = value;
    }
    public resetPropagatingAttributes() {
        this._propagatingAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagatingAttributesInput() {
        return this._propagatingAttributes.internalValue;
    }
}
export interface ThingTypePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#mqtt_5_configuration CcThingType#mqtt_5_configuration}
    */
    readonly mqtt5Configuration?: Mqtt5ConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#searchable_attributes CcThingType#searchable_attributes}
    */
    readonly searchableAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_type#thing_type_description CcThingType#thing_type_description}
    */
    readonly thingTypeDescription?: string;
}
export class ThingTypePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ThingTypePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mqtt5Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mqtt5Configuration = this._mqtt5Configuration?.internalValue;
        }
        if (this._searchableAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.searchableAttributes = this._searchableAttributes;
        }
        if (this._thingTypeDescription !== undefined) {
            hasAnyValues = true;
            internalValueResult.thingTypeDescription = this._thingTypeDescription;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThingTypePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mqtt5Configuration.internalValue = undefined;
            this._searchableAttributes = undefined;
            this._thingTypeDescription = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mqtt5Configuration.internalValue = value.mqtt5Configuration;
            this._searchableAttributes = value.searchableAttributes;
            this._thingTypeDescription = value.thingTypeDescription;
        }
    }

    // mqtt_5_configuration - computed: true, optional: true, required: false
    private _mqtt5Configuration = new Mqtt5ConfigurationPropertyOutputReference(this, "mqtt_5_configuration");
    public get mqtt5Configuration() {
        return this._mqtt5Configuration;
    }
    public putMqtt5Configuration(value: Mqtt5ConfigurationProperty) {
        this._mqtt5Configuration.internalValue = value;
    }
    public resetMqtt5Configuration() {
        this._mqtt5Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mqtt5ConfigurationInput() {
        return this._mqtt5Configuration.internalValue;
    }

    // searchable_attributes - computed: true, optional: true, required: false
    private _searchableAttributes?: string[]; 
    public get searchableAttributes() {
        return this.getListAttribute('searchable_attributes');
    }
    public set searchableAttributes(value: string[]) {
        this._searchableAttributes = value;
    }
    public resetSearchableAttributes() {
        this._searchableAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get searchableAttributesInput() {
        return this._searchableAttributes;
    }

    // thing_type_description - computed: true, optional: true, required: false
    private _thingTypeDescription?: string; 
    public get thingTypeDescription() {
        return this.getStringAttribute('thing_type_description');
    }
    public set thingTypeDescription(value: string) {
        this._thingTypeDescription = value;
    }
    public resetThingTypeDescription() {
        this._thingTypeDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thingTypeDescriptionInput() {
        return this._thingTypeDescription;
    }
}
}
