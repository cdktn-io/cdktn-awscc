// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDashboardProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#aws_account_id CcDashboard#aws_account_id}
    */
    readonly awsAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#dashboard_id CcDashboard#dashboard_id}
    */
    readonly dashboardId: string;
    /**
    * <p>Dashboard publish options.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#dashboard_publish_options CcDashboard#dashboard_publish_options}
    */
    readonly dashboardPublishOptions?: CcDashboard.DashboardPublishOptionsProperty;
    /**
    * <p>The display name of the dashboard.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#name CcDashboard#name}
    */
    readonly name?: string;
    /**
    * <p>A list of QuickSight parameters and the list's override values.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#parameters CcDashboard#parameters}
    */
    readonly parameters?: CcDashboard.ParametersProperty;
    /**
    * <p>A structure that contains the permissions of the dashboard. You can use this structure
    *             for granting permissions by providing a list of IAM action information for each
    *             principal ARN. </p>
    * 
    *         <p>To specify no permissions, omit the permissions list.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#permissions CcDashboard#permissions}
    */
    readonly permissions?: CcDashboard.ResourcePermissionProperty[] | cdktn.IResolvable;
    /**
    * <p>Dashboard source entity.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#source_entity CcDashboard#source_entity}
    */
    readonly sourceEntity: CcDashboard.DashboardSourceEntityProperty;
    /**
    * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
    *             dashboard.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#tags CcDashboard#tags}
    */
    readonly tags?: CcDashboard.TagProperty[] | cdktn.IResolvable;
    /**
    * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
    *             you add a value for this field, it overrides the value that is used in the source
    *             entity. The theme ARN must exist in the same AWS account where you create the
    *             dashboard.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#theme_arn CcDashboard#theme_arn}
    */
    readonly themeArn?: string;
    /**
    * <p>A description for the first version of the dashboard being created.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#version_description CcDashboard#version_description}
    */
    readonly versionDescription?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard awscc_quicksight_dashboard}
*/
export class CcDashboard extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_dashboard";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDashboard resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDashboard to import
    * @param importFromId The id of the existing CcDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDashboard to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_dashboard", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard awscc_quicksight_dashboard} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDashboardProps
    */
    public constructor(scope: Construct, id: string, config: CcDashboardProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_dashboard',
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
        this._awsAccountId = config.awsAccountId;
        this._dashboardId = config.dashboardId;
        this._dashboardPublishOptions.internalValue = config.dashboardPublishOptions;
        this._name = config.name;
        this._parameters.internalValue = config.parameters;
        this._permissions.internalValue = config.permissions;
        this._sourceEntity.internalValue = config.sourceEntity;
        this._tags.internalValue = config.tags;
        this._themeArn = config.themeArn;
        this._versionDescription = config.versionDescription;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // dashboard_id - computed: false, optional: false, required: true
    private _dashboardId?: string; 
    public get dashboardId() {
        return this.getStringAttribute('dashboard_id');
    }
    public set dashboardId(value: string) {
        this._dashboardId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dashboardIdInput() {
        return this._dashboardId;
    }

    // dashboard_publish_options - computed: true, optional: true, required: false
    private _dashboardPublishOptions = new CcDashboard.DashboardPublishOptionsPropertyOutputReference(this, "dashboard_publish_options");
    public get dashboardPublishOptions() {
        return this._dashboardPublishOptions;
    }
    public putDashboardPublishOptions(value: CcDashboard.DashboardPublishOptionsProperty) {
        this._dashboardPublishOptions.internalValue = value;
    }
    public resetDashboardPublishOptions() {
        this._dashboardPublishOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dashboardPublishOptionsInput() {
        return this._dashboardPublishOptions.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_published_time - computed: true, optional: false, required: false
    public get lastPublishedTime() {
        return this.getStringAttribute('last_published_time');
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
    private _parameters = new CcDashboard.ParametersPropertyOutputReference(this, "parameters");
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: CcDashboard.ParametersProperty) {
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
    private _permissions = new CcDashboard.ResourcePermissionPropertyList(this, "permissions", false);
    public get permissions() {
        return this._permissions;
    }
    public putPermissions(value: CcDashboard.ResourcePermissionProperty[] | cdktn.IResolvable) {
        this._permissions.internalValue = value;
    }
    public resetPermissions() {
        this._permissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions.internalValue;
    }

    // source_entity - computed: false, optional: false, required: true
    private _sourceEntity = new CcDashboard.DashboardSourceEntityPropertyOutputReference(this, "source_entity");
    public get sourceEntity() {
        return this._sourceEntity;
    }
    public putSourceEntity(value: CcDashboard.DashboardSourceEntityProperty) {
        this._sourceEntity.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceEntityInput() {
        return this._sourceEntity.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDashboard.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDashboard.TagProperty[] | cdktn.IResolvable) {
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

    // version - computed: true, optional: false, required: false
    private _version = new CcDashboard.VersionPropertyOutputReference(this, "version");
    public get version() {
        return this._version;
    }

    // version_description - computed: true, optional: true, required: false
    private _versionDescription?: string; 
    public get versionDescription() {
        return this.getStringAttribute('version_description');
    }
    public set versionDescription(value: string) {
        this._versionDescription = value;
    }
    public resetVersionDescription() {
        this._versionDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionDescriptionInput() {
        return this._versionDescription;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
            dashboard_id: cdktn.stringToTerraform(this._dashboardId),
            dashboard_publish_options: ccDashboardDashboardPublishOptionsPropertyToTerraform(this._dashboardPublishOptions.internalValue),
            name: cdktn.stringToTerraform(this._name),
            parameters: ccDashboardParametersPropertyToTerraform(this._parameters.internalValue),
            permissions: cdktn.listMapper(ccDashboardResourcePermissionPropertyToTerraform, false)(this._permissions.internalValue),
            source_entity: ccDashboardDashboardSourceEntityPropertyToTerraform(this._sourceEntity.internalValue),
            tags: cdktn.listMapper(ccDashboardTagPropertyToTerraform, false)(this._tags.internalValue),
            theme_arn: cdktn.stringToTerraform(this._themeArn),
            version_description: cdktn.stringToTerraform(this._versionDescription),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aws_account_id: {
                value: cdktn.stringToHclTerraform(this._awsAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dashboard_id: {
                value: cdktn.stringToHclTerraform(this._dashboardId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dashboard_publish_options: {
                value: ccDashboardDashboardPublishOptionsPropertyToHclTerraform(this._dashboardPublishOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDashboard.DashboardPublishOptionsProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameters: {
                value: ccDashboardParametersPropertyToHclTerraform(this._parameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDashboard.ParametersProperty",
            },
            permissions: {
                value: cdktn.listMapperHcl(ccDashboardResourcePermissionPropertyToHclTerraform, false)(this._permissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDashboard.ResourcePermissionPropertyList",
            },
            source_entity: {
                value: ccDashboardDashboardSourceEntityPropertyToHclTerraform(this._sourceEntity.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDashboard.DashboardSourceEntityProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDashboardTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDashboard.TagPropertyList",
            },
            theme_arn: {
                value: cdktn.stringToHclTerraform(this._themeArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            version_description: {
                value: cdktn.stringToHclTerraform(this._versionDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDashboardAdHocFilteringOptionPropertyToTerraform(struct?: CcDashboard.AdHocFilteringOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
    }
}


export function ccDashboardAdHocFilteringOptionPropertyToHclTerraform(struct?: CcDashboard.AdHocFilteringOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_status: {
            value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDashboardExportToCSVOptionPropertyToTerraform(struct?: CcDashboard.ExportToCSVOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
    }
}


export function ccDashboardExportToCSVOptionPropertyToHclTerraform(struct?: CcDashboard.ExportToCSVOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_status: {
            value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDashboardSheetControlsOptionPropertyToTerraform(struct?: CcDashboard.SheetControlsOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        visibility_state: cdktn.stringToTerraform(struct!.visibilityState),
    }
}


export function ccDashboardSheetControlsOptionPropertyToHclTerraform(struct?: CcDashboard.SheetControlsOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        visibility_state: {
            value: cdktn.stringToHclTerraform(struct!.visibilityState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDashboardDashboardPublishOptionsPropertyToTerraform(struct?: CcDashboard.DashboardPublishOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ad_hoc_filtering_option: ccDashboardAdHocFilteringOptionPropertyToTerraform(struct!.adHocFilteringOption),
        export_to_csv_option: ccDashboardExportToCSVOptionPropertyToTerraform(struct!.exportToCsvOption),
        sheet_controls_option: ccDashboardSheetControlsOptionPropertyToTerraform(struct!.sheetControlsOption),
    }
}


export function ccDashboardDashboardPublishOptionsPropertyToHclTerraform(struct?: CcDashboard.DashboardPublishOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ad_hoc_filtering_option: {
            value: ccDashboardAdHocFilteringOptionPropertyToHclTerraform(struct!.adHocFilteringOption),
            isBlock: true,
            type: "struct",
            storageClassType: "AdHocFilteringOptionProperty",
        },
        export_to_csv_option: {
            value: ccDashboardExportToCSVOptionPropertyToHclTerraform(struct!.exportToCsvOption),
            isBlock: true,
            type: "struct",
            storageClassType: "ExportToCSVOptionProperty",
        },
        sheet_controls_option: {
            value: ccDashboardSheetControlsOptionPropertyToHclTerraform(struct!.sheetControlsOption),
            isBlock: true,
            type: "struct",
            storageClassType: "SheetControlsOptionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDashboardDateTimeParameterPropertyToTerraform(struct?: CcDashboard.DateTimeParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccDashboardDateTimeParameterPropertyToHclTerraform(struct?: CcDashboard.DateTimeParameterProperty | cdktn.IResolvable): any {
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


export function ccDashboardDecimalParameterPropertyToTerraform(struct?: CcDashboard.DecimalParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
    }
}


export function ccDashboardDecimalParameterPropertyToHclTerraform(struct?: CcDashboard.DecimalParameterProperty | cdktn.IResolvable): any {
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


export function ccDashboardIntegerParameterPropertyToTerraform(struct?: CcDashboard.IntegerParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
    }
}


export function ccDashboardIntegerParameterPropertyToHclTerraform(struct?: CcDashboard.IntegerParameterProperty | cdktn.IResolvable): any {
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


export function ccDashboardStringParameterPropertyToTerraform(struct?: CcDashboard.StringParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccDashboardStringParameterPropertyToHclTerraform(struct?: CcDashboard.StringParameterProperty | cdktn.IResolvable): any {
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


export function ccDashboardParametersPropertyToTerraform(struct?: CcDashboard.ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_time_parameters: cdktn.listMapper(ccDashboardDateTimeParameterPropertyToTerraform, false)(struct!.dateTimeParameters),
        decimal_parameters: cdktn.listMapper(ccDashboardDecimalParameterPropertyToTerraform, false)(struct!.decimalParameters),
        integer_parameters: cdktn.listMapper(ccDashboardIntegerParameterPropertyToTerraform, false)(struct!.integerParameters),
        string_parameters: cdktn.listMapper(ccDashboardStringParameterPropertyToTerraform, false)(struct!.stringParameters),
    }
}


export function ccDashboardParametersPropertyToHclTerraform(struct?: CcDashboard.ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_time_parameters: {
            value: cdktn.listMapperHcl(ccDashboardDateTimeParameterPropertyToHclTerraform, false)(struct!.dateTimeParameters),
            isBlock: true,
            type: "list",
            storageClassType: "DateTimeParameterPropertyList",
        },
        decimal_parameters: {
            value: cdktn.listMapperHcl(ccDashboardDecimalParameterPropertyToHclTerraform, false)(struct!.decimalParameters),
            isBlock: true,
            type: "list",
            storageClassType: "DecimalParameterPropertyList",
        },
        integer_parameters: {
            value: cdktn.listMapperHcl(ccDashboardIntegerParameterPropertyToHclTerraform, false)(struct!.integerParameters),
            isBlock: true,
            type: "list",
            storageClassType: "IntegerParameterPropertyList",
        },
        string_parameters: {
            value: cdktn.listMapperHcl(ccDashboardStringParameterPropertyToHclTerraform, false)(struct!.stringParameters),
            isBlock: true,
            type: "list",
            storageClassType: "StringParameterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDashboardResourcePermissionPropertyToTerraform(struct?: CcDashboard.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        principal: cdktn.stringToTerraform(struct!.principal),
    }
}


export function ccDashboardResourcePermissionPropertyToHclTerraform(struct?: CcDashboard.ResourcePermissionProperty | cdktn.IResolvable): any {
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


export function ccDashboardDataSetReferencePropertyToTerraform(struct?: CcDashboard.DataSetReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_set_arn: cdktn.stringToTerraform(struct!.dataSetArn),
        data_set_placeholder: cdktn.stringToTerraform(struct!.dataSetPlaceholder),
    }
}


export function ccDashboardDataSetReferencePropertyToHclTerraform(struct?: CcDashboard.DataSetReferenceProperty | cdktn.IResolvable): any {
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


export function ccDashboardDashboardSourceTemplatePropertyToTerraform(struct?: CcDashboard.DashboardSourceTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        data_set_references: cdktn.listMapper(ccDashboardDataSetReferencePropertyToTerraform, false)(struct!.dataSetReferences),
    }
}


export function ccDashboardDashboardSourceTemplatePropertyToHclTerraform(struct?: CcDashboard.DashboardSourceTemplateProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccDashboardDataSetReferencePropertyToHclTerraform, false)(struct!.dataSetReferences),
            isBlock: true,
            type: "list",
            storageClassType: "DataSetReferencePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDashboardDashboardSourceEntityPropertyToTerraform(struct?: CcDashboard.DashboardSourceEntityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_template: ccDashboardDashboardSourceTemplatePropertyToTerraform(struct!.sourceTemplate),
    }
}


export function ccDashboardDashboardSourceEntityPropertyToHclTerraform(struct?: CcDashboard.DashboardSourceEntityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_template: {
            value: ccDashboardDashboardSourceTemplatePropertyToHclTerraform(struct!.sourceTemplate),
            isBlock: true,
            type: "struct",
            storageClassType: "DashboardSourceTemplateProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDashboardTagPropertyToTerraform(struct?: CcDashboard.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDashboardTagPropertyToHclTerraform(struct?: CcDashboard.TagProperty | cdktn.IResolvable): any {
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


export function ccDashboardErrorsPropertyToTerraform(struct?: CcDashboard.ErrorsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDashboardErrorsPropertyToHclTerraform(struct?: CcDashboard.ErrorsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDashboardSheetsPropertyToTerraform(struct?: CcDashboard.SheetsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDashboardSheetsPropertyToHclTerraform(struct?: CcDashboard.SheetsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDashboardVersionPropertyToTerraform(struct?: CcDashboard.VersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDashboardVersionPropertyToHclTerraform(struct?: CcDashboard.VersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcDashboard {
export interface AdHocFilteringOptionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#availability_status CcDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export class AdHocFilteringOptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdHocFilteringOptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityStatus = this._availabilityStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdHocFilteringOptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityStatus = value.availabilityStatus;
        }
    }

    // availability_status - computed: true, optional: true, required: false
    private _availabilityStatus?: string; 
    public get availabilityStatus() {
        return this.getStringAttribute('availability_status');
    }
    public set availabilityStatus(value: string) {
        this._availabilityStatus = value;
    }
    public resetAvailabilityStatus() {
        this._availabilityStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityStatusInput() {
        return this._availabilityStatus;
    }
}
export interface ExportToCSVOptionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#availability_status CcDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export class ExportToCSVOptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExportToCSVOptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityStatus = this._availabilityStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExportToCSVOptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityStatus = value.availabilityStatus;
        }
    }

    // availability_status - computed: true, optional: true, required: false
    private _availabilityStatus?: string; 
    public get availabilityStatus() {
        return this.getStringAttribute('availability_status');
    }
    public set availabilityStatus(value: string) {
        this._availabilityStatus = value;
    }
    public resetAvailabilityStatus() {
        this._availabilityStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityStatusInput() {
        return this._availabilityStatus;
    }
}
export interface SheetControlsOptionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#visibility_state CcDashboard#visibility_state}
    */
    readonly visibilityState?: string;
}
export class SheetControlsOptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SheetControlsOptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._visibilityState !== undefined) {
            hasAnyValues = true;
            internalValueResult.visibilityState = this._visibilityState;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SheetControlsOptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._visibilityState = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._visibilityState = value.visibilityState;
        }
    }

    // visibility_state - computed: true, optional: true, required: false
    private _visibilityState?: string; 
    public get visibilityState() {
        return this.getStringAttribute('visibility_state');
    }
    public set visibilityState(value: string) {
        this._visibilityState = value;
    }
    public resetVisibilityState() {
        this._visibilityState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get visibilityStateInput() {
        return this._visibilityState;
    }
}
export interface DashboardPublishOptionsProperty {
    /**
    * <p>Ad hoc (one-time) filtering option.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#ad_hoc_filtering_option CcDashboard#ad_hoc_filtering_option}
    */
    readonly adHocFilteringOption?: AdHocFilteringOptionProperty;
    /**
    * <p>Export to .csv option.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#export_to_csv_option CcDashboard#export_to_csv_option}
    */
    readonly exportToCsvOption?: ExportToCSVOptionProperty;
    /**
    * <p>Sheet controls option.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#sheet_controls_option CcDashboard#sheet_controls_option}
    */
    readonly sheetControlsOption?: SheetControlsOptionProperty;
}
export class DashboardPublishOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashboardPublishOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._adHocFilteringOption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.adHocFilteringOption = this._adHocFilteringOption?.internalValue;
        }
        if (this._exportToCsvOption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportToCsvOption = this._exportToCsvOption?.internalValue;
        }
        if (this._sheetControlsOption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sheetControlsOption = this._sheetControlsOption?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashboardPublishOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._adHocFilteringOption.internalValue = undefined;
            this._exportToCsvOption.internalValue = undefined;
            this._sheetControlsOption.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._adHocFilteringOption.internalValue = value.adHocFilteringOption;
            this._exportToCsvOption.internalValue = value.exportToCsvOption;
            this._sheetControlsOption.internalValue = value.sheetControlsOption;
        }
    }

    // ad_hoc_filtering_option - computed: true, optional: true, required: false
    private _adHocFilteringOption = new AdHocFilteringOptionPropertyOutputReference(this, "ad_hoc_filtering_option");
    public get adHocFilteringOption() {
        return this._adHocFilteringOption;
    }
    public putAdHocFilteringOption(value: AdHocFilteringOptionProperty) {
        this._adHocFilteringOption.internalValue = value;
    }
    public resetAdHocFilteringOption() {
        this._adHocFilteringOption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adHocFilteringOptionInput() {
        return this._adHocFilteringOption.internalValue;
    }

    // export_to_csv_option - computed: true, optional: true, required: false
    private _exportToCsvOption = new ExportToCSVOptionPropertyOutputReference(this, "export_to_csv_option");
    public get exportToCsvOption() {
        return this._exportToCsvOption;
    }
    public putExportToCsvOption(value: ExportToCSVOptionProperty) {
        this._exportToCsvOption.internalValue = value;
    }
    public resetExportToCsvOption() {
        this._exportToCsvOption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportToCsvOptionInput() {
        return this._exportToCsvOption.internalValue;
    }

    // sheet_controls_option - computed: true, optional: true, required: false
    private _sheetControlsOption = new SheetControlsOptionPropertyOutputReference(this, "sheet_controls_option");
    public get sheetControlsOption() {
        return this._sheetControlsOption;
    }
    public putSheetControlsOption(value: SheetControlsOptionProperty) {
        this._sheetControlsOption.internalValue = value;
    }
    public resetSheetControlsOption() {
        this._sheetControlsOption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sheetControlsOptionInput() {
        return this._sheetControlsOption.internalValue;
    }
}
export interface DateTimeParameterProperty {
    /**
    * <p>A display name for the date-time parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#name CcDashboard#name}
    */
    readonly name?: string;
    /**
    * <p>The values for the date-time parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#values CcDashboard#values}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#name CcDashboard#name}
    */
    readonly name?: string;
    /**
    * <p>The values for the decimal parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#values CcDashboard#values}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#name CcDashboard#name}
    */
    readonly name?: string;
    /**
    * <p>The values for the integer parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#values CcDashboard#values}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#name CcDashboard#name}
    */
    readonly name?: string;
    /**
    * <p>The values of a string parameter.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#values CcDashboard#values}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#date_time_parameters CcDashboard#date_time_parameters}
    */
    readonly dateTimeParameters?: DateTimeParameterProperty[] | cdktn.IResolvable;
    /**
    * <p>Decimal parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#decimal_parameters CcDashboard#decimal_parameters}
    */
    readonly decimalParameters?: DecimalParameterProperty[] | cdktn.IResolvable;
    /**
    * <p>Integer parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#integer_parameters CcDashboard#integer_parameters}
    */
    readonly integerParameters?: IntegerParameterProperty[] | cdktn.IResolvable;
    /**
    * <p>String parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#string_parameters CcDashboard#string_parameters}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#actions CcDashboard#actions}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#principal CcDashboard#principal}
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
export interface DataSetReferenceProperty {
    /**
    * <p>Dataset Amazon Resource Name (ARN).</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#data_set_arn CcDashboard#data_set_arn}
    */
    readonly dataSetArn?: string;
    /**
    * <p>Dataset placeholder.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#data_set_placeholder CcDashboard#data_set_placeholder}
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
export interface DashboardSourceTemplateProperty {
    /**
    * <p>The Amazon Resource Name (ARN) of the resource.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#arn CcDashboard#arn}
    */
    readonly arn?: string;
    /**
    * <p>Dataset references.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#data_set_references CcDashboard#data_set_references}
    */
    readonly dataSetReferences?: DataSetReferenceProperty[] | cdktn.IResolvable;
}
export class DashboardSourceTemplatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashboardSourceTemplateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DashboardSourceTemplateProperty | cdktn.IResolvable | undefined) {
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
export interface DashboardSourceEntityProperty {
    /**
    * <p>Dashboard source template.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#source_template CcDashboard#source_template}
    */
    readonly sourceTemplate?: DashboardSourceTemplateProperty;
}
export class DashboardSourceEntityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashboardSourceEntityProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DashboardSourceEntityProperty | cdktn.IResolvable | undefined) {
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
    private _sourceTemplate = new DashboardSourceTemplatePropertyOutputReference(this, "source_template");
    public get sourceTemplate() {
        return this._sourceTemplate;
    }
    public putSourceTemplate(value: DashboardSourceTemplateProperty) {
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#key CcDashboard#key}
    */
    readonly key?: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#value CcDashboard#value}
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
export interface ErrorsProperty {
}
export class ErrorsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ErrorsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ErrorsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // message - computed: true, optional: false, required: false
    public get message() {
        return this.getStringAttribute('message');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }
}

export class ErrorsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ErrorsPropertyOutputReference {
        return new ErrorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SheetsProperty {
}
export class SheetsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SheetsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SheetsProperty | undefined) {
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

export class SheetsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): SheetsPropertyOutputReference {
        return new SheetsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VersionProperty {
}
export class VersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VersionProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VersionProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // data_set_arns - computed: true, optional: false, required: false
    public get dataSetArns() {
        return this.getListAttribute('data_set_arns');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
        return this.getStringAttribute('description');
    }

    // errors - computed: true, optional: false, required: false
    private _errors = new ErrorsPropertyList(this, "errors", false);
    public get errors() {
        return this._errors;
    }

    // sheets - computed: true, optional: false, required: false
    private _sheets = new SheetsPropertyList(this, "sheets", false);
    public get sheets() {
        return this._sheets;
    }

    // source_entity_arn - computed: true, optional: false, required: false
    public get sourceEntityArn() {
        return this.getStringAttribute('source_entity_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // theme_arn - computed: true, optional: false, required: false
    public get themeArn() {
        return this.getStringAttribute('theme_arn');
    }

    // version_number - computed: true, optional: false, required: false
    public get versionNumber() {
        return this.getNumberAttribute('version_number');
    }
}
}
