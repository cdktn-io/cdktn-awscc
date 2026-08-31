// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransformerProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#edi_type CcTransformer#edi_type}
    */
    readonly ediType?: CcTransformer.EdiTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#file_format CcTransformer#file_format}
    */
    readonly fileFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#input_conversion CcTransformer#input_conversion}
    */
    readonly inputConversion?: CcTransformer.InputConversionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#mapping CcTransformer#mapping}
    */
    readonly mapping?: CcTransformer.MappingProperty;
    /**
    * This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#mapping_template CcTransformer#mapping_template}
    */
    readonly mappingTemplate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#name CcTransformer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#output_conversion CcTransformer#output_conversion}
    */
    readonly outputConversion?: CcTransformer.OutputConversionProperty;
    /**
    * This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#sample_document CcTransformer#sample_document}
    */
    readonly sampleDocument?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#sample_documents CcTransformer#sample_documents}
    */
    readonly sampleDocuments?: CcTransformer.SampleDocumentsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#status CcTransformer#status}
    */
    readonly status: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#tags CcTransformer#tags}
    */
    readonly tags?: CcTransformer.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer awscc_b2bi_transformer}
*/
export class CcTransformer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_b2bi_transformer";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransformer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransformer to import
    * @param importFromId The id of the existing CcTransformer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransformer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_b2bi_transformer", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer awscc_b2bi_transformer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransformerProps
    */
    public constructor(scope: Construct, id: string, config: CcTransformerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_b2bi_transformer',
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
        this._ediType.internalValue = config.ediType;
        this._fileFormat = config.fileFormat;
        this._inputConversion.internalValue = config.inputConversion;
        this._mapping.internalValue = config.mapping;
        this._mappingTemplate = config.mappingTemplate;
        this._name = config.name;
        this._outputConversion.internalValue = config.outputConversion;
        this._sampleDocument = config.sampleDocument;
        this._sampleDocuments.internalValue = config.sampleDocuments;
        this._status = config.status;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // edi_type - computed: true, optional: true, required: false
    private _ediType = new CcTransformer.EdiTypePropertyOutputReference(this, "edi_type");
    public get ediType() {
        return this._ediType;
    }
    public putEdiType(value: CcTransformer.EdiTypeProperty) {
        this._ediType.internalValue = value;
    }
    public resetEdiType() {
        this._ediType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ediTypeInput() {
        return this._ediType.internalValue;
    }

    // file_format - computed: true, optional: true, required: false
    private _fileFormat?: string; 
    public get fileFormat() {
        return this.getStringAttribute('file_format');
    }
    public set fileFormat(value: string) {
        this._fileFormat = value;
    }
    public resetFileFormat() {
        this._fileFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileFormatInput() {
        return this._fileFormat;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // input_conversion - computed: true, optional: true, required: false
    private _inputConversion = new CcTransformer.InputConversionPropertyOutputReference(this, "input_conversion");
    public get inputConversion() {
        return this._inputConversion;
    }
    public putInputConversion(value: CcTransformer.InputConversionProperty) {
        this._inputConversion.internalValue = value;
    }
    public resetInputConversion() {
        this._inputConversion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputConversionInput() {
        return this._inputConversion.internalValue;
    }

    // mapping - computed: true, optional: true, required: false
    private _mapping = new CcTransformer.MappingPropertyOutputReference(this, "mapping");
    public get mapping() {
        return this._mapping;
    }
    public putMapping(value: CcTransformer.MappingProperty) {
        this._mapping.internalValue = value;
    }
    public resetMapping() {
        this._mapping.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mappingInput() {
        return this._mapping.internalValue;
    }

    // mapping_template - computed: true, optional: true, required: false
    private _mappingTemplate?: string; 
    public get mappingTemplate() {
        return this.getStringAttribute('mapping_template');
    }
    public set mappingTemplate(value: string) {
        this._mappingTemplate = value;
    }
    public resetMappingTemplate() {
        this._mappingTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mappingTemplateInput() {
        return this._mappingTemplate;
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
        return this.getStringAttribute('modified_at');
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

    // output_conversion - computed: true, optional: true, required: false
    private _outputConversion = new CcTransformer.OutputConversionPropertyOutputReference(this, "output_conversion");
    public get outputConversion() {
        return this._outputConversion;
    }
    public putOutputConversion(value: CcTransformer.OutputConversionProperty) {
        this._outputConversion.internalValue = value;
    }
    public resetOutputConversion() {
        this._outputConversion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputConversionInput() {
        return this._outputConversion.internalValue;
    }

    // sample_document - computed: true, optional: true, required: false
    private _sampleDocument?: string; 
    public get sampleDocument() {
        return this.getStringAttribute('sample_document');
    }
    public set sampleDocument(value: string) {
        this._sampleDocument = value;
    }
    public resetSampleDocument() {
        this._sampleDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sampleDocumentInput() {
        return this._sampleDocument;
    }

    // sample_documents - computed: true, optional: true, required: false
    private _sampleDocuments = new CcTransformer.SampleDocumentsPropertyOutputReference(this, "sample_documents");
    public get sampleDocuments() {
        return this._sampleDocuments;
    }
    public putSampleDocuments(value: CcTransformer.SampleDocumentsProperty) {
        this._sampleDocuments.internalValue = value;
    }
    public resetSampleDocuments() {
        this._sampleDocuments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sampleDocumentsInput() {
        return this._sampleDocuments.internalValue;
    }

    // status - computed: false, optional: false, required: true
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTransformer.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTransformer.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // transformer_arn - computed: true, optional: false, required: false
    public get transformerArn() {
        return this.getStringAttribute('transformer_arn');
    }

    // transformer_id - computed: true, optional: false, required: false
    public get transformerId() {
        return this.getStringAttribute('transformer_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            edi_type: ccTransformerEdiTypePropertyToTerraform(this._ediType.internalValue),
            file_format: cdktn.stringToTerraform(this._fileFormat),
            input_conversion: ccTransformerInputConversionPropertyToTerraform(this._inputConversion.internalValue),
            mapping: ccTransformerMappingPropertyToTerraform(this._mapping.internalValue),
            mapping_template: cdktn.stringToTerraform(this._mappingTemplate),
            name: cdktn.stringToTerraform(this._name),
            output_conversion: ccTransformerOutputConversionPropertyToTerraform(this._outputConversion.internalValue),
            sample_document: cdktn.stringToTerraform(this._sampleDocument),
            sample_documents: ccTransformerSampleDocumentsPropertyToTerraform(this._sampleDocuments.internalValue),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccTransformerTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            edi_type: {
                value: ccTransformerEdiTypePropertyToHclTerraform(this._ediType.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTransformer.EdiTypeProperty",
            },
            file_format: {
                value: cdktn.stringToHclTerraform(this._fileFormat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            input_conversion: {
                value: ccTransformerInputConversionPropertyToHclTerraform(this._inputConversion.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTransformer.InputConversionProperty",
            },
            mapping: {
                value: ccTransformerMappingPropertyToHclTerraform(this._mapping.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTransformer.MappingProperty",
            },
            mapping_template: {
                value: cdktn.stringToHclTerraform(this._mappingTemplate),
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
            output_conversion: {
                value: ccTransformerOutputConversionPropertyToHclTerraform(this._outputConversion.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTransformer.OutputConversionProperty",
            },
            sample_document: {
                value: cdktn.stringToHclTerraform(this._sampleDocument),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sample_documents: {
                value: ccTransformerSampleDocumentsPropertyToHclTerraform(this._sampleDocuments.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTransformer.SampleDocumentsProperty",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTransformerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTransformer.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTransformerX12DetailsPropertyToTerraform(struct?: CcTransformer.X12DetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        transaction_set: cdktn.stringToTerraform(struct!.transactionSet),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccTransformerX12DetailsPropertyToHclTerraform(struct?: CcTransformer.X12DetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        transaction_set: {
            value: cdktn.stringToHclTerraform(struct!.transactionSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerEdiTypePropertyToTerraform(struct?: CcTransformer.EdiTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        x12_details: ccTransformerX12DetailsPropertyToTerraform(struct!.x12Details),
    }
}


export function ccTransformerEdiTypePropertyToHclTerraform(struct?: CcTransformer.EdiTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        x12_details: {
            value: ccTransformerX12DetailsPropertyToHclTerraform(struct!.x12Details),
            isBlock: true,
            type: "struct",
            storageClassType: "X12DetailsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerX12SplitOptionsPropertyToTerraform(struct?: CcTransformer.X12SplitOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        split_by: cdktn.stringToTerraform(struct!.splitBy),
    }
}


export function ccTransformerX12SplitOptionsPropertyToHclTerraform(struct?: CcTransformer.X12SplitOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        split_by: {
            value: cdktn.stringToHclTerraform(struct!.splitBy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerX12CodeListValidationRulePropertyToTerraform(struct?: CcTransformer.X12CodeListValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        codes_to_add: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.codesToAdd),
        codes_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.codesToRemove),
        element_id: cdktn.stringToTerraform(struct!.elementId),
    }
}


export function ccTransformerX12CodeListValidationRulePropertyToHclTerraform(struct?: CcTransformer.X12CodeListValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        codes_to_add: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.codesToAdd),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        codes_to_remove: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.codesToRemove),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        element_id: {
            value: cdktn.stringToHclTerraform(struct!.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerX12ElementLengthValidationRulePropertyToTerraform(struct?: CcTransformer.X12ElementLengthValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        element_id: cdktn.stringToTerraform(struct!.elementId),
        max_length: cdktn.numberToTerraform(struct!.maxLength),
        min_length: cdktn.numberToTerraform(struct!.minLength),
    }
}


export function ccTransformerX12ElementLengthValidationRulePropertyToHclTerraform(struct?: CcTransformer.X12ElementLengthValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        element_id: {
            value: cdktn.stringToHclTerraform(struct!.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_length: {
            value: cdktn.numberToHclTerraform(struct!.maxLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_length: {
            value: cdktn.numberToHclTerraform(struct!.minLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerX12ElementRequirementValidationRulePropertyToTerraform(struct?: CcTransformer.X12ElementRequirementValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        element_position: cdktn.stringToTerraform(struct!.elementPosition),
        requirement: cdktn.stringToTerraform(struct!.requirement),
    }
}


export function ccTransformerX12ElementRequirementValidationRulePropertyToHclTerraform(struct?: CcTransformer.X12ElementRequirementValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        element_position: {
            value: cdktn.stringToHclTerraform(struct!.elementPosition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        requirement: {
            value: cdktn.stringToHclTerraform(struct!.requirement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerX12ValidationRulePropertyToTerraform(struct?: CcTransformer.X12ValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code_list_validation_rule: ccTransformerX12CodeListValidationRulePropertyToTerraform(struct!.codeListValidationRule),
        element_length_validation_rule: ccTransformerX12ElementLengthValidationRulePropertyToTerraform(struct!.elementLengthValidationRule),
        element_requirement_validation_rule: ccTransformerX12ElementRequirementValidationRulePropertyToTerraform(struct!.elementRequirementValidationRule),
    }
}


export function ccTransformerX12ValidationRulePropertyToHclTerraform(struct?: CcTransformer.X12ValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code_list_validation_rule: {
            value: ccTransformerX12CodeListValidationRulePropertyToHclTerraform(struct!.codeListValidationRule),
            isBlock: true,
            type: "struct",
            storageClassType: "X12CodeListValidationRuleProperty",
        },
        element_length_validation_rule: {
            value: ccTransformerX12ElementLengthValidationRulePropertyToHclTerraform(struct!.elementLengthValidationRule),
            isBlock: true,
            type: "struct",
            storageClassType: "X12ElementLengthValidationRuleProperty",
        },
        element_requirement_validation_rule: {
            value: ccTransformerX12ElementRequirementValidationRulePropertyToHclTerraform(struct!.elementRequirementValidationRule),
            isBlock: true,
            type: "struct",
            storageClassType: "X12ElementRequirementValidationRuleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerX12ValidationOptionsPropertyToTerraform(struct?: CcTransformer.X12ValidationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        validation_rules: cdktn.listMapper(ccTransformerX12ValidationRulePropertyToTerraform, false)(struct!.validationRules),
    }
}


export function ccTransformerX12ValidationOptionsPropertyToHclTerraform(struct?: CcTransformer.X12ValidationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        validation_rules: {
            value: cdktn.listMapperHcl(ccTransformerX12ValidationRulePropertyToHclTerraform, false)(struct!.validationRules),
            isBlock: true,
            type: "list",
            storageClassType: "X12ValidationRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerX12AdvancedOptionsPropertyToTerraform(struct?: CcTransformer.X12AdvancedOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        split_options: ccTransformerX12SplitOptionsPropertyToTerraform(struct!.splitOptions),
        validation_options: ccTransformerX12ValidationOptionsPropertyToTerraform(struct!.validationOptions),
    }
}


export function ccTransformerX12AdvancedOptionsPropertyToHclTerraform(struct?: CcTransformer.X12AdvancedOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        split_options: {
            value: ccTransformerX12SplitOptionsPropertyToHclTerraform(struct!.splitOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "X12SplitOptionsProperty",
        },
        validation_options: {
            value: ccTransformerX12ValidationOptionsPropertyToHclTerraform(struct!.validationOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "X12ValidationOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerAdvancedOptionsPropertyToTerraform(struct?: CcTransformer.AdvancedOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        x12: ccTransformerX12AdvancedOptionsPropertyToTerraform(struct!.x12),
    }
}


export function ccTransformerAdvancedOptionsPropertyToHclTerraform(struct?: CcTransformer.AdvancedOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        x12: {
            value: ccTransformerX12AdvancedOptionsPropertyToHclTerraform(struct!.x12),
            isBlock: true,
            type: "struct",
            storageClassType: "X12AdvancedOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerInputConversionFormatOptionsX12PropertyToTerraform(struct?: CcTransformer.InputConversionFormatOptionsX12Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        transaction_set: cdktn.stringToTerraform(struct!.transactionSet),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccTransformerInputConversionFormatOptionsX12PropertyToHclTerraform(struct?: CcTransformer.InputConversionFormatOptionsX12Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        transaction_set: {
            value: cdktn.stringToHclTerraform(struct!.transactionSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerFormatOptionsPropertyToTerraform(struct?: CcTransformer.FormatOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        x12: ccTransformerInputConversionFormatOptionsX12PropertyToTerraform(struct!.x12),
    }
}


export function ccTransformerFormatOptionsPropertyToHclTerraform(struct?: CcTransformer.FormatOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        x12: {
            value: ccTransformerInputConversionFormatOptionsX12PropertyToHclTerraform(struct!.x12),
            isBlock: true,
            type: "struct",
            storageClassType: "InputConversionFormatOptionsX12Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerInputConversionPropertyToTerraform(struct?: CcTransformer.InputConversionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        advanced_options: ccTransformerAdvancedOptionsPropertyToTerraform(struct!.advancedOptions),
        format_options: ccTransformerFormatOptionsPropertyToTerraform(struct!.formatOptions),
        from_format: cdktn.stringToTerraform(struct!.fromFormat),
    }
}


export function ccTransformerInputConversionPropertyToHclTerraform(struct?: CcTransformer.InputConversionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        advanced_options: {
            value: ccTransformerAdvancedOptionsPropertyToHclTerraform(struct!.advancedOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "AdvancedOptionsProperty",
        },
        format_options: {
            value: ccTransformerFormatOptionsPropertyToHclTerraform(struct!.formatOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "FormatOptionsProperty",
        },
        from_format: {
            value: cdktn.stringToHclTerraform(struct!.fromFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerMappingPropertyToTerraform(struct?: CcTransformer.MappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        template: cdktn.stringToTerraform(struct!.template),
        template_language: cdktn.stringToTerraform(struct!.templateLanguage),
    }
}


export function ccTransformerMappingPropertyToHclTerraform(struct?: CcTransformer.MappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        template: {
            value: cdktn.stringToHclTerraform(struct!.template),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        template_language: {
            value: cdktn.stringToHclTerraform(struct!.templateLanguage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerSplitOptionsPropertyToTerraform(struct?: CcTransformer.SplitOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        split_by: cdktn.stringToTerraform(struct!.splitBy),
    }
}


export function ccTransformerSplitOptionsPropertyToHclTerraform(struct?: CcTransformer.SplitOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        split_by: {
            value: cdktn.stringToHclTerraform(struct!.splitBy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerCodeListValidationRulePropertyToTerraform(struct?: CcTransformer.CodeListValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        codes_to_add: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.codesToAdd),
        codes_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.codesToRemove),
        element_id: cdktn.stringToTerraform(struct!.elementId),
    }
}


export function ccTransformerCodeListValidationRulePropertyToHclTerraform(struct?: CcTransformer.CodeListValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        codes_to_add: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.codesToAdd),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        codes_to_remove: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.codesToRemove),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        element_id: {
            value: cdktn.stringToHclTerraform(struct!.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerElementLengthValidationRulePropertyToTerraform(struct?: CcTransformer.ElementLengthValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        element_id: cdktn.stringToTerraform(struct!.elementId),
        max_length: cdktn.numberToTerraform(struct!.maxLength),
        min_length: cdktn.numberToTerraform(struct!.minLength),
    }
}


export function ccTransformerElementLengthValidationRulePropertyToHclTerraform(struct?: CcTransformer.ElementLengthValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        element_id: {
            value: cdktn.stringToHclTerraform(struct!.elementId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_length: {
            value: cdktn.numberToHclTerraform(struct!.maxLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_length: {
            value: cdktn.numberToHclTerraform(struct!.minLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerElementRequirementValidationRulePropertyToTerraform(struct?: CcTransformer.ElementRequirementValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        element_position: cdktn.stringToTerraform(struct!.elementPosition),
        requirement: cdktn.stringToTerraform(struct!.requirement),
    }
}


export function ccTransformerElementRequirementValidationRulePropertyToHclTerraform(struct?: CcTransformer.ElementRequirementValidationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        element_position: {
            value: cdktn.stringToHclTerraform(struct!.elementPosition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        requirement: {
            value: cdktn.stringToHclTerraform(struct!.requirement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerValidationRulesPropertyToTerraform(struct?: CcTransformer.ValidationRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code_list_validation_rule: ccTransformerCodeListValidationRulePropertyToTerraform(struct!.codeListValidationRule),
        element_length_validation_rule: ccTransformerElementLengthValidationRulePropertyToTerraform(struct!.elementLengthValidationRule),
        element_requirement_validation_rule: ccTransformerElementRequirementValidationRulePropertyToTerraform(struct!.elementRequirementValidationRule),
    }
}


export function ccTransformerValidationRulesPropertyToHclTerraform(struct?: CcTransformer.ValidationRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code_list_validation_rule: {
            value: ccTransformerCodeListValidationRulePropertyToHclTerraform(struct!.codeListValidationRule),
            isBlock: true,
            type: "struct",
            storageClassType: "CodeListValidationRuleProperty",
        },
        element_length_validation_rule: {
            value: ccTransformerElementLengthValidationRulePropertyToHclTerraform(struct!.elementLengthValidationRule),
            isBlock: true,
            type: "struct",
            storageClassType: "ElementLengthValidationRuleProperty",
        },
        element_requirement_validation_rule: {
            value: ccTransformerElementRequirementValidationRulePropertyToHclTerraform(struct!.elementRequirementValidationRule),
            isBlock: true,
            type: "struct",
            storageClassType: "ElementRequirementValidationRuleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerValidationOptionsPropertyToTerraform(struct?: CcTransformer.ValidationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        validation_rules: cdktn.listMapper(ccTransformerValidationRulesPropertyToTerraform, false)(struct!.validationRules),
    }
}


export function ccTransformerValidationOptionsPropertyToHclTerraform(struct?: CcTransformer.ValidationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        validation_rules: {
            value: cdktn.listMapperHcl(ccTransformerValidationRulesPropertyToHclTerraform, false)(struct!.validationRules),
            isBlock: true,
            type: "list",
            storageClassType: "ValidationRulesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerOutputConversionAdvancedOptionsX12PropertyToTerraform(struct?: CcTransformer.OutputConversionAdvancedOptionsX12Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        split_options: ccTransformerSplitOptionsPropertyToTerraform(struct!.splitOptions),
        validation_options: ccTransformerValidationOptionsPropertyToTerraform(struct!.validationOptions),
    }
}


export function ccTransformerOutputConversionAdvancedOptionsX12PropertyToHclTerraform(struct?: CcTransformer.OutputConversionAdvancedOptionsX12Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        split_options: {
            value: ccTransformerSplitOptionsPropertyToHclTerraform(struct!.splitOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "SplitOptionsProperty",
        },
        validation_options: {
            value: ccTransformerValidationOptionsPropertyToHclTerraform(struct!.validationOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "ValidationOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerOutputConversionAdvancedOptionsPropertyToTerraform(struct?: CcTransformer.OutputConversionAdvancedOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        x12: ccTransformerOutputConversionAdvancedOptionsX12PropertyToTerraform(struct!.x12),
    }
}


export function ccTransformerOutputConversionAdvancedOptionsPropertyToHclTerraform(struct?: CcTransformer.OutputConversionAdvancedOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        x12: {
            value: ccTransformerOutputConversionAdvancedOptionsX12PropertyToHclTerraform(struct!.x12),
            isBlock: true,
            type: "struct",
            storageClassType: "OutputConversionAdvancedOptionsX12Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerOutputConversionFormatOptionsX12PropertyToTerraform(struct?: CcTransformer.OutputConversionFormatOptionsX12Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        transaction_set: cdktn.stringToTerraform(struct!.transactionSet),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccTransformerOutputConversionFormatOptionsX12PropertyToHclTerraform(struct?: CcTransformer.OutputConversionFormatOptionsX12Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        transaction_set: {
            value: cdktn.stringToHclTerraform(struct!.transactionSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerOutputConversionFormatOptionsPropertyToTerraform(struct?: CcTransformer.OutputConversionFormatOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        x12: ccTransformerOutputConversionFormatOptionsX12PropertyToTerraform(struct!.x12),
    }
}


export function ccTransformerOutputConversionFormatOptionsPropertyToHclTerraform(struct?: CcTransformer.OutputConversionFormatOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        x12: {
            value: ccTransformerOutputConversionFormatOptionsX12PropertyToHclTerraform(struct!.x12),
            isBlock: true,
            type: "struct",
            storageClassType: "OutputConversionFormatOptionsX12Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerOutputConversionPropertyToTerraform(struct?: CcTransformer.OutputConversionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        advanced_options: ccTransformerOutputConversionAdvancedOptionsPropertyToTerraform(struct!.advancedOptions),
        format_options: ccTransformerOutputConversionFormatOptionsPropertyToTerraform(struct!.formatOptions),
        to_format: cdktn.stringToTerraform(struct!.toFormat),
    }
}


export function ccTransformerOutputConversionPropertyToHclTerraform(struct?: CcTransformer.OutputConversionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        advanced_options: {
            value: ccTransformerOutputConversionAdvancedOptionsPropertyToHclTerraform(struct!.advancedOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "OutputConversionAdvancedOptionsProperty",
        },
        format_options: {
            value: ccTransformerOutputConversionFormatOptionsPropertyToHclTerraform(struct!.formatOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "OutputConversionFormatOptionsProperty",
        },
        to_format: {
            value: cdktn.stringToHclTerraform(struct!.toFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerSampleDocumentKeysPropertyToTerraform(struct?: CcTransformer.SampleDocumentKeysProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input: cdktn.stringToTerraform(struct!.input),
        output: cdktn.stringToTerraform(struct!.output),
    }
}


export function ccTransformerSampleDocumentKeysPropertyToHclTerraform(struct?: CcTransformer.SampleDocumentKeysProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input: {
            value: cdktn.stringToHclTerraform(struct!.input),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output: {
            value: cdktn.stringToHclTerraform(struct!.output),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerSampleDocumentsPropertyToTerraform(struct?: CcTransformer.SampleDocumentsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        keys: cdktn.listMapper(ccTransformerSampleDocumentKeysPropertyToTerraform, false)(struct!.keys),
    }
}


export function ccTransformerSampleDocumentsPropertyToHclTerraform(struct?: CcTransformer.SampleDocumentsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keys: {
            value: cdktn.listMapperHcl(ccTransformerSampleDocumentKeysPropertyToHclTerraform, false)(struct!.keys),
            isBlock: true,
            type: "list",
            storageClassType: "SampleDocumentKeysPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransformerTagPropertyToTerraform(struct?: CcTransformer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTransformerTagPropertyToHclTerraform(struct?: CcTransformer.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTransformer {
export interface X12DetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set CcTransformer#transaction_set}
    */
    readonly transactionSet?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version CcTransformer#version}
    */
    readonly version?: string;
}
export class X12DetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): X12DetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._transactionSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.transactionSet = this._transactionSet;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: X12DetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._transactionSet = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._transactionSet = value.transactionSet;
            this._version = value.version;
        }
    }

    // transaction_set - computed: true, optional: true, required: false
    private _transactionSet?: string; 
    public get transactionSet() {
        return this.getStringAttribute('transaction_set');
    }
    public set transactionSet(value: string) {
        this._transactionSet = value;
    }
    public resetTransactionSet() {
        this._transactionSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transactionSetInput() {
        return this._transactionSet;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface EdiTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12_details CcTransformer#x12_details}
    */
    readonly x12Details?: X12DetailsProperty;
}
export class EdiTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EdiTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._x12Details?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.x12Details = this._x12Details?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EdiTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._x12Details.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._x12Details.internalValue = value.x12Details;
        }
    }

    // x12_details - computed: true, optional: true, required: false
    private _x12Details = new X12DetailsPropertyOutputReference(this, "x12_details");
    public get x12Details() {
        return this._x12Details;
    }
    public putX12Details(value: X12DetailsProperty) {
        this._x12Details.internalValue = value;
    }
    public resetX12Details() {
        this._x12Details.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get x12DetailsInput() {
        return this._x12Details.internalValue;
    }
}
export interface X12SplitOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_by CcTransformer#split_by}
    */
    readonly splitBy?: string;
}
export class X12SplitOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): X12SplitOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._splitBy !== undefined) {
            hasAnyValues = true;
            internalValueResult.splitBy = this._splitBy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: X12SplitOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._splitBy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._splitBy = value.splitBy;
        }
    }

    // split_by - computed: true, optional: true, required: false
    private _splitBy?: string; 
    public get splitBy() {
        return this.getStringAttribute('split_by');
    }
    public set splitBy(value: string) {
        this._splitBy = value;
    }
    public resetSplitBy() {
        this._splitBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get splitByInput() {
        return this._splitBy;
    }
}
export interface X12CodeListValidationRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_add CcTransformer#codes_to_add}
    */
    readonly codesToAdd?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_remove CcTransformer#codes_to_remove}
    */
    readonly codesToRemove?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id CcTransformer#element_id}
    */
    readonly elementId?: string;
}
export class X12CodeListValidationRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): X12CodeListValidationRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._codesToAdd !== undefined) {
            hasAnyValues = true;
            internalValueResult.codesToAdd = this._codesToAdd;
        }
        if (this._codesToRemove !== undefined) {
            hasAnyValues = true;
            internalValueResult.codesToRemove = this._codesToRemove;
        }
        if (this._elementId !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementId = this._elementId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: X12CodeListValidationRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._codesToAdd = undefined;
            this._codesToRemove = undefined;
            this._elementId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._codesToAdd = value.codesToAdd;
            this._codesToRemove = value.codesToRemove;
            this._elementId = value.elementId;
        }
    }

    // codes_to_add - computed: true, optional: true, required: false
    private _codesToAdd?: string[]; 
    public get codesToAdd() {
        return this.getListAttribute('codes_to_add');
    }
    public set codesToAdd(value: string[]) {
        this._codesToAdd = value;
    }
    public resetCodesToAdd() {
        this._codesToAdd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codesToAddInput() {
        return this._codesToAdd;
    }

    // codes_to_remove - computed: true, optional: true, required: false
    private _codesToRemove?: string[]; 
    public get codesToRemove() {
        return this.getListAttribute('codes_to_remove');
    }
    public set codesToRemove(value: string[]) {
        this._codesToRemove = value;
    }
    public resetCodesToRemove() {
        this._codesToRemove = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codesToRemoveInput() {
        return this._codesToRemove;
    }

    // element_id - computed: true, optional: true, required: false
    private _elementId?: string; 
    public get elementId() {
        return this.getStringAttribute('element_id');
    }
    public set elementId(value: string) {
        this._elementId = value;
    }
    public resetElementId() {
        this._elementId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elementIdInput() {
        return this._elementId;
    }
}
export interface X12ElementLengthValidationRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id CcTransformer#element_id}
    */
    readonly elementId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#max_length CcTransformer#max_length}
    */
    readonly maxLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#min_length CcTransformer#min_length}
    */
    readonly minLength?: number;
}
export class X12ElementLengthValidationRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): X12ElementLengthValidationRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._elementId !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementId = this._elementId;
        }
        if (this._maxLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxLength = this._maxLength;
        }
        if (this._minLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.minLength = this._minLength;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: X12ElementLengthValidationRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._elementId = undefined;
            this._maxLength = undefined;
            this._minLength = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._elementId = value.elementId;
            this._maxLength = value.maxLength;
            this._minLength = value.minLength;
        }
    }

    // element_id - computed: true, optional: true, required: false
    private _elementId?: string; 
    public get elementId() {
        return this.getStringAttribute('element_id');
    }
    public set elementId(value: string) {
        this._elementId = value;
    }
    public resetElementId() {
        this._elementId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elementIdInput() {
        return this._elementId;
    }

    // max_length - computed: true, optional: true, required: false
    private _maxLength?: number; 
    public get maxLength() {
        return this.getNumberAttribute('max_length');
    }
    public set maxLength(value: number) {
        this._maxLength = value;
    }
    public resetMaxLength() {
        this._maxLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxLengthInput() {
        return this._maxLength;
    }

    // min_length - computed: true, optional: true, required: false
    private _minLength?: number; 
    public get minLength() {
        return this.getNumberAttribute('min_length');
    }
    public set minLength(value: number) {
        this._minLength = value;
    }
    public resetMinLength() {
        this._minLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minLengthInput() {
        return this._minLength;
    }
}
export interface X12ElementRequirementValidationRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_position CcTransformer#element_position}
    */
    readonly elementPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#requirement CcTransformer#requirement}
    */
    readonly requirement?: string;
}
export class X12ElementRequirementValidationRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): X12ElementRequirementValidationRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._elementPosition !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementPosition = this._elementPosition;
        }
        if (this._requirement !== undefined) {
            hasAnyValues = true;
            internalValueResult.requirement = this._requirement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: X12ElementRequirementValidationRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._elementPosition = undefined;
            this._requirement = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._elementPosition = value.elementPosition;
            this._requirement = value.requirement;
        }
    }

    // element_position - computed: true, optional: true, required: false
    private _elementPosition?: string; 
    public get elementPosition() {
        return this.getStringAttribute('element_position');
    }
    public set elementPosition(value: string) {
        this._elementPosition = value;
    }
    public resetElementPosition() {
        this._elementPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elementPositionInput() {
        return this._elementPosition;
    }

    // requirement - computed: true, optional: true, required: false
    private _requirement?: string; 
    public get requirement() {
        return this.getStringAttribute('requirement');
    }
    public set requirement(value: string) {
        this._requirement = value;
    }
    public resetRequirement() {
        this._requirement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requirementInput() {
        return this._requirement;
    }
}
export interface X12ValidationRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#code_list_validation_rule CcTransformer#code_list_validation_rule}
    */
    readonly codeListValidationRule?: X12CodeListValidationRuleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_length_validation_rule CcTransformer#element_length_validation_rule}
    */
    readonly elementLengthValidationRule?: X12ElementLengthValidationRuleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_requirement_validation_rule CcTransformer#element_requirement_validation_rule}
    */
    readonly elementRequirementValidationRule?: X12ElementRequirementValidationRuleProperty;
}
export class X12ValidationRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): X12ValidationRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._codeListValidationRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeListValidationRule = this._codeListValidationRule?.internalValue;
        }
        if (this._elementLengthValidationRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementLengthValidationRule = this._elementLengthValidationRule?.internalValue;
        }
        if (this._elementRequirementValidationRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementRequirementValidationRule = this._elementRequirementValidationRule?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: X12ValidationRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._codeListValidationRule.internalValue = undefined;
            this._elementLengthValidationRule.internalValue = undefined;
            this._elementRequirementValidationRule.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._codeListValidationRule.internalValue = value.codeListValidationRule;
            this._elementLengthValidationRule.internalValue = value.elementLengthValidationRule;
            this._elementRequirementValidationRule.internalValue = value.elementRequirementValidationRule;
        }
    }

    // code_list_validation_rule - computed: true, optional: true, required: false
    private _codeListValidationRule = new X12CodeListValidationRulePropertyOutputReference(this, "code_list_validation_rule");
    public get codeListValidationRule() {
        return this._codeListValidationRule;
    }
    public putCodeListValidationRule(value: X12CodeListValidationRuleProperty) {
        this._codeListValidationRule.internalValue = value;
    }
    public resetCodeListValidationRule() {
        this._codeListValidationRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeListValidationRuleInput() {
        return this._codeListValidationRule.internalValue;
    }

    // element_length_validation_rule - computed: true, optional: true, required: false
    private _elementLengthValidationRule = new X12ElementLengthValidationRulePropertyOutputReference(this, "element_length_validation_rule");
    public get elementLengthValidationRule() {
        return this._elementLengthValidationRule;
    }
    public putElementLengthValidationRule(value: X12ElementLengthValidationRuleProperty) {
        this._elementLengthValidationRule.internalValue = value;
    }
    public resetElementLengthValidationRule() {
        this._elementLengthValidationRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elementLengthValidationRuleInput() {
        return this._elementLengthValidationRule.internalValue;
    }

    // element_requirement_validation_rule - computed: true, optional: true, required: false
    private _elementRequirementValidationRule = new X12ElementRequirementValidationRulePropertyOutputReference(this, "element_requirement_validation_rule");
    public get elementRequirementValidationRule() {
        return this._elementRequirementValidationRule;
    }
    public putElementRequirementValidationRule(value: X12ElementRequirementValidationRuleProperty) {
        this._elementRequirementValidationRule.internalValue = value;
    }
    public resetElementRequirementValidationRule() {
        this._elementRequirementValidationRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elementRequirementValidationRuleInput() {
        return this._elementRequirementValidationRule.internalValue;
    }
}

export class X12ValidationRulePropertyList extends cdktn.ComplexList {
    public internalValue? : X12ValidationRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): X12ValidationRulePropertyOutputReference {
        return new X12ValidationRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface X12ValidationOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_rules CcTransformer#validation_rules}
    */
    readonly validationRules?: X12ValidationRuleProperty[] | cdktn.IResolvable;
}
export class X12ValidationOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): X12ValidationOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._validationRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationRules = this._validationRules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: X12ValidationOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._validationRules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._validationRules.internalValue = value.validationRules;
        }
    }

    // validation_rules - computed: true, optional: true, required: false
    private _validationRules = new X12ValidationRulePropertyList(this, "validation_rules", false);
    public get validationRules() {
        return this._validationRules;
    }
    public putValidationRules(value: X12ValidationRuleProperty[] | cdktn.IResolvable) {
        this._validationRules.internalValue = value;
    }
    public resetValidationRules() {
        this._validationRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationRulesInput() {
        return this._validationRules.internalValue;
    }
}
export interface X12AdvancedOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_options CcTransformer#split_options}
    */
    readonly splitOptions?: X12SplitOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_options CcTransformer#validation_options}
    */
    readonly validationOptions?: X12ValidationOptionsProperty;
}
export class X12AdvancedOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): X12AdvancedOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._splitOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.splitOptions = this._splitOptions?.internalValue;
        }
        if (this._validationOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationOptions = this._validationOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: X12AdvancedOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._splitOptions.internalValue = undefined;
            this._validationOptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._splitOptions.internalValue = value.splitOptions;
            this._validationOptions.internalValue = value.validationOptions;
        }
    }

    // split_options - computed: true, optional: true, required: false
    private _splitOptions = new X12SplitOptionsPropertyOutputReference(this, "split_options");
    public get splitOptions() {
        return this._splitOptions;
    }
    public putSplitOptions(value: X12SplitOptionsProperty) {
        this._splitOptions.internalValue = value;
    }
    public resetSplitOptions() {
        this._splitOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get splitOptionsInput() {
        return this._splitOptions.internalValue;
    }

    // validation_options - computed: true, optional: true, required: false
    private _validationOptions = new X12ValidationOptionsPropertyOutputReference(this, "validation_options");
    public get validationOptions() {
        return this._validationOptions;
    }
    public putValidationOptions(value: X12ValidationOptionsProperty) {
        this._validationOptions.internalValue = value;
    }
    public resetValidationOptions() {
        this._validationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationOptionsInput() {
        return this._validationOptions.internalValue;
    }
}
export interface AdvancedOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 CcTransformer#x12}
    */
    readonly x12?: X12AdvancedOptionsProperty;
}
export class AdvancedOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdvancedOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._x12?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.x12 = this._x12?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdvancedOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._x12.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._x12.internalValue = value.x12;
        }
    }

    // x12 - computed: true, optional: true, required: false
    private _x12 = new X12AdvancedOptionsPropertyOutputReference(this, "x12");
    public get x12() {
        return this._x12;
    }
    public putX12(value: X12AdvancedOptionsProperty) {
        this._x12.internalValue = value;
    }
    public resetX12() {
        this._x12.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get x12Input() {
        return this._x12.internalValue;
    }
}
export interface InputConversionFormatOptionsX12Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set CcTransformer#transaction_set}
    */
    readonly transactionSet?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version CcTransformer#version}
    */
    readonly version?: string;
}
export class InputConversionFormatOptionsX12PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputConversionFormatOptionsX12Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._transactionSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.transactionSet = this._transactionSet;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputConversionFormatOptionsX12Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._transactionSet = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._transactionSet = value.transactionSet;
            this._version = value.version;
        }
    }

    // transaction_set - computed: true, optional: true, required: false
    private _transactionSet?: string; 
    public get transactionSet() {
        return this.getStringAttribute('transaction_set');
    }
    public set transactionSet(value: string) {
        this._transactionSet = value;
    }
    public resetTransactionSet() {
        this._transactionSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transactionSetInput() {
        return this._transactionSet;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface FormatOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 CcTransformer#x12}
    */
    readonly x12?: InputConversionFormatOptionsX12Property;
}
export class FormatOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FormatOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._x12?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.x12 = this._x12?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FormatOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._x12.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._x12.internalValue = value.x12;
        }
    }

    // x12 - computed: true, optional: true, required: false
    private _x12 = new InputConversionFormatOptionsX12PropertyOutputReference(this, "x12");
    public get x12() {
        return this._x12;
    }
    public putX12(value: InputConversionFormatOptionsX12Property) {
        this._x12.internalValue = value;
    }
    public resetX12() {
        this._x12.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get x12Input() {
        return this._x12.internalValue;
    }
}
export interface InputConversionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#advanced_options CcTransformer#advanced_options}
    */
    readonly advancedOptions?: AdvancedOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#format_options CcTransformer#format_options}
    */
    readonly formatOptions?: FormatOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#from_format CcTransformer#from_format}
    */
    readonly fromFormat?: string;
}
export class InputConversionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputConversionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._advancedOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
        }
        if (this._formatOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.formatOptions = this._formatOptions?.internalValue;
        }
        if (this._fromFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromFormat = this._fromFormat;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputConversionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._advancedOptions.internalValue = undefined;
            this._formatOptions.internalValue = undefined;
            this._fromFormat = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._advancedOptions.internalValue = value.advancedOptions;
            this._formatOptions.internalValue = value.formatOptions;
            this._fromFormat = value.fromFormat;
        }
    }

    // advanced_options - computed: true, optional: true, required: false
    private _advancedOptions = new AdvancedOptionsPropertyOutputReference(this, "advanced_options");
    public get advancedOptions() {
        return this._advancedOptions;
    }
    public putAdvancedOptions(value: AdvancedOptionsProperty) {
        this._advancedOptions.internalValue = value;
    }
    public resetAdvancedOptions() {
        this._advancedOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedOptionsInput() {
        return this._advancedOptions.internalValue;
    }

    // format_options - computed: true, optional: true, required: false
    private _formatOptions = new FormatOptionsPropertyOutputReference(this, "format_options");
    public get formatOptions() {
        return this._formatOptions;
    }
    public putFormatOptions(value: FormatOptionsProperty) {
        this._formatOptions.internalValue = value;
    }
    public resetFormatOptions() {
        this._formatOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatOptionsInput() {
        return this._formatOptions.internalValue;
    }

    // from_format - computed: true, optional: true, required: false
    private _fromFormat?: string; 
    public get fromFormat() {
        return this.getStringAttribute('from_format');
    }
    public set fromFormat(value: string) {
        this._fromFormat = value;
    }
    public resetFromFormat() {
        this._fromFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromFormatInput() {
        return this._fromFormat;
    }
}
export interface MappingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#template CcTransformer#template}
    */
    readonly template?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#template_language CcTransformer#template_language}
    */
    readonly templateLanguage?: string;
}
export class MappingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._template !== undefined) {
            hasAnyValues = true;
            internalValueResult.template = this._template;
        }
        if (this._templateLanguage !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateLanguage = this._templateLanguage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._template = undefined;
            this._templateLanguage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._template = value.template;
            this._templateLanguage = value.templateLanguage;
        }
    }

    // template - computed: true, optional: true, required: false
    private _template?: string; 
    public get template() {
        return this.getStringAttribute('template');
    }
    public set template(value: string) {
        this._template = value;
    }
    public resetTemplate() {
        this._template = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateInput() {
        return this._template;
    }

    // template_language - computed: true, optional: true, required: false
    private _templateLanguage?: string; 
    public get templateLanguage() {
        return this.getStringAttribute('template_language');
    }
    public set templateLanguage(value: string) {
        this._templateLanguage = value;
    }
    public resetTemplateLanguage() {
        this._templateLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateLanguageInput() {
        return this._templateLanguage;
    }
}
export interface SplitOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_by CcTransformer#split_by}
    */
    readonly splitBy?: string;
}
export class SplitOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SplitOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._splitBy !== undefined) {
            hasAnyValues = true;
            internalValueResult.splitBy = this._splitBy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SplitOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._splitBy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._splitBy = value.splitBy;
        }
    }

    // split_by - computed: true, optional: true, required: false
    private _splitBy?: string; 
    public get splitBy() {
        return this.getStringAttribute('split_by');
    }
    public set splitBy(value: string) {
        this._splitBy = value;
    }
    public resetSplitBy() {
        this._splitBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get splitByInput() {
        return this._splitBy;
    }
}
export interface CodeListValidationRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_add CcTransformer#codes_to_add}
    */
    readonly codesToAdd?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_remove CcTransformer#codes_to_remove}
    */
    readonly codesToRemove?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id CcTransformer#element_id}
    */
    readonly elementId?: string;
}
export class CodeListValidationRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeListValidationRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._codesToAdd !== undefined) {
            hasAnyValues = true;
            internalValueResult.codesToAdd = this._codesToAdd;
        }
        if (this._codesToRemove !== undefined) {
            hasAnyValues = true;
            internalValueResult.codesToRemove = this._codesToRemove;
        }
        if (this._elementId !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementId = this._elementId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeListValidationRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._codesToAdd = undefined;
            this._codesToRemove = undefined;
            this._elementId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._codesToAdd = value.codesToAdd;
            this._codesToRemove = value.codesToRemove;
            this._elementId = value.elementId;
        }
    }

    // codes_to_add - computed: true, optional: true, required: false
    private _codesToAdd?: string[]; 
    public get codesToAdd() {
        return this.getListAttribute('codes_to_add');
    }
    public set codesToAdd(value: string[]) {
        this._codesToAdd = value;
    }
    public resetCodesToAdd() {
        this._codesToAdd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codesToAddInput() {
        return this._codesToAdd;
    }

    // codes_to_remove - computed: true, optional: true, required: false
    private _codesToRemove?: string[]; 
    public get codesToRemove() {
        return this.getListAttribute('codes_to_remove');
    }
    public set codesToRemove(value: string[]) {
        this._codesToRemove = value;
    }
    public resetCodesToRemove() {
        this._codesToRemove = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codesToRemoveInput() {
        return this._codesToRemove;
    }

    // element_id - computed: true, optional: true, required: false
    private _elementId?: string; 
    public get elementId() {
        return this.getStringAttribute('element_id');
    }
    public set elementId(value: string) {
        this._elementId = value;
    }
    public resetElementId() {
        this._elementId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elementIdInput() {
        return this._elementId;
    }
}
export interface ElementLengthValidationRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id CcTransformer#element_id}
    */
    readonly elementId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#max_length CcTransformer#max_length}
    */
    readonly maxLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#min_length CcTransformer#min_length}
    */
    readonly minLength?: number;
}
export class ElementLengthValidationRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ElementLengthValidationRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._elementId !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementId = this._elementId;
        }
        if (this._maxLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxLength = this._maxLength;
        }
        if (this._minLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.minLength = this._minLength;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ElementLengthValidationRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._elementId = undefined;
            this._maxLength = undefined;
            this._minLength = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._elementId = value.elementId;
            this._maxLength = value.maxLength;
            this._minLength = value.minLength;
        }
    }

    // element_id - computed: true, optional: true, required: false
    private _elementId?: string; 
    public get elementId() {
        return this.getStringAttribute('element_id');
    }
    public set elementId(value: string) {
        this._elementId = value;
    }
    public resetElementId() {
        this._elementId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elementIdInput() {
        return this._elementId;
    }

    // max_length - computed: true, optional: true, required: false
    private _maxLength?: number; 
    public get maxLength() {
        return this.getNumberAttribute('max_length');
    }
    public set maxLength(value: number) {
        this._maxLength = value;
    }
    public resetMaxLength() {
        this._maxLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxLengthInput() {
        return this._maxLength;
    }

    // min_length - computed: true, optional: true, required: false
    private _minLength?: number; 
    public get minLength() {
        return this.getNumberAttribute('min_length');
    }
    public set minLength(value: number) {
        this._minLength = value;
    }
    public resetMinLength() {
        this._minLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minLengthInput() {
        return this._minLength;
    }
}
export interface ElementRequirementValidationRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_position CcTransformer#element_position}
    */
    readonly elementPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#requirement CcTransformer#requirement}
    */
    readonly requirement?: string;
}
export class ElementRequirementValidationRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ElementRequirementValidationRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._elementPosition !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementPosition = this._elementPosition;
        }
        if (this._requirement !== undefined) {
            hasAnyValues = true;
            internalValueResult.requirement = this._requirement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ElementRequirementValidationRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._elementPosition = undefined;
            this._requirement = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._elementPosition = value.elementPosition;
            this._requirement = value.requirement;
        }
    }

    // element_position - computed: true, optional: true, required: false
    private _elementPosition?: string; 
    public get elementPosition() {
        return this.getStringAttribute('element_position');
    }
    public set elementPosition(value: string) {
        this._elementPosition = value;
    }
    public resetElementPosition() {
        this._elementPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elementPositionInput() {
        return this._elementPosition;
    }

    // requirement - computed: true, optional: true, required: false
    private _requirement?: string; 
    public get requirement() {
        return this.getStringAttribute('requirement');
    }
    public set requirement(value: string) {
        this._requirement = value;
    }
    public resetRequirement() {
        this._requirement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requirementInput() {
        return this._requirement;
    }
}
export interface ValidationRulesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#code_list_validation_rule CcTransformer#code_list_validation_rule}
    */
    readonly codeListValidationRule?: CodeListValidationRuleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_length_validation_rule CcTransformer#element_length_validation_rule}
    */
    readonly elementLengthValidationRule?: ElementLengthValidationRuleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_requirement_validation_rule CcTransformer#element_requirement_validation_rule}
    */
    readonly elementRequirementValidationRule?: ElementRequirementValidationRuleProperty;
}
export class ValidationRulesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ValidationRulesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._codeListValidationRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeListValidationRule = this._codeListValidationRule?.internalValue;
        }
        if (this._elementLengthValidationRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementLengthValidationRule = this._elementLengthValidationRule?.internalValue;
        }
        if (this._elementRequirementValidationRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.elementRequirementValidationRule = this._elementRequirementValidationRule?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidationRulesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._codeListValidationRule.internalValue = undefined;
            this._elementLengthValidationRule.internalValue = undefined;
            this._elementRequirementValidationRule.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._codeListValidationRule.internalValue = value.codeListValidationRule;
            this._elementLengthValidationRule.internalValue = value.elementLengthValidationRule;
            this._elementRequirementValidationRule.internalValue = value.elementRequirementValidationRule;
        }
    }

    // code_list_validation_rule - computed: true, optional: true, required: false
    private _codeListValidationRule = new CodeListValidationRulePropertyOutputReference(this, "code_list_validation_rule");
    public get codeListValidationRule() {
        return this._codeListValidationRule;
    }
    public putCodeListValidationRule(value: CodeListValidationRuleProperty) {
        this._codeListValidationRule.internalValue = value;
    }
    public resetCodeListValidationRule() {
        this._codeListValidationRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeListValidationRuleInput() {
        return this._codeListValidationRule.internalValue;
    }

    // element_length_validation_rule - computed: true, optional: true, required: false
    private _elementLengthValidationRule = new ElementLengthValidationRulePropertyOutputReference(this, "element_length_validation_rule");
    public get elementLengthValidationRule() {
        return this._elementLengthValidationRule;
    }
    public putElementLengthValidationRule(value: ElementLengthValidationRuleProperty) {
        this._elementLengthValidationRule.internalValue = value;
    }
    public resetElementLengthValidationRule() {
        this._elementLengthValidationRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elementLengthValidationRuleInput() {
        return this._elementLengthValidationRule.internalValue;
    }

    // element_requirement_validation_rule - computed: true, optional: true, required: false
    private _elementRequirementValidationRule = new ElementRequirementValidationRulePropertyOutputReference(this, "element_requirement_validation_rule");
    public get elementRequirementValidationRule() {
        return this._elementRequirementValidationRule;
    }
    public putElementRequirementValidationRule(value: ElementRequirementValidationRuleProperty) {
        this._elementRequirementValidationRule.internalValue = value;
    }
    public resetElementRequirementValidationRule() {
        this._elementRequirementValidationRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elementRequirementValidationRuleInput() {
        return this._elementRequirementValidationRule.internalValue;
    }
}

export class ValidationRulesPropertyList extends cdktn.ComplexList {
    public internalValue? : ValidationRulesProperty[] | cdktn.IResolvable

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
    public get(index: number): ValidationRulesPropertyOutputReference {
        return new ValidationRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ValidationOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_rules CcTransformer#validation_rules}
    */
    readonly validationRules?: ValidationRulesProperty[] | cdktn.IResolvable;
}
export class ValidationOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValidationOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._validationRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationRules = this._validationRules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidationOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._validationRules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._validationRules.internalValue = value.validationRules;
        }
    }

    // validation_rules - computed: true, optional: true, required: false
    private _validationRules = new ValidationRulesPropertyList(this, "validation_rules", false);
    public get validationRules() {
        return this._validationRules;
    }
    public putValidationRules(value: ValidationRulesProperty[] | cdktn.IResolvable) {
        this._validationRules.internalValue = value;
    }
    public resetValidationRules() {
        this._validationRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationRulesInput() {
        return this._validationRules.internalValue;
    }
}
export interface OutputConversionAdvancedOptionsX12Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_options CcTransformer#split_options}
    */
    readonly splitOptions?: SplitOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_options CcTransformer#validation_options}
    */
    readonly validationOptions?: ValidationOptionsProperty;
}
export class OutputConversionAdvancedOptionsX12PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutputConversionAdvancedOptionsX12Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._splitOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.splitOptions = this._splitOptions?.internalValue;
        }
        if (this._validationOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationOptions = this._validationOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputConversionAdvancedOptionsX12Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._splitOptions.internalValue = undefined;
            this._validationOptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._splitOptions.internalValue = value.splitOptions;
            this._validationOptions.internalValue = value.validationOptions;
        }
    }

    // split_options - computed: true, optional: true, required: false
    private _splitOptions = new SplitOptionsPropertyOutputReference(this, "split_options");
    public get splitOptions() {
        return this._splitOptions;
    }
    public putSplitOptions(value: SplitOptionsProperty) {
        this._splitOptions.internalValue = value;
    }
    public resetSplitOptions() {
        this._splitOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get splitOptionsInput() {
        return this._splitOptions.internalValue;
    }

    // validation_options - computed: true, optional: true, required: false
    private _validationOptions = new ValidationOptionsPropertyOutputReference(this, "validation_options");
    public get validationOptions() {
        return this._validationOptions;
    }
    public putValidationOptions(value: ValidationOptionsProperty) {
        this._validationOptions.internalValue = value;
    }
    public resetValidationOptions() {
        this._validationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationOptionsInput() {
        return this._validationOptions.internalValue;
    }
}
export interface OutputConversionAdvancedOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 CcTransformer#x12}
    */
    readonly x12?: OutputConversionAdvancedOptionsX12Property;
}
export class OutputConversionAdvancedOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutputConversionAdvancedOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._x12?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.x12 = this._x12?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputConversionAdvancedOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._x12.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._x12.internalValue = value.x12;
        }
    }

    // x12 - computed: true, optional: true, required: false
    private _x12 = new OutputConversionAdvancedOptionsX12PropertyOutputReference(this, "x12");
    public get x12() {
        return this._x12;
    }
    public putX12(value: OutputConversionAdvancedOptionsX12Property) {
        this._x12.internalValue = value;
    }
    public resetX12() {
        this._x12.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get x12Input() {
        return this._x12.internalValue;
    }
}
export interface OutputConversionFormatOptionsX12Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set CcTransformer#transaction_set}
    */
    readonly transactionSet?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version CcTransformer#version}
    */
    readonly version?: string;
}
export class OutputConversionFormatOptionsX12PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutputConversionFormatOptionsX12Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._transactionSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.transactionSet = this._transactionSet;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputConversionFormatOptionsX12Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._transactionSet = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._transactionSet = value.transactionSet;
            this._version = value.version;
        }
    }

    // transaction_set - computed: true, optional: true, required: false
    private _transactionSet?: string; 
    public get transactionSet() {
        return this.getStringAttribute('transaction_set');
    }
    public set transactionSet(value: string) {
        this._transactionSet = value;
    }
    public resetTransactionSet() {
        this._transactionSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transactionSetInput() {
        return this._transactionSet;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface OutputConversionFormatOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 CcTransformer#x12}
    */
    readonly x12?: OutputConversionFormatOptionsX12Property;
}
export class OutputConversionFormatOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutputConversionFormatOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._x12?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.x12 = this._x12?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputConversionFormatOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._x12.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._x12.internalValue = value.x12;
        }
    }

    // x12 - computed: true, optional: true, required: false
    private _x12 = new OutputConversionFormatOptionsX12PropertyOutputReference(this, "x12");
    public get x12() {
        return this._x12;
    }
    public putX12(value: OutputConversionFormatOptionsX12Property) {
        this._x12.internalValue = value;
    }
    public resetX12() {
        this._x12.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get x12Input() {
        return this._x12.internalValue;
    }
}
export interface OutputConversionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#advanced_options CcTransformer#advanced_options}
    */
    readonly advancedOptions?: OutputConversionAdvancedOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#format_options CcTransformer#format_options}
    */
    readonly formatOptions?: OutputConversionFormatOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#to_format CcTransformer#to_format}
    */
    readonly toFormat?: string;
}
export class OutputConversionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutputConversionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._advancedOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
        }
        if (this._formatOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.formatOptions = this._formatOptions?.internalValue;
        }
        if (this._toFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.toFormat = this._toFormat;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputConversionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._advancedOptions.internalValue = undefined;
            this._formatOptions.internalValue = undefined;
            this._toFormat = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._advancedOptions.internalValue = value.advancedOptions;
            this._formatOptions.internalValue = value.formatOptions;
            this._toFormat = value.toFormat;
        }
    }

    // advanced_options - computed: true, optional: true, required: false
    private _advancedOptions = new OutputConversionAdvancedOptionsPropertyOutputReference(this, "advanced_options");
    public get advancedOptions() {
        return this._advancedOptions;
    }
    public putAdvancedOptions(value: OutputConversionAdvancedOptionsProperty) {
        this._advancedOptions.internalValue = value;
    }
    public resetAdvancedOptions() {
        this._advancedOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedOptionsInput() {
        return this._advancedOptions.internalValue;
    }

    // format_options - computed: true, optional: true, required: false
    private _formatOptions = new OutputConversionFormatOptionsPropertyOutputReference(this, "format_options");
    public get formatOptions() {
        return this._formatOptions;
    }
    public putFormatOptions(value: OutputConversionFormatOptionsProperty) {
        this._formatOptions.internalValue = value;
    }
    public resetFormatOptions() {
        this._formatOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatOptionsInput() {
        return this._formatOptions.internalValue;
    }

    // to_format - computed: true, optional: true, required: false
    private _toFormat?: string; 
    public get toFormat() {
        return this.getStringAttribute('to_format');
    }
    public set toFormat(value: string) {
        this._toFormat = value;
    }
    public resetToFormat() {
        this._toFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toFormatInput() {
        return this._toFormat;
    }
}
export interface SampleDocumentKeysProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#input CcTransformer#input}
    */
    readonly input?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#output CcTransformer#output}
    */
    readonly output?: string;
}
export class SampleDocumentKeysPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SampleDocumentKeysProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._input !== undefined) {
            hasAnyValues = true;
            internalValueResult.input = this._input;
        }
        if (this._output !== undefined) {
            hasAnyValues = true;
            internalValueResult.output = this._output;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SampleDocumentKeysProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._input = undefined;
            this._output = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._input = value.input;
            this._output = value.output;
        }
    }

    // input - computed: true, optional: true, required: false
    private _input?: string; 
    public get input() {
        return this.getStringAttribute('input');
    }
    public set input(value: string) {
        this._input = value;
    }
    public resetInput() {
        this._input = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputInput() {
        return this._input;
    }

    // output - computed: true, optional: true, required: false
    private _output?: string; 
    public get output() {
        return this.getStringAttribute('output');
    }
    public set output(value: string) {
        this._output = value;
    }
    public resetOutput() {
        this._output = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputInput() {
        return this._output;
    }
}

export class SampleDocumentKeysPropertyList extends cdktn.ComplexList {
    public internalValue? : SampleDocumentKeysProperty[] | cdktn.IResolvable

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
    public get(index: number): SampleDocumentKeysPropertyOutputReference {
        return new SampleDocumentKeysPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SampleDocumentsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#bucket_name CcTransformer#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#keys CcTransformer#keys}
    */
    readonly keys?: SampleDocumentKeysProperty[] | cdktn.IResolvable;
}
export class SampleDocumentsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SampleDocumentsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._keys?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keys = this._keys?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SampleDocumentsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._keys.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._keys.internalValue = value.keys;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // keys - computed: true, optional: true, required: false
    private _keys = new SampleDocumentKeysPropertyList(this, "keys", false);
    public get keys() {
        return this._keys;
    }
    public putKeys(value: SampleDocumentKeysProperty[] | cdktn.IResolvable) {
        this._keys.internalValue = value;
    }
    public resetKeys() {
        this._keys.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keysInput() {
        return this._keys.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#key CcTransformer#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#value CcTransformer#value}
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
