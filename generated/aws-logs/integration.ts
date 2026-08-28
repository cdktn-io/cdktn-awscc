// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIntegrationProps extends cdktn.TerraformMetaArguments {
    /**
    * User provided identifier for integration, unique to the user account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration#integration_name CcIntegration#integration_name}
    */
    readonly integrationName: string;
    /**
    * The type of the Integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration#integration_type CcIntegration#integration_type}
    */
    readonly integrationType: string;
    /**
    * OpenSearchResourceConfig for the given Integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration#resource_config CcIntegration#resource_config}
    */
    readonly resourceConfig: CcIntegration.ResourceConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration awscc_logs_integration}
*/
export class CcIntegration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_logs_integration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIntegration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIntegration to import
    * @param importFromId The id of the existing CcIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIntegration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_logs_integration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration awscc_logs_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIntegrationProps
    */
    public constructor(scope: Construct, id: string, config: CcIntegrationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_logs_integration',
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
        this._integrationName = config.integrationName;
        this._integrationType = config.integrationType;
        this._resourceConfig.internalValue = config.resourceConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // integration_name - computed: false, optional: false, required: true
    private _integrationName?: string; 
    public get integrationName() {
        return this.getStringAttribute('integration_name');
    }
    public set integrationName(value: string) {
        this._integrationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationNameInput() {
        return this._integrationName;
    }

    // integration_status - computed: true, optional: false, required: false
    public get integrationStatus() {
        return this.getStringAttribute('integration_status');
    }

    // integration_type - computed: false, optional: false, required: true
    private _integrationType?: string; 
    public get integrationType() {
        return this.getStringAttribute('integration_type');
    }
    public set integrationType(value: string) {
        this._integrationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationTypeInput() {
        return this._integrationType;
    }

    // resource_config - computed: false, optional: false, required: true
    private _resourceConfig = new CcIntegration.ResourceConfigPropertyOutputReference(this, "resource_config");
    public get resourceConfig() {
        return this._resourceConfig;
    }
    public putResourceConfig(value: CcIntegration.ResourceConfigProperty) {
        this._resourceConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigInput() {
        return this._resourceConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            integration_name: cdktn.stringToTerraform(this._integrationName),
            integration_type: cdktn.stringToTerraform(this._integrationType),
            resource_config: ccIntegrationResourceConfigPropertyToTerraform(this._resourceConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            integration_name: {
                value: cdktn.stringToHclTerraform(this._integrationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integration_type: {
                value: cdktn.stringToHclTerraform(this._integrationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_config: {
                value: ccIntegrationResourceConfigPropertyToHclTerraform(this._resourceConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIntegration.ResourceConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIntegrationOpenSearchResourceConfigPropertyToTerraform(struct?: CcIntegration.OpenSearchResourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_arn: cdktn.stringToTerraform(struct!.applicationArn),
        dashboard_viewer_principals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dashboardViewerPrincipals),
        data_source_role_arn: cdktn.stringToTerraform(struct!.dataSourceRoleArn),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
        retention_days: cdktn.numberToTerraform(struct!.retentionDays),
    }
}


export function ccIntegrationOpenSearchResourceConfigPropertyToHclTerraform(struct?: CcIntegration.OpenSearchResourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_arn: {
            value: cdktn.stringToHclTerraform(struct!.applicationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dashboard_viewer_principals: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dashboardViewerPrincipals),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        data_source_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.dataSourceRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retention_days: {
            value: cdktn.numberToHclTerraform(struct!.retentionDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntegrationResourceConfigPropertyToTerraform(struct?: CcIntegration.ResourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        open_search_resource_config: ccIntegrationOpenSearchResourceConfigPropertyToTerraform(struct!.openSearchResourceConfig),
    }
}


export function ccIntegrationResourceConfigPropertyToHclTerraform(struct?: CcIntegration.ResourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        open_search_resource_config: {
            value: ccIntegrationOpenSearchResourceConfigPropertyToHclTerraform(struct!.openSearchResourceConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenSearchResourceConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcIntegration {
export interface OpenSearchResourceConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration#application_arn CcIntegration#application_arn}
    */
    readonly applicationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration#dashboard_viewer_principals CcIntegration#dashboard_viewer_principals}
    */
    readonly dashboardViewerPrincipals?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration#data_source_role_arn CcIntegration#data_source_role_arn}
    */
    readonly dataSourceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration#kms_key_arn CcIntegration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration#retention_days CcIntegration#retention_days}
    */
    readonly retentionDays?: number;
}
export class OpenSearchResourceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenSearchResourceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationArn = this._applicationArn;
        }
        if (this._dashboardViewerPrincipals !== undefined) {
            hasAnyValues = true;
            internalValueResult.dashboardViewerPrincipals = this._dashboardViewerPrincipals;
        }
        if (this._dataSourceRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSourceRoleArn = this._dataSourceRoleArn;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._retentionDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionDays = this._retentionDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenSearchResourceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationArn = undefined;
            this._dashboardViewerPrincipals = undefined;
            this._dataSourceRoleArn = undefined;
            this._kmsKeyArn = undefined;
            this._retentionDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationArn = value.applicationArn;
            this._dashboardViewerPrincipals = value.dashboardViewerPrincipals;
            this._dataSourceRoleArn = value.dataSourceRoleArn;
            this._kmsKeyArn = value.kmsKeyArn;
            this._retentionDays = value.retentionDays;
        }
    }

    // application_arn - computed: true, optional: true, required: false
    private _applicationArn?: string; 
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }
    public set applicationArn(value: string) {
        this._applicationArn = value;
    }
    public resetApplicationArn() {
        this._applicationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationArnInput() {
        return this._applicationArn;
    }

    // dashboard_viewer_principals - computed: true, optional: true, required: false
    private _dashboardViewerPrincipals?: string[]; 
    public get dashboardViewerPrincipals() {
        return this.getListAttribute('dashboard_viewer_principals');
    }
    public set dashboardViewerPrincipals(value: string[]) {
        this._dashboardViewerPrincipals = value;
    }
    public resetDashboardViewerPrincipals() {
        this._dashboardViewerPrincipals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dashboardViewerPrincipalsInput() {
        return this._dashboardViewerPrincipals;
    }

    // data_source_role_arn - computed: true, optional: true, required: false
    private _dataSourceRoleArn?: string; 
    public get dataSourceRoleArn() {
        return this.getStringAttribute('data_source_role_arn');
    }
    public set dataSourceRoleArn(value: string) {
        this._dataSourceRoleArn = value;
    }
    public resetDataSourceRoleArn() {
        this._dataSourceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceRoleArnInput() {
        return this._dataSourceRoleArn;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // retention_days - computed: true, optional: true, required: false
    private _retentionDays?: number; 
    public get retentionDays() {
        return this.getNumberAttribute('retention_days');
    }
    public set retentionDays(value: number) {
        this._retentionDays = value;
    }
    public resetRetentionDays() {
        this._retentionDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionDaysInput() {
        return this._retentionDays;
    }
}
export interface ResourceConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_integration#open_search_resource_config CcIntegration#open_search_resource_config}
    */
    readonly openSearchResourceConfig?: OpenSearchResourceConfigProperty;
}
export class ResourceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._openSearchResourceConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.openSearchResourceConfig = this._openSearchResourceConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._openSearchResourceConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._openSearchResourceConfig.internalValue = value.openSearchResourceConfig;
        }
    }

    // open_search_resource_config - computed: true, optional: true, required: false
    private _openSearchResourceConfig = new OpenSearchResourceConfigPropertyOutputReference(this, "open_search_resource_config");
    public get openSearchResourceConfig() {
        return this._openSearchResourceConfig;
    }
    public putOpenSearchResourceConfig(value: OpenSearchResourceConfigProperty) {
        this._openSearchResourceConfig.internalValue = value;
    }
    public resetOpenSearchResourceConfig() {
        this._openSearchResourceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openSearchResourceConfigInput() {
        return this._openSearchResourceConfig.internalValue;
    }
}
}
