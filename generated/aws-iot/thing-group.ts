// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcThingGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group#parent_group_name CcThingGroup#parent_group_name}
    */
    readonly parentGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group#query_string CcThingGroup#query_string}
    */
    readonly queryString?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group#tags CcThingGroup#tags}
    */
    readonly tags?: CcThingGroup.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group#thing_group_name CcThingGroup#thing_group_name}
    */
    readonly thingGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group#thing_group_properties CcThingGroup#thing_group_properties}
    */
    readonly thingGroupProperties?: CcThingGroup.ThingGroupPropertiesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group awscc_iot_thing_group}
*/
export class CcThingGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_thing_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcThingGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcThingGroup to import
    * @param importFromId The id of the existing CcThingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcThingGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_thing_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group awscc_iot_thing_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcThingGroupProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcThingGroupProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_thing_group',
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
        this._parentGroupName = config.parentGroupName;
        this._queryString = config.queryString;
        this._tags.internalValue = config.tags;
        this._thingGroupName = config.thingGroupName;
        this._thingGroupProperties.internalValue = config.thingGroupProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // parent_group_name - computed: true, optional: true, required: false
    private _parentGroupName?: string; 
    public get parentGroupName() {
        return this.getStringAttribute('parent_group_name');
    }
    public set parentGroupName(value: string) {
        this._parentGroupName = value;
    }
    public resetParentGroupName() {
        this._parentGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parentGroupNameInput() {
        return this._parentGroupName;
    }

    // query_string - computed: true, optional: true, required: false
    private _queryString?: string; 
    public get queryString() {
        return this.getStringAttribute('query_string');
    }
    public set queryString(value: string) {
        this._queryString = value;
    }
    public resetQueryString() {
        this._queryString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
        return this._queryString;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcThingGroup.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcThingGroup.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // thing_group_id - computed: true, optional: false, required: false
    public get thingGroupId() {
        return this.getStringAttribute('thing_group_id');
    }

    // thing_group_name - computed: true, optional: true, required: false
    private _thingGroupName?: string; 
    public get thingGroupName() {
        return this.getStringAttribute('thing_group_name');
    }
    public set thingGroupName(value: string) {
        this._thingGroupName = value;
    }
    public resetThingGroupName() {
        this._thingGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thingGroupNameInput() {
        return this._thingGroupName;
    }

    // thing_group_properties - computed: true, optional: true, required: false
    private _thingGroupProperties = new CcThingGroup.ThingGroupPropertiesPropertyOutputReference(this, "thing_group_properties");
    public get thingGroupProperties() {
        return this._thingGroupProperties;
    }
    public putThingGroupProperties(value: CcThingGroup.ThingGroupPropertiesProperty) {
        this._thingGroupProperties.internalValue = value;
    }
    public resetThingGroupProperties() {
        this._thingGroupProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thingGroupPropertiesInput() {
        return this._thingGroupProperties.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            parent_group_name: cdktn.stringToTerraform(this._parentGroupName),
            query_string: cdktn.stringToTerraform(this._queryString),
            tags: cdktn.listMapper(ccThingGroupTagPropertyToTerraform, false)(this._tags.internalValue),
            thing_group_name: cdktn.stringToTerraform(this._thingGroupName),
            thing_group_properties: ccThingGroupThingGroupPropertiesPropertyToTerraform(this._thingGroupProperties.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            parent_group_name: {
                value: cdktn.stringToHclTerraform(this._parentGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            query_string: {
                value: cdktn.stringToHclTerraform(this._queryString),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccThingGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcThingGroup.TagPropertyList",
            },
            thing_group_name: {
                value: cdktn.stringToHclTerraform(this._thingGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            thing_group_properties: {
                value: ccThingGroupThingGroupPropertiesPropertyToHclTerraform(this._thingGroupProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcThingGroup.ThingGroupPropertiesProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccThingGroupTagPropertyToTerraform(struct?: CcThingGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccThingGroupTagPropertyToHclTerraform(struct?: CcThingGroup.TagProperty | cdktn.IResolvable): any {
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


export function ccThingGroupAttributePayloadPropertyToTerraform(struct?: CcThingGroup.AttributePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.attributes),
    }
}


export function ccThingGroupAttributePayloadPropertyToHclTerraform(struct?: CcThingGroup.AttributePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.attributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccThingGroupThingGroupPropertiesPropertyToTerraform(struct?: CcThingGroup.ThingGroupPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_payload: ccThingGroupAttributePayloadPropertyToTerraform(struct!.attributePayload),
        thing_group_description: cdktn.stringToTerraform(struct!.thingGroupDescription),
    }
}


export function ccThingGroupThingGroupPropertiesPropertyToHclTerraform(struct?: CcThingGroup.ThingGroupPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute_payload: {
            value: ccThingGroupAttributePayloadPropertyToHclTerraform(struct!.attributePayload),
            isBlock: true,
            type: "struct",
            storageClassType: "AttributePayloadProperty",
        },
        thing_group_description: {
            value: cdktn.stringToHclTerraform(struct!.thingGroupDescription),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcThingGroup {
export interface TagProperty {
    /**
    * Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group#key CcThingGroup#key}
    */
    readonly key?: string;
    /**
    * Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group#value CcThingGroup#value}
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
export interface AttributePayloadProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group#attributes CcThingGroup#attributes}
    */
    readonly attributes?: { [key: string]: string };
}
export class AttributePayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AttributePayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributePayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributes = value.attributes;
        }
    }

    // attributes - computed: true, optional: true, required: false
    private _attributes?: { [key: string]: string }; 
    public get attributes() {
        return this.getStringMapAttribute('attributes');
    }
    public set attributes(value: { [key: string]: string }) {
        this._attributes = value;
    }
    public resetAttributes() {
        this._attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes;
    }
}
export interface ThingGroupPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group#attribute_payload CcThingGroup#attribute_payload}
    */
    readonly attributePayload?: AttributePayloadProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_thing_group#thing_group_description CcThingGroup#thing_group_description}
    */
    readonly thingGroupDescription?: string;
}
export class ThingGroupPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ThingGroupPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributePayload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributePayload = this._attributePayload?.internalValue;
        }
        if (this._thingGroupDescription !== undefined) {
            hasAnyValues = true;
            internalValueResult.thingGroupDescription = this._thingGroupDescription;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThingGroupPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributePayload.internalValue = undefined;
            this._thingGroupDescription = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributePayload.internalValue = value.attributePayload;
            this._thingGroupDescription = value.thingGroupDescription;
        }
    }

    // attribute_payload - computed: true, optional: true, required: false
    private _attributePayload = new AttributePayloadPropertyOutputReference(this, "attribute_payload");
    public get attributePayload() {
        return this._attributePayload;
    }
    public putAttributePayload(value: AttributePayloadProperty) {
        this._attributePayload.internalValue = value;
    }
    public resetAttributePayload() {
        this._attributePayload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributePayloadInput() {
        return this._attributePayload.internalValue;
    }

    // thing_group_description - computed: true, optional: true, required: false
    private _thingGroupDescription?: string; 
    public get thingGroupDescription() {
        return this.getStringAttribute('thing_group_description');
    }
    public set thingGroupDescription(value: string) {
        this._thingGroupDescription = value;
    }
    public resetThingGroupDescription() {
        this._thingGroupDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thingGroupDescriptionInput() {
        return this._thingGroupDescription;
    }
}
}
