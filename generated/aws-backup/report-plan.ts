// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcReportPlanProps extends cdktn.TerraformMetaArguments {
    /**
    * A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#report_delivery_channel CcReportPlan#report_delivery_channel}
    */
    readonly reportDeliveryChannel: CcReportPlan.ReportDeliveryChannelProperty;
    /**
    * An optional description of the report plan with a maximum of 1,024 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#report_plan_description CcReportPlan#report_plan_description}
    */
    readonly reportPlanDescription?: string;
    /**
    * The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#report_plan_name CcReportPlan#report_plan_name}
    */
    readonly reportPlanName?: string;
    /**
    * Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#report_plan_tags CcReportPlan#report_plan_tags}
    */
    readonly reportPlanTags?: CcReportPlan.TagProperty[] | cdktn.IResolvable;
    /**
    * Identifies the report template for the report. Reports are built using a report template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#report_setting CcReportPlan#report_setting}
    */
    readonly reportSetting: CcReportPlan.ReportSettingProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan awscc_backup_report_plan}
*/
export class CcReportPlan extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_backup_report_plan";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcReportPlan resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcReportPlan to import
    * @param importFromId The id of the existing CcReportPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcReportPlan to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_report_plan", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan awscc_backup_report_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcReportPlanProps
    */
    public constructor(scope: Construct, id: string, config: CcReportPlanProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_backup_report_plan',
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
        this._reportDeliveryChannel.internalValue = config.reportDeliveryChannel;
        this._reportPlanDescription = config.reportPlanDescription;
        this._reportPlanName = config.reportPlanName;
        this._reportPlanTags.internalValue = config.reportPlanTags;
        this._reportSetting.internalValue = config.reportSetting;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // report_delivery_channel - computed: false, optional: false, required: true
    private _reportDeliveryChannel = new CcReportPlan.ReportDeliveryChannelPropertyOutputReference(this, "report_delivery_channel");
    public get reportDeliveryChannel() {
        return this._reportDeliveryChannel;
    }
    public putReportDeliveryChannel(value: CcReportPlan.ReportDeliveryChannelProperty) {
        this._reportDeliveryChannel.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get reportDeliveryChannelInput() {
        return this._reportDeliveryChannel.internalValue;
    }

    // report_plan_arn - computed: true, optional: false, required: false
    public get reportPlanArn() {
        return this.getStringAttribute('report_plan_arn');
    }

    // report_plan_description - computed: true, optional: true, required: false
    private _reportPlanDescription?: string; 
    public get reportPlanDescription() {
        return this.getStringAttribute('report_plan_description');
    }
    public set reportPlanDescription(value: string) {
        this._reportPlanDescription = value;
    }
    public resetReportPlanDescription() {
        this._reportPlanDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportPlanDescriptionInput() {
        return this._reportPlanDescription;
    }

    // report_plan_name - computed: true, optional: true, required: false
    private _reportPlanName?: string; 
    public get reportPlanName() {
        return this.getStringAttribute('report_plan_name');
    }
    public set reportPlanName(value: string) {
        this._reportPlanName = value;
    }
    public resetReportPlanName() {
        this._reportPlanName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportPlanNameInput() {
        return this._reportPlanName;
    }

    // report_plan_tags - computed: true, optional: true, required: false
    private _reportPlanTags = new CcReportPlan.TagPropertyList(this, "report_plan_tags", false);
    public get reportPlanTags() {
        return this._reportPlanTags;
    }
    public putReportPlanTags(value: CcReportPlan.TagProperty[] | cdktn.IResolvable) {
        this._reportPlanTags.internalValue = value;
    }
    public resetReportPlanTags() {
        this._reportPlanTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportPlanTagsInput() {
        return this._reportPlanTags.internalValue;
    }

    // report_setting - computed: false, optional: false, required: true
    private _reportSetting = new CcReportPlan.ReportSettingPropertyOutputReference(this, "report_setting");
    public get reportSetting() {
        return this._reportSetting;
    }
    public putReportSetting(value: CcReportPlan.ReportSettingProperty) {
        this._reportSetting.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get reportSettingInput() {
        return this._reportSetting.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            report_delivery_channel: ccReportPlanReportDeliveryChannelPropertyToTerraform(this._reportDeliveryChannel.internalValue),
            report_plan_description: cdktn.stringToTerraform(this._reportPlanDescription),
            report_plan_name: cdktn.stringToTerraform(this._reportPlanName),
            report_plan_tags: cdktn.listMapper(ccReportPlanTagPropertyToTerraform, false)(this._reportPlanTags.internalValue),
            report_setting: ccReportPlanReportSettingPropertyToTerraform(this._reportSetting.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            report_delivery_channel: {
                value: ccReportPlanReportDeliveryChannelPropertyToHclTerraform(this._reportDeliveryChannel.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcReportPlan.ReportDeliveryChannelProperty",
            },
            report_plan_description: {
                value: cdktn.stringToHclTerraform(this._reportPlanDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            report_plan_name: {
                value: cdktn.stringToHclTerraform(this._reportPlanName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            report_plan_tags: {
                value: cdktn.listMapperHcl(ccReportPlanTagPropertyToHclTerraform, false)(this._reportPlanTags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcReportPlan.TagPropertyList",
            },
            report_setting: {
                value: ccReportPlanReportSettingPropertyToHclTerraform(this._reportSetting.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcReportPlan.ReportSettingProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccReportPlanReportDeliveryChannelPropertyToTerraform(struct?: CcReportPlan.ReportDeliveryChannelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        formats: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.formats),
        s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
        s3_key_prefix: cdktn.stringToTerraform(struct!.s3KeyPrefix),
    }
}


export function ccReportPlanReportDeliveryChannelPropertyToHclTerraform(struct?: CcReportPlan.ReportDeliveryChannelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        formats: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.formats),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        s3_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_key_prefix: {
            value: cdktn.stringToHclTerraform(struct!.s3KeyPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReportPlanTagPropertyToTerraform(struct?: CcReportPlan.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccReportPlanTagPropertyToHclTerraform(struct?: CcReportPlan.TagProperty | cdktn.IResolvable): any {
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


export function ccReportPlanReportSettingPropertyToTerraform(struct?: CcReportPlan.ReportSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accounts),
        framework_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.frameworkArns),
        organization_units: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationUnits),
        regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
        report_template: cdktn.stringToTerraform(struct!.reportTemplate),
    }
}


export function ccReportPlanReportSettingPropertyToHclTerraform(struct?: CcReportPlan.ReportSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accounts: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accounts),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        framework_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.frameworkArns),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        organization_units: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationUnits),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        report_template: {
            value: cdktn.stringToHclTerraform(struct!.reportTemplate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcReportPlan {
export interface ReportDeliveryChannelProperty {
    /**
    * A list of the format of your reports: CSV, JSON, or both. If not specified, the default format is CSV.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#formats CcReportPlan#formats}
    */
    readonly formats?: string[];
    /**
    * The unique name of the S3 bucket that receives your reports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#s3_bucket_name CcReportPlan#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#s3_key_prefix CcReportPlan#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export class ReportDeliveryChannelPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReportDeliveryChannelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._formats !== undefined) {
            hasAnyValues = true;
            internalValueResult.formats = this._formats;
        }
        if (this._s3BucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketName = this._s3BucketName;
        }
        if (this._s3KeyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3KeyPrefix = this._s3KeyPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReportDeliveryChannelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._formats = undefined;
            this._s3BucketName = undefined;
            this._s3KeyPrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._formats = value.formats;
            this._s3BucketName = value.s3BucketName;
            this._s3KeyPrefix = value.s3KeyPrefix;
        }
    }

    // formats - computed: true, optional: true, required: false
    private _formats?: string[]; 
    public get formats() {
        return cdktn.Fn.tolist(this.getListAttribute('formats'));
    }
    public set formats(value: string[]) {
        this._formats = value;
    }
    public resetFormats() {
        this._formats = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatsInput() {
        return this._formats;
    }

    // s3_bucket_name - computed: false, optional: false, required: true
    private _s3BucketName?: string; 
    public get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
        this._s3BucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
        return this._s3BucketName;
    }

    // s3_key_prefix - computed: true, optional: true, required: false
    private _s3KeyPrefix?: string; 
    public get s3KeyPrefix() {
        return this.getStringAttribute('s3_key_prefix');
    }
    public set s3KeyPrefix(value: string) {
        this._s3KeyPrefix = value;
    }
    public resetS3KeyPrefix() {
        this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyPrefixInput() {
        return this._s3KeyPrefix;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#key CcReportPlan#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#value CcReportPlan#value}
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
export interface ReportSettingProperty {
    /**
    * The list of AWS accounts that a report covers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#accounts CcReportPlan#accounts}
    */
    readonly accounts?: string[];
    /**
    * The Amazon Resource Names (ARNs) of the frameworks a report covers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#framework_arns CcReportPlan#framework_arns}
    */
    readonly frameworkArns?: string[];
    /**
    * The list of AWS organization units that a report covers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#organization_units CcReportPlan#organization_units}
    */
    readonly organizationUnits?: string[];
    /**
    * The list of AWS regions that a report covers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#regions CcReportPlan#regions}
    */
    readonly regions?: string[];
    /**
    * Identifies the report template for the report. Reports are built using a report template. The report templates are: `BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#report_template CcReportPlan#report_template}
    */
    readonly reportTemplate: string;
}
export class ReportSettingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReportSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accounts !== undefined) {
            hasAnyValues = true;
            internalValueResult.accounts = this._accounts;
        }
        if (this._frameworkArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.frameworkArns = this._frameworkArns;
        }
        if (this._organizationUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationUnits = this._organizationUnits;
        }
        if (this._regions !== undefined) {
            hasAnyValues = true;
            internalValueResult.regions = this._regions;
        }
        if (this._reportTemplate !== undefined) {
            hasAnyValues = true;
            internalValueResult.reportTemplate = this._reportTemplate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReportSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accounts = undefined;
            this._frameworkArns = undefined;
            this._organizationUnits = undefined;
            this._regions = undefined;
            this._reportTemplate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accounts = value.accounts;
            this._frameworkArns = value.frameworkArns;
            this._organizationUnits = value.organizationUnits;
            this._regions = value.regions;
            this._reportTemplate = value.reportTemplate;
        }
    }

    // accounts - computed: true, optional: true, required: false
    private _accounts?: string[]; 
    public get accounts() {
        return cdktn.Fn.tolist(this.getListAttribute('accounts'));
    }
    public set accounts(value: string[]) {
        this._accounts = value;
    }
    public resetAccounts() {
        this._accounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountsInput() {
        return this._accounts;
    }

    // framework_arns - computed: true, optional: true, required: false
    private _frameworkArns?: string[]; 
    public get frameworkArns() {
        return cdktn.Fn.tolist(this.getListAttribute('framework_arns'));
    }
    public set frameworkArns(value: string[]) {
        this._frameworkArns = value;
    }
    public resetFrameworkArns() {
        this._frameworkArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkArnsInput() {
        return this._frameworkArns;
    }

    // organization_units - computed: true, optional: true, required: false
    private _organizationUnits?: string[]; 
    public get organizationUnits() {
        return cdktn.Fn.tolist(this.getListAttribute('organization_units'));
    }
    public set organizationUnits(value: string[]) {
        this._organizationUnits = value;
    }
    public resetOrganizationUnits() {
        this._organizationUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationUnitsInput() {
        return this._organizationUnits;
    }

    // regions - computed: true, optional: true, required: false
    private _regions?: string[]; 
    public get regions() {
        return cdktn.Fn.tolist(this.getListAttribute('regions'));
    }
    public set regions(value: string[]) {
        this._regions = value;
    }
    public resetRegions() {
        this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
        return this._regions;
    }

    // report_template - computed: false, optional: false, required: true
    private _reportTemplate?: string; 
    public get reportTemplate() {
        return this.getStringAttribute('report_template');
    }
    public set reportTemplate(value: string) {
        this._reportTemplate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get reportTemplateInput() {
        return this._reportTemplate;
    }
}
}
