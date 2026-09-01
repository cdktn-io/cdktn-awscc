// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFeatureProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#default_variation CcFeature#default_variation}
    */
    readonly defaultVariation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#description CcFeature#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#entity_overrides CcFeature#entity_overrides}
    */
    readonly entityOverrides?: CcFeature.EntityOverrideProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#evaluation_strategy CcFeature#evaluation_strategy}
    */
    readonly evaluationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#name CcFeature#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#project CcFeature#project}
    */
    readonly project: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#tags CcFeature#tags}
    */
    readonly tags?: CcFeature.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#variations CcFeature#variations}
    */
    readonly variations: CcFeature.VariationObjectProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature awscc_evidently_feature}
*/
export class CcFeature extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_evidently_feature";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFeature resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFeature to import
    * @param importFromId The id of the existing CcFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFeature to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_evidently_feature", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature awscc_evidently_feature} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFeatureProps
    */
    public constructor(scope: Construct, id: string, config: CcFeatureProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_evidently_feature',
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
        this._defaultVariation = config.defaultVariation;
        this._description = config.description;
        this._entityOverrides.internalValue = config.entityOverrides;
        this._evaluationStrategy = config.evaluationStrategy;
        this._name = config.name;
        this._project = config.project;
        this._tags.internalValue = config.tags;
        this._variations.internalValue = config.variations;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // default_variation - computed: true, optional: true, required: false
    private _defaultVariation?: string; 
    public get defaultVariation() {
        return this.getStringAttribute('default_variation');
    }
    public set defaultVariation(value: string) {
        this._defaultVariation = value;
    }
    public resetDefaultVariation() {
        this._defaultVariation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultVariationInput() {
        return this._defaultVariation;
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

    // entity_overrides - computed: true, optional: true, required: false
    private _entityOverrides = new CcFeature.EntityOverridePropertyList(this, "entity_overrides", true);
    public get entityOverrides() {
        return this._entityOverrides;
    }
    public putEntityOverrides(value: CcFeature.EntityOverrideProperty[] | cdktn.IResolvable) {
        this._entityOverrides.internalValue = value;
    }
    public resetEntityOverrides() {
        this._entityOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityOverridesInput() {
        return this._entityOverrides.internalValue;
    }

    // evaluation_strategy - computed: true, optional: true, required: false
    private _evaluationStrategy?: string; 
    public get evaluationStrategy() {
        return this.getStringAttribute('evaluation_strategy');
    }
    public set evaluationStrategy(value: string) {
        this._evaluationStrategy = value;
    }
    public resetEvaluationStrategy() {
        this._evaluationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluationStrategyInput() {
        return this._evaluationStrategy;
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

    // project - computed: false, optional: false, required: true
    private _project?: string; 
    public get project() {
        return this.getStringAttribute('project');
    }
    public set project(value: string) {
        this._project = value;
    }
    // Temporarily expose input value. Use with caution.
    public get projectInput() {
        return this._project;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFeature.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFeature.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // variations - computed: false, optional: false, required: true
    private _variations = new CcFeature.VariationObjectPropertyList(this, "variations", false);
    public get variations() {
        return this._variations;
    }
    public putVariations(value: CcFeature.VariationObjectProperty[] | cdktn.IResolvable) {
        this._variations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get variationsInput() {
        return this._variations.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            default_variation: cdktn.stringToTerraform(this._defaultVariation),
            description: cdktn.stringToTerraform(this._description),
            entity_overrides: cdktn.listMapper(ccFeatureEntityOverridePropertyToTerraform, false)(this._entityOverrides.internalValue),
            evaluation_strategy: cdktn.stringToTerraform(this._evaluationStrategy),
            name: cdktn.stringToTerraform(this._name),
            project: cdktn.stringToTerraform(this._project),
            tags: cdktn.listMapper(ccFeatureTagPropertyToTerraform, false)(this._tags.internalValue),
            variations: cdktn.listMapper(ccFeatureVariationObjectPropertyToTerraform, false)(this._variations.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            default_variation: {
                value: cdktn.stringToHclTerraform(this._defaultVariation),
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
            entity_overrides: {
                value: cdktn.listMapperHcl(ccFeatureEntityOverridePropertyToHclTerraform, false)(this._entityOverrides.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFeature.EntityOverridePropertyList",
            },
            evaluation_strategy: {
                value: cdktn.stringToHclTerraform(this._evaluationStrategy),
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
            project: {
                value: cdktn.stringToHclTerraform(this._project),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFeatureTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFeature.TagPropertyList",
            },
            variations: {
                value: cdktn.listMapperHcl(ccFeatureVariationObjectPropertyToHclTerraform, false)(this._variations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFeature.VariationObjectPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFeatureEntityOverridePropertyToTerraform(struct?: CcFeature.EntityOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        entity_id: cdktn.stringToTerraform(struct!.entityId),
        variation: cdktn.stringToTerraform(struct!.variation),
    }
}


export function ccFeatureEntityOverridePropertyToHclTerraform(struct?: CcFeature.EntityOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        entity_id: {
            value: cdktn.stringToHclTerraform(struct!.entityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variation: {
            value: cdktn.stringToHclTerraform(struct!.variation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeatureTagPropertyToTerraform(struct?: CcFeature.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFeatureTagPropertyToHclTerraform(struct?: CcFeature.TagProperty | cdktn.IResolvable): any {
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


export function ccFeatureVariationObjectPropertyToTerraform(struct?: CcFeature.VariationObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
        double_value: cdktn.numberToTerraform(struct!.doubleValue),
        long_value: cdktn.numberToTerraform(struct!.longValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
        variation_name: cdktn.stringToTerraform(struct!.variationName),
    }
}


export function ccFeatureVariationObjectPropertyToHclTerraform(struct?: CcFeature.VariationObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_value: {
            value: cdktn.booleanToHclTerraform(struct!.booleanValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        double_value: {
            value: cdktn.numberToHclTerraform(struct!.doubleValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        long_value: {
            value: cdktn.numberToHclTerraform(struct!.longValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variation_name: {
            value: cdktn.stringToHclTerraform(struct!.variationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcFeature {
export interface EntityOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#entity_id CcFeature#entity_id}
    */
    readonly entityId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#variation CcFeature#variation}
    */
    readonly variation?: string;
}
export class EntityOverridePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EntityOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._entityId !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityId = this._entityId;
        }
        if (this._variation !== undefined) {
            hasAnyValues = true;
            internalValueResult.variation = this._variation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EntityOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._entityId = undefined;
            this._variation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._entityId = value.entityId;
            this._variation = value.variation;
        }
    }

    // entity_id - computed: true, optional: true, required: false
    private _entityId?: string; 
    public get entityId() {
        return this.getStringAttribute('entity_id');
    }
    public set entityId(value: string) {
        this._entityId = value;
    }
    public resetEntityId() {
        this._entityId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityIdInput() {
        return this._entityId;
    }

    // variation - computed: true, optional: true, required: false
    private _variation?: string; 
    public get variation() {
        return this.getStringAttribute('variation');
    }
    public set variation(value: string) {
        this._variation = value;
    }
    public resetVariation() {
        this._variation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variationInput() {
        return this._variation;
    }
}

export class EntityOverridePropertyList extends cdktn.ComplexList {
    public internalValue? : EntityOverrideProperty[] | cdktn.IResolvable

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
    public get(index: number): EntityOverridePropertyOutputReference {
        return new EntityOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#key CcFeature#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#value CcFeature#value}
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
export interface VariationObjectProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#boolean_value CcFeature#boolean_value}
    */
    readonly booleanValue?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#double_value CcFeature#double_value}
    */
    readonly doubleValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#long_value CcFeature#long_value}
    */
    readonly longValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#string_value CcFeature#string_value}
    */
    readonly stringValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_feature#variation_name CcFeature#variation_name}
    */
    readonly variationName?: string;
}
export class VariationObjectPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VariationObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._booleanValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.booleanValue = this._booleanValue;
        }
        if (this._doubleValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.doubleValue = this._doubleValue;
        }
        if (this._longValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.longValue = this._longValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        if (this._variationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.variationName = this._variationName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VariationObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanValue = undefined;
            this._doubleValue = undefined;
            this._longValue = undefined;
            this._stringValue = undefined;
            this._variationName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._booleanValue = value.booleanValue;
            this._doubleValue = value.doubleValue;
            this._longValue = value.longValue;
            this._stringValue = value.stringValue;
            this._variationName = value.variationName;
        }
    }

    // boolean_value - computed: true, optional: true, required: false
    private _booleanValue?: boolean | cdktn.IResolvable; 
    public get booleanValue() {
        return this.getBooleanAttribute('boolean_value');
    }
    public set booleanValue(value: boolean | cdktn.IResolvable) {
        this._booleanValue = value;
    }
    public resetBooleanValue() {
        this._booleanValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanValueInput() {
        return this._booleanValue;
    }

    // double_value - computed: true, optional: true, required: false
    private _doubleValue?: number; 
    public get doubleValue() {
        return this.getNumberAttribute('double_value');
    }
    public set doubleValue(value: number) {
        this._doubleValue = value;
    }
    public resetDoubleValue() {
        this._doubleValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleValueInput() {
        return this._doubleValue;
    }

    // long_value - computed: true, optional: true, required: false
    private _longValue?: number; 
    public get longValue() {
        return this.getNumberAttribute('long_value');
    }
    public set longValue(value: number) {
        this._longValue = value;
    }
    public resetLongValue() {
        this._longValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get longValueInput() {
        return this._longValue;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }

    // variation_name - computed: true, optional: true, required: false
    private _variationName?: string; 
    public get variationName() {
        return this.getStringAttribute('variation_name');
    }
    public set variationName(value: string) {
        this._variationName = value;
    }
    public resetVariationName() {
        this._variationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variationNameInput() {
        return this._variationName;
    }
}

export class VariationObjectPropertyList extends cdktn.ComplexList {
    public internalValue? : VariationObjectProperty[] | cdktn.IResolvable

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
    public get(index: number): VariationObjectPropertyOutputReference {
        return new VariationObjectPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
