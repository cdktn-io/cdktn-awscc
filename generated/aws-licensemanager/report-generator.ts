// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcReportGeneratorProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of the report generator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#description CcReportGenerator#description}
    */
    readonly description?: string;
    /**
    * Details of the license configurations and asset groups that this generator reports on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_context CcReportGenerator#report_context}
    */
    readonly reportContext: CcReportGenerator.ReportContextProperty;
    /**
    * Details about how frequently reports are generated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_frequency CcReportGenerator#report_frequency}
    */
    readonly reportFrequency: CcReportGenerator.ReportFrequencyProperty;
    /**
    * Name of the report generator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_generator_name CcReportGenerator#report_generator_name}
    */
    readonly reportGeneratorName: string;
    /**
    * Type of reports to generate. The report type determines the data reported on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_type CcReportGenerator#report_type}
    */
    readonly reportType: string[];
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#tags CcReportGenerator#tags}
    */
    readonly tags?: CcReportGenerator.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator awscc_licensemanager_report_generator}
*/
export class CcReportGenerator extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_licensemanager_report_generator";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcReportGenerator resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcReportGenerator to import
    * @param importFromId The id of the existing CcReportGenerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcReportGenerator to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_licensemanager_report_generator", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator awscc_licensemanager_report_generator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcReportGeneratorProps
    */
    public constructor(scope: Construct, id: string, config: CcReportGeneratorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_licensemanager_report_generator',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.105.0'
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
        this._reportContext.internalValue = config.reportContext;
        this._reportFrequency.internalValue = config.reportFrequency;
        this._reportGeneratorName = config.reportGeneratorName;
        this._reportType = config.reportType;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // create_time - computed: true, optional: false, required: false
    public get createTime() {
        return this.getStringAttribute('create_time');
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

    // report_context - computed: false, optional: false, required: true
    private _reportContext = new CcReportGenerator.ReportContextPropertyOutputReference(this, "report_context");
    public get reportContext() {
        return this._reportContext;
    }
    public putReportContext(value: CcReportGenerator.ReportContextProperty) {
        this._reportContext.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get reportContextInput() {
        return this._reportContext.internalValue;
    }

    // report_creator_account - computed: true, optional: false, required: false
    public get reportCreatorAccount() {
        return this.getStringAttribute('report_creator_account');
    }

    // report_frequency - computed: false, optional: false, required: true
    private _reportFrequency = new CcReportGenerator.ReportFrequencyPropertyOutputReference(this, "report_frequency");
    public get reportFrequency() {
        return this._reportFrequency;
    }
    public putReportFrequency(value: CcReportGenerator.ReportFrequencyProperty) {
        this._reportFrequency.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get reportFrequencyInput() {
        return this._reportFrequency.internalValue;
    }

    // report_generator_name - computed: false, optional: false, required: true
    private _reportGeneratorName?: string; 
    public get reportGeneratorName() {
        return this.getStringAttribute('report_generator_name');
    }
    public set reportGeneratorName(value: string) {
        this._reportGeneratorName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get reportGeneratorNameInput() {
        return this._reportGeneratorName;
    }

    // report_type - computed: false, optional: false, required: true
    private _reportType?: string[]; 
    public get reportType() {
        return this.getListAttribute('report_type');
    }
    public set reportType(value: string[]) {
        this._reportType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get reportTypeInput() {
        return this._reportType;
    }

    // s3_location - computed: true, optional: false, required: false
    private _s3Location = new CcReportGenerator.S3LocationPropertyOutputReference(this, "s3_location");
    public get s3Location() {
        return this._s3Location;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcReportGenerator.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcReportGenerator.TagsProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            report_context: ccReportGeneratorReportContextPropertyToTerraform(this._reportContext.internalValue),
            report_frequency: ccReportGeneratorReportFrequencyPropertyToTerraform(this._reportFrequency.internalValue),
            report_generator_name: cdktn.stringToTerraform(this._reportGeneratorName),
            report_type: cdktn.listMapper(cdktn.stringToTerraform, false)(this._reportType),
            tags: cdktn.listMapper(ccReportGeneratorTagsPropertyToTerraform, false)(this._tags.internalValue),
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
            report_context: {
                value: ccReportGeneratorReportContextPropertyToHclTerraform(this._reportContext.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcReportGenerator.ReportContextProperty",
            },
            report_frequency: {
                value: ccReportGeneratorReportFrequencyPropertyToHclTerraform(this._reportFrequency.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcReportGenerator.ReportFrequencyProperty",
            },
            report_generator_name: {
                value: cdktn.stringToHclTerraform(this._reportGeneratorName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            report_type: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._reportType),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccReportGeneratorTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcReportGenerator.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccReportGeneratorReportContextPropertyToTerraform(struct?: CcReportGenerator.ReportContextProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        license_asset_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.licenseAssetGroupArns),
        license_configuration_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.licenseConfigurationArns),
        report_end_date: cdktn.stringToTerraform(struct!.reportEndDate),
        report_start_date: cdktn.stringToTerraform(struct!.reportStartDate),
    }
}


export function ccReportGeneratorReportContextPropertyToHclTerraform(struct?: CcReportGenerator.ReportContextProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        license_asset_group_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.licenseAssetGroupArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        license_configuration_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.licenseConfigurationArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        report_end_date: {
            value: cdktn.stringToHclTerraform(struct!.reportEndDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        report_start_date: {
            value: cdktn.stringToHclTerraform(struct!.reportStartDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReportGeneratorReportFrequencyPropertyToTerraform(struct?: CcReportGenerator.ReportFrequencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        period: cdktn.stringToTerraform(struct!.period),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccReportGeneratorReportFrequencyPropertyToHclTerraform(struct?: CcReportGenerator.ReportFrequencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        period: {
            value: cdktn.stringToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReportGeneratorS3LocationPropertyToTerraform(struct?: CcReportGenerator.S3LocationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccReportGeneratorS3LocationPropertyToHclTerraform(struct?: CcReportGenerator.S3LocationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccReportGeneratorTagsPropertyToTerraform(struct?: CcReportGenerator.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccReportGeneratorTagsPropertyToHclTerraform(struct?: CcReportGenerator.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcReportGenerator {
export interface ReportContextProperty {
    /**
    * Amazon Resource Names (ARNs) of the license asset groups to include in the report.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_asset_group_arns CcReportGenerator#license_asset_group_arns}
    */
    readonly licenseAssetGroupArns?: string[];
    /**
    * Amazon Resource Names (ARNs) of the license configurations that this generator reports on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_configuration_arns CcReportGenerator#license_configuration_arns}
    */
    readonly licenseConfigurationArns?: string[];
    /**
    * End date for the report data collection period.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_end_date CcReportGenerator#report_end_date}
    */
    readonly reportEndDate?: string;
    /**
    * Start date for the report data collection period.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_start_date CcReportGenerator#report_start_date}
    */
    readonly reportStartDate?: string;
}
export class ReportContextPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReportContextProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._licenseAssetGroupArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.licenseAssetGroupArns = this._licenseAssetGroupArns;
        }
        if (this._licenseConfigurationArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.licenseConfigurationArns = this._licenseConfigurationArns;
        }
        if (this._reportEndDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.reportEndDate = this._reportEndDate;
        }
        if (this._reportStartDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.reportStartDate = this._reportStartDate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReportContextProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._licenseAssetGroupArns = undefined;
            this._licenseConfigurationArns = undefined;
            this._reportEndDate = undefined;
            this._reportStartDate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._licenseAssetGroupArns = value.licenseAssetGroupArns;
            this._licenseConfigurationArns = value.licenseConfigurationArns;
            this._reportEndDate = value.reportEndDate;
            this._reportStartDate = value.reportStartDate;
        }
    }

    // license_asset_group_arns - computed: true, optional: true, required: false
    private _licenseAssetGroupArns?: string[]; 
    public get licenseAssetGroupArns() {
        return this.getListAttribute('license_asset_group_arns');
    }
    public set licenseAssetGroupArns(value: string[]) {
        this._licenseAssetGroupArns = value;
    }
    public resetLicenseAssetGroupArns() {
        this._licenseAssetGroupArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseAssetGroupArnsInput() {
        return this._licenseAssetGroupArns;
    }

    // license_configuration_arns - computed: true, optional: true, required: false
    private _licenseConfigurationArns?: string[]; 
    public get licenseConfigurationArns() {
        return this.getListAttribute('license_configuration_arns');
    }
    public set licenseConfigurationArns(value: string[]) {
        this._licenseConfigurationArns = value;
    }
    public resetLicenseConfigurationArns() {
        this._licenseConfigurationArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseConfigurationArnsInput() {
        return this._licenseConfigurationArns;
    }

    // report_end_date - computed: true, optional: true, required: false
    private _reportEndDate?: string; 
    public get reportEndDate() {
        return this.getStringAttribute('report_end_date');
    }
    public set reportEndDate(value: string) {
        this._reportEndDate = value;
    }
    public resetReportEndDate() {
        this._reportEndDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportEndDateInput() {
        return this._reportEndDate;
    }

    // report_start_date - computed: true, optional: true, required: false
    private _reportStartDate?: string; 
    public get reportStartDate() {
        return this.getStringAttribute('report_start_date');
    }
    public set reportStartDate(value: string) {
        this._reportStartDate = value;
    }
    public resetReportStartDate() {
        this._reportStartDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportStartDateInput() {
        return this._reportStartDate;
    }
}
export interface ReportFrequencyProperty {
    /**
    * Time period between each report. The period can be daily, weekly, or monthly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#period CcReportGenerator#period}
    */
    readonly period?: string;
    /**
    * Number of times within the frequency period that a report is generated. The only supported value is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value CcReportGenerator#value}
    */
    readonly value?: number;
}
export class ReportFrequencyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReportFrequencyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReportFrequencyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._period = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._period = value.period;
            this._value = value.value;
        }
    }

    // period - computed: true, optional: true, required: false
    private _period?: string; 
    public get period() {
        return this.getStringAttribute('period');
    }
    public set period(value: string) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface S3LocationProperty {
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LocationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // bucket - computed: true, optional: false, required: false
    public get bucket() {
        return this.getStringAttribute('bucket');
    }

    // key_prefix - computed: true, optional: false, required: false
    public get keyPrefix() {
        return this.getStringAttribute('key_prefix');
    }
}
export interface TagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#key CcReportGenerator#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value CcReportGenerator#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
