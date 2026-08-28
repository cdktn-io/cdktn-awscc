// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_service_action

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceActionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_service_action#accept_language CcServiceAction#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_service_action#definition CcServiceAction#definition}
    */
    readonly definition: CcServiceAction.DefinitionParameterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_service_action#definition_type CcServiceAction#definition_type}
    */
    readonly definitionType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_service_action#description CcServiceAction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_service_action#name CcServiceAction#name}
    */
    readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_service_action awscc_servicecatalog_service_action}
*/
export class CcServiceAction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_service_action";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServiceAction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServiceAction to import
    * @param importFromId The id of the existing CcServiceAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_service_action#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServiceAction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_service_action", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_service_action awscc_servicecatalog_service_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceActionProps
    */
    public constructor(scope: Construct, id: string, config: CcServiceActionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_service_action',
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
        this._acceptLanguage = config.acceptLanguage;
        this._definition.internalValue = config.definition;
        this._definitionType = config.definitionType;
        this._description = config.description;
        this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: true, optional: true, required: false
    private _acceptLanguage?: string; 
    public get acceptLanguage() {
        return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string) {
        this._acceptLanguage = value;
    }
    public resetAcceptLanguage() {
        this._acceptLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptLanguageInput() {
        return this._acceptLanguage;
    }

    // definition - computed: false, optional: false, required: true
    private _definition = new CcServiceAction.DefinitionParameterPropertyList(this, "definition", false);
    public get definition() {
        return this._definition;
    }
    public putDefinition(value: CcServiceAction.DefinitionParameterProperty[] | cdktn.IResolvable) {
        this._definition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition.internalValue;
    }

    // definition_type - computed: false, optional: false, required: true
    private _definitionType?: string; 
    public get definitionType() {
        return this.getStringAttribute('definition_type');
    }
    public set definitionType(value: string) {
        this._definitionType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionTypeInput() {
        return this._definitionType;
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

    // service_action_id - computed: true, optional: false, required: false
    public get serviceActionId() {
        return this.getStringAttribute('service_action_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accept_language: cdktn.stringToTerraform(this._acceptLanguage),
            definition: cdktn.listMapper(ccServiceActionDefinitionParameterPropertyToTerraform, false)(this._definition.internalValue),
            definition_type: cdktn.stringToTerraform(this._definitionType),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            accept_language: {
                value: cdktn.stringToHclTerraform(this._acceptLanguage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            definition: {
                value: cdktn.listMapperHcl(ccServiceActionDefinitionParameterPropertyToHclTerraform, false)(this._definition.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcServiceAction.DefinitionParameterPropertyList",
            },
            definition_type: {
                value: cdktn.stringToHclTerraform(this._definitionType),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServiceActionDefinitionParameterPropertyToTerraform(struct?: CcServiceAction.DefinitionParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceActionDefinitionParameterPropertyToHclTerraform(struct?: CcServiceAction.DefinitionParameterProperty | cdktn.IResolvable): any {
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


export namespace CcServiceAction {
export interface DefinitionParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_service_action#key CcServiceAction#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_service_action#value CcServiceAction#value}
    */
    readonly value: string;
}
export class DefinitionParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DefinitionParameterProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DefinitionParameterProperty | cdktn.IResolvable | undefined) {
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

    // key - computed: false, optional: false, required: true
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: false, optional: false, required: true
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class DefinitionParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : DefinitionParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): DefinitionParameterPropertyOutputReference {
        return new DefinitionParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
