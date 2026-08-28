// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_extension_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcExtensionAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_extension_association#extension_identifier CcExtensionAssociation#extension_identifier}
    */
    readonly extensionIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_extension_association#extension_version_number CcExtensionAssociation#extension_version_number}
    */
    readonly extensionVersionNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_extension_association#parameters CcExtensionAssociation#parameters}
    */
    readonly parameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_extension_association#resource_identifier CcExtensionAssociation#resource_identifier}
    */
    readonly resourceIdentifier?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_extension_association#tags CcExtensionAssociation#tags}
    */
    readonly tags?: CcExtensionAssociation.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_extension_association awscc_appconfig_extension_association}
*/
export class CcExtensionAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appconfig_extension_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcExtensionAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcExtensionAssociation to import
    * @param importFromId The id of the existing CcExtensionAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_extension_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcExtensionAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appconfig_extension_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_extension_association awscc_appconfig_extension_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcExtensionAssociationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcExtensionAssociationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_appconfig_extension_association',
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
        this._extensionIdentifier = config.extensionIdentifier;
        this._extensionVersionNumber = config.extensionVersionNumber;
        this._parameters = config.parameters;
        this._resourceIdentifier = config.resourceIdentifier;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // extension_arn - computed: true, optional: false, required: false
    public get extensionArn() {
        return this.getStringAttribute('extension_arn');
    }

    // extension_association_id - computed: true, optional: false, required: false
    public get extensionAssociationId() {
        return this.getStringAttribute('extension_association_id');
    }

    // extension_identifier - computed: true, optional: true, required: false
    private _extensionIdentifier?: string; 
    public get extensionIdentifier() {
        return this.getStringAttribute('extension_identifier');
    }
    public set extensionIdentifier(value: string) {
        this._extensionIdentifier = value;
    }
    public resetExtensionIdentifier() {
        this._extensionIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extensionIdentifierInput() {
        return this._extensionIdentifier;
    }

    // extension_version_number - computed: true, optional: true, required: false
    private _extensionVersionNumber?: number; 
    public get extensionVersionNumber() {
        return this.getNumberAttribute('extension_version_number');
    }
    public set extensionVersionNumber(value: number) {
        this._extensionVersionNumber = value;
    }
    public resetExtensionVersionNumber() {
        this._extensionVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extensionVersionNumberInput() {
        return this._extensionVersionNumber;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: { [key: string]: string }; 
    public get parameters() {
        return this.getStringMapAttribute('parameters');
    }
    public set parameters(value: { [key: string]: string }) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }

    // resource_identifier - computed: true, optional: true, required: false
    private _resourceIdentifier?: string; 
    public get resourceIdentifier() {
        return this.getStringAttribute('resource_identifier');
    }
    public set resourceIdentifier(value: string) {
        this._resourceIdentifier = value;
    }
    public resetResourceIdentifier() {
        this._resourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdentifierInput() {
        return this._resourceIdentifier;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcExtensionAssociation.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcExtensionAssociation.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            extension_identifier: cdktn.stringToTerraform(this._extensionIdentifier),
            extension_version_number: cdktn.numberToTerraform(this._extensionVersionNumber),
            parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._parameters),
            resource_identifier: cdktn.stringToTerraform(this._resourceIdentifier),
            tags: cdktn.listMapper(ccExtensionAssociationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            extension_identifier: {
                value: cdktn.stringToHclTerraform(this._extensionIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            extension_version_number: {
                value: cdktn.numberToHclTerraform(this._extensionVersionNumber),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            parameters: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._parameters),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            resource_identifier: {
                value: cdktn.stringToHclTerraform(this._resourceIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccExtensionAssociationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcExtensionAssociation.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccExtensionAssociationTagPropertyToTerraform(struct?: CcExtensionAssociation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccExtensionAssociationTagPropertyToHclTerraform(struct?: CcExtensionAssociation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcExtensionAssociation {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_extension_association#key CcExtensionAssociation#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_extension_association#value CcExtensionAssociation#value}
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
}
