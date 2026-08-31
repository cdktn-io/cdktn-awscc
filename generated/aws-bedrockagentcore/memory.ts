// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMemoryProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of the Memory resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#description CcMemory#description}
    */
    readonly description?: string;
    /**
    * ARN format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#encryption_key_arn CcMemory#encryption_key_arn}
    */
    readonly encryptionKeyArn?: string;
    /**
    * Duration in days until memory events expire
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#event_expiry_duration CcMemory#event_expiry_duration}
    */
    readonly eventExpiryDuration: number;
    /**
    * List of indexed keys for the memory
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#indexed_keys CcMemory#indexed_keys}
    */
    readonly indexedKeys?: CcMemory.IndexedKeyProperty[] | cdktn.IResolvable;
    /**
    * ARN format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#memory_execution_role_arn CcMemory#memory_execution_role_arn}
    */
    readonly memoryExecutionRoleArn?: string;
    /**
    * List of memory strategies attached to this memory
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#memory_strategies CcMemory#memory_strategies}
    */
    readonly memoryStrategies?: CcMemory.MemoryStrategyProperty[] | cdktn.IResolvable;
    /**
    * Name of the Memory resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#name CcMemory#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#stream_delivery_resources CcMemory#stream_delivery_resources}
    */
    readonly streamDeliveryResources?: CcMemory.StreamDeliveryResourcesProperty;
    /**
    * A map of tag keys and values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#tags CcMemory#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory awscc_bedrockagentcore_memory}
*/
export class CcMemory extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_memory";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMemory resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMemory to import
    * @param importFromId The id of the existing CcMemory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMemory to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_memory", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory awscc_bedrockagentcore_memory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMemoryProps
    */
    public constructor(scope: Construct, id: string, config: CcMemoryProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_memory',
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
        this._encryptionKeyArn = config.encryptionKeyArn;
        this._eventExpiryDuration = config.eventExpiryDuration;
        this._indexedKeys.internalValue = config.indexedKeys;
        this._memoryExecutionRoleArn = config.memoryExecutionRoleArn;
        this._memoryStrategies.internalValue = config.memoryStrategies;
        this._name = config.name;
        this._streamDeliveryResources.internalValue = config.streamDeliveryResources;
        this._tags = config.tags;
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

    // encryption_key_arn - computed: true, optional: true, required: false
    private _encryptionKeyArn?: string; 
    public get encryptionKeyArn() {
        return this.getStringAttribute('encryption_key_arn');
    }
    public set encryptionKeyArn(value: string) {
        this._encryptionKeyArn = value;
    }
    public resetEncryptionKeyArn() {
        this._encryptionKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyArnInput() {
        return this._encryptionKeyArn;
    }

    // event_expiry_duration - computed: false, optional: false, required: true
    private _eventExpiryDuration?: number; 
    public get eventExpiryDuration() {
        return this.getNumberAttribute('event_expiry_duration');
    }
    public set eventExpiryDuration(value: number) {
        this._eventExpiryDuration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventExpiryDurationInput() {
        return this._eventExpiryDuration;
    }

    // failure_reason - computed: true, optional: false, required: false
    public get failureReason() {
        return this.getStringAttribute('failure_reason');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // indexed_keys - computed: true, optional: true, required: false
    private _indexedKeys = new CcMemory.IndexedKeyPropertyList(this, "indexed_keys", false);
    public get indexedKeys() {
        return this._indexedKeys;
    }
    public putIndexedKeys(value: CcMemory.IndexedKeyProperty[] | cdktn.IResolvable) {
        this._indexedKeys.internalValue = value;
    }
    public resetIndexedKeys() {
        this._indexedKeys.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexedKeysInput() {
        return this._indexedKeys.internalValue;
    }

    // memory_arn - computed: true, optional: false, required: false
    public get memoryArn() {
        return this.getStringAttribute('memory_arn');
    }

    // memory_execution_role_arn - computed: true, optional: true, required: false
    private _memoryExecutionRoleArn?: string; 
    public get memoryExecutionRoleArn() {
        return this.getStringAttribute('memory_execution_role_arn');
    }
    public set memoryExecutionRoleArn(value: string) {
        this._memoryExecutionRoleArn = value;
    }
    public resetMemoryExecutionRoleArn() {
        this._memoryExecutionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryExecutionRoleArnInput() {
        return this._memoryExecutionRoleArn;
    }

    // memory_id - computed: true, optional: false, required: false
    public get memoryId() {
        return this.getStringAttribute('memory_id');
    }

    // memory_strategies - computed: true, optional: true, required: false
    private _memoryStrategies = new CcMemory.MemoryStrategyPropertyList(this, "memory_strategies", false);
    public get memoryStrategies() {
        return this._memoryStrategies;
    }
    public putMemoryStrategies(value: CcMemory.MemoryStrategyProperty[] | cdktn.IResolvable) {
        this._memoryStrategies.internalValue = value;
    }
    public resetMemoryStrategies() {
        this._memoryStrategies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryStrategiesInput() {
        return this._memoryStrategies.internalValue;
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // stream_delivery_resources - computed: true, optional: true, required: false
    private _streamDeliveryResources = new CcMemory.StreamDeliveryResourcesPropertyOutputReference(this, "stream_delivery_resources");
    public get streamDeliveryResources() {
        return this._streamDeliveryResources;
    }
    public putStreamDeliveryResources(value: CcMemory.StreamDeliveryResourcesProperty) {
        this._streamDeliveryResources.internalValue = value;
    }
    public resetStreamDeliveryResources() {
        this._streamDeliveryResources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamDeliveryResourcesInput() {
        return this._streamDeliveryResources.internalValue;
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
            encryption_key_arn: cdktn.stringToTerraform(this._encryptionKeyArn),
            event_expiry_duration: cdktn.numberToTerraform(this._eventExpiryDuration),
            indexed_keys: cdktn.listMapper(ccMemoryIndexedKeyPropertyToTerraform, false)(this._indexedKeys.internalValue),
            memory_execution_role_arn: cdktn.stringToTerraform(this._memoryExecutionRoleArn),
            memory_strategies: cdktn.listMapper(ccMemoryMemoryStrategyPropertyToTerraform, false)(this._memoryStrategies.internalValue),
            name: cdktn.stringToTerraform(this._name),
            stream_delivery_resources: ccMemoryStreamDeliveryResourcesPropertyToTerraform(this._streamDeliveryResources.internalValue),
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
            encryption_key_arn: {
                value: cdktn.stringToHclTerraform(this._encryptionKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_expiry_duration: {
                value: cdktn.numberToHclTerraform(this._eventExpiryDuration),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            indexed_keys: {
                value: cdktn.listMapperHcl(ccMemoryIndexedKeyPropertyToHclTerraform, false)(this._indexedKeys.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMemory.IndexedKeyPropertyList",
            },
            memory_execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._memoryExecutionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            memory_strategies: {
                value: cdktn.listMapperHcl(ccMemoryMemoryStrategyPropertyToHclTerraform, false)(this._memoryStrategies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMemory.MemoryStrategyPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stream_delivery_resources: {
                value: ccMemoryStreamDeliveryResourcesPropertyToHclTerraform(this._streamDeliveryResources.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMemory.StreamDeliveryResourcesProperty",
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

export function ccMemoryIndexedKeyPropertyToTerraform(struct?: CcMemory.IndexedKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccMemoryIndexedKeyPropertyToHclTerraform(struct?: CcMemory.IndexedKeyProperty | cdktn.IResolvable): any {
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


export function ccMemoryEpisodicOverrideConsolidationConfigurationInputPropertyToTerraform(struct?: CcMemory.EpisodicOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
        model_id: cdktn.stringToTerraform(struct!.modelId),
    }
}


export function ccMemoryEpisodicOverrideConsolidationConfigurationInputPropertyToHclTerraform(struct?: CcMemory.EpisodicOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        append_to_prompt: {
            value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryEpisodicOverrideExtractionConfigurationInputPropertyToTerraform(struct?: CcMemory.EpisodicOverrideExtractionConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
        model_id: cdktn.stringToTerraform(struct!.modelId),
    }
}


export function ccMemoryEpisodicOverrideExtractionConfigurationInputPropertyToHclTerraform(struct?: CcMemory.EpisodicOverrideExtractionConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        append_to_prompt: {
            value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryNumberValidationPropertyToTerraform(struct?: CcMemory.NumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_value: cdktn.numberToTerraform(struct!.maxValue),
        min_value: cdktn.numberToTerraform(struct!.minValue),
    }
}


export function ccMemoryNumberValidationPropertyToHclTerraform(struct?: CcMemory.NumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_value: {
            value: cdktn.numberToHclTerraform(struct!.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_value: {
            value: cdktn.numberToHclTerraform(struct!.minValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryStringListValidationPropertyToTerraform(struct?: CcMemory.StringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        max_items: cdktn.numberToTerraform(struct!.maxItems),
    }
}


export function ccMemoryStringListValidationPropertyToHclTerraform(struct?: CcMemory.StringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        max_items: {
            value: cdktn.numberToHclTerraform(struct!.maxItems),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryStringValidationPropertyToTerraform(struct?: CcMemory.StringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    }
}


export function ccMemoryStringValidationPropertyToHclTerraform(struct?: CcMemory.StringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryValidationPropertyToTerraform(struct?: CcMemory.ValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        number_validation: ccMemoryNumberValidationPropertyToTerraform(struct!.numberValidation),
        string_list_validation: ccMemoryStringListValidationPropertyToTerraform(struct!.stringListValidation),
        string_validation: ccMemoryStringValidationPropertyToTerraform(struct!.stringValidation),
    }
}


export function ccMemoryValidationPropertyToHclTerraform(struct?: CcMemory.ValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        number_validation: {
            value: ccMemoryNumberValidationPropertyToHclTerraform(struct!.numberValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "NumberValidationProperty",
        },
        string_list_validation: {
            value: ccMemoryStringListValidationPropertyToHclTerraform(struct!.stringListValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "StringListValidationProperty",
        },
        string_validation: {
            value: ccMemoryStringValidationPropertyToHclTerraform(struct!.stringValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "StringValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryLlmExtractionConfigPropertyToTerraform(struct?: CcMemory.LlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.stringToTerraform(struct!.definition),
        llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
        validation: ccMemoryValidationPropertyToTerraform(struct!.validation),
    }
}


export function ccMemoryLlmExtractionConfigPropertyToHclTerraform(struct?: CcMemory.LlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        definition: {
            value: cdktn.stringToHclTerraform(struct!.definition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        llm_extraction_instruction: {
            value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation: {
            value: ccMemoryValidationPropertyToHclTerraform(struct!.validation),
            isBlock: true,
            type: "struct",
            storageClassType: "ValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryExtractionConfigPropertyToTerraform(struct?: CcMemory.ExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        llm_extraction_config: ccMemoryLlmExtractionConfigPropertyToTerraform(struct!.llmExtractionConfig),
    }
}


export function ccMemoryExtractionConfigPropertyToHclTerraform(struct?: CcMemory.ExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        llm_extraction_config: {
            value: ccMemoryLlmExtractionConfigPropertyToHclTerraform(struct!.llmExtractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "LlmExtractionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMetadataSchemaEntryPropertyToTerraform(struct?: CcMemory.MetadataSchemaEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extraction_config: ccMemoryExtractionConfigPropertyToTerraform(struct!.extractionConfig),
        extraction_type: cdktn.stringToTerraform(struct!.extractionType),
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccMemoryMetadataSchemaEntryPropertyToHclTerraform(struct?: CcMemory.MetadataSchemaEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extraction_config: {
            value: ccMemoryExtractionConfigPropertyToHclTerraform(struct!.extractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ExtractionConfigProperty",
        },
        extraction_type: {
            value: cdktn.stringToHclTerraform(struct!.extractionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
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


export function ccMemoryMemoryRecordSchemaPropertyToTerraform(struct?: CcMemory.MemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metadata_schema: cdktn.listMapper(ccMemoryMetadataSchemaEntryPropertyToTerraform, false)(struct!.metadataSchema),
    }
}


export function ccMemoryMemoryRecordSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metadata_schema: {
            value: cdktn.listMapperHcl(ccMemoryMetadataSchemaEntryPropertyToHclTerraform, false)(struct!.metadataSchema),
            isBlock: true,
            type: "list",
            storageClassType: "MetadataSchemaEntryPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryEpisodicOverrideReflectionConfigurationInputPropertyToTerraform(struct?: CcMemory.EpisodicOverrideReflectionConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
        memory_record_schema: ccMemoryMemoryRecordSchemaPropertyToTerraform(struct!.memoryRecordSchema),
        model_id: cdktn.stringToTerraform(struct!.modelId),
        namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
        namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
    }
}


export function ccMemoryEpisodicOverrideReflectionConfigurationInputPropertyToHclTerraform(struct?: CcMemory.EpisodicOverrideReflectionConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        append_to_prompt: {
            value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory_record_schema: {
            value: ccMemoryMemoryRecordSchemaPropertyToHclTerraform(struct!.memoryRecordSchema),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryRecordSchemaProperty",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace_templates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        namespaces: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryEpisodicOverridePropertyToTerraform(struct?: CcMemory.EpisodicOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        consolidation: ccMemoryEpisodicOverrideConsolidationConfigurationInputPropertyToTerraform(struct!.consolidation),
        extraction: ccMemoryEpisodicOverrideExtractionConfigurationInputPropertyToTerraform(struct!.extraction),
        reflection: ccMemoryEpisodicOverrideReflectionConfigurationInputPropertyToTerraform(struct!.reflection),
    }
}


export function ccMemoryEpisodicOverridePropertyToHclTerraform(struct?: CcMemory.EpisodicOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        consolidation: {
            value: ccMemoryEpisodicOverrideConsolidationConfigurationInputPropertyToHclTerraform(struct!.consolidation),
            isBlock: true,
            type: "struct",
            storageClassType: "EpisodicOverrideConsolidationConfigurationInputProperty",
        },
        extraction: {
            value: ccMemoryEpisodicOverrideExtractionConfigurationInputPropertyToHclTerraform(struct!.extraction),
            isBlock: true,
            type: "struct",
            storageClassType: "EpisodicOverrideExtractionConfigurationInputProperty",
        },
        reflection: {
            value: ccMemoryEpisodicOverrideReflectionConfigurationInputPropertyToHclTerraform(struct!.reflection),
            isBlock: true,
            type: "struct",
            storageClassType: "EpisodicOverrideReflectionConfigurationInputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryInvocationConfigurationInputPropertyToTerraform(struct?: CcMemory.InvocationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload_delivery_bucket_name: cdktn.stringToTerraform(struct!.payloadDeliveryBucketName),
        topic_arn: cdktn.stringToTerraform(struct!.topicArn),
    }
}


export function ccMemoryInvocationConfigurationInputPropertyToHclTerraform(struct?: CcMemory.InvocationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload_delivery_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.payloadDeliveryBucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topic_arn: {
            value: cdktn.stringToHclTerraform(struct!.topicArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMessageBasedTriggerInputPropertyToTerraform(struct?: CcMemory.MessageBasedTriggerInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        message_count: cdktn.numberToTerraform(struct!.messageCount),
    }
}


export function ccMemoryMessageBasedTriggerInputPropertyToHclTerraform(struct?: CcMemory.MessageBasedTriggerInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        message_count: {
            value: cdktn.numberToHclTerraform(struct!.messageCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryTimeBasedTriggerInputPropertyToTerraform(struct?: CcMemory.TimeBasedTriggerInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_session_timeout: cdktn.numberToTerraform(struct!.idleSessionTimeout),
    }
}


export function ccMemoryTimeBasedTriggerInputPropertyToHclTerraform(struct?: CcMemory.TimeBasedTriggerInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_session_timeout: {
            value: cdktn.numberToHclTerraform(struct!.idleSessionTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryTokenBasedTriggerInputPropertyToTerraform(struct?: CcMemory.TokenBasedTriggerInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        token_count: cdktn.numberToTerraform(struct!.tokenCount),
    }
}


export function ccMemoryTokenBasedTriggerInputPropertyToHclTerraform(struct?: CcMemory.TokenBasedTriggerInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        token_count: {
            value: cdktn.numberToHclTerraform(struct!.tokenCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryTriggerConditionInputPropertyToTerraform(struct?: CcMemory.TriggerConditionInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        message_based_trigger: ccMemoryMessageBasedTriggerInputPropertyToTerraform(struct!.messageBasedTrigger),
        time_based_trigger: ccMemoryTimeBasedTriggerInputPropertyToTerraform(struct!.timeBasedTrigger),
        token_based_trigger: ccMemoryTokenBasedTriggerInputPropertyToTerraform(struct!.tokenBasedTrigger),
    }
}


export function ccMemoryTriggerConditionInputPropertyToHclTerraform(struct?: CcMemory.TriggerConditionInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        message_based_trigger: {
            value: ccMemoryMessageBasedTriggerInputPropertyToHclTerraform(struct!.messageBasedTrigger),
            isBlock: true,
            type: "struct",
            storageClassType: "MessageBasedTriggerInputProperty",
        },
        time_based_trigger: {
            value: ccMemoryTimeBasedTriggerInputPropertyToHclTerraform(struct!.timeBasedTrigger),
            isBlock: true,
            type: "struct",
            storageClassType: "TimeBasedTriggerInputProperty",
        },
        token_based_trigger: {
            value: ccMemoryTokenBasedTriggerInputPropertyToHclTerraform(struct!.tokenBasedTrigger),
            isBlock: true,
            type: "struct",
            storageClassType: "TokenBasedTriggerInputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemorySelfManagedConfigurationPropertyToTerraform(struct?: CcMemory.SelfManagedConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        historical_context_window_size: cdktn.numberToTerraform(struct!.historicalContextWindowSize),
        invocation_configuration: ccMemoryInvocationConfigurationInputPropertyToTerraform(struct!.invocationConfiguration),
        trigger_conditions: cdktn.listMapper(ccMemoryTriggerConditionInputPropertyToTerraform, false)(struct!.triggerConditions),
    }
}


export function ccMemorySelfManagedConfigurationPropertyToHclTerraform(struct?: CcMemory.SelfManagedConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        historical_context_window_size: {
            value: cdktn.numberToHclTerraform(struct!.historicalContextWindowSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        invocation_configuration: {
            value: ccMemoryInvocationConfigurationInputPropertyToHclTerraform(struct!.invocationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "InvocationConfigurationInputProperty",
        },
        trigger_conditions: {
            value: cdktn.listMapperHcl(ccMemoryTriggerConditionInputPropertyToHclTerraform, false)(struct!.triggerConditions),
            isBlock: true,
            type: "list",
            storageClassType: "TriggerConditionInputPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemorySemanticOverrideConsolidationConfigurationInputPropertyToTerraform(struct?: CcMemory.SemanticOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
        model_id: cdktn.stringToTerraform(struct!.modelId),
    }
}


export function ccMemorySemanticOverrideConsolidationConfigurationInputPropertyToHclTerraform(struct?: CcMemory.SemanticOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        append_to_prompt: {
            value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemorySemanticOverrideExtractionConfigurationInputPropertyToTerraform(struct?: CcMemory.SemanticOverrideExtractionConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
        model_id: cdktn.stringToTerraform(struct!.modelId),
    }
}


export function ccMemorySemanticOverrideExtractionConfigurationInputPropertyToHclTerraform(struct?: CcMemory.SemanticOverrideExtractionConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        append_to_prompt: {
            value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemorySemanticOverridePropertyToTerraform(struct?: CcMemory.SemanticOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        consolidation: ccMemorySemanticOverrideConsolidationConfigurationInputPropertyToTerraform(struct!.consolidation),
        extraction: ccMemorySemanticOverrideExtractionConfigurationInputPropertyToTerraform(struct!.extraction),
    }
}


export function ccMemorySemanticOverridePropertyToHclTerraform(struct?: CcMemory.SemanticOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        consolidation: {
            value: ccMemorySemanticOverrideConsolidationConfigurationInputPropertyToHclTerraform(struct!.consolidation),
            isBlock: true,
            type: "struct",
            storageClassType: "SemanticOverrideConsolidationConfigurationInputProperty",
        },
        extraction: {
            value: ccMemorySemanticOverrideExtractionConfigurationInputPropertyToHclTerraform(struct!.extraction),
            isBlock: true,
            type: "struct",
            storageClassType: "SemanticOverrideExtractionConfigurationInputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemorySummaryOverrideConsolidationConfigurationInputPropertyToTerraform(struct?: CcMemory.SummaryOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
        model_id: cdktn.stringToTerraform(struct!.modelId),
    }
}


export function ccMemorySummaryOverrideConsolidationConfigurationInputPropertyToHclTerraform(struct?: CcMemory.SummaryOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        append_to_prompt: {
            value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemorySummaryOverridePropertyToTerraform(struct?: CcMemory.SummaryOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        consolidation: ccMemorySummaryOverrideConsolidationConfigurationInputPropertyToTerraform(struct!.consolidation),
    }
}


export function ccMemorySummaryOverridePropertyToHclTerraform(struct?: CcMemory.SummaryOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        consolidation: {
            value: ccMemorySummaryOverrideConsolidationConfigurationInputPropertyToHclTerraform(struct!.consolidation),
            isBlock: true,
            type: "struct",
            storageClassType: "SummaryOverrideConsolidationConfigurationInputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryUserPreferenceOverrideConsolidationConfigurationInputPropertyToTerraform(struct?: CcMemory.UserPreferenceOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
        model_id: cdktn.stringToTerraform(struct!.modelId),
    }
}


export function ccMemoryUserPreferenceOverrideConsolidationConfigurationInputPropertyToHclTerraform(struct?: CcMemory.UserPreferenceOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        append_to_prompt: {
            value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryUserPreferenceOverrideExtractionConfigurationInputPropertyToTerraform(struct?: CcMemory.UserPreferenceOverrideExtractionConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
        model_id: cdktn.stringToTerraform(struct!.modelId),
    }
}


export function ccMemoryUserPreferenceOverrideExtractionConfigurationInputPropertyToHclTerraform(struct?: CcMemory.UserPreferenceOverrideExtractionConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        append_to_prompt: {
            value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryUserPreferenceOverridePropertyToTerraform(struct?: CcMemory.UserPreferenceOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        consolidation: ccMemoryUserPreferenceOverrideConsolidationConfigurationInputPropertyToTerraform(struct!.consolidation),
        extraction: ccMemoryUserPreferenceOverrideExtractionConfigurationInputPropertyToTerraform(struct!.extraction),
    }
}


export function ccMemoryUserPreferenceOverridePropertyToHclTerraform(struct?: CcMemory.UserPreferenceOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        consolidation: {
            value: ccMemoryUserPreferenceOverrideConsolidationConfigurationInputPropertyToHclTerraform(struct!.consolidation),
            isBlock: true,
            type: "struct",
            storageClassType: "UserPreferenceOverrideConsolidationConfigurationInputProperty",
        },
        extraction: {
            value: ccMemoryUserPreferenceOverrideExtractionConfigurationInputPropertyToHclTerraform(struct!.extraction),
            isBlock: true,
            type: "struct",
            storageClassType: "UserPreferenceOverrideExtractionConfigurationInputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryCustomConfigurationInputPropertyToTerraform(struct?: CcMemory.CustomConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        episodic_override: ccMemoryEpisodicOverridePropertyToTerraform(struct!.episodicOverride),
        self_managed_configuration: ccMemorySelfManagedConfigurationPropertyToTerraform(struct!.selfManagedConfiguration),
        semantic_override: ccMemorySemanticOverridePropertyToTerraform(struct!.semanticOverride),
        summary_override: ccMemorySummaryOverridePropertyToTerraform(struct!.summaryOverride),
        user_preference_override: ccMemoryUserPreferenceOverridePropertyToTerraform(struct!.userPreferenceOverride),
    }
}


export function ccMemoryCustomConfigurationInputPropertyToHclTerraform(struct?: CcMemory.CustomConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        episodic_override: {
            value: ccMemoryEpisodicOverridePropertyToHclTerraform(struct!.episodicOverride),
            isBlock: true,
            type: "struct",
            storageClassType: "EpisodicOverrideProperty",
        },
        self_managed_configuration: {
            value: ccMemorySelfManagedConfigurationPropertyToHclTerraform(struct!.selfManagedConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SelfManagedConfigurationProperty",
        },
        semantic_override: {
            value: ccMemorySemanticOverridePropertyToHclTerraform(struct!.semanticOverride),
            isBlock: true,
            type: "struct",
            storageClassType: "SemanticOverrideProperty",
        },
        summary_override: {
            value: ccMemorySummaryOverridePropertyToHclTerraform(struct!.summaryOverride),
            isBlock: true,
            type: "struct",
            storageClassType: "SummaryOverrideProperty",
        },
        user_preference_override: {
            value: ccMemoryUserPreferenceOverridePropertyToHclTerraform(struct!.userPreferenceOverride),
            isBlock: true,
            type: "struct",
            storageClassType: "UserPreferenceOverrideProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_value: cdktn.numberToTerraform(struct!.maxValue),
        min_value: cdktn.numberToTerraform(struct!.minValue),
    }
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_value: {
            value: cdktn.numberToHclTerraform(struct!.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_value: {
            value: cdktn.numberToHclTerraform(struct!.minValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        max_items: cdktn.numberToTerraform(struct!.maxItems),
    }
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        max_items: {
            value: cdktn.numberToHclTerraform(struct!.maxItems),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    }
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        number_validation: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToTerraform(struct!.numberValidation),
        string_list_validation: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToTerraform(struct!.stringListValidation),
        string_validation: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToTerraform(struct!.stringValidation),
    }
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        number_validation: {
            value: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToHclTerraform(struct!.numberValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty",
        },
        string_list_validation: {
            value: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToHclTerraform(struct!.stringListValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty",
        },
        string_validation: {
            value: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToHclTerraform(struct!.stringValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.stringToTerraform(struct!.definition),
        llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
        validation: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToTerraform(struct!.validation),
    }
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        definition: {
            value: cdktn.stringToHclTerraform(struct!.definition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        llm_extraction_instruction: {
            value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation: {
            value: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToHclTerraform(struct!.validation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        llm_extraction_config: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToTerraform(struct!.llmExtractionConfig),
    }
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        llm_extraction_config: {
            value: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToHclTerraform(struct!.llmExtractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extraction_config: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToTerraform(struct!.extractionConfig),
        extraction_type: cdktn.stringToTerraform(struct!.extractionType),
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extraction_config: {
            value: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToHclTerraform(struct!.extractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty",
        },
        extraction_type: {
            value: cdktn.stringToHclTerraform(struct!.extractionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
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


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaPropertyToTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metadata_schema: cdktn.listMapper(ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToTerraform, false)(struct!.metadataSchema),
    }
}


export function ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metadata_schema: {
            value: cdktn.listMapperHcl(ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToHclTerraform, false)(struct!.metadataSchema),
            isBlock: true,
            type: "list",
            storageClassType: "MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryCustomMemoryStrategyPropertyToTerraform(struct?: CcMemory.CustomMemoryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configuration: ccMemoryCustomConfigurationInputPropertyToTerraform(struct!.configuration),
        created_at: cdktn.stringToTerraform(struct!.createdAt),
        description: cdktn.stringToTerraform(struct!.description),
        memory_record_schema: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaPropertyToTerraform(struct!.memoryRecordSchema),
        name: cdktn.stringToTerraform(struct!.name),
        namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
        namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
        status: cdktn.stringToTerraform(struct!.status),
        strategy_id: cdktn.stringToTerraform(struct!.strategyId),
        type: cdktn.stringToTerraform(struct!.type),
        updated_at: cdktn.stringToTerraform(struct!.updatedAt),
    }
}


export function ccMemoryCustomMemoryStrategyPropertyToHclTerraform(struct?: CcMemory.CustomMemoryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configuration: {
            value: ccMemoryCustomConfigurationInputPropertyToHclTerraform(struct!.configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomConfigurationInputProperty",
        },
        created_at: {
            value: cdktn.stringToHclTerraform(struct!.createdAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory_record_schema: {
            value: ccMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaPropertyToHclTerraform(struct!.memoryRecordSchema),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace_templates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        namespaces: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        strategy_id: {
            value: cdktn.stringToHclTerraform(struct!.strategyId),
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
        updated_at: {
            value: cdktn.stringToHclTerraform(struct!.updatedAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_value: cdktn.numberToTerraform(struct!.maxValue),
        min_value: cdktn.numberToTerraform(struct!.minValue),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_value: {
            value: cdktn.numberToHclTerraform(struct!.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_value: {
            value: cdktn.numberToHclTerraform(struct!.minValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        max_items: cdktn.numberToTerraform(struct!.maxItems),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        max_items: {
            value: cdktn.numberToHclTerraform(struct!.maxItems),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        number_validation: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToTerraform(struct!.numberValidation),
        string_list_validation: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToTerraform(struct!.stringListValidation),
        string_validation: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToTerraform(struct!.stringValidation),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        number_validation: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToHclTerraform(struct!.numberValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty",
        },
        string_list_validation: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToHclTerraform(struct!.stringListValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty",
        },
        string_validation: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToHclTerraform(struct!.stringValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.stringToTerraform(struct!.definition),
        llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
        validation: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToTerraform(struct!.validation),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        definition: {
            value: cdktn.stringToHclTerraform(struct!.definition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        llm_extraction_instruction: {
            value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToHclTerraform(struct!.validation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        llm_extraction_config: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToTerraform(struct!.llmExtractionConfig),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        llm_extraction_config: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToHclTerraform(struct!.llmExtractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extraction_config: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToTerraform(struct!.extractionConfig),
        extraction_type: cdktn.stringToTerraform(struct!.extractionType),
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extraction_config: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToHclTerraform(struct!.extractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty",
        },
        extraction_type: {
            value: cdktn.stringToHclTerraform(struct!.extractionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
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


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metadata_schema: cdktn.listMapper(ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToTerraform, false)(struct!.metadataSchema),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metadata_schema: {
            value: cdktn.listMapperHcl(ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToHclTerraform, false)(struct!.metadataSchema),
            isBlock: true,
            type: "list",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_value: cdktn.numberToTerraform(struct!.maxValue),
        min_value: cdktn.numberToTerraform(struct!.minValue),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_value: {
            value: cdktn.numberToHclTerraform(struct!.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_value: {
            value: cdktn.numberToHclTerraform(struct!.minValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        max_items: cdktn.numberToTerraform(struct!.maxItems),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        max_items: {
            value: cdktn.numberToHclTerraform(struct!.maxItems),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        number_validation: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToTerraform(struct!.numberValidation),
        string_list_validation: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToTerraform(struct!.stringListValidation),
        string_validation: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToTerraform(struct!.stringValidation),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        number_validation: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToHclTerraform(struct!.numberValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty",
        },
        string_list_validation: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToHclTerraform(struct!.stringListValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty",
        },
        string_validation: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToHclTerraform(struct!.stringValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.stringToTerraform(struct!.definition),
        llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
        validation: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToTerraform(struct!.validation),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        definition: {
            value: cdktn.stringToHclTerraform(struct!.definition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        llm_extraction_instruction: {
            value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToHclTerraform(struct!.validation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        llm_extraction_config: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToTerraform(struct!.llmExtractionConfig),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        llm_extraction_config: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToHclTerraform(struct!.llmExtractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extraction_config: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToTerraform(struct!.extractionConfig),
        extraction_type: cdktn.stringToTerraform(struct!.extractionType),
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extraction_config: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToHclTerraform(struct!.extractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigProperty",
        },
        extraction_type: {
            value: cdktn.stringToHclTerraform(struct!.extractionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
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


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaPropertyToTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metadata_schema: cdktn.listMapper(ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaPropertyToTerraform, false)(struct!.metadataSchema),
    }
}


export function ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metadata_schema: {
            value: cdktn.listMapperHcl(ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaPropertyToHclTerraform, false)(struct!.metadataSchema),
            isBlock: true,
            type: "list",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryEpisodicReflectionConfigurationInputPropertyToTerraform(struct?: CcMemory.EpisodicReflectionConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        memory_record_schema: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaPropertyToTerraform(struct!.memoryRecordSchema),
        namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
        namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
    }
}


export function ccMemoryEpisodicReflectionConfigurationInputPropertyToHclTerraform(struct?: CcMemory.EpisodicReflectionConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        memory_record_schema: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaPropertyToHclTerraform(struct!.memoryRecordSchema),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaProperty",
        },
        namespace_templates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        namespaces: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryEpisodicMemoryStrategyPropertyToTerraform(struct?: CcMemory.EpisodicMemoryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        created_at: cdktn.stringToTerraform(struct!.createdAt),
        description: cdktn.stringToTerraform(struct!.description),
        memory_record_schema: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaPropertyToTerraform(struct!.memoryRecordSchema),
        name: cdktn.stringToTerraform(struct!.name),
        namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
        namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
        reflection_configuration: ccMemoryEpisodicReflectionConfigurationInputPropertyToTerraform(struct!.reflectionConfiguration),
        status: cdktn.stringToTerraform(struct!.status),
        strategy_id: cdktn.stringToTerraform(struct!.strategyId),
        type: cdktn.stringToTerraform(struct!.type),
        updated_at: cdktn.stringToTerraform(struct!.updatedAt),
    }
}


export function ccMemoryEpisodicMemoryStrategyPropertyToHclTerraform(struct?: CcMemory.EpisodicMemoryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        created_at: {
            value: cdktn.stringToHclTerraform(struct!.createdAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory_record_schema: {
            value: ccMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaPropertyToHclTerraform(struct!.memoryRecordSchema),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace_templates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        namespaces: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        reflection_configuration: {
            value: ccMemoryEpisodicReflectionConfigurationInputPropertyToHclTerraform(struct!.reflectionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EpisodicReflectionConfigurationInputProperty",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        strategy_id: {
            value: cdktn.stringToHclTerraform(struct!.strategyId),
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
        updated_at: {
            value: cdktn.stringToHclTerraform(struct!.updatedAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_value: cdktn.numberToTerraform(struct!.maxValue),
        min_value: cdktn.numberToTerraform(struct!.minValue),
    }
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_value: {
            value: cdktn.numberToHclTerraform(struct!.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_value: {
            value: cdktn.numberToHclTerraform(struct!.minValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        max_items: cdktn.numberToTerraform(struct!.maxItems),
    }
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        max_items: {
            value: cdktn.numberToHclTerraform(struct!.maxItems),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    }
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        number_validation: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToTerraform(struct!.numberValidation),
        string_list_validation: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToTerraform(struct!.stringListValidation),
        string_validation: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToTerraform(struct!.stringValidation),
    }
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        number_validation: {
            value: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToHclTerraform(struct!.numberValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty",
        },
        string_list_validation: {
            value: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToHclTerraform(struct!.stringListValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty",
        },
        string_validation: {
            value: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToHclTerraform(struct!.stringValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.stringToTerraform(struct!.definition),
        llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
        validation: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToTerraform(struct!.validation),
    }
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        definition: {
            value: cdktn.stringToHclTerraform(struct!.definition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        llm_extraction_instruction: {
            value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation: {
            value: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToHclTerraform(struct!.validation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        llm_extraction_config: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToTerraform(struct!.llmExtractionConfig),
    }
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        llm_extraction_config: {
            value: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToHclTerraform(struct!.llmExtractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extraction_config: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToTerraform(struct!.extractionConfig),
        extraction_type: cdktn.stringToTerraform(struct!.extractionType),
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extraction_config: {
            value: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToHclTerraform(struct!.extractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty",
        },
        extraction_type: {
            value: cdktn.stringToHclTerraform(struct!.extractionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
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


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metadata_schema: cdktn.listMapper(ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToTerraform, false)(struct!.metadataSchema),
    }
}


export function ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metadata_schema: {
            value: cdktn.listMapperHcl(ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToHclTerraform, false)(struct!.metadataSchema),
            isBlock: true,
            type: "list",
            storageClassType: "MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemorySemanticMemoryStrategyPropertyToTerraform(struct?: CcMemory.SemanticMemoryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        created_at: cdktn.stringToTerraform(struct!.createdAt),
        description: cdktn.stringToTerraform(struct!.description),
        memory_record_schema: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaPropertyToTerraform(struct!.memoryRecordSchema),
        name: cdktn.stringToTerraform(struct!.name),
        namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
        namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
        status: cdktn.stringToTerraform(struct!.status),
        strategy_id: cdktn.stringToTerraform(struct!.strategyId),
        type: cdktn.stringToTerraform(struct!.type),
        updated_at: cdktn.stringToTerraform(struct!.updatedAt),
    }
}


export function ccMemorySemanticMemoryStrategyPropertyToHclTerraform(struct?: CcMemory.SemanticMemoryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        created_at: {
            value: cdktn.stringToHclTerraform(struct!.createdAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory_record_schema: {
            value: ccMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaPropertyToHclTerraform(struct!.memoryRecordSchema),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace_templates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        namespaces: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        strategy_id: {
            value: cdktn.stringToHclTerraform(struct!.strategyId),
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
        updated_at: {
            value: cdktn.stringToHclTerraform(struct!.updatedAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_value: cdktn.numberToTerraform(struct!.maxValue),
        min_value: cdktn.numberToTerraform(struct!.minValue),
    }
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_value: {
            value: cdktn.numberToHclTerraform(struct!.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_value: {
            value: cdktn.numberToHclTerraform(struct!.minValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        max_items: cdktn.numberToTerraform(struct!.maxItems),
    }
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        max_items: {
            value: cdktn.numberToHclTerraform(struct!.maxItems),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    }
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        number_validation: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToTerraform(struct!.numberValidation),
        string_list_validation: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToTerraform(struct!.stringListValidation),
        string_validation: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToTerraform(struct!.stringValidation),
    }
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        number_validation: {
            value: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToHclTerraform(struct!.numberValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty",
        },
        string_list_validation: {
            value: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToHclTerraform(struct!.stringListValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty",
        },
        string_validation: {
            value: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToHclTerraform(struct!.stringValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.stringToTerraform(struct!.definition),
        llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
        validation: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToTerraform(struct!.validation),
    }
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        definition: {
            value: cdktn.stringToHclTerraform(struct!.definition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        llm_extraction_instruction: {
            value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation: {
            value: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToHclTerraform(struct!.validation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        llm_extraction_config: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToTerraform(struct!.llmExtractionConfig),
    }
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        llm_extraction_config: {
            value: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToHclTerraform(struct!.llmExtractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extraction_config: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToTerraform(struct!.extractionConfig),
        extraction_type: cdktn.stringToTerraform(struct!.extractionType),
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extraction_config: {
            value: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToHclTerraform(struct!.extractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty",
        },
        extraction_type: {
            value: cdktn.stringToHclTerraform(struct!.extractionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
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


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaPropertyToTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metadata_schema: cdktn.listMapper(ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToTerraform, false)(struct!.metadataSchema),
    }
}


export function ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metadata_schema: {
            value: cdktn.listMapperHcl(ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToHclTerraform, false)(struct!.metadataSchema),
            isBlock: true,
            type: "list",
            storageClassType: "MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemorySummaryMemoryStrategyPropertyToTerraform(struct?: CcMemory.SummaryMemoryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        created_at: cdktn.stringToTerraform(struct!.createdAt),
        description: cdktn.stringToTerraform(struct!.description),
        memory_record_schema: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaPropertyToTerraform(struct!.memoryRecordSchema),
        name: cdktn.stringToTerraform(struct!.name),
        namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
        namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
        status: cdktn.stringToTerraform(struct!.status),
        strategy_id: cdktn.stringToTerraform(struct!.strategyId),
        type: cdktn.stringToTerraform(struct!.type),
        updated_at: cdktn.stringToTerraform(struct!.updatedAt),
    }
}


export function ccMemorySummaryMemoryStrategyPropertyToHclTerraform(struct?: CcMemory.SummaryMemoryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        created_at: {
            value: cdktn.stringToHclTerraform(struct!.createdAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory_record_schema: {
            value: ccMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaPropertyToHclTerraform(struct!.memoryRecordSchema),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace_templates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        namespaces: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        strategy_id: {
            value: cdktn.stringToHclTerraform(struct!.strategyId),
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
        updated_at: {
            value: cdktn.stringToHclTerraform(struct!.updatedAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_value: cdktn.numberToTerraform(struct!.maxValue),
        min_value: cdktn.numberToTerraform(struct!.minValue),
    }
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_value: {
            value: cdktn.numberToHclTerraform(struct!.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_value: {
            value: cdktn.numberToHclTerraform(struct!.minValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        max_items: cdktn.numberToTerraform(struct!.maxItems),
    }
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        max_items: {
            value: cdktn.numberToHclTerraform(struct!.maxItems),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    }
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        number_validation: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToTerraform(struct!.numberValidation),
        string_list_validation: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToTerraform(struct!.stringListValidation),
        string_validation: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToTerraform(struct!.stringValidation),
    }
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        number_validation: {
            value: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyToHclTerraform(struct!.numberValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty",
        },
        string_list_validation: {
            value: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyToHclTerraform(struct!.stringListValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty",
        },
        string_validation: {
            value: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyToHclTerraform(struct!.stringValidation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.stringToTerraform(struct!.definition),
        llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
        validation: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToTerraform(struct!.validation),
    }
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        definition: {
            value: cdktn.stringToHclTerraform(struct!.definition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        llm_extraction_instruction: {
            value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation: {
            value: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyToHclTerraform(struct!.validation),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        llm_extraction_config: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToTerraform(struct!.llmExtractionConfig),
    }
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        llm_extraction_config: {
            value: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyToHclTerraform(struct!.llmExtractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extraction_config: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToTerraform(struct!.extractionConfig),
        extraction_type: cdktn.stringToTerraform(struct!.extractionType),
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extraction_config: {
            value: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyToHclTerraform(struct!.extractionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty",
        },
        extraction_type: {
            value: cdktn.stringToHclTerraform(struct!.extractionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
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


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaPropertyToTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metadata_schema: cdktn.listMapper(ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToTerraform, false)(struct!.metadataSchema),
    }
}


export function ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaPropertyToHclTerraform(struct?: CcMemory.MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metadata_schema: {
            value: cdktn.listMapperHcl(ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyToHclTerraform, false)(struct!.metadataSchema),
            isBlock: true,
            type: "list",
            storageClassType: "MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryUserPreferenceMemoryStrategyPropertyToTerraform(struct?: CcMemory.UserPreferenceMemoryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        created_at: cdktn.stringToTerraform(struct!.createdAt),
        description: cdktn.stringToTerraform(struct!.description),
        memory_record_schema: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaPropertyToTerraform(struct!.memoryRecordSchema),
        name: cdktn.stringToTerraform(struct!.name),
        namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
        namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
        status: cdktn.stringToTerraform(struct!.status),
        strategy_id: cdktn.stringToTerraform(struct!.strategyId),
        type: cdktn.stringToTerraform(struct!.type),
        updated_at: cdktn.stringToTerraform(struct!.updatedAt),
    }
}


export function ccMemoryUserPreferenceMemoryStrategyPropertyToHclTerraform(struct?: CcMemory.UserPreferenceMemoryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        created_at: {
            value: cdktn.stringToHclTerraform(struct!.createdAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory_record_schema: {
            value: ccMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaPropertyToHclTerraform(struct!.memoryRecordSchema),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace_templates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        namespaces: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        strategy_id: {
            value: cdktn.stringToHclTerraform(struct!.strategyId),
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
        updated_at: {
            value: cdktn.stringToHclTerraform(struct!.updatedAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryMemoryStrategyPropertyToTerraform(struct?: CcMemory.MemoryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_memory_strategy: ccMemoryCustomMemoryStrategyPropertyToTerraform(struct!.customMemoryStrategy),
        episodic_memory_strategy: ccMemoryEpisodicMemoryStrategyPropertyToTerraform(struct!.episodicMemoryStrategy),
        semantic_memory_strategy: ccMemorySemanticMemoryStrategyPropertyToTerraform(struct!.semanticMemoryStrategy),
        summary_memory_strategy: ccMemorySummaryMemoryStrategyPropertyToTerraform(struct!.summaryMemoryStrategy),
        user_preference_memory_strategy: ccMemoryUserPreferenceMemoryStrategyPropertyToTerraform(struct!.userPreferenceMemoryStrategy),
    }
}


export function ccMemoryMemoryStrategyPropertyToHclTerraform(struct?: CcMemory.MemoryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_memory_strategy: {
            value: ccMemoryCustomMemoryStrategyPropertyToHclTerraform(struct!.customMemoryStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomMemoryStrategyProperty",
        },
        episodic_memory_strategy: {
            value: ccMemoryEpisodicMemoryStrategyPropertyToHclTerraform(struct!.episodicMemoryStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "EpisodicMemoryStrategyProperty",
        },
        semantic_memory_strategy: {
            value: ccMemorySemanticMemoryStrategyPropertyToHclTerraform(struct!.semanticMemoryStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "SemanticMemoryStrategyProperty",
        },
        summary_memory_strategy: {
            value: ccMemorySummaryMemoryStrategyPropertyToHclTerraform(struct!.summaryMemoryStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "SummaryMemoryStrategyProperty",
        },
        user_preference_memory_strategy: {
            value: ccMemoryUserPreferenceMemoryStrategyPropertyToHclTerraform(struct!.userPreferenceMemoryStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "UserPreferenceMemoryStrategyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryContentConfigurationPropertyToTerraform(struct?: CcMemory.ContentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        level: cdktn.stringToTerraform(struct!.level),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccMemoryContentConfigurationPropertyToHclTerraform(struct?: CcMemory.ContentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        level: {
            value: cdktn.stringToHclTerraform(struct!.level),
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


export function ccMemoryKinesisResourcePropertyToTerraform(struct?: CcMemory.KinesisResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_configurations: cdktn.listMapper(ccMemoryContentConfigurationPropertyToTerraform, false)(struct!.contentConfigurations),
        data_stream_arn: cdktn.stringToTerraform(struct!.dataStreamArn),
    }
}


export function ccMemoryKinesisResourcePropertyToHclTerraform(struct?: CcMemory.KinesisResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_configurations: {
            value: cdktn.listMapperHcl(ccMemoryContentConfigurationPropertyToHclTerraform, false)(struct!.contentConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "ContentConfigurationPropertyList",
        },
        data_stream_arn: {
            value: cdktn.stringToHclTerraform(struct!.dataStreamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryStreamDeliveryResourcePropertyToTerraform(struct?: CcMemory.StreamDeliveryResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kinesis: ccMemoryKinesisResourcePropertyToTerraform(struct!.kinesis),
    }
}


export function ccMemoryStreamDeliveryResourcePropertyToHclTerraform(struct?: CcMemory.StreamDeliveryResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kinesis: {
            value: ccMemoryKinesisResourcePropertyToHclTerraform(struct!.kinesis),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisResourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMemoryStreamDeliveryResourcesPropertyToTerraform(struct?: CcMemory.StreamDeliveryResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resources: cdktn.listMapper(ccMemoryStreamDeliveryResourcePropertyToTerraform, false)(struct!.resources),
    }
}


export function ccMemoryStreamDeliveryResourcesPropertyToHclTerraform(struct?: CcMemory.StreamDeliveryResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resources: {
            value: cdktn.listMapperHcl(ccMemoryStreamDeliveryResourcePropertyToHclTerraform, false)(struct!.resources),
            isBlock: true,
            type: "list",
            storageClassType: "StreamDeliveryResourcePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcMemory {
export interface IndexedKeyProperty {
    /**
    * Key name for metadata fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#key CcMemory#key}
    */
    readonly key?: string;
    /**
    * Supported data types for metadata values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
}
export class IndexedKeyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IndexedKeyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IndexedKeyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._type = value.type;
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

export class IndexedKeyPropertyList extends cdktn.ComplexList {
    public internalValue? : IndexedKeyProperty[] | cdktn.IResolvable

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
    public get(index: number): IndexedKeyPropertyOutputReference {
        return new IndexedKeyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EpisodicOverrideConsolidationConfigurationInputProperty {
    /**
    * Text prompt for model instructions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#append_to_prompt CcMemory#append_to_prompt}
    */
    readonly appendToPrompt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#model_id CcMemory#model_id}
    */
    readonly modelId?: string;
}
export class EpisodicOverrideConsolidationConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EpisodicOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appendToPrompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.appendToPrompt = this._appendToPrompt;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EpisodicOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appendToPrompt = undefined;
            this._modelId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appendToPrompt = value.appendToPrompt;
            this._modelId = value.modelId;
        }
    }

    // append_to_prompt - computed: true, optional: true, required: false
    private _appendToPrompt?: string; 
    public get appendToPrompt() {
        return this.getStringAttribute('append_to_prompt');
    }
    public set appendToPrompt(value: string) {
        this._appendToPrompt = value;
    }
    public resetAppendToPrompt() {
        this._appendToPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appendToPromptInput() {
        return this._appendToPrompt;
    }

    // model_id - computed: true, optional: true, required: false
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    public resetModelId() {
        this._modelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
    }
}
export interface EpisodicOverrideExtractionConfigurationInputProperty {
    /**
    * Text prompt for model instructions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#append_to_prompt CcMemory#append_to_prompt}
    */
    readonly appendToPrompt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#model_id CcMemory#model_id}
    */
    readonly modelId?: string;
}
export class EpisodicOverrideExtractionConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EpisodicOverrideExtractionConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appendToPrompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.appendToPrompt = this._appendToPrompt;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EpisodicOverrideExtractionConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appendToPrompt = undefined;
            this._modelId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appendToPrompt = value.appendToPrompt;
            this._modelId = value.modelId;
        }
    }

    // append_to_prompt - computed: true, optional: true, required: false
    private _appendToPrompt?: string; 
    public get appendToPrompt() {
        return this.getStringAttribute('append_to_prompt');
    }
    public set appendToPrompt(value: string) {
        this._appendToPrompt = value;
    }
    public resetAppendToPrompt() {
        this._appendToPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appendToPromptInput() {
        return this._appendToPrompt;
    }

    // model_id - computed: true, optional: true, required: false
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    public resetModelId() {
        this._modelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
    }
}
export interface NumberValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_value CcMemory#max_value}
    */
    readonly maxValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#min_value CcMemory#min_value}
    */
    readonly minValue?: number;
}
export class NumberValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NumberValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NumberValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxValue = undefined;
            this._minValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
        }
    }

    // max_value - computed: true, optional: true, required: false
    private _maxValue?: number; 
    public get maxValue() {
        return this.getNumberAttribute('max_value');
    }
    public set maxValue(value: number) {
        this._maxValue = value;
    }
    public resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
        return this._maxValue;
    }

    // min_value - computed: true, optional: true, required: false
    private _minValue?: number; 
    public get minValue() {
        return this.getNumberAttribute('min_value');
    }
    public set minValue(value: number) {
        this._minValue = value;
    }
    public resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValueInput() {
        return this._minValue;
    }
}
export interface StringListValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_items CcMemory#max_items}
    */
    readonly maxItems?: number;
}
export class StringListValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StringListValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._maxItems !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxItems = this._maxItems;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StringListValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._maxItems = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._maxItems = value.maxItems;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // max_items - computed: true, optional: true, required: false
    private _maxItems?: number; 
    public get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    public set maxItems(value: number) {
        this._maxItems = value;
    }
    public resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxItemsInput() {
        return this._maxItems;
    }
}
export interface StringValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
}
export class StringValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StringValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StringValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }
}
export interface ValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#number_validation CcMemory#number_validation}
    */
    readonly numberValidation?: NumberValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_list_validation CcMemory#string_list_validation}
    */
    readonly stringListValidation?: StringListValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_validation CcMemory#string_validation}
    */
    readonly stringValidation?: StringValidationProperty;
}
export class ValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._numberValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberValidation = this._numberValidation?.internalValue;
        }
        if (this._stringListValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
        }
        if (this._stringValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValidation = this._stringValidation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = undefined;
            this._stringListValidation.internalValue = undefined;
            this._stringValidation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = value.numberValidation;
            this._stringListValidation.internalValue = value.stringListValidation;
            this._stringValidation.internalValue = value.stringValidation;
        }
    }

    // number_validation - computed: true, optional: true, required: false
    private _numberValidation = new NumberValidationPropertyOutputReference(this, "number_validation");
    public get numberValidation() {
        return this._numberValidation;
    }
    public putNumberValidation(value: NumberValidationProperty) {
        this._numberValidation.internalValue = value;
    }
    public resetNumberValidation() {
        this._numberValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberValidationInput() {
        return this._numberValidation.internalValue;
    }

    // string_list_validation - computed: true, optional: true, required: false
    private _stringListValidation = new StringListValidationPropertyOutputReference(this, "string_list_validation");
    public get stringListValidation() {
        return this._stringListValidation;
    }
    public putStringListValidation(value: StringListValidationProperty) {
        this._stringListValidation.internalValue = value;
    }
    public resetStringListValidation() {
        this._stringListValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringListValidationInput() {
        return this._stringListValidation.internalValue;
    }

    // string_validation - computed: true, optional: true, required: false
    private _stringValidation = new StringValidationPropertyOutputReference(this, "string_validation");
    public get stringValidation() {
        return this._stringValidation;
    }
    public putStringValidation(value: StringValidationProperty) {
        this._stringValidation.internalValue = value;
    }
    public resetStringValidation() {
        this._stringValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValidationInput() {
        return this._stringValidation.internalValue;
    }
}
export interface LlmExtractionConfigProperty {
    /**
    * Definition for the metadata schema entry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#definition CcMemory#definition}
    */
    readonly definition?: string;
    /**
    * LLM extraction instruction
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction CcMemory#llm_extraction_instruction}
    */
    readonly llmExtractionInstruction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#validation CcMemory#validation}
    */
    readonly validation?: ValidationProperty;
}
export class LlmExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LlmExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        if (this._llmExtractionInstruction !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
        }
        if (this._validation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validation = this._validation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LlmExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definition = undefined;
            this._llmExtractionInstruction = undefined;
            this._validation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definition = value.definition;
            this._llmExtractionInstruction = value.llmExtractionInstruction;
            this._validation.internalValue = value.validation;
        }
    }

    // definition - computed: true, optional: true, required: false
    private _definition?: string; 
    public get definition() {
        return this.getStringAttribute('definition');
    }
    public set definition(value: string) {
        this._definition = value;
    }
    public resetDefinition() {
        this._definition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition;
    }

    // llm_extraction_instruction - computed: true, optional: true, required: false
    private _llmExtractionInstruction?: string; 
    public get llmExtractionInstruction() {
        return this.getStringAttribute('llm_extraction_instruction');
    }
    public set llmExtractionInstruction(value: string) {
        this._llmExtractionInstruction = value;
    }
    public resetLlmExtractionInstruction() {
        this._llmExtractionInstruction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionInstructionInput() {
        return this._llmExtractionInstruction;
    }

    // validation - computed: true, optional: true, required: false
    private _validation = new ValidationPropertyOutputReference(this, "validation");
    public get validation() {
        return this._validation;
    }
    public putValidation(value: ValidationProperty) {
        this._validation.internalValue = value;
    }
    public resetValidation() {
        this._validation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
        return this._validation.internalValue;
    }
}
export interface ExtractionConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_config CcMemory#llm_extraction_config}
    */
    readonly llmExtractionConfig?: LlmExtractionConfigProperty;
}
export class ExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._llmExtractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
        }
    }

    // llm_extraction_config - computed: true, optional: true, required: false
    private _llmExtractionConfig = new LlmExtractionConfigPropertyOutputReference(this, "llm_extraction_config");
    public get llmExtractionConfig() {
        return this._llmExtractionConfig;
    }
    public putLlmExtractionConfig(value: LlmExtractionConfigProperty) {
        this._llmExtractionConfig.internalValue = value;
    }
    public resetLlmExtractionConfig() {
        this._llmExtractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionConfigInput() {
        return this._llmExtractionConfig.internalValue;
    }
}
export interface MetadataSchemaEntryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_config CcMemory#extraction_config}
    */
    readonly extractionConfig?: ExtractionConfigProperty;
    /**
    * Specifies whether the metadata value is extracted by the LLM or passed through deterministically from the event
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_type CcMemory#extraction_type}
    */
    readonly extractionType?: string;
    /**
    * Key name for metadata fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#key CcMemory#key}
    */
    readonly key?: string;
    /**
    * Supported data types for metadata values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
}
export class MetadataSchemaEntryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetadataSchemaEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
        }
        if (this._extractionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionType = this._extractionType;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetadataSchemaEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = undefined;
            this._extractionType = undefined;
            this._key = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = value.extractionConfig;
            this._extractionType = value.extractionType;
            this._key = value.key;
            this._type = value.type;
        }
    }

    // extraction_config - computed: true, optional: true, required: false
    private _extractionConfig = new ExtractionConfigPropertyOutputReference(this, "extraction_config");
    public get extractionConfig() {
        return this._extractionConfig;
    }
    public putExtractionConfig(value: ExtractionConfigProperty) {
        this._extractionConfig.internalValue = value;
    }
    public resetExtractionConfig() {
        this._extractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionConfigInput() {
        return this._extractionConfig.internalValue;
    }

    // extraction_type - computed: true, optional: true, required: false
    private _extractionType?: string; 
    public get extractionType() {
        return this.getStringAttribute('extraction_type');
    }
    public set extractionType(value: string) {
        this._extractionType = value;
    }
    public resetExtractionType() {
        this._extractionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionTypeInput() {
        return this._extractionType;
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

export class MetadataSchemaEntryPropertyList extends cdktn.ComplexList {
    public internalValue? : MetadataSchemaEntryProperty[] | cdktn.IResolvable

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
    public get(index: number): MetadataSchemaEntryPropertyOutputReference {
        return new MetadataSchemaEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MemoryRecordSchemaProperty {
    /**
    * List of metadata schema entries
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#metadata_schema CcMemory#metadata_schema}
    */
    readonly metadataSchema?: MetadataSchemaEntryProperty[] | cdktn.IResolvable;
}
export class MemoryRecordSchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryRecordSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metadataSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryRecordSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = value.metadataSchema;
        }
    }

    // metadata_schema - computed: true, optional: true, required: false
    private _metadataSchema = new MetadataSchemaEntryPropertyList(this, "metadata_schema", false);
    public get metadataSchema() {
        return this._metadataSchema;
    }
    public putMetadataSchema(value: MetadataSchemaEntryProperty[] | cdktn.IResolvable) {
        this._metadataSchema.internalValue = value;
    }
    public resetMetadataSchema() {
        this._metadataSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataSchemaInput() {
        return this._metadataSchema.internalValue;
    }
}
export interface EpisodicOverrideReflectionConfigurationInputProperty {
    /**
    * Text prompt for model instructions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#append_to_prompt CcMemory#append_to_prompt}
    */
    readonly appendToPrompt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#memory_record_schema CcMemory#memory_record_schema}
    */
    readonly memoryRecordSchema?: MemoryRecordSchemaProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#model_id CcMemory#model_id}
    */
    readonly modelId?: string;
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespace_templates CcMemory#namespace_templates}
    */
    readonly namespaceTemplates?: string[];
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespaces CcMemory#namespaces}
    */
    readonly namespaces?: string[];
}
export class EpisodicOverrideReflectionConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EpisodicOverrideReflectionConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appendToPrompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.appendToPrompt = this._appendToPrompt;
        }
        if (this._memoryRecordSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        if (this._namespaceTemplates !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceTemplates = this._namespaceTemplates;
        }
        if (this._namespaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaces = this._namespaces;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EpisodicOverrideReflectionConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appendToPrompt = undefined;
            this._memoryRecordSchema.internalValue = undefined;
            this._modelId = undefined;
            this._namespaceTemplates = undefined;
            this._namespaces = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appendToPrompt = value.appendToPrompt;
            this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
            this._modelId = value.modelId;
            this._namespaceTemplates = value.namespaceTemplates;
            this._namespaces = value.namespaces;
        }
    }

    // append_to_prompt - computed: true, optional: true, required: false
    private _appendToPrompt?: string; 
    public get appendToPrompt() {
        return this.getStringAttribute('append_to_prompt');
    }
    public set appendToPrompt(value: string) {
        this._appendToPrompt = value;
    }
    public resetAppendToPrompt() {
        this._appendToPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appendToPromptInput() {
        return this._appendToPrompt;
    }

    // memory_record_schema - computed: true, optional: true, required: false
    private _memoryRecordSchema = new MemoryRecordSchemaPropertyOutputReference(this, "memory_record_schema");
    public get memoryRecordSchema() {
        return this._memoryRecordSchema;
    }
    public putMemoryRecordSchema(value: MemoryRecordSchemaProperty) {
        this._memoryRecordSchema.internalValue = value;
    }
    public resetMemoryRecordSchema() {
        this._memoryRecordSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryRecordSchemaInput() {
        return this._memoryRecordSchema.internalValue;
    }

    // model_id - computed: true, optional: true, required: false
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    public resetModelId() {
        this._modelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
    }

    // namespace_templates - computed: true, optional: true, required: false
    private _namespaceTemplates?: string[]; 
    public get namespaceTemplates() {
        return this.getListAttribute('namespace_templates');
    }
    public set namespaceTemplates(value: string[]) {
        this._namespaceTemplates = value;
    }
    public resetNamespaceTemplates() {
        this._namespaceTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceTemplatesInput() {
        return this._namespaceTemplates;
    }

    // namespaces - computed: true, optional: true, required: false
    private _namespaces?: string[]; 
    public get namespaces() {
        return this.getListAttribute('namespaces');
    }
    public set namespaces(value: string[]) {
        this._namespaces = value;
    }
    public resetNamespaces() {
        this._namespaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespacesInput() {
        return this._namespaces;
    }
}
export interface EpisodicOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#consolidation CcMemory#consolidation}
    */
    readonly consolidation?: EpisodicOverrideConsolidationConfigurationInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction CcMemory#extraction}
    */
    readonly extraction?: EpisodicOverrideExtractionConfigurationInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#reflection CcMemory#reflection}
    */
    readonly reflection?: EpisodicOverrideReflectionConfigurationInputProperty;
}
export class EpisodicOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EpisodicOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._consolidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.consolidation = this._consolidation?.internalValue;
        }
        if (this._extraction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extraction = this._extraction?.internalValue;
        }
        if (this._reflection?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.reflection = this._reflection?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EpisodicOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._consolidation.internalValue = undefined;
            this._extraction.internalValue = undefined;
            this._reflection.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._consolidation.internalValue = value.consolidation;
            this._extraction.internalValue = value.extraction;
            this._reflection.internalValue = value.reflection;
        }
    }

    // consolidation - computed: true, optional: true, required: false
    private _consolidation = new EpisodicOverrideConsolidationConfigurationInputPropertyOutputReference(this, "consolidation");
    public get consolidation() {
        return this._consolidation;
    }
    public putConsolidation(value: EpisodicOverrideConsolidationConfigurationInputProperty) {
        this._consolidation.internalValue = value;
    }
    public resetConsolidation() {
        this._consolidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consolidationInput() {
        return this._consolidation.internalValue;
    }

    // extraction - computed: true, optional: true, required: false
    private _extraction = new EpisodicOverrideExtractionConfigurationInputPropertyOutputReference(this, "extraction");
    public get extraction() {
        return this._extraction;
    }
    public putExtraction(value: EpisodicOverrideExtractionConfigurationInputProperty) {
        this._extraction.internalValue = value;
    }
    public resetExtraction() {
        this._extraction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionInput() {
        return this._extraction.internalValue;
    }

    // reflection - computed: true, optional: true, required: false
    private _reflection = new EpisodicOverrideReflectionConfigurationInputPropertyOutputReference(this, "reflection");
    public get reflection() {
        return this._reflection;
    }
    public putReflection(value: EpisodicOverrideReflectionConfigurationInputProperty) {
        this._reflection.internalValue = value;
    }
    public resetReflection() {
        this._reflection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reflectionInput() {
        return this._reflection.internalValue;
    }
}
export interface InvocationConfigurationInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#payload_delivery_bucket_name CcMemory#payload_delivery_bucket_name}
    */
    readonly payloadDeliveryBucketName?: string;
    /**
    * ARN format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#topic_arn CcMemory#topic_arn}
    */
    readonly topicArn?: string;
}
export class InvocationConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InvocationConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payloadDeliveryBucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadDeliveryBucketName = this._payloadDeliveryBucketName;
        }
        if (this._topicArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicArn = this._topicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InvocationConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payloadDeliveryBucketName = undefined;
            this._topicArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payloadDeliveryBucketName = value.payloadDeliveryBucketName;
            this._topicArn = value.topicArn;
        }
    }

    // payload_delivery_bucket_name - computed: true, optional: true, required: false
    private _payloadDeliveryBucketName?: string; 
    public get payloadDeliveryBucketName() {
        return this.getStringAttribute('payload_delivery_bucket_name');
    }
    public set payloadDeliveryBucketName(value: string) {
        this._payloadDeliveryBucketName = value;
    }
    public resetPayloadDeliveryBucketName() {
        this._payloadDeliveryBucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadDeliveryBucketNameInput() {
        return this._payloadDeliveryBucketName;
    }

    // topic_arn - computed: true, optional: true, required: false
    private _topicArn?: string; 
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
        this._topicArn = value;
    }
    public resetTopicArn() {
        this._topicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
        return this._topicArn;
    }
}
export interface MessageBasedTriggerInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#message_count CcMemory#message_count}
    */
    readonly messageCount?: number;
}
export class MessageBasedTriggerInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MessageBasedTriggerInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._messageCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageCount = this._messageCount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MessageBasedTriggerInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._messageCount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._messageCount = value.messageCount;
        }
    }

    // message_count - computed: true, optional: true, required: false
    private _messageCount?: number; 
    public get messageCount() {
        return this.getNumberAttribute('message_count');
    }
    public set messageCount(value: number) {
        this._messageCount = value;
    }
    public resetMessageCount() {
        this._messageCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageCountInput() {
        return this._messageCount;
    }
}
export interface TimeBasedTriggerInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#idle_session_timeout CcMemory#idle_session_timeout}
    */
    readonly idleSessionTimeout?: number;
}
export class TimeBasedTriggerInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimeBasedTriggerInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleSessionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleSessionTimeout = this._idleSessionTimeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeBasedTriggerInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleSessionTimeout = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleSessionTimeout = value.idleSessionTimeout;
        }
    }

    // idle_session_timeout - computed: true, optional: true, required: false
    private _idleSessionTimeout?: number; 
    public get idleSessionTimeout() {
        return this.getNumberAttribute('idle_session_timeout');
    }
    public set idleSessionTimeout(value: number) {
        this._idleSessionTimeout = value;
    }
    public resetIdleSessionTimeout() {
        this._idleSessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleSessionTimeoutInput() {
        return this._idleSessionTimeout;
    }
}
export interface TokenBasedTriggerInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#token_count CcMemory#token_count}
    */
    readonly tokenCount?: number;
}
export class TokenBasedTriggerInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TokenBasedTriggerInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tokenCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenCount = this._tokenCount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TokenBasedTriggerInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tokenCount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tokenCount = value.tokenCount;
        }
    }

    // token_count - computed: true, optional: true, required: false
    private _tokenCount?: number; 
    public get tokenCount() {
        return this.getNumberAttribute('token_count');
    }
    public set tokenCount(value: number) {
        this._tokenCount = value;
    }
    public resetTokenCount() {
        this._tokenCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenCountInput() {
        return this._tokenCount;
    }
}
export interface TriggerConditionInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#message_based_trigger CcMemory#message_based_trigger}
    */
    readonly messageBasedTrigger?: MessageBasedTriggerInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#time_based_trigger CcMemory#time_based_trigger}
    */
    readonly timeBasedTrigger?: TimeBasedTriggerInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#token_based_trigger CcMemory#token_based_trigger}
    */
    readonly tokenBasedTrigger?: TokenBasedTriggerInputProperty;
}
export class TriggerConditionInputPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TriggerConditionInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._messageBasedTrigger?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageBasedTrigger = this._messageBasedTrigger?.internalValue;
        }
        if (this._timeBasedTrigger?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeBasedTrigger = this._timeBasedTrigger?.internalValue;
        }
        if (this._tokenBasedTrigger?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenBasedTrigger = this._tokenBasedTrigger?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TriggerConditionInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._messageBasedTrigger.internalValue = undefined;
            this._timeBasedTrigger.internalValue = undefined;
            this._tokenBasedTrigger.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._messageBasedTrigger.internalValue = value.messageBasedTrigger;
            this._timeBasedTrigger.internalValue = value.timeBasedTrigger;
            this._tokenBasedTrigger.internalValue = value.tokenBasedTrigger;
        }
    }

    // message_based_trigger - computed: true, optional: true, required: false
    private _messageBasedTrigger = new MessageBasedTriggerInputPropertyOutputReference(this, "message_based_trigger");
    public get messageBasedTrigger() {
        return this._messageBasedTrigger;
    }
    public putMessageBasedTrigger(value: MessageBasedTriggerInputProperty) {
        this._messageBasedTrigger.internalValue = value;
    }
    public resetMessageBasedTrigger() {
        this._messageBasedTrigger.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageBasedTriggerInput() {
        return this._messageBasedTrigger.internalValue;
    }

    // time_based_trigger - computed: true, optional: true, required: false
    private _timeBasedTrigger = new TimeBasedTriggerInputPropertyOutputReference(this, "time_based_trigger");
    public get timeBasedTrigger() {
        return this._timeBasedTrigger;
    }
    public putTimeBasedTrigger(value: TimeBasedTriggerInputProperty) {
        this._timeBasedTrigger.internalValue = value;
    }
    public resetTimeBasedTrigger() {
        this._timeBasedTrigger.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeBasedTriggerInput() {
        return this._timeBasedTrigger.internalValue;
    }

    // token_based_trigger - computed: true, optional: true, required: false
    private _tokenBasedTrigger = new TokenBasedTriggerInputPropertyOutputReference(this, "token_based_trigger");
    public get tokenBasedTrigger() {
        return this._tokenBasedTrigger;
    }
    public putTokenBasedTrigger(value: TokenBasedTriggerInputProperty) {
        this._tokenBasedTrigger.internalValue = value;
    }
    public resetTokenBasedTrigger() {
        this._tokenBasedTrigger.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenBasedTriggerInput() {
        return this._tokenBasedTrigger.internalValue;
    }
}

export class TriggerConditionInputPropertyList extends cdktn.ComplexList {
    public internalValue? : TriggerConditionInputProperty[] | cdktn.IResolvable

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
    public get(index: number): TriggerConditionInputPropertyOutputReference {
        return new TriggerConditionInputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SelfManagedConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#historical_context_window_size CcMemory#historical_context_window_size}
    */
    readonly historicalContextWindowSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#invocation_configuration CcMemory#invocation_configuration}
    */
    readonly invocationConfiguration?: InvocationConfigurationInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#trigger_conditions CcMemory#trigger_conditions}
    */
    readonly triggerConditions?: TriggerConditionInputProperty[] | cdktn.IResolvable;
}
export class SelfManagedConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelfManagedConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._historicalContextWindowSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.historicalContextWindowSize = this._historicalContextWindowSize;
        }
        if (this._invocationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationConfiguration = this._invocationConfiguration?.internalValue;
        }
        if (this._triggerConditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.triggerConditions = this._triggerConditions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelfManagedConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._historicalContextWindowSize = undefined;
            this._invocationConfiguration.internalValue = undefined;
            this._triggerConditions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._historicalContextWindowSize = value.historicalContextWindowSize;
            this._invocationConfiguration.internalValue = value.invocationConfiguration;
            this._triggerConditions.internalValue = value.triggerConditions;
        }
    }

    // historical_context_window_size - computed: true, optional: true, required: false
    private _historicalContextWindowSize?: number; 
    public get historicalContextWindowSize() {
        return this.getNumberAttribute('historical_context_window_size');
    }
    public set historicalContextWindowSize(value: number) {
        this._historicalContextWindowSize = value;
    }
    public resetHistoricalContextWindowSize() {
        this._historicalContextWindowSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get historicalContextWindowSizeInput() {
        return this._historicalContextWindowSize;
    }

    // invocation_configuration - computed: true, optional: true, required: false
    private _invocationConfiguration = new InvocationConfigurationInputPropertyOutputReference(this, "invocation_configuration");
    public get invocationConfiguration() {
        return this._invocationConfiguration;
    }
    public putInvocationConfiguration(value: InvocationConfigurationInputProperty) {
        this._invocationConfiguration.internalValue = value;
    }
    public resetInvocationConfiguration() {
        this._invocationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationConfigurationInput() {
        return this._invocationConfiguration.internalValue;
    }

    // trigger_conditions - computed: true, optional: true, required: false
    private _triggerConditions = new TriggerConditionInputPropertyList(this, "trigger_conditions", false);
    public get triggerConditions() {
        return this._triggerConditions;
    }
    public putTriggerConditions(value: TriggerConditionInputProperty[] | cdktn.IResolvable) {
        this._triggerConditions.internalValue = value;
    }
    public resetTriggerConditions() {
        this._triggerConditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerConditionsInput() {
        return this._triggerConditions.internalValue;
    }
}
export interface SemanticOverrideConsolidationConfigurationInputProperty {
    /**
    * Text prompt for model instructions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#append_to_prompt CcMemory#append_to_prompt}
    */
    readonly appendToPrompt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#model_id CcMemory#model_id}
    */
    readonly modelId?: string;
}
export class SemanticOverrideConsolidationConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SemanticOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appendToPrompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.appendToPrompt = this._appendToPrompt;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SemanticOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appendToPrompt = undefined;
            this._modelId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appendToPrompt = value.appendToPrompt;
            this._modelId = value.modelId;
        }
    }

    // append_to_prompt - computed: true, optional: true, required: false
    private _appendToPrompt?: string; 
    public get appendToPrompt() {
        return this.getStringAttribute('append_to_prompt');
    }
    public set appendToPrompt(value: string) {
        this._appendToPrompt = value;
    }
    public resetAppendToPrompt() {
        this._appendToPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appendToPromptInput() {
        return this._appendToPrompt;
    }

    // model_id - computed: true, optional: true, required: false
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    public resetModelId() {
        this._modelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
    }
}
export interface SemanticOverrideExtractionConfigurationInputProperty {
    /**
    * Text prompt for model instructions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#append_to_prompt CcMemory#append_to_prompt}
    */
    readonly appendToPrompt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#model_id CcMemory#model_id}
    */
    readonly modelId?: string;
}
export class SemanticOverrideExtractionConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SemanticOverrideExtractionConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appendToPrompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.appendToPrompt = this._appendToPrompt;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SemanticOverrideExtractionConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appendToPrompt = undefined;
            this._modelId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appendToPrompt = value.appendToPrompt;
            this._modelId = value.modelId;
        }
    }

    // append_to_prompt - computed: true, optional: true, required: false
    private _appendToPrompt?: string; 
    public get appendToPrompt() {
        return this.getStringAttribute('append_to_prompt');
    }
    public set appendToPrompt(value: string) {
        this._appendToPrompt = value;
    }
    public resetAppendToPrompt() {
        this._appendToPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appendToPromptInput() {
        return this._appendToPrompt;
    }

    // model_id - computed: true, optional: true, required: false
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    public resetModelId() {
        this._modelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
    }
}
export interface SemanticOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#consolidation CcMemory#consolidation}
    */
    readonly consolidation?: SemanticOverrideConsolidationConfigurationInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction CcMemory#extraction}
    */
    readonly extraction?: SemanticOverrideExtractionConfigurationInputProperty;
}
export class SemanticOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SemanticOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._consolidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.consolidation = this._consolidation?.internalValue;
        }
        if (this._extraction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extraction = this._extraction?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SemanticOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._consolidation.internalValue = undefined;
            this._extraction.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._consolidation.internalValue = value.consolidation;
            this._extraction.internalValue = value.extraction;
        }
    }

    // consolidation - computed: true, optional: true, required: false
    private _consolidation = new SemanticOverrideConsolidationConfigurationInputPropertyOutputReference(this, "consolidation");
    public get consolidation() {
        return this._consolidation;
    }
    public putConsolidation(value: SemanticOverrideConsolidationConfigurationInputProperty) {
        this._consolidation.internalValue = value;
    }
    public resetConsolidation() {
        this._consolidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consolidationInput() {
        return this._consolidation.internalValue;
    }

    // extraction - computed: true, optional: true, required: false
    private _extraction = new SemanticOverrideExtractionConfigurationInputPropertyOutputReference(this, "extraction");
    public get extraction() {
        return this._extraction;
    }
    public putExtraction(value: SemanticOverrideExtractionConfigurationInputProperty) {
        this._extraction.internalValue = value;
    }
    public resetExtraction() {
        this._extraction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionInput() {
        return this._extraction.internalValue;
    }
}
export interface SummaryOverrideConsolidationConfigurationInputProperty {
    /**
    * Text prompt for model instructions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#append_to_prompt CcMemory#append_to_prompt}
    */
    readonly appendToPrompt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#model_id CcMemory#model_id}
    */
    readonly modelId?: string;
}
export class SummaryOverrideConsolidationConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SummaryOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appendToPrompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.appendToPrompt = this._appendToPrompt;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SummaryOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appendToPrompt = undefined;
            this._modelId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appendToPrompt = value.appendToPrompt;
            this._modelId = value.modelId;
        }
    }

    // append_to_prompt - computed: true, optional: true, required: false
    private _appendToPrompt?: string; 
    public get appendToPrompt() {
        return this.getStringAttribute('append_to_prompt');
    }
    public set appendToPrompt(value: string) {
        this._appendToPrompt = value;
    }
    public resetAppendToPrompt() {
        this._appendToPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appendToPromptInput() {
        return this._appendToPrompt;
    }

    // model_id - computed: true, optional: true, required: false
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    public resetModelId() {
        this._modelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
    }
}
export interface SummaryOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#consolidation CcMemory#consolidation}
    */
    readonly consolidation?: SummaryOverrideConsolidationConfigurationInputProperty;
}
export class SummaryOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SummaryOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._consolidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.consolidation = this._consolidation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SummaryOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._consolidation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._consolidation.internalValue = value.consolidation;
        }
    }

    // consolidation - computed: true, optional: true, required: false
    private _consolidation = new SummaryOverrideConsolidationConfigurationInputPropertyOutputReference(this, "consolidation");
    public get consolidation() {
        return this._consolidation;
    }
    public putConsolidation(value: SummaryOverrideConsolidationConfigurationInputProperty) {
        this._consolidation.internalValue = value;
    }
    public resetConsolidation() {
        this._consolidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consolidationInput() {
        return this._consolidation.internalValue;
    }
}
export interface UserPreferenceOverrideConsolidationConfigurationInputProperty {
    /**
    * Text prompt for model instructions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#append_to_prompt CcMemory#append_to_prompt}
    */
    readonly appendToPrompt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#model_id CcMemory#model_id}
    */
    readonly modelId?: string;
}
export class UserPreferenceOverrideConsolidationConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserPreferenceOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appendToPrompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.appendToPrompt = this._appendToPrompt;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserPreferenceOverrideConsolidationConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appendToPrompt = undefined;
            this._modelId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appendToPrompt = value.appendToPrompt;
            this._modelId = value.modelId;
        }
    }

    // append_to_prompt - computed: true, optional: true, required: false
    private _appendToPrompt?: string; 
    public get appendToPrompt() {
        return this.getStringAttribute('append_to_prompt');
    }
    public set appendToPrompt(value: string) {
        this._appendToPrompt = value;
    }
    public resetAppendToPrompt() {
        this._appendToPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appendToPromptInput() {
        return this._appendToPrompt;
    }

    // model_id - computed: true, optional: true, required: false
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    public resetModelId() {
        this._modelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
    }
}
export interface UserPreferenceOverrideExtractionConfigurationInputProperty {
    /**
    * Text prompt for model instructions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#append_to_prompt CcMemory#append_to_prompt}
    */
    readonly appendToPrompt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#model_id CcMemory#model_id}
    */
    readonly modelId?: string;
}
export class UserPreferenceOverrideExtractionConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserPreferenceOverrideExtractionConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appendToPrompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.appendToPrompt = this._appendToPrompt;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserPreferenceOverrideExtractionConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appendToPrompt = undefined;
            this._modelId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appendToPrompt = value.appendToPrompt;
            this._modelId = value.modelId;
        }
    }

    // append_to_prompt - computed: true, optional: true, required: false
    private _appendToPrompt?: string; 
    public get appendToPrompt() {
        return this.getStringAttribute('append_to_prompt');
    }
    public set appendToPrompt(value: string) {
        this._appendToPrompt = value;
    }
    public resetAppendToPrompt() {
        this._appendToPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appendToPromptInput() {
        return this._appendToPrompt;
    }

    // model_id - computed: true, optional: true, required: false
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    public resetModelId() {
        this._modelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
    }
}
export interface UserPreferenceOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#consolidation CcMemory#consolidation}
    */
    readonly consolidation?: UserPreferenceOverrideConsolidationConfigurationInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction CcMemory#extraction}
    */
    readonly extraction?: UserPreferenceOverrideExtractionConfigurationInputProperty;
}
export class UserPreferenceOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserPreferenceOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._consolidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.consolidation = this._consolidation?.internalValue;
        }
        if (this._extraction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extraction = this._extraction?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserPreferenceOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._consolidation.internalValue = undefined;
            this._extraction.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._consolidation.internalValue = value.consolidation;
            this._extraction.internalValue = value.extraction;
        }
    }

    // consolidation - computed: true, optional: true, required: false
    private _consolidation = new UserPreferenceOverrideConsolidationConfigurationInputPropertyOutputReference(this, "consolidation");
    public get consolidation() {
        return this._consolidation;
    }
    public putConsolidation(value: UserPreferenceOverrideConsolidationConfigurationInputProperty) {
        this._consolidation.internalValue = value;
    }
    public resetConsolidation() {
        this._consolidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consolidationInput() {
        return this._consolidation.internalValue;
    }

    // extraction - computed: true, optional: true, required: false
    private _extraction = new UserPreferenceOverrideExtractionConfigurationInputPropertyOutputReference(this, "extraction");
    public get extraction() {
        return this._extraction;
    }
    public putExtraction(value: UserPreferenceOverrideExtractionConfigurationInputProperty) {
        this._extraction.internalValue = value;
    }
    public resetExtraction() {
        this._extraction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionInput() {
        return this._extraction.internalValue;
    }
}
export interface CustomConfigurationInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#episodic_override CcMemory#episodic_override}
    */
    readonly episodicOverride?: EpisodicOverrideProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#self_managed_configuration CcMemory#self_managed_configuration}
    */
    readonly selfManagedConfiguration?: SelfManagedConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#semantic_override CcMemory#semantic_override}
    */
    readonly semanticOverride?: SemanticOverrideProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#summary_override CcMemory#summary_override}
    */
    readonly summaryOverride?: SummaryOverrideProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#user_preference_override CcMemory#user_preference_override}
    */
    readonly userPreferenceOverride?: UserPreferenceOverrideProperty;
}
export class CustomConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._episodicOverride?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.episodicOverride = this._episodicOverride?.internalValue;
        }
        if (this._selfManagedConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfManagedConfiguration = this._selfManagedConfiguration?.internalValue;
        }
        if (this._semanticOverride?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.semanticOverride = this._semanticOverride?.internalValue;
        }
        if (this._summaryOverride?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.summaryOverride = this._summaryOverride?.internalValue;
        }
        if (this._userPreferenceOverride?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPreferenceOverride = this._userPreferenceOverride?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._episodicOverride.internalValue = undefined;
            this._selfManagedConfiguration.internalValue = undefined;
            this._semanticOverride.internalValue = undefined;
            this._summaryOverride.internalValue = undefined;
            this._userPreferenceOverride.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._episodicOverride.internalValue = value.episodicOverride;
            this._selfManagedConfiguration.internalValue = value.selfManagedConfiguration;
            this._semanticOverride.internalValue = value.semanticOverride;
            this._summaryOverride.internalValue = value.summaryOverride;
            this._userPreferenceOverride.internalValue = value.userPreferenceOverride;
        }
    }

    // episodic_override - computed: true, optional: true, required: false
    private _episodicOverride = new EpisodicOverridePropertyOutputReference(this, "episodic_override");
    public get episodicOverride() {
        return this._episodicOverride;
    }
    public putEpisodicOverride(value: EpisodicOverrideProperty) {
        this._episodicOverride.internalValue = value;
    }
    public resetEpisodicOverride() {
        this._episodicOverride.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get episodicOverrideInput() {
        return this._episodicOverride.internalValue;
    }

    // self_managed_configuration - computed: true, optional: true, required: false
    private _selfManagedConfiguration = new SelfManagedConfigurationPropertyOutputReference(this, "self_managed_configuration");
    public get selfManagedConfiguration() {
        return this._selfManagedConfiguration;
    }
    public putSelfManagedConfiguration(value: SelfManagedConfigurationProperty) {
        this._selfManagedConfiguration.internalValue = value;
    }
    public resetSelfManagedConfiguration() {
        this._selfManagedConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedConfigurationInput() {
        return this._selfManagedConfiguration.internalValue;
    }

    // semantic_override - computed: true, optional: true, required: false
    private _semanticOverride = new SemanticOverridePropertyOutputReference(this, "semantic_override");
    public get semanticOverride() {
        return this._semanticOverride;
    }
    public putSemanticOverride(value: SemanticOverrideProperty) {
        this._semanticOverride.internalValue = value;
    }
    public resetSemanticOverride() {
        this._semanticOverride.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get semanticOverrideInput() {
        return this._semanticOverride.internalValue;
    }

    // summary_override - computed: true, optional: true, required: false
    private _summaryOverride = new SummaryOverridePropertyOutputReference(this, "summary_override");
    public get summaryOverride() {
        return this._summaryOverride;
    }
    public putSummaryOverride(value: SummaryOverrideProperty) {
        this._summaryOverride.internalValue = value;
    }
    public resetSummaryOverride() {
        this._summaryOverride.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get summaryOverrideInput() {
        return this._summaryOverride.internalValue;
    }

    // user_preference_override - computed: true, optional: true, required: false
    private _userPreferenceOverride = new UserPreferenceOverridePropertyOutputReference(this, "user_preference_override");
    public get userPreferenceOverride() {
        return this._userPreferenceOverride;
    }
    public putUserPreferenceOverride(value: UserPreferenceOverrideProperty) {
        this._userPreferenceOverride.internalValue = value;
    }
    public resetUserPreferenceOverride() {
        this._userPreferenceOverride.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPreferenceOverrideInput() {
        return this._userPreferenceOverride.internalValue;
    }
}
export interface MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_value CcMemory#max_value}
    */
    readonly maxValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#min_value CcMemory#min_value}
    */
    readonly minValue?: number;
}
export class MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxValue = undefined;
            this._minValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
        }
    }

    // max_value - computed: true, optional: true, required: false
    private _maxValue?: number; 
    public get maxValue() {
        return this.getNumberAttribute('max_value');
    }
    public set maxValue(value: number) {
        this._maxValue = value;
    }
    public resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
        return this._maxValue;
    }

    // min_value - computed: true, optional: true, required: false
    private _minValue?: number; 
    public get minValue() {
        return this.getNumberAttribute('min_value');
    }
    public set minValue(value: number) {
        this._minValue = value;
    }
    public resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValueInput() {
        return this._minValue;
    }
}
export interface MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_items CcMemory#max_items}
    */
    readonly maxItems?: number;
}
export class MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._maxItems !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxItems = this._maxItems;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._maxItems = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._maxItems = value.maxItems;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // max_items - computed: true, optional: true, required: false
    private _maxItems?: number; 
    public get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    public set maxItems(value: number) {
        this._maxItems = value;
    }
    public resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxItemsInput() {
        return this._maxItems;
    }
}
export interface MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
}
export class MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }
}
export interface MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#number_validation CcMemory#number_validation}
    */
    readonly numberValidation?: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_list_validation CcMemory#string_list_validation}
    */
    readonly stringListValidation?: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_validation CcMemory#string_validation}
    */
    readonly stringValidation?: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty;
}
export class MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._numberValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberValidation = this._numberValidation?.internalValue;
        }
        if (this._stringListValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
        }
        if (this._stringValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValidation = this._stringValidation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = undefined;
            this._stringListValidation.internalValue = undefined;
            this._stringValidation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = value.numberValidation;
            this._stringListValidation.internalValue = value.stringListValidation;
            this._stringValidation.internalValue = value.stringValidation;
        }
    }

    // number_validation - computed: true, optional: true, required: false
    private _numberValidation = new MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyOutputReference(this, "number_validation");
    public get numberValidation() {
        return this._numberValidation;
    }
    public putNumberValidation(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty) {
        this._numberValidation.internalValue = value;
    }
    public resetNumberValidation() {
        this._numberValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberValidationInput() {
        return this._numberValidation.internalValue;
    }

    // string_list_validation - computed: true, optional: true, required: false
    private _stringListValidation = new MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyOutputReference(this, "string_list_validation");
    public get stringListValidation() {
        return this._stringListValidation;
    }
    public putStringListValidation(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty) {
        this._stringListValidation.internalValue = value;
    }
    public resetStringListValidation() {
        this._stringListValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringListValidationInput() {
        return this._stringListValidation.internalValue;
    }

    // string_validation - computed: true, optional: true, required: false
    private _stringValidation = new MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyOutputReference(this, "string_validation");
    public get stringValidation() {
        return this._stringValidation;
    }
    public putStringValidation(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty) {
        this._stringValidation.internalValue = value;
    }
    public resetStringValidation() {
        this._stringValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValidationInput() {
        return this._stringValidation.internalValue;
    }
}
export interface MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty {
    /**
    * Definition for the metadata schema entry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#definition CcMemory#definition}
    */
    readonly definition?: string;
    /**
    * LLM extraction instruction
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction CcMemory#llm_extraction_instruction}
    */
    readonly llmExtractionInstruction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#validation CcMemory#validation}
    */
    readonly validation?: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty;
}
export class MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        if (this._llmExtractionInstruction !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
        }
        if (this._validation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validation = this._validation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definition = undefined;
            this._llmExtractionInstruction = undefined;
            this._validation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definition = value.definition;
            this._llmExtractionInstruction = value.llmExtractionInstruction;
            this._validation.internalValue = value.validation;
        }
    }

    // definition - computed: true, optional: true, required: false
    private _definition?: string; 
    public get definition() {
        return this.getStringAttribute('definition');
    }
    public set definition(value: string) {
        this._definition = value;
    }
    public resetDefinition() {
        this._definition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition;
    }

    // llm_extraction_instruction - computed: true, optional: true, required: false
    private _llmExtractionInstruction?: string; 
    public get llmExtractionInstruction() {
        return this.getStringAttribute('llm_extraction_instruction');
    }
    public set llmExtractionInstruction(value: string) {
        this._llmExtractionInstruction = value;
    }
    public resetLlmExtractionInstruction() {
        this._llmExtractionInstruction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionInstructionInput() {
        return this._llmExtractionInstruction;
    }

    // validation - computed: true, optional: true, required: false
    private _validation = new MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyOutputReference(this, "validation");
    public get validation() {
        return this._validation;
    }
    public putValidation(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty) {
        this._validation.internalValue = value;
    }
    public resetValidation() {
        this._validation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
        return this._validation.internalValue;
    }
}
export interface MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_config CcMemory#llm_extraction_config}
    */
    readonly llmExtractionConfig?: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty;
}
export class MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._llmExtractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
        }
    }

    // llm_extraction_config - computed: true, optional: true, required: false
    private _llmExtractionConfig = new MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyOutputReference(this, "llm_extraction_config");
    public get llmExtractionConfig() {
        return this._llmExtractionConfig;
    }
    public putLlmExtractionConfig(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty) {
        this._llmExtractionConfig.internalValue = value;
    }
    public resetLlmExtractionConfig() {
        this._llmExtractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionConfigInput() {
        return this._llmExtractionConfig.internalValue;
    }
}
export interface MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_config CcMemory#extraction_config}
    */
    readonly extractionConfig?: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty;
    /**
    * Specifies whether the metadata value is extracted by the LLM or passed through deterministically from the event
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_type CcMemory#extraction_type}
    */
    readonly extractionType?: string;
    /**
    * Key name for metadata fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#key CcMemory#key}
    */
    readonly key?: string;
    /**
    * Supported data types for metadata values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
}
export class MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
        }
        if (this._extractionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionType = this._extractionType;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = undefined;
            this._extractionType = undefined;
            this._key = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = value.extractionConfig;
            this._extractionType = value.extractionType;
            this._key = value.key;
            this._type = value.type;
        }
    }

    // extraction_config - computed: true, optional: true, required: false
    private _extractionConfig = new MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyOutputReference(this, "extraction_config");
    public get extractionConfig() {
        return this._extractionConfig;
    }
    public putExtractionConfig(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty) {
        this._extractionConfig.internalValue = value;
    }
    public resetExtractionConfig() {
        this._extractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionConfigInput() {
        return this._extractionConfig.internalValue;
    }

    // extraction_type - computed: true, optional: true, required: false
    private _extractionType?: string; 
    public get extractionType() {
        return this.getStringAttribute('extraction_type');
    }
    public set extractionType(value: string) {
        this._extractionType = value;
    }
    public resetExtractionType() {
        this._extractionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionTypeInput() {
        return this._extractionType;
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

export class MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList extends cdktn.ComplexList {
    public internalValue? : MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable

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
    public get(index: number): MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference {
        return new MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaProperty {
    /**
    * List of metadata schema entries
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#metadata_schema CcMemory#metadata_schema}
    */
    readonly metadataSchema?: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable;
}
export class MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metadataSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = value.metadataSchema;
        }
    }

    // metadata_schema - computed: true, optional: true, required: false
    private _metadataSchema = new MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList(this, "metadata_schema", false);
    public get metadataSchema() {
        return this._metadataSchema;
    }
    public putMetadataSchema(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable) {
        this._metadataSchema.internalValue = value;
    }
    public resetMetadataSchema() {
        this._metadataSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataSchemaInput() {
        return this._metadataSchema.internalValue;
    }
}
export interface CustomMemoryStrategyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#configuration CcMemory#configuration}
    */
    readonly configuration?: CustomConfigurationInputProperty;
    /**
    * Creation timestamp of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#created_at CcMemory#created_at}
    */
    readonly createdAt?: string;
    /**
    * Description of the Memory resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#description CcMemory#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#memory_record_schema CcMemory#memory_record_schema}
    */
    readonly memoryRecordSchema?: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaProperty;
    /**
    * Name of the Memory resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#name CcMemory#name}
    */
    readonly name?: string;
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespace_templates CcMemory#namespace_templates}
    */
    readonly namespaceTemplates?: string[];
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespaces CcMemory#namespaces}
    */
    readonly namespaces?: string[];
    /**
    * Status of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#status CcMemory#status}
    */
    readonly status?: string;
    /**
    * Unique identifier for the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#strategy_id CcMemory#strategy_id}
    */
    readonly strategyId?: string;
    /**
    * Type of memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
    /**
    * Last update timestamp of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#updated_at CcMemory#updated_at}
    */
    readonly updatedAt?: string;
}
export class CustomMemoryStrategyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomMemoryStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.configuration = this._configuration?.internalValue;
        }
        if (this._createdAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdAt = this._createdAt;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._memoryRecordSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._namespaceTemplates !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceTemplates = this._namespaceTemplates;
        }
        if (this._namespaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaces = this._namespaces;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._strategyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategyId = this._strategyId;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._updatedAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatedAt = this._updatedAt;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomMemoryStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configuration.internalValue = undefined;
            this._createdAt = undefined;
            this._description = undefined;
            this._memoryRecordSchema.internalValue = undefined;
            this._name = undefined;
            this._namespaceTemplates = undefined;
            this._namespaces = undefined;
            this._status = undefined;
            this._strategyId = undefined;
            this._type = undefined;
            this._updatedAt = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configuration.internalValue = value.configuration;
            this._createdAt = value.createdAt;
            this._description = value.description;
            this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
            this._name = value.name;
            this._namespaceTemplates = value.namespaceTemplates;
            this._namespaces = value.namespaces;
            this._status = value.status;
            this._strategyId = value.strategyId;
            this._type = value.type;
            this._updatedAt = value.updatedAt;
        }
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration = new CustomConfigurationInputPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CustomConfigurationInputProperty) {
        this._configuration.internalValue = value;
    }
    public resetConfiguration() {
        this._configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // created_at - computed: true, optional: true, required: false
    private _createdAt?: string; 
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }
    public set createdAt(value: string) {
        this._createdAt = value;
    }
    public resetCreatedAt() {
        this._createdAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdAtInput() {
        return this._createdAt;
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

    // memory_record_schema - computed: true, optional: true, required: false
    private _memoryRecordSchema = new MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaPropertyOutputReference(this, "memory_record_schema");
    public get memoryRecordSchema() {
        return this._memoryRecordSchema;
    }
    public putMemoryRecordSchema(value: MemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaProperty) {
        this._memoryRecordSchema.internalValue = value;
    }
    public resetMemoryRecordSchema() {
        this._memoryRecordSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryRecordSchemaInput() {
        return this._memoryRecordSchema.internalValue;
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

    // namespace_templates - computed: true, optional: true, required: false
    private _namespaceTemplates?: string[]; 
    public get namespaceTemplates() {
        return this.getListAttribute('namespace_templates');
    }
    public set namespaceTemplates(value: string[]) {
        this._namespaceTemplates = value;
    }
    public resetNamespaceTemplates() {
        this._namespaceTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceTemplatesInput() {
        return this._namespaceTemplates;
    }

    // namespaces - computed: true, optional: true, required: false
    private _namespaces?: string[]; 
    public get namespaces() {
        return this.getListAttribute('namespaces');
    }
    public set namespaces(value: string[]) {
        this._namespaces = value;
    }
    public resetNamespaces() {
        this._namespaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespacesInput() {
        return this._namespaces;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // strategy_id - computed: true, optional: true, required: false
    private _strategyId?: string; 
    public get strategyId() {
        return this.getStringAttribute('strategy_id');
    }
    public set strategyId(value: string) {
        this._strategyId = value;
    }
    public resetStrategyId() {
        this._strategyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyIdInput() {
        return this._strategyId;
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

    // updated_at - computed: true, optional: true, required: false
    private _updatedAt?: string; 
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    public set updatedAt(value: string) {
        this._updatedAt = value;
    }
    public resetUpdatedAt() {
        this._updatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updatedAtInput() {
        return this._updatedAt;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_value CcMemory#max_value}
    */
    readonly maxValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#min_value CcMemory#min_value}
    */
    readonly minValue?: number;
}
export class MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxValue = undefined;
            this._minValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
        }
    }

    // max_value - computed: true, optional: true, required: false
    private _maxValue?: number; 
    public get maxValue() {
        return this.getNumberAttribute('max_value');
    }
    public set maxValue(value: number) {
        this._maxValue = value;
    }
    public resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
        return this._maxValue;
    }

    // min_value - computed: true, optional: true, required: false
    private _minValue?: number; 
    public get minValue() {
        return this.getNumberAttribute('min_value');
    }
    public set minValue(value: number) {
        this._minValue = value;
    }
    public resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValueInput() {
        return this._minValue;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_items CcMemory#max_items}
    */
    readonly maxItems?: number;
}
export class MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._maxItems !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxItems = this._maxItems;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._maxItems = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._maxItems = value.maxItems;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // max_items - computed: true, optional: true, required: false
    private _maxItems?: number; 
    public get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    public set maxItems(value: number) {
        this._maxItems = value;
    }
    public resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxItemsInput() {
        return this._maxItems;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
}
export class MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#number_validation CcMemory#number_validation}
    */
    readonly numberValidation?: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_list_validation CcMemory#string_list_validation}
    */
    readonly stringListValidation?: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_validation CcMemory#string_validation}
    */
    readonly stringValidation?: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty;
}
export class MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._numberValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberValidation = this._numberValidation?.internalValue;
        }
        if (this._stringListValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
        }
        if (this._stringValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValidation = this._stringValidation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = undefined;
            this._stringListValidation.internalValue = undefined;
            this._stringValidation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = value.numberValidation;
            this._stringListValidation.internalValue = value.stringListValidation;
            this._stringValidation.internalValue = value.stringValidation;
        }
    }

    // number_validation - computed: true, optional: true, required: false
    private _numberValidation = new MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyOutputReference(this, "number_validation");
    public get numberValidation() {
        return this._numberValidation;
    }
    public putNumberValidation(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty) {
        this._numberValidation.internalValue = value;
    }
    public resetNumberValidation() {
        this._numberValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberValidationInput() {
        return this._numberValidation.internalValue;
    }

    // string_list_validation - computed: true, optional: true, required: false
    private _stringListValidation = new MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyOutputReference(this, "string_list_validation");
    public get stringListValidation() {
        return this._stringListValidation;
    }
    public putStringListValidation(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty) {
        this._stringListValidation.internalValue = value;
    }
    public resetStringListValidation() {
        this._stringListValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringListValidationInput() {
        return this._stringListValidation.internalValue;
    }

    // string_validation - computed: true, optional: true, required: false
    private _stringValidation = new MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyOutputReference(this, "string_validation");
    public get stringValidation() {
        return this._stringValidation;
    }
    public putStringValidation(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty) {
        this._stringValidation.internalValue = value;
    }
    public resetStringValidation() {
        this._stringValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValidationInput() {
        return this._stringValidation.internalValue;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty {
    /**
    * Definition for the metadata schema entry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#definition CcMemory#definition}
    */
    readonly definition?: string;
    /**
    * LLM extraction instruction
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction CcMemory#llm_extraction_instruction}
    */
    readonly llmExtractionInstruction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#validation CcMemory#validation}
    */
    readonly validation?: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty;
}
export class MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        if (this._llmExtractionInstruction !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
        }
        if (this._validation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validation = this._validation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definition = undefined;
            this._llmExtractionInstruction = undefined;
            this._validation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definition = value.definition;
            this._llmExtractionInstruction = value.llmExtractionInstruction;
            this._validation.internalValue = value.validation;
        }
    }

    // definition - computed: true, optional: true, required: false
    private _definition?: string; 
    public get definition() {
        return this.getStringAttribute('definition');
    }
    public set definition(value: string) {
        this._definition = value;
    }
    public resetDefinition() {
        this._definition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition;
    }

    // llm_extraction_instruction - computed: true, optional: true, required: false
    private _llmExtractionInstruction?: string; 
    public get llmExtractionInstruction() {
        return this.getStringAttribute('llm_extraction_instruction');
    }
    public set llmExtractionInstruction(value: string) {
        this._llmExtractionInstruction = value;
    }
    public resetLlmExtractionInstruction() {
        this._llmExtractionInstruction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionInstructionInput() {
        return this._llmExtractionInstruction;
    }

    // validation - computed: true, optional: true, required: false
    private _validation = new MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyOutputReference(this, "validation");
    public get validation() {
        return this._validation;
    }
    public putValidation(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty) {
        this._validation.internalValue = value;
    }
    public resetValidation() {
        this._validation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
        return this._validation.internalValue;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_config CcMemory#llm_extraction_config}
    */
    readonly llmExtractionConfig?: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty;
}
export class MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._llmExtractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
        }
    }

    // llm_extraction_config - computed: true, optional: true, required: false
    private _llmExtractionConfig = new MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyOutputReference(this, "llm_extraction_config");
    public get llmExtractionConfig() {
        return this._llmExtractionConfig;
    }
    public putLlmExtractionConfig(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty) {
        this._llmExtractionConfig.internalValue = value;
    }
    public resetLlmExtractionConfig() {
        this._llmExtractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionConfigInput() {
        return this._llmExtractionConfig.internalValue;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_config CcMemory#extraction_config}
    */
    readonly extractionConfig?: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty;
    /**
    * Specifies whether the metadata value is extracted by the LLM or passed through deterministically from the event
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_type CcMemory#extraction_type}
    */
    readonly extractionType?: string;
    /**
    * Key name for metadata fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#key CcMemory#key}
    */
    readonly key?: string;
    /**
    * Supported data types for metadata values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
}
export class MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
        }
        if (this._extractionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionType = this._extractionType;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = undefined;
            this._extractionType = undefined;
            this._key = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = value.extractionConfig;
            this._extractionType = value.extractionType;
            this._key = value.key;
            this._type = value.type;
        }
    }

    // extraction_config - computed: true, optional: true, required: false
    private _extractionConfig = new MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyOutputReference(this, "extraction_config");
    public get extractionConfig() {
        return this._extractionConfig;
    }
    public putExtractionConfig(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty) {
        this._extractionConfig.internalValue = value;
    }
    public resetExtractionConfig() {
        this._extractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionConfigInput() {
        return this._extractionConfig.internalValue;
    }

    // extraction_type - computed: true, optional: true, required: false
    private _extractionType?: string; 
    public get extractionType() {
        return this.getStringAttribute('extraction_type');
    }
    public set extractionType(value: string) {
        this._extractionType = value;
    }
    public resetExtractionType() {
        this._extractionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionTypeInput() {
        return this._extractionType;
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

export class MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList extends cdktn.ComplexList {
    public internalValue? : MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable

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
    public get(index: number): MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference {
        return new MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaProperty {
    /**
    * List of metadata schema entries
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#metadata_schema CcMemory#metadata_schema}
    */
    readonly metadataSchema?: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable;
}
export class MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metadataSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = value.metadataSchema;
        }
    }

    // metadata_schema - computed: true, optional: true, required: false
    private _metadataSchema = new MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList(this, "metadata_schema", false);
    public get metadataSchema() {
        return this._metadataSchema;
    }
    public putMetadataSchema(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable) {
        this._metadataSchema.internalValue = value;
    }
    public resetMetadataSchema() {
        this._metadataSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataSchemaInput() {
        return this._metadataSchema.internalValue;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_value CcMemory#max_value}
    */
    readonly maxValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#min_value CcMemory#min_value}
    */
    readonly minValue?: number;
}
export class MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxValue = undefined;
            this._minValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
        }
    }

    // max_value - computed: true, optional: true, required: false
    private _maxValue?: number; 
    public get maxValue() {
        return this.getNumberAttribute('max_value');
    }
    public set maxValue(value: number) {
        this._maxValue = value;
    }
    public resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
        return this._maxValue;
    }

    // min_value - computed: true, optional: true, required: false
    private _minValue?: number; 
    public get minValue() {
        return this.getNumberAttribute('min_value');
    }
    public set minValue(value: number) {
        this._minValue = value;
    }
    public resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValueInput() {
        return this._minValue;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_items CcMemory#max_items}
    */
    readonly maxItems?: number;
}
export class MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._maxItems !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxItems = this._maxItems;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._maxItems = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._maxItems = value.maxItems;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // max_items - computed: true, optional: true, required: false
    private _maxItems?: number; 
    public get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    public set maxItems(value: number) {
        this._maxItems = value;
    }
    public resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxItemsInput() {
        return this._maxItems;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
}
export class MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#number_validation CcMemory#number_validation}
    */
    readonly numberValidation?: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_list_validation CcMemory#string_list_validation}
    */
    readonly stringListValidation?: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_validation CcMemory#string_validation}
    */
    readonly stringValidation?: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty;
}
export class MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._numberValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberValidation = this._numberValidation?.internalValue;
        }
        if (this._stringListValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
        }
        if (this._stringValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValidation = this._stringValidation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = undefined;
            this._stringListValidation.internalValue = undefined;
            this._stringValidation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = value.numberValidation;
            this._stringListValidation.internalValue = value.stringListValidation;
            this._stringValidation.internalValue = value.stringValidation;
        }
    }

    // number_validation - computed: true, optional: true, required: false
    private _numberValidation = new MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyOutputReference(this, "number_validation");
    public get numberValidation() {
        return this._numberValidation;
    }
    public putNumberValidation(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty) {
        this._numberValidation.internalValue = value;
    }
    public resetNumberValidation() {
        this._numberValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberValidationInput() {
        return this._numberValidation.internalValue;
    }

    // string_list_validation - computed: true, optional: true, required: false
    private _stringListValidation = new MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyOutputReference(this, "string_list_validation");
    public get stringListValidation() {
        return this._stringListValidation;
    }
    public putStringListValidation(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty) {
        this._stringListValidation.internalValue = value;
    }
    public resetStringListValidation() {
        this._stringListValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringListValidationInput() {
        return this._stringListValidation.internalValue;
    }

    // string_validation - computed: true, optional: true, required: false
    private _stringValidation = new MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyOutputReference(this, "string_validation");
    public get stringValidation() {
        return this._stringValidation;
    }
    public putStringValidation(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty) {
        this._stringValidation.internalValue = value;
    }
    public resetStringValidation() {
        this._stringValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValidationInput() {
        return this._stringValidation.internalValue;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty {
    /**
    * Definition for the metadata schema entry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#definition CcMemory#definition}
    */
    readonly definition?: string;
    /**
    * LLM extraction instruction
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction CcMemory#llm_extraction_instruction}
    */
    readonly llmExtractionInstruction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#validation CcMemory#validation}
    */
    readonly validation?: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty;
}
export class MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        if (this._llmExtractionInstruction !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
        }
        if (this._validation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validation = this._validation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definition = undefined;
            this._llmExtractionInstruction = undefined;
            this._validation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definition = value.definition;
            this._llmExtractionInstruction = value.llmExtractionInstruction;
            this._validation.internalValue = value.validation;
        }
    }

    // definition - computed: true, optional: true, required: false
    private _definition?: string; 
    public get definition() {
        return this.getStringAttribute('definition');
    }
    public set definition(value: string) {
        this._definition = value;
    }
    public resetDefinition() {
        this._definition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition;
    }

    // llm_extraction_instruction - computed: true, optional: true, required: false
    private _llmExtractionInstruction?: string; 
    public get llmExtractionInstruction() {
        return this.getStringAttribute('llm_extraction_instruction');
    }
    public set llmExtractionInstruction(value: string) {
        this._llmExtractionInstruction = value;
    }
    public resetLlmExtractionInstruction() {
        this._llmExtractionInstruction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionInstructionInput() {
        return this._llmExtractionInstruction;
    }

    // validation - computed: true, optional: true, required: false
    private _validation = new MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyOutputReference(this, "validation");
    public get validation() {
        return this._validation;
    }
    public putValidation(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty) {
        this._validation.internalValue = value;
    }
    public resetValidation() {
        this._validation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
        return this._validation.internalValue;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_config CcMemory#llm_extraction_config}
    */
    readonly llmExtractionConfig?: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty;
}
export class MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._llmExtractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
        }
    }

    // llm_extraction_config - computed: true, optional: true, required: false
    private _llmExtractionConfig = new MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyOutputReference(this, "llm_extraction_config");
    public get llmExtractionConfig() {
        return this._llmExtractionConfig;
    }
    public putLlmExtractionConfig(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty) {
        this._llmExtractionConfig.internalValue = value;
    }
    public resetLlmExtractionConfig() {
        this._llmExtractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionConfigInput() {
        return this._llmExtractionConfig.internalValue;
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_config CcMemory#extraction_config}
    */
    readonly extractionConfig?: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigProperty;
    /**
    * Specifies whether the metadata value is extracted by the LLM or passed through deterministically from the event
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_type CcMemory#extraction_type}
    */
    readonly extractionType?: string;
    /**
    * Key name for metadata fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#key CcMemory#key}
    */
    readonly key?: string;
    /**
    * Supported data types for metadata values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
}
export class MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
        }
        if (this._extractionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionType = this._extractionType;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = undefined;
            this._extractionType = undefined;
            this._key = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = value.extractionConfig;
            this._extractionType = value.extractionType;
            this._key = value.key;
            this._type = value.type;
        }
    }

    // extraction_config - computed: true, optional: true, required: false
    private _extractionConfig = new MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyOutputReference(this, "extraction_config");
    public get extractionConfig() {
        return this._extractionConfig;
    }
    public putExtractionConfig(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigProperty) {
        this._extractionConfig.internalValue = value;
    }
    public resetExtractionConfig() {
        this._extractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionConfigInput() {
        return this._extractionConfig.internalValue;
    }

    // extraction_type - computed: true, optional: true, required: false
    private _extractionType?: string; 
    public get extractionType() {
        return this.getStringAttribute('extraction_type');
    }
    public set extractionType(value: string) {
        this._extractionType = value;
    }
    public resetExtractionType() {
        this._extractionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionTypeInput() {
        return this._extractionType;
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

export class MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaPropertyList extends cdktn.ComplexList {
    public internalValue? : MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable

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
    public get(index: number): MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaPropertyOutputReference {
        return new MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaProperty {
    /**
    * List of metadata schema entries
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#metadata_schema CcMemory#metadata_schema}
    */
    readonly metadataSchema?: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable;
}
export class MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metadataSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = value.metadataSchema;
        }
    }

    // metadata_schema - computed: true, optional: true, required: false
    private _metadataSchema = new MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaPropertyList(this, "metadata_schema", false);
    public get metadataSchema() {
        return this._metadataSchema;
    }
    public putMetadataSchema(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable) {
        this._metadataSchema.internalValue = value;
    }
    public resetMetadataSchema() {
        this._metadataSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataSchemaInput() {
        return this._metadataSchema.internalValue;
    }
}
export interface EpisodicReflectionConfigurationInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#memory_record_schema CcMemory#memory_record_schema}
    */
    readonly memoryRecordSchema?: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaProperty;
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespace_templates CcMemory#namespace_templates}
    */
    readonly namespaceTemplates?: string[];
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespaces CcMemory#namespaces}
    */
    readonly namespaces?: string[];
}
export class EpisodicReflectionConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EpisodicReflectionConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._memoryRecordSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
        }
        if (this._namespaceTemplates !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceTemplates = this._namespaceTemplates;
        }
        if (this._namespaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaces = this._namespaces;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EpisodicReflectionConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._memoryRecordSchema.internalValue = undefined;
            this._namespaceTemplates = undefined;
            this._namespaces = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
            this._namespaceTemplates = value.namespaceTemplates;
            this._namespaces = value.namespaces;
        }
    }

    // memory_record_schema - computed: true, optional: true, required: false
    private _memoryRecordSchema = new MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaPropertyOutputReference(this, "memory_record_schema");
    public get memoryRecordSchema() {
        return this._memoryRecordSchema;
    }
    public putMemoryRecordSchema(value: MemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaProperty) {
        this._memoryRecordSchema.internalValue = value;
    }
    public resetMemoryRecordSchema() {
        this._memoryRecordSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryRecordSchemaInput() {
        return this._memoryRecordSchema.internalValue;
    }

    // namespace_templates - computed: true, optional: true, required: false
    private _namespaceTemplates?: string[]; 
    public get namespaceTemplates() {
        return this.getListAttribute('namespace_templates');
    }
    public set namespaceTemplates(value: string[]) {
        this._namespaceTemplates = value;
    }
    public resetNamespaceTemplates() {
        this._namespaceTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceTemplatesInput() {
        return this._namespaceTemplates;
    }

    // namespaces - computed: true, optional: true, required: false
    private _namespaces?: string[]; 
    public get namespaces() {
        return this.getListAttribute('namespaces');
    }
    public set namespaces(value: string[]) {
        this._namespaces = value;
    }
    public resetNamespaces() {
        this._namespaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespacesInput() {
        return this._namespaces;
    }
}
export interface EpisodicMemoryStrategyProperty {
    /**
    * Creation timestamp of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#created_at CcMemory#created_at}
    */
    readonly createdAt?: string;
    /**
    * Description of the Memory resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#description CcMemory#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#memory_record_schema CcMemory#memory_record_schema}
    */
    readonly memoryRecordSchema?: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaProperty;
    /**
    * Name of the Memory resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#name CcMemory#name}
    */
    readonly name?: string;
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespace_templates CcMemory#namespace_templates}
    */
    readonly namespaceTemplates?: string[];
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespaces CcMemory#namespaces}
    */
    readonly namespaces?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#reflection_configuration CcMemory#reflection_configuration}
    */
    readonly reflectionConfiguration?: EpisodicReflectionConfigurationInputProperty;
    /**
    * Status of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#status CcMemory#status}
    */
    readonly status?: string;
    /**
    * Unique identifier for the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#strategy_id CcMemory#strategy_id}
    */
    readonly strategyId?: string;
    /**
    * Type of memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
    /**
    * Last update timestamp of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#updated_at CcMemory#updated_at}
    */
    readonly updatedAt?: string;
}
export class EpisodicMemoryStrategyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EpisodicMemoryStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._createdAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdAt = this._createdAt;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._memoryRecordSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._namespaceTemplates !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceTemplates = this._namespaceTemplates;
        }
        if (this._namespaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaces = this._namespaces;
        }
        if (this._reflectionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.reflectionConfiguration = this._reflectionConfiguration?.internalValue;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._strategyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategyId = this._strategyId;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._updatedAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatedAt = this._updatedAt;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EpisodicMemoryStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._createdAt = undefined;
            this._description = undefined;
            this._memoryRecordSchema.internalValue = undefined;
            this._name = undefined;
            this._namespaceTemplates = undefined;
            this._namespaces = undefined;
            this._reflectionConfiguration.internalValue = undefined;
            this._status = undefined;
            this._strategyId = undefined;
            this._type = undefined;
            this._updatedAt = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._createdAt = value.createdAt;
            this._description = value.description;
            this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
            this._name = value.name;
            this._namespaceTemplates = value.namespaceTemplates;
            this._namespaces = value.namespaces;
            this._reflectionConfiguration.internalValue = value.reflectionConfiguration;
            this._status = value.status;
            this._strategyId = value.strategyId;
            this._type = value.type;
            this._updatedAt = value.updatedAt;
        }
    }

    // created_at - computed: true, optional: true, required: false
    private _createdAt?: string; 
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }
    public set createdAt(value: string) {
        this._createdAt = value;
    }
    public resetCreatedAt() {
        this._createdAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdAtInput() {
        return this._createdAt;
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

    // memory_record_schema - computed: true, optional: true, required: false
    private _memoryRecordSchema = new MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaPropertyOutputReference(this, "memory_record_schema");
    public get memoryRecordSchema() {
        return this._memoryRecordSchema;
    }
    public putMemoryRecordSchema(value: MemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaProperty) {
        this._memoryRecordSchema.internalValue = value;
    }
    public resetMemoryRecordSchema() {
        this._memoryRecordSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryRecordSchemaInput() {
        return this._memoryRecordSchema.internalValue;
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

    // namespace_templates - computed: true, optional: true, required: false
    private _namespaceTemplates?: string[]; 
    public get namespaceTemplates() {
        return this.getListAttribute('namespace_templates');
    }
    public set namespaceTemplates(value: string[]) {
        this._namespaceTemplates = value;
    }
    public resetNamespaceTemplates() {
        this._namespaceTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceTemplatesInput() {
        return this._namespaceTemplates;
    }

    // namespaces - computed: true, optional: true, required: false
    private _namespaces?: string[]; 
    public get namespaces() {
        return this.getListAttribute('namespaces');
    }
    public set namespaces(value: string[]) {
        this._namespaces = value;
    }
    public resetNamespaces() {
        this._namespaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespacesInput() {
        return this._namespaces;
    }

    // reflection_configuration - computed: true, optional: true, required: false
    private _reflectionConfiguration = new EpisodicReflectionConfigurationInputPropertyOutputReference(this, "reflection_configuration");
    public get reflectionConfiguration() {
        return this._reflectionConfiguration;
    }
    public putReflectionConfiguration(value: EpisodicReflectionConfigurationInputProperty) {
        this._reflectionConfiguration.internalValue = value;
    }
    public resetReflectionConfiguration() {
        this._reflectionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reflectionConfigurationInput() {
        return this._reflectionConfiguration.internalValue;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // strategy_id - computed: true, optional: true, required: false
    private _strategyId?: string; 
    public get strategyId() {
        return this.getStringAttribute('strategy_id');
    }
    public set strategyId(value: string) {
        this._strategyId = value;
    }
    public resetStrategyId() {
        this._strategyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyIdInput() {
        return this._strategyId;
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

    // updated_at - computed: true, optional: true, required: false
    private _updatedAt?: string; 
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    public set updatedAt(value: string) {
        this._updatedAt = value;
    }
    public resetUpdatedAt() {
        this._updatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updatedAtInput() {
        return this._updatedAt;
    }
}
export interface MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_value CcMemory#max_value}
    */
    readonly maxValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#min_value CcMemory#min_value}
    */
    readonly minValue?: number;
}
export class MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxValue = undefined;
            this._minValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
        }
    }

    // max_value - computed: true, optional: true, required: false
    private _maxValue?: number; 
    public get maxValue() {
        return this.getNumberAttribute('max_value');
    }
    public set maxValue(value: number) {
        this._maxValue = value;
    }
    public resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
        return this._maxValue;
    }

    // min_value - computed: true, optional: true, required: false
    private _minValue?: number; 
    public get minValue() {
        return this.getNumberAttribute('min_value');
    }
    public set minValue(value: number) {
        this._minValue = value;
    }
    public resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValueInput() {
        return this._minValue;
    }
}
export interface MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_items CcMemory#max_items}
    */
    readonly maxItems?: number;
}
export class MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._maxItems !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxItems = this._maxItems;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._maxItems = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._maxItems = value.maxItems;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // max_items - computed: true, optional: true, required: false
    private _maxItems?: number; 
    public get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    public set maxItems(value: number) {
        this._maxItems = value;
    }
    public resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxItemsInput() {
        return this._maxItems;
    }
}
export interface MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
}
export class MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }
}
export interface MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#number_validation CcMemory#number_validation}
    */
    readonly numberValidation?: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_list_validation CcMemory#string_list_validation}
    */
    readonly stringListValidation?: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_validation CcMemory#string_validation}
    */
    readonly stringValidation?: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty;
}
export class MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._numberValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberValidation = this._numberValidation?.internalValue;
        }
        if (this._stringListValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
        }
        if (this._stringValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValidation = this._stringValidation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = undefined;
            this._stringListValidation.internalValue = undefined;
            this._stringValidation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = value.numberValidation;
            this._stringListValidation.internalValue = value.stringListValidation;
            this._stringValidation.internalValue = value.stringValidation;
        }
    }

    // number_validation - computed: true, optional: true, required: false
    private _numberValidation = new MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyOutputReference(this, "number_validation");
    public get numberValidation() {
        return this._numberValidation;
    }
    public putNumberValidation(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty) {
        this._numberValidation.internalValue = value;
    }
    public resetNumberValidation() {
        this._numberValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberValidationInput() {
        return this._numberValidation.internalValue;
    }

    // string_list_validation - computed: true, optional: true, required: false
    private _stringListValidation = new MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyOutputReference(this, "string_list_validation");
    public get stringListValidation() {
        return this._stringListValidation;
    }
    public putStringListValidation(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty) {
        this._stringListValidation.internalValue = value;
    }
    public resetStringListValidation() {
        this._stringListValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringListValidationInput() {
        return this._stringListValidation.internalValue;
    }

    // string_validation - computed: true, optional: true, required: false
    private _stringValidation = new MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyOutputReference(this, "string_validation");
    public get stringValidation() {
        return this._stringValidation;
    }
    public putStringValidation(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty) {
        this._stringValidation.internalValue = value;
    }
    public resetStringValidation() {
        this._stringValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValidationInput() {
        return this._stringValidation.internalValue;
    }
}
export interface MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty {
    /**
    * Definition for the metadata schema entry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#definition CcMemory#definition}
    */
    readonly definition?: string;
    /**
    * LLM extraction instruction
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction CcMemory#llm_extraction_instruction}
    */
    readonly llmExtractionInstruction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#validation CcMemory#validation}
    */
    readonly validation?: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty;
}
export class MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        if (this._llmExtractionInstruction !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
        }
        if (this._validation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validation = this._validation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definition = undefined;
            this._llmExtractionInstruction = undefined;
            this._validation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definition = value.definition;
            this._llmExtractionInstruction = value.llmExtractionInstruction;
            this._validation.internalValue = value.validation;
        }
    }

    // definition - computed: true, optional: true, required: false
    private _definition?: string; 
    public get definition() {
        return this.getStringAttribute('definition');
    }
    public set definition(value: string) {
        this._definition = value;
    }
    public resetDefinition() {
        this._definition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition;
    }

    // llm_extraction_instruction - computed: true, optional: true, required: false
    private _llmExtractionInstruction?: string; 
    public get llmExtractionInstruction() {
        return this.getStringAttribute('llm_extraction_instruction');
    }
    public set llmExtractionInstruction(value: string) {
        this._llmExtractionInstruction = value;
    }
    public resetLlmExtractionInstruction() {
        this._llmExtractionInstruction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionInstructionInput() {
        return this._llmExtractionInstruction;
    }

    // validation - computed: true, optional: true, required: false
    private _validation = new MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyOutputReference(this, "validation");
    public get validation() {
        return this._validation;
    }
    public putValidation(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty) {
        this._validation.internalValue = value;
    }
    public resetValidation() {
        this._validation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
        return this._validation.internalValue;
    }
}
export interface MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_config CcMemory#llm_extraction_config}
    */
    readonly llmExtractionConfig?: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty;
}
export class MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._llmExtractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
        }
    }

    // llm_extraction_config - computed: true, optional: true, required: false
    private _llmExtractionConfig = new MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyOutputReference(this, "llm_extraction_config");
    public get llmExtractionConfig() {
        return this._llmExtractionConfig;
    }
    public putLlmExtractionConfig(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty) {
        this._llmExtractionConfig.internalValue = value;
    }
    public resetLlmExtractionConfig() {
        this._llmExtractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionConfigInput() {
        return this._llmExtractionConfig.internalValue;
    }
}
export interface MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_config CcMemory#extraction_config}
    */
    readonly extractionConfig?: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty;
    /**
    * Specifies whether the metadata value is extracted by the LLM or passed through deterministically from the event
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_type CcMemory#extraction_type}
    */
    readonly extractionType?: string;
    /**
    * Key name for metadata fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#key CcMemory#key}
    */
    readonly key?: string;
    /**
    * Supported data types for metadata values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
}
export class MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
        }
        if (this._extractionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionType = this._extractionType;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = undefined;
            this._extractionType = undefined;
            this._key = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = value.extractionConfig;
            this._extractionType = value.extractionType;
            this._key = value.key;
            this._type = value.type;
        }
    }

    // extraction_config - computed: true, optional: true, required: false
    private _extractionConfig = new MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyOutputReference(this, "extraction_config");
    public get extractionConfig() {
        return this._extractionConfig;
    }
    public putExtractionConfig(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty) {
        this._extractionConfig.internalValue = value;
    }
    public resetExtractionConfig() {
        this._extractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionConfigInput() {
        return this._extractionConfig.internalValue;
    }

    // extraction_type - computed: true, optional: true, required: false
    private _extractionType?: string; 
    public get extractionType() {
        return this.getStringAttribute('extraction_type');
    }
    public set extractionType(value: string) {
        this._extractionType = value;
    }
    public resetExtractionType() {
        this._extractionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionTypeInput() {
        return this._extractionType;
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

export class MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList extends cdktn.ComplexList {
    public internalValue? : MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable

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
    public get(index: number): MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference {
        return new MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaProperty {
    /**
    * List of metadata schema entries
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#metadata_schema CcMemory#metadata_schema}
    */
    readonly metadataSchema?: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable;
}
export class MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metadataSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = value.metadataSchema;
        }
    }

    // metadata_schema - computed: true, optional: true, required: false
    private _metadataSchema = new MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList(this, "metadata_schema", false);
    public get metadataSchema() {
        return this._metadataSchema;
    }
    public putMetadataSchema(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable) {
        this._metadataSchema.internalValue = value;
    }
    public resetMetadataSchema() {
        this._metadataSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataSchemaInput() {
        return this._metadataSchema.internalValue;
    }
}
export interface SemanticMemoryStrategyProperty {
    /**
    * Creation timestamp of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#created_at CcMemory#created_at}
    */
    readonly createdAt?: string;
    /**
    * Description of the Memory resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#description CcMemory#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#memory_record_schema CcMemory#memory_record_schema}
    */
    readonly memoryRecordSchema?: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaProperty;
    /**
    * Name of the Memory resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#name CcMemory#name}
    */
    readonly name?: string;
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespace_templates CcMemory#namespace_templates}
    */
    readonly namespaceTemplates?: string[];
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespaces CcMemory#namespaces}
    */
    readonly namespaces?: string[];
    /**
    * Status of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#status CcMemory#status}
    */
    readonly status?: string;
    /**
    * Unique identifier for the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#strategy_id CcMemory#strategy_id}
    */
    readonly strategyId?: string;
    /**
    * Type of memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
    /**
    * Last update timestamp of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#updated_at CcMemory#updated_at}
    */
    readonly updatedAt?: string;
}
export class SemanticMemoryStrategyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SemanticMemoryStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._createdAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdAt = this._createdAt;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._memoryRecordSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._namespaceTemplates !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceTemplates = this._namespaceTemplates;
        }
        if (this._namespaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaces = this._namespaces;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._strategyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategyId = this._strategyId;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._updatedAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatedAt = this._updatedAt;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SemanticMemoryStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._createdAt = undefined;
            this._description = undefined;
            this._memoryRecordSchema.internalValue = undefined;
            this._name = undefined;
            this._namespaceTemplates = undefined;
            this._namespaces = undefined;
            this._status = undefined;
            this._strategyId = undefined;
            this._type = undefined;
            this._updatedAt = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._createdAt = value.createdAt;
            this._description = value.description;
            this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
            this._name = value.name;
            this._namespaceTemplates = value.namespaceTemplates;
            this._namespaces = value.namespaces;
            this._status = value.status;
            this._strategyId = value.strategyId;
            this._type = value.type;
            this._updatedAt = value.updatedAt;
        }
    }

    // created_at - computed: true, optional: true, required: false
    private _createdAt?: string; 
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }
    public set createdAt(value: string) {
        this._createdAt = value;
    }
    public resetCreatedAt() {
        this._createdAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdAtInput() {
        return this._createdAt;
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

    // memory_record_schema - computed: true, optional: true, required: false
    private _memoryRecordSchema = new MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaPropertyOutputReference(this, "memory_record_schema");
    public get memoryRecordSchema() {
        return this._memoryRecordSchema;
    }
    public putMemoryRecordSchema(value: MemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaProperty) {
        this._memoryRecordSchema.internalValue = value;
    }
    public resetMemoryRecordSchema() {
        this._memoryRecordSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryRecordSchemaInput() {
        return this._memoryRecordSchema.internalValue;
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

    // namespace_templates - computed: true, optional: true, required: false
    private _namespaceTemplates?: string[]; 
    public get namespaceTemplates() {
        return this.getListAttribute('namespace_templates');
    }
    public set namespaceTemplates(value: string[]) {
        this._namespaceTemplates = value;
    }
    public resetNamespaceTemplates() {
        this._namespaceTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceTemplatesInput() {
        return this._namespaceTemplates;
    }

    // namespaces - computed: true, optional: true, required: false
    private _namespaces?: string[]; 
    public get namespaces() {
        return this.getListAttribute('namespaces');
    }
    public set namespaces(value: string[]) {
        this._namespaces = value;
    }
    public resetNamespaces() {
        this._namespaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespacesInput() {
        return this._namespaces;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // strategy_id - computed: true, optional: true, required: false
    private _strategyId?: string; 
    public get strategyId() {
        return this.getStringAttribute('strategy_id');
    }
    public set strategyId(value: string) {
        this._strategyId = value;
    }
    public resetStrategyId() {
        this._strategyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyIdInput() {
        return this._strategyId;
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

    // updated_at - computed: true, optional: true, required: false
    private _updatedAt?: string; 
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    public set updatedAt(value: string) {
        this._updatedAt = value;
    }
    public resetUpdatedAt() {
        this._updatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updatedAtInput() {
        return this._updatedAt;
    }
}
export interface MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_value CcMemory#max_value}
    */
    readonly maxValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#min_value CcMemory#min_value}
    */
    readonly minValue?: number;
}
export class MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxValue = undefined;
            this._minValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
        }
    }

    // max_value - computed: true, optional: true, required: false
    private _maxValue?: number; 
    public get maxValue() {
        return this.getNumberAttribute('max_value');
    }
    public set maxValue(value: number) {
        this._maxValue = value;
    }
    public resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
        return this._maxValue;
    }

    // min_value - computed: true, optional: true, required: false
    private _minValue?: number; 
    public get minValue() {
        return this.getNumberAttribute('min_value');
    }
    public set minValue(value: number) {
        this._minValue = value;
    }
    public resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValueInput() {
        return this._minValue;
    }
}
export interface MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_items CcMemory#max_items}
    */
    readonly maxItems?: number;
}
export class MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._maxItems !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxItems = this._maxItems;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._maxItems = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._maxItems = value.maxItems;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // max_items - computed: true, optional: true, required: false
    private _maxItems?: number; 
    public get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    public set maxItems(value: number) {
        this._maxItems = value;
    }
    public resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxItemsInput() {
        return this._maxItems;
    }
}
export interface MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
}
export class MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }
}
export interface MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#number_validation CcMemory#number_validation}
    */
    readonly numberValidation?: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_list_validation CcMemory#string_list_validation}
    */
    readonly stringListValidation?: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_validation CcMemory#string_validation}
    */
    readonly stringValidation?: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty;
}
export class MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._numberValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberValidation = this._numberValidation?.internalValue;
        }
        if (this._stringListValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
        }
        if (this._stringValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValidation = this._stringValidation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = undefined;
            this._stringListValidation.internalValue = undefined;
            this._stringValidation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = value.numberValidation;
            this._stringListValidation.internalValue = value.stringListValidation;
            this._stringValidation.internalValue = value.stringValidation;
        }
    }

    // number_validation - computed: true, optional: true, required: false
    private _numberValidation = new MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyOutputReference(this, "number_validation");
    public get numberValidation() {
        return this._numberValidation;
    }
    public putNumberValidation(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty) {
        this._numberValidation.internalValue = value;
    }
    public resetNumberValidation() {
        this._numberValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberValidationInput() {
        return this._numberValidation.internalValue;
    }

    // string_list_validation - computed: true, optional: true, required: false
    private _stringListValidation = new MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyOutputReference(this, "string_list_validation");
    public get stringListValidation() {
        return this._stringListValidation;
    }
    public putStringListValidation(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty) {
        this._stringListValidation.internalValue = value;
    }
    public resetStringListValidation() {
        this._stringListValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringListValidationInput() {
        return this._stringListValidation.internalValue;
    }

    // string_validation - computed: true, optional: true, required: false
    private _stringValidation = new MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyOutputReference(this, "string_validation");
    public get stringValidation() {
        return this._stringValidation;
    }
    public putStringValidation(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty) {
        this._stringValidation.internalValue = value;
    }
    public resetStringValidation() {
        this._stringValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValidationInput() {
        return this._stringValidation.internalValue;
    }
}
export interface MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty {
    /**
    * Definition for the metadata schema entry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#definition CcMemory#definition}
    */
    readonly definition?: string;
    /**
    * LLM extraction instruction
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction CcMemory#llm_extraction_instruction}
    */
    readonly llmExtractionInstruction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#validation CcMemory#validation}
    */
    readonly validation?: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty;
}
export class MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        if (this._llmExtractionInstruction !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
        }
        if (this._validation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validation = this._validation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definition = undefined;
            this._llmExtractionInstruction = undefined;
            this._validation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definition = value.definition;
            this._llmExtractionInstruction = value.llmExtractionInstruction;
            this._validation.internalValue = value.validation;
        }
    }

    // definition - computed: true, optional: true, required: false
    private _definition?: string; 
    public get definition() {
        return this.getStringAttribute('definition');
    }
    public set definition(value: string) {
        this._definition = value;
    }
    public resetDefinition() {
        this._definition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition;
    }

    // llm_extraction_instruction - computed: true, optional: true, required: false
    private _llmExtractionInstruction?: string; 
    public get llmExtractionInstruction() {
        return this.getStringAttribute('llm_extraction_instruction');
    }
    public set llmExtractionInstruction(value: string) {
        this._llmExtractionInstruction = value;
    }
    public resetLlmExtractionInstruction() {
        this._llmExtractionInstruction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionInstructionInput() {
        return this._llmExtractionInstruction;
    }

    // validation - computed: true, optional: true, required: false
    private _validation = new MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyOutputReference(this, "validation");
    public get validation() {
        return this._validation;
    }
    public putValidation(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty) {
        this._validation.internalValue = value;
    }
    public resetValidation() {
        this._validation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
        return this._validation.internalValue;
    }
}
export interface MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_config CcMemory#llm_extraction_config}
    */
    readonly llmExtractionConfig?: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty;
}
export class MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._llmExtractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
        }
    }

    // llm_extraction_config - computed: true, optional: true, required: false
    private _llmExtractionConfig = new MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyOutputReference(this, "llm_extraction_config");
    public get llmExtractionConfig() {
        return this._llmExtractionConfig;
    }
    public putLlmExtractionConfig(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty) {
        this._llmExtractionConfig.internalValue = value;
    }
    public resetLlmExtractionConfig() {
        this._llmExtractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionConfigInput() {
        return this._llmExtractionConfig.internalValue;
    }
}
export interface MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_config CcMemory#extraction_config}
    */
    readonly extractionConfig?: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty;
    /**
    * Specifies whether the metadata value is extracted by the LLM or passed through deterministically from the event
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_type CcMemory#extraction_type}
    */
    readonly extractionType?: string;
    /**
    * Key name for metadata fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#key CcMemory#key}
    */
    readonly key?: string;
    /**
    * Supported data types for metadata values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
}
export class MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
        }
        if (this._extractionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionType = this._extractionType;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = undefined;
            this._extractionType = undefined;
            this._key = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = value.extractionConfig;
            this._extractionType = value.extractionType;
            this._key = value.key;
            this._type = value.type;
        }
    }

    // extraction_config - computed: true, optional: true, required: false
    private _extractionConfig = new MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyOutputReference(this, "extraction_config");
    public get extractionConfig() {
        return this._extractionConfig;
    }
    public putExtractionConfig(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty) {
        this._extractionConfig.internalValue = value;
    }
    public resetExtractionConfig() {
        this._extractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionConfigInput() {
        return this._extractionConfig.internalValue;
    }

    // extraction_type - computed: true, optional: true, required: false
    private _extractionType?: string; 
    public get extractionType() {
        return this.getStringAttribute('extraction_type');
    }
    public set extractionType(value: string) {
        this._extractionType = value;
    }
    public resetExtractionType() {
        this._extractionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionTypeInput() {
        return this._extractionType;
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

export class MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList extends cdktn.ComplexList {
    public internalValue? : MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable

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
    public get(index: number): MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference {
        return new MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaProperty {
    /**
    * List of metadata schema entries
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#metadata_schema CcMemory#metadata_schema}
    */
    readonly metadataSchema?: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable;
}
export class MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metadataSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = value.metadataSchema;
        }
    }

    // metadata_schema - computed: true, optional: true, required: false
    private _metadataSchema = new MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList(this, "metadata_schema", false);
    public get metadataSchema() {
        return this._metadataSchema;
    }
    public putMetadataSchema(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable) {
        this._metadataSchema.internalValue = value;
    }
    public resetMetadataSchema() {
        this._metadataSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataSchemaInput() {
        return this._metadataSchema.internalValue;
    }
}
export interface SummaryMemoryStrategyProperty {
    /**
    * Creation timestamp of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#created_at CcMemory#created_at}
    */
    readonly createdAt?: string;
    /**
    * Description of the Memory resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#description CcMemory#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#memory_record_schema CcMemory#memory_record_schema}
    */
    readonly memoryRecordSchema?: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaProperty;
    /**
    * Name of the Memory resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#name CcMemory#name}
    */
    readonly name?: string;
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespace_templates CcMemory#namespace_templates}
    */
    readonly namespaceTemplates?: string[];
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespaces CcMemory#namespaces}
    */
    readonly namespaces?: string[];
    /**
    * Status of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#status CcMemory#status}
    */
    readonly status?: string;
    /**
    * Unique identifier for the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#strategy_id CcMemory#strategy_id}
    */
    readonly strategyId?: string;
    /**
    * Type of memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
    /**
    * Last update timestamp of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#updated_at CcMemory#updated_at}
    */
    readonly updatedAt?: string;
}
export class SummaryMemoryStrategyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SummaryMemoryStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._createdAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdAt = this._createdAt;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._memoryRecordSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._namespaceTemplates !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceTemplates = this._namespaceTemplates;
        }
        if (this._namespaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaces = this._namespaces;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._strategyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategyId = this._strategyId;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._updatedAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatedAt = this._updatedAt;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SummaryMemoryStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._createdAt = undefined;
            this._description = undefined;
            this._memoryRecordSchema.internalValue = undefined;
            this._name = undefined;
            this._namespaceTemplates = undefined;
            this._namespaces = undefined;
            this._status = undefined;
            this._strategyId = undefined;
            this._type = undefined;
            this._updatedAt = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._createdAt = value.createdAt;
            this._description = value.description;
            this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
            this._name = value.name;
            this._namespaceTemplates = value.namespaceTemplates;
            this._namespaces = value.namespaces;
            this._status = value.status;
            this._strategyId = value.strategyId;
            this._type = value.type;
            this._updatedAt = value.updatedAt;
        }
    }

    // created_at - computed: true, optional: true, required: false
    private _createdAt?: string; 
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }
    public set createdAt(value: string) {
        this._createdAt = value;
    }
    public resetCreatedAt() {
        this._createdAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdAtInput() {
        return this._createdAt;
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

    // memory_record_schema - computed: true, optional: true, required: false
    private _memoryRecordSchema = new MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaPropertyOutputReference(this, "memory_record_schema");
    public get memoryRecordSchema() {
        return this._memoryRecordSchema;
    }
    public putMemoryRecordSchema(value: MemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaProperty) {
        this._memoryRecordSchema.internalValue = value;
    }
    public resetMemoryRecordSchema() {
        this._memoryRecordSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryRecordSchemaInput() {
        return this._memoryRecordSchema.internalValue;
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

    // namespace_templates - computed: true, optional: true, required: false
    private _namespaceTemplates?: string[]; 
    public get namespaceTemplates() {
        return this.getListAttribute('namespace_templates');
    }
    public set namespaceTemplates(value: string[]) {
        this._namespaceTemplates = value;
    }
    public resetNamespaceTemplates() {
        this._namespaceTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceTemplatesInput() {
        return this._namespaceTemplates;
    }

    // namespaces - computed: true, optional: true, required: false
    private _namespaces?: string[]; 
    public get namespaces() {
        return this.getListAttribute('namespaces');
    }
    public set namespaces(value: string[]) {
        this._namespaces = value;
    }
    public resetNamespaces() {
        this._namespaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespacesInput() {
        return this._namespaces;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // strategy_id - computed: true, optional: true, required: false
    private _strategyId?: string; 
    public get strategyId() {
        return this.getStringAttribute('strategy_id');
    }
    public set strategyId(value: string) {
        this._strategyId = value;
    }
    public resetStrategyId() {
        this._strategyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyIdInput() {
        return this._strategyId;
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

    // updated_at - computed: true, optional: true, required: false
    private _updatedAt?: string; 
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    public set updatedAt(value: string) {
        this._updatedAt = value;
    }
    public resetUpdatedAt() {
        this._updatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updatedAtInput() {
        return this._updatedAt;
    }
}
export interface MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_value CcMemory#max_value}
    */
    readonly maxValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#min_value CcMemory#min_value}
    */
    readonly minValue?: number;
}
export class MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxValue = undefined;
            this._minValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
        }
    }

    // max_value - computed: true, optional: true, required: false
    private _maxValue?: number; 
    public get maxValue() {
        return this.getNumberAttribute('max_value');
    }
    public set maxValue(value: number) {
        this._maxValue = value;
    }
    public resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
        return this._maxValue;
    }

    // min_value - computed: true, optional: true, required: false
    private _minValue?: number; 
    public get minValue() {
        return this.getNumberAttribute('min_value');
    }
    public set minValue(value: number) {
        this._minValue = value;
    }
    public resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValueInput() {
        return this._minValue;
    }
}
export interface MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#max_items CcMemory#max_items}
    */
    readonly maxItems?: number;
}
export class MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._maxItems !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxItems = this._maxItems;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._maxItems = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._maxItems = value.maxItems;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // max_items - computed: true, optional: true, required: false
    private _maxItems?: number; 
    public get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    public set maxItems(value: number) {
        this._maxItems = value;
    }
    public resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxItemsInput() {
        return this._maxItems;
    }
}
export interface MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#allowed_values CcMemory#allowed_values}
    */
    readonly allowedValues?: string[];
}
export class MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }
}
export interface MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#number_validation CcMemory#number_validation}
    */
    readonly numberValidation?: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_list_validation CcMemory#string_list_validation}
    */
    readonly stringListValidation?: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#string_validation CcMemory#string_validation}
    */
    readonly stringValidation?: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty;
}
export class MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._numberValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberValidation = this._numberValidation?.internalValue;
        }
        if (this._stringListValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
        }
        if (this._stringValidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValidation = this._stringValidation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = undefined;
            this._stringListValidation.internalValue = undefined;
            this._stringValidation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._numberValidation.internalValue = value.numberValidation;
            this._stringListValidation.internalValue = value.stringListValidation;
            this._stringValidation.internalValue = value.stringValidation;
        }
    }

    // number_validation - computed: true, optional: true, required: false
    private _numberValidation = new MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationPropertyOutputReference(this, "number_validation");
    public get numberValidation() {
        return this._numberValidation;
    }
    public putNumberValidation(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationProperty) {
        this._numberValidation.internalValue = value;
    }
    public resetNumberValidation() {
        this._numberValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberValidationInput() {
        return this._numberValidation.internalValue;
    }

    // string_list_validation - computed: true, optional: true, required: false
    private _stringListValidation = new MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationPropertyOutputReference(this, "string_list_validation");
    public get stringListValidation() {
        return this._stringListValidation;
    }
    public putStringListValidation(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationProperty) {
        this._stringListValidation.internalValue = value;
    }
    public resetStringListValidation() {
        this._stringListValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringListValidationInput() {
        return this._stringListValidation.internalValue;
    }

    // string_validation - computed: true, optional: true, required: false
    private _stringValidation = new MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationPropertyOutputReference(this, "string_validation");
    public get stringValidation() {
        return this._stringValidation;
    }
    public putStringValidation(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationProperty) {
        this._stringValidation.internalValue = value;
    }
    public resetStringValidation() {
        this._stringValidation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValidationInput() {
        return this._stringValidation.internalValue;
    }
}
export interface MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty {
    /**
    * Definition for the metadata schema entry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#definition CcMemory#definition}
    */
    readonly definition?: string;
    /**
    * LLM extraction instruction
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction CcMemory#llm_extraction_instruction}
    */
    readonly llmExtractionInstruction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#validation CcMemory#validation}
    */
    readonly validation?: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty;
}
export class MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        if (this._llmExtractionInstruction !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
        }
        if (this._validation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validation = this._validation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definition = undefined;
            this._llmExtractionInstruction = undefined;
            this._validation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definition = value.definition;
            this._llmExtractionInstruction = value.llmExtractionInstruction;
            this._validation.internalValue = value.validation;
        }
    }

    // definition - computed: true, optional: true, required: false
    private _definition?: string; 
    public get definition() {
        return this.getStringAttribute('definition');
    }
    public set definition(value: string) {
        this._definition = value;
    }
    public resetDefinition() {
        this._definition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition;
    }

    // llm_extraction_instruction - computed: true, optional: true, required: false
    private _llmExtractionInstruction?: string; 
    public get llmExtractionInstruction() {
        return this.getStringAttribute('llm_extraction_instruction');
    }
    public set llmExtractionInstruction(value: string) {
        this._llmExtractionInstruction = value;
    }
    public resetLlmExtractionInstruction() {
        this._llmExtractionInstruction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionInstructionInput() {
        return this._llmExtractionInstruction;
    }

    // validation - computed: true, optional: true, required: false
    private _validation = new MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationPropertyOutputReference(this, "validation");
    public get validation() {
        return this._validation;
    }
    public putValidation(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationProperty) {
        this._validation.internalValue = value;
    }
    public resetValidation() {
        this._validation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
        return this._validation.internalValue;
    }
}
export interface MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#llm_extraction_config CcMemory#llm_extraction_config}
    */
    readonly llmExtractionConfig?: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty;
}
export class MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._llmExtractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
        }
    }

    // llm_extraction_config - computed: true, optional: true, required: false
    private _llmExtractionConfig = new MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigPropertyOutputReference(this, "llm_extraction_config");
    public get llmExtractionConfig() {
        return this._llmExtractionConfig;
    }
    public putLlmExtractionConfig(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigProperty) {
        this._llmExtractionConfig.internalValue = value;
    }
    public resetLlmExtractionConfig() {
        this._llmExtractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get llmExtractionConfigInput() {
        return this._llmExtractionConfig.internalValue;
    }
}
export interface MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_config CcMemory#extraction_config}
    */
    readonly extractionConfig?: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty;
    /**
    * Specifies whether the metadata value is extracted by the LLM or passed through deterministically from the event
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#extraction_type CcMemory#extraction_type}
    */
    readonly extractionType?: string;
    /**
    * Key name for metadata fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#key CcMemory#key}
    */
    readonly key?: string;
    /**
    * Supported data types for metadata values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
}
export class MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extractionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
        }
        if (this._extractionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractionType = this._extractionType;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = undefined;
            this._extractionType = undefined;
            this._key = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extractionConfig.internalValue = value.extractionConfig;
            this._extractionType = value.extractionType;
            this._key = value.key;
            this._type = value.type;
        }
    }

    // extraction_config - computed: true, optional: true, required: false
    private _extractionConfig = new MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigPropertyOutputReference(this, "extraction_config");
    public get extractionConfig() {
        return this._extractionConfig;
    }
    public putExtractionConfig(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigProperty) {
        this._extractionConfig.internalValue = value;
    }
    public resetExtractionConfig() {
        this._extractionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionConfigInput() {
        return this._extractionConfig.internalValue;
    }

    // extraction_type - computed: true, optional: true, required: false
    private _extractionType?: string; 
    public get extractionType() {
        return this.getStringAttribute('extraction_type');
    }
    public set extractionType(value: string) {
        this._extractionType = value;
    }
    public resetExtractionType() {
        this._extractionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionTypeInput() {
        return this._extractionType;
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

export class MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList extends cdktn.ComplexList {
    public internalValue? : MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable

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
    public get(index: number): MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference {
        return new MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaProperty {
    /**
    * List of metadata schema entries
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#metadata_schema CcMemory#metadata_schema}
    */
    readonly metadataSchema?: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable;
}
export class MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metadataSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataSchema.internalValue = value.metadataSchema;
        }
    }

    // metadata_schema - computed: true, optional: true, required: false
    private _metadataSchema = new MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaPropertyList(this, "metadata_schema", false);
    public get metadataSchema() {
        return this._metadataSchema;
    }
    public putMetadataSchema(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaProperty[] | cdktn.IResolvable) {
        this._metadataSchema.internalValue = value;
    }
    public resetMetadataSchema() {
        this._metadataSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataSchemaInput() {
        return this._metadataSchema.internalValue;
    }
}
export interface UserPreferenceMemoryStrategyProperty {
    /**
    * Creation timestamp of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#created_at CcMemory#created_at}
    */
    readonly createdAt?: string;
    /**
    * Description of the Memory resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#description CcMemory#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#memory_record_schema CcMemory#memory_record_schema}
    */
    readonly memoryRecordSchema?: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaProperty;
    /**
    * Name of the Memory resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#name CcMemory#name}
    */
    readonly name?: string;
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespace_templates CcMemory#namespace_templates}
    */
    readonly namespaceTemplates?: string[];
    /**
    * List of namespaces for memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#namespaces CcMemory#namespaces}
    */
    readonly namespaces?: string[];
    /**
    * Status of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#status CcMemory#status}
    */
    readonly status?: string;
    /**
    * Unique identifier for the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#strategy_id CcMemory#strategy_id}
    */
    readonly strategyId?: string;
    /**
    * Type of memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
    /**
    * Last update timestamp of the memory strategy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#updated_at CcMemory#updated_at}
    */
    readonly updatedAt?: string;
}
export class UserPreferenceMemoryStrategyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserPreferenceMemoryStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._createdAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdAt = this._createdAt;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._memoryRecordSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._namespaceTemplates !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceTemplates = this._namespaceTemplates;
        }
        if (this._namespaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaces = this._namespaces;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._strategyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategyId = this._strategyId;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._updatedAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatedAt = this._updatedAt;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserPreferenceMemoryStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._createdAt = undefined;
            this._description = undefined;
            this._memoryRecordSchema.internalValue = undefined;
            this._name = undefined;
            this._namespaceTemplates = undefined;
            this._namespaces = undefined;
            this._status = undefined;
            this._strategyId = undefined;
            this._type = undefined;
            this._updatedAt = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._createdAt = value.createdAt;
            this._description = value.description;
            this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
            this._name = value.name;
            this._namespaceTemplates = value.namespaceTemplates;
            this._namespaces = value.namespaces;
            this._status = value.status;
            this._strategyId = value.strategyId;
            this._type = value.type;
            this._updatedAt = value.updatedAt;
        }
    }

    // created_at - computed: true, optional: true, required: false
    private _createdAt?: string; 
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }
    public set createdAt(value: string) {
        this._createdAt = value;
    }
    public resetCreatedAt() {
        this._createdAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdAtInput() {
        return this._createdAt;
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

    // memory_record_schema - computed: true, optional: true, required: false
    private _memoryRecordSchema = new MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaPropertyOutputReference(this, "memory_record_schema");
    public get memoryRecordSchema() {
        return this._memoryRecordSchema;
    }
    public putMemoryRecordSchema(value: MemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaProperty) {
        this._memoryRecordSchema.internalValue = value;
    }
    public resetMemoryRecordSchema() {
        this._memoryRecordSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryRecordSchemaInput() {
        return this._memoryRecordSchema.internalValue;
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

    // namespace_templates - computed: true, optional: true, required: false
    private _namespaceTemplates?: string[]; 
    public get namespaceTemplates() {
        return this.getListAttribute('namespace_templates');
    }
    public set namespaceTemplates(value: string[]) {
        this._namespaceTemplates = value;
    }
    public resetNamespaceTemplates() {
        this._namespaceTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceTemplatesInput() {
        return this._namespaceTemplates;
    }

    // namespaces - computed: true, optional: true, required: false
    private _namespaces?: string[]; 
    public get namespaces() {
        return this.getListAttribute('namespaces');
    }
    public set namespaces(value: string[]) {
        this._namespaces = value;
    }
    public resetNamespaces() {
        this._namespaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespacesInput() {
        return this._namespaces;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // strategy_id - computed: true, optional: true, required: false
    private _strategyId?: string; 
    public get strategyId() {
        return this.getStringAttribute('strategy_id');
    }
    public set strategyId(value: string) {
        this._strategyId = value;
    }
    public resetStrategyId() {
        this._strategyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyIdInput() {
        return this._strategyId;
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

    // updated_at - computed: true, optional: true, required: false
    private _updatedAt?: string; 
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    public set updatedAt(value: string) {
        this._updatedAt = value;
    }
    public resetUpdatedAt() {
        this._updatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updatedAtInput() {
        return this._updatedAt;
    }
}
export interface MemoryStrategyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#custom_memory_strategy CcMemory#custom_memory_strategy}
    */
    readonly customMemoryStrategy?: CustomMemoryStrategyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#episodic_memory_strategy CcMemory#episodic_memory_strategy}
    */
    readonly episodicMemoryStrategy?: EpisodicMemoryStrategyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#semantic_memory_strategy CcMemory#semantic_memory_strategy}
    */
    readonly semanticMemoryStrategy?: SemanticMemoryStrategyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#summary_memory_strategy CcMemory#summary_memory_strategy}
    */
    readonly summaryMemoryStrategy?: SummaryMemoryStrategyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#user_preference_memory_strategy CcMemory#user_preference_memory_strategy}
    */
    readonly userPreferenceMemoryStrategy?: UserPreferenceMemoryStrategyProperty;
}
export class MemoryStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MemoryStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customMemoryStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customMemoryStrategy = this._customMemoryStrategy?.internalValue;
        }
        if (this._episodicMemoryStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.episodicMemoryStrategy = this._episodicMemoryStrategy?.internalValue;
        }
        if (this._semanticMemoryStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.semanticMemoryStrategy = this._semanticMemoryStrategy?.internalValue;
        }
        if (this._summaryMemoryStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.summaryMemoryStrategy = this._summaryMemoryStrategy?.internalValue;
        }
        if (this._userPreferenceMemoryStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPreferenceMemoryStrategy = this._userPreferenceMemoryStrategy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customMemoryStrategy.internalValue = undefined;
            this._episodicMemoryStrategy.internalValue = undefined;
            this._semanticMemoryStrategy.internalValue = undefined;
            this._summaryMemoryStrategy.internalValue = undefined;
            this._userPreferenceMemoryStrategy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customMemoryStrategy.internalValue = value.customMemoryStrategy;
            this._episodicMemoryStrategy.internalValue = value.episodicMemoryStrategy;
            this._semanticMemoryStrategy.internalValue = value.semanticMemoryStrategy;
            this._summaryMemoryStrategy.internalValue = value.summaryMemoryStrategy;
            this._userPreferenceMemoryStrategy.internalValue = value.userPreferenceMemoryStrategy;
        }
    }

    // custom_memory_strategy - computed: true, optional: true, required: false
    private _customMemoryStrategy = new CustomMemoryStrategyPropertyOutputReference(this, "custom_memory_strategy");
    public get customMemoryStrategy() {
        return this._customMemoryStrategy;
    }
    public putCustomMemoryStrategy(value: CustomMemoryStrategyProperty) {
        this._customMemoryStrategy.internalValue = value;
    }
    public resetCustomMemoryStrategy() {
        this._customMemoryStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customMemoryStrategyInput() {
        return this._customMemoryStrategy.internalValue;
    }

    // episodic_memory_strategy - computed: true, optional: true, required: false
    private _episodicMemoryStrategy = new EpisodicMemoryStrategyPropertyOutputReference(this, "episodic_memory_strategy");
    public get episodicMemoryStrategy() {
        return this._episodicMemoryStrategy;
    }
    public putEpisodicMemoryStrategy(value: EpisodicMemoryStrategyProperty) {
        this._episodicMemoryStrategy.internalValue = value;
    }
    public resetEpisodicMemoryStrategy() {
        this._episodicMemoryStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get episodicMemoryStrategyInput() {
        return this._episodicMemoryStrategy.internalValue;
    }

    // semantic_memory_strategy - computed: true, optional: true, required: false
    private _semanticMemoryStrategy = new SemanticMemoryStrategyPropertyOutputReference(this, "semantic_memory_strategy");
    public get semanticMemoryStrategy() {
        return this._semanticMemoryStrategy;
    }
    public putSemanticMemoryStrategy(value: SemanticMemoryStrategyProperty) {
        this._semanticMemoryStrategy.internalValue = value;
    }
    public resetSemanticMemoryStrategy() {
        this._semanticMemoryStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get semanticMemoryStrategyInput() {
        return this._semanticMemoryStrategy.internalValue;
    }

    // summary_memory_strategy - computed: true, optional: true, required: false
    private _summaryMemoryStrategy = new SummaryMemoryStrategyPropertyOutputReference(this, "summary_memory_strategy");
    public get summaryMemoryStrategy() {
        return this._summaryMemoryStrategy;
    }
    public putSummaryMemoryStrategy(value: SummaryMemoryStrategyProperty) {
        this._summaryMemoryStrategy.internalValue = value;
    }
    public resetSummaryMemoryStrategy() {
        this._summaryMemoryStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get summaryMemoryStrategyInput() {
        return this._summaryMemoryStrategy.internalValue;
    }

    // user_preference_memory_strategy - computed: true, optional: true, required: false
    private _userPreferenceMemoryStrategy = new UserPreferenceMemoryStrategyPropertyOutputReference(this, "user_preference_memory_strategy");
    public get userPreferenceMemoryStrategy() {
        return this._userPreferenceMemoryStrategy;
    }
    public putUserPreferenceMemoryStrategy(value: UserPreferenceMemoryStrategyProperty) {
        this._userPreferenceMemoryStrategy.internalValue = value;
    }
    public resetUserPreferenceMemoryStrategy() {
        this._userPreferenceMemoryStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPreferenceMemoryStrategyInput() {
        return this._userPreferenceMemoryStrategy.internalValue;
    }
}

export class MemoryStrategyPropertyList extends cdktn.ComplexList {
    public internalValue? : MemoryStrategyProperty[] | cdktn.IResolvable

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
    public get(index: number): MemoryStrategyPropertyOutputReference {
        return new MemoryStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ContentConfigurationProperty {
    /**
    * The level of content detail to deliver
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#level CcMemory#level}
    */
    readonly level?: string;
    /**
    * The type of content to deliver
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#type CcMemory#type}
    */
    readonly type?: string;
}
export class ContentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._level !== undefined) {
            hasAnyValues = true;
            internalValueResult.level = this._level;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._level = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._level = value.level;
            this._type = value.type;
        }
    }

    // level - computed: true, optional: true, required: false
    private _level?: string; 
    public get level() {
        return this.getStringAttribute('level');
    }
    public set level(value: string) {
        this._level = value;
    }
    public resetLevel() {
        this._level = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelInput() {
        return this._level;
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

export class ContentConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : ContentConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): ContentConfigurationPropertyOutputReference {
        return new ContentConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KinesisResourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#content_configurations CcMemory#content_configurations}
    */
    readonly contentConfigurations?: ContentConfigurationProperty[] | cdktn.IResolvable;
    /**
    * ARN format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#data_stream_arn CcMemory#data_stream_arn}
    */
    readonly dataStreamArn?: string;
}
export class KinesisResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentConfigurations = this._contentConfigurations?.internalValue;
        }
        if (this._dataStreamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataStreamArn = this._dataStreamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentConfigurations.internalValue = undefined;
            this._dataStreamArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentConfigurations.internalValue = value.contentConfigurations;
            this._dataStreamArn = value.dataStreamArn;
        }
    }

    // content_configurations - computed: true, optional: true, required: false
    private _contentConfigurations = new ContentConfigurationPropertyList(this, "content_configurations", false);
    public get contentConfigurations() {
        return this._contentConfigurations;
    }
    public putContentConfigurations(value: ContentConfigurationProperty[] | cdktn.IResolvable) {
        this._contentConfigurations.internalValue = value;
    }
    public resetContentConfigurations() {
        this._contentConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentConfigurationsInput() {
        return this._contentConfigurations.internalValue;
    }

    // data_stream_arn - computed: true, optional: true, required: false
    private _dataStreamArn?: string; 
    public get dataStreamArn() {
        return this.getStringAttribute('data_stream_arn');
    }
    public set dataStreamArn(value: string) {
        this._dataStreamArn = value;
    }
    public resetDataStreamArn() {
        this._dataStreamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataStreamArnInput() {
        return this._dataStreamArn;
    }
}
export interface StreamDeliveryResourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#kinesis CcMemory#kinesis}
    */
    readonly kinesis?: KinesisResourceProperty;
}
export class StreamDeliveryResourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StreamDeliveryResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kinesis?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesis = this._kinesis?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StreamDeliveryResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kinesis.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kinesis.internalValue = value.kinesis;
        }
    }

    // kinesis - computed: true, optional: true, required: false
    private _kinesis = new KinesisResourcePropertyOutputReference(this, "kinesis");
    public get kinesis() {
        return this._kinesis;
    }
    public putKinesis(value: KinesisResourceProperty) {
        this._kinesis.internalValue = value;
    }
    public resetKinesis() {
        this._kinesis.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisInput() {
        return this._kinesis.internalValue;
    }
}

export class StreamDeliveryResourcePropertyList extends cdktn.ComplexList {
    public internalValue? : StreamDeliveryResourceProperty[] | cdktn.IResolvable

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
    public get(index: number): StreamDeliveryResourcePropertyOutputReference {
        return new StreamDeliveryResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StreamDeliveryResourcesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_memory#resources CcMemory#resources}
    */
    readonly resources?: StreamDeliveryResourceProperty[] | cdktn.IResolvable;
}
export class StreamDeliveryResourcesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StreamDeliveryResourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StreamDeliveryResourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resources.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resources.internalValue = value.resources;
        }
    }

    // resources - computed: true, optional: true, required: false
    private _resources = new StreamDeliveryResourcePropertyList(this, "resources", false);
    public get resources() {
        return this._resources;
    }
    public putResources(value: StreamDeliveryResourceProperty[] | cdktn.IResolvable) {
        this._resources.internalValue = value;
    }
    public resetResources() {
        this._resources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources.internalValue;
    }
}
}
