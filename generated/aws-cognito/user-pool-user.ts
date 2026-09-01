// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserPoolUserProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#client_metadata CcUserPoolUser#client_metadata}
    */
    readonly clientMetadata?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#desired_delivery_mediums CcUserPoolUser#desired_delivery_mediums}
    */
    readonly desiredDeliveryMediums?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#force_alias_creation CcUserPoolUser#force_alias_creation}
    */
    readonly forceAliasCreation?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#message_action CcUserPoolUser#message_action}
    */
    readonly messageAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#user_attributes CcUserPoolUser#user_attributes}
    */
    readonly userAttributes?: CcUserPoolUser.AttributeTypeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#user_pool_id CcUserPoolUser#user_pool_id}
    */
    readonly userPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#username CcUserPoolUser#username}
    */
    readonly username?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#validation_data CcUserPoolUser#validation_data}
    */
    readonly validationData?: CcUserPoolUser.ValidationDataProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user awscc_cognito_user_pool_user}
*/
export class CcUserPoolUser extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_user_pool_user";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserPoolUser resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserPoolUser to import
    * @param importFromId The id of the existing CcUserPoolUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserPoolUser to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_user", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user awscc_cognito_user_pool_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserPoolUserProps
    */
    public constructor(scope: Construct, id: string, config: CcUserPoolUserProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_user_pool_user',
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
        this._clientMetadata = config.clientMetadata;
        this._desiredDeliveryMediums = config.desiredDeliveryMediums;
        this._forceAliasCreation = config.forceAliasCreation;
        this._messageAction = config.messageAction;
        this._userAttributes.internalValue = config.userAttributes;
        this._userPoolId = config.userPoolId;
        this._username = config.username;
        this._validationData.internalValue = config.validationData;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // client_metadata - computed: true, optional: true, required: false
    private _clientMetadata?: { [key: string]: string }; 
    public get clientMetadata() {
        return this.getStringMapAttribute('client_metadata');
    }
    public set clientMetadata(value: { [key: string]: string }) {
        this._clientMetadata = value;
    }
    public resetClientMetadata() {
        this._clientMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientMetadataInput() {
        return this._clientMetadata;
    }

    // desired_delivery_mediums - computed: true, optional: true, required: false
    private _desiredDeliveryMediums?: string[]; 
    public get desiredDeliveryMediums() {
        return this.getListAttribute('desired_delivery_mediums');
    }
    public set desiredDeliveryMediums(value: string[]) {
        this._desiredDeliveryMediums = value;
    }
    public resetDesiredDeliveryMediums() {
        this._desiredDeliveryMediums = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredDeliveryMediumsInput() {
        return this._desiredDeliveryMediums;
    }

    // force_alias_creation - computed: true, optional: true, required: false
    private _forceAliasCreation?: boolean | cdktn.IResolvable; 
    public get forceAliasCreation() {
        return this.getBooleanAttribute('force_alias_creation');
    }
    public set forceAliasCreation(value: boolean | cdktn.IResolvable) {
        this._forceAliasCreation = value;
    }
    public resetForceAliasCreation() {
        this._forceAliasCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceAliasCreationInput() {
        return this._forceAliasCreation;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // message_action - computed: true, optional: true, required: false
    private _messageAction?: string; 
    public get messageAction() {
        return this.getStringAttribute('message_action');
    }
    public set messageAction(value: string) {
        this._messageAction = value;
    }
    public resetMessageAction() {
        this._messageAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageActionInput() {
        return this._messageAction;
    }

    // user_attributes - computed: true, optional: true, required: false
    private _userAttributes = new CcUserPoolUser.AttributeTypePropertyList(this, "user_attributes", false);
    public get userAttributes() {
        return this._userAttributes;
    }
    public putUserAttributes(value: CcUserPoolUser.AttributeTypeProperty[] | cdktn.IResolvable) {
        this._userAttributes.internalValue = value;
    }
    public resetUserAttributes() {
        this._userAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userAttributesInput() {
        return this._userAttributes.internalValue;
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }

    // validation_data - computed: true, optional: true, required: false
    private _validationData = new CcUserPoolUser.ValidationDataPropertyList(this, "validation_data", false);
    public get validationData() {
        return this._validationData;
    }
    public putValidationData(value: CcUserPoolUser.ValidationDataProperty[] | cdktn.IResolvable) {
        this._validationData.internalValue = value;
    }
    public resetValidationData() {
        this._validationData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationDataInput() {
        return this._validationData.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            client_metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._clientMetadata),
            desired_delivery_mediums: cdktn.listMapper(cdktn.stringToTerraform, false)(this._desiredDeliveryMediums),
            force_alias_creation: cdktn.booleanToTerraform(this._forceAliasCreation),
            message_action: cdktn.stringToTerraform(this._messageAction),
            user_attributes: cdktn.listMapper(ccUserPoolUserAttributeTypePropertyToTerraform, false)(this._userAttributes.internalValue),
            user_pool_id: cdktn.stringToTerraform(this._userPoolId),
            username: cdktn.stringToTerraform(this._username),
            validation_data: cdktn.listMapper(ccUserPoolUserValidationDataPropertyToTerraform, false)(this._validationData.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            client_metadata: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._clientMetadata),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            desired_delivery_mediums: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._desiredDeliveryMediums),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            force_alias_creation: {
                value: cdktn.booleanToHclTerraform(this._forceAliasCreation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            message_action: {
                value: cdktn.stringToHclTerraform(this._messageAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_attributes: {
                value: cdktn.listMapperHcl(ccUserPoolUserAttributeTypePropertyToHclTerraform, false)(this._userAttributes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUserPoolUser.AttributeTypePropertyList",
            },
            user_pool_id: {
                value: cdktn.stringToHclTerraform(this._userPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username: {
                value: cdktn.stringToHclTerraform(this._username),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validation_data: {
                value: cdktn.listMapperHcl(ccUserPoolUserValidationDataPropertyToHclTerraform, false)(this._validationData.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUserPoolUser.ValidationDataPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserPoolUserAttributeTypePropertyToTerraform(struct?: CcUserPoolUser.AttributeTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccUserPoolUserAttributeTypePropertyToHclTerraform(struct?: CcUserPoolUser.AttributeTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccUserPoolUserValidationDataPropertyToTerraform(struct?: CcUserPoolUser.ValidationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccUserPoolUserValidationDataPropertyToHclTerraform(struct?: CcUserPoolUser.ValidationDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export namespace CcUserPoolUser {
export interface AttributeTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#name CcUserPoolUser#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#value CcUserPoolUser#value}
    */
    readonly value?: string;
}
export class AttributeTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AttributeTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributeTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
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

export class AttributeTypePropertyList extends cdktn.ComplexList {
    public internalValue? : AttributeTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): AttributeTypePropertyOutputReference {
        return new AttributeTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ValidationDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#name CcUserPoolUser#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_user#value CcUserPoolUser#value}
    */
    readonly value?: string;
}
export class ValidationDataPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ValidationDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidationDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
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

export class ValidationDataPropertyList extends cdktn.ComplexList {
    public internalValue? : ValidationDataProperty[] | cdktn.IResolvable

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
    public get(index: number): ValidationDataPropertyOutputReference {
        return new ValidationDataPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
