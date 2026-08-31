// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcThingProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing#attribute_payload CcThing#attribute_payload}
    */
    readonly attributePayload?: CcThing.AttributePayloadProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing#thing_name CcThing#thing_name}
    */
    readonly thingName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing awscc_iot_thing}
*/
export class CcThing extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_thing";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcThing resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcThing to import
    * @param importFromId The id of the existing CcThing that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcThing to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_thing", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing awscc_iot_thing} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcThingProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcThingProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_thing',
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
        this._attributePayload.internalValue = config.attributePayload;
        this._thingName = config.thingName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // attribute_payload - computed: true, optional: true, required: false
    private _attributePayload = new CcThing.AttributePayloadPropertyOutputReference(this, "attribute_payload");
    public get attributePayload() {
        return this._attributePayload;
    }
    public putAttributePayload(value: CcThing.AttributePayloadProperty) {
        this._attributePayload.internalValue = value;
    }
    public resetAttributePayload() {
        this._attributePayload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributePayloadInput() {
        return this._attributePayload.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // thing_id - computed: true, optional: false, required: false
    public get thingId() {
        return this.getStringAttribute('thing_id');
    }

    // thing_name - computed: true, optional: true, required: false
    private _thingName?: string; 
    public get thingName() {
        return this.getStringAttribute('thing_name');
    }
    public set thingName(value: string) {
        this._thingName = value;
    }
    public resetThingName() {
        this._thingName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thingNameInput() {
        return this._thingName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            attribute_payload: ccThingAttributePayloadPropertyToTerraform(this._attributePayload.internalValue),
            thing_name: cdktn.stringToTerraform(this._thingName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            attribute_payload: {
                value: ccThingAttributePayloadPropertyToHclTerraform(this._attributePayload.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcThing.AttributePayloadProperty",
            },
            thing_name: {
                value: cdktn.stringToHclTerraform(this._thingName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccThingAttributePayloadPropertyToTerraform(struct?: CcThing.AttributePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.attributes),
    }
}


export function ccThingAttributePayloadPropertyToHclTerraform(struct?: CcThing.AttributePayloadProperty | cdktn.IResolvable): any {
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


export namespace CcThing {
export interface AttributePayloadProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing#attributes CcThing#attributes}
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
}
