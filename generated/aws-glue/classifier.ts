// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClassifierProps extends cdktn.TerraformMetaArguments {
    /**
    * A classifier for comma-separated values (CSV).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#csv_classifier CcClassifier#csv_classifier}
    */
    readonly csvClassifier?: CcClassifier.CsvClassifierProperty;
    /**
    * A classifier that uses grok.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#grok_classifier CcClassifier#grok_classifier}
    */
    readonly grokClassifier?: CcClassifier.GrokClassifierProperty;
    /**
    * A classifier for JSON content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#json_classifier CcClassifier#json_classifier}
    */
    readonly jsonClassifier?: CcClassifier.JsonClassifierProperty;
    /**
    * A classifier for XML content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#xml_classifier CcClassifier#xml_classifier}
    */
    readonly xmlClassifier?: CcClassifier.XMLClassifierProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier awscc_glue_classifier}
*/
export class CcClassifier extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_classifier";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcClassifier resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcClassifier to import
    * @param importFromId The id of the existing CcClassifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcClassifier to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_classifier", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier awscc_glue_classifier} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClassifierProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcClassifierProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_classifier',
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
        this._csvClassifier.internalValue = config.csvClassifier;
        this._grokClassifier.internalValue = config.grokClassifier;
        this._jsonClassifier.internalValue = config.jsonClassifier;
        this._xmlClassifier.internalValue = config.xmlClassifier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // csv_classifier - computed: true, optional: true, required: false
    private _csvClassifier = new CcClassifier.CsvClassifierPropertyOutputReference(this, "csv_classifier");
    public get csvClassifier() {
        return this._csvClassifier;
    }
    public putCsvClassifier(value: CcClassifier.CsvClassifierProperty) {
        this._csvClassifier.internalValue = value;
    }
    public resetCsvClassifier() {
        this._csvClassifier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvClassifierInput() {
        return this._csvClassifier.internalValue;
    }

    // grok_classifier - computed: true, optional: true, required: false
    private _grokClassifier = new CcClassifier.GrokClassifierPropertyOutputReference(this, "grok_classifier");
    public get grokClassifier() {
        return this._grokClassifier;
    }
    public putGrokClassifier(value: CcClassifier.GrokClassifierProperty) {
        this._grokClassifier.internalValue = value;
    }
    public resetGrokClassifier() {
        this._grokClassifier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grokClassifierInput() {
        return this._grokClassifier.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // json_classifier - computed: true, optional: true, required: false
    private _jsonClassifier = new CcClassifier.JsonClassifierPropertyOutputReference(this, "json_classifier");
    public get jsonClassifier() {
        return this._jsonClassifier;
    }
    public putJsonClassifier(value: CcClassifier.JsonClassifierProperty) {
        this._jsonClassifier.internalValue = value;
    }
    public resetJsonClassifier() {
        this._jsonClassifier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonClassifierInput() {
        return this._jsonClassifier.internalValue;
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // xml_classifier - computed: true, optional: true, required: false
    private _xmlClassifier = new CcClassifier.XMLClassifierPropertyOutputReference(this, "xml_classifier");
    public get xmlClassifier() {
        return this._xmlClassifier;
    }
    public putXmlClassifier(value: CcClassifier.XMLClassifierProperty) {
        this._xmlClassifier.internalValue = value;
    }
    public resetXmlClassifier() {
        this._xmlClassifier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get xmlClassifierInput() {
        return this._xmlClassifier.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            csv_classifier: ccClassifierCsvClassifierPropertyToTerraform(this._csvClassifier.internalValue),
            grok_classifier: ccClassifierGrokClassifierPropertyToTerraform(this._grokClassifier.internalValue),
            json_classifier: ccClassifierJsonClassifierPropertyToTerraform(this._jsonClassifier.internalValue),
            xml_classifier: ccClassifierXMLClassifierPropertyToTerraform(this._xmlClassifier.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            csv_classifier: {
                value: ccClassifierCsvClassifierPropertyToHclTerraform(this._csvClassifier.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcClassifier.CsvClassifierProperty",
            },
            grok_classifier: {
                value: ccClassifierGrokClassifierPropertyToHclTerraform(this._grokClassifier.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcClassifier.GrokClassifierProperty",
            },
            json_classifier: {
                value: ccClassifierJsonClassifierPropertyToHclTerraform(this._jsonClassifier.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcClassifier.JsonClassifierProperty",
            },
            xml_classifier: {
                value: ccClassifierXMLClassifierPropertyToHclTerraform(this._xmlClassifier.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcClassifier.XMLClassifierProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccClassifierCsvClassifierPropertyToTerraform(struct?: CcClassifier.CsvClassifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allow_single_column: cdktn.booleanToTerraform(struct!.allowSingleColumn),
        contains_custom_datatype: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containsCustomDatatype),
        contains_header: cdktn.stringToTerraform(struct!.containsHeader),
        custom_datatype_configured: cdktn.booleanToTerraform(struct!.customDatatypeConfigured),
        delimiter: cdktn.stringToTerraform(struct!.delimiter),
        disable_value_trimming: cdktn.booleanToTerraform(struct!.disableValueTrimming),
        header: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.header),
        name: cdktn.stringToTerraform(struct!.name),
        quote_symbol: cdktn.stringToTerraform(struct!.quoteSymbol),
    }
}


export function ccClassifierCsvClassifierPropertyToHclTerraform(struct?: CcClassifier.CsvClassifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allow_single_column: {
            value: cdktn.booleanToHclTerraform(struct!.allowSingleColumn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        contains_custom_datatype: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containsCustomDatatype),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        contains_header: {
            value: cdktn.stringToHclTerraform(struct!.containsHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_datatype_configured: {
            value: cdktn.booleanToHclTerraform(struct!.customDatatypeConfigured),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        delimiter: {
            value: cdktn.stringToHclTerraform(struct!.delimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        disable_value_trimming: {
            value: cdktn.booleanToHclTerraform(struct!.disableValueTrimming),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        header: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.header),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        quote_symbol: {
            value: cdktn.stringToHclTerraform(struct!.quoteSymbol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClassifierGrokClassifierPropertyToTerraform(struct?: CcClassifier.GrokClassifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        classification: cdktn.stringToTerraform(struct!.classification),
        custom_patterns: cdktn.stringToTerraform(struct!.customPatterns),
        grok_pattern: cdktn.stringToTerraform(struct!.grokPattern),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccClassifierGrokClassifierPropertyToHclTerraform(struct?: CcClassifier.GrokClassifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        classification: {
            value: cdktn.stringToHclTerraform(struct!.classification),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_patterns: {
            value: cdktn.stringToHclTerraform(struct!.customPatterns),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        grok_pattern: {
            value: cdktn.stringToHclTerraform(struct!.grokPattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClassifierJsonClassifierPropertyToTerraform(struct?: CcClassifier.JsonClassifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_path: cdktn.stringToTerraform(struct!.jsonPath),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccClassifierJsonClassifierPropertyToHclTerraform(struct?: CcClassifier.JsonClassifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_path: {
            value: cdktn.stringToHclTerraform(struct!.jsonPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClassifierXMLClassifierPropertyToTerraform(struct?: CcClassifier.XMLClassifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        classification: cdktn.stringToTerraform(struct!.classification),
        name: cdktn.stringToTerraform(struct!.name),
        row_tag: cdktn.stringToTerraform(struct!.rowTag),
    }
}


export function ccClassifierXMLClassifierPropertyToHclTerraform(struct?: CcClassifier.XMLClassifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        classification: {
            value: cdktn.stringToHclTerraform(struct!.classification),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        row_tag: {
            value: cdktn.stringToHclTerraform(struct!.rowTag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcClassifier {
export interface CsvClassifierProperty {
    /**
    * Enables the processing of files that contain only one column.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#allow_single_column CcClassifier#allow_single_column}
    */
    readonly allowSingleColumn?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether the CSV file contains custom data types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#contains_custom_datatype CcClassifier#contains_custom_datatype}
    */
    readonly containsCustomDatatype?: string[];
    /**
    * Indicates whether the CSV file contains a header. A value of UNKNOWN specifies that the classifier will detect whether the CSV file contains headings. A value of PRESENT specifies that the CSV file contains headings. A value of ABSENT specifies that the CSV file does not contain headings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#contains_header CcClassifier#contains_header}
    */
    readonly containsHeader?: string;
    /**
    * Enables the configuration of custom data types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#custom_datatype_configured CcClassifier#custom_datatype_configured}
    */
    readonly customDatatypeConfigured?: boolean | cdktn.IResolvable;
    /**
    * A custom symbol to denote what separates each column entry in the row.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#delimiter CcClassifier#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Specifies not to trim values before identifying the type of column values. The default value is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#disable_value_trimming CcClassifier#disable_value_trimming}
    */
    readonly disableValueTrimming?: boolean | cdktn.IResolvable;
    /**
    * A list of strings representing column names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#header CcClassifier#header}
    */
    readonly header?: string[];
    /**
    * The name of the classifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#name CcClassifier#name}
    */
    readonly name?: string;
    /**
    * A custom symbol to denote what combines content into a single column value. It must be different from the column delimiter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#quote_symbol CcClassifier#quote_symbol}
    */
    readonly quoteSymbol?: string;
}
export class CsvClassifierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CsvClassifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowSingleColumn !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowSingleColumn = this._allowSingleColumn;
        }
        if (this._containsCustomDatatype !== undefined) {
            hasAnyValues = true;
            internalValueResult.containsCustomDatatype = this._containsCustomDatatype;
        }
        if (this._containsHeader !== undefined) {
            hasAnyValues = true;
            internalValueResult.containsHeader = this._containsHeader;
        }
        if (this._customDatatypeConfigured !== undefined) {
            hasAnyValues = true;
            internalValueResult.customDatatypeConfigured = this._customDatatypeConfigured;
        }
        if (this._delimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.delimiter = this._delimiter;
        }
        if (this._disableValueTrimming !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableValueTrimming = this._disableValueTrimming;
        }
        if (this._header !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._quoteSymbol !== undefined) {
            hasAnyValues = true;
            internalValueResult.quoteSymbol = this._quoteSymbol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CsvClassifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowSingleColumn = undefined;
            this._containsCustomDatatype = undefined;
            this._containsHeader = undefined;
            this._customDatatypeConfigured = undefined;
            this._delimiter = undefined;
            this._disableValueTrimming = undefined;
            this._header = undefined;
            this._name = undefined;
            this._quoteSymbol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowSingleColumn = value.allowSingleColumn;
            this._containsCustomDatatype = value.containsCustomDatatype;
            this._containsHeader = value.containsHeader;
            this._customDatatypeConfigured = value.customDatatypeConfigured;
            this._delimiter = value.delimiter;
            this._disableValueTrimming = value.disableValueTrimming;
            this._header = value.header;
            this._name = value.name;
            this._quoteSymbol = value.quoteSymbol;
        }
    }

    // allow_single_column - computed: true, optional: true, required: false
    private _allowSingleColumn?: boolean | cdktn.IResolvable; 
    public get allowSingleColumn() {
        return this.getBooleanAttribute('allow_single_column');
    }
    public set allowSingleColumn(value: boolean | cdktn.IResolvable) {
        this._allowSingleColumn = value;
    }
    public resetAllowSingleColumn() {
        this._allowSingleColumn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowSingleColumnInput() {
        return this._allowSingleColumn;
    }

    // contains_custom_datatype - computed: true, optional: true, required: false
    private _containsCustomDatatype?: string[]; 
    public get containsCustomDatatype() {
        return this.getListAttribute('contains_custom_datatype');
    }
    public set containsCustomDatatype(value: string[]) {
        this._containsCustomDatatype = value;
    }
    public resetContainsCustomDatatype() {
        this._containsCustomDatatype = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containsCustomDatatypeInput() {
        return this._containsCustomDatatype;
    }

    // contains_header - computed: true, optional: true, required: false
    private _containsHeader?: string; 
    public get containsHeader() {
        return this.getStringAttribute('contains_header');
    }
    public set containsHeader(value: string) {
        this._containsHeader = value;
    }
    public resetContainsHeader() {
        this._containsHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containsHeaderInput() {
        return this._containsHeader;
    }

    // custom_datatype_configured - computed: true, optional: true, required: false
    private _customDatatypeConfigured?: boolean | cdktn.IResolvable; 
    public get customDatatypeConfigured() {
        return this.getBooleanAttribute('custom_datatype_configured');
    }
    public set customDatatypeConfigured(value: boolean | cdktn.IResolvable) {
        this._customDatatypeConfigured = value;
    }
    public resetCustomDatatypeConfigured() {
        this._customDatatypeConfigured = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDatatypeConfiguredInput() {
        return this._customDatatypeConfigured;
    }

    // delimiter - computed: true, optional: true, required: false
    private _delimiter?: string; 
    public get delimiter() {
        return this.getStringAttribute('delimiter');
    }
    public set delimiter(value: string) {
        this._delimiter = value;
    }
    public resetDelimiter() {
        this._delimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delimiterInput() {
        return this._delimiter;
    }

    // disable_value_trimming - computed: true, optional: true, required: false
    private _disableValueTrimming?: boolean | cdktn.IResolvable; 
    public get disableValueTrimming() {
        return this.getBooleanAttribute('disable_value_trimming');
    }
    public set disableValueTrimming(value: boolean | cdktn.IResolvable) {
        this._disableValueTrimming = value;
    }
    public resetDisableValueTrimming() {
        this._disableValueTrimming = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableValueTrimmingInput() {
        return this._disableValueTrimming;
    }

    // header - computed: true, optional: true, required: false
    private _header?: string[]; 
    public get header() {
        return this.getListAttribute('header');
    }
    public set header(value: string[]) {
        this._header = value;
    }
    public resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header;
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

    // quote_symbol - computed: true, optional: true, required: false
    private _quoteSymbol?: string; 
    public get quoteSymbol() {
        return this.getStringAttribute('quote_symbol');
    }
    public set quoteSymbol(value: string) {
        this._quoteSymbol = value;
    }
    public resetQuoteSymbol() {
        this._quoteSymbol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quoteSymbolInput() {
        return this._quoteSymbol;
    }
}
export interface GrokClassifierProperty {
    /**
    * An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#classification CcClassifier#classification}
    */
    readonly classification?: string;
    /**
    * Optional custom grok patterns defined by this classifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#custom_patterns CcClassifier#custom_patterns}
    */
    readonly customPatterns?: string;
    /**
    * The grok pattern applied to a data store by this classifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#grok_pattern CcClassifier#grok_pattern}
    */
    readonly grokPattern?: string;
    /**
    * The name of the classifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#name CcClassifier#name}
    */
    readonly name?: string;
}
export class GrokClassifierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GrokClassifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._classification !== undefined) {
            hasAnyValues = true;
            internalValueResult.classification = this._classification;
        }
        if (this._customPatterns !== undefined) {
            hasAnyValues = true;
            internalValueResult.customPatterns = this._customPatterns;
        }
        if (this._grokPattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.grokPattern = this._grokPattern;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GrokClassifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._classification = undefined;
            this._customPatterns = undefined;
            this._grokPattern = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._classification = value.classification;
            this._customPatterns = value.customPatterns;
            this._grokPattern = value.grokPattern;
            this._name = value.name;
        }
    }

    // classification - computed: true, optional: true, required: false
    private _classification?: string; 
    public get classification() {
        return this.getStringAttribute('classification');
    }
    public set classification(value: string) {
        this._classification = value;
    }
    public resetClassification() {
        this._classification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classificationInput() {
        return this._classification;
    }

    // custom_patterns - computed: true, optional: true, required: false
    private _customPatterns?: string; 
    public get customPatterns() {
        return this.getStringAttribute('custom_patterns');
    }
    public set customPatterns(value: string) {
        this._customPatterns = value;
    }
    public resetCustomPatterns() {
        this._customPatterns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customPatternsInput() {
        return this._customPatterns;
    }

    // grok_pattern - computed: true, optional: true, required: false
    private _grokPattern?: string; 
    public get grokPattern() {
        return this.getStringAttribute('grok_pattern');
    }
    public set grokPattern(value: string) {
        this._grokPattern = value;
    }
    public resetGrokPattern() {
        this._grokPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grokPatternInput() {
        return this._grokPattern;
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
}
export interface JsonClassifierProperty {
    /**
    * A JsonPath string defining the JSON data for the classifier to classify. AWS Glue supports a subset of JsonPath, as described in Writing JsonPath Custom Classifiers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#json_path CcClassifier#json_path}
    */
    readonly jsonPath?: string;
    /**
    * The name of the classifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#name CcClassifier#name}
    */
    readonly name?: string;
}
export class JsonClassifierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JsonClassifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonPath = this._jsonPath;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JsonClassifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonPath = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonPath = value.jsonPath;
            this._name = value.name;
        }
    }

    // json_path - computed: true, optional: true, required: false
    private _jsonPath?: string; 
    public get jsonPath() {
        return this.getStringAttribute('json_path');
    }
    public set jsonPath(value: string) {
        this._jsonPath = value;
    }
    public resetJsonPath() {
        this._jsonPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonPathInput() {
        return this._jsonPath;
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
}
export interface XMLClassifierProperty {
    /**
    * An identifier of the data format that the classifier matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#classification CcClassifier#classification}
    */
    readonly classification?: string;
    /**
    * The name of the classifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#name CcClassifier#name}
    */
    readonly name?: string;
    /**
    * The XML tag designating the element that contains each record in an XML document being parsed. This can't identify a self-closing element (closed by />). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, <row item_a="A" item_b="B"></row> is okay, but <row item_a="A" item_b="B" /> is not).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_classifier#row_tag CcClassifier#row_tag}
    */
    readonly rowTag?: string;
}
export class XMLClassifierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): XMLClassifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._classification !== undefined) {
            hasAnyValues = true;
            internalValueResult.classification = this._classification;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._rowTag !== undefined) {
            hasAnyValues = true;
            internalValueResult.rowTag = this._rowTag;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: XMLClassifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._classification = undefined;
            this._name = undefined;
            this._rowTag = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._classification = value.classification;
            this._name = value.name;
            this._rowTag = value.rowTag;
        }
    }

    // classification - computed: true, optional: true, required: false
    private _classification?: string; 
    public get classification() {
        return this.getStringAttribute('classification');
    }
    public set classification(value: string) {
        this._classification = value;
    }
    public resetClassification() {
        this._classification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classificationInput() {
        return this._classification;
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

    // row_tag - computed: true, optional: true, required: false
    private _rowTag?: string; 
    public get rowTag() {
        return this.getStringAttribute('row_tag');
    }
    public set rowTag(value: string) {
        this._rowTag = value;
    }
    public resetRowTag() {
        this._rowTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rowTagInput() {
        return this._rowTag;
    }
}
}
