// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectorProps extends cdktn.TerraformMetaArguments {
    /**
    * Optional description of the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#description CcConnector#description}
    */
    readonly description?: string;
    /**
    * Display name for the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#name CcConnector#name}
    */
    readonly name: string;
    /**
    * Provider-specific configuration including regions and scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#provider_configuration CcConnector#provider_configuration}
    */
    readonly providerConfiguration: CcConnector.ProviderConfigurationProperty;
    /**
    * The cloud provider for this connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#provider_name CcConnector#provider_name}
    */
    readonly providerName: string;
    /**
    * Tags to apply to the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#tags CcConnector#tags}
    */
    readonly tags?: CcConnector.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector awscc_inspectorv2_connector}
*/
export class CcConnector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_inspectorv2_connector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnector to import
    * @param importFromId The id of the existing CcConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_connector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector awscc_inspectorv2_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectorProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_inspectorv2_connector',
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
        this._name = config.name;
        this._providerConfiguration.internalValue = config.providerConfiguration;
        this._providerName = config.providerName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connector_arn - computed: true, optional: false, required: false
    public get connectorArn() {
        return this.getStringAttribute('connector_arn');
    }

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

    // enablement_status - computed: true, optional: false, required: false
    public get enablementStatus() {
        return this.getStringAttribute('enablement_status');
    }

    // enablement_status_reason - computed: true, optional: false, required: false
    public get enablementStatusReason() {
        return this.getStringAttribute('enablement_status_reason');
    }

    // health - computed: true, optional: false, required: false
    private _health = new CcConnector.HealthPropertyOutputReference(this, "health");
    public get health() {
        return this._health;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
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

    // provider_configuration - computed: false, optional: false, required: true
    private _providerConfiguration = new CcConnector.ProviderConfigurationPropertyOutputReference(this, "provider_configuration");
    public get providerConfiguration() {
        return this._providerConfiguration;
    }
    public putProviderConfiguration(value: CcConnector.ProviderConfigurationProperty) {
        this._providerConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerConfigurationInput() {
        return this._providerConfiguration.internalValue;
    }

    // provider_name - computed: false, optional: false, required: true
    private _providerName?: string; 
    public get providerName() {
        return this.getStringAttribute('provider_name');
    }
    public set providerName(value: string) {
        this._providerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerNameInput() {
        return this._providerName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConnector.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConnector.TagProperty[] | cdktn.IResolvable) {
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
            name: cdktn.stringToTerraform(this._name),
            provider_configuration: ccConnectorProviderConfigurationPropertyToTerraform(this._providerConfiguration.internalValue),
            provider_name: cdktn.stringToTerraform(this._providerName),
            tags: cdktn.listMapper(ccConnectorTagPropertyToTerraform, false)(this._tags.internalValue),
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
            provider_configuration: {
                value: ccConnectorProviderConfigurationPropertyToHclTerraform(this._providerConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.ProviderConfigurationProperty",
            },
            provider_name: {
                value: cdktn.stringToHclTerraform(this._providerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConnectorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcConnector.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectorHealthPropertyToTerraform(struct?: CcConnector.HealthProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConnectorHealthPropertyToHclTerraform(struct?: CcConnector.HealthProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccConnectorScopeConfigurationPropertyToTerraform(struct?: CcConnector.ScopeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scope_type: cdktn.stringToTerraform(struct!.scopeType),
        scope_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopeValues),
    }
}


export function ccConnectorScopeConfigurationPropertyToHclTerraform(struct?: CcConnector.ScopeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scope_type: {
            value: cdktn.stringToHclTerraform(struct!.scopeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopeValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorServerlessScanningPropertyToTerraform(struct?: CcConnector.ServerlessScanningProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scope_type: cdktn.stringToTerraform(struct!.scopeType),
        scope_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopeValues),
    }
}


export function ccConnectorServerlessScanningPropertyToHclTerraform(struct?: CcConnector.ServerlessScanningProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scope_type: {
            value: cdktn.stringToHclTerraform(struct!.scopeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopeValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorVmScanningPropertyToTerraform(struct?: CcConnector.VmScanningProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scope_type: cdktn.stringToTerraform(struct!.scopeType),
        scope_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopeValues),
    }
}


export function ccConnectorVmScanningPropertyToHclTerraform(struct?: CcConnector.VmScanningProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scope_type: {
            value: cdktn.stringToHclTerraform(struct!.scopeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopeValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorAzureScopeConfigurationMapPropertyToTerraform(struct?: CcConnector.AzureScopeConfigurationMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_image_scanning: ccConnectorScopeConfigurationPropertyToTerraform(struct!.containerImageScanning),
        serverless_scanning: ccConnectorServerlessScanningPropertyToTerraform(struct!.serverlessScanning),
        vm_scanning: ccConnectorVmScanningPropertyToTerraform(struct!.vmScanning),
    }
}


export function ccConnectorAzureScopeConfigurationMapPropertyToHclTerraform(struct?: CcConnector.AzureScopeConfigurationMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_image_scanning: {
            value: ccConnectorScopeConfigurationPropertyToHclTerraform(struct!.containerImageScanning),
            isBlock: true,
            type: "struct",
            storageClassType: "ScopeConfigurationProperty",
        },
        serverless_scanning: {
            value: ccConnectorServerlessScanningPropertyToHclTerraform(struct!.serverlessScanning),
            isBlock: true,
            type: "struct",
            storageClassType: "ServerlessScanningProperty",
        },
        vm_scanning: {
            value: ccConnectorVmScanningPropertyToHclTerraform(struct!.vmScanning),
            isBlock: true,
            type: "struct",
            storageClassType: "VmScanningProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorAzureProviderConfigurationPropertyToTerraform(struct?: CcConnector.AzureProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_install_vm_scanner: cdktn.booleanToTerraform(struct!.autoInstallVmScanner),
        aws_config_connector_arn: cdktn.stringToTerraform(struct!.awsConfigConnectorArn),
        azure_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.azureRegions),
        scope_configuration: ccConnectorAzureScopeConfigurationMapPropertyToTerraform(struct!.scopeConfiguration),
    }
}


export function ccConnectorAzureProviderConfigurationPropertyToHclTerraform(struct?: CcConnector.AzureProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_install_vm_scanner: {
            value: cdktn.booleanToHclTerraform(struct!.autoInstallVmScanner),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        aws_config_connector_arn: {
            value: cdktn.stringToHclTerraform(struct!.awsConfigConnectorArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        azure_regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.azureRegions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        scope_configuration: {
            value: ccConnectorAzureScopeConfigurationMapPropertyToHclTerraform(struct!.scopeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AzureScopeConfigurationMapProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProviderConfigurationPropertyToTerraform(struct?: CcConnector.ProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        azure: ccConnectorAzureProviderConfigurationPropertyToTerraform(struct!.azure),
    }
}


export function ccConnectorProviderConfigurationPropertyToHclTerraform(struct?: CcConnector.ProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        azure: {
            value: ccConnectorAzureProviderConfigurationPropertyToHclTerraform(struct!.azure),
            isBlock: true,
            type: "struct",
            storageClassType: "AzureProviderConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorTagPropertyToTerraform(struct?: CcConnector.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectorTagPropertyToHclTerraform(struct?: CcConnector.TagProperty | cdktn.IResolvable): any {
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


export namespace CcConnector {
export interface HealthProperty {
}
export class HealthPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HealthProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // connector_status - computed: true, optional: false, required: false
    public get connectorStatus() {
        return this.getStringAttribute('connector_status');
    }

    // last_checked_at - computed: true, optional: false, required: false
    public get lastCheckedAt() {
        return this.getStringAttribute('last_checked_at');
    }

    // message - computed: true, optional: false, required: false
    public get message() {
        return this.getStringAttribute('message');
    }
}
export interface ScopeConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#scope_type CcConnector#scope_type}
    */
    readonly scopeType?: string;
    /**
    * List of subscription IDs. Empty for TENANT scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#scope_values CcConnector#scope_values}
    */
    readonly scopeValues?: string[];
}
export class ScopeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScopeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scopeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopeType = this._scopeType;
        }
        if (this._scopeValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopeValues = this._scopeValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScopeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scopeType = undefined;
            this._scopeValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scopeType = value.scopeType;
            this._scopeValues = value.scopeValues;
        }
    }

    // scope_type - computed: true, optional: true, required: false
    private _scopeType?: string; 
    public get scopeType() {
        return this.getStringAttribute('scope_type');
    }
    public set scopeType(value: string) {
        this._scopeType = value;
    }
    public resetScopeType() {
        this._scopeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeTypeInput() {
        return this._scopeType;
    }

    // scope_values - computed: true, optional: true, required: false
    private _scopeValues?: string[]; 
    public get scopeValues() {
        return this.getListAttribute('scope_values');
    }
    public set scopeValues(value: string[]) {
        this._scopeValues = value;
    }
    public resetScopeValues() {
        this._scopeValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeValuesInput() {
        return this._scopeValues;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_reason - computed: true, optional: false, required: false
    public get stateReason() {
        return this.getStringAttribute('state_reason');
    }
}
export interface ServerlessScanningProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#scope_type CcConnector#scope_type}
    */
    readonly scopeType?: string;
    /**
    * List of subscription IDs. Empty for TENANT scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#scope_values CcConnector#scope_values}
    */
    readonly scopeValues?: string[];
}
export class ServerlessScanningPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerlessScanningProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scopeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopeType = this._scopeType;
        }
        if (this._scopeValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopeValues = this._scopeValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerlessScanningProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scopeType = undefined;
            this._scopeValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scopeType = value.scopeType;
            this._scopeValues = value.scopeValues;
        }
    }

    // scope_type - computed: true, optional: true, required: false
    private _scopeType?: string; 
    public get scopeType() {
        return this.getStringAttribute('scope_type');
    }
    public set scopeType(value: string) {
        this._scopeType = value;
    }
    public resetScopeType() {
        this._scopeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeTypeInput() {
        return this._scopeType;
    }

    // scope_values - computed: true, optional: true, required: false
    private _scopeValues?: string[]; 
    public get scopeValues() {
        return this.getListAttribute('scope_values');
    }
    public set scopeValues(value: string[]) {
        this._scopeValues = value;
    }
    public resetScopeValues() {
        this._scopeValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeValuesInput() {
        return this._scopeValues;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_reason - computed: true, optional: false, required: false
    public get stateReason() {
        return this.getStringAttribute('state_reason');
    }
}
export interface VmScanningProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#scope_type CcConnector#scope_type}
    */
    readonly scopeType?: string;
    /**
    * List of subscription IDs. Empty for TENANT scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#scope_values CcConnector#scope_values}
    */
    readonly scopeValues?: string[];
}
export class VmScanningPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VmScanningProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scopeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopeType = this._scopeType;
        }
        if (this._scopeValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopeValues = this._scopeValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VmScanningProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scopeType = undefined;
            this._scopeValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scopeType = value.scopeType;
            this._scopeValues = value.scopeValues;
        }
    }

    // scope_type - computed: true, optional: true, required: false
    private _scopeType?: string; 
    public get scopeType() {
        return this.getStringAttribute('scope_type');
    }
    public set scopeType(value: string) {
        this._scopeType = value;
    }
    public resetScopeType() {
        this._scopeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeTypeInput() {
        return this._scopeType;
    }

    // scope_values - computed: true, optional: true, required: false
    private _scopeValues?: string[]; 
    public get scopeValues() {
        return this.getListAttribute('scope_values');
    }
    public set scopeValues(value: string[]) {
        this._scopeValues = value;
    }
    public resetScopeValues() {
        this._scopeValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeValuesInput() {
        return this._scopeValues;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_reason - computed: true, optional: false, required: false
    public get stateReason() {
        return this.getStringAttribute('state_reason');
    }
}
export interface AzureScopeConfigurationMapProperty {
    /**
    * Defines the scope of Azure resources to monitor for a specific resource type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#container_image_scanning CcConnector#container_image_scanning}
    */
    readonly containerImageScanning?: ScopeConfigurationProperty;
    /**
    * Defines the scope of Azure resources to monitor for a specific resource type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#serverless_scanning CcConnector#serverless_scanning}
    */
    readonly serverlessScanning?: ServerlessScanningProperty;
    /**
    * Defines the scope of Azure resources to monitor for a specific resource type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#vm_scanning CcConnector#vm_scanning}
    */
    readonly vmScanning?: VmScanningProperty;
}
export class AzureScopeConfigurationMapPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AzureScopeConfigurationMapProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerImageScanning?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerImageScanning = this._containerImageScanning?.internalValue;
        }
        if (this._serverlessScanning?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverlessScanning = this._serverlessScanning?.internalValue;
        }
        if (this._vmScanning?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vmScanning = this._vmScanning?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AzureScopeConfigurationMapProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerImageScanning.internalValue = undefined;
            this._serverlessScanning.internalValue = undefined;
            this._vmScanning.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerImageScanning.internalValue = value.containerImageScanning;
            this._serverlessScanning.internalValue = value.serverlessScanning;
            this._vmScanning.internalValue = value.vmScanning;
        }
    }

    // container_image_scanning - computed: true, optional: true, required: false
    private _containerImageScanning = new ScopeConfigurationPropertyOutputReference(this, "container_image_scanning");
    public get containerImageScanning() {
        return this._containerImageScanning;
    }
    public putContainerImageScanning(value: ScopeConfigurationProperty) {
        this._containerImageScanning.internalValue = value;
    }
    public resetContainerImageScanning() {
        this._containerImageScanning.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerImageScanningInput() {
        return this._containerImageScanning.internalValue;
    }

    // serverless_scanning - computed: true, optional: true, required: false
    private _serverlessScanning = new ServerlessScanningPropertyOutputReference(this, "serverless_scanning");
    public get serverlessScanning() {
        return this._serverlessScanning;
    }
    public putServerlessScanning(value: ServerlessScanningProperty) {
        this._serverlessScanning.internalValue = value;
    }
    public resetServerlessScanning() {
        this._serverlessScanning.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverlessScanningInput() {
        return this._serverlessScanning.internalValue;
    }

    // vm_scanning - computed: true, optional: true, required: false
    private _vmScanning = new VmScanningPropertyOutputReference(this, "vm_scanning");
    public get vmScanning() {
        return this._vmScanning;
    }
    public putVmScanning(value: VmScanningProperty) {
        this._vmScanning.internalValue = value;
    }
    public resetVmScanning() {
        this._vmScanning.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vmScanningInput() {
        return this._vmScanning.internalValue;
    }
}
export interface AzureProviderConfigurationProperty {
    /**
    * Whether to automatically install the VM scanner. Defaults to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#auto_install_vm_scanner CcConnector#auto_install_vm_scanner}
    */
    readonly autoInstallVmScanner?: boolean | cdktn.IResolvable;
    /**
    * The ARN of the AWS Config connector used for Azure resource discovery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#aws_config_connector_arn CcConnector#aws_config_connector_arn}
    */
    readonly awsConfigConnectorArn: string;
    /**
    * List of Azure regions to scan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#azure_regions CcConnector#azure_regions}
    */
    readonly azureRegions: string[];
    /**
    * Defines which resource types to scan and at what scope level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#scope_configuration CcConnector#scope_configuration}
    */
    readonly scopeConfiguration: AzureScopeConfigurationMapProperty;
}
export class AzureProviderConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AzureProviderConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoInstallVmScanner !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoInstallVmScanner = this._autoInstallVmScanner;
        }
        if (this._awsConfigConnectorArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsConfigConnectorArn = this._awsConfigConnectorArn;
        }
        if (this._azureRegions !== undefined) {
            hasAnyValues = true;
            internalValueResult.azureRegions = this._azureRegions;
        }
        if (this._scopeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopeConfiguration = this._scopeConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AzureProviderConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoInstallVmScanner = undefined;
            this._awsConfigConnectorArn = undefined;
            this._azureRegions = undefined;
            this._scopeConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoInstallVmScanner = value.autoInstallVmScanner;
            this._awsConfigConnectorArn = value.awsConfigConnectorArn;
            this._azureRegions = value.azureRegions;
            this._scopeConfiguration.internalValue = value.scopeConfiguration;
        }
    }

    // auto_install_vm_scanner - computed: true, optional: true, required: false
    private _autoInstallVmScanner?: boolean | cdktn.IResolvable; 
    public get autoInstallVmScanner() {
        return this.getBooleanAttribute('auto_install_vm_scanner');
    }
    public set autoInstallVmScanner(value: boolean | cdktn.IResolvable) {
        this._autoInstallVmScanner = value;
    }
    public resetAutoInstallVmScanner() {
        this._autoInstallVmScanner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoInstallVmScannerInput() {
        return this._autoInstallVmScanner;
    }

    // aws_config_connector_arn - computed: false, optional: false, required: true
    private _awsConfigConnectorArn?: string; 
    public get awsConfigConnectorArn() {
        return this.getStringAttribute('aws_config_connector_arn');
    }
    public set awsConfigConnectorArn(value: string) {
        this._awsConfigConnectorArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get awsConfigConnectorArnInput() {
        return this._awsConfigConnectorArn;
    }

    // azure_regions - computed: false, optional: false, required: true
    private _azureRegions?: string[]; 
    public get azureRegions() {
        return this.getListAttribute('azure_regions');
    }
    public set azureRegions(value: string[]) {
        this._azureRegions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get azureRegionsInput() {
        return this._azureRegions;
    }

    // scope_configuration - computed: false, optional: false, required: true
    private _scopeConfiguration = new AzureScopeConfigurationMapPropertyOutputReference(this, "scope_configuration");
    public get scopeConfiguration() {
        return this._scopeConfiguration;
    }
    public putScopeConfiguration(value: AzureScopeConfigurationMapProperty) {
        this._scopeConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeConfigurationInput() {
        return this._scopeConfiguration.internalValue;
    }
}
export interface ProviderConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#azure CcConnector#azure}
    */
    readonly azure: AzureProviderConfigurationProperty;
}
export class ProviderConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProviderConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._azure?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.azure = this._azure?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProviderConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._azure.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._azure.internalValue = value.azure;
        }
    }

    // azure - computed: false, optional: false, required: true
    private _azure = new AzureProviderConfigurationPropertyOutputReference(this, "azure");
    public get azure() {
        return this._azure;
    }
    public putAzure(value: AzureProviderConfigurationProperty) {
        this._azure.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get azureInput() {
        return this._azure.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#key CcConnector#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_connector#value CcConnector#value}
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
