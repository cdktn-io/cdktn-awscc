// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_application_inference_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationInferenceProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of the inference profile
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_application_inference_profile#description CcApplicationInferenceProfile#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_application_inference_profile#inference_profile_name CcApplicationInferenceProfile#inference_profile_name}
    */
    readonly inferenceProfileName: string;
    /**
    * Various ways to encode a list of models in a CreateInferenceProfile request
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_application_inference_profile#model_source CcApplicationInferenceProfile#model_source}
    */
    readonly modelSource?: CcApplicationInferenceProfile.InferenceProfileModelSourceProperty;
    /**
    * List of Tags
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_application_inference_profile#tags CcApplicationInferenceProfile#tags}
    */
    readonly tags?: CcApplicationInferenceProfile.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_application_inference_profile awscc_bedrock_application_inference_profile}
*/
export class CcApplicationInferenceProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_application_inference_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplicationInferenceProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplicationInferenceProfile to import
    * @param importFromId The id of the existing CcApplicationInferenceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_application_inference_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplicationInferenceProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_application_inference_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_application_inference_profile awscc_bedrock_application_inference_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationInferenceProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationInferenceProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_application_inference_profile',
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
        this._description = config.description;
        this._inferenceProfileName = config.inferenceProfileName;
        this._modelSource.internalValue = config.modelSource;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // inference_profile_arn - computed: true, optional: false, required: false
    public get inferenceProfileArn() {
        return this.getStringAttribute('inference_profile_arn');
    }

    // inference_profile_id - computed: true, optional: false, required: false
    public get inferenceProfileId() {
        return this.getStringAttribute('inference_profile_id');
    }

    // inference_profile_identifier - computed: true, optional: false, required: false
    public get inferenceProfileIdentifier() {
        return this.getStringAttribute('inference_profile_identifier');
    }

    // inference_profile_name - computed: false, optional: false, required: true
    private _inferenceProfileName?: string; 
    public get inferenceProfileName() {
        return this.getStringAttribute('inference_profile_name');
    }
    public set inferenceProfileName(value: string) {
        this._inferenceProfileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceProfileNameInput() {
        return this._inferenceProfileName;
    }

    // model_source - computed: true, optional: true, required: false
    private _modelSource = new CcApplicationInferenceProfile.InferenceProfileModelSourcePropertyOutputReference(this, "model_source");
    public get modelSource() {
        return this._modelSource;
    }
    public putModelSource(value: CcApplicationInferenceProfile.InferenceProfileModelSourceProperty) {
        this._modelSource.internalValue = value;
    }
    public resetModelSource() {
        this._modelSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelSourceInput() {
        return this._modelSource.internalValue;
    }

    // models - computed: true, optional: false, required: false
    private _models = new CcApplicationInferenceProfile.ModelsPropertyList(this, "models", false);
    public get models() {
        return this._models;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcApplicationInferenceProfile.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcApplicationInferenceProfile.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            inference_profile_name: cdktn.stringToTerraform(this._inferenceProfileName),
            model_source: ccApplicationInferenceProfileInferenceProfileModelSourcePropertyToTerraform(this._modelSource.internalValue),
            tags: cdktn.listMapper(ccApplicationInferenceProfileTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            inference_profile_name: {
                value: cdktn.stringToHclTerraform(this._inferenceProfileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            model_source: {
                value: ccApplicationInferenceProfileInferenceProfileModelSourcePropertyToHclTerraform(this._modelSource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplicationInferenceProfile.InferenceProfileModelSourceProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccApplicationInferenceProfileTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApplicationInferenceProfile.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationInferenceProfileInferenceProfileModelSourcePropertyToTerraform(struct?: CcApplicationInferenceProfile.InferenceProfileModelSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        copy_from: cdktn.stringToTerraform(struct!.copyFrom),
    }
}


export function ccApplicationInferenceProfileInferenceProfileModelSourcePropertyToHclTerraform(struct?: CcApplicationInferenceProfile.InferenceProfileModelSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        copy_from: {
            value: cdktn.stringToHclTerraform(struct!.copyFrom),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationInferenceProfileModelsPropertyToTerraform(struct?: CcApplicationInferenceProfile.ModelsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccApplicationInferenceProfileModelsPropertyToHclTerraform(struct?: CcApplicationInferenceProfile.ModelsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccApplicationInferenceProfileTagPropertyToTerraform(struct?: CcApplicationInferenceProfile.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccApplicationInferenceProfileTagPropertyToHclTerraform(struct?: CcApplicationInferenceProfile.TagProperty | cdktn.IResolvable): any {
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


export namespace CcApplicationInferenceProfile {
export interface InferenceProfileModelSourceProperty {
    /**
    * Source arns for a custom inference profile to copy its regional load balancing config from. This
    * can either be a foundation model or predefined inference profile ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_application_inference_profile#copy_from CcApplicationInferenceProfile#copy_from}
    */
    readonly copyFrom?: string;
}
export class InferenceProfileModelSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceProfileModelSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._copyFrom !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyFrom = this._copyFrom;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceProfileModelSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._copyFrom = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._copyFrom = value.copyFrom;
        }
    }

    // copy_from - computed: true, optional: true, required: false
    private _copyFrom?: string; 
    public get copyFrom() {
        return this.getStringAttribute('copy_from');
    }
    public set copyFrom(value: string) {
        this._copyFrom = value;
    }
    public resetCopyFrom() {
        this._copyFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyFromInput() {
        return this._copyFrom;
    }
}
export interface ModelsProperty {
}
export class ModelsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ModelsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // model_arn - computed: true, optional: false, required: false
    public get modelArn() {
        return this.getStringAttribute('model_arn');
    }
}

export class ModelsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ModelsPropertyOutputReference {
        return new ModelsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Tag Key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_application_inference_profile#key CcApplicationInferenceProfile#key}
    */
    readonly key?: string;
    /**
    * Tag Value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_application_inference_profile#value CcApplicationInferenceProfile#value}
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
