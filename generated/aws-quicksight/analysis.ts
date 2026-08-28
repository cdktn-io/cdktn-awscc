// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAnalysisProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#analysis_id CcAnalysis#analysis_id}
    */
    readonly analysisId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#aws_account_id CcAnalysis#aws_account_id}
    */
    readonly awsAccountId: string;
    /**
    * <p>Errors associated with the analysis.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#errors CcAnalysis#errors}
    */
    readonly errors?: CcAnalysis.AnalysisErrorProperty[] | cdktn.IResolvable;
    /**
    * <p>The descriptive name of the analysis.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#name CcAnalysis#name}
    */
    readonly name?: string;
    /**
    * <p>A list of QuickSight parameters and the list's override values.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#parameters CcAnalysis#parameters}
    */
    readonly parameters?: CcAnalysis.ParametersProperty;
    /**
    * <p>A structure that describes the principals and the resource-level permissions on an
    *             analysis. You can use the <code>Permissions</code> structure to grant permissions by
    *             providing a list of AWS Identity and Access Management (IAM) action information for each
    *             principal listed by Amazon Resource Name (ARN). </p>
    * 
    *         <p>To specify no permissions, omit <code>Permissions</code>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#permissions CcAnalysis#permissions}
    */
    readonly permissions?: CcAnalysis.ResourcePermissionProperty[] | cdktn.IResolvable;
    /**
    * <p>The source entity of an analysis.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#source_entity CcAnalysis#source_entity}
    */
    readonly sourceEntity: CcAnalysis.AnalysisSourceEntityProperty;
    /**
    * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
    *             analysis.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#tags CcAnalysis#tags}
    */
    readonly tags?: CcAnalysis.TagProperty[] | cdktn.IResolvable;
    /**
    * <p>The ARN of the theme of the analysis.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#theme_arn CcAnalysis#theme_arn}
    */
    readonly themeArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis awscc_quicksight_analysis}
*/
export class CcAnalysis extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_analysis";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAnalysis resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAnalysis to import
    * @param importFromId The id of the existing CcAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAnalysis to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_analysis", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis awscc_quicksight_analysis} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAnalysisProps
    */
    public constructor(scope: Construct, id: string, config: CcAnalysisProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_analysis',
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
        this._analysisId = config.analysisId;
        this._awsAccountId = config.awsAccountId;
        this._errors.internalValue = config.errors;
        this._name = config.name;
        this._parameters.internalValue = config.parameters;
        this._permissions.internalValue = config.permissions;
        this._sourceEntity.internalValue = config.sourceEntity;
        this._tags.internalValue = config.tags;
        this._themeArn = config.themeArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // analysis_id - computed: false, optional: false, required: true
    private _analysisId?: string; 
    public get analysisId() {
        return this.getStringAttribute('analysis_id');
    }
    public set analysisId(value: string) {
        this._analysisId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get analysisIdInput() {
        return this._analysisId;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: false, optional: false, required: true
    private _awsAccountId?: string; 
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string) {
        this._awsAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
        return this._awsAccountId;
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // data_set_arns - computed: true, optional: false, required: false
    public get dataSetArns() {
        return this.getListAttribute('data_set_arns');
    }

    // errors - computed: true, optional: true, required: false
    private _errors = new CcAnalysis.AnalysisErrorPropertyList(this, "errors", false);
    public get errors() {
        return this._errors;
    }
    public putErrors(value: CcAnalysis.AnalysisErrorProperty[] | cdktn.IResolvable) {
        this._errors.internalValue = value;
    }
    public resetErrors() {
        this._errors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorsInput() {
        return this._errors.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
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

    // parameters - computed: true, optional: true, required: false
    private _parameters = new CcAnalysis.ParametersPropertyOutputReference(this, "parameters");
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: CcAnalysis.ParametersProperty) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }

    // permissions - computed: true, optional: true, required: false
    private _permissions = new CcAnalysis.ResourcePermissionPropertyList(this, "permissions", false);
    public get permissions() {
        return this._permissions;
    }
    public putPermissions(value: CcAnalysis.ResourcePermissionProperty[] | cdktn.IResolvable) {
        this._permissions.internalValue = value;
    }
    public resetPermissions() {
        this._permissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions.internalValue;
    }

    // sheets - computed: true, optional: false, required: false
    private _sheets = new CcAnalysis.SheetPropertyList(this, "sheets", false);
    public get sheets() {
        return this._sheets;
    }

    // source_entity - computed: false, optional: false, required: true
    private _sourceEntity = new CcAnalysis.AnalysisSourceEntityPropertyOutputReference(this, "source_entity");
    public get sourceEntity() {
        return this._sourceEntity;
    }
    public putSourceEntity(value: CcAnalysis.AnalysisSourceEntityProperty) {
        this._sourceEntity.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceEntityInput() {
        return this._sourceEntity.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAnalysis.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAnalysis.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // theme_arn - computed: true, optional: true, required: false
    private _themeArn?: string; 
    public get themeArn() {
        return this.getStringAttribute('theme_arn');
    }
    public set themeArn(value: string) {
        this._themeArn = value;
    }
    public resetThemeArn() {
        this._themeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get themeArnInput() {
        return this._themeArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            analysis_id: cdktn.stringToTerraform(this._analysisId),
            aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
            errors: cdktn.listMapper(ccAnalysisAnalysisErrorPropertyToTerraform, false)(this._errors.internalValue),
            name: cdktn.stringToTerraform(this._name),
            parameters: ccAnalysisParametersPropertyToTerraform(this._parameters.internalValue),
            permissions: cdktn.listMapper(ccAnalysisResourcePermissionPropertyToTerraform, false)(this._permissions.internalValue),
            source_entity: ccAnalysisAnalysisSourceEntityPropertyToTerraform(this._sourceEntity.internalValue),
            tags: cdktn.listMapper(ccAnalysisTagPropertyToTerraform, false)(this._tags.internalValue),
            theme_arn: cdktn.stringToTerraform(this._themeArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            analysis_id: {
                value: cdktn.stringToHclTerraform(this._analysisId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            aws_account_id: {
                value: cdktn.stringToHclTerraform(this._awsAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            errors: {
                value: cdktn.listMapperHcl(ccAnalysisAnalysisErrorPropertyToHclTerraform, false)(this._errors.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAnalysis.AnalysisErrorPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameters: {
                value: ccAnalysisParametersPropertyToHclTerraform(this._parameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnalysis.ParametersProperty",
            },
            permissions: {
                value: cdktn.listMapperHcl(ccAnalysisResourcePermissionPropertyToHclTerraform, false)(this._permissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAnalysis.ResourcePermissionPropertyList",
            },
            source_entity: {
                value: ccAnalysisAnalysisSourceEntityPropertyToHclTerraform(this._sourceEntity.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnalysis.AnalysisSourceEntityProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAnalysisTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAnalysis.TagPropertyList",
            },
            theme_arn: {
                value: cdktn.stringToHclTerraform(this._themeArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAnalysisAnalysisErrorPropertyToTerraform(struct?: CcAnalysis.AnalysisErrorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        message: cdktn.stringToTerraform(struct!.message),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAnalysisAnalysisErrorPropertyToHclTerraform(struct?: CcAnalysis.AnalysisErrorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        message: {
            value: cdktn.stringToHclTerraform(struct!.message),
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


export function ccAnalysisDateTimeParameterPropertyToTerraform(struct?: CcAnalysis.DateTimeParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccAnalysisDateTimeParameterPropertyToHclTerraform(struct?: CcAnalysis.DateTimeParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalysisDecimalParameterPropertyToTerraform(struct?: CcAnalysis.DecimalParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
    }
}


export function ccAnalysisDecimalParameterPropertyToHclTerraform(struct?: CcAnalysis.DecimalParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalysisIntegerParameterPropertyToTerraform(struct?: CcAnalysis.IntegerParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
    }
}


export function ccAnalysisIntegerParameterPropertyToHclTerraform(struct?: CcAnalysis.IntegerParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalysisStringParameterPropertyToTerraform(struct?: CcAnalysis.StringParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccAnalysisStringParameterPropertyToHclTerraform(struct?: CcAnalysis.StringParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalysisParametersPropertyToTerraform(struct?: CcAnalysis.ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_time_parameters: cdktn.listMapper(ccAnalysisDateTimeParameterPropertyToTerraform, false)(struct!.dateTimeParameters),
        decimal_parameters: cdktn.listMapper(ccAnalysisDecimalParameterPropertyToTerraform, false)(struct!.decimalParameters),
        integer_parameters: cdktn.listMapper(ccAnalysisIntegerParameterPropertyToTerraform, false)(struct!.integerParameters),
        string_parameters: cdktn.listMapper(ccAnalysisStringParameterPropertyToTerraform, false)(struct!.stringParameters),
    }
}


export function ccAnalysisParametersPropertyToHclTerraform(struct?: CcAnalysis.ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_time_parameters: {
            value: cdktn.listMapperHcl(ccAnalysisDateTimeParameterPropertyToHclTerraform, false)(struct!.dateTimeParameters),
            isBlock: true,
            type: "list",
            storageClassType: "DateTimeParameterPropertyList",
        },
        decimal_parameters: {
            value: cdktn.listMapperHcl(ccAnalysisDecimalParameterPropertyToHclTerraform, false)(struct!.decimalParameters),
            isBlock: true,
            type: "list",
            storageClassType: "DecimalParameterPropertyList",
        },
        integer_parameters: {
            value: cdktn.listMapperHcl(ccAnalysisIntegerParameterPropertyToHclTerraform, false)(struct!.integerParameters),
            isBlock: true,
            type: "list",
            storageClassType: "IntegerParameterPropertyList",
        },
        string_parameters: {
            value: cdktn.listMapperHcl(ccAnalysisStringParameterPropertyToHclTerraform, false)(struct!.stringParameters),
            isBlock: true,
            type: "list",
            storageClassType: "StringParameterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalysisResourcePermissionPropertyToTerraform(struct?: CcAnalysis.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        principal: cdktn.stringToTerraform(struct!.principal),
    }
}


export function ccAnalysisResourcePermissionPropertyToHclTerraform(struct?: CcAnalysis.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        principal: {
            value: cdktn.stringToHclTerraform(struct!.principal),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalysisSheetPropertyToTerraform(struct?: CcAnalysis.SheetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccAnalysisSheetPropertyToHclTerraform(struct?: CcAnalysis.SheetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccAnalysisDataSetReferencePropertyToTerraform(struct?: CcAnalysis.DataSetReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_set_arn: cdktn.stringToTerraform(struct!.dataSetArn),
        data_set_placeholder: cdktn.stringToTerraform(struct!.dataSetPlaceholder),
    }
}


export function ccAnalysisDataSetReferencePropertyToHclTerraform(struct?: CcAnalysis.DataSetReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_set_arn: {
            value: cdktn.stringToHclTerraform(struct!.dataSetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_set_placeholder: {
            value: cdktn.stringToHclTerraform(struct!.dataSetPlaceholder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalysisAnalysisSourceTemplatePropertyToTerraform(struct?: CcAnalysis.AnalysisSourceTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        data_set_references: cdktn.listMapper(ccAnalysisDataSetReferencePropertyToTerraform, false)(struct!.dataSetReferences),
    }
}


export function ccAnalysisAnalysisSourceTemplatePropertyToHclTerraform(struct?: CcAnalysis.AnalysisSourceTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_set_references: {
            value: cdktn.listMapperHcl(ccAnalysisDataSetReferencePropertyToHclTerraform, false)(struct!.dataSetReferences),
            isBlock: true,
            type: "list",
            storageClassType: "DataSetReferencePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalysisAnalysisSourceEntityPropertyToTerraform(struct?: CcAnalysis.AnalysisSourceEntityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_template: ccAnalysisAnalysisSourceTemplatePropertyToTerraform(struct!.sourceTemplate),
    }
}


export function ccAnalysisAnalysisSourceEntityPropertyToHclTerraform(struct?: CcAnalysis.AnalysisSourceEntityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_template: {
            value: ccAnalysisAnalysisSourceTemplatePropertyToHclTerraform(struct!.sourceTemplate),
            isBlock: true,
            type: "struct",
            storageClassType: "AnalysisSourceTemplateProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalysisTagPropertyToTerraform(struct?: CcAnalysis.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAnalysisTagPropertyToHclTerraform(struct?: CcAnalysis.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAnalysis {
export interface AnalysisErrorProperty {
    /**
    * <p>The message associated with the analysis error.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#message CcAnalysis#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#type CcAnalysis#type}
    */
    readonly type?: string;
}
export class AnalysisErrorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AnalysisErrorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._message !== undefined) {
            hasAnyValues = true;
            internalValueResult.message = this._message;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalysisErrorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._message = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._message = value.message;
            this._type = value.type;
        }
    }

    // message - computed: true, optional: true, required: false
    private _message?: string; 
    public get message() {
        return this.getStringAttribute('message');
    }
    public set message(value: string) {
        this._message = value;
    }
    public resetMessage() {
        this._message = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
        return this._message;
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

export class AnalysisErrorPropertyList extends cdktn.ComplexList {
    public internalValue? : AnalysisErrorProperty[] | cdktn.IResolvable

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
    public get(index: number): AnalysisErrorPropertyOutputReference {
        return new AnalysisErrorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DateTimeParameterProperty {
    /**
    * <p>A display name for the date-time parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#name CcAnalysis#name}
    */
    readonly name?: string;
    /**
    * <p>The values for the date-time parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#values CcAnalysis#values}
    */
    readonly values?: string[];
}
export class DateTimeParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DateTimeParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DateTimeParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._values = value.values;
        }
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class DateTimeParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : DateTimeParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): DateTimeParameterPropertyOutputReference {
        return new DateTimeParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DecimalParameterProperty {
    /**
    * <p>A display name for the decimal parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#name CcAnalysis#name}
    */
    readonly name?: string;
    /**
    * <p>The values for the decimal parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#values CcAnalysis#values}
    */
    readonly values?: number[];
}
export class DecimalParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DecimalParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DecimalParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._values = value.values;
        }
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

    // values - computed: true, optional: true, required: false
    private _values?: number[]; 
    public get values() {
        return this.getNumberListAttribute('values');
    }
    public set values(value: number[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class DecimalParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : DecimalParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): DecimalParameterPropertyOutputReference {
        return new DecimalParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IntegerParameterProperty {
    /**
    * <p>The name of the integer parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#name CcAnalysis#name}
    */
    readonly name?: string;
    /**
    * <p>The values for the integer parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#values CcAnalysis#values}
    */
    readonly values?: number[];
}
export class IntegerParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IntegerParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntegerParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._values = value.values;
        }
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

    // values - computed: true, optional: true, required: false
    private _values?: number[]; 
    public get values() {
        return this.getNumberListAttribute('values');
    }
    public set values(value: number[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class IntegerParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : IntegerParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): IntegerParameterPropertyOutputReference {
        return new IntegerParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StringParameterProperty {
    /**
    * <p>A display name for a string parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#name CcAnalysis#name}
    */
    readonly name?: string;
    /**
    * <p>The values of a string parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#values CcAnalysis#values}
    */
    readonly values?: string[];
}
export class StringParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StringParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StringParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._values = value.values;
        }
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class StringParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : StringParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): StringParameterPropertyOutputReference {
        return new StringParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ParametersProperty {
    /**
    * <p>Date-time parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#date_time_parameters CcAnalysis#date_time_parameters}
    */
    readonly dateTimeParameters?: DateTimeParameterProperty[] | cdktn.IResolvable;
    /**
    * <p>Decimal parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#decimal_parameters CcAnalysis#decimal_parameters}
    */
    readonly decimalParameters?: DecimalParameterProperty[] | cdktn.IResolvable;
    /**
    * <p>Integer parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#integer_parameters CcAnalysis#integer_parameters}
    */
    readonly integerParameters?: IntegerParameterProperty[] | cdktn.IResolvable;
    /**
    * <p>String parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#string_parameters CcAnalysis#string_parameters}
    */
    readonly stringParameters?: StringParameterProperty[] | cdktn.IResolvable;
}
export class ParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateTimeParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateTimeParameters = this._dateTimeParameters?.internalValue;
        }
        if (this._decimalParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.decimalParameters = this._decimalParameters?.internalValue;
        }
        if (this._integerParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.integerParameters = this._integerParameters?.internalValue;
        }
        if (this._stringParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringParameters = this._stringParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateTimeParameters.internalValue = undefined;
            this._decimalParameters.internalValue = undefined;
            this._integerParameters.internalValue = undefined;
            this._stringParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dateTimeParameters.internalValue = value.dateTimeParameters;
            this._decimalParameters.internalValue = value.decimalParameters;
            this._integerParameters.internalValue = value.integerParameters;
            this._stringParameters.internalValue = value.stringParameters;
        }
    }

    // date_time_parameters - computed: true, optional: true, required: false
    private _dateTimeParameters = new DateTimeParameterPropertyList(this, "date_time_parameters", false);
    public get dateTimeParameters() {
        return this._dateTimeParameters;
    }
    public putDateTimeParameters(value: DateTimeParameterProperty[] | cdktn.IResolvable) {
        this._dateTimeParameters.internalValue = value;
    }
    public resetDateTimeParameters() {
        this._dateTimeParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateTimeParametersInput() {
        return this._dateTimeParameters.internalValue;
    }

    // decimal_parameters - computed: true, optional: true, required: false
    private _decimalParameters = new DecimalParameterPropertyList(this, "decimal_parameters", false);
    public get decimalParameters() {
        return this._decimalParameters;
    }
    public putDecimalParameters(value: DecimalParameterProperty[] | cdktn.IResolvable) {
        this._decimalParameters.internalValue = value;
    }
    public resetDecimalParameters() {
        this._decimalParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decimalParametersInput() {
        return this._decimalParameters.internalValue;
    }

    // integer_parameters - computed: true, optional: true, required: false
    private _integerParameters = new IntegerParameterPropertyList(this, "integer_parameters", false);
    public get integerParameters() {
        return this._integerParameters;
    }
    public putIntegerParameters(value: IntegerParameterProperty[] | cdktn.IResolvable) {
        this._integerParameters.internalValue = value;
    }
    public resetIntegerParameters() {
        this._integerParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integerParametersInput() {
        return this._integerParameters.internalValue;
    }

    // string_parameters - computed: true, optional: true, required: false
    private _stringParameters = new StringParameterPropertyList(this, "string_parameters", false);
    public get stringParameters() {
        return this._stringParameters;
    }
    public putStringParameters(value: StringParameterProperty[] | cdktn.IResolvable) {
        this._stringParameters.internalValue = value;
    }
    public resetStringParameters() {
        this._stringParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringParametersInput() {
        return this._stringParameters.internalValue;
    }
}
export interface ResourcePermissionProperty {
    /**
    * <p>The IAM action to grant or revoke permissions on.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#actions CcAnalysis#actions}
    */
    readonly actions?: string[];
    /**
    * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
    *             following:</p>
    *         <ul>
    *             <li>
    *                 <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
    *             </li>
    *             <li>
    *                 <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
    *             </li>
    *             <li>
    *                 <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
    *                     ARN. Use this option only to share resources (templates) across AWS accounts.
    *                     (This is less common.) </p>
    *             </li>
    *          </ul>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#principal CcAnalysis#principal}
    */
    readonly principal?: string;
}
export class ResourcePermissionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourcePermissionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if (this._principal !== undefined) {
            hasAnyValues = true;
            internalValueResult.principal = this._principal;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcePermissionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._principal = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions = value.actions;
            this._principal = value.principal;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions?: string[]; 
    public get actions() {
        return this.getListAttribute('actions');
    }
    public set actions(value: string[]) {
        this._actions = value;
    }
    public resetActions() {
        this._actions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions;
    }

    // principal - computed: true, optional: true, required: false
    private _principal?: string; 
    public get principal() {
        return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
        this._principal = value;
    }
    public resetPrincipal() {
        this._principal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
    }
}

export class ResourcePermissionPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourcePermissionProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourcePermissionPropertyOutputReference {
        return new ResourcePermissionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SheetProperty {
}
export class SheetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SheetProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SheetProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // sheet_id - computed: true, optional: false, required: false
    public get sheetId() {
        return this.getStringAttribute('sheet_id');
    }
}

export class SheetPropertyList extends cdktn.ComplexList {

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
    public get(index: number): SheetPropertyOutputReference {
        return new SheetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DataSetReferenceProperty {
    /**
    * <p>Dataset Amazon Resource Name (ARN).</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#data_set_arn CcAnalysis#data_set_arn}
    */
    readonly dataSetArn?: string;
    /**
    * <p>Dataset placeholder.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#data_set_placeholder CcAnalysis#data_set_placeholder}
    */
    readonly dataSetPlaceholder?: string;
}
export class DataSetReferencePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DataSetReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataSetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSetArn = this._dataSetArn;
        }
        if (this._dataSetPlaceholder !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSetPlaceholder = this._dataSetPlaceholder;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSetReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataSetArn = undefined;
            this._dataSetPlaceholder = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataSetArn = value.dataSetArn;
            this._dataSetPlaceholder = value.dataSetPlaceholder;
        }
    }

    // data_set_arn - computed: true, optional: true, required: false
    private _dataSetArn?: string; 
    public get dataSetArn() {
        return this.getStringAttribute('data_set_arn');
    }
    public set dataSetArn(value: string) {
        this._dataSetArn = value;
    }
    public resetDataSetArn() {
        this._dataSetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSetArnInput() {
        return this._dataSetArn;
    }

    // data_set_placeholder - computed: true, optional: true, required: false
    private _dataSetPlaceholder?: string; 
    public get dataSetPlaceholder() {
        return this.getStringAttribute('data_set_placeholder');
    }
    public set dataSetPlaceholder(value: string) {
        this._dataSetPlaceholder = value;
    }
    public resetDataSetPlaceholder() {
        this._dataSetPlaceholder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSetPlaceholderInput() {
        return this._dataSetPlaceholder;
    }
}

export class DataSetReferencePropertyList extends cdktn.ComplexList {
    public internalValue? : DataSetReferenceProperty[] | cdktn.IResolvable

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
    public get(index: number): DataSetReferencePropertyOutputReference {
        return new DataSetReferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AnalysisSourceTemplateProperty {
    /**
    * <p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#arn CcAnalysis#arn}
    */
    readonly arn?: string;
    /**
    * <p>The dataset references of the source template of an analysis.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#data_set_references CcAnalysis#data_set_references}
    */
    readonly dataSetReferences?: DataSetReferenceProperty[] | cdktn.IResolvable;
}
export class AnalysisSourceTemplatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnalysisSourceTemplateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._dataSetReferences?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSetReferences = this._dataSetReferences?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalysisSourceTemplateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._dataSetReferences.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._dataSetReferences.internalValue = value.dataSetReferences;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // data_set_references - computed: true, optional: true, required: false
    private _dataSetReferences = new DataSetReferencePropertyList(this, "data_set_references", false);
    public get dataSetReferences() {
        return this._dataSetReferences;
    }
    public putDataSetReferences(value: DataSetReferenceProperty[] | cdktn.IResolvable) {
        this._dataSetReferences.internalValue = value;
    }
    public resetDataSetReferences() {
        this._dataSetReferences.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSetReferencesInput() {
        return this._dataSetReferences.internalValue;
    }
}
export interface AnalysisSourceEntityProperty {
    /**
    * <p>The source template of an analysis.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#source_template CcAnalysis#source_template}
    */
    readonly sourceTemplate?: AnalysisSourceTemplateProperty;
}
export class AnalysisSourceEntityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnalysisSourceEntityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceTemplate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceTemplate = this._sourceTemplate?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalysisSourceEntityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceTemplate.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceTemplate.internalValue = value.sourceTemplate;
        }
    }

    // source_template - computed: true, optional: true, required: false
    private _sourceTemplate = new AnalysisSourceTemplatePropertyOutputReference(this, "source_template");
    public get sourceTemplate() {
        return this._sourceTemplate;
    }
    public putSourceTemplate(value: AnalysisSourceTemplateProperty) {
        this._sourceTemplate.internalValue = value;
    }
    public resetSourceTemplate() {
        this._sourceTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTemplateInput() {
        return this._sourceTemplate.internalValue;
    }
}
export interface TagProperty {
    /**
    * <p>Tag key.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#key CcAnalysis#key}
    */
    readonly key?: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_analysis#value CcAnalysis#value}
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
