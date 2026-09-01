// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStateTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#data_extra_dimensions CcStateTemplate#data_extra_dimensions}
    */
    readonly dataExtraDimensions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#description CcStateTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#metadata_extra_dimensions CcStateTemplate#metadata_extra_dimensions}
    */
    readonly metadataExtraDimensions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#name CcStateTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#signal_catalog_arn CcStateTemplate#signal_catalog_arn}
    */
    readonly signalCatalogArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#state_template_properties CcStateTemplate#state_template_properties}
    */
    readonly stateTemplateProperties: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#tags CcStateTemplate#tags}
    */
    readonly tags?: CcStateTemplate.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template awscc_iotfleetwise_state_template}
*/
export class CcStateTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotfleetwise_state_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStateTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStateTemplate to import
    * @param importFromId The id of the existing CcStateTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStateTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotfleetwise_state_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template awscc_iotfleetwise_state_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStateTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcStateTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotfleetwise_state_template',
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
        this._dataExtraDimensions = config.dataExtraDimensions;
        this._description = config.description;
        this._metadataExtraDimensions = config.metadataExtraDimensions;
        this._name = config.name;
        this._signalCatalogArn = config.signalCatalogArn;
        this._stateTemplateProperties = config.stateTemplateProperties;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // data_extra_dimensions - computed: true, optional: true, required: false
    private _dataExtraDimensions?: string[]; 
    public get dataExtraDimensions() {
        return this.getListAttribute('data_extra_dimensions');
    }
    public set dataExtraDimensions(value: string[]) {
        this._dataExtraDimensions = value;
    }
    public resetDataExtraDimensions() {
        this._dataExtraDimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataExtraDimensionsInput() {
        return this._dataExtraDimensions;
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

    // last_modification_time - computed: true, optional: false, required: false
    public get lastModificationTime() {
        return this.getStringAttribute('last_modification_time');
    }

    // metadata_extra_dimensions - computed: true, optional: true, required: false
    private _metadataExtraDimensions?: string[]; 
    public get metadataExtraDimensions() {
        return this.getListAttribute('metadata_extra_dimensions');
    }
    public set metadataExtraDimensions(value: string[]) {
        this._metadataExtraDimensions = value;
    }
    public resetMetadataExtraDimensions() {
        this._metadataExtraDimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataExtraDimensionsInput() {
        return this._metadataExtraDimensions;
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

    // signal_catalog_arn - computed: false, optional: false, required: true
    private _signalCatalogArn?: string; 
    public get signalCatalogArn() {
        return this.getStringAttribute('signal_catalog_arn');
    }
    public set signalCatalogArn(value: string) {
        this._signalCatalogArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get signalCatalogArnInput() {
        return this._signalCatalogArn;
    }

    // state_template_id - computed: true, optional: false, required: false
    public get stateTemplateId() {
        return this.getStringAttribute('state_template_id');
    }

    // state_template_properties - computed: false, optional: false, required: true
    private _stateTemplateProperties?: string[]; 
    public get stateTemplateProperties() {
        return this.getListAttribute('state_template_properties');
    }
    public set stateTemplateProperties(value: string[]) {
        this._stateTemplateProperties = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stateTemplatePropertiesInput() {
        return this._stateTemplateProperties;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStateTemplate.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStateTemplate.TagProperty[] | cdktn.IResolvable) {
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
            data_extra_dimensions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dataExtraDimensions),
            description: cdktn.stringToTerraform(this._description),
            metadata_extra_dimensions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._metadataExtraDimensions),
            name: cdktn.stringToTerraform(this._name),
            signal_catalog_arn: cdktn.stringToTerraform(this._signalCatalogArn),
            state_template_properties: cdktn.listMapper(cdktn.stringToTerraform, false)(this._stateTemplateProperties),
            tags: cdktn.listMapper(ccStateTemplateTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_extra_dimensions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dataExtraDimensions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata_extra_dimensions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._metadataExtraDimensions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            signal_catalog_arn: {
                value: cdktn.stringToHclTerraform(this._signalCatalogArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state_template_properties: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._stateTemplateProperties),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStateTemplateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcStateTemplate.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStateTemplateTagPropertyToTerraform(struct?: CcStateTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStateTemplateTagPropertyToHclTerraform(struct?: CcStateTemplate.TagProperty | cdktn.IResolvable): any {
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


export namespace CcStateTemplate {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#key CcStateTemplate#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#value CcStateTemplate#value}
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
