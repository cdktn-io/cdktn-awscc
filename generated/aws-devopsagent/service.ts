// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the private connection to use for OAuth token exchange requests only. Cannot be specified when PrivateConnectionName is provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#exchange_url_private_connection_name CcService#exchange_url_private_connection_name}
    */
    readonly exchangeUrlPrivateConnectionName?: string;
    /**
    * The ARN of the KMS key to use for encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#kms_key_arn CcService#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * The name of the private connection to use for VPC connectivity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#private_connection_name CcService#private_connection_name}
    */
    readonly privateConnectionName?: string;
    /**
    * Service-specific configuration details for create operation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#service_details CcService#service_details}
    */
    readonly serviceDetails?: CcService.ServiceDetailsProperty;
    /**
    * The type of service being registered
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#service_type CcService#service_type}
    */
    readonly serviceType: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#tags CcService#tags}
    */
    readonly tags?: CcService.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the private connection to use for API calls (target URL) only. Cannot be specified when PrivateConnectionName is provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#target_url_private_connection_name CcService#target_url_private_connection_name}
    */
    readonly targetUrlPrivateConnectionName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service awscc_devopsagent_service}
*/
export class CcService extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_devopsagent_service";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcService resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcService to import
    * @param importFromId The id of the existing CcService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcService to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsagent_service", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service awscc_devopsagent_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceProps
    */
    public constructor(scope: Construct, id: string, config: CcServiceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_devopsagent_service',
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
        this._exchangeUrlPrivateConnectionName = config.exchangeUrlPrivateConnectionName;
        this._kmsKeyArn = config.kmsKeyArn;
        this._privateConnectionName = config.privateConnectionName;
        this._serviceDetails.internalValue = config.serviceDetails;
        this._serviceType = config.serviceType;
        this._tags.internalValue = config.tags;
        this._targetUrlPrivateConnectionName = config.targetUrlPrivateConnectionName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accessible_resources - computed: true, optional: false, required: false
    private _accessibleResources = new cdktn.StringMapList(this, "accessible_resources", false);
    public get accessibleResources() {
        return this._accessibleResources;
    }

    // additional_service_details - computed: true, optional: false, required: false
    private _additionalServiceDetails = new CcService.AdditionalServiceDetailsPropertyOutputReference(this, "additional_service_details");
    public get additionalServiceDetails() {
        return this._additionalServiceDetails;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // exchange_url_private_connection_name - computed: true, optional: true, required: false
    private _exchangeUrlPrivateConnectionName?: string; 
    public get exchangeUrlPrivateConnectionName() {
        return this.getStringAttribute('exchange_url_private_connection_name');
    }
    public set exchangeUrlPrivateConnectionName(value: string) {
        this._exchangeUrlPrivateConnectionName = value;
    }
    public resetExchangeUrlPrivateConnectionName() {
        this._exchangeUrlPrivateConnectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exchangeUrlPrivateConnectionNameInput() {
        return this._exchangeUrlPrivateConnectionName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // private_connection_name - computed: true, optional: true, required: false
    private _privateConnectionName?: string; 
    public get privateConnectionName() {
        return this.getStringAttribute('private_connection_name');
    }
    public set privateConnectionName(value: string) {
        this._privateConnectionName = value;
    }
    public resetPrivateConnectionName() {
        this._privateConnectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateConnectionNameInput() {
        return this._privateConnectionName;
    }

    // service_details - computed: true, optional: true, required: false
    private _serviceDetails = new CcService.ServiceDetailsPropertyOutputReference(this, "service_details");
    public get serviceDetails() {
        return this._serviceDetails;
    }
    public putServiceDetails(value: CcService.ServiceDetailsProperty) {
        this._serviceDetails.internalValue = value;
    }
    public resetServiceDetails() {
        this._serviceDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceDetailsInput() {
        return this._serviceDetails.internalValue;
    }

    // service_id - computed: true, optional: false, required: false
    public get serviceId() {
        return this.getStringAttribute('service_id');
    }

    // service_type - computed: false, optional: false, required: true
    private _serviceType?: string; 
    public get serviceType() {
        return this.getStringAttribute('service_type');
    }
    public set serviceType(value: string) {
        this._serviceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceTypeInput() {
        return this._serviceType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcService.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcService.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_url_private_connection_name - computed: true, optional: true, required: false
    private _targetUrlPrivateConnectionName?: string; 
    public get targetUrlPrivateConnectionName() {
        return this.getStringAttribute('target_url_private_connection_name');
    }
    public set targetUrlPrivateConnectionName(value: string) {
        this._targetUrlPrivateConnectionName = value;
    }
    public resetTargetUrlPrivateConnectionName() {
        this._targetUrlPrivateConnectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetUrlPrivateConnectionNameInput() {
        return this._targetUrlPrivateConnectionName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            exchange_url_private_connection_name: cdktn.stringToTerraform(this._exchangeUrlPrivateConnectionName),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            private_connection_name: cdktn.stringToTerraform(this._privateConnectionName),
            service_details: ccServiceServiceDetailsPropertyToTerraform(this._serviceDetails.internalValue),
            service_type: cdktn.stringToTerraform(this._serviceType),
            tags: cdktn.listMapper(ccServiceTagPropertyToTerraform, false)(this._tags.internalValue),
            target_url_private_connection_name: cdktn.stringToTerraform(this._targetUrlPrivateConnectionName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            exchange_url_private_connection_name: {
                value: cdktn.stringToHclTerraform(this._exchangeUrlPrivateConnectionName),
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
            private_connection_name: {
                value: cdktn.stringToHclTerraform(this._privateConnectionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_details: {
                value: ccServiceServiceDetailsPropertyToHclTerraform(this._serviceDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.ServiceDetailsProperty",
            },
            service_type: {
                value: cdktn.stringToHclTerraform(this._serviceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServiceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcService.TagPropertyList",
            },
            target_url_private_connection_name: {
                value: cdktn.stringToHclTerraform(this._targetUrlPrivateConnectionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServiceAzureIdentityPropertyToTerraform(struct?: CcService.AzureIdentityProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceAzureIdentityPropertyToHclTerraform(struct?: CcService.AzureIdentityProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceDynatracePropertyToTerraform(struct?: CcService.DynatraceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceDynatracePropertyToHclTerraform(struct?: CcService.DynatraceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceGitLabPropertyToTerraform(struct?: CcService.GitLabProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceGitLabPropertyToHclTerraform(struct?: CcService.GitLabProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceMcpServerPropertyToTerraform(struct?: CcService.McpServerProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceMcpServerPropertyToHclTerraform(struct?: CcService.McpServerProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceMcpServerGrafanaPropertyToTerraform(struct?: CcService.McpServerGrafanaProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceMcpServerGrafanaPropertyToHclTerraform(struct?: CcService.McpServerGrafanaProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceMcpServerNewRelicPropertyToTerraform(struct?: CcService.McpServerNewRelicProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceMcpServerNewRelicPropertyToHclTerraform(struct?: CcService.McpServerNewRelicProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceMcpServerSigV4PropertyToTerraform(struct?: CcService.McpServerSigV4Property): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceMcpServerSigV4PropertyToHclTerraform(struct?: CcService.McpServerSigV4Property): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceMcpServerSplunkPropertyToTerraform(struct?: CcService.McpServerSplunkProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceMcpServerSplunkPropertyToHclTerraform(struct?: CcService.McpServerSplunkProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServicePagerDutyPropertyToTerraform(struct?: CcService.PagerDutyProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServicePagerDutyPropertyToHclTerraform(struct?: CcService.PagerDutyProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceServiceNowPropertyToTerraform(struct?: CcService.ServiceNowProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceServiceNowPropertyToHclTerraform(struct?: CcService.ServiceNowProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceAdditionalServiceDetailsPropertyToTerraform(struct?: CcService.AdditionalServiceDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceAdditionalServiceDetailsPropertyToHclTerraform(struct?: CcService.AdditionalServiceDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceAzureIdentityServiceDetailsPropertyToTerraform(struct?: CcService.AzureIdentityServiceDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        tenant_id: cdktn.stringToTerraform(struct!.tenantId),
        web_identity_role_arn: cdktn.stringToTerraform(struct!.webIdentityRoleArn),
        web_identity_token_audiences: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.webIdentityTokenAudiences),
    }
}


export function ccServiceAzureIdentityServiceDetailsPropertyToHclTerraform(struct?: CcService.AzureIdentityServiceDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_id: {
            value: cdktn.stringToHclTerraform(struct!.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tenant_id: {
            value: cdktn.stringToHclTerraform(struct!.tenantId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        web_identity_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.webIdentityRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        web_identity_token_audiences: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.webIdentityTokenAudiences),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceOAuthClientDetailsPropertyToTerraform(struct?: CcService.OAuthClientDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_name: cdktn.stringToTerraform(struct!.clientName),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        exchange_parameters: cdktn.stringToTerraform(struct!.exchangeParameters),
    }
}


export function ccServiceOAuthClientDetailsPropertyToHclTerraform(struct?: CcService.OAuthClientDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_id: {
            value: cdktn.stringToHclTerraform(struct!.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_name: {
            value: cdktn.stringToHclTerraform(struct!.clientName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktn.stringToHclTerraform(struct!.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exchange_parameters: {
            value: cdktn.stringToHclTerraform(struct!.exchangeParameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceDynatraceAuthorizationConfigPropertyToTerraform(struct?: CcService.DynatraceAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        o_auth_client_credentials: ccServiceOAuthClientDetailsPropertyToTerraform(struct!.oAuthClientCredentials),
    }
}


export function ccServiceDynatraceAuthorizationConfigPropertyToHclTerraform(struct?: CcService.DynatraceAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        o_auth_client_credentials: {
            value: ccServiceOAuthClientDetailsPropertyToHclTerraform(struct!.oAuthClientCredentials),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuthClientDetailsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceDynatraceServiceDetailsPropertyToTerraform(struct?: CcService.DynatraceServiceDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_urn: cdktn.stringToTerraform(struct!.accountUrn),
        authorization_config: ccServiceDynatraceAuthorizationConfigPropertyToTerraform(struct!.authorizationConfig),
    }
}


export function ccServiceDynatraceServiceDetailsPropertyToHclTerraform(struct?: CcService.DynatraceServiceDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_urn: {
            value: cdktn.stringToHclTerraform(struct!.accountUrn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        authorization_config: {
            value: ccServiceDynatraceAuthorizationConfigPropertyToHclTerraform(struct!.authorizationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DynatraceAuthorizationConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceGitLabDetailsPropertyToTerraform(struct?: CcService.GitLabDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_id: cdktn.stringToTerraform(struct!.groupId),
        target_url: cdktn.stringToTerraform(struct!.targetUrl),
        token_type: cdktn.stringToTerraform(struct!.tokenType),
        token_value: cdktn.stringToTerraform(struct!.tokenValue),
    }
}


export function ccServiceGitLabDetailsPropertyToHclTerraform(struct?: CcService.GitLabDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_id: {
            value: cdktn.stringToHclTerraform(struct!.groupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_url: {
            value: cdktn.stringToHclTerraform(struct!.targetUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_type: {
            value: cdktn.stringToHclTerraform(struct!.tokenType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_value: {
            value: cdktn.stringToHclTerraform(struct!.tokenValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceApiKeyDetailsPropertyToTerraform(struct?: CcService.ApiKeyDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key_header: cdktn.stringToTerraform(struct!.apiKeyHeader),
        api_key_name: cdktn.stringToTerraform(struct!.apiKeyName),
        api_key_value: cdktn.stringToTerraform(struct!.apiKeyValue),
    }
}


export function ccServiceApiKeyDetailsPropertyToHclTerraform(struct?: CcService.ApiKeyDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_key_header: {
            value: cdktn.stringToHclTerraform(struct!.apiKeyHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        api_key_name: {
            value: cdktn.stringToHclTerraform(struct!.apiKeyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        api_key_value: {
            value: cdktn.stringToHclTerraform(struct!.apiKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceBearerTokenDetailsPropertyToTerraform(struct?: CcService.BearerTokenDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_header: cdktn.stringToTerraform(struct!.authorizationHeader),
        token_name: cdktn.stringToTerraform(struct!.tokenName),
        token_value: cdktn.stringToTerraform(struct!.tokenValue),
    }
}


export function ccServiceBearerTokenDetailsPropertyToHclTerraform(struct?: CcService.BearerTokenDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_header: {
            value: cdktn.stringToHclTerraform(struct!.authorizationHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_name: {
            value: cdktn.stringToHclTerraform(struct!.tokenName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_value: {
            value: cdktn.stringToHclTerraform(struct!.tokenValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceMCPServerOAuthClientCredentialsConfigPropertyToTerraform(struct?: CcService.MCPServerOAuthClientCredentialsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_name: cdktn.stringToTerraform(struct!.clientName),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        exchange_parameters: cdktn.stringToTerraform(struct!.exchangeParameters),
        exchange_url: cdktn.stringToTerraform(struct!.exchangeUrl),
        scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    }
}


export function ccServiceMCPServerOAuthClientCredentialsConfigPropertyToHclTerraform(struct?: CcService.MCPServerOAuthClientCredentialsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_id: {
            value: cdktn.stringToHclTerraform(struct!.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_name: {
            value: cdktn.stringToHclTerraform(struct!.clientName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktn.stringToHclTerraform(struct!.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exchange_parameters: {
            value: cdktn.stringToHclTerraform(struct!.exchangeParameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exchange_url: {
            value: cdktn.stringToHclTerraform(struct!.exchangeUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scopes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceMCPServerAuthorizationConfigPropertyToTerraform(struct?: CcService.MCPServerAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key: ccServiceApiKeyDetailsPropertyToTerraform(struct!.apiKey),
        bearer_token: ccServiceBearerTokenDetailsPropertyToTerraform(struct!.bearerToken),
        o_auth_client_credentials: ccServiceMCPServerOAuthClientCredentialsConfigPropertyToTerraform(struct!.oAuthClientCredentials),
    }
}


export function ccServiceMCPServerAuthorizationConfigPropertyToHclTerraform(struct?: CcService.MCPServerAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_key: {
            value: ccServiceApiKeyDetailsPropertyToHclTerraform(struct!.apiKey),
            isBlock: true,
            type: "struct",
            storageClassType: "ApiKeyDetailsProperty",
        },
        bearer_token: {
            value: ccServiceBearerTokenDetailsPropertyToHclTerraform(struct!.bearerToken),
            isBlock: true,
            type: "struct",
            storageClassType: "BearerTokenDetailsProperty",
        },
        o_auth_client_credentials: {
            value: ccServiceMCPServerOAuthClientCredentialsConfigPropertyToHclTerraform(struct!.oAuthClientCredentials),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerOAuthClientCredentialsConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceMCPServerDetailsPropertyToTerraform(struct?: CcService.MCPServerDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_config: ccServiceMCPServerAuthorizationConfigPropertyToTerraform(struct!.authorizationConfig),
        description: cdktn.stringToTerraform(struct!.description),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccServiceMCPServerDetailsPropertyToHclTerraform(struct?: CcService.MCPServerDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_config: {
            value: ccServiceMCPServerAuthorizationConfigPropertyToHclTerraform(struct!.authorizationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerAuthorizationConfigProperty",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
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


export function ccServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenPropertyToTerraform(struct?: CcService.ServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_header: cdktn.stringToTerraform(struct!.authorizationHeader),
        token_name: cdktn.stringToTerraform(struct!.tokenName),
        token_value: cdktn.stringToTerraform(struct!.tokenValue),
    }
}


export function ccServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenPropertyToHclTerraform(struct?: CcService.ServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_header: {
            value: cdktn.stringToHclTerraform(struct!.authorizationHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_name: {
            value: cdktn.stringToHclTerraform(struct!.tokenName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_value: {
            value: cdktn.stringToHclTerraform(struct!.tokenValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceMCPServerGrafanaAuthorizationConfigPropertyToTerraform(struct?: CcService.MCPServerGrafanaAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bearer_token: ccServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenPropertyToTerraform(struct!.bearerToken),
    }
}


export function ccServiceMCPServerGrafanaAuthorizationConfigPropertyToHclTerraform(struct?: CcService.MCPServerGrafanaAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bearer_token: {
            value: ccServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenPropertyToHclTerraform(struct!.bearerToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceMCPServerGrafanaDetailsPropertyToTerraform(struct?: CcService.MCPServerGrafanaDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_config: ccServiceMCPServerGrafanaAuthorizationConfigPropertyToTerraform(struct!.authorizationConfig),
        description: cdktn.stringToTerraform(struct!.description),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccServiceMCPServerGrafanaDetailsPropertyToHclTerraform(struct?: CcService.MCPServerGrafanaDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_config: {
            value: ccServiceMCPServerGrafanaAuthorizationConfigPropertyToHclTerraform(struct!.authorizationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerGrafanaAuthorizationConfigProperty",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
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


export function ccServiceNewRelicApiKeyConfigPropertyToTerraform(struct?: CcService.NewRelicApiKeyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        alert_policy_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alertPolicyIds),
        api_key: cdktn.stringToTerraform(struct!.apiKey),
        application_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.applicationIds),
        entity_guids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entityGuids),
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccServiceNewRelicApiKeyConfigPropertyToHclTerraform(struct?: CcService.NewRelicApiKeyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        alert_policy_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alertPolicyIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        api_key: {
            value: cdktn.stringToHclTerraform(struct!.apiKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        application_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.applicationIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        entity_guids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entityGuids),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceNewRelicAuthorizationConfigPropertyToTerraform(struct?: CcService.NewRelicAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key: ccServiceNewRelicApiKeyConfigPropertyToTerraform(struct!.apiKey),
    }
}


export function ccServiceNewRelicAuthorizationConfigPropertyToHclTerraform(struct?: CcService.NewRelicAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_key: {
            value: ccServiceNewRelicApiKeyConfigPropertyToHclTerraform(struct!.apiKey),
            isBlock: true,
            type: "struct",
            storageClassType: "NewRelicApiKeyConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceNewRelicServiceDetailsPropertyToTerraform(struct?: CcService.NewRelicServiceDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_config: ccServiceNewRelicAuthorizationConfigPropertyToTerraform(struct!.authorizationConfig),
    }
}


export function ccServiceNewRelicServiceDetailsPropertyToHclTerraform(struct?: CcService.NewRelicServiceDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_config: {
            value: ccServiceNewRelicAuthorizationConfigPropertyToHclTerraform(struct!.authorizationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "NewRelicAuthorizationConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceMCPServerSigV4AuthorizationConfigPropertyToTerraform(struct?: CcService.MCPServerSigV4AuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customHeaders),
        mcp_role_arn: cdktn.stringToTerraform(struct!.mcpRoleArn),
        region: cdktn.stringToTerraform(struct!.region),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        service: cdktn.stringToTerraform(struct!.service),
    }
}


export function ccServiceMCPServerSigV4AuthorizationConfigPropertyToHclTerraform(struct?: CcService.MCPServerSigV4AuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_headers: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customHeaders),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        mcp_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.mcpRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktn.stringToHclTerraform(struct!.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceMCPServerSigV4DetailsPropertyToTerraform(struct?: CcService.MCPServerSigV4DetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_config: ccServiceMCPServerSigV4AuthorizationConfigPropertyToTerraform(struct!.authorizationConfig),
        description: cdktn.stringToTerraform(struct!.description),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccServiceMCPServerSigV4DetailsPropertyToHclTerraform(struct?: CcService.MCPServerSigV4DetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_config: {
            value: ccServiceMCPServerSigV4AuthorizationConfigPropertyToHclTerraform(struct!.authorizationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerSigV4AuthorizationConfigProperty",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
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


export function ccServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenPropertyToTerraform(struct?: CcService.ServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_header: cdktn.stringToTerraform(struct!.authorizationHeader),
        token_name: cdktn.stringToTerraform(struct!.tokenName),
        token_value: cdktn.stringToTerraform(struct!.tokenValue),
    }
}


export function ccServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenPropertyToHclTerraform(struct?: CcService.ServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_header: {
            value: cdktn.stringToHclTerraform(struct!.authorizationHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_name: {
            value: cdktn.stringToHclTerraform(struct!.tokenName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_value: {
            value: cdktn.stringToHclTerraform(struct!.tokenValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceMCPServerSplunkAuthorizationConfigPropertyToTerraform(struct?: CcService.MCPServerSplunkAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bearer_token: ccServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenPropertyToTerraform(struct!.bearerToken),
    }
}


export function ccServiceMCPServerSplunkAuthorizationConfigPropertyToHclTerraform(struct?: CcService.MCPServerSplunkAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bearer_token: {
            value: ccServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenPropertyToHclTerraform(struct!.bearerToken),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceMCPServerSplunkDetailsPropertyToTerraform(struct?: CcService.MCPServerSplunkDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_config: ccServiceMCPServerSplunkAuthorizationConfigPropertyToTerraform(struct!.authorizationConfig),
        description: cdktn.stringToTerraform(struct!.description),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccServiceMCPServerSplunkDetailsPropertyToHclTerraform(struct?: CcService.MCPServerSplunkDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_config: {
            value: ccServiceMCPServerSplunkAuthorizationConfigPropertyToHclTerraform(struct!.authorizationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerSplunkAuthorizationConfigProperty",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
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


export function ccServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsPropertyToTerraform(struct?: CcService.ServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_name: cdktn.stringToTerraform(struct!.clientName),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        exchange_parameters: cdktn.stringToTerraform(struct!.exchangeParameters),
    }
}


export function ccServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsPropertyToHclTerraform(struct?: CcService.ServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_id: {
            value: cdktn.stringToHclTerraform(struct!.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_name: {
            value: cdktn.stringToHclTerraform(struct!.clientName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktn.stringToHclTerraform(struct!.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exchange_parameters: {
            value: cdktn.stringToHclTerraform(struct!.exchangeParameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServicePagerDutyAuthorizationConfigPropertyToTerraform(struct?: CcService.PagerDutyAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        o_auth_client_credentials: ccServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsPropertyToTerraform(struct!.oAuthClientCredentials),
    }
}


export function ccServicePagerDutyAuthorizationConfigPropertyToHclTerraform(struct?: CcService.PagerDutyAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        o_auth_client_credentials: {
            value: ccServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsPropertyToHclTerraform(struct!.oAuthClientCredentials),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServicePagerDutyDetailsPropertyToTerraform(struct?: CcService.PagerDutyDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_config: ccServicePagerDutyAuthorizationConfigPropertyToTerraform(struct!.authorizationConfig),
        scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    }
}


export function ccServicePagerDutyDetailsPropertyToHclTerraform(struct?: CcService.PagerDutyDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_config: {
            value: ccServicePagerDutyAuthorizationConfigPropertyToHclTerraform(struct!.authorizationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PagerDutyAuthorizationConfigProperty",
        },
        scopes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsPropertyToTerraform(struct?: CcService.ServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_name: cdktn.stringToTerraform(struct!.clientName),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        exchange_parameters: cdktn.stringToTerraform(struct!.exchangeParameters),
    }
}


export function ccServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsPropertyToHclTerraform(struct?: CcService.ServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_id: {
            value: cdktn.stringToHclTerraform(struct!.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_name: {
            value: cdktn.stringToHclTerraform(struct!.clientName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktn.stringToHclTerraform(struct!.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exchange_parameters: {
            value: cdktn.stringToHclTerraform(struct!.exchangeParameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceNowAuthorizationConfigPropertyToTerraform(struct?: CcService.ServiceNowAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        o_auth_client_credentials: ccServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsPropertyToTerraform(struct!.oAuthClientCredentials),
    }
}


export function ccServiceServiceNowAuthorizationConfigPropertyToHclTerraform(struct?: CcService.ServiceNowAuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        o_auth_client_credentials: {
            value: ccServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsPropertyToHclTerraform(struct!.oAuthClientCredentials),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceNowServiceDetailsPropertyToTerraform(struct?: CcService.ServiceNowServiceDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_config: ccServiceServiceNowAuthorizationConfigPropertyToTerraform(struct!.authorizationConfig),
        instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    }
}


export function ccServiceServiceNowServiceDetailsPropertyToHclTerraform(struct?: CcService.ServiceNowServiceDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_config: {
            value: ccServiceServiceNowAuthorizationConfigPropertyToHclTerraform(struct!.authorizationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceNowAuthorizationConfigProperty",
        },
        instance_url: {
            value: cdktn.stringToHclTerraform(struct!.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceDetailsPropertyToTerraform(struct?: CcService.ServiceDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        azure_identity: ccServiceAzureIdentityServiceDetailsPropertyToTerraform(struct!.azureIdentity),
        dynatrace: ccServiceDynatraceServiceDetailsPropertyToTerraform(struct!.dynatrace),
        git_lab: ccServiceGitLabDetailsPropertyToTerraform(struct!.gitLab),
        mcp_server: ccServiceMCPServerDetailsPropertyToTerraform(struct!.mcpServer),
        mcp_server_grafana: ccServiceMCPServerGrafanaDetailsPropertyToTerraform(struct!.mcpServerGrafana),
        mcp_server_new_relic: ccServiceNewRelicServiceDetailsPropertyToTerraform(struct!.mcpServerNewRelic),
        mcp_server_sig_v4: ccServiceMCPServerSigV4DetailsPropertyToTerraform(struct!.mcpServerSigV4),
        mcp_server_splunk: ccServiceMCPServerSplunkDetailsPropertyToTerraform(struct!.mcpServerSplunk),
        pager_duty: ccServicePagerDutyDetailsPropertyToTerraform(struct!.pagerDuty),
        service_now: ccServiceServiceNowServiceDetailsPropertyToTerraform(struct!.serviceNow),
    }
}


export function ccServiceServiceDetailsPropertyToHclTerraform(struct?: CcService.ServiceDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        azure_identity: {
            value: ccServiceAzureIdentityServiceDetailsPropertyToHclTerraform(struct!.azureIdentity),
            isBlock: true,
            type: "struct",
            storageClassType: "AzureIdentityServiceDetailsProperty",
        },
        dynatrace: {
            value: ccServiceDynatraceServiceDetailsPropertyToHclTerraform(struct!.dynatrace),
            isBlock: true,
            type: "struct",
            storageClassType: "DynatraceServiceDetailsProperty",
        },
        git_lab: {
            value: ccServiceGitLabDetailsPropertyToHclTerraform(struct!.gitLab),
            isBlock: true,
            type: "struct",
            storageClassType: "GitLabDetailsProperty",
        },
        mcp_server: {
            value: ccServiceMCPServerDetailsPropertyToHclTerraform(struct!.mcpServer),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerDetailsProperty",
        },
        mcp_server_grafana: {
            value: ccServiceMCPServerGrafanaDetailsPropertyToHclTerraform(struct!.mcpServerGrafana),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerGrafanaDetailsProperty",
        },
        mcp_server_new_relic: {
            value: ccServiceNewRelicServiceDetailsPropertyToHclTerraform(struct!.mcpServerNewRelic),
            isBlock: true,
            type: "struct",
            storageClassType: "NewRelicServiceDetailsProperty",
        },
        mcp_server_sig_v4: {
            value: ccServiceMCPServerSigV4DetailsPropertyToHclTerraform(struct!.mcpServerSigV4),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerSigV4DetailsProperty",
        },
        mcp_server_splunk: {
            value: ccServiceMCPServerSplunkDetailsPropertyToHclTerraform(struct!.mcpServerSplunk),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerSplunkDetailsProperty",
        },
        pager_duty: {
            value: ccServicePagerDutyDetailsPropertyToHclTerraform(struct!.pagerDuty),
            isBlock: true,
            type: "struct",
            storageClassType: "PagerDutyDetailsProperty",
        },
        service_now: {
            value: ccServiceServiceNowServiceDetailsPropertyToHclTerraform(struct!.serviceNow),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceNowServiceDetailsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceTagPropertyToTerraform(struct?: CcService.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceTagPropertyToHclTerraform(struct?: CcService.TagProperty | cdktn.IResolvable): any {
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


export namespace CcService {
export interface AzureIdentityProperty {
}
export class AzureIdentityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AzureIdentityProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AzureIdentityProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // client_id - computed: true, optional: false, required: false
    public get clientId() {
        return this.getStringAttribute('client_id');
    }

    // tenant_id - computed: true, optional: false, required: false
    public get tenantId() {
        return this.getStringAttribute('tenant_id');
    }

    // web_identity_role_arn - computed: true, optional: false, required: false
    public get webIdentityRoleArn() {
        return this.getStringAttribute('web_identity_role_arn');
    }

    // web_identity_token_audiences - computed: true, optional: false, required: false
    public get webIdentityTokenAudiences() {
        return this.getListAttribute('web_identity_token_audiences');
    }
}
export interface DynatraceProperty {
}
export class DynatracePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynatraceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynatraceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // account_urn - computed: true, optional: false, required: false
    public get accountUrn() {
        return this.getStringAttribute('account_urn');
    }
}
export interface GitLabProperty {
}
export class GitLabPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitLabProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitLabProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // group_id - computed: true, optional: false, required: false
    public get groupId() {
        return this.getStringAttribute('group_id');
    }

    // target_url - computed: true, optional: false, required: false
    public get targetUrl() {
        return this.getStringAttribute('target_url');
    }

    // token_type - computed: true, optional: false, required: false
    public get tokenType() {
        return this.getStringAttribute('token_type');
    }
}
export interface McpServerProperty {
}
export class McpServerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): McpServerProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: McpServerProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // api_key_header - computed: true, optional: false, required: false
    public get apiKeyHeader() {
        return this.getStringAttribute('api_key_header');
    }

    // authorization_method - computed: true, optional: false, required: false
    public get authorizationMethod() {
        return this.getStringAttribute('authorization_method');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
        return this.getStringAttribute('description');
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }
}
export interface McpServerGrafanaProperty {
}
export class McpServerGrafanaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): McpServerGrafanaProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: McpServerGrafanaProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // authorization_method - computed: true, optional: false, required: false
    public get authorizationMethod() {
        return this.getStringAttribute('authorization_method');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
        return this.getStringAttribute('description');
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }
}
export interface McpServerNewRelicProperty {
}
export class McpServerNewRelicPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): McpServerNewRelicProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: McpServerNewRelicProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
        return this.getStringAttribute('description');
    }

    // region - computed: true, optional: false, required: false
    public get region() {
        return this.getStringAttribute('region');
    }
}
export interface McpServerSigV4Property {
}
export class McpServerSigV4PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): McpServerSigV4Property | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: McpServerSigV4Property | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // custom_headers - computed: true, optional: false, required: false
    private _customHeaders = new cdktn.StringMap(this, "custom_headers");
    public get customHeaders() {
        return this._customHeaders;
    }

    // description - computed: true, optional: false, required: false
    public get description() {
        return this.getStringAttribute('description');
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // mcp_role_arn - computed: true, optional: false, required: false
    public get mcpRoleArn() {
        return this.getStringAttribute('mcp_role_arn');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // region - computed: true, optional: false, required: false
    public get region() {
        return this.getStringAttribute('region');
    }

    // role_arn - computed: true, optional: false, required: false
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }

    // service - computed: true, optional: false, required: false
    public get service() {
        return this.getStringAttribute('service');
    }
}
export interface McpServerSplunkProperty {
}
export class McpServerSplunkPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): McpServerSplunkProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: McpServerSplunkProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // api_key_header - computed: true, optional: false, required: false
    public get apiKeyHeader() {
        return this.getStringAttribute('api_key_header');
    }

    // authorization_method - computed: true, optional: false, required: false
    public get authorizationMethod() {
        return this.getStringAttribute('authorization_method');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
        return this.getStringAttribute('description');
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }
}
export interface PagerDutyProperty {
}
export class PagerDutyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PagerDutyProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PagerDutyProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // scopes - computed: true, optional: false, required: false
    public get scopes() {
        return this.getListAttribute('scopes');
    }
}
export interface ServiceNowProperty {
}
export class ServiceNowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceNowProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceNowProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // instance_url - computed: true, optional: false, required: false
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
}
export interface AdditionalServiceDetailsProperty {
}
export class AdditionalServiceDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdditionalServiceDetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdditionalServiceDetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // azure_identity - computed: true, optional: false, required: false
    private _azureIdentity = new AzureIdentityPropertyOutputReference(this, "azure_identity");
    public get azureIdentity() {
        return this._azureIdentity;
    }

    // dynatrace - computed: true, optional: false, required: false
    private _dynatrace = new DynatracePropertyOutputReference(this, "dynatrace");
    public get dynatrace() {
        return this._dynatrace;
    }

    // git_lab - computed: true, optional: false, required: false
    private _gitLab = new GitLabPropertyOutputReference(this, "git_lab");
    public get gitLab() {
        return this._gitLab;
    }

    // mcp_server - computed: true, optional: false, required: false
    private _mcpServer = new McpServerPropertyOutputReference(this, "mcp_server");
    public get mcpServer() {
        return this._mcpServer;
    }

    // mcp_server_grafana - computed: true, optional: false, required: false
    private _mcpServerGrafana = new McpServerGrafanaPropertyOutputReference(this, "mcp_server_grafana");
    public get mcpServerGrafana() {
        return this._mcpServerGrafana;
    }

    // mcp_server_new_relic - computed: true, optional: false, required: false
    private _mcpServerNewRelic = new McpServerNewRelicPropertyOutputReference(this, "mcp_server_new_relic");
    public get mcpServerNewRelic() {
        return this._mcpServerNewRelic;
    }

    // mcp_server_sig_v4 - computed: true, optional: false, required: false
    private _mcpServerSigV4 = new McpServerSigV4PropertyOutputReference(this, "mcp_server_sig_v4");
    public get mcpServerSigV4() {
        return this._mcpServerSigV4;
    }

    // mcp_server_splunk - computed: true, optional: false, required: false
    private _mcpServerSplunk = new McpServerSplunkPropertyOutputReference(this, "mcp_server_splunk");
    public get mcpServerSplunk() {
        return this._mcpServerSplunk;
    }

    // pager_duty - computed: true, optional: false, required: false
    private _pagerDuty = new PagerDutyPropertyOutputReference(this, "pager_duty");
    public get pagerDuty() {
        return this._pagerDuty;
    }

    // service_now - computed: true, optional: false, required: false
    private _serviceNow = new ServiceNowPropertyOutputReference(this, "service_now");
    public get serviceNow() {
        return this._serviceNow;
    }
}
export interface AzureIdentityServiceDetailsProperty {
    /**
    * Azure AD application client ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_id CcService#client_id}
    */
    readonly clientId?: string;
    /**
    * Azure AD tenant ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#tenant_id CcService#tenant_id}
    */
    readonly tenantId?: string;
    /**
    * ARN of the IAM role for web identity token exchange
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#web_identity_role_arn CcService#web_identity_role_arn}
    */
    readonly webIdentityRoleArn?: string;
    /**
    * List of audiences for the web identity token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#web_identity_token_audiences CcService#web_identity_token_audiences}
    */
    readonly webIdentityTokenAudiences?: string[];
}
export class AzureIdentityServiceDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AzureIdentityServiceDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._tenantId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenantId = this._tenantId;
        }
        if (this._webIdentityRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.webIdentityRoleArn = this._webIdentityRoleArn;
        }
        if (this._webIdentityTokenAudiences !== undefined) {
            hasAnyValues = true;
            internalValueResult.webIdentityTokenAudiences = this._webIdentityTokenAudiences;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AzureIdentityServiceDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._tenantId = undefined;
            this._webIdentityRoleArn = undefined;
            this._webIdentityTokenAudiences = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientId = value.clientId;
            this._tenantId = value.tenantId;
            this._webIdentityRoleArn = value.webIdentityRoleArn;
            this._webIdentityTokenAudiences = value.webIdentityTokenAudiences;
        }
    }

    // client_id - computed: true, optional: true, required: false
    private _clientId?: string; 
    public get clientId() {
        return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
        this._clientId = value;
    }
    public resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId;
    }

    // tenant_id - computed: true, optional: true, required: false
    private _tenantId?: string; 
    public get tenantId() {
        return this.getStringAttribute('tenant_id');
    }
    public set tenantId(value: string) {
        this._tenantId = value;
    }
    public resetTenantId() {
        this._tenantId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantIdInput() {
        return this._tenantId;
    }

    // web_identity_role_arn - computed: true, optional: true, required: false
    private _webIdentityRoleArn?: string; 
    public get webIdentityRoleArn() {
        return this.getStringAttribute('web_identity_role_arn');
    }
    public set webIdentityRoleArn(value: string) {
        this._webIdentityRoleArn = value;
    }
    public resetWebIdentityRoleArn() {
        this._webIdentityRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webIdentityRoleArnInput() {
        return this._webIdentityRoleArn;
    }

    // web_identity_token_audiences - computed: true, optional: true, required: false
    private _webIdentityTokenAudiences?: string[]; 
    public get webIdentityTokenAudiences() {
        return this.getListAttribute('web_identity_token_audiences');
    }
    public set webIdentityTokenAudiences(value: string[]) {
        this._webIdentityTokenAudiences = value;
    }
    public resetWebIdentityTokenAudiences() {
        this._webIdentityTokenAudiences = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webIdentityTokenAudiencesInput() {
        return this._webIdentityTokenAudiences;
    }
}
export interface OAuthClientDetailsProperty {
    /**
    * OAuth client ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_id CcService#client_id}
    */
    readonly clientId?: string;
    /**
    * User friendly OAuth client name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_name CcService#client_name}
    */
    readonly clientName?: string;
    /**
    * OAuth client secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_secret CcService#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * OAuth token exchange parameters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#exchange_parameters CcService#exchange_parameters}
    */
    readonly exchangeParameters?: string;
}
export class OAuthClientDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuthClientDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientName !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientName = this._clientName;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._exchangeParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.exchangeParameters = this._exchangeParameters;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuthClientDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientName = undefined;
            this._clientSecret = undefined;
            this._exchangeParameters = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientId = value.clientId;
            this._clientName = value.clientName;
            this._clientSecret = value.clientSecret;
            this._exchangeParameters = value.exchangeParameters;
        }
    }

    // client_id - computed: true, optional: true, required: false
    private _clientId?: string; 
    public get clientId() {
        return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
        this._clientId = value;
    }
    public resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId;
    }

    // client_name - computed: true, optional: true, required: false
    private _clientName?: string; 
    public get clientName() {
        return this.getStringAttribute('client_name');
    }
    public set clientName(value: string) {
        this._clientName = value;
    }
    public resetClientName() {
        this._clientName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientNameInput() {
        return this._clientName;
    }

    // client_secret - computed: true, optional: true, required: false
    private _clientSecret?: string; 
    public get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    public set clientSecret(value: string) {
        this._clientSecret = value;
    }
    public resetClientSecret() {
        this._clientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
        return this._clientSecret;
    }

    // exchange_parameters - computed: true, optional: true, required: false
    private _exchangeParameters?: string; 
    public get exchangeParameters() {
        return this.getStringAttribute('exchange_parameters');
    }
    public set exchangeParameters(value: string) {
        this._exchangeParameters = value;
    }
    public resetExchangeParameters() {
        this._exchangeParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exchangeParametersInput() {
        return this._exchangeParameters;
    }
}
export interface DynatraceAuthorizationConfigProperty {
    /**
    * OAuth client credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#o_auth_client_credentials CcService#o_auth_client_credentials}
    */
    readonly oAuthClientCredentials?: OAuthClientDetailsProperty;
}
export class DynatraceAuthorizationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynatraceAuthorizationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._oAuthClientCredentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthClientCredentials = this._oAuthClientCredentials?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynatraceAuthorizationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._oAuthClientCredentials.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._oAuthClientCredentials.internalValue = value.oAuthClientCredentials;
        }
    }

    // o_auth_client_credentials - computed: true, optional: true, required: false
    private _oAuthClientCredentials = new OAuthClientDetailsPropertyOutputReference(this, "o_auth_client_credentials");
    public get oAuthClientCredentials() {
        return this._oAuthClientCredentials;
    }
    public putOAuthClientCredentials(value: OAuthClientDetailsProperty) {
        this._oAuthClientCredentials.internalValue = value;
    }
    public resetOAuthClientCredentials() {
        this._oAuthClientCredentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthClientCredentialsInput() {
        return this._oAuthClientCredentials.internalValue;
    }
}
export interface DynatraceServiceDetailsProperty {
    /**
    * Dynatrace resource account URN
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#account_urn CcService#account_urn}
    */
    readonly accountUrn?: string;
    /**
    * Dynatrace OAuth authorization configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config CcService#authorization_config}
    */
    readonly authorizationConfig?: DynatraceAuthorizationConfigProperty;
}
export class DynatraceServiceDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynatraceServiceDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountUrn !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountUrn = this._accountUrn;
        }
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynatraceServiceDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountUrn = undefined;
            this._authorizationConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountUrn = value.accountUrn;
            this._authorizationConfig.internalValue = value.authorizationConfig;
        }
    }

    // account_urn - computed: true, optional: true, required: false
    private _accountUrn?: string; 
    public get accountUrn() {
        return this.getStringAttribute('account_urn');
    }
    public set accountUrn(value: string) {
        this._accountUrn = value;
    }
    public resetAccountUrn() {
        this._accountUrn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountUrnInput() {
        return this._accountUrn;
    }

    // authorization_config - computed: true, optional: true, required: false
    private _authorizationConfig = new DynatraceAuthorizationConfigPropertyOutputReference(this, "authorization_config");
    public get authorizationConfig() {
        return this._authorizationConfig;
    }
    public putAuthorizationConfig(value: DynatraceAuthorizationConfigProperty) {
        this._authorizationConfig.internalValue = value;
    }
    public resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
    }
}
export interface GitLabDetailsProperty {
    /**
    * Optional GitLab group ID for group-level access tokens
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#group_id CcService#group_id}
    */
    readonly groupId?: string;
    /**
    * GitLab instance URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#target_url CcService#target_url}
    */
    readonly targetUrl?: string;
    /**
    * Type of GitLab access token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_type CcService#token_type}
    */
    readonly tokenType?: string;
    /**
    * GitLab access token value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_value CcService#token_value}
    */
    readonly tokenValue?: string;
}
export class GitLabDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitLabDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupId = this._groupId;
        }
        if (this._targetUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetUrl = this._targetUrl;
        }
        if (this._tokenType !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenType = this._tokenType;
        }
        if (this._tokenValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenValue = this._tokenValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitLabDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupId = undefined;
            this._targetUrl = undefined;
            this._tokenType = undefined;
            this._tokenValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupId = value.groupId;
            this._targetUrl = value.targetUrl;
            this._tokenType = value.tokenType;
            this._tokenValue = value.tokenValue;
        }
    }

    // group_id - computed: true, optional: true, required: false
    private _groupId?: string; 
    public get groupId() {
        return this.getStringAttribute('group_id');
    }
    public set groupId(value: string) {
        this._groupId = value;
    }
    public resetGroupId() {
        this._groupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIdInput() {
        return this._groupId;
    }

    // target_url - computed: true, optional: true, required: false
    private _targetUrl?: string; 
    public get targetUrl() {
        return this.getStringAttribute('target_url');
    }
    public set targetUrl(value: string) {
        this._targetUrl = value;
    }
    public resetTargetUrl() {
        this._targetUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetUrlInput() {
        return this._targetUrl;
    }

    // token_type - computed: true, optional: true, required: false
    private _tokenType?: string; 
    public get tokenType() {
        return this.getStringAttribute('token_type');
    }
    public set tokenType(value: string) {
        this._tokenType = value;
    }
    public resetTokenType() {
        this._tokenType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenTypeInput() {
        return this._tokenType;
    }

    // token_value - computed: true, optional: true, required: false
    private _tokenValue?: string; 
    public get tokenValue() {
        return this.getStringAttribute('token_value');
    }
    public set tokenValue(value: string) {
        this._tokenValue = value;
    }
    public resetTokenValue() {
        this._tokenValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenValueInput() {
        return this._tokenValue;
    }
}
export interface ApiKeyDetailsProperty {
    /**
    * HTTP header name to send the API key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#api_key_header CcService#api_key_header}
    */
    readonly apiKeyHeader?: string;
    /**
    * User friendly API key name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#api_key_name CcService#api_key_name}
    */
    readonly apiKeyName?: string;
    /**
    * API key value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#api_key_value CcService#api_key_value}
    */
    readonly apiKeyValue?: string;
}
export class ApiKeyDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApiKeyDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKeyHeader !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeyHeader = this._apiKeyHeader;
        }
        if (this._apiKeyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeyName = this._apiKeyName;
        }
        if (this._apiKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeyValue = this._apiKeyValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApiKeyDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKeyHeader = undefined;
            this._apiKeyName = undefined;
            this._apiKeyValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKeyHeader = value.apiKeyHeader;
            this._apiKeyName = value.apiKeyName;
            this._apiKeyValue = value.apiKeyValue;
        }
    }

    // api_key_header - computed: true, optional: true, required: false
    private _apiKeyHeader?: string; 
    public get apiKeyHeader() {
        return this.getStringAttribute('api_key_header');
    }
    public set apiKeyHeader(value: string) {
        this._apiKeyHeader = value;
    }
    public resetApiKeyHeader() {
        this._apiKeyHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyHeaderInput() {
        return this._apiKeyHeader;
    }

    // api_key_name - computed: true, optional: true, required: false
    private _apiKeyName?: string; 
    public get apiKeyName() {
        return this.getStringAttribute('api_key_name');
    }
    public set apiKeyName(value: string) {
        this._apiKeyName = value;
    }
    public resetApiKeyName() {
        this._apiKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyNameInput() {
        return this._apiKeyName;
    }

    // api_key_value - computed: true, optional: true, required: false
    private _apiKeyValue?: string; 
    public get apiKeyValue() {
        return this.getStringAttribute('api_key_value');
    }
    public set apiKeyValue(value: string) {
        this._apiKeyValue = value;
    }
    public resetApiKeyValue() {
        this._apiKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyValueInput() {
        return this._apiKeyValue;
    }
}
export interface BearerTokenDetailsProperty {
    /**
    * HTTP header name to send the bearer token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_header CcService#authorization_header}
    */
    readonly authorizationHeader?: string;
    /**
    * User friendly bearer token name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_name CcService#token_name}
    */
    readonly tokenName?: string;
    /**
    * Bearer token value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_value CcService#token_value}
    */
    readonly tokenValue?: string;
}
export class BearerTokenDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BearerTokenDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationHeader !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationHeader = this._authorizationHeader;
        }
        if (this._tokenName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenName = this._tokenName;
        }
        if (this._tokenValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenValue = this._tokenValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BearerTokenDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationHeader = undefined;
            this._tokenName = undefined;
            this._tokenValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationHeader = value.authorizationHeader;
            this._tokenName = value.tokenName;
            this._tokenValue = value.tokenValue;
        }
    }

    // authorization_header - computed: true, optional: true, required: false
    private _authorizationHeader?: string; 
    public get authorizationHeader() {
        return this.getStringAttribute('authorization_header');
    }
    public set authorizationHeader(value: string) {
        this._authorizationHeader = value;
    }
    public resetAuthorizationHeader() {
        this._authorizationHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationHeaderInput() {
        return this._authorizationHeader;
    }

    // token_name - computed: true, optional: true, required: false
    private _tokenName?: string; 
    public get tokenName() {
        return this.getStringAttribute('token_name');
    }
    public set tokenName(value: string) {
        this._tokenName = value;
    }
    public resetTokenName() {
        this._tokenName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenNameInput() {
        return this._tokenName;
    }

    // token_value - computed: true, optional: true, required: false
    private _tokenValue?: string; 
    public get tokenValue() {
        return this.getStringAttribute('token_value');
    }
    public set tokenValue(value: string) {
        this._tokenValue = value;
    }
    public resetTokenValue() {
        this._tokenValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenValueInput() {
        return this._tokenValue;
    }
}
export interface MCPServerOAuthClientCredentialsConfigProperty {
    /**
    * OAuth client ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_id CcService#client_id}
    */
    readonly clientId?: string;
    /**
    * User friendly OAuth client name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_name CcService#client_name}
    */
    readonly clientName?: string;
    /**
    * OAuth client secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_secret CcService#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * OAuth token exchange parameters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#exchange_parameters CcService#exchange_parameters}
    */
    readonly exchangeParameters?: string;
    /**
    * OAuth token exchange URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#exchange_url CcService#exchange_url}
    */
    readonly exchangeUrl?: string;
    /**
    * OAuth scopes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#scopes CcService#scopes}
    */
    readonly scopes?: string[];
}
export class MCPServerOAuthClientCredentialsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerOAuthClientCredentialsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientName !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientName = this._clientName;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._exchangeParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.exchangeParameters = this._exchangeParameters;
        }
        if (this._exchangeUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.exchangeUrl = this._exchangeUrl;
        }
        if (this._scopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopes = this._scopes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerOAuthClientCredentialsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientName = undefined;
            this._clientSecret = undefined;
            this._exchangeParameters = undefined;
            this._exchangeUrl = undefined;
            this._scopes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientId = value.clientId;
            this._clientName = value.clientName;
            this._clientSecret = value.clientSecret;
            this._exchangeParameters = value.exchangeParameters;
            this._exchangeUrl = value.exchangeUrl;
            this._scopes = value.scopes;
        }
    }

    // client_id - computed: true, optional: true, required: false
    private _clientId?: string; 
    public get clientId() {
        return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
        this._clientId = value;
    }
    public resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId;
    }

    // client_name - computed: true, optional: true, required: false
    private _clientName?: string; 
    public get clientName() {
        return this.getStringAttribute('client_name');
    }
    public set clientName(value: string) {
        this._clientName = value;
    }
    public resetClientName() {
        this._clientName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientNameInput() {
        return this._clientName;
    }

    // client_secret - computed: true, optional: true, required: false
    private _clientSecret?: string; 
    public get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    public set clientSecret(value: string) {
        this._clientSecret = value;
    }
    public resetClientSecret() {
        this._clientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
        return this._clientSecret;
    }

    // exchange_parameters - computed: true, optional: true, required: false
    private _exchangeParameters?: string; 
    public get exchangeParameters() {
        return this.getStringAttribute('exchange_parameters');
    }
    public set exchangeParameters(value: string) {
        this._exchangeParameters = value;
    }
    public resetExchangeParameters() {
        this._exchangeParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exchangeParametersInput() {
        return this._exchangeParameters;
    }

    // exchange_url - computed: true, optional: true, required: false
    private _exchangeUrl?: string; 
    public get exchangeUrl() {
        return this.getStringAttribute('exchange_url');
    }
    public set exchangeUrl(value: string) {
        this._exchangeUrl = value;
    }
    public resetExchangeUrl() {
        this._exchangeUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exchangeUrlInput() {
        return this._exchangeUrl;
    }

    // scopes - computed: true, optional: true, required: false
    private _scopes?: string[]; 
    public get scopes() {
        return this.getListAttribute('scopes');
    }
    public set scopes(value: string[]) {
        this._scopes = value;
    }
    public resetScopes() {
        this._scopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopesInput() {
        return this._scopes;
    }
}
export interface MCPServerAuthorizationConfigProperty {
    /**
    * API key authentication details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#api_key CcService#api_key}
    */
    readonly apiKey?: ApiKeyDetailsProperty;
    /**
    * Bearer token authentication details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#bearer_token CcService#bearer_token}
    */
    readonly bearerToken?: BearerTokenDetailsProperty;
    /**
    * MCP server OAuth client credentials configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#o_auth_client_credentials CcService#o_auth_client_credentials}
    */
    readonly oAuthClientCredentials?: MCPServerOAuthClientCredentialsConfigProperty;
}
export class MCPServerAuthorizationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerAuthorizationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKey = this._apiKey?.internalValue;
        }
        if (this._bearerToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bearerToken = this._bearerToken?.internalValue;
        }
        if (this._oAuthClientCredentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthClientCredentials = this._oAuthClientCredentials?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerAuthorizationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKey.internalValue = undefined;
            this._bearerToken.internalValue = undefined;
            this._oAuthClientCredentials.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKey.internalValue = value.apiKey;
            this._bearerToken.internalValue = value.bearerToken;
            this._oAuthClientCredentials.internalValue = value.oAuthClientCredentials;
        }
    }

    // api_key - computed: true, optional: true, required: false
    private _apiKey = new ApiKeyDetailsPropertyOutputReference(this, "api_key");
    public get apiKey() {
        return this._apiKey;
    }
    public putApiKey(value: ApiKeyDetailsProperty) {
        this._apiKey.internalValue = value;
    }
    public resetApiKey() {
        this._apiKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyInput() {
        return this._apiKey.internalValue;
    }

    // bearer_token - computed: true, optional: true, required: false
    private _bearerToken = new BearerTokenDetailsPropertyOutputReference(this, "bearer_token");
    public get bearerToken() {
        return this._bearerToken;
    }
    public putBearerToken(value: BearerTokenDetailsProperty) {
        this._bearerToken.internalValue = value;
    }
    public resetBearerToken() {
        this._bearerToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bearerTokenInput() {
        return this._bearerToken.internalValue;
    }

    // o_auth_client_credentials - computed: true, optional: true, required: false
    private _oAuthClientCredentials = new MCPServerOAuthClientCredentialsConfigPropertyOutputReference(this, "o_auth_client_credentials");
    public get oAuthClientCredentials() {
        return this._oAuthClientCredentials;
    }
    public putOAuthClientCredentials(value: MCPServerOAuthClientCredentialsConfigProperty) {
        this._oAuthClientCredentials.internalValue = value;
    }
    public resetOAuthClientCredentials() {
        this._oAuthClientCredentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthClientCredentialsInput() {
        return this._oAuthClientCredentials.internalValue;
    }
}
export interface MCPServerDetailsProperty {
    /**
    * MCP server authorization configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config CcService#authorization_config}
    */
    readonly authorizationConfig?: MCPServerAuthorizationConfigProperty;
    /**
    * Optional description for the MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#description CcService#description}
    */
    readonly description?: string;
    /**
    * MCP server endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#endpoint CcService#endpoint}
    */
    readonly endpoint?: string;
    /**
    * MCP server name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#name CcService#name}
    */
    readonly name?: string;
}
export class MCPServerDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = undefined;
            this._description = undefined;
            this._endpoint = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = value.authorizationConfig;
            this._description = value.description;
            this._endpoint = value.endpoint;
            this._name = value.name;
        }
    }

    // authorization_config - computed: true, optional: true, required: false
    private _authorizationConfig = new MCPServerAuthorizationConfigPropertyOutputReference(this, "authorization_config");
    public get authorizationConfig() {
        return this._authorizationConfig;
    }
    public putAuthorizationConfig(value: MCPServerAuthorizationConfigProperty) {
        this._authorizationConfig.internalValue = value;
    }
    public resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
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

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
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
export interface ServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenProperty {
    /**
    * HTTP header name to send the bearer token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_header CcService#authorization_header}
    */
    readonly authorizationHeader?: string;
    /**
    * User friendly bearer token name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_name CcService#token_name}
    */
    readonly tokenName?: string;
    /**
    * Bearer token value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_value CcService#token_value}
    */
    readonly tokenValue?: string;
}
export class ServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationHeader !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationHeader = this._authorizationHeader;
        }
        if (this._tokenName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenName = this._tokenName;
        }
        if (this._tokenValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenValue = this._tokenValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationHeader = undefined;
            this._tokenName = undefined;
            this._tokenValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationHeader = value.authorizationHeader;
            this._tokenName = value.tokenName;
            this._tokenValue = value.tokenValue;
        }
    }

    // authorization_header - computed: true, optional: true, required: false
    private _authorizationHeader?: string; 
    public get authorizationHeader() {
        return this.getStringAttribute('authorization_header');
    }
    public set authorizationHeader(value: string) {
        this._authorizationHeader = value;
    }
    public resetAuthorizationHeader() {
        this._authorizationHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationHeaderInput() {
        return this._authorizationHeader;
    }

    // token_name - computed: true, optional: true, required: false
    private _tokenName?: string; 
    public get tokenName() {
        return this.getStringAttribute('token_name');
    }
    public set tokenName(value: string) {
        this._tokenName = value;
    }
    public resetTokenName() {
        this._tokenName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenNameInput() {
        return this._tokenName;
    }

    // token_value - computed: true, optional: true, required: false
    private _tokenValue?: string; 
    public get tokenValue() {
        return this.getStringAttribute('token_value');
    }
    public set tokenValue(value: string) {
        this._tokenValue = value;
    }
    public resetTokenValue() {
        this._tokenValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenValueInput() {
        return this._tokenValue;
    }
}
export interface MCPServerGrafanaAuthorizationConfigProperty {
    /**
    * Bearer token authentication details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#bearer_token CcService#bearer_token}
    */
    readonly bearerToken?: ServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenProperty;
}
export class MCPServerGrafanaAuthorizationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerGrafanaAuthorizationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bearerToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bearerToken = this._bearerToken?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerGrafanaAuthorizationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bearerToken.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bearerToken.internalValue = value.bearerToken;
        }
    }

    // bearer_token - computed: true, optional: true, required: false
    private _bearerToken = new ServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenPropertyOutputReference(this, "bearer_token");
    public get bearerToken() {
        return this._bearerToken;
    }
    public putBearerToken(value: ServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenProperty) {
        this._bearerToken.internalValue = value;
    }
    public resetBearerToken() {
        this._bearerToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bearerTokenInput() {
        return this._bearerToken.internalValue;
    }
}
export interface MCPServerGrafanaDetailsProperty {
    /**
    * Grafana MCP server authorization configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config CcService#authorization_config}
    */
    readonly authorizationConfig?: MCPServerGrafanaAuthorizationConfigProperty;
    /**
    * Optional description for the MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#description CcService#description}
    */
    readonly description?: string;
    /**
    * MCP server endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#endpoint CcService#endpoint}
    */
    readonly endpoint?: string;
    /**
    * MCP server name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#name CcService#name}
    */
    readonly name?: string;
}
export class MCPServerGrafanaDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerGrafanaDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerGrafanaDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = undefined;
            this._description = undefined;
            this._endpoint = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = value.authorizationConfig;
            this._description = value.description;
            this._endpoint = value.endpoint;
            this._name = value.name;
        }
    }

    // authorization_config - computed: true, optional: true, required: false
    private _authorizationConfig = new MCPServerGrafanaAuthorizationConfigPropertyOutputReference(this, "authorization_config");
    public get authorizationConfig() {
        return this._authorizationConfig;
    }
    public putAuthorizationConfig(value: MCPServerGrafanaAuthorizationConfigProperty) {
        this._authorizationConfig.internalValue = value;
    }
    public resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
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

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
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
export interface NewRelicApiKeyConfigProperty {
    /**
    * New Relic Account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#account_id CcService#account_id}
    */
    readonly accountId?: string;
    /**
    * List of alert policy IDs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#alert_policy_ids CcService#alert_policy_ids}
    */
    readonly alertPolicyIds?: string[];
    /**
    * New Relic User API Key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#api_key CcService#api_key}
    */
    readonly apiKey?: string;
    /**
    * List of monitored APM application IDs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#application_ids CcService#application_ids}
    */
    readonly applicationIds?: string[];
    /**
    * List of globally unique IDs for New Relic resources
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#entity_guids CcService#entity_guids}
    */
    readonly entityGuids?: string[];
    /**
    * New Relic region
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#region CcService#region}
    */
    readonly region?: string;
}
export class NewRelicApiKeyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NewRelicApiKeyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._alertPolicyIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.alertPolicyIds = this._alertPolicyIds;
        }
        if (this._apiKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKey = this._apiKey;
        }
        if (this._applicationIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationIds = this._applicationIds;
        }
        if (this._entityGuids !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityGuids = this._entityGuids;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NewRelicApiKeyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._alertPolicyIds = undefined;
            this._apiKey = undefined;
            this._applicationIds = undefined;
            this._entityGuids = undefined;
            this._region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._alertPolicyIds = value.alertPolicyIds;
            this._apiKey = value.apiKey;
            this._applicationIds = value.applicationIds;
            this._entityGuids = value.entityGuids;
            this._region = value.region;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // alert_policy_ids - computed: true, optional: true, required: false
    private _alertPolicyIds?: string[]; 
    public get alertPolicyIds() {
        return this.getListAttribute('alert_policy_ids');
    }
    public set alertPolicyIds(value: string[]) {
        this._alertPolicyIds = value;
    }
    public resetAlertPolicyIds() {
        this._alertPolicyIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alertPolicyIdsInput() {
        return this._alertPolicyIds;
    }

    // api_key - computed: true, optional: true, required: false
    private _apiKey?: string; 
    public get apiKey() {
        return this.getStringAttribute('api_key');
    }
    public set apiKey(value: string) {
        this._apiKey = value;
    }
    public resetApiKey() {
        this._apiKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyInput() {
        return this._apiKey;
    }

    // application_ids - computed: true, optional: true, required: false
    private _applicationIds?: string[]; 
    public get applicationIds() {
        return this.getListAttribute('application_ids');
    }
    public set applicationIds(value: string[]) {
        this._applicationIds = value;
    }
    public resetApplicationIds() {
        this._applicationIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdsInput() {
        return this._applicationIds;
    }

    // entity_guids - computed: true, optional: true, required: false
    private _entityGuids?: string[]; 
    public get entityGuids() {
        return this.getListAttribute('entity_guids');
    }
    public set entityGuids(value: string[]) {
        this._entityGuids = value;
    }
    public resetEntityGuids() {
        this._entityGuids = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityGuidsInput() {
        return this._entityGuids;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }
}
export interface NewRelicAuthorizationConfigProperty {
    /**
    * New Relic API key configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#api_key CcService#api_key}
    */
    readonly apiKey?: NewRelicApiKeyConfigProperty;
}
export class NewRelicAuthorizationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NewRelicAuthorizationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKey = this._apiKey?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NewRelicAuthorizationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKey.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKey.internalValue = value.apiKey;
        }
    }

    // api_key - computed: true, optional: true, required: false
    private _apiKey = new NewRelicApiKeyConfigPropertyOutputReference(this, "api_key");
    public get apiKey() {
        return this._apiKey;
    }
    public putApiKey(value: NewRelicApiKeyConfigProperty) {
        this._apiKey.internalValue = value;
    }
    public resetApiKey() {
        this._apiKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyInput() {
        return this._apiKey.internalValue;
    }
}
export interface NewRelicServiceDetailsProperty {
    /**
    * New Relic authorization configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config CcService#authorization_config}
    */
    readonly authorizationConfig?: NewRelicAuthorizationConfigProperty;
}
export class NewRelicServiceDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NewRelicServiceDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NewRelicServiceDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = value.authorizationConfig;
        }
    }

    // authorization_config - computed: true, optional: true, required: false
    private _authorizationConfig = new NewRelicAuthorizationConfigPropertyOutputReference(this, "authorization_config");
    public get authorizationConfig() {
        return this._authorizationConfig;
    }
    public putAuthorizationConfig(value: NewRelicAuthorizationConfigProperty) {
        this._authorizationConfig.internalValue = value;
    }
    public resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
    }
}
export interface MCPServerSigV4AuthorizationConfigProperty {
    /**
    * Custom headers for the SigV4 MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#custom_headers CcService#custom_headers}
    */
    readonly customHeaders?: { [key: string]: string };
    /**
    * IAM role ARN to assume for SigV4 signing. Optional - when omitted, credentials are resolved at runtime via a monitor account association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#mcp_role_arn CcService#mcp_role_arn}
    */
    readonly mcpRoleArn?: string;
    /**
    * AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#region CcService#region}
    */
    readonly region?: string;
    /**
    * Deprecated - use McpRoleArn instead. IAM role ARN to assume for SigV4 signing
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#role_arn CcService#role_arn}
    */
    readonly roleArn?: string;
    /**
    * AWS service name for SigV4 signing
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#service CcService#service}
    */
    readonly service?: string;
}
export class MCPServerSigV4AuthorizationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerSigV4AuthorizationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.customHeaders = this._customHeaders;
        }
        if (this._mcpRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpRoleArn = this._mcpRoleArn;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._service !== undefined) {
            hasAnyValues = true;
            internalValueResult.service = this._service;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerSigV4AuthorizationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customHeaders = undefined;
            this._mcpRoleArn = undefined;
            this._region = undefined;
            this._roleArn = undefined;
            this._service = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customHeaders = value.customHeaders;
            this._mcpRoleArn = value.mcpRoleArn;
            this._region = value.region;
            this._roleArn = value.roleArn;
            this._service = value.service;
        }
    }

    // custom_headers - computed: true, optional: true, required: false
    private _customHeaders?: { [key: string]: string }; 
    public get customHeaders() {
        return this.getStringMapAttribute('custom_headers');
    }
    public set customHeaders(value: { [key: string]: string }) {
        this._customHeaders = value;
    }
    public resetCustomHeaders() {
        this._customHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customHeadersInput() {
        return this._customHeaders;
    }

    // mcp_role_arn - computed: true, optional: true, required: false
    private _mcpRoleArn?: string; 
    public get mcpRoleArn() {
        return this.getStringAttribute('mcp_role_arn');
    }
    public set mcpRoleArn(value: string) {
        this._mcpRoleArn = value;
    }
    public resetMcpRoleArn() {
        this._mcpRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpRoleArnInput() {
        return this._mcpRoleArn;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // service - computed: true, optional: true, required: false
    private _service?: string; 
    public get service() {
        return this.getStringAttribute('service');
    }
    public set service(value: string) {
        this._service = value;
    }
    public resetService() {
        this._service = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceInput() {
        return this._service;
    }
}
export interface MCPServerSigV4DetailsProperty {
    /**
    * SigV4 authorization configuration for MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config CcService#authorization_config}
    */
    readonly authorizationConfig?: MCPServerSigV4AuthorizationConfigProperty;
    /**
    * Optional description for the MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#description CcService#description}
    */
    readonly description?: string;
    /**
    * MCP server endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#endpoint CcService#endpoint}
    */
    readonly endpoint?: string;
    /**
    * MCP server name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#name CcService#name}
    */
    readonly name?: string;
}
export class MCPServerSigV4DetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerSigV4DetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerSigV4DetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = undefined;
            this._description = undefined;
            this._endpoint = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = value.authorizationConfig;
            this._description = value.description;
            this._endpoint = value.endpoint;
            this._name = value.name;
        }
    }

    // authorization_config - computed: true, optional: true, required: false
    private _authorizationConfig = new MCPServerSigV4AuthorizationConfigPropertyOutputReference(this, "authorization_config");
    public get authorizationConfig() {
        return this._authorizationConfig;
    }
    public putAuthorizationConfig(value: MCPServerSigV4AuthorizationConfigProperty) {
        this._authorizationConfig.internalValue = value;
    }
    public resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
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

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
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
export interface ServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenProperty {
    /**
    * HTTP header name to send the bearer token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_header CcService#authorization_header}
    */
    readonly authorizationHeader?: string;
    /**
    * User friendly bearer token name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_name CcService#token_name}
    */
    readonly tokenName?: string;
    /**
    * Bearer token value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#token_value CcService#token_value}
    */
    readonly tokenValue?: string;
}
export class ServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationHeader !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationHeader = this._authorizationHeader;
        }
        if (this._tokenName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenName = this._tokenName;
        }
        if (this._tokenValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenValue = this._tokenValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationHeader = undefined;
            this._tokenName = undefined;
            this._tokenValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationHeader = value.authorizationHeader;
            this._tokenName = value.tokenName;
            this._tokenValue = value.tokenValue;
        }
    }

    // authorization_header - computed: true, optional: true, required: false
    private _authorizationHeader?: string; 
    public get authorizationHeader() {
        return this.getStringAttribute('authorization_header');
    }
    public set authorizationHeader(value: string) {
        this._authorizationHeader = value;
    }
    public resetAuthorizationHeader() {
        this._authorizationHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationHeaderInput() {
        return this._authorizationHeader;
    }

    // token_name - computed: true, optional: true, required: false
    private _tokenName?: string; 
    public get tokenName() {
        return this.getStringAttribute('token_name');
    }
    public set tokenName(value: string) {
        this._tokenName = value;
    }
    public resetTokenName() {
        this._tokenName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenNameInput() {
        return this._tokenName;
    }

    // token_value - computed: true, optional: true, required: false
    private _tokenValue?: string; 
    public get tokenValue() {
        return this.getStringAttribute('token_value');
    }
    public set tokenValue(value: string) {
        this._tokenValue = value;
    }
    public resetTokenValue() {
        this._tokenValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenValueInput() {
        return this._tokenValue;
    }
}
export interface MCPServerSplunkAuthorizationConfigProperty {
    /**
    * Bearer token authentication details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#bearer_token CcService#bearer_token}
    */
    readonly bearerToken?: ServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenProperty;
}
export class MCPServerSplunkAuthorizationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerSplunkAuthorizationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bearerToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bearerToken = this._bearerToken?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerSplunkAuthorizationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bearerToken.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bearerToken.internalValue = value.bearerToken;
        }
    }

    // bearer_token - computed: true, optional: true, required: false
    private _bearerToken = new ServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenPropertyOutputReference(this, "bearer_token");
    public get bearerToken() {
        return this._bearerToken;
    }
    public putBearerToken(value: ServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenProperty) {
        this._bearerToken.internalValue = value;
    }
    public resetBearerToken() {
        this._bearerToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bearerTokenInput() {
        return this._bearerToken.internalValue;
    }
}
export interface MCPServerSplunkDetailsProperty {
    /**
    * MCP server splunk authorization configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config CcService#authorization_config}
    */
    readonly authorizationConfig?: MCPServerSplunkAuthorizationConfigProperty;
    /**
    * Optional description for the MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#description CcService#description}
    */
    readonly description?: string;
    /**
    * MCP server endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#endpoint CcService#endpoint}
    */
    readonly endpoint?: string;
    /**
    * MCP server name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#name CcService#name}
    */
    readonly name?: string;
}
export class MCPServerSplunkDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerSplunkDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerSplunkDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = undefined;
            this._description = undefined;
            this._endpoint = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = value.authorizationConfig;
            this._description = value.description;
            this._endpoint = value.endpoint;
            this._name = value.name;
        }
    }

    // authorization_config - computed: true, optional: true, required: false
    private _authorizationConfig = new MCPServerSplunkAuthorizationConfigPropertyOutputReference(this, "authorization_config");
    public get authorizationConfig() {
        return this._authorizationConfig;
    }
    public putAuthorizationConfig(value: MCPServerSplunkAuthorizationConfigProperty) {
        this._authorizationConfig.internalValue = value;
    }
    public resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
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

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
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
export interface ServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsProperty {
    /**
    * OAuth client ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_id CcService#client_id}
    */
    readonly clientId?: string;
    /**
    * User friendly OAuth client name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_name CcService#client_name}
    */
    readonly clientName?: string;
    /**
    * OAuth client secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_secret CcService#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * OAuth token exchange parameters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#exchange_parameters CcService#exchange_parameters}
    */
    readonly exchangeParameters?: string;
}
export class ServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientName !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientName = this._clientName;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._exchangeParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.exchangeParameters = this._exchangeParameters;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientName = undefined;
            this._clientSecret = undefined;
            this._exchangeParameters = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientId = value.clientId;
            this._clientName = value.clientName;
            this._clientSecret = value.clientSecret;
            this._exchangeParameters = value.exchangeParameters;
        }
    }

    // client_id - computed: true, optional: true, required: false
    private _clientId?: string; 
    public get clientId() {
        return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
        this._clientId = value;
    }
    public resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId;
    }

    // client_name - computed: true, optional: true, required: false
    private _clientName?: string; 
    public get clientName() {
        return this.getStringAttribute('client_name');
    }
    public set clientName(value: string) {
        this._clientName = value;
    }
    public resetClientName() {
        this._clientName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientNameInput() {
        return this._clientName;
    }

    // client_secret - computed: true, optional: true, required: false
    private _clientSecret?: string; 
    public get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    public set clientSecret(value: string) {
        this._clientSecret = value;
    }
    public resetClientSecret() {
        this._clientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
        return this._clientSecret;
    }

    // exchange_parameters - computed: true, optional: true, required: false
    private _exchangeParameters?: string; 
    public get exchangeParameters() {
        return this.getStringAttribute('exchange_parameters');
    }
    public set exchangeParameters(value: string) {
        this._exchangeParameters = value;
    }
    public resetExchangeParameters() {
        this._exchangeParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exchangeParametersInput() {
        return this._exchangeParameters;
    }
}
export interface PagerDutyAuthorizationConfigProperty {
    /**
    * OAuth client credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#o_auth_client_credentials CcService#o_auth_client_credentials}
    */
    readonly oAuthClientCredentials?: ServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsProperty;
}
export class PagerDutyAuthorizationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PagerDutyAuthorizationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._oAuthClientCredentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthClientCredentials = this._oAuthClientCredentials?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PagerDutyAuthorizationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._oAuthClientCredentials.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._oAuthClientCredentials.internalValue = value.oAuthClientCredentials;
        }
    }

    // o_auth_client_credentials - computed: true, optional: true, required: false
    private _oAuthClientCredentials = new ServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsPropertyOutputReference(this, "o_auth_client_credentials");
    public get oAuthClientCredentials() {
        return this._oAuthClientCredentials;
    }
    public putOAuthClientCredentials(value: ServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsProperty) {
        this._oAuthClientCredentials.internalValue = value;
    }
    public resetOAuthClientCredentials() {
        this._oAuthClientCredentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthClientCredentialsInput() {
        return this._oAuthClientCredentials.internalValue;
    }
}
export interface PagerDutyDetailsProperty {
    /**
    * PagerDuty OAuth authorization configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config CcService#authorization_config}
    */
    readonly authorizationConfig?: PagerDutyAuthorizationConfigProperty;
    /**
    * PagerDuty scopes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#scopes CcService#scopes}
    */
    readonly scopes?: string[];
}
export class PagerDutyDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PagerDutyDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        if (this._scopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopes = this._scopes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PagerDutyDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = undefined;
            this._scopes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = value.authorizationConfig;
            this._scopes = value.scopes;
        }
    }

    // authorization_config - computed: true, optional: true, required: false
    private _authorizationConfig = new PagerDutyAuthorizationConfigPropertyOutputReference(this, "authorization_config");
    public get authorizationConfig() {
        return this._authorizationConfig;
    }
    public putAuthorizationConfig(value: PagerDutyAuthorizationConfigProperty) {
        this._authorizationConfig.internalValue = value;
    }
    public resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
    }

    // scopes - computed: true, optional: true, required: false
    private _scopes?: string[]; 
    public get scopes() {
        return this.getListAttribute('scopes');
    }
    public set scopes(value: string[]) {
        this._scopes = value;
    }
    public resetScopes() {
        this._scopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopesInput() {
        return this._scopes;
    }
}
export interface ServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsProperty {
    /**
    * OAuth client ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_id CcService#client_id}
    */
    readonly clientId?: string;
    /**
    * User friendly OAuth client name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_name CcService#client_name}
    */
    readonly clientName?: string;
    /**
    * OAuth client secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#client_secret CcService#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * OAuth token exchange parameters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#exchange_parameters CcService#exchange_parameters}
    */
    readonly exchangeParameters?: string;
}
export class ServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientName !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientName = this._clientName;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._exchangeParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.exchangeParameters = this._exchangeParameters;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientName = undefined;
            this._clientSecret = undefined;
            this._exchangeParameters = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientId = value.clientId;
            this._clientName = value.clientName;
            this._clientSecret = value.clientSecret;
            this._exchangeParameters = value.exchangeParameters;
        }
    }

    // client_id - computed: true, optional: true, required: false
    private _clientId?: string; 
    public get clientId() {
        return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
        this._clientId = value;
    }
    public resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId;
    }

    // client_name - computed: true, optional: true, required: false
    private _clientName?: string; 
    public get clientName() {
        return this.getStringAttribute('client_name');
    }
    public set clientName(value: string) {
        this._clientName = value;
    }
    public resetClientName() {
        this._clientName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientNameInput() {
        return this._clientName;
    }

    // client_secret - computed: true, optional: true, required: false
    private _clientSecret?: string; 
    public get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    public set clientSecret(value: string) {
        this._clientSecret = value;
    }
    public resetClientSecret() {
        this._clientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
        return this._clientSecret;
    }

    // exchange_parameters - computed: true, optional: true, required: false
    private _exchangeParameters?: string; 
    public get exchangeParameters() {
        return this.getStringAttribute('exchange_parameters');
    }
    public set exchangeParameters(value: string) {
        this._exchangeParameters = value;
    }
    public resetExchangeParameters() {
        this._exchangeParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exchangeParametersInput() {
        return this._exchangeParameters;
    }
}
export interface ServiceNowAuthorizationConfigProperty {
    /**
    * OAuth client credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#o_auth_client_credentials CcService#o_auth_client_credentials}
    */
    readonly oAuthClientCredentials?: ServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsProperty;
}
export class ServiceNowAuthorizationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceNowAuthorizationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._oAuthClientCredentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthClientCredentials = this._oAuthClientCredentials?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceNowAuthorizationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._oAuthClientCredentials.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._oAuthClientCredentials.internalValue = value.oAuthClientCredentials;
        }
    }

    // o_auth_client_credentials - computed: true, optional: true, required: false
    private _oAuthClientCredentials = new ServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsPropertyOutputReference(this, "o_auth_client_credentials");
    public get oAuthClientCredentials() {
        return this._oAuthClientCredentials;
    }
    public putOAuthClientCredentials(value: ServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsProperty) {
        this._oAuthClientCredentials.internalValue = value;
    }
    public resetOAuthClientCredentials() {
        this._oAuthClientCredentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthClientCredentialsInput() {
        return this._oAuthClientCredentials.internalValue;
    }
}
export interface ServiceNowServiceDetailsProperty {
    /**
    * ServiceNow OAuth authorization configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#authorization_config CcService#authorization_config}
    */
    readonly authorizationConfig?: ServiceNowAuthorizationConfigProperty;
    /**
    * ServiceNow instance URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#instance_url CcService#instance_url}
    */
    readonly instanceUrl?: string;
}
export class ServiceNowServiceDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceNowServiceDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceNowServiceDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = undefined;
            this._instanceUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = value.authorizationConfig;
            this._instanceUrl = value.instanceUrl;
        }
    }

    // authorization_config - computed: true, optional: true, required: false
    private _authorizationConfig = new ServiceNowAuthorizationConfigPropertyOutputReference(this, "authorization_config");
    public get authorizationConfig() {
        return this._authorizationConfig;
    }
    public putAuthorizationConfig(value: ServiceNowAuthorizationConfigProperty) {
        this._authorizationConfig.internalValue = value;
    }
    public resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
    }

    // instance_url - computed: true, optional: true, required: false
    private _instanceUrl?: string; 
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    public set instanceUrl(value: string) {
        this._instanceUrl = value;
    }
    public resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceUrlInput() {
        return this._instanceUrl;
    }
}
export interface ServiceDetailsProperty {
    /**
    * Azure Identity service configuration for federated identity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#azure_identity CcService#azure_identity}
    */
    readonly azureIdentity?: AzureIdentityServiceDetailsProperty;
    /**
    * Dynatrace service configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#dynatrace CcService#dynatrace}
    */
    readonly dynatrace?: DynatraceServiceDetailsProperty;
    /**
    * GitLab service configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#git_lab CcService#git_lab}
    */
    readonly gitLab?: GitLabDetailsProperty;
    /**
    * MCP server configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#mcp_server CcService#mcp_server}
    */
    readonly mcpServer?: MCPServerDetailsProperty;
    /**
    * Grafana MCP server configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#mcp_server_grafana CcService#mcp_server_grafana}
    */
    readonly mcpServerGrafana?: MCPServerGrafanaDetailsProperty;
    /**
    * New Relic service configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#mcp_server_new_relic CcService#mcp_server_new_relic}
    */
    readonly mcpServerNewRelic?: NewRelicServiceDetailsProperty;
    /**
    * SigV4-authenticated MCP server configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#mcp_server_sig_v4 CcService#mcp_server_sig_v4}
    */
    readonly mcpServerSigV4?: MCPServerSigV4DetailsProperty;
    /**
    * Splunk MCP server configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#mcp_server_splunk CcService#mcp_server_splunk}
    */
    readonly mcpServerSplunk?: MCPServerSplunkDetailsProperty;
    /**
    * PagerDuty service configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#pager_duty CcService#pager_duty}
    */
    readonly pagerDuty?: PagerDutyDetailsProperty;
    /**
    * ServiceNow service configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#service_now CcService#service_now}
    */
    readonly serviceNow?: ServiceNowServiceDetailsProperty;
}
export class ServiceDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._azureIdentity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.azureIdentity = this._azureIdentity?.internalValue;
        }
        if (this._dynatrace?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynatrace = this._dynatrace?.internalValue;
        }
        if (this._gitLab?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitLab = this._gitLab?.internalValue;
        }
        if (this._mcpServer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServer = this._mcpServer?.internalValue;
        }
        if (this._mcpServerGrafana?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServerGrafana = this._mcpServerGrafana?.internalValue;
        }
        if (this._mcpServerNewRelic?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServerNewRelic = this._mcpServerNewRelic?.internalValue;
        }
        if (this._mcpServerSigV4?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServerSigV4 = this._mcpServerSigV4?.internalValue;
        }
        if (this._mcpServerSplunk?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServerSplunk = this._mcpServerSplunk?.internalValue;
        }
        if (this._pagerDuty?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pagerDuty = this._pagerDuty?.internalValue;
        }
        if (this._serviceNow?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNow = this._serviceNow?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._azureIdentity.internalValue = undefined;
            this._dynatrace.internalValue = undefined;
            this._gitLab.internalValue = undefined;
            this._mcpServer.internalValue = undefined;
            this._mcpServerGrafana.internalValue = undefined;
            this._mcpServerNewRelic.internalValue = undefined;
            this._mcpServerSigV4.internalValue = undefined;
            this._mcpServerSplunk.internalValue = undefined;
            this._pagerDuty.internalValue = undefined;
            this._serviceNow.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._azureIdentity.internalValue = value.azureIdentity;
            this._dynatrace.internalValue = value.dynatrace;
            this._gitLab.internalValue = value.gitLab;
            this._mcpServer.internalValue = value.mcpServer;
            this._mcpServerGrafana.internalValue = value.mcpServerGrafana;
            this._mcpServerNewRelic.internalValue = value.mcpServerNewRelic;
            this._mcpServerSigV4.internalValue = value.mcpServerSigV4;
            this._mcpServerSplunk.internalValue = value.mcpServerSplunk;
            this._pagerDuty.internalValue = value.pagerDuty;
            this._serviceNow.internalValue = value.serviceNow;
        }
    }

    // azure_identity - computed: true, optional: true, required: false
    private _azureIdentity = new AzureIdentityServiceDetailsPropertyOutputReference(this, "azure_identity");
    public get azureIdentity() {
        return this._azureIdentity;
    }
    public putAzureIdentity(value: AzureIdentityServiceDetailsProperty) {
        this._azureIdentity.internalValue = value;
    }
    public resetAzureIdentity() {
        this._azureIdentity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azureIdentityInput() {
        return this._azureIdentity.internalValue;
    }

    // dynatrace - computed: true, optional: true, required: false
    private _dynatrace = new DynatraceServiceDetailsPropertyOutputReference(this, "dynatrace");
    public get dynatrace() {
        return this._dynatrace;
    }
    public putDynatrace(value: DynatraceServiceDetailsProperty) {
        this._dynatrace.internalValue = value;
    }
    public resetDynatrace() {
        this._dynatrace.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynatraceInput() {
        return this._dynatrace.internalValue;
    }

    // git_lab - computed: true, optional: true, required: false
    private _gitLab = new GitLabDetailsPropertyOutputReference(this, "git_lab");
    public get gitLab() {
        return this._gitLab;
    }
    public putGitLab(value: GitLabDetailsProperty) {
        this._gitLab.internalValue = value;
    }
    public resetGitLab() {
        this._gitLab.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitLabInput() {
        return this._gitLab.internalValue;
    }

    // mcp_server - computed: true, optional: true, required: false
    private _mcpServer = new MCPServerDetailsPropertyOutputReference(this, "mcp_server");
    public get mcpServer() {
        return this._mcpServer;
    }
    public putMcpServer(value: MCPServerDetailsProperty) {
        this._mcpServer.internalValue = value;
    }
    public resetMcpServer() {
        this._mcpServer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpServerInput() {
        return this._mcpServer.internalValue;
    }

    // mcp_server_grafana - computed: true, optional: true, required: false
    private _mcpServerGrafana = new MCPServerGrafanaDetailsPropertyOutputReference(this, "mcp_server_grafana");
    public get mcpServerGrafana() {
        return this._mcpServerGrafana;
    }
    public putMcpServerGrafana(value: MCPServerGrafanaDetailsProperty) {
        this._mcpServerGrafana.internalValue = value;
    }
    public resetMcpServerGrafana() {
        this._mcpServerGrafana.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpServerGrafanaInput() {
        return this._mcpServerGrafana.internalValue;
    }

    // mcp_server_new_relic - computed: true, optional: true, required: false
    private _mcpServerNewRelic = new NewRelicServiceDetailsPropertyOutputReference(this, "mcp_server_new_relic");
    public get mcpServerNewRelic() {
        return this._mcpServerNewRelic;
    }
    public putMcpServerNewRelic(value: NewRelicServiceDetailsProperty) {
        this._mcpServerNewRelic.internalValue = value;
    }
    public resetMcpServerNewRelic() {
        this._mcpServerNewRelic.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpServerNewRelicInput() {
        return this._mcpServerNewRelic.internalValue;
    }

    // mcp_server_sig_v4 - computed: true, optional: true, required: false
    private _mcpServerSigV4 = new MCPServerSigV4DetailsPropertyOutputReference(this, "mcp_server_sig_v4");
    public get mcpServerSigV4() {
        return this._mcpServerSigV4;
    }
    public putMcpServerSigV4(value: MCPServerSigV4DetailsProperty) {
        this._mcpServerSigV4.internalValue = value;
    }
    public resetMcpServerSigV4() {
        this._mcpServerSigV4.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpServerSigV4Input() {
        return this._mcpServerSigV4.internalValue;
    }

    // mcp_server_splunk - computed: true, optional: true, required: false
    private _mcpServerSplunk = new MCPServerSplunkDetailsPropertyOutputReference(this, "mcp_server_splunk");
    public get mcpServerSplunk() {
        return this._mcpServerSplunk;
    }
    public putMcpServerSplunk(value: MCPServerSplunkDetailsProperty) {
        this._mcpServerSplunk.internalValue = value;
    }
    public resetMcpServerSplunk() {
        this._mcpServerSplunk.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpServerSplunkInput() {
        return this._mcpServerSplunk.internalValue;
    }

    // pager_duty - computed: true, optional: true, required: false
    private _pagerDuty = new PagerDutyDetailsPropertyOutputReference(this, "pager_duty");
    public get pagerDuty() {
        return this._pagerDuty;
    }
    public putPagerDuty(value: PagerDutyDetailsProperty) {
        this._pagerDuty.internalValue = value;
    }
    public resetPagerDuty() {
        this._pagerDuty.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pagerDutyInput() {
        return this._pagerDuty.internalValue;
    }

    // service_now - computed: true, optional: true, required: false
    private _serviceNow = new ServiceNowServiceDetailsPropertyOutputReference(this, "service_now");
    public get serviceNow() {
        return this._serviceNow;
    }
    public putServiceNow(value: ServiceNowServiceDetailsProperty) {
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
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#key CcService#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_service#value CcService#value}
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
