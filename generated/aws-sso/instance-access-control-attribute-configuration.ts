// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInstanceAccessControlAttributeConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes CcInstanceAccessControlAttributeConfiguration#access_control_attributes}
    */
    readonly accessControlAttributes?: CcInstanceAccessControlAttributeConfiguration.AccessControlAttributeProperty[] | cdktn.IResolvable;
    /**
    * The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. We recomend that you use  AccessControlAttributes property instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration#instance_access_control_attribute_configuration CcInstanceAccessControlAttributeConfiguration#instance_access_control_attribute_configuration}
    */
    readonly instanceAccessControlAttributeConfiguration?: CcInstanceAccessControlAttributeConfiguration.InstanceAccessControlAttributeConfigurationProperty;
    /**
    * The ARN of the AWS SSO instance under which the operation will be executed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration#instance_arn CcInstanceAccessControlAttributeConfiguration#instance_arn}
    */
    readonly instanceArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration awscc_sso_instance_access_control_attribute_configuration}
*/
export class CcInstanceAccessControlAttributeConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sso_instance_access_control_attribute_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInstanceAccessControlAttributeConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInstanceAccessControlAttributeConfiguration to import
    * @param importFromId The id of the existing CcInstanceAccessControlAttributeConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInstanceAccessControlAttributeConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sso_instance_access_control_attribute_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration awscc_sso_instance_access_control_attribute_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInstanceAccessControlAttributeConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcInstanceAccessControlAttributeConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sso_instance_access_control_attribute_configuration',
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
        this._accessControlAttributes.internalValue = config.accessControlAttributes;
        this._instanceAccessControlAttributeConfiguration.internalValue = config.instanceAccessControlAttributeConfiguration;
        this._instanceArn = config.instanceArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_control_attributes - computed: true, optional: true, required: false
    private _accessControlAttributes = new CcInstanceAccessControlAttributeConfiguration.AccessControlAttributePropertyList(this, "access_control_attributes", false);
    public get accessControlAttributes() {
        return this._accessControlAttributes;
    }
    public putAccessControlAttributes(value: CcInstanceAccessControlAttributeConfiguration.AccessControlAttributeProperty[] | cdktn.IResolvable) {
        this._accessControlAttributes.internalValue = value;
    }
    public resetAccessControlAttributes() {
        this._accessControlAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlAttributesInput() {
        return this._accessControlAttributes.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_access_control_attribute_configuration - computed: true, optional: true, required: false
    private _instanceAccessControlAttributeConfiguration = new CcInstanceAccessControlAttributeConfiguration.InstanceAccessControlAttributeConfigurationPropertyOutputReference(this, "instance_access_control_attribute_configuration");
    public get instanceAccessControlAttributeConfiguration() {
        return this._instanceAccessControlAttributeConfiguration;
    }
    public putInstanceAccessControlAttributeConfiguration(value: CcInstanceAccessControlAttributeConfiguration.InstanceAccessControlAttributeConfigurationProperty) {
        this._instanceAccessControlAttributeConfiguration.internalValue = value;
    }
    public resetInstanceAccessControlAttributeConfiguration() {
        this._instanceAccessControlAttributeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceAccessControlAttributeConfigurationInput() {
        return this._instanceAccessControlAttributeConfiguration.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_control_attributes: cdktn.listMapper(ccInstanceAccessControlAttributeConfigurationAccessControlAttributePropertyToTerraform, false)(this._accessControlAttributes.internalValue),
            instance_access_control_attribute_configuration: ccInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationPropertyToTerraform(this._instanceAccessControlAttributeConfiguration.internalValue),
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_control_attributes: {
                value: cdktn.listMapperHcl(ccInstanceAccessControlAttributeConfigurationAccessControlAttributePropertyToHclTerraform, false)(this._accessControlAttributes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInstanceAccessControlAttributeConfiguration.AccessControlAttributePropertyList",
            },
            instance_access_control_attribute_configuration: {
                value: ccInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationPropertyToHclTerraform(this._instanceAccessControlAttributeConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstanceAccessControlAttributeConfiguration.InstanceAccessControlAttributeConfigurationProperty",
            },
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInstanceAccessControlAttributeConfigurationAccessControlAttributeValuePropertyToTerraform(struct?: CcInstanceAccessControlAttributeConfiguration.AccessControlAttributeValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.source),
    }
}


export function ccInstanceAccessControlAttributeConfigurationAccessControlAttributeValuePropertyToHclTerraform(struct?: CcInstanceAccessControlAttributeConfiguration.AccessControlAttributeValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.source),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceAccessControlAttributeConfigurationAccessControlAttributePropertyToTerraform(struct?: CcInstanceAccessControlAttributeConfiguration.AccessControlAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: ccInstanceAccessControlAttributeConfigurationAccessControlAttributeValuePropertyToTerraform(struct!.value),
    }
}


export function ccInstanceAccessControlAttributeConfigurationAccessControlAttributePropertyToHclTerraform(struct?: CcInstanceAccessControlAttributeConfiguration.AccessControlAttributeProperty | cdktn.IResolvable): any {
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
            value: ccInstanceAccessControlAttributeConfigurationAccessControlAttributeValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "AccessControlAttributeValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceAccessControlAttributeConfigurationValuePropertyToTerraform(struct?: CcInstanceAccessControlAttributeConfiguration.ValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.source),
    }
}


export function ccInstanceAccessControlAttributeConfigurationValuePropertyToHclTerraform(struct?: CcInstanceAccessControlAttributeConfiguration.ValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.source),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceAccessControlAttributeConfigurationAccessControlAttributesPropertyToTerraform(struct?: CcInstanceAccessControlAttributeConfiguration.AccessControlAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: ccInstanceAccessControlAttributeConfigurationValuePropertyToTerraform(struct!.value),
    }
}


export function ccInstanceAccessControlAttributeConfigurationAccessControlAttributesPropertyToHclTerraform(struct?: CcInstanceAccessControlAttributeConfiguration.AccessControlAttributesProperty | cdktn.IResolvable): any {
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
            value: ccInstanceAccessControlAttributeConfigurationValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "ValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationPropertyToTerraform(struct?: CcInstanceAccessControlAttributeConfiguration.InstanceAccessControlAttributeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_control_attributes: cdktn.listMapper(ccInstanceAccessControlAttributeConfigurationAccessControlAttributesPropertyToTerraform, false)(struct!.accessControlAttributes),
    }
}


export function ccInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationPropertyToHclTerraform(struct?: CcInstanceAccessControlAttributeConfiguration.InstanceAccessControlAttributeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_control_attributes: {
            value: cdktn.listMapperHcl(ccInstanceAccessControlAttributeConfigurationAccessControlAttributesPropertyToHclTerraform, false)(struct!.accessControlAttributes),
            isBlock: true,
            type: "list",
            storageClassType: "AccessControlAttributesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcInstanceAccessControlAttributeConfiguration {
export interface AccessControlAttributeValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration#source CcInstanceAccessControlAttributeConfiguration#source}
    */
    readonly source?: string[];
}
export class AccessControlAttributeValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessControlAttributeValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessControlAttributeValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._source = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._source = value.source;
        }
    }

    // source - computed: true, optional: true, required: false
    private _source?: string[]; 
    public get source() {
        return this.getListAttribute('source');
    }
    public set source(value: string[]) {
        this._source = value;
    }
    public resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }
}
export interface AccessControlAttributeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration#key CcInstanceAccessControlAttributeConfiguration#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration#value CcInstanceAccessControlAttributeConfiguration#value}
    */
    readonly value?: AccessControlAttributeValueProperty;
}
export class AccessControlAttributePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AccessControlAttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessControlAttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value.internalValue = value.value;
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
    private _value = new AccessControlAttributeValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: AccessControlAttributeValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class AccessControlAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : AccessControlAttributeProperty[] | cdktn.IResolvable

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
    public get(index: number): AccessControlAttributePropertyOutputReference {
        return new AccessControlAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration#source CcInstanceAccessControlAttributeConfiguration#source}
    */
    readonly source?: string[];
}
export class ValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._source = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._source = value.source;
        }
    }

    // source - computed: true, optional: true, required: false
    private _source?: string[]; 
    public get source() {
        return this.getListAttribute('source');
    }
    public set source(value: string[]) {
        this._source = value;
    }
    public resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }
}
export interface AccessControlAttributesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration#key CcInstanceAccessControlAttributeConfiguration#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration#value CcInstanceAccessControlAttributeConfiguration#value}
    */
    readonly value?: ValueProperty;
}
export class AccessControlAttributesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AccessControlAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessControlAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value.internalValue = value.value;
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
    private _value = new ValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: ValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class AccessControlAttributesPropertyList extends cdktn.ComplexList {
    public internalValue? : AccessControlAttributesProperty[] | cdktn.IResolvable

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
    public get(index: number): AccessControlAttributesPropertyOutputReference {
        return new AccessControlAttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InstanceAccessControlAttributeConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes CcInstanceAccessControlAttributeConfiguration#access_control_attributes}
    */
    readonly accessControlAttributes?: AccessControlAttributesProperty[] | cdktn.IResolvable;
}
export class InstanceAccessControlAttributeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceAccessControlAttributeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessControlAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlAttributes = this._accessControlAttributes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceAccessControlAttributeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessControlAttributes.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessControlAttributes.internalValue = value.accessControlAttributes;
        }
    }

    // access_control_attributes - computed: true, optional: true, required: false
    private _accessControlAttributes = new AccessControlAttributesPropertyList(this, "access_control_attributes", false);
    public get accessControlAttributes() {
        return this._accessControlAttributes;
    }
    public putAccessControlAttributes(value: AccessControlAttributesProperty[] | cdktn.IResolvable) {
        this._accessControlAttributes.internalValue = value;
    }
    public resetAccessControlAttributes() {
        this._accessControlAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlAttributesInput() {
        return this._accessControlAttributes.internalValue;
    }
}
}
