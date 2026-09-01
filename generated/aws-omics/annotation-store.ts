// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAnnotationStoreProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#description CcAnnotationStore#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#name CcAnnotationStore#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#reference CcAnnotationStore#reference}
    */
    readonly reference?: CcAnnotationStore.ReferenceItemProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#sse_config CcAnnotationStore#sse_config}
    */
    readonly sseConfig?: CcAnnotationStore.SseConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#store_format CcAnnotationStore#store_format}
    */
    readonly storeFormat: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#store_options CcAnnotationStore#store_options}
    */
    readonly storeOptions?: CcAnnotationStore.StoreOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#tags CcAnnotationStore#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store awscc_omics_annotation_store}
*/
export class CcAnnotationStore extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_omics_annotation_store";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAnnotationStore resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAnnotationStore to import
    * @param importFromId The id of the existing CcAnnotationStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAnnotationStore to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_omics_annotation_store", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store awscc_omics_annotation_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAnnotationStoreProps
    */
    public constructor(scope: Construct, id: string, config: CcAnnotationStoreProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_omics_annotation_store',
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
        this._description = config.description;
        this._name = config.name;
        this._reference.internalValue = config.reference;
        this._sseConfig.internalValue = config.sseConfig;
        this._storeFormat = config.storeFormat;
        this._storeOptions.internalValue = config.storeOptions;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // annotation_store_id - computed: true, optional: false, required: false
    public get annotationStoreId() {
        return this.getStringAttribute('annotation_store_id');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // reference - computed: true, optional: true, required: false
    private _reference = new CcAnnotationStore.ReferenceItemPropertyOutputReference(this, "reference");
    public get reference() {
        return this._reference;
    }
    public putReference(value: CcAnnotationStore.ReferenceItemProperty) {
        this._reference.internalValue = value;
    }
    public resetReference() {
        this._reference.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get referenceInput() {
        return this._reference.internalValue;
    }

    // sse_config - computed: true, optional: true, required: false
    private _sseConfig = new CcAnnotationStore.SseConfigPropertyOutputReference(this, "sse_config");
    public get sseConfig() {
        return this._sseConfig;
    }
    public putSseConfig(value: CcAnnotationStore.SseConfigProperty) {
        this._sseConfig.internalValue = value;
    }
    public resetSseConfig() {
        this._sseConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseConfigInput() {
        return this._sseConfig.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_message - computed: true, optional: false, required: false
    public get statusMessage() {
        return this.getStringAttribute('status_message');
    }

    // store_arn - computed: true, optional: false, required: false
    public get storeArn() {
        return this.getStringAttribute('store_arn');
    }

    // store_format - computed: false, optional: false, required: true
    private _storeFormat?: string; 
    public get storeFormat() {
        return this.getStringAttribute('store_format');
    }
    public set storeFormat(value: string) {
        this._storeFormat = value;
    }
    // Temporarily expose input value. Use with caution.
    public get storeFormatInput() {
        return this._storeFormat;
    }

    // store_options - computed: true, optional: true, required: false
    private _storeOptions = new CcAnnotationStore.StoreOptionsPropertyOutputReference(this, "store_options");
    public get storeOptions() {
        return this._storeOptions;
    }
    public putStoreOptions(value: CcAnnotationStore.StoreOptionsProperty) {
        this._storeOptions.internalValue = value;
    }
    public resetStoreOptions() {
        this._storeOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storeOptionsInput() {
        return this._storeOptions.internalValue;
    }

    // store_size_bytes - computed: true, optional: false, required: false
    public get storeSizeBytes() {
        return this.getNumberAttribute('store_size_bytes');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // update_time - computed: true, optional: false, required: false
    public get updateTime() {
        return this.getStringAttribute('update_time');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            reference: ccAnnotationStoreReferenceItemPropertyToTerraform(this._reference.internalValue),
            sse_config: ccAnnotationStoreSseConfigPropertyToTerraform(this._sseConfig.internalValue),
            store_format: cdktn.stringToTerraform(this._storeFormat),
            store_options: ccAnnotationStoreStoreOptionsPropertyToTerraform(this._storeOptions.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            reference: {
                value: ccAnnotationStoreReferenceItemPropertyToHclTerraform(this._reference.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnnotationStore.ReferenceItemProperty",
            },
            sse_config: {
                value: ccAnnotationStoreSseConfigPropertyToHclTerraform(this._sseConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnnotationStore.SseConfigProperty",
            },
            store_format: {
                value: cdktn.stringToHclTerraform(this._storeFormat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            store_options: {
                value: ccAnnotationStoreStoreOptionsPropertyToHclTerraform(this._storeOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnnotationStore.StoreOptionsProperty",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAnnotationStoreReferenceItemPropertyToTerraform(struct?: CcAnnotationStore.ReferenceItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        reference_arn: cdktn.stringToTerraform(struct!.referenceArn),
    }
}


export function ccAnnotationStoreReferenceItemPropertyToHclTerraform(struct?: CcAnnotationStore.ReferenceItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        reference_arn: {
            value: cdktn.stringToHclTerraform(struct!.referenceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnnotationStoreSseConfigPropertyToTerraform(struct?: CcAnnotationStore.SseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_arn: cdktn.stringToTerraform(struct!.keyArn),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAnnotationStoreSseConfigPropertyToHclTerraform(struct?: CcAnnotationStore.SseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_arn: {
            value: cdktn.stringToHclTerraform(struct!.keyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnnotationStoreTsvStoreOptionsPropertyToTerraform(struct?: CcAnnotationStore.TsvStoreOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        annotation_type: cdktn.stringToTerraform(struct!.annotationType),
        format_to_header: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.formatToHeader),
        schema: cdktn.listMapper(cdktn.hashMapper(cdktn.stringToTerraform), false)(struct!.schema),
    }
}


export function ccAnnotationStoreTsvStoreOptionsPropertyToHclTerraform(struct?: CcAnnotationStore.TsvStoreOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        annotation_type: {
            value: cdktn.stringToHclTerraform(struct!.annotationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format_to_header: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.formatToHeader),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        schema: {
            value: cdktn.listMapperHcl(cdktn.hashMapperHcl(cdktn.stringToHclTerraform), false)(struct!.schema),
            isBlock: false,
            type: "list",
            storageClassType: "stringMapList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnnotationStoreStoreOptionsPropertyToTerraform(struct?: CcAnnotationStore.StoreOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tsv_store_options: ccAnnotationStoreTsvStoreOptionsPropertyToTerraform(struct!.tsvStoreOptions),
    }
}


export function ccAnnotationStoreStoreOptionsPropertyToHclTerraform(struct?: CcAnnotationStore.StoreOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tsv_store_options: {
            value: ccAnnotationStoreTsvStoreOptionsPropertyToHclTerraform(struct!.tsvStoreOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "TsvStoreOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAnnotationStore {
export interface ReferenceItemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#reference_arn CcAnnotationStore#reference_arn}
    */
    readonly referenceArn?: string;
}
export class ReferenceItemPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReferenceItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._referenceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.referenceArn = this._referenceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReferenceItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._referenceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._referenceArn = value.referenceArn;
        }
    }

    // reference_arn - computed: true, optional: true, required: false
    private _referenceArn?: string; 
    public get referenceArn() {
        return this.getStringAttribute('reference_arn');
    }
    public set referenceArn(value: string) {
        this._referenceArn = value;
    }
    public resetReferenceArn() {
        this._referenceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get referenceArnInput() {
        return this._referenceArn;
    }
}
export interface SseConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#key_arn CcAnnotationStore#key_arn}
    */
    readonly keyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#type CcAnnotationStore#type}
    */
    readonly type?: string;
}
export class SseConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SseConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyArn = this._keyArn;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SseConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyArn = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyArn = value.keyArn;
            this._type = value.type;
        }
    }

    // key_arn - computed: true, optional: true, required: false
    private _keyArn?: string; 
    public get keyArn() {
        return this.getStringAttribute('key_arn');
    }
    public set keyArn(value: string) {
        this._keyArn = value;
    }
    public resetKeyArn() {
        this._keyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyArnInput() {
        return this._keyArn;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface TsvStoreOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#annotation_type CcAnnotationStore#annotation_type}
    */
    readonly annotationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#format_to_header CcAnnotationStore#format_to_header}
    */
    readonly formatToHeader?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#schema CcAnnotationStore#schema}
    */
    readonly schema?: { [key: string]: string }[] | cdktn.IResolvable;
}
export class TsvStoreOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TsvStoreOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._annotationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.annotationType = this._annotationType;
        }
        if (this._formatToHeader !== undefined) {
            hasAnyValues = true;
            internalValueResult.formatToHeader = this._formatToHeader;
        }
        if (this._schema !== undefined) {
            hasAnyValues = true;
            internalValueResult.schema = this._schema;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TsvStoreOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._annotationType = undefined;
            this._formatToHeader = undefined;
            this._schema = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._annotationType = value.annotationType;
            this._formatToHeader = value.formatToHeader;
            this._schema = value.schema;
        }
    }

    // annotation_type - computed: true, optional: true, required: false
    private _annotationType?: string; 
    public get annotationType() {
        return this.getStringAttribute('annotation_type');
    }
    public set annotationType(value: string) {
        this._annotationType = value;
    }
    public resetAnnotationType() {
        this._annotationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get annotationTypeInput() {
        return this._annotationType;
    }

    // format_to_header - computed: true, optional: true, required: false
    private _formatToHeader?: { [key: string]: string }; 
    public get formatToHeader() {
        return this.getStringMapAttribute('format_to_header');
    }
    public set formatToHeader(value: { [key: string]: string }) {
        this._formatToHeader = value;
    }
    public resetFormatToHeader() {
        this._formatToHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatToHeaderInput() {
        return this._formatToHeader;
    }

    // schema - computed: true, optional: true, required: false
    private _schema?: { [key: string]: string }[] | cdktn.IResolvable; 
    public get schema() {
        return this.interpolationForAttribute('schema');
    }
    public set schema(value: { [key: string]: string }[] | cdktn.IResolvable) {
        this._schema = value;
    }
    public resetSchema() {
        this._schema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
        return this._schema;
    }
}
export interface StoreOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#tsv_store_options CcAnnotationStore#tsv_store_options}
    */
    readonly tsvStoreOptions?: TsvStoreOptionsProperty;
}
export class StoreOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StoreOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tsvStoreOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tsvStoreOptions = this._tsvStoreOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StoreOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tsvStoreOptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tsvStoreOptions.internalValue = value.tsvStoreOptions;
        }
    }

    // tsv_store_options - computed: true, optional: true, required: false
    private _tsvStoreOptions = new TsvStoreOptionsPropertyOutputReference(this, "tsv_store_options");
    public get tsvStoreOptions() {
        return this._tsvStoreOptions;
    }
    public putTsvStoreOptions(value: TsvStoreOptionsProperty) {
        this._tsvStoreOptions.internalValue = value;
    }
    public resetTsvStoreOptions() {
        this._tsvStoreOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tsvStoreOptionsInput() {
        return this._tsvStoreOptions.internalValue;
    }
}
}
