// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectorV2Props extends cdktn.TerraformMetaArguments {
    /**
    * A description of the connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#description CcConnectorV2#description}
    */
    readonly description?: string;
    /**
    * The ARN of KMS key used for the connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#kms_key_arn CcConnectorV2#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * The name of the connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#name CcConnectorV2#name}
    */
    readonly name: string;
    /**
    * The third-party provider configuration for the connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#provider_name CcConnectorV2#provider_name}
    */
    readonly providerName: CcConnectorV2.ProviderNameProperty;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#tags CcConnectorV2#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2 awscc_securityhub_connector_v2}
*/
export class CcConnectorV2 extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityhub_connector_v2";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnectorV2 resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnectorV2 to import
    * @param importFromId The id of the existing CcConnectorV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnectorV2 to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_connector_v2", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2 awscc_securityhub_connector_v2} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectorV2Props
    */
    public constructor(scope: Construct, id: string, config: CcConnectorV2Props) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityhub_connector_v2',
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
        this._description = config.description;
        this._kmsKeyArn = config.kmsKeyArn;
        this._name = config.name;
        this._providerName.internalValue = config.providerName;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connector_arn - computed: true, optional: false, required: false
    public get connectorArn() {
        return this.getStringAttribute('connector_arn');
    }

    // connector_id - computed: true, optional: false, required: false
    public get connectorId() {
        return this.getStringAttribute('connector_id');
    }

    // connector_status - computed: true, optional: false, required: false
    public get connectorStatus() {
        return this.getStringAttribute('connector_status');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // issues - computed: true, optional: false, required: false
    private _issues = new CcConnectorV2.IssuesPropertyList(this, "issues", false);
    public get issues() {
        return this._issues;
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

    // last_checked_at - computed: true, optional: false, required: false
    public get lastCheckedAt() {
        return this.getStringAttribute('last_checked_at');
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
    }

    // message - computed: true, optional: false, required: false
    public get message() {
        return this.getStringAttribute('message');
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

    // provider_name - computed: false, optional: false, required: true
    private _providerName = new CcConnectorV2.ProviderNamePropertyOutputReference(this, "provider_name");
    public get providerName() {
        return this._providerName;
    }
    public putProviderName(value: CcConnectorV2.ProviderNameProperty) {
        this._providerName.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerNameInput() {
        return this._providerName.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            name: cdktn.stringToTerraform(this._name),
            provider_name: ccConnectorV2ProviderNamePropertyToTerraform(this._providerName.internalValue),
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
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
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
            provider_name: {
                value: ccConnectorV2ProviderNamePropertyToHclTerraform(this._providerName.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnectorV2.ProviderNameProperty",
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

export function ccConnectorV2IssuesPropertyToTerraform(struct?: CcConnectorV2.IssuesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConnectorV2IssuesPropertyToHclTerraform(struct?: CcConnectorV2.IssuesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccConnectorV2ScopeConfigurationPropertyToTerraform(struct?: CcConnectorV2.ScopeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scope_type: cdktn.stringToTerraform(struct!.scopeType),
        scope_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopeValues),
    }
}


export function ccConnectorV2ScopeConfigurationPropertyToHclTerraform(struct?: CcConnectorV2.ScopeConfigurationProperty | cdktn.IResolvable): any {
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
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorV2AzurePropertyToTerraform(struct?: CcConnectorV2.AzureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_config_connector_arn: cdktn.stringToTerraform(struct!.awsConfigConnectorArn),
        azure_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.azureRegions),
        scope_configuration: ccConnectorV2ScopeConfigurationPropertyToTerraform(struct!.scopeConfiguration),
    }
}


export function ccConnectorV2AzurePropertyToHclTerraform(struct?: CcConnectorV2.AzureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_config_connector_arn: {
            value: cdktn.stringToHclTerraform(struct!.awsConfigConnectorArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        azure_regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.azureRegions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        scope_configuration: {
            value: ccConnectorV2ScopeConfigurationPropertyToHclTerraform(struct!.scopeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ScopeConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorV2JiraCloudPropertyToTerraform(struct?: CcConnectorV2.JiraCloudProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        project_key: cdktn.stringToTerraform(struct!.projectKey),
    }
}


export function ccConnectorV2JiraCloudPropertyToHclTerraform(struct?: CcConnectorV2.JiraCloudProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        project_key: {
            value: cdktn.stringToHclTerraform(struct!.projectKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorV2ServiceNowPropertyToTerraform(struct?: CcConnectorV2.ServiceNowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_name: cdktn.stringToTerraform(struct!.instanceName),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccConnectorV2ServiceNowPropertyToHclTerraform(struct?: CcConnectorV2.ServiceNowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_name: {
            value: cdktn.stringToHclTerraform(struct!.instanceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorV2ProviderNamePropertyToTerraform(struct?: CcConnectorV2.ProviderNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        azure: ccConnectorV2AzurePropertyToTerraform(struct!.azure),
        jira_cloud: ccConnectorV2JiraCloudPropertyToTerraform(struct!.jiraCloud),
        service_now: ccConnectorV2ServiceNowPropertyToTerraform(struct!.serviceNow),
    }
}


export function ccConnectorV2ProviderNamePropertyToHclTerraform(struct?: CcConnectorV2.ProviderNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        azure: {
            value: ccConnectorV2AzurePropertyToHclTerraform(struct!.azure),
            isBlock: true,
            type: "struct",
            storageClassType: "AzureProperty",
        },
        jira_cloud: {
            value: ccConnectorV2JiraCloudPropertyToHclTerraform(struct!.jiraCloud),
            isBlock: true,
            type: "struct",
            storageClassType: "JiraCloudProperty",
        },
        service_now: {
            value: ccConnectorV2ServiceNowPropertyToHclTerraform(struct!.serviceNow),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceNowProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConnectorV2 {
export interface IssuesProperty {
}
export class IssuesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IssuesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IssuesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // code - computed: true, optional: false, required: false
    public get code() {
        return this.getStringAttribute('code');
    }

    // message - computed: true, optional: false, required: false
    public get message() {
        return this.getStringAttribute('message');
    }
}

export class IssuesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): IssuesPropertyOutputReference {
        return new IssuesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScopeConfigurationProperty {
    /**
    * The scope type for the Azure connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#scope_type CcConnectorV2#scope_type}
    */
    readonly scopeType?: string;
    /**
    * The list of scope values for the Azure connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#scope_values CcConnectorV2#scope_values}
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
        return cdktn.Fn.tolist(this.getListAttribute('scope_values'));
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
}
export interface AzureProperty {
    /**
    * The ARN of the AWS Config connector used for the Azure integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#aws_config_connector_arn CcConnectorV2#aws_config_connector_arn}
    */
    readonly awsConfigConnectorArn?: string;
    /**
    * The list of Azure regions to include in the connector scope
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#azure_regions CcConnectorV2#azure_regions}
    */
    readonly azureRegions?: string[];
    /**
    * The scope configuration for an Azure connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#scope_configuration CcConnectorV2#scope_configuration}
    */
    readonly scopeConfiguration?: ScopeConfigurationProperty;
}
export class AzurePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AzureProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
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

    public set internalValue(value: AzureProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
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
            this._awsConfigConnectorArn = value.awsConfigConnectorArn;
            this._azureRegions = value.azureRegions;
            this._scopeConfiguration.internalValue = value.scopeConfiguration;
        }
    }

    // aws_config_connector_arn - computed: true, optional: true, required: false
    private _awsConfigConnectorArn?: string; 
    public get awsConfigConnectorArn() {
        return this.getStringAttribute('aws_config_connector_arn');
    }
    public set awsConfigConnectorArn(value: string) {
        this._awsConfigConnectorArn = value;
    }
    public resetAwsConfigConnectorArn() {
        this._awsConfigConnectorArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsConfigConnectorArnInput() {
        return this._awsConfigConnectorArn;
    }

    // azure_regions - computed: true, optional: true, required: false
    private _azureRegions?: string[]; 
    public get azureRegions() {
        return cdktn.Fn.tolist(this.getListAttribute('azure_regions'));
    }
    public set azureRegions(value: string[]) {
        this._azureRegions = value;
    }
    public resetAzureRegions() {
        this._azureRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azureRegionsInput() {
        return this._azureRegions;
    }

    // scope_configuration - computed: true, optional: true, required: false
    private _scopeConfiguration = new ScopeConfigurationPropertyOutputReference(this, "scope_configuration");
    public get scopeConfiguration() {
        return this._scopeConfiguration;
    }
    public putScopeConfiguration(value: ScopeConfigurationProperty) {
        this._scopeConfiguration.internalValue = value;
    }
    public resetScopeConfiguration() {
        this._scopeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeConfigurationInput() {
        return this._scopeConfiguration.internalValue;
    }
}
export interface JiraCloudProperty {
    /**
    * The project key for a Jira Cloud instance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#project_key CcConnectorV2#project_key}
    */
    readonly projectKey?: string;
}
export class JiraCloudPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JiraCloudProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._projectKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectKey = this._projectKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JiraCloudProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._projectKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._projectKey = value.projectKey;
        }
    }

    // project_key - computed: true, optional: true, required: false
    private _projectKey?: string; 
    public get projectKey() {
        return this.getStringAttribute('project_key');
    }
    public set projectKey(value: string) {
        this._projectKey = value;
    }
    public resetProjectKey() {
        this._projectKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectKeyInput() {
        return this._projectKey;
    }
}
export interface ServiceNowProperty {
    /**
    * The instance name of ServiceNow ITSM
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#instance_name CcConnectorV2#instance_name}
    */
    readonly instanceName?: string;
    /**
    * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the ServiceNow credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#secret_arn CcConnectorV2#secret_arn}
    */
    readonly secretArn?: string;
}
export class ServiceNowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceNowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceName = this._instanceName;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceNowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceName = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceName = value.instanceName;
            this._secretArn = value.secretArn;
        }
    }

    // instance_name - computed: true, optional: true, required: false
    private _instanceName?: string; 
    public get instanceName() {
        return this.getStringAttribute('instance_name');
    }
    public set instanceName(value: string) {
        this._instanceName = value;
    }
    public resetInstanceName() {
        this._instanceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceNameInput() {
        return this._instanceName;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface ProviderNameProperty {
    /**
    * The configuration settings required to establish an integration between AWS Security Hub and Azure
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#azure CcConnectorV2#azure}
    */
    readonly azure?: AzureProperty;
    /**
    * The initial configuration settings required to establish an integration between Security Hub and Jira Cloud
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#jira_cloud CcConnectorV2#jira_cloud}
    */
    readonly jiraCloud?: JiraCloudProperty;
    /**
    * The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#service_now CcConnectorV2#service_now}
    */
    readonly serviceNow?: ServiceNowProperty;
}
export class ProviderNamePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProviderNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._azure?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.azure = this._azure?.internalValue;
        }
        if (this._jiraCloud?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jiraCloud = this._jiraCloud?.internalValue;
        }
        if (this._serviceNow?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNow = this._serviceNow?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProviderNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._azure.internalValue = undefined;
            this._jiraCloud.internalValue = undefined;
            this._serviceNow.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._azure.internalValue = value.azure;
            this._jiraCloud.internalValue = value.jiraCloud;
            this._serviceNow.internalValue = value.serviceNow;
        }
    }

    // azure - computed: true, optional: true, required: false
    private _azure = new AzurePropertyOutputReference(this, "azure");
    public get azure() {
        return this._azure;
    }
    public putAzure(value: AzureProperty) {
        this._azure.internalValue = value;
    }
    public resetAzure() {
        this._azure.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azureInput() {
        return this._azure.internalValue;
    }

    // jira_cloud - computed: true, optional: true, required: false
    private _jiraCloud = new JiraCloudPropertyOutputReference(this, "jira_cloud");
    public get jiraCloud() {
        return this._jiraCloud;
    }
    public putJiraCloud(value: JiraCloudProperty) {
        this._jiraCloud.internalValue = value;
    }
    public resetJiraCloud() {
        this._jiraCloud.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jiraCloudInput() {
        return this._jiraCloud.internalValue;
    }

    // service_now - computed: true, optional: true, required: false
    private _serviceNow = new ServiceNowPropertyOutputReference(this, "service_now");
    public get serviceNow() {
        return this._serviceNow;
    }
    public putServiceNow(value: ServiceNowProperty) {
        this._serviceNow.internalValue = value;
    }
    public resetServiceNow() {
        this._serviceNow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNowInput() {
        return this._serviceNow.internalValue;
    }
}
}
