// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_variant_store

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVariantStoreProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_variant_store#description CcVariantStore#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_variant_store#name CcVariantStore#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_variant_store#reference CcVariantStore#reference}
    */
    readonly reference: CcVariantStore.ReferenceItemProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_variant_store#sse_config CcVariantStore#sse_config}
    */
    readonly sseConfig?: CcVariantStore.SseConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_variant_store#tags CcVariantStore#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_variant_store awscc_omics_variant_store}
*/
export class CcVariantStore extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_omics_variant_store";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVariantStore resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVariantStore to import
    * @param importFromId The id of the existing CcVariantStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_variant_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVariantStore to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_omics_variant_store", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_variant_store awscc_omics_variant_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVariantStoreProps
    */
    public constructor(scope: Construct, id: string, config: CcVariantStoreProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_omics_variant_store',
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
        this._description = config.description;
        this._name = config.name;
        this._reference.internalValue = config.reference;
        this._sseConfig.internalValue = config.sseConfig;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // reference - computed: false, optional: false, required: true
    private _reference = new CcVariantStore.ReferenceItemPropertyOutputReference(this, "reference");
    public get reference() {
        return this._reference;
    }
    public putReference(value: CcVariantStore.ReferenceItemProperty) {
        this._reference.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get referenceInput() {
        return this._reference.internalValue;
    }

    // sse_config - computed: true, optional: true, required: false
    private _sseConfig = new CcVariantStore.SseConfigPropertyOutputReference(this, "sse_config");
    public get sseConfig() {
        return this._sseConfig;
    }
    public putSseConfig(value: CcVariantStore.SseConfigProperty) {
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

    // variant_store_id - computed: true, optional: false, required: false
    public get variantStoreId() {
        return this.getStringAttribute('variant_store_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            reference: ccVariantStoreReferenceItemPropertyToTerraform(this._reference.internalValue),
            sse_config: ccVariantStoreSseConfigPropertyToTerraform(this._sseConfig.internalValue),
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
                value: ccVariantStoreReferenceItemPropertyToHclTerraform(this._reference.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVariantStore.ReferenceItemProperty",
            },
            sse_config: {
                value: ccVariantStoreSseConfigPropertyToHclTerraform(this._sseConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVariantStore.SseConfigProperty",
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

export function ccVariantStoreReferenceItemPropertyToTerraform(struct?: CcVariantStore.ReferenceItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        reference_arn: cdktn.stringToTerraform(struct!.referenceArn),
    }
}


export function ccVariantStoreReferenceItemPropertyToHclTerraform(struct?: CcVariantStore.ReferenceItemProperty | cdktn.IResolvable): any {
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


export function ccVariantStoreSseConfigPropertyToTerraform(struct?: CcVariantStore.SseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_arn: cdktn.stringToTerraform(struct!.keyArn),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccVariantStoreSseConfigPropertyToHclTerraform(struct?: CcVariantStore.SseConfigProperty | cdktn.IResolvable): any {
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


export namespace CcVariantStore {
export interface ReferenceItemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_variant_store#reference_arn CcVariantStore#reference_arn}
    */
    readonly referenceArn: string;
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

    // reference_arn - computed: false, optional: false, required: true
    private _referenceArn?: string; 
    public get referenceArn() {
        return this.getStringAttribute('reference_arn');
    }
    public set referenceArn(value: string) {
        this._referenceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get referenceArnInput() {
        return this._referenceArn;
    }
}
export interface SseConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_variant_store#key_arn CcVariantStore#key_arn}
    */
    readonly keyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_variant_store#type CcVariantStore#type}
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
}
