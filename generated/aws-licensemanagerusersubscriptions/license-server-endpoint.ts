// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLicenseServerEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) that identifies the registered identity provider the license server endpoint is created for. For Active Directory, that can be a self-managed Active Directory or an AWS Managed Microsoft AD.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#identity_provider_arn CcLicenseServerEndpoint#identity_provider_arn}
    */
    readonly identityProviderArn: string;
    /**
    * The settings of the RDS license server to create the endpoint for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#license_server_settings CcLicenseServerEndpoint#license_server_settings}
    */
    readonly licenseServerSettings?: CcLicenseServerEndpoint.LicenseServerSettingsProperty;
    /**
    * The tags that apply for the license server endpoint. A maximum of 50 tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#tags CcLicenseServerEndpoint#tags}
    */
    readonly tags?: CcLicenseServerEndpoint.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint awscc_licensemanagerusersubscriptions_license_server_endpoint}
*/
export class CcLicenseServerEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_licensemanagerusersubscriptions_license_server_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLicenseServerEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLicenseServerEndpoint to import
    * @param importFromId The id of the existing CcLicenseServerEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLicenseServerEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_licensemanagerusersubscriptions_license_server_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint awscc_licensemanagerusersubscriptions_license_server_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLicenseServerEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcLicenseServerEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_licensemanagerusersubscriptions_license_server_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._identityProviderArn = config.identityProviderArn;
        this._licenseServerSettings.internalValue = config.licenseServerSettings;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_provider_arn - computed: false, optional: false, required: true
    private _identityProviderArn?: string; 
    public get identityProviderArn() {
        return this.getStringAttribute('identity_provider_arn');
    }
    public set identityProviderArn(value: string) {
        this._identityProviderArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderArnInput() {
        return this._identityProviderArn;
    }

    // license_server_endpoint_arn - computed: true, optional: false, required: false
    public get licenseServerEndpointArn() {
        return this.getStringAttribute('license_server_endpoint_arn');
    }

    // license_server_endpoint_id - computed: true, optional: false, required: false
    public get licenseServerEndpointId() {
        return this.getStringAttribute('license_server_endpoint_id');
    }

    // license_server_endpoint_provisioning_status - computed: true, optional: false, required: false
    public get licenseServerEndpointProvisioningStatus() {
        return this.getStringAttribute('license_server_endpoint_provisioning_status');
    }

    // license_server_settings - computed: true, optional: true, required: false
    private _licenseServerSettings = new CcLicenseServerEndpoint.LicenseServerSettingsPropertyOutputReference(this, "license_server_settings");
    public get licenseServerSettings() {
        return this._licenseServerSettings;
    }
    public putLicenseServerSettings(value: CcLicenseServerEndpoint.LicenseServerSettingsProperty) {
        this._licenseServerSettings.internalValue = value;
    }
    public resetLicenseServerSettings() {
        this._licenseServerSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseServerSettingsInput() {
        return this._licenseServerSettings.internalValue;
    }

    // license_servers - computed: true, optional: false, required: false
    private _licenseServers = new CcLicenseServerEndpoint.LicenseServersPropertyList(this, "license_servers", false);
    public get licenseServers() {
        return this._licenseServers;
    }

    // server_endpoint - computed: true, optional: false, required: false
    private _serverEndpoint = new CcLicenseServerEndpoint.ServerEndpointPropertyOutputReference(this, "server_endpoint");
    public get serverEndpoint() {
        return this._serverEndpoint;
    }

    // server_type - computed: true, optional: false, required: false
    public get serverType() {
        return this.getStringAttribute('server_type');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLicenseServerEndpoint.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLicenseServerEndpoint.TagsProperty[] | cdktn.IResolvable) {
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
            identity_provider_arn: cdktn.stringToTerraform(this._identityProviderArn),
            license_server_settings: ccLicenseServerEndpointLicenseServerSettingsPropertyToTerraform(this._licenseServerSettings.internalValue),
            tags: cdktn.listMapper(ccLicenseServerEndpointTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            identity_provider_arn: {
                value: cdktn.stringToHclTerraform(this._identityProviderArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            license_server_settings: {
                value: ccLicenseServerEndpointLicenseServerSettingsPropertyToHclTerraform(this._licenseServerSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLicenseServerEndpoint.LicenseServerSettingsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLicenseServerEndpointTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLicenseServerEndpoint.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLicenseServerEndpointSecretsManagerCredentialsProviderPropertyToTerraform(struct?: CcLicenseServerEndpoint.SecretsManagerCredentialsProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccLicenseServerEndpointSecretsManagerCredentialsProviderPropertyToHclTerraform(struct?: CcLicenseServerEndpoint.SecretsManagerCredentialsProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseServerEndpointRdsSalCredentialsProviderPropertyToTerraform(struct?: CcLicenseServerEndpoint.RdsSalCredentialsProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secrets_manager_credentials_provider: ccLicenseServerEndpointSecretsManagerCredentialsProviderPropertyToTerraform(struct!.secretsManagerCredentialsProvider),
    }
}


export function ccLicenseServerEndpointRdsSalCredentialsProviderPropertyToHclTerraform(struct?: CcLicenseServerEndpoint.RdsSalCredentialsProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        secrets_manager_credentials_provider: {
            value: ccLicenseServerEndpointSecretsManagerCredentialsProviderPropertyToHclTerraform(struct!.secretsManagerCredentialsProvider),
            isBlock: true,
            type: "struct",
            storageClassType: "SecretsManagerCredentialsProviderProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseServerEndpointRdsSalSettingsPropertyToTerraform(struct?: CcLicenseServerEndpoint.RdsSalSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rds_sal_credentials_provider: ccLicenseServerEndpointRdsSalCredentialsProviderPropertyToTerraform(struct!.rdsSalCredentialsProvider),
    }
}


export function ccLicenseServerEndpointRdsSalSettingsPropertyToHclTerraform(struct?: CcLicenseServerEndpoint.RdsSalSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rds_sal_credentials_provider: {
            value: ccLicenseServerEndpointRdsSalCredentialsProviderPropertyToHclTerraform(struct!.rdsSalCredentialsProvider),
            isBlock: true,
            type: "struct",
            storageClassType: "RdsSalCredentialsProviderProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseServerEndpointServerSettingsPropertyToTerraform(struct?: CcLicenseServerEndpoint.ServerSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rds_sal_settings: ccLicenseServerEndpointRdsSalSettingsPropertyToTerraform(struct!.rdsSalSettings),
    }
}


export function ccLicenseServerEndpointServerSettingsPropertyToHclTerraform(struct?: CcLicenseServerEndpoint.ServerSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rds_sal_settings: {
            value: ccLicenseServerEndpointRdsSalSettingsPropertyToHclTerraform(struct!.rdsSalSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "RdsSalSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseServerEndpointLicenseServerSettingsPropertyToTerraform(struct?: CcLicenseServerEndpoint.LicenseServerSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        server_settings: ccLicenseServerEndpointServerSettingsPropertyToTerraform(struct!.serverSettings),
        server_type: cdktn.stringToTerraform(struct!.serverType),
    }
}


export function ccLicenseServerEndpointLicenseServerSettingsPropertyToHclTerraform(struct?: CcLicenseServerEndpoint.LicenseServerSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        server_settings: {
            value: ccLicenseServerEndpointServerSettingsPropertyToHclTerraform(struct!.serverSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "ServerSettingsProperty",
        },
        server_type: {
            value: cdktn.stringToHclTerraform(struct!.serverType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLicenseServerEndpointLicenseServersPropertyToTerraform(struct?: CcLicenseServerEndpoint.LicenseServersProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccLicenseServerEndpointLicenseServersPropertyToHclTerraform(struct?: CcLicenseServerEndpoint.LicenseServersProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccLicenseServerEndpointServerEndpointPropertyToTerraform(struct?: CcLicenseServerEndpoint.ServerEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccLicenseServerEndpointServerEndpointPropertyToHclTerraform(struct?: CcLicenseServerEndpoint.ServerEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccLicenseServerEndpointTagsPropertyToTerraform(struct?: CcLicenseServerEndpoint.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLicenseServerEndpointTagsPropertyToHclTerraform(struct?: CcLicenseServerEndpoint.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcLicenseServerEndpoint {
export interface SecretsManagerCredentialsProviderProperty {
    /**
    * The identifier of the Secrets Manager secret that holds the license server administrator credentials. The name of the secret must begin with the prefix license-manager-user-.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#secret_id CcLicenseServerEndpoint#secret_id}
    */
    readonly secretId?: string;
}
export class SecretsManagerCredentialsProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecretsManagerCredentialsProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecretsManagerCredentialsProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretId = value.secretId;
        }
    }

    // secret_id - computed: true, optional: true, required: false
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    public resetSecretId() {
        this._secretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }
}
export interface RdsSalCredentialsProviderProperty {
    /**
    * Credentials held in AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#secrets_manager_credentials_provider CcLicenseServerEndpoint#secrets_manager_credentials_provider}
    */
    readonly secretsManagerCredentialsProvider?: SecretsManagerCredentialsProviderProperty;
}
export class RdsSalCredentialsProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RdsSalCredentialsProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretsManagerCredentialsProvider?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerCredentialsProvider = this._secretsManagerCredentialsProvider?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RdsSalCredentialsProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretsManagerCredentialsProvider.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretsManagerCredentialsProvider.internalValue = value.secretsManagerCredentialsProvider;
        }
    }

    // secrets_manager_credentials_provider - computed: true, optional: true, required: false
    private _secretsManagerCredentialsProvider = new SecretsManagerCredentialsProviderPropertyOutputReference(this, "secrets_manager_credentials_provider");
    public get secretsManagerCredentialsProvider() {
        return this._secretsManagerCredentialsProvider;
    }
    public putSecretsManagerCredentialsProvider(value: SecretsManagerCredentialsProviderProperty) {
        this._secretsManagerCredentialsProvider.internalValue = value;
    }
    public resetSecretsManagerCredentialsProvider() {
        this._secretsManagerCredentialsProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerCredentialsProviderInput() {
        return this._secretsManagerCredentialsProvider.internalValue;
    }
}
export interface RdsSalSettingsProperty {
    /**
    * The source of the credentials that License Manager uses to reach the license server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#rds_sal_credentials_provider CcLicenseServerEndpoint#rds_sal_credentials_provider}
    */
    readonly rdsSalCredentialsProvider?: RdsSalCredentialsProviderProperty;
}
export class RdsSalSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RdsSalSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rdsSalCredentialsProvider?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsSalCredentialsProvider = this._rdsSalCredentialsProvider?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RdsSalSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rdsSalCredentialsProvider.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rdsSalCredentialsProvider.internalValue = value.rdsSalCredentialsProvider;
        }
    }

    // rds_sal_credentials_provider - computed: true, optional: true, required: false
    private _rdsSalCredentialsProvider = new RdsSalCredentialsProviderPropertyOutputReference(this, "rds_sal_credentials_provider");
    public get rdsSalCredentialsProvider() {
        return this._rdsSalCredentialsProvider;
    }
    public putRdsSalCredentialsProvider(value: RdsSalCredentialsProviderProperty) {
        this._rdsSalCredentialsProvider.internalValue = value;
    }
    public resetRdsSalCredentialsProvider() {
        this._rdsSalCredentialsProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsSalCredentialsProviderInput() {
        return this._rdsSalCredentialsProvider.internalValue;
    }
}
export interface ServerSettingsProperty {
    /**
    * The settings of a Remote Desktop Services Subscriber Access License server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#rds_sal_settings CcLicenseServerEndpoint#rds_sal_settings}
    */
    readonly rdsSalSettings?: RdsSalSettingsProperty;
}
export class ServerSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rdsSalSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsSalSettings = this._rdsSalSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rdsSalSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rdsSalSettings.internalValue = value.rdsSalSettings;
        }
    }

    // rds_sal_settings - computed: true, optional: true, required: false
    private _rdsSalSettings = new RdsSalSettingsPropertyOutputReference(this, "rds_sal_settings");
    public get rdsSalSettings() {
        return this._rdsSalSettings;
    }
    public putRdsSalSettings(value: RdsSalSettingsProperty) {
        this._rdsSalSettings.internalValue = value;
    }
    public resetRdsSalSettings() {
        this._rdsSalSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsSalSettingsInput() {
        return this._rdsSalSettings.internalValue;
    }
}
export interface LicenseServerSettingsProperty {
    /**
    * The settings of a license server, by server type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#server_settings CcLicenseServerEndpoint#server_settings}
    */
    readonly serverSettings?: ServerSettingsProperty;
    /**
    * The type of license server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#server_type CcLicenseServerEndpoint#server_type}
    */
    readonly serverType?: string;
}
export class LicenseServerSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LicenseServerSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._serverSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverSettings = this._serverSettings?.internalValue;
        }
        if (this._serverType !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverType = this._serverType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LicenseServerSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._serverSettings.internalValue = undefined;
            this._serverType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._serverSettings.internalValue = value.serverSettings;
            this._serverType = value.serverType;
        }
    }

    // server_settings - computed: true, optional: true, required: false
    private _serverSettings = new ServerSettingsPropertyOutputReference(this, "server_settings");
    public get serverSettings() {
        return this._serverSettings;
    }
    public putServerSettings(value: ServerSettingsProperty) {
        this._serverSettings.internalValue = value;
    }
    public resetServerSettings() {
        this._serverSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSettingsInput() {
        return this._serverSettings.internalValue;
    }

    // server_type - computed: true, optional: true, required: false
    private _serverType?: string; 
    public get serverType() {
        return this.getStringAttribute('server_type');
    }
    public set serverType(value: string) {
        this._serverType = value;
    }
    public resetServerType() {
        this._serverType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverTypeInput() {
        return this._serverType;
    }
}
export interface LicenseServersProperty {
}
export class LicenseServersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LicenseServersProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LicenseServersProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // health_status - computed: true, optional: false, required: false
    public get healthStatus() {
        return this.getStringAttribute('health_status');
    }

    // ipv_4_address - computed: true, optional: false, required: false
    public get ipv4Address() {
        return this.getStringAttribute('ipv_4_address');
    }

    // ipv_6_address - computed: true, optional: false, required: false
    public get ipv6Address() {
        return this.getStringAttribute('ipv_6_address');
    }

    // provisioning_status - computed: true, optional: false, required: false
    public get provisioningStatus() {
        return this.getStringAttribute('provisioning_status');
    }
}

export class LicenseServersPropertyList extends cdktn.ComplexList {

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
    public get(index: number): LicenseServersPropertyOutputReference {
        return new LicenseServersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServerEndpointProperty {
}
export class ServerEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerEndpointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerEndpointProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
}
export interface TagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#key CcLicenseServerEndpoint#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#value CcLicenseServerEndpoint#value}
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
