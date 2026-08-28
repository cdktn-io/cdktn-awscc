// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLocationAzureBlobProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container. If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#agent_arns CcLocationAzureBlob#agent_arns}
    */
    readonly agentArns?: string[];
    /**
    * Specifies an access tier for the objects you're transferring into your Azure Blob Storage container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#azure_access_tier CcLocationAzureBlob#azure_access_tier}
    */
    readonly azureAccessTier?: string;
    /**
    * The specific authentication type that you want DataSync to use to access your Azure Blob Container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#azure_blob_authentication_type CcLocationAzureBlob#azure_blob_authentication_type}
    */
    readonly azureBlobAuthenticationType?: string;
    /**
    * The URL of the Azure Blob container that was described.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#azure_blob_container_url CcLocationAzureBlob#azure_blob_container_url}
    */
    readonly azureBlobContainerUrl?: string;
    /**
    * Specifies the shared access signature (SAS) that DataSync uses to access your Azure Blob Storage container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#azure_blob_sas_configuration CcLocationAzureBlob#azure_blob_sas_configuration}
    */
    readonly azureBlobSasConfiguration?: CcLocationAzureBlob.AzureBlobSasConfigurationProperty;
    /**
    * Specifies a blob type for the objects you're transferring into your Azure Blob Storage container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#azure_blob_type CcLocationAzureBlob#azure_blob_type}
    */
    readonly azureBlobType?: string;
    /**
    * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#cmk_secret_config CcLocationAzureBlob#cmk_secret_config}
    */
    readonly cmkSecretConfig?: CcLocationAzureBlob.CmkSecretConfigProperty;
    /**
    * Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#custom_secret_config CcLocationAzureBlob#custom_secret_config}
    */
    readonly customSecretConfig?: CcLocationAzureBlob.CustomSecretConfigProperty;
    /**
    * The subdirectory in the Azure Blob Container that is used to read data from the Azure Blob Source Location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#subdirectory CcLocationAzureBlob#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#tags CcLocationAzureBlob#tags}
    */
    readonly tags?: CcLocationAzureBlob.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob awscc_datasync_location_azure_blob}
*/
export class CcLocationAzureBlob extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datasync_location_azure_blob";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLocationAzureBlob resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLocationAzureBlob to import
    * @param importFromId The id of the existing CcLocationAzureBlob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLocationAzureBlob to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_azure_blob", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob awscc_datasync_location_azure_blob} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLocationAzureBlobProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcLocationAzureBlobProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_datasync_location_azure_blob',
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
        this._agentArns = config.agentArns;
        this._azureAccessTier = config.azureAccessTier;
        this._azureBlobAuthenticationType = config.azureBlobAuthenticationType;
        this._azureBlobContainerUrl = config.azureBlobContainerUrl;
        this._azureBlobSasConfiguration.internalValue = config.azureBlobSasConfiguration;
        this._azureBlobType = config.azureBlobType;
        this._cmkSecretConfig.internalValue = config.cmkSecretConfig;
        this._customSecretConfig.internalValue = config.customSecretConfig;
        this._subdirectory = config.subdirectory;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_arns - computed: true, optional: true, required: false
    private _agentArns?: string[]; 
    public get agentArns() {
        return this.getListAttribute('agent_arns');
    }
    public set agentArns(value: string[]) {
        this._agentArns = value;
    }
    public resetAgentArns() {
        this._agentArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentArnsInput() {
        return this._agentArns;
    }

    // azure_access_tier - computed: true, optional: true, required: false
    private _azureAccessTier?: string; 
    public get azureAccessTier() {
        return this.getStringAttribute('azure_access_tier');
    }
    public set azureAccessTier(value: string) {
        this._azureAccessTier = value;
    }
    public resetAzureAccessTier() {
        this._azureAccessTier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azureAccessTierInput() {
        return this._azureAccessTier;
    }

    // azure_blob_authentication_type - computed: true, optional: true, required: false
    private _azureBlobAuthenticationType?: string; 
    public get azureBlobAuthenticationType() {
        return this.getStringAttribute('azure_blob_authentication_type');
    }
    public set azureBlobAuthenticationType(value: string) {
        this._azureBlobAuthenticationType = value;
    }
    public resetAzureBlobAuthenticationType() {
        this._azureBlobAuthenticationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azureBlobAuthenticationTypeInput() {
        return this._azureBlobAuthenticationType;
    }

    // azure_blob_container_url - computed: true, optional: true, required: false
    private _azureBlobContainerUrl?: string; 
    public get azureBlobContainerUrl() {
        return this.getStringAttribute('azure_blob_container_url');
    }
    public set azureBlobContainerUrl(value: string) {
        this._azureBlobContainerUrl = value;
    }
    public resetAzureBlobContainerUrl() {
        this._azureBlobContainerUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azureBlobContainerUrlInput() {
        return this._azureBlobContainerUrl;
    }

    // azure_blob_sas_configuration - computed: true, optional: true, required: false
    private _azureBlobSasConfiguration = new CcLocationAzureBlob.AzureBlobSasConfigurationPropertyOutputReference(this, "azure_blob_sas_configuration");
    public get azureBlobSasConfiguration() {
        return this._azureBlobSasConfiguration;
    }
    public putAzureBlobSasConfiguration(value: CcLocationAzureBlob.AzureBlobSasConfigurationProperty) {
        this._azureBlobSasConfiguration.internalValue = value;
    }
    public resetAzureBlobSasConfiguration() {
        this._azureBlobSasConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azureBlobSasConfigurationInput() {
        return this._azureBlobSasConfiguration.internalValue;
    }

    // azure_blob_type - computed: true, optional: true, required: false
    private _azureBlobType?: string; 
    public get azureBlobType() {
        return this.getStringAttribute('azure_blob_type');
    }
    public set azureBlobType(value: string) {
        this._azureBlobType = value;
    }
    public resetAzureBlobType() {
        this._azureBlobType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azureBlobTypeInput() {
        return this._azureBlobType;
    }

    // cmk_secret_config - computed: true, optional: true, required: false
    private _cmkSecretConfig = new CcLocationAzureBlob.CmkSecretConfigPropertyOutputReference(this, "cmk_secret_config");
    public get cmkSecretConfig() {
        return this._cmkSecretConfig;
    }
    public putCmkSecretConfig(value: CcLocationAzureBlob.CmkSecretConfigProperty) {
        this._cmkSecretConfig.internalValue = value;
    }
    public resetCmkSecretConfig() {
        this._cmkSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cmkSecretConfigInput() {
        return this._cmkSecretConfig.internalValue;
    }

    // custom_secret_config - computed: true, optional: true, required: false
    private _customSecretConfig = new CcLocationAzureBlob.CustomSecretConfigPropertyOutputReference(this, "custom_secret_config");
    public get customSecretConfig() {
        return this._customSecretConfig;
    }
    public putCustomSecretConfig(value: CcLocationAzureBlob.CustomSecretConfigProperty) {
        this._customSecretConfig.internalValue = value;
    }
    public resetCustomSecretConfig() {
        this._customSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecretConfigInput() {
        return this._customSecretConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // location_arn - computed: true, optional: false, required: false
    public get locationArn() {
        return this.getStringAttribute('location_arn');
    }

    // location_uri - computed: true, optional: false, required: false
    public get locationUri() {
        return this.getStringAttribute('location_uri');
    }

    // managed_secret_config - computed: true, optional: false, required: false
    private _managedSecretConfig = new CcLocationAzureBlob.ManagedSecretConfigPropertyOutputReference(this, "managed_secret_config");
    public get managedSecretConfig() {
        return this._managedSecretConfig;
    }

    // subdirectory - computed: true, optional: true, required: false
    private _subdirectory?: string; 
    public get subdirectory() {
        return this.getStringAttribute('subdirectory');
    }
    public set subdirectory(value: string) {
        this._subdirectory = value;
    }
    public resetSubdirectory() {
        this._subdirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subdirectoryInput() {
        return this._subdirectory;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLocationAzureBlob.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLocationAzureBlob.TagProperty[] | cdktn.IResolvable) {
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
            agent_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._agentArns),
            azure_access_tier: cdktn.stringToTerraform(this._azureAccessTier),
            azure_blob_authentication_type: cdktn.stringToTerraform(this._azureBlobAuthenticationType),
            azure_blob_container_url: cdktn.stringToTerraform(this._azureBlobContainerUrl),
            azure_blob_sas_configuration: ccLocationAzureBlobAzureBlobSasConfigurationPropertyToTerraform(this._azureBlobSasConfiguration.internalValue),
            azure_blob_type: cdktn.stringToTerraform(this._azureBlobType),
            cmk_secret_config: ccLocationAzureBlobCmkSecretConfigPropertyToTerraform(this._cmkSecretConfig.internalValue),
            custom_secret_config: ccLocationAzureBlobCustomSecretConfigPropertyToTerraform(this._customSecretConfig.internalValue),
            subdirectory: cdktn.stringToTerraform(this._subdirectory),
            tags: cdktn.listMapper(ccLocationAzureBlobTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._agentArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            azure_access_tier: {
                value: cdktn.stringToHclTerraform(this._azureAccessTier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            azure_blob_authentication_type: {
                value: cdktn.stringToHclTerraform(this._azureBlobAuthenticationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            azure_blob_container_url: {
                value: cdktn.stringToHclTerraform(this._azureBlobContainerUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            azure_blob_sas_configuration: {
                value: ccLocationAzureBlobAzureBlobSasConfigurationPropertyToHclTerraform(this._azureBlobSasConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationAzureBlob.AzureBlobSasConfigurationProperty",
            },
            azure_blob_type: {
                value: cdktn.stringToHclTerraform(this._azureBlobType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cmk_secret_config: {
                value: ccLocationAzureBlobCmkSecretConfigPropertyToHclTerraform(this._cmkSecretConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationAzureBlob.CmkSecretConfigProperty",
            },
            custom_secret_config: {
                value: ccLocationAzureBlobCustomSecretConfigPropertyToHclTerraform(this._customSecretConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationAzureBlob.CustomSecretConfigProperty",
            },
            subdirectory: {
                value: cdktn.stringToHclTerraform(this._subdirectory),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLocationAzureBlobTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLocationAzureBlob.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLocationAzureBlobAzureBlobSasConfigurationPropertyToTerraform(struct?: CcLocationAzureBlob.AzureBlobSasConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        azure_blob_sas_token: cdktn.stringToTerraform(struct!.azureBlobSasToken),
    }
}


export function ccLocationAzureBlobAzureBlobSasConfigurationPropertyToHclTerraform(struct?: CcLocationAzureBlob.AzureBlobSasConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        azure_blob_sas_token: {
            value: cdktn.stringToHclTerraform(struct!.azureBlobSasToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLocationAzureBlobCmkSecretConfigPropertyToTerraform(struct?: CcLocationAzureBlob.CmkSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccLocationAzureBlobCmkSecretConfigPropertyToHclTerraform(struct?: CcLocationAzureBlob.CmkSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLocationAzureBlobCustomSecretConfigPropertyToTerraform(struct?: CcLocationAzureBlob.CustomSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_access_role_arn: cdktn.stringToTerraform(struct!.secretAccessRoleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccLocationAzureBlobCustomSecretConfigPropertyToHclTerraform(struct?: CcLocationAzureBlob.CustomSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        secret_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretAccessRoleArn),
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


export function ccLocationAzureBlobManagedSecretConfigPropertyToTerraform(struct?: CcLocationAzureBlob.ManagedSecretConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccLocationAzureBlobManagedSecretConfigPropertyToHclTerraform(struct?: CcLocationAzureBlob.ManagedSecretConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccLocationAzureBlobTagPropertyToTerraform(struct?: CcLocationAzureBlob.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLocationAzureBlobTagPropertyToHclTerraform(struct?: CcLocationAzureBlob.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLocationAzureBlob {
export interface AzureBlobSasConfigurationProperty {
    /**
    * Specifies the shared access signature (SAS) token, which indicates the permissions DataSync needs to access your Azure Blob Storage container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#azure_blob_sas_token CcLocationAzureBlob#azure_blob_sas_token}
    */
    readonly azureBlobSasToken?: string;
}
export class AzureBlobSasConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AzureBlobSasConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._azureBlobSasToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.azureBlobSasToken = this._azureBlobSasToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AzureBlobSasConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._azureBlobSasToken = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._azureBlobSasToken = value.azureBlobSasToken;
        }
    }

    // azure_blob_sas_token - computed: true, optional: true, required: false
    private _azureBlobSasToken?: string; 
    public get azureBlobSasToken() {
        return this.getStringAttribute('azure_blob_sas_token');
    }
    public set azureBlobSasToken(value: string) {
        this._azureBlobSasToken = value;
    }
    public resetAzureBlobSasToken() {
        this._azureBlobSasToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azureBlobSasTokenInput() {
        return this._azureBlobSasToken;
    }
}
export interface CmkSecretConfigProperty {
    /**
    * Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. DataSync provides this key to AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#kms_key_arn CcLocationAzureBlob#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class CmkSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CmkSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CmkSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
        }
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

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
}
export interface CustomSecretConfigProperty {
    /**
    * Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#secret_access_role_arn CcLocationAzureBlob#secret_access_role_arn}
    */
    readonly secretAccessRoleArn?: string;
    /**
    * Specifies the ARN for a customer created AWS Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#secret_arn CcLocationAzureBlob#secret_arn}
    */
    readonly secretArn?: string;
}
export class CustomSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretAccessRoleArn = this._secretAccessRoleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretAccessRoleArn = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretAccessRoleArn = value.secretAccessRoleArn;
            this._secretArn = value.secretArn;
        }
    }

    // secret_access_role_arn - computed: true, optional: true, required: false
    private _secretAccessRoleArn?: string; 
    public get secretAccessRoleArn() {
        return this.getStringAttribute('secret_access_role_arn');
    }
    public set secretAccessRoleArn(value: string) {
        this._secretAccessRoleArn = value;
    }
    public resetSecretAccessRoleArn() {
        this._secretAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretAccessRoleArnInput() {
        return this._secretAccessRoleArn;
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
export interface ManagedSecretConfigProperty {
}
export class ManagedSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedSecretConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedSecretConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
}
export interface TagProperty {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#key CcLocationAzureBlob#key}
    */
    readonly key?: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_azure_blob#value CcLocationAzureBlob#value}
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
