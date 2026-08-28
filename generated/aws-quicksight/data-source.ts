// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataSourceProps extends cdktn.TerraformMetaArguments {
    /**
    * <p>A set of alternate data source parameters that you want to share for the credentials
    *             stored with this data source. The credentials are applied in tandem with the data source
    *             parameters when you copy a data source by using a create or update request. The API
    *             operation compares the <code>DataSourceParameters</code> structure that's in the request
    *             with the structures in the <code>AlternateDataSourceParameters</code> allow list. If the
    *             structures are an exact match, the request is allowed to use the credentials from this
    *             existing data source. If the <code>AlternateDataSourceParameters</code> list is null,
    *             the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>
    *             are automatically allowed.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#alternate_data_source_parameters CcDataSource#alternate_data_source_parameters}
    */
    readonly alternateDataSourceParameters?: CcDataSource.DataSourceParametersProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#aws_account_id CcDataSource#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * <p>Data source credentials. This is a variant type structure. For this structure to be
    *             valid, only one of the attributes can be non-null.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#credentials CcDataSource#credentials}
    */
    readonly credentials?: CcDataSource.DataSourceCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#data_source_id CcDataSource#data_source_id}
    */
    readonly dataSourceId?: string;
    /**
    * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
    *             This is a variant type structure. For this structure to be valid, only one of the
    *             attributes can be non-null.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#data_source_parameters CcDataSource#data_source_parameters}
    */
    readonly dataSourceParameters?: CcDataSource.DataSourceParametersProperty2;
    /**
    * <p>Error information for the data source creation or update.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#error_info CcDataSource#error_info}
    */
    readonly errorInfo?: CcDataSource.DataSourceErrorInfoProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#folder_arns CcDataSource#folder_arns}
    */
    readonly folderArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#name CcDataSource#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#permissions CcDataSource#permissions}
    */
    readonly permissions?: CcDataSource.ResourcePermissionProperty[] | cdktn.IResolvable;
    /**
    * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
    *             underlying data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#ssl_properties CcDataSource#ssl_properties}
    */
    readonly sslProperties?: CcDataSource.SslPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#tags CcDataSource#tags}
    */
    readonly tags?: CcDataSource.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#type CcDataSource#type}
    */
    readonly type: string;
    /**
    * <p>VPC connection properties.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#vpc_connection_properties CcDataSource#vpc_connection_properties}
    */
    readonly vpcConnectionProperties?: CcDataSource.VpcConnectionPropertiesProperty2;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source awscc_quicksight_data_source}
*/
export class CcDataSource extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_data_source";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataSource resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataSource to import
    * @param importFromId The id of the existing CcDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataSource to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_data_source", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source awscc_quicksight_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataSourceProps
    */
    public constructor(scope: Construct, id: string, config: CcDataSourceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_data_source',
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
        this._alternateDataSourceParameters.internalValue = config.alternateDataSourceParameters;
        this._awsAccountId = config.awsAccountId;
        this._credentials.internalValue = config.credentials;
        this._dataSourceId = config.dataSourceId;
        this._dataSourceParameters.internalValue = config.dataSourceParameters;
        this._errorInfo.internalValue = config.errorInfo;
        this._folderArns = config.folderArns;
        this._name = config.name;
        this._permissions.internalValue = config.permissions;
        this._sslProperties.internalValue = config.sslProperties;
        this._tags.internalValue = config.tags;
        this._type = config.type;
        this._vpcConnectionProperties.internalValue = config.vpcConnectionProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alternate_data_source_parameters - computed: true, optional: true, required: false
    private _alternateDataSourceParameters = new CcDataSource.DataSourceParametersPropertyList(this, "alternate_data_source_parameters", false);
    public get alternateDataSourceParameters() {
        return this._alternateDataSourceParameters;
    }
    public putAlternateDataSourceParameters(value: CcDataSource.DataSourceParametersProperty[] | cdktn.IResolvable) {
        this._alternateDataSourceParameters.internalValue = value;
    }
    public resetAlternateDataSourceParameters() {
        this._alternateDataSourceParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alternateDataSourceParametersInput() {
        return this._alternateDataSourceParameters.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: true, optional: true, required: false
    private _awsAccountId?: string; 
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string) {
        this._awsAccountId = value;
    }
    public resetAwsAccountId() {
        this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
        return this._awsAccountId;
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // credentials - computed: true, optional: true, required: false
    private _credentials = new CcDataSource.DataSourceCredentialsPropertyOutputReference(this, "credentials");
    public get credentials() {
        return this._credentials;
    }
    public putCredentials(value: CcDataSource.DataSourceCredentialsProperty) {
        this._credentials.internalValue = value;
    }
    public resetCredentials() {
        this._credentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsInput() {
        return this._credentials.internalValue;
    }

    // data_source_id - computed: true, optional: true, required: false
    private _dataSourceId?: string; 
    public get dataSourceId() {
        return this.getStringAttribute('data_source_id');
    }
    public set dataSourceId(value: string) {
        this._dataSourceId = value;
    }
    public resetDataSourceId() {
        this._dataSourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceIdInput() {
        return this._dataSourceId;
    }

    // data_source_parameters - computed: true, optional: true, required: false
    private _dataSourceParameters = new CcDataSource.DataSourceParametersProperty2OutputReference(this, "data_source_parameters");
    public get dataSourceParameters() {
        return this._dataSourceParameters;
    }
    public putDataSourceParameters(value: CcDataSource.DataSourceParametersProperty2) {
        this._dataSourceParameters.internalValue = value;
    }
    public resetDataSourceParameters() {
        this._dataSourceParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceParametersInput() {
        return this._dataSourceParameters.internalValue;
    }

    // error_info - computed: true, optional: true, required: false
    private _errorInfo = new CcDataSource.DataSourceErrorInfoPropertyOutputReference(this, "error_info");
    public get errorInfo() {
        return this._errorInfo;
    }
    public putErrorInfo(value: CcDataSource.DataSourceErrorInfoProperty) {
        this._errorInfo.internalValue = value;
    }
    public resetErrorInfo() {
        this._errorInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorInfoInput() {
        return this._errorInfo.internalValue;
    }

    // folder_arns - computed: true, optional: true, required: false
    private _folderArns?: string[]; 
    public get folderArns() {
        return this.getListAttribute('folder_arns');
    }
    public set folderArns(value: string[]) {
        this._folderArns = value;
    }
    public resetFolderArns() {
        this._folderArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get folderArnsInput() {
        return this._folderArns;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
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

    // permissions - computed: true, optional: true, required: false
    private _permissions = new CcDataSource.ResourcePermissionPropertyList(this, "permissions", false);
    public get permissions() {
        return this._permissions;
    }
    public putPermissions(value: CcDataSource.ResourcePermissionProperty[] | cdktn.IResolvable) {
        this._permissions.internalValue = value;
    }
    public resetPermissions() {
        this._permissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions.internalValue;
    }

    // ssl_properties - computed: true, optional: true, required: false
    private _sslProperties = new CcDataSource.SslPropertiesPropertyOutputReference(this, "ssl_properties");
    public get sslProperties() {
        return this._sslProperties;
    }
    public putSslProperties(value: CcDataSource.SslPropertiesProperty) {
        this._sslProperties.internalValue = value;
    }
    public resetSslProperties() {
        this._sslProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslPropertiesInput() {
        return this._sslProperties.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataSource.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataSource.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // vpc_connection_properties - computed: true, optional: true, required: false
    private _vpcConnectionProperties = new CcDataSource.VpcConnectionPropertiesProperty2OutputReference(this, "vpc_connection_properties");
    public get vpcConnectionProperties() {
        return this._vpcConnectionProperties;
    }
    public putVpcConnectionProperties(value: CcDataSource.VpcConnectionPropertiesProperty2) {
        this._vpcConnectionProperties.internalValue = value;
    }
    public resetVpcConnectionProperties() {
        this._vpcConnectionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConnectionPropertiesInput() {
        return this._vpcConnectionProperties.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            alternate_data_source_parameters: cdktn.listMapper(ccDataSourceDataSourceParametersPropertyToTerraform, false)(this._alternateDataSourceParameters.internalValue),
            aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
            credentials: ccDataSourceDataSourceCredentialsPropertyToTerraform(this._credentials.internalValue),
            data_source_id: cdktn.stringToTerraform(this._dataSourceId),
            data_source_parameters: ccDataSourceDataSourceParametersProperty2ToTerraform(this._dataSourceParameters.internalValue),
            error_info: ccDataSourceDataSourceErrorInfoPropertyToTerraform(this._errorInfo.internalValue),
            folder_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._folderArns),
            name: cdktn.stringToTerraform(this._name),
            permissions: cdktn.listMapper(ccDataSourceResourcePermissionPropertyToTerraform, false)(this._permissions.internalValue),
            ssl_properties: ccDataSourceSslPropertiesPropertyToTerraform(this._sslProperties.internalValue),
            tags: cdktn.listMapper(ccDataSourceTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
            vpc_connection_properties: ccDataSourceVpcConnectionPropertiesProperty2ToTerraform(this._vpcConnectionProperties.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alternate_data_source_parameters: {
                value: cdktn.listMapperHcl(ccDataSourceDataSourceParametersPropertyToHclTerraform, false)(this._alternateDataSourceParameters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataSource.DataSourceParametersPropertyList",
            },
            aws_account_id: {
                value: cdktn.stringToHclTerraform(this._awsAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            credentials: {
                value: ccDataSourceDataSourceCredentialsPropertyToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.DataSourceCredentialsProperty",
            },
            data_source_id: {
                value: cdktn.stringToHclTerraform(this._dataSourceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_source_parameters: {
                value: ccDataSourceDataSourceParametersProperty2ToHclTerraform(this._dataSourceParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.DataSourceParametersProperty2",
            },
            error_info: {
                value: ccDataSourceDataSourceErrorInfoPropertyToHclTerraform(this._errorInfo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.DataSourceErrorInfoProperty",
            },
            folder_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._folderArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permissions: {
                value: cdktn.listMapperHcl(ccDataSourceResourcePermissionPropertyToHclTerraform, false)(this._permissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataSource.ResourcePermissionPropertyList",
            },
            ssl_properties: {
                value: ccDataSourceSslPropertiesPropertyToHclTerraform(this._sslProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.SslPropertiesProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDataSourceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataSource.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_connection_properties: {
                value: ccDataSourceVpcConnectionPropertiesProperty2ToHclTerraform(this._vpcConnectionProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.VpcConnectionPropertiesProperty2",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataSourceAmazonElasticsearchParametersPropertyToTerraform(struct?: CcDataSource.AmazonElasticsearchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain: cdktn.stringToTerraform(struct!.domain),
    }
}


export function ccDataSourceAmazonElasticsearchParametersPropertyToHclTerraform(struct?: CcDataSource.AmazonElasticsearchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain: {
            value: cdktn.stringToHclTerraform(struct!.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceAmazonOpenSearchParametersPropertyToTerraform(struct?: CcDataSource.AmazonOpenSearchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain: cdktn.stringToTerraform(struct!.domain),
    }
}


export function ccDataSourceAmazonOpenSearchParametersPropertyToHclTerraform(struct?: CcDataSource.AmazonOpenSearchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain: {
            value: cdktn.stringToHclTerraform(struct!.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceIdentityCenterConfigurationPropertyToTerraform(struct?: CcDataSource.IdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_identity_propagation: cdktn.booleanToTerraform(struct!.enableIdentityPropagation),
    }
}


export function ccDataSourceIdentityCenterConfigurationPropertyToHclTerraform(struct?: CcDataSource.IdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_identity_propagation: {
            value: cdktn.booleanToHclTerraform(struct!.enableIdentityPropagation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceAthenaParametersPropertyToTerraform(struct?: CcDataSource.AthenaParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identity_center_configuration: ccDataSourceIdentityCenterConfigurationPropertyToTerraform(struct!.identityCenterConfiguration),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        work_group: cdktn.stringToTerraform(struct!.workGroup),
    }
}


export function ccDataSourceAthenaParametersPropertyToHclTerraform(struct?: CcDataSource.AthenaParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identity_center_configuration: {
            value: ccDataSourceIdentityCenterConfigurationPropertyToHclTerraform(struct!.identityCenterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "IdentityCenterConfigurationProperty",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        work_group: {
            value: cdktn.stringToHclTerraform(struct!.workGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceAuroraParametersPropertyToTerraform(struct?: CcDataSource.AuroraParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceAuroraParametersPropertyToHclTerraform(struct?: CcDataSource.AuroraParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceAuroraPostgreSqlParametersPropertyToTerraform(struct?: CcDataSource.AuroraPostgreSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceAuroraPostgreSqlParametersPropertyToHclTerraform(struct?: CcDataSource.AuroraPostgreSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDatabricksParametersPropertyToTerraform(struct?: CcDataSource.DatabricksParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
        sql_endpoint_path: cdktn.stringToTerraform(struct!.sqlEndpointPath),
    }
}


export function ccDataSourceDatabricksParametersPropertyToHclTerraform(struct?: CcDataSource.DatabricksParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sql_endpoint_path: {
            value: cdktn.stringToHclTerraform(struct!.sqlEndpointPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceMariaDbParametersPropertyToTerraform(struct?: CcDataSource.MariaDbParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceMariaDbParametersPropertyToHclTerraform(struct?: CcDataSource.MariaDbParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceMySqlParametersPropertyToTerraform(struct?: CcDataSource.MySqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceMySqlParametersPropertyToHclTerraform(struct?: CcDataSource.MySqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceOracleParametersPropertyToTerraform(struct?: CcDataSource.OracleParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
        use_service_name: cdktn.booleanToTerraform(struct!.useServiceName),
    }
}


export function ccDataSourceOracleParametersPropertyToHclTerraform(struct?: CcDataSource.OracleParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        use_service_name: {
            value: cdktn.booleanToHclTerraform(struct!.useServiceName),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourcePostgreSqlParametersPropertyToTerraform(struct?: CcDataSource.PostgreSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourcePostgreSqlParametersPropertyToHclTerraform(struct?: CcDataSource.PostgreSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourcePrestoParametersPropertyToTerraform(struct?: CcDataSource.PrestoParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog: cdktn.stringToTerraform(struct!.catalog),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourcePrestoParametersPropertyToHclTerraform(struct?: CcDataSource.PrestoParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog: {
            value: cdktn.stringToHclTerraform(struct!.catalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceRdsParametersPropertyToTerraform(struct?: CcDataSource.RdsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        instance_id: cdktn.stringToTerraform(struct!.instanceId),
    }
}


export function ccDataSourceRdsParametersPropertyToHclTerraform(struct?: CcDataSource.RdsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_id: {
            value: cdktn.stringToHclTerraform(struct!.instanceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceRedshiftIAMParametersPropertyToTerraform(struct?: CcDataSource.RedshiftIAMParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_create_database_user: cdktn.booleanToTerraform(struct!.autoCreateDatabaseUser),
        database_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseGroups),
        database_user: cdktn.stringToTerraform(struct!.databaseUser),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccDataSourceRedshiftIAMParametersPropertyToHclTerraform(struct?: CcDataSource.RedshiftIAMParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_create_database_user: {
            value: cdktn.booleanToHclTerraform(struct!.autoCreateDatabaseUser),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        database_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        database_user: {
            value: cdktn.stringToHclTerraform(struct!.databaseUser),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyToTerraform(struct?: CcDataSource.AlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_identity_propagation: cdktn.booleanToTerraform(struct!.enableIdentityPropagation),
    }
}


export function ccDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyToHclTerraform(struct?: CcDataSource.AlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_identity_propagation: {
            value: cdktn.booleanToHclTerraform(struct!.enableIdentityPropagation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceRedshiftParametersPropertyToTerraform(struct?: CcDataSource.RedshiftParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_id: cdktn.stringToTerraform(struct!.clusterId),
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        iam_parameters: ccDataSourceRedshiftIAMParametersPropertyToTerraform(struct!.iamParameters),
        identity_center_configuration: ccDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyToTerraform(struct!.identityCenterConfiguration),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceRedshiftParametersPropertyToHclTerraform(struct?: CcDataSource.RedshiftParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_id: {
            value: cdktn.stringToHclTerraform(struct!.clusterId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam_parameters: {
            value: ccDataSourceRedshiftIAMParametersPropertyToHclTerraform(struct!.iamParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftIAMParametersProperty",
        },
        identity_center_configuration: {
            value: ccDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyToHclTerraform(struct!.identityCenterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceManifestFileLocationPropertyToTerraform(struct?: CcDataSource.ManifestFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccDataSourceManifestFileLocationPropertyToHclTerraform(struct?: CcDataSource.ManifestFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceS3ParametersPropertyToTerraform(struct?: CcDataSource.S3ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        manifest_file_location: ccDataSourceManifestFileLocationPropertyToTerraform(struct!.manifestFileLocation),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccDataSourceS3ParametersPropertyToHclTerraform(struct?: CcDataSource.S3ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        manifest_file_location: {
            value: ccDataSourceManifestFileLocationPropertyToHclTerraform(struct!.manifestFileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "ManifestFileLocationProperty",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceS3TablesParametersPropertyToTerraform(struct?: CcDataSource.S3TablesParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        table_bucket_arn: cdktn.stringToTerraform(struct!.tableBucketArn),
    }
}


export function ccDataSourceS3TablesParametersPropertyToHclTerraform(struct?: CcDataSource.S3TablesParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        table_bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.tableBucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceVpcConnectionPropertiesPropertyToTerraform(struct?: CcDataSource.VpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
    }
}


export function ccDataSourceVpcConnectionPropertiesPropertyToHclTerraform(struct?: CcDataSource.VpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_connection_arn: {
            value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceOAuthParametersPropertyToTerraform(struct?: CcDataSource.OAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identity_provider_resource_uri: cdktn.stringToTerraform(struct!.identityProviderResourceUri),
        identity_provider_vpc_connection_properties: ccDataSourceVpcConnectionPropertiesPropertyToTerraform(struct!.identityProviderVpcConnectionProperties),
        o_auth_scope: cdktn.stringToTerraform(struct!.oAuthScope),
        token_provider_url: cdktn.stringToTerraform(struct!.tokenProviderUrl),
    }
}


export function ccDataSourceOAuthParametersPropertyToHclTerraform(struct?: CcDataSource.OAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identity_provider_resource_uri: {
            value: cdktn.stringToHclTerraform(struct!.identityProviderResourceUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_vpc_connection_properties: {
            value: ccDataSourceVpcConnectionPropertiesPropertyToHclTerraform(struct!.identityProviderVpcConnectionProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConnectionPropertiesProperty",
        },
        o_auth_scope: {
            value: cdktn.stringToHclTerraform(struct!.oAuthScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_provider_url: {
            value: cdktn.stringToHclTerraform(struct!.tokenProviderUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSnowflakeParametersPropertyToTerraform(struct?: CcDataSource.SnowflakeParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
        database: cdktn.stringToTerraform(struct!.database),
        database_access_control_role: cdktn.stringToTerraform(struct!.databaseAccessControlRole),
        host: cdktn.stringToTerraform(struct!.host),
        o_auth_parameters: ccDataSourceOAuthParametersPropertyToTerraform(struct!.oAuthParameters),
        warehouse: cdktn.stringToTerraform(struct!.warehouse),
    }
}


export function ccDataSourceSnowflakeParametersPropertyToHclTerraform(struct?: CcDataSource.SnowflakeParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_type: {
            value: cdktn.stringToHclTerraform(struct!.authenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_access_control_role: {
            value: cdktn.stringToHclTerraform(struct!.databaseAccessControlRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        o_auth_parameters: {
            value: ccDataSourceOAuthParametersPropertyToHclTerraform(struct!.oAuthParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuthParametersProperty",
        },
        warehouse: {
            value: cdktn.stringToHclTerraform(struct!.warehouse),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSparkParametersPropertyToTerraform(struct?: CcDataSource.SparkParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceSparkParametersPropertyToHclTerraform(struct?: CcDataSource.SparkParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSqlServerParametersPropertyToTerraform(struct?: CcDataSource.SqlServerParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceSqlServerParametersPropertyToHclTerraform(struct?: CcDataSource.SqlServerParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToTerraform(struct?: CcDataSource.AlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
    }
}


export function ccDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToHclTerraform(struct?: CcDataSource.AlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_connection_arn: {
            value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersPropertyToTerraform(struct?: CcDataSource.AlternateDataSourceParametersStarburstParametersOAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identity_provider_resource_uri: cdktn.stringToTerraform(struct!.identityProviderResourceUri),
        identity_provider_vpc_connection_properties: ccDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToTerraform(struct!.identityProviderVpcConnectionProperties),
        o_auth_scope: cdktn.stringToTerraform(struct!.oAuthScope),
        token_provider_url: cdktn.stringToTerraform(struct!.tokenProviderUrl),
    }
}


export function ccDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersPropertyToHclTerraform(struct?: CcDataSource.AlternateDataSourceParametersStarburstParametersOAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identity_provider_resource_uri: {
            value: cdktn.stringToHclTerraform(struct!.identityProviderResourceUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_vpc_connection_properties: {
            value: ccDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToHclTerraform(struct!.identityProviderVpcConnectionProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "AlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty",
        },
        o_auth_scope: {
            value: cdktn.stringToHclTerraform(struct!.oAuthScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_provider_url: {
            value: cdktn.stringToHclTerraform(struct!.tokenProviderUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceStarburstParametersPropertyToTerraform(struct?: CcDataSource.StarburstParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
        catalog: cdktn.stringToTerraform(struct!.catalog),
        database_access_control_role: cdktn.stringToTerraform(struct!.databaseAccessControlRole),
        host: cdktn.stringToTerraform(struct!.host),
        o_auth_parameters: ccDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersPropertyToTerraform(struct!.oAuthParameters),
        port: cdktn.numberToTerraform(struct!.port),
        product_type: cdktn.stringToTerraform(struct!.productType),
    }
}


export function ccDataSourceStarburstParametersPropertyToHclTerraform(struct?: CcDataSource.StarburstParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_type: {
            value: cdktn.stringToHclTerraform(struct!.authenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        catalog: {
            value: cdktn.stringToHclTerraform(struct!.catalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_access_control_role: {
            value: cdktn.stringToHclTerraform(struct!.databaseAccessControlRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        o_auth_parameters: {
            value: ccDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersPropertyToHclTerraform(struct!.oAuthParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "AlternateDataSourceParametersStarburstParametersOAuthParametersProperty",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        product_type: {
            value: cdktn.stringToHclTerraform(struct!.productType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceTeradataParametersPropertyToTerraform(struct?: CcDataSource.TeradataParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceTeradataParametersPropertyToHclTerraform(struct?: CcDataSource.TeradataParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceTrinoParametersPropertyToTerraform(struct?: CcDataSource.TrinoParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog: cdktn.stringToTerraform(struct!.catalog),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceTrinoParametersPropertyToHclTerraform(struct?: CcDataSource.TrinoParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog: {
            value: cdktn.stringToHclTerraform(struct!.catalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amazon_elasticsearch_parameters: ccDataSourceAmazonElasticsearchParametersPropertyToTerraform(struct!.amazonElasticsearchParameters),
        amazon_open_search_parameters: ccDataSourceAmazonOpenSearchParametersPropertyToTerraform(struct!.amazonOpenSearchParameters),
        athena_parameters: ccDataSourceAthenaParametersPropertyToTerraform(struct!.athenaParameters),
        aurora_parameters: ccDataSourceAuroraParametersPropertyToTerraform(struct!.auroraParameters),
        aurora_postgre_sql_parameters: ccDataSourceAuroraPostgreSqlParametersPropertyToTerraform(struct!.auroraPostgreSqlParameters),
        databricks_parameters: ccDataSourceDatabricksParametersPropertyToTerraform(struct!.databricksParameters),
        maria_db_parameters: ccDataSourceMariaDbParametersPropertyToTerraform(struct!.mariaDbParameters),
        my_sql_parameters: ccDataSourceMySqlParametersPropertyToTerraform(struct!.mySqlParameters),
        oracle_parameters: ccDataSourceOracleParametersPropertyToTerraform(struct!.oracleParameters),
        postgre_sql_parameters: ccDataSourcePostgreSqlParametersPropertyToTerraform(struct!.postgreSqlParameters),
        presto_parameters: ccDataSourcePrestoParametersPropertyToTerraform(struct!.prestoParameters),
        rds_parameters: ccDataSourceRdsParametersPropertyToTerraform(struct!.rdsParameters),
        redshift_parameters: ccDataSourceRedshiftParametersPropertyToTerraform(struct!.redshiftParameters),
        s3_parameters: ccDataSourceS3ParametersPropertyToTerraform(struct!.s3Parameters),
        s3_tables_parameters: ccDataSourceS3TablesParametersPropertyToTerraform(struct!.s3TablesParameters),
        snowflake_parameters: ccDataSourceSnowflakeParametersPropertyToTerraform(struct!.snowflakeParameters),
        spark_parameters: ccDataSourceSparkParametersPropertyToTerraform(struct!.sparkParameters),
        sql_server_parameters: ccDataSourceSqlServerParametersPropertyToTerraform(struct!.sqlServerParameters),
        starburst_parameters: ccDataSourceStarburstParametersPropertyToTerraform(struct!.starburstParameters),
        teradata_parameters: ccDataSourceTeradataParametersPropertyToTerraform(struct!.teradataParameters),
        trino_parameters: ccDataSourceTrinoParametersPropertyToTerraform(struct!.trinoParameters),
    }
}


export function ccDataSourceDataSourceParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amazon_elasticsearch_parameters: {
            value: ccDataSourceAmazonElasticsearchParametersPropertyToHclTerraform(struct!.amazonElasticsearchParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "AmazonElasticsearchParametersProperty",
        },
        amazon_open_search_parameters: {
            value: ccDataSourceAmazonOpenSearchParametersPropertyToHclTerraform(struct!.amazonOpenSearchParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "AmazonOpenSearchParametersProperty",
        },
        athena_parameters: {
            value: ccDataSourceAthenaParametersPropertyToHclTerraform(struct!.athenaParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "AthenaParametersProperty",
        },
        aurora_parameters: {
            value: ccDataSourceAuroraParametersPropertyToHclTerraform(struct!.auroraParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "AuroraParametersProperty",
        },
        aurora_postgre_sql_parameters: {
            value: ccDataSourceAuroraPostgreSqlParametersPropertyToHclTerraform(struct!.auroraPostgreSqlParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "AuroraPostgreSqlParametersProperty",
        },
        databricks_parameters: {
            value: ccDataSourceDatabricksParametersPropertyToHclTerraform(struct!.databricksParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DatabricksParametersProperty",
        },
        maria_db_parameters: {
            value: ccDataSourceMariaDbParametersPropertyToHclTerraform(struct!.mariaDbParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "MariaDbParametersProperty",
        },
        my_sql_parameters: {
            value: ccDataSourceMySqlParametersPropertyToHclTerraform(struct!.mySqlParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "MySqlParametersProperty",
        },
        oracle_parameters: {
            value: ccDataSourceOracleParametersPropertyToHclTerraform(struct!.oracleParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "OracleParametersProperty",
        },
        postgre_sql_parameters: {
            value: ccDataSourcePostgreSqlParametersPropertyToHclTerraform(struct!.postgreSqlParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PostgreSqlParametersProperty",
        },
        presto_parameters: {
            value: ccDataSourcePrestoParametersPropertyToHclTerraform(struct!.prestoParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PrestoParametersProperty",
        },
        rds_parameters: {
            value: ccDataSourceRdsParametersPropertyToHclTerraform(struct!.rdsParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "RdsParametersProperty",
        },
        redshift_parameters: {
            value: ccDataSourceRedshiftParametersPropertyToHclTerraform(struct!.redshiftParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftParametersProperty",
        },
        s3_parameters: {
            value: ccDataSourceS3ParametersPropertyToHclTerraform(struct!.s3Parameters),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ParametersProperty",
        },
        s3_tables_parameters: {
            value: ccDataSourceS3TablesParametersPropertyToHclTerraform(struct!.s3TablesParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "S3TablesParametersProperty",
        },
        snowflake_parameters: {
            value: ccDataSourceSnowflakeParametersPropertyToHclTerraform(struct!.snowflakeParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "SnowflakeParametersProperty",
        },
        spark_parameters: {
            value: ccDataSourceSparkParametersPropertyToHclTerraform(struct!.sparkParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "SparkParametersProperty",
        },
        sql_server_parameters: {
            value: ccDataSourceSqlServerParametersPropertyToHclTerraform(struct!.sqlServerParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "SqlServerParametersProperty",
        },
        starburst_parameters: {
            value: ccDataSourceStarburstParametersPropertyToHclTerraform(struct!.starburstParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "StarburstParametersProperty",
        },
        teradata_parameters: {
            value: ccDataSourceTeradataParametersPropertyToHclTerraform(struct!.teradataParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "TeradataParametersProperty",
        },
        trino_parameters: {
            value: ccDataSourceTrinoParametersPropertyToHclTerraform(struct!.trinoParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "TrinoParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain: cdktn.stringToTerraform(struct!.domain),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain: {
            value: cdktn.stringToHclTerraform(struct!.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain: cdktn.stringToTerraform(struct!.domain),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain: {
            value: cdktn.stringToHclTerraform(struct!.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_identity_propagation: cdktn.booleanToTerraform(struct!.enableIdentityPropagation),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_identity_propagation: {
            value: cdktn.booleanToHclTerraform(struct!.enableIdentityPropagation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identity_center_configuration: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationPropertyToTerraform(struct!.identityCenterConfiguration),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        work_group: cdktn.stringToTerraform(struct!.workGroup),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identity_center_configuration: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationPropertyToHclTerraform(struct!.identityCenterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationProperty",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        work_group: {
            value: cdktn.stringToHclTerraform(struct!.workGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersAuroraParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersAuroraParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
        sql_endpoint_path: cdktn.stringToTerraform(struct!.sqlEndpointPath),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sql_endpoint_path: {
            value: cdktn.stringToHclTerraform(struct!.sqlEndpointPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersMySqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersMySqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersOracleParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
        use_service_name: cdktn.booleanToTerraform(struct!.useServiceName),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersOracleParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        use_service_name: {
            value: cdktn.booleanToHclTerraform(struct!.useServiceName),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersPrestoParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog: cdktn.stringToTerraform(struct!.catalog),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersPrestoParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog: {
            value: cdktn.stringToHclTerraform(struct!.catalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersRdsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        instance_id: cdktn.stringToTerraform(struct!.instanceId),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersRdsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_id: {
            value: cdktn.stringToHclTerraform(struct!.instanceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_create_database_user: cdktn.booleanToTerraform(struct!.autoCreateDatabaseUser),
        database_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseGroups),
        database_user: cdktn.stringToTerraform(struct!.databaseUser),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_create_database_user: {
            value: cdktn.booleanToHclTerraform(struct!.autoCreateDatabaseUser),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        database_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        database_user: {
            value: cdktn.stringToHclTerraform(struct!.databaseUser),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_identity_propagation: cdktn.booleanToTerraform(struct!.enableIdentityPropagation),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_identity_propagation: {
            value: cdktn.booleanToHclTerraform(struct!.enableIdentityPropagation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_id: cdktn.stringToTerraform(struct!.clusterId),
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        iam_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersPropertyToTerraform(struct!.iamParameters),
        identity_center_configuration: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyToTerraform(struct!.identityCenterConfiguration),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_id: {
            value: cdktn.stringToHclTerraform(struct!.clusterId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersPropertyToHclTerraform(struct!.iamParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersProperty",
        },
        identity_center_configuration: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyToHclTerraform(struct!.identityCenterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersS3ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        manifest_file_location: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationPropertyToTerraform(struct!.manifestFileLocation),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersS3ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        manifest_file_location: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationPropertyToHclTerraform(struct!.manifestFileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationProperty",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        table_bucket_arn: cdktn.stringToTerraform(struct!.tableBucketArn),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        table_bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.tableBucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_connection_arn: {
            value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identity_provider_resource_uri: cdktn.stringToTerraform(struct!.identityProviderResourceUri),
        identity_provider_vpc_connection_properties: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToTerraform(struct!.identityProviderVpcConnectionProperties),
        o_auth_scope: cdktn.stringToTerraform(struct!.oAuthScope),
        token_provider_url: cdktn.stringToTerraform(struct!.tokenProviderUrl),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identity_provider_resource_uri: {
            value: cdktn.stringToHclTerraform(struct!.identityProviderResourceUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_vpc_connection_properties: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToHclTerraform(struct!.identityProviderVpcConnectionProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty",
        },
        o_auth_scope: {
            value: cdktn.stringToHclTerraform(struct!.oAuthScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_provider_url: {
            value: cdktn.stringToHclTerraform(struct!.tokenProviderUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
        database: cdktn.stringToTerraform(struct!.database),
        database_access_control_role: cdktn.stringToTerraform(struct!.databaseAccessControlRole),
        host: cdktn.stringToTerraform(struct!.host),
        o_auth_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersPropertyToTerraform(struct!.oAuthParameters),
        warehouse: cdktn.stringToTerraform(struct!.warehouse),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_type: {
            value: cdktn.stringToHclTerraform(struct!.authenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_access_control_role: {
            value: cdktn.stringToHclTerraform(struct!.databaseAccessControlRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        o_auth_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersPropertyToHclTerraform(struct!.oAuthParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersProperty",
        },
        warehouse: {
            value: cdktn.stringToHclTerraform(struct!.warehouse),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersSparkParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersSparkParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_connection_arn: {
            value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identity_provider_resource_uri: cdktn.stringToTerraform(struct!.identityProviderResourceUri),
        identity_provider_vpc_connection_properties: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToTerraform(struct!.identityProviderVpcConnectionProperties),
        o_auth_scope: cdktn.stringToTerraform(struct!.oAuthScope),
        token_provider_url: cdktn.stringToTerraform(struct!.tokenProviderUrl),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identity_provider_resource_uri: {
            value: cdktn.stringToHclTerraform(struct!.identityProviderResourceUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_vpc_connection_properties: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToHclTerraform(struct!.identityProviderVpcConnectionProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty",
        },
        o_auth_scope: {
            value: cdktn.stringToHclTerraform(struct!.oAuthScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_provider_url: {
            value: cdktn.stringToHclTerraform(struct!.tokenProviderUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
        catalog: cdktn.stringToTerraform(struct!.catalog),
        database_access_control_role: cdktn.stringToTerraform(struct!.databaseAccessControlRole),
        host: cdktn.stringToTerraform(struct!.host),
        o_auth_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersPropertyToTerraform(struct!.oAuthParameters),
        port: cdktn.numberToTerraform(struct!.port),
        product_type: cdktn.stringToTerraform(struct!.productType),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_type: {
            value: cdktn.stringToHclTerraform(struct!.authenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        catalog: {
            value: cdktn.stringToHclTerraform(struct!.catalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_access_control_role: {
            value: cdktn.stringToHclTerraform(struct!.databaseAccessControlRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        o_auth_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersPropertyToHclTerraform(struct!.oAuthParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersProperty",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        product_type: {
            value: cdktn.stringToHclTerraform(struct!.productType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersTeradataParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersTeradataParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersPropertyToTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersTrinoParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog: cdktn.stringToTerraform(struct!.catalog),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersPropertyToHclTerraform(struct?: CcDataSource.CredentialsCredentialPairAlternateDataSourceParametersTrinoParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog: {
            value: cdktn.stringToHclTerraform(struct!.catalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceAlternateDataSourceParametersPropertyToTerraform(struct?: CcDataSource.AlternateDataSourceParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amazon_elasticsearch_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersPropertyToTerraform(struct!.amazonElasticsearchParameters),
        amazon_open_search_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersPropertyToTerraform(struct!.amazonOpenSearchParameters),
        athena_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersPropertyToTerraform(struct!.athenaParameters),
        aurora_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersPropertyToTerraform(struct!.auroraParameters),
        aurora_postgre_sql_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersPropertyToTerraform(struct!.auroraPostgreSqlParameters),
        databricks_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersPropertyToTerraform(struct!.databricksParameters),
        maria_db_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersPropertyToTerraform(struct!.mariaDbParameters),
        my_sql_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersPropertyToTerraform(struct!.mySqlParameters),
        oracle_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersPropertyToTerraform(struct!.oracleParameters),
        postgre_sql_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersPropertyToTerraform(struct!.postgreSqlParameters),
        presto_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersPropertyToTerraform(struct!.prestoParameters),
        rds_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersPropertyToTerraform(struct!.rdsParameters),
        redshift_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersPropertyToTerraform(struct!.redshiftParameters),
        s3_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersPropertyToTerraform(struct!.s3Parameters),
        s3_tables_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersPropertyToTerraform(struct!.s3TablesParameters),
        snowflake_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersPropertyToTerraform(struct!.snowflakeParameters),
        spark_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersPropertyToTerraform(struct!.sparkParameters),
        sql_server_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersPropertyToTerraform(struct!.sqlServerParameters),
        starburst_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersPropertyToTerraform(struct!.starburstParameters),
        teradata_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersPropertyToTerraform(struct!.teradataParameters),
        trino_parameters: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersPropertyToTerraform(struct!.trinoParameters),
    }
}


export function ccDataSourceAlternateDataSourceParametersPropertyToHclTerraform(struct?: CcDataSource.AlternateDataSourceParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amazon_elasticsearch_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersPropertyToHclTerraform(struct!.amazonElasticsearchParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersProperty",
        },
        amazon_open_search_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersPropertyToHclTerraform(struct!.amazonOpenSearchParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersProperty",
        },
        athena_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersPropertyToHclTerraform(struct!.athenaParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersProperty",
        },
        aurora_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersPropertyToHclTerraform(struct!.auroraParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersAuroraParametersProperty",
        },
        aurora_postgre_sql_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersPropertyToHclTerraform(struct!.auroraPostgreSqlParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersProperty",
        },
        databricks_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersPropertyToHclTerraform(struct!.databricksParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersProperty",
        },
        maria_db_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersPropertyToHclTerraform(struct!.mariaDbParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersProperty",
        },
        my_sql_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersPropertyToHclTerraform(struct!.mySqlParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersMySqlParametersProperty",
        },
        oracle_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersPropertyToHclTerraform(struct!.oracleParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersOracleParametersProperty",
        },
        postgre_sql_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersPropertyToHclTerraform(struct!.postgreSqlParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersProperty",
        },
        presto_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersPropertyToHclTerraform(struct!.prestoParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersPrestoParametersProperty",
        },
        rds_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersPropertyToHclTerraform(struct!.rdsParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersRdsParametersProperty",
        },
        redshift_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersPropertyToHclTerraform(struct!.redshiftParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersProperty",
        },
        s3_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersPropertyToHclTerraform(struct!.s3Parameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersS3ParametersProperty",
        },
        s3_tables_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersPropertyToHclTerraform(struct!.s3TablesParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersProperty",
        },
        snowflake_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersPropertyToHclTerraform(struct!.snowflakeParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersProperty",
        },
        spark_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersPropertyToHclTerraform(struct!.sparkParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersSparkParametersProperty",
        },
        sql_server_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersPropertyToHclTerraform(struct!.sqlServerParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersProperty",
        },
        starburst_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersPropertyToHclTerraform(struct!.starburstParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersProperty",
        },
        teradata_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersPropertyToHclTerraform(struct!.teradataParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersTeradataParametersProperty",
        },
        trino_parameters: {
            value: ccDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersPropertyToHclTerraform(struct!.trinoParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsCredentialPairAlternateDataSourceParametersTrinoParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCredentialPairPropertyToTerraform(struct?: CcDataSource.CredentialPairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alternate_data_source_parameters: cdktn.listMapper(ccDataSourceAlternateDataSourceParametersPropertyToTerraform, false)(struct!.alternateDataSourceParameters),
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccDataSourceCredentialPairPropertyToHclTerraform(struct?: CcDataSource.CredentialPairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alternate_data_source_parameters: {
            value: cdktn.listMapperHcl(ccDataSourceAlternateDataSourceParametersPropertyToHclTerraform, false)(struct!.alternateDataSourceParameters),
            isBlock: true,
            type: "list",
            storageClassType: "AlternateDataSourceParametersPropertyList",
        },
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceKeyPairCredentialsPropertyToTerraform(struct?: CcDataSource.KeyPairCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_pair_username: cdktn.stringToTerraform(struct!.keyPairUsername),
        private_key: cdktn.stringToTerraform(struct!.privateKey),
        private_key_passphrase: cdktn.stringToTerraform(struct!.privateKeyPassphrase),
    }
}


export function ccDataSourceKeyPairCredentialsPropertyToHclTerraform(struct?: CcDataSource.KeyPairCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_pair_username: {
            value: cdktn.stringToHclTerraform(struct!.keyPairUsername),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_key: {
            value: cdktn.stringToHclTerraform(struct!.privateKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_key_passphrase: {
            value: cdktn.stringToHclTerraform(struct!.privateKeyPassphrase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceCredentialsPropertyToTerraform(struct?: CcDataSource.DataSourceCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        copy_source_arn: cdktn.stringToTerraform(struct!.copySourceArn),
        credential_pair: ccDataSourceCredentialPairPropertyToTerraform(struct!.credentialPair),
        key_pair_credentials: ccDataSourceKeyPairCredentialsPropertyToTerraform(struct!.keyPairCredentials),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccDataSourceDataSourceCredentialsPropertyToHclTerraform(struct?: CcDataSource.DataSourceCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        copy_source_arn: {
            value: cdktn.stringToHclTerraform(struct!.copySourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credential_pair: {
            value: ccDataSourceCredentialPairPropertyToHclTerraform(struct!.credentialPair),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialPairProperty",
        },
        key_pair_credentials: {
            value: ccDataSourceKeyPairCredentialsPropertyToHclTerraform(struct!.keyPairCredentials),
            isBlock: true,
            type: "struct",
            storageClassType: "KeyPairCredentialsProperty",
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


export function ccDataSourceDataSourceParametersAmazonElasticsearchParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersAmazonElasticsearchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain: cdktn.stringToTerraform(struct!.domain),
    }
}


export function ccDataSourceDataSourceParametersAmazonElasticsearchParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersAmazonElasticsearchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain: {
            value: cdktn.stringToHclTerraform(struct!.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersAmazonOpenSearchParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersAmazonOpenSearchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain: cdktn.stringToTerraform(struct!.domain),
    }
}


export function ccDataSourceDataSourceParametersAmazonOpenSearchParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersAmazonOpenSearchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain: {
            value: cdktn.stringToHclTerraform(struct!.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationPropertyToTerraform(struct?: CcDataSource.DataSourceParametersAthenaParametersIdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_identity_propagation: cdktn.booleanToTerraform(struct!.enableIdentityPropagation),
    }
}


export function ccDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersAthenaParametersIdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_identity_propagation: {
            value: cdktn.booleanToHclTerraform(struct!.enableIdentityPropagation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersAthenaParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersAthenaParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identity_center_configuration: ccDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationPropertyToTerraform(struct!.identityCenterConfiguration),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        work_group: cdktn.stringToTerraform(struct!.workGroup),
    }
}


export function ccDataSourceDataSourceParametersAthenaParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersAthenaParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identity_center_configuration: {
            value: ccDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationPropertyToHclTerraform(struct!.identityCenterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersAthenaParametersIdentityCenterConfigurationProperty",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        work_group: {
            value: cdktn.stringToHclTerraform(struct!.workGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersAuroraParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersAuroraParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceDataSourceParametersAuroraParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersAuroraParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersAuroraPostgreSqlParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersAuroraPostgreSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceDataSourceParametersAuroraPostgreSqlParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersAuroraPostgreSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersDatabricksParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersDatabricksParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
        sql_endpoint_path: cdktn.stringToTerraform(struct!.sqlEndpointPath),
    }
}


export function ccDataSourceDataSourceParametersDatabricksParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersDatabricksParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sql_endpoint_path: {
            value: cdktn.stringToHclTerraform(struct!.sqlEndpointPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersMariaDbParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersMariaDbParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceDataSourceParametersMariaDbParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersMariaDbParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersMySqlParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersMySqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceDataSourceParametersMySqlParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersMySqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersOracleParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersOracleParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
        use_service_name: cdktn.booleanToTerraform(struct!.useServiceName),
    }
}


export function ccDataSourceDataSourceParametersOracleParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersOracleParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        use_service_name: {
            value: cdktn.booleanToHclTerraform(struct!.useServiceName),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersPostgreSqlParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersPostgreSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceDataSourceParametersPostgreSqlParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersPostgreSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersPrestoParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersPrestoParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog: cdktn.stringToTerraform(struct!.catalog),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceDataSourceParametersPrestoParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersPrestoParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog: {
            value: cdktn.stringToHclTerraform(struct!.catalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersRdsParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersRdsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        instance_id: cdktn.stringToTerraform(struct!.instanceId),
    }
}


export function ccDataSourceDataSourceParametersRdsParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersRdsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_id: {
            value: cdktn.stringToHclTerraform(struct!.instanceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersRedshiftParametersIamParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersRedshiftParametersIamParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_create_database_user: cdktn.booleanToTerraform(struct!.autoCreateDatabaseUser),
        database_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseGroups),
        database_user: cdktn.stringToTerraform(struct!.databaseUser),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccDataSourceDataSourceParametersRedshiftParametersIamParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersRedshiftParametersIamParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_create_database_user: {
            value: cdktn.booleanToHclTerraform(struct!.autoCreateDatabaseUser),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        database_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        database_user: {
            value: cdktn.stringToHclTerraform(struct!.databaseUser),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyToTerraform(struct?: CcDataSource.DataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_identity_propagation: cdktn.booleanToTerraform(struct!.enableIdentityPropagation),
    }
}


export function ccDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_identity_propagation: {
            value: cdktn.booleanToHclTerraform(struct!.enableIdentityPropagation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersRedshiftParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersRedshiftParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_id: cdktn.stringToTerraform(struct!.clusterId),
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        iam_parameters: ccDataSourceDataSourceParametersRedshiftParametersIamParametersPropertyToTerraform(struct!.iamParameters),
        identity_center_configuration: ccDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyToTerraform(struct!.identityCenterConfiguration),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceDataSourceParametersRedshiftParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersRedshiftParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_id: {
            value: cdktn.stringToHclTerraform(struct!.clusterId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam_parameters: {
            value: ccDataSourceDataSourceParametersRedshiftParametersIamParametersPropertyToHclTerraform(struct!.iamParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersRedshiftParametersIamParametersProperty",
        },
        identity_center_configuration: {
            value: ccDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyToHclTerraform(struct!.identityCenterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersS3ParametersManifestFileLocationPropertyToTerraform(struct?: CcDataSource.DataSourceParametersS3ParametersManifestFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccDataSourceDataSourceParametersS3ParametersManifestFileLocationPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersS3ParametersManifestFileLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersS3ParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersS3ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        manifest_file_location: ccDataSourceDataSourceParametersS3ParametersManifestFileLocationPropertyToTerraform(struct!.manifestFileLocation),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccDataSourceDataSourceParametersS3ParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersS3ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        manifest_file_location: {
            value: ccDataSourceDataSourceParametersS3ParametersManifestFileLocationPropertyToHclTerraform(struct!.manifestFileLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersS3ParametersManifestFileLocationProperty",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersS3TablesParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersS3TablesParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        table_bucket_arn: cdktn.stringToTerraform(struct!.tableBucketArn),
    }
}


export function ccDataSourceDataSourceParametersS3TablesParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersS3TablesParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        table_bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.tableBucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToTerraform(struct?: CcDataSource.DataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
    }
}


export function ccDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_connection_arn: {
            value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersSnowflakeParametersOAuthParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersSnowflakeParametersOAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identity_provider_resource_uri: cdktn.stringToTerraform(struct!.identityProviderResourceUri),
        identity_provider_vpc_connection_properties: ccDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToTerraform(struct!.identityProviderVpcConnectionProperties),
        o_auth_scope: cdktn.stringToTerraform(struct!.oAuthScope),
        token_provider_url: cdktn.stringToTerraform(struct!.tokenProviderUrl),
    }
}


export function ccDataSourceDataSourceParametersSnowflakeParametersOAuthParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersSnowflakeParametersOAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identity_provider_resource_uri: {
            value: cdktn.stringToHclTerraform(struct!.identityProviderResourceUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_vpc_connection_properties: {
            value: ccDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToHclTerraform(struct!.identityProviderVpcConnectionProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty",
        },
        o_auth_scope: {
            value: cdktn.stringToHclTerraform(struct!.oAuthScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_provider_url: {
            value: cdktn.stringToHclTerraform(struct!.tokenProviderUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersSnowflakeParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersSnowflakeParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
        database: cdktn.stringToTerraform(struct!.database),
        database_access_control_role: cdktn.stringToTerraform(struct!.databaseAccessControlRole),
        host: cdktn.stringToTerraform(struct!.host),
        o_auth_parameters: ccDataSourceDataSourceParametersSnowflakeParametersOAuthParametersPropertyToTerraform(struct!.oAuthParameters),
        warehouse: cdktn.stringToTerraform(struct!.warehouse),
    }
}


export function ccDataSourceDataSourceParametersSnowflakeParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersSnowflakeParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_type: {
            value: cdktn.stringToHclTerraform(struct!.authenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_access_control_role: {
            value: cdktn.stringToHclTerraform(struct!.databaseAccessControlRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        o_auth_parameters: {
            value: ccDataSourceDataSourceParametersSnowflakeParametersOAuthParametersPropertyToHclTerraform(struct!.oAuthParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersSnowflakeParametersOAuthParametersProperty",
        },
        warehouse: {
            value: cdktn.stringToHclTerraform(struct!.warehouse),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersSparkParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersSparkParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceDataSourceParametersSparkParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersSparkParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersSqlServerParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersSqlServerParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceDataSourceParametersSqlServerParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersSqlServerParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToTerraform(struct?: CcDataSource.DataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
    }
}


export function ccDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_connection_arn: {
            value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersStarburstParametersOAuthParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersStarburstParametersOAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identity_provider_resource_uri: cdktn.stringToTerraform(struct!.identityProviderResourceUri),
        identity_provider_vpc_connection_properties: ccDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToTerraform(struct!.identityProviderVpcConnectionProperties),
        o_auth_scope: cdktn.stringToTerraform(struct!.oAuthScope),
        token_provider_url: cdktn.stringToTerraform(struct!.tokenProviderUrl),
    }
}


export function ccDataSourceDataSourceParametersStarburstParametersOAuthParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersStarburstParametersOAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identity_provider_resource_uri: {
            value: cdktn.stringToHclTerraform(struct!.identityProviderResourceUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider_vpc_connection_properties: {
            value: ccDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyToHclTerraform(struct!.identityProviderVpcConnectionProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty",
        },
        o_auth_scope: {
            value: cdktn.stringToHclTerraform(struct!.oAuthScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_provider_url: {
            value: cdktn.stringToHclTerraform(struct!.tokenProviderUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersStarburstParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersStarburstParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
        catalog: cdktn.stringToTerraform(struct!.catalog),
        database_access_control_role: cdktn.stringToTerraform(struct!.databaseAccessControlRole),
        host: cdktn.stringToTerraform(struct!.host),
        o_auth_parameters: ccDataSourceDataSourceParametersStarburstParametersOAuthParametersPropertyToTerraform(struct!.oAuthParameters),
        port: cdktn.numberToTerraform(struct!.port),
        product_type: cdktn.stringToTerraform(struct!.productType),
    }
}


export function ccDataSourceDataSourceParametersStarburstParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersStarburstParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_type: {
            value: cdktn.stringToHclTerraform(struct!.authenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        catalog: {
            value: cdktn.stringToHclTerraform(struct!.catalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_access_control_role: {
            value: cdktn.stringToHclTerraform(struct!.databaseAccessControlRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        o_auth_parameters: {
            value: ccDataSourceDataSourceParametersStarburstParametersOAuthParametersPropertyToHclTerraform(struct!.oAuthParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersStarburstParametersOAuthParametersProperty",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        product_type: {
            value: cdktn.stringToHclTerraform(struct!.productType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersTeradataParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersTeradataParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceDataSourceParametersTeradataParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersTeradataParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersTrinoParametersPropertyToTerraform(struct?: CcDataSource.DataSourceParametersTrinoParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog: cdktn.stringToTerraform(struct!.catalog),
        host: cdktn.stringToTerraform(struct!.host),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataSourceDataSourceParametersTrinoParametersPropertyToHclTerraform(struct?: CcDataSource.DataSourceParametersTrinoParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog: {
            value: cdktn.stringToHclTerraform(struct!.catalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceParametersProperty2ToTerraform(struct?: CcDataSource.DataSourceParametersProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amazon_elasticsearch_parameters: ccDataSourceDataSourceParametersAmazonElasticsearchParametersPropertyToTerraform(struct!.amazonElasticsearchParameters),
        amazon_open_search_parameters: ccDataSourceDataSourceParametersAmazonOpenSearchParametersPropertyToTerraform(struct!.amazonOpenSearchParameters),
        athena_parameters: ccDataSourceDataSourceParametersAthenaParametersPropertyToTerraform(struct!.athenaParameters),
        aurora_parameters: ccDataSourceDataSourceParametersAuroraParametersPropertyToTerraform(struct!.auroraParameters),
        aurora_postgre_sql_parameters: ccDataSourceDataSourceParametersAuroraPostgreSqlParametersPropertyToTerraform(struct!.auroraPostgreSqlParameters),
        databricks_parameters: ccDataSourceDataSourceParametersDatabricksParametersPropertyToTerraform(struct!.databricksParameters),
        maria_db_parameters: ccDataSourceDataSourceParametersMariaDbParametersPropertyToTerraform(struct!.mariaDbParameters),
        my_sql_parameters: ccDataSourceDataSourceParametersMySqlParametersPropertyToTerraform(struct!.mySqlParameters),
        oracle_parameters: ccDataSourceDataSourceParametersOracleParametersPropertyToTerraform(struct!.oracleParameters),
        postgre_sql_parameters: ccDataSourceDataSourceParametersPostgreSqlParametersPropertyToTerraform(struct!.postgreSqlParameters),
        presto_parameters: ccDataSourceDataSourceParametersPrestoParametersPropertyToTerraform(struct!.prestoParameters),
        rds_parameters: ccDataSourceDataSourceParametersRdsParametersPropertyToTerraform(struct!.rdsParameters),
        redshift_parameters: ccDataSourceDataSourceParametersRedshiftParametersPropertyToTerraform(struct!.redshiftParameters),
        s3_parameters: ccDataSourceDataSourceParametersS3ParametersPropertyToTerraform(struct!.s3Parameters),
        s3_tables_parameters: ccDataSourceDataSourceParametersS3TablesParametersPropertyToTerraform(struct!.s3TablesParameters),
        snowflake_parameters: ccDataSourceDataSourceParametersSnowflakeParametersPropertyToTerraform(struct!.snowflakeParameters),
        spark_parameters: ccDataSourceDataSourceParametersSparkParametersPropertyToTerraform(struct!.sparkParameters),
        sql_server_parameters: ccDataSourceDataSourceParametersSqlServerParametersPropertyToTerraform(struct!.sqlServerParameters),
        starburst_parameters: ccDataSourceDataSourceParametersStarburstParametersPropertyToTerraform(struct!.starburstParameters),
        teradata_parameters: ccDataSourceDataSourceParametersTeradataParametersPropertyToTerraform(struct!.teradataParameters),
        trino_parameters: ccDataSourceDataSourceParametersTrinoParametersPropertyToTerraform(struct!.trinoParameters),
    }
}


export function ccDataSourceDataSourceParametersProperty2ToHclTerraform(struct?: CcDataSource.DataSourceParametersProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amazon_elasticsearch_parameters: {
            value: ccDataSourceDataSourceParametersAmazonElasticsearchParametersPropertyToHclTerraform(struct!.amazonElasticsearchParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersAmazonElasticsearchParametersProperty",
        },
        amazon_open_search_parameters: {
            value: ccDataSourceDataSourceParametersAmazonOpenSearchParametersPropertyToHclTerraform(struct!.amazonOpenSearchParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersAmazonOpenSearchParametersProperty",
        },
        athena_parameters: {
            value: ccDataSourceDataSourceParametersAthenaParametersPropertyToHclTerraform(struct!.athenaParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersAthenaParametersProperty",
        },
        aurora_parameters: {
            value: ccDataSourceDataSourceParametersAuroraParametersPropertyToHclTerraform(struct!.auroraParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersAuroraParametersProperty",
        },
        aurora_postgre_sql_parameters: {
            value: ccDataSourceDataSourceParametersAuroraPostgreSqlParametersPropertyToHclTerraform(struct!.auroraPostgreSqlParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersAuroraPostgreSqlParametersProperty",
        },
        databricks_parameters: {
            value: ccDataSourceDataSourceParametersDatabricksParametersPropertyToHclTerraform(struct!.databricksParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersDatabricksParametersProperty",
        },
        maria_db_parameters: {
            value: ccDataSourceDataSourceParametersMariaDbParametersPropertyToHclTerraform(struct!.mariaDbParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersMariaDbParametersProperty",
        },
        my_sql_parameters: {
            value: ccDataSourceDataSourceParametersMySqlParametersPropertyToHclTerraform(struct!.mySqlParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersMySqlParametersProperty",
        },
        oracle_parameters: {
            value: ccDataSourceDataSourceParametersOracleParametersPropertyToHclTerraform(struct!.oracleParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersOracleParametersProperty",
        },
        postgre_sql_parameters: {
            value: ccDataSourceDataSourceParametersPostgreSqlParametersPropertyToHclTerraform(struct!.postgreSqlParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersPostgreSqlParametersProperty",
        },
        presto_parameters: {
            value: ccDataSourceDataSourceParametersPrestoParametersPropertyToHclTerraform(struct!.prestoParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersPrestoParametersProperty",
        },
        rds_parameters: {
            value: ccDataSourceDataSourceParametersRdsParametersPropertyToHclTerraform(struct!.rdsParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersRdsParametersProperty",
        },
        redshift_parameters: {
            value: ccDataSourceDataSourceParametersRedshiftParametersPropertyToHclTerraform(struct!.redshiftParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersRedshiftParametersProperty",
        },
        s3_parameters: {
            value: ccDataSourceDataSourceParametersS3ParametersPropertyToHclTerraform(struct!.s3Parameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersS3ParametersProperty",
        },
        s3_tables_parameters: {
            value: ccDataSourceDataSourceParametersS3TablesParametersPropertyToHclTerraform(struct!.s3TablesParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersS3TablesParametersProperty",
        },
        snowflake_parameters: {
            value: ccDataSourceDataSourceParametersSnowflakeParametersPropertyToHclTerraform(struct!.snowflakeParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersSnowflakeParametersProperty",
        },
        spark_parameters: {
            value: ccDataSourceDataSourceParametersSparkParametersPropertyToHclTerraform(struct!.sparkParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersSparkParametersProperty",
        },
        sql_server_parameters: {
            value: ccDataSourceDataSourceParametersSqlServerParametersPropertyToHclTerraform(struct!.sqlServerParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersSqlServerParametersProperty",
        },
        starburst_parameters: {
            value: ccDataSourceDataSourceParametersStarburstParametersPropertyToHclTerraform(struct!.starburstParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersStarburstParametersProperty",
        },
        teradata_parameters: {
            value: ccDataSourceDataSourceParametersTeradataParametersPropertyToHclTerraform(struct!.teradataParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersTeradataParametersProperty",
        },
        trino_parameters: {
            value: ccDataSourceDataSourceParametersTrinoParametersPropertyToHclTerraform(struct!.trinoParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceParametersTrinoParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceErrorInfoPropertyToTerraform(struct?: CcDataSource.DataSourceErrorInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        message: cdktn.stringToTerraform(struct!.message),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataSourceDataSourceErrorInfoPropertyToHclTerraform(struct?: CcDataSource.DataSourceErrorInfoProperty | cdktn.IResolvable): any {
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


export function ccDataSourceResourcePermissionPropertyToTerraform(struct?: CcDataSource.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        principal: cdktn.stringToTerraform(struct!.principal),
        resource: cdktn.stringToTerraform(struct!.resource),
    }
}


export function ccDataSourceResourcePermissionPropertyToHclTerraform(struct?: CcDataSource.ResourcePermissionProperty | cdktn.IResolvable): any {
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
        resource: {
            value: cdktn.stringToHclTerraform(struct!.resource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSslPropertiesPropertyToTerraform(struct?: CcDataSource.SslPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disable_ssl: cdktn.booleanToTerraform(struct!.disableSsl),
    }
}


export function ccDataSourceSslPropertiesPropertyToHclTerraform(struct?: CcDataSource.SslPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disable_ssl: {
            value: cdktn.booleanToHclTerraform(struct!.disableSsl),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceTagPropertyToTerraform(struct?: CcDataSource.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDataSourceTagPropertyToHclTerraform(struct?: CcDataSource.TagProperty | cdktn.IResolvable): any {
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


export function ccDataSourceVpcConnectionPropertiesProperty2ToTerraform(struct?: CcDataSource.VpcConnectionPropertiesProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
    }
}


export function ccDataSourceVpcConnectionPropertiesProperty2ToHclTerraform(struct?: CcDataSource.VpcConnectionPropertiesProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_connection_arn: {
            value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDataSource {
export interface AmazonElasticsearchParametersProperty {
    /**
    * <p>The OpenSearch domain.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#domain CcDataSource#domain}
    */
    readonly domain?: string;
}
export class AmazonElasticsearchParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AmazonElasticsearchParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmazonElasticsearchParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
        }
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }
}
export interface AmazonOpenSearchParametersProperty {
    /**
    * <p>The OpenSearch domain.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#domain CcDataSource#domain}
    */
    readonly domain?: string;
}
export class AmazonOpenSearchParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AmazonOpenSearchParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmazonOpenSearchParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
        }
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }
}
export interface IdentityCenterConfigurationProperty {
    /**
    * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#enable_identity_propagation CcDataSource#enable_identity_propagation}
    */
    readonly enableIdentityPropagation?: boolean | cdktn.IResolvable;
}
export class IdentityCenterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdentityCenterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableIdentityPropagation !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableIdentityPropagation = this._enableIdentityPropagation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdentityCenterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableIdentityPropagation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableIdentityPropagation = value.enableIdentityPropagation;
        }
    }

    // enable_identity_propagation - computed: true, optional: true, required: false
    private _enableIdentityPropagation?: boolean | cdktn.IResolvable; 
    public get enableIdentityPropagation() {
        return this.getBooleanAttribute('enable_identity_propagation');
    }
    public set enableIdentityPropagation(value: boolean | cdktn.IResolvable) {
        this._enableIdentityPropagation = value;
    }
    public resetEnableIdentityPropagation() {
        this._enableIdentityPropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableIdentityPropagationInput() {
        return this._enableIdentityPropagation;
    }
}
export interface AthenaParametersProperty {
    /**
    * <p>The parameters for an IAM Identity Center configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_center_configuration CcDataSource#identity_center_configuration}
    */
    readonly identityCenterConfiguration?: IdentityCenterConfigurationProperty;
    /**
    * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#role_arn CcDataSource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * <p>The workgroup that Amazon Athena uses.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#work_group CcDataSource#work_group}
    */
    readonly workGroup?: string;
}
export class AthenaParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AthenaParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identityCenterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._workGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.workGroup = this._workGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AthenaParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityCenterConfiguration.internalValue = undefined;
            this._roleArn = undefined;
            this._workGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
            this._roleArn = value.roleArn;
            this._workGroup = value.workGroup;
        }
    }

    // identity_center_configuration - computed: true, optional: true, required: false
    private _identityCenterConfiguration = new IdentityCenterConfigurationPropertyOutputReference(this, "identity_center_configuration");
    public get identityCenterConfiguration() {
        return this._identityCenterConfiguration;
    }
    public putIdentityCenterConfiguration(value: IdentityCenterConfigurationProperty) {
        this._identityCenterConfiguration.internalValue = value;
    }
    public resetIdentityCenterConfiguration() {
        this._identityCenterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityCenterConfigurationInput() {
        return this._identityCenterConfiguration.internalValue;
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

    // work_group - computed: true, optional: true, required: false
    private _workGroup?: string; 
    public get workGroup() {
        return this.getStringAttribute('work_group');
    }
    public set workGroup(value: string) {
        this._workGroup = value;
    }
    public resetWorkGroup() {
        this._workGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workGroupInput() {
        return this._workGroup;
    }
}
export interface AuroraParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class AuroraParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuroraParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuroraParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface AuroraPostgreSqlParametersProperty {
    /**
    * <p>The Amazon Aurora PostgreSQL database to connect to.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>The port that Amazon Aurora PostgreSQL is listening on.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class AuroraPostgreSqlParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuroraPostgreSqlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuroraPostgreSqlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DatabricksParametersProperty {
    /**
    * <p>The host name of the Databricks data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>The port for the Databricks data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
    /**
    * <p>The HTTP path of the Databricks data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#sql_endpoint_path CcDataSource#sql_endpoint_path}
    */
    readonly sqlEndpointPath?: string;
}
export class DatabricksParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatabricksParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._sqlEndpointPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlEndpointPath = this._sqlEndpointPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatabricksParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._port = undefined;
            this._sqlEndpointPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._port = value.port;
            this._sqlEndpointPath = value.sqlEndpointPath;
        }
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // sql_endpoint_path - computed: true, optional: true, required: false
    private _sqlEndpointPath?: string; 
    public get sqlEndpointPath() {
        return this.getStringAttribute('sql_endpoint_path');
    }
    public set sqlEndpointPath(value: string) {
        this._sqlEndpointPath = value;
    }
    public resetSqlEndpointPath() {
        this._sqlEndpointPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlEndpointPathInput() {
        return this._sqlEndpointPath;
    }
}
export interface MariaDbParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class MariaDbParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MariaDbParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MariaDbParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface MySqlParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class MySqlParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MySqlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MySqlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface OracleParametersProperty {
    /**
    * <p>The database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>An Oracle host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>The port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#use_service_name CcDataSource#use_service_name}
    */
    readonly useServiceName?: boolean | cdktn.IResolvable;
}
export class OracleParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OracleParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._useServiceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.useServiceName = this._useServiceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OracleParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
            this._useServiceName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
            this._useServiceName = value.useServiceName;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // use_service_name - computed: true, optional: true, required: false
    private _useServiceName?: boolean | cdktn.IResolvable; 
    public get useServiceName() {
        return this.getBooleanAttribute('use_service_name');
    }
    public set useServiceName(value: boolean | cdktn.IResolvable) {
        this._useServiceName = value;
    }
    public resetUseServiceName() {
        this._useServiceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useServiceNameInput() {
        return this._useServiceName;
    }
}
export interface PostgreSqlParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class PostgreSqlParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PostgreSqlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PostgreSqlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface PrestoParametersProperty {
    /**
    * <p>Catalog.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#catalog CcDataSource#catalog}
    */
    readonly catalog?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class PrestoParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrestoParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalog !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrestoParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalog = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalog = value.catalog;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string; 
    public get catalog() {
        return this.getStringAttribute('catalog');
    }
    public set catalog(value: string) {
        this._catalog = value;
    }
    public resetCatalog() {
        this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface RdsParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Instance ID.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#instance_id CcDataSource#instance_id}
    */
    readonly instanceId?: string;
}
export class RdsParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RdsParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._instanceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceId = this._instanceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RdsParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._instanceId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._instanceId = value.instanceId;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // instance_id - computed: true, optional: true, required: false
    private _instanceId?: string; 
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
    public resetInstanceId() {
        this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
        return this._instanceId;
    }
}
export interface RedshiftIAMParametersProperty {
    /**
    * <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Amazon QuickSight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#auto_create_database_user CcDataSource#auto_create_database_user}
    */
    readonly autoCreateDatabaseUser?: boolean | cdktn.IResolvable;
    /**
    * <p>A list of groups whose permissions will be granted to Amazon QuickSight to access the cluster. These permissions are combined with the permissions granted to Amazon QuickSight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database_groups CcDataSource#database_groups}
    */
    readonly databaseGroups?: string[];
    /**
    * <p>The user whose permissions and group memberships will be used by Amazon QuickSight to access the cluster. If this user already exists in your database, Amazon QuickSight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database_user CcDataSource#database_user}
    */
    readonly databaseUser?: string;
    /**
    * <p>Use the <code>RoleArn</code> structure to allow Amazon QuickSight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Amazon QuickSight. The role's trust policy must allow the Amazon QuickSight service principal to assume the role.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#role_arn CcDataSource#role_arn}
    */
    readonly roleArn?: string;
}
export class RedshiftIAMParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftIAMParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoCreateDatabaseUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoCreateDatabaseUser = this._autoCreateDatabaseUser;
        }
        if (this._databaseGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseGroups = this._databaseGroups;
        }
        if (this._databaseUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseUser = this._databaseUser;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftIAMParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoCreateDatabaseUser = undefined;
            this._databaseGroups = undefined;
            this._databaseUser = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoCreateDatabaseUser = value.autoCreateDatabaseUser;
            this._databaseGroups = value.databaseGroups;
            this._databaseUser = value.databaseUser;
            this._roleArn = value.roleArn;
        }
    }

    // auto_create_database_user - computed: true, optional: true, required: false
    private _autoCreateDatabaseUser?: boolean | cdktn.IResolvable; 
    public get autoCreateDatabaseUser() {
        return this.getBooleanAttribute('auto_create_database_user');
    }
    public set autoCreateDatabaseUser(value: boolean | cdktn.IResolvable) {
        this._autoCreateDatabaseUser = value;
    }
    public resetAutoCreateDatabaseUser() {
        this._autoCreateDatabaseUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoCreateDatabaseUserInput() {
        return this._autoCreateDatabaseUser;
    }

    // database_groups - computed: true, optional: true, required: false
    private _databaseGroups?: string[]; 
    public get databaseGroups() {
        return this.getListAttribute('database_groups');
    }
    public set databaseGroups(value: string[]) {
        this._databaseGroups = value;
    }
    public resetDatabaseGroups() {
        this._databaseGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseGroupsInput() {
        return this._databaseGroups;
    }

    // database_user - computed: true, optional: true, required: false
    private _databaseUser?: string; 
    public get databaseUser() {
        return this.getStringAttribute('database_user');
    }
    public set databaseUser(value: string) {
        this._databaseUser = value;
    }
    public resetDatabaseUser() {
        this._databaseUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseUserInput() {
        return this._databaseUser;
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
}
export interface AlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty {
    /**
    * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#enable_identity_propagation CcDataSource#enable_identity_propagation}
    */
    readonly enableIdentityPropagation?: boolean | cdktn.IResolvable;
}
export class AlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableIdentityPropagation !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableIdentityPropagation = this._enableIdentityPropagation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableIdentityPropagation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableIdentityPropagation = value.enableIdentityPropagation;
        }
    }

    // enable_identity_propagation - computed: true, optional: true, required: false
    private _enableIdentityPropagation?: boolean | cdktn.IResolvable; 
    public get enableIdentityPropagation() {
        return this.getBooleanAttribute('enable_identity_propagation');
    }
    public set enableIdentityPropagation(value: boolean | cdktn.IResolvable) {
        this._enableIdentityPropagation = value;
    }
    public resetEnableIdentityPropagation() {
        this._enableIdentityPropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableIdentityPropagationInput() {
        return this._enableIdentityPropagation;
    }
}
export interface RedshiftParametersProperty {
    /**
    * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
    *             provided.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#cluster_id CcDataSource#cluster_id}
    */
    readonly clusterId?: string;
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>A structure that grants Amazon QuickSight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
    *                <code>GetClusterCredentials</code>
    *             </a>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#iam_parameters CcDataSource#iam_parameters}
    */
    readonly iamParameters?: RedshiftIAMParametersProperty;
    /**
    * <p>The parameters for an IAM Identity Center configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_center_configuration CcDataSource#identity_center_configuration}
    */
    readonly identityCenterConfiguration?: AlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty;
    /**
    * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class RedshiftParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterId = this._clusterId;
        }
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._iamParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamParameters = this._iamParameters?.internalValue;
        }
        if (this._identityCenterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterId = undefined;
            this._database = undefined;
            this._host = undefined;
            this._iamParameters.internalValue = undefined;
            this._identityCenterConfiguration.internalValue = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterId = value.clusterId;
            this._database = value.database;
            this._host = value.host;
            this._iamParameters.internalValue = value.iamParameters;
            this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
            this._port = value.port;
        }
    }

    // cluster_id - computed: true, optional: true, required: false
    private _clusterId?: string; 
    public get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
        this._clusterId = value;
    }
    public resetClusterId() {
        this._clusterId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
        return this._clusterId;
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // iam_parameters - computed: true, optional: true, required: false
    private _iamParameters = new RedshiftIAMParametersPropertyOutputReference(this, "iam_parameters");
    public get iamParameters() {
        return this._iamParameters;
    }
    public putIamParameters(value: RedshiftIAMParametersProperty) {
        this._iamParameters.internalValue = value;
    }
    public resetIamParameters() {
        this._iamParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamParametersInput() {
        return this._iamParameters.internalValue;
    }

    // identity_center_configuration - computed: true, optional: true, required: false
    private _identityCenterConfiguration = new AlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyOutputReference(this, "identity_center_configuration");
    public get identityCenterConfiguration() {
        return this._identityCenterConfiguration;
    }
    public putIdentityCenterConfiguration(value: AlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty) {
        this._identityCenterConfiguration.internalValue = value;
    }
    public resetIdentityCenterConfiguration() {
        this._identityCenterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityCenterConfigurationInput() {
        return this._identityCenterConfiguration.internalValue;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface ManifestFileLocationProperty {
    /**
    * <p>Amazon S3 bucket.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#bucket CcDataSource#bucket}
    */
    readonly bucket?: string;
    /**
    * <p>Amazon S3 key that identifies an object.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#key CcDataSource#key}
    */
    readonly key?: string;
}
export class ManifestFileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManifestFileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManifestFileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
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
}
export interface S3ParametersProperty {
    /**
    * <p>Amazon S3 manifest file location.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#manifest_file_location CcDataSource#manifest_file_location}
    */
    readonly manifestFileLocation?: ManifestFileLocationProperty;
    /**
    * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#role_arn CcDataSource#role_arn}
    */
    readonly roleArn?: string;
}
export class S3ParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._manifestFileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestFileLocation = this._manifestFileLocation?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._manifestFileLocation.internalValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._manifestFileLocation.internalValue = value.manifestFileLocation;
            this._roleArn = value.roleArn;
        }
    }

    // manifest_file_location - computed: true, optional: true, required: false
    private _manifestFileLocation = new ManifestFileLocationPropertyOutputReference(this, "manifest_file_location");
    public get manifestFileLocation() {
        return this._manifestFileLocation;
    }
    public putManifestFileLocation(value: ManifestFileLocationProperty) {
        this._manifestFileLocation.internalValue = value;
    }
    public resetManifestFileLocation() {
        this._manifestFileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestFileLocationInput() {
        return this._manifestFileLocation.internalValue;
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
}
export interface S3TablesParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#table_bucket_arn CcDataSource#table_bucket_arn}
    */
    readonly tableBucketArn?: string;
}
export class S3TablesParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3TablesParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tableBucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableBucketArn = this._tableBucketArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3TablesParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tableBucketArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tableBucketArn = value.tableBucketArn;
        }
    }

    // table_bucket_arn - computed: true, optional: true, required: false
    private _tableBucketArn?: string; 
    public get tableBucketArn() {
        return this.getStringAttribute('table_bucket_arn');
    }
    public set tableBucketArn(value: string) {
        this._tableBucketArn = value;
    }
    public resetTableBucketArn() {
        this._tableBucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableBucketArnInput() {
        return this._tableBucketArn;
    }
}
export interface VpcConnectionPropertiesProperty {
    /**
    * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#vpc_connection_arn CcDataSource#vpc_connection_arn}
    */
    readonly vpcConnectionArn?: string;
}
export class VpcConnectionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConnectionPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcConnectionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConnectionPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = value.vpcConnectionArn;
        }
    }

    // vpc_connection_arn - computed: true, optional: true, required: false
    private _vpcConnectionArn?: string; 
    public get vpcConnectionArn() {
        return this.getStringAttribute('vpc_connection_arn');
    }
    public set vpcConnectionArn(value: string) {
        this._vpcConnectionArn = value;
    }
    public resetVpcConnectionArn() {
        this._vpcConnectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConnectionArnInput() {
        return this._vpcConnectionArn;
    }
}
export interface OAuthParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_provider_resource_uri CcDataSource#identity_provider_resource_uri}
    */
    readonly identityProviderResourceUri?: string;
    /**
    * <p>VPC connection properties.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_provider_vpc_connection_properties CcDataSource#identity_provider_vpc_connection_properties}
    */
    readonly identityProviderVpcConnectionProperties?: VpcConnectionPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#o_auth_scope CcDataSource#o_auth_scope}
    */
    readonly oAuthScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#token_provider_url CcDataSource#token_provider_url}
    */
    readonly tokenProviderUrl?: string;
}
export class OAuthParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuthParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identityProviderResourceUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderResourceUri = this._identityProviderResourceUri;
        }
        if (this._identityProviderVpcConnectionProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderVpcConnectionProperties = this._identityProviderVpcConnectionProperties?.internalValue;
        }
        if (this._oAuthScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthScope = this._oAuthScope;
        }
        if (this._tokenProviderUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenProviderUrl = this._tokenProviderUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuthParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderResourceUri = undefined;
            this._identityProviderVpcConnectionProperties.internalValue = undefined;
            this._oAuthScope = undefined;
            this._tokenProviderUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderResourceUri = value.identityProviderResourceUri;
            this._identityProviderVpcConnectionProperties.internalValue = value.identityProviderVpcConnectionProperties;
            this._oAuthScope = value.oAuthScope;
            this._tokenProviderUrl = value.tokenProviderUrl;
        }
    }

    // identity_provider_resource_uri - computed: true, optional: true, required: false
    private _identityProviderResourceUri?: string; 
    public get identityProviderResourceUri() {
        return this.getStringAttribute('identity_provider_resource_uri');
    }
    public set identityProviderResourceUri(value: string) {
        this._identityProviderResourceUri = value;
    }
    public resetIdentityProviderResourceUri() {
        this._identityProviderResourceUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderResourceUriInput() {
        return this._identityProviderResourceUri;
    }

    // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
    private _identityProviderVpcConnectionProperties = new VpcConnectionPropertiesPropertyOutputReference(this, "identity_provider_vpc_connection_properties");
    public get identityProviderVpcConnectionProperties() {
        return this._identityProviderVpcConnectionProperties;
    }
    public putIdentityProviderVpcConnectionProperties(value: VpcConnectionPropertiesProperty) {
        this._identityProviderVpcConnectionProperties.internalValue = value;
    }
    public resetIdentityProviderVpcConnectionProperties() {
        this._identityProviderVpcConnectionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderVpcConnectionPropertiesInput() {
        return this._identityProviderVpcConnectionProperties.internalValue;
    }

    // o_auth_scope - computed: true, optional: true, required: false
    private _oAuthScope?: string; 
    public get oAuthScope() {
        return this.getStringAttribute('o_auth_scope');
    }
    public set oAuthScope(value: string) {
        this._oAuthScope = value;
    }
    public resetOAuthScope() {
        this._oAuthScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthScopeInput() {
        return this._oAuthScope;
    }

    // token_provider_url - computed: true, optional: true, required: false
    private _tokenProviderUrl?: string; 
    public get tokenProviderUrl() {
        return this.getStringAttribute('token_provider_url');
    }
    public set tokenProviderUrl(value: string) {
        this._tokenProviderUrl = value;
    }
    public resetTokenProviderUrl() {
        this._tokenProviderUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenProviderUrlInput() {
        return this._tokenProviderUrl;
    }
}
export interface SnowflakeParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#authentication_type CcDataSource#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database_access_control_role CcDataSource#database_access_control_role}
    */
    readonly databaseAccessControlRole?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#o_auth_parameters CcDataSource#o_auth_parameters}
    */
    readonly oAuthParameters?: OAuthParametersProperty;
    /**
    * <p>Warehouse.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#warehouse CcDataSource#warehouse}
    */
    readonly warehouse?: string;
}
export class SnowflakeParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnowflakeParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._databaseAccessControlRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseAccessControlRole = this._databaseAccessControlRole;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._oAuthParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
        }
        if (this._warehouse !== undefined) {
            hasAnyValues = true;
            internalValueResult.warehouse = this._warehouse;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnowflakeParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationType = undefined;
            this._database = undefined;
            this._databaseAccessControlRole = undefined;
            this._host = undefined;
            this._oAuthParameters.internalValue = undefined;
            this._warehouse = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationType = value.authenticationType;
            this._database = value.database;
            this._databaseAccessControlRole = value.databaseAccessControlRole;
            this._host = value.host;
            this._oAuthParameters.internalValue = value.oAuthParameters;
            this._warehouse = value.warehouse;
        }
    }

    // authentication_type - computed: true, optional: true, required: false
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    public resetAuthenticationType() {
        this._authenticationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // database_access_control_role - computed: true, optional: true, required: false
    private _databaseAccessControlRole?: string; 
    public get databaseAccessControlRole() {
        return this.getStringAttribute('database_access_control_role');
    }
    public set databaseAccessControlRole(value: string) {
        this._databaseAccessControlRole = value;
    }
    public resetDatabaseAccessControlRole() {
        this._databaseAccessControlRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseAccessControlRoleInput() {
        return this._databaseAccessControlRole;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // o_auth_parameters - computed: true, optional: true, required: false
    private _oAuthParameters = new OAuthParametersPropertyOutputReference(this, "o_auth_parameters");
    public get oAuthParameters() {
        return this._oAuthParameters;
    }
    public putOAuthParameters(value: OAuthParametersProperty) {
        this._oAuthParameters.internalValue = value;
    }
    public resetOAuthParameters() {
        this._oAuthParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthParametersInput() {
        return this._oAuthParameters.internalValue;
    }

    // warehouse - computed: true, optional: true, required: false
    private _warehouse?: string; 
    public get warehouse() {
        return this.getStringAttribute('warehouse');
    }
    public set warehouse(value: string) {
        this._warehouse = value;
    }
    public resetWarehouse() {
        this._warehouse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warehouseInput() {
        return this._warehouse;
    }
}
export interface SparkParametersProperty {
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class SparkParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SparkParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SparkParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface SqlServerParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class SqlServerParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SqlServerParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SqlServerParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface AlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty {
    /**
    * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#vpc_connection_arn CcDataSource#vpc_connection_arn}
    */
    readonly vpcConnectionArn?: string;
}
export class AlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcConnectionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = value.vpcConnectionArn;
        }
    }

    // vpc_connection_arn - computed: true, optional: true, required: false
    private _vpcConnectionArn?: string; 
    public get vpcConnectionArn() {
        return this.getStringAttribute('vpc_connection_arn');
    }
    public set vpcConnectionArn(value: string) {
        this._vpcConnectionArn = value;
    }
    public resetVpcConnectionArn() {
        this._vpcConnectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConnectionArnInput() {
        return this._vpcConnectionArn;
    }
}
export interface AlternateDataSourceParametersStarburstParametersOAuthParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_provider_resource_uri CcDataSource#identity_provider_resource_uri}
    */
    readonly identityProviderResourceUri?: string;
    /**
    * <p>VPC connection properties.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_provider_vpc_connection_properties CcDataSource#identity_provider_vpc_connection_properties}
    */
    readonly identityProviderVpcConnectionProperties?: AlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#o_auth_scope CcDataSource#o_auth_scope}
    */
    readonly oAuthScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#token_provider_url CcDataSource#token_provider_url}
    */
    readonly tokenProviderUrl?: string;
}
export class AlternateDataSourceParametersStarburstParametersOAuthParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlternateDataSourceParametersStarburstParametersOAuthParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identityProviderResourceUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderResourceUri = this._identityProviderResourceUri;
        }
        if (this._identityProviderVpcConnectionProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderVpcConnectionProperties = this._identityProviderVpcConnectionProperties?.internalValue;
        }
        if (this._oAuthScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthScope = this._oAuthScope;
        }
        if (this._tokenProviderUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenProviderUrl = this._tokenProviderUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlternateDataSourceParametersStarburstParametersOAuthParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderResourceUri = undefined;
            this._identityProviderVpcConnectionProperties.internalValue = undefined;
            this._oAuthScope = undefined;
            this._tokenProviderUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderResourceUri = value.identityProviderResourceUri;
            this._identityProviderVpcConnectionProperties.internalValue = value.identityProviderVpcConnectionProperties;
            this._oAuthScope = value.oAuthScope;
            this._tokenProviderUrl = value.tokenProviderUrl;
        }
    }

    // identity_provider_resource_uri - computed: true, optional: true, required: false
    private _identityProviderResourceUri?: string; 
    public get identityProviderResourceUri() {
        return this.getStringAttribute('identity_provider_resource_uri');
    }
    public set identityProviderResourceUri(value: string) {
        this._identityProviderResourceUri = value;
    }
    public resetIdentityProviderResourceUri() {
        this._identityProviderResourceUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderResourceUriInput() {
        return this._identityProviderResourceUri;
    }

    // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
    private _identityProviderVpcConnectionProperties = new AlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyOutputReference(this, "identity_provider_vpc_connection_properties");
    public get identityProviderVpcConnectionProperties() {
        return this._identityProviderVpcConnectionProperties;
    }
    public putIdentityProviderVpcConnectionProperties(value: AlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty) {
        this._identityProviderVpcConnectionProperties.internalValue = value;
    }
    public resetIdentityProviderVpcConnectionProperties() {
        this._identityProviderVpcConnectionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderVpcConnectionPropertiesInput() {
        return this._identityProviderVpcConnectionProperties.internalValue;
    }

    // o_auth_scope - computed: true, optional: true, required: false
    private _oAuthScope?: string; 
    public get oAuthScope() {
        return this.getStringAttribute('o_auth_scope');
    }
    public set oAuthScope(value: string) {
        this._oAuthScope = value;
    }
    public resetOAuthScope() {
        this._oAuthScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthScopeInput() {
        return this._oAuthScope;
    }

    // token_provider_url - computed: true, optional: true, required: false
    private _tokenProviderUrl?: string; 
    public get tokenProviderUrl() {
        return this.getStringAttribute('token_provider_url');
    }
    public set tokenProviderUrl(value: string) {
        this._tokenProviderUrl = value;
    }
    public resetTokenProviderUrl() {
        this._tokenProviderUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenProviderUrlInput() {
        return this._tokenProviderUrl;
    }
}
export interface StarburstParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#authentication_type CcDataSource#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * <p>The catalog name for the Starburst data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#catalog CcDataSource#catalog}
    */
    readonly catalog?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database_access_control_role CcDataSource#database_access_control_role}
    */
    readonly databaseAccessControlRole?: string;
    /**
    * <p>The host name of the Starburst data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#o_auth_parameters CcDataSource#o_auth_parameters}
    */
    readonly oAuthParameters?: AlternateDataSourceParametersStarburstParametersOAuthParametersProperty;
    /**
    * <p>The port for the Starburst data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#product_type CcDataSource#product_type}
    */
    readonly productType?: string;
}
export class StarburstParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StarburstParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        if (this._catalog !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._databaseAccessControlRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseAccessControlRole = this._databaseAccessControlRole;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._oAuthParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._productType !== undefined) {
            hasAnyValues = true;
            internalValueResult.productType = this._productType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StarburstParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationType = undefined;
            this._catalog = undefined;
            this._databaseAccessControlRole = undefined;
            this._host = undefined;
            this._oAuthParameters.internalValue = undefined;
            this._port = undefined;
            this._productType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationType = value.authenticationType;
            this._catalog = value.catalog;
            this._databaseAccessControlRole = value.databaseAccessControlRole;
            this._host = value.host;
            this._oAuthParameters.internalValue = value.oAuthParameters;
            this._port = value.port;
            this._productType = value.productType;
        }
    }

    // authentication_type - computed: true, optional: true, required: false
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    public resetAuthenticationType() {
        this._authenticationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string; 
    public get catalog() {
        return this.getStringAttribute('catalog');
    }
    public set catalog(value: string) {
        this._catalog = value;
    }
    public resetCatalog() {
        this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog;
    }

    // database_access_control_role - computed: true, optional: true, required: false
    private _databaseAccessControlRole?: string; 
    public get databaseAccessControlRole() {
        return this.getStringAttribute('database_access_control_role');
    }
    public set databaseAccessControlRole(value: string) {
        this._databaseAccessControlRole = value;
    }
    public resetDatabaseAccessControlRole() {
        this._databaseAccessControlRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseAccessControlRoleInput() {
        return this._databaseAccessControlRole;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // o_auth_parameters - computed: true, optional: true, required: false
    private _oAuthParameters = new AlternateDataSourceParametersStarburstParametersOAuthParametersPropertyOutputReference(this, "o_auth_parameters");
    public get oAuthParameters() {
        return this._oAuthParameters;
    }
    public putOAuthParameters(value: AlternateDataSourceParametersStarburstParametersOAuthParametersProperty) {
        this._oAuthParameters.internalValue = value;
    }
    public resetOAuthParameters() {
        this._oAuthParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthParametersInput() {
        return this._oAuthParameters.internalValue;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // product_type - computed: true, optional: true, required: false
    private _productType?: string; 
    public get productType() {
        return this.getStringAttribute('product_type');
    }
    public set productType(value: string) {
        this._productType = value;
    }
    public resetProductType() {
        this._productType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productTypeInput() {
        return this._productType;
    }
}
export interface TeradataParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class TeradataParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TeradataParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TeradataParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface TrinoParametersProperty {
    /**
    * <p>The catalog name for the Trino data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#catalog CcDataSource#catalog}
    */
    readonly catalog?: string;
    /**
    * <p>The host name of the Trino data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>The port for the Trino data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class TrinoParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrinoParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalog !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrinoParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalog = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalog = value.catalog;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string; 
    public get catalog() {
        return this.getStringAttribute('catalog');
    }
    public set catalog(value: string) {
        this._catalog = value;
    }
    public resetCatalog() {
        this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DataSourceParametersProperty {
    /**
    * <p>The parameters for OpenSearch.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#amazon_elasticsearch_parameters CcDataSource#amazon_elasticsearch_parameters}
    */
    readonly amazonElasticsearchParameters?: AmazonElasticsearchParametersProperty;
    /**
    * <p>The parameters for OpenSearch.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#amazon_open_search_parameters CcDataSource#amazon_open_search_parameters}
    */
    readonly amazonOpenSearchParameters?: AmazonOpenSearchParametersProperty;
    /**
    * <p>Parameters for Amazon Athena.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#athena_parameters CcDataSource#athena_parameters}
    */
    readonly athenaParameters?: AthenaParametersProperty;
    /**
    * <p>Parameters for Amazon Aurora.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#aurora_parameters CcDataSource#aurora_parameters}
    */
    readonly auroraParameters?: AuroraParametersProperty;
    /**
    * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#aurora_postgre_sql_parameters CcDataSource#aurora_postgre_sql_parameters}
    */
    readonly auroraPostgreSqlParameters?: AuroraPostgreSqlParametersProperty;
    /**
    * <p>The parameters that are required to connect to a Databricks data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#databricks_parameters CcDataSource#databricks_parameters}
    */
    readonly databricksParameters?: DatabricksParametersProperty;
    /**
    * <p>The parameters for MariaDB.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#maria_db_parameters CcDataSource#maria_db_parameters}
    */
    readonly mariaDbParameters?: MariaDbParametersProperty;
    /**
    * <p>The parameters for MySQL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#my_sql_parameters CcDataSource#my_sql_parameters}
    */
    readonly mySqlParameters?: MySqlParametersProperty;
    /**
    * <p>The parameters for Oracle.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#oracle_parameters CcDataSource#oracle_parameters}
    */
    readonly oracleParameters?: OracleParametersProperty;
    /**
    * <p>The parameters for PostgreSQL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#postgre_sql_parameters CcDataSource#postgre_sql_parameters}
    */
    readonly postgreSqlParameters?: PostgreSqlParametersProperty;
    /**
    * <p>The parameters for Presto.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#presto_parameters CcDataSource#presto_parameters}
    */
    readonly prestoParameters?: PrestoParametersProperty;
    /**
    * <p>The parameters for Amazon RDS.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#rds_parameters CcDataSource#rds_parameters}
    */
    readonly rdsParameters?: RdsParametersProperty;
    /**
    * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
    *             <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#redshift_parameters CcDataSource#redshift_parameters}
    */
    readonly redshiftParameters?: RedshiftParametersProperty;
    /**
    * <p>The parameters for S3.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#s3_parameters CcDataSource#s3_parameters}
    */
    readonly s3Parameters?: S3ParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#s3_tables_parameters CcDataSource#s3_tables_parameters}
    */
    readonly s3TablesParameters?: S3TablesParametersProperty;
    /**
    * <p>The parameters for Snowflake.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#snowflake_parameters CcDataSource#snowflake_parameters}
    */
    readonly snowflakeParameters?: SnowflakeParametersProperty;
    /**
    * <p>The parameters for Spark.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#spark_parameters CcDataSource#spark_parameters}
    */
    readonly sparkParameters?: SparkParametersProperty;
    /**
    * <p>The parameters for SQL Server.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#sql_server_parameters CcDataSource#sql_server_parameters}
    */
    readonly sqlServerParameters?: SqlServerParametersProperty;
    /**
    * <p>The parameters that are required to connect to a Starburst data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#starburst_parameters CcDataSource#starburst_parameters}
    */
    readonly starburstParameters?: StarburstParametersProperty;
    /**
    * <p>The parameters for Teradata.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#teradata_parameters CcDataSource#teradata_parameters}
    */
    readonly teradataParameters?: TeradataParametersProperty;
    /**
    * <p>The parameters that are required to connect to a Trino data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#trino_parameters CcDataSource#trino_parameters}
    */
    readonly trinoParameters?: TrinoParametersProperty;
}
export class DataSourceParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DataSourceParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amazonElasticsearchParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonElasticsearchParameters = this._amazonElasticsearchParameters?.internalValue;
        }
        if (this._amazonOpenSearchParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonOpenSearchParameters = this._amazonOpenSearchParameters?.internalValue;
        }
        if (this._athenaParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.athenaParameters = this._athenaParameters?.internalValue;
        }
        if (this._auroraParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.auroraParameters = this._auroraParameters?.internalValue;
        }
        if (this._auroraPostgreSqlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.auroraPostgreSqlParameters = this._auroraPostgreSqlParameters?.internalValue;
        }
        if (this._databricksParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.databricksParameters = this._databricksParameters?.internalValue;
        }
        if (this._mariaDbParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mariaDbParameters = this._mariaDbParameters?.internalValue;
        }
        if (this._mySqlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mySqlParameters = this._mySqlParameters?.internalValue;
        }
        if (this._oracleParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oracleParameters = this._oracleParameters?.internalValue;
        }
        if (this._postgreSqlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.postgreSqlParameters = this._postgreSqlParameters?.internalValue;
        }
        if (this._prestoParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.prestoParameters = this._prestoParameters?.internalValue;
        }
        if (this._rdsParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsParameters = this._rdsParameters?.internalValue;
        }
        if (this._redshiftParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftParameters = this._redshiftParameters?.internalValue;
        }
        if (this._s3Parameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Parameters = this._s3Parameters?.internalValue;
        }
        if (this._s3TablesParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3TablesParameters = this._s3TablesParameters?.internalValue;
        }
        if (this._snowflakeParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snowflakeParameters = this._snowflakeParameters?.internalValue;
        }
        if (this._sparkParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sparkParameters = this._sparkParameters?.internalValue;
        }
        if (this._sqlServerParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlServerParameters = this._sqlServerParameters?.internalValue;
        }
        if (this._starburstParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.starburstParameters = this._starburstParameters?.internalValue;
        }
        if (this._teradataParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.teradataParameters = this._teradataParameters?.internalValue;
        }
        if (this._trinoParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trinoParameters = this._trinoParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amazonElasticsearchParameters.internalValue = undefined;
            this._amazonOpenSearchParameters.internalValue = undefined;
            this._athenaParameters.internalValue = undefined;
            this._auroraParameters.internalValue = undefined;
            this._auroraPostgreSqlParameters.internalValue = undefined;
            this._databricksParameters.internalValue = undefined;
            this._mariaDbParameters.internalValue = undefined;
            this._mySqlParameters.internalValue = undefined;
            this._oracleParameters.internalValue = undefined;
            this._postgreSqlParameters.internalValue = undefined;
            this._prestoParameters.internalValue = undefined;
            this._rdsParameters.internalValue = undefined;
            this._redshiftParameters.internalValue = undefined;
            this._s3Parameters.internalValue = undefined;
            this._s3TablesParameters.internalValue = undefined;
            this._snowflakeParameters.internalValue = undefined;
            this._sparkParameters.internalValue = undefined;
            this._sqlServerParameters.internalValue = undefined;
            this._starburstParameters.internalValue = undefined;
            this._teradataParameters.internalValue = undefined;
            this._trinoParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amazonElasticsearchParameters.internalValue = value.amazonElasticsearchParameters;
            this._amazonOpenSearchParameters.internalValue = value.amazonOpenSearchParameters;
            this._athenaParameters.internalValue = value.athenaParameters;
            this._auroraParameters.internalValue = value.auroraParameters;
            this._auroraPostgreSqlParameters.internalValue = value.auroraPostgreSqlParameters;
            this._databricksParameters.internalValue = value.databricksParameters;
            this._mariaDbParameters.internalValue = value.mariaDbParameters;
            this._mySqlParameters.internalValue = value.mySqlParameters;
            this._oracleParameters.internalValue = value.oracleParameters;
            this._postgreSqlParameters.internalValue = value.postgreSqlParameters;
            this._prestoParameters.internalValue = value.prestoParameters;
            this._rdsParameters.internalValue = value.rdsParameters;
            this._redshiftParameters.internalValue = value.redshiftParameters;
            this._s3Parameters.internalValue = value.s3Parameters;
            this._s3TablesParameters.internalValue = value.s3TablesParameters;
            this._snowflakeParameters.internalValue = value.snowflakeParameters;
            this._sparkParameters.internalValue = value.sparkParameters;
            this._sqlServerParameters.internalValue = value.sqlServerParameters;
            this._starburstParameters.internalValue = value.starburstParameters;
            this._teradataParameters.internalValue = value.teradataParameters;
            this._trinoParameters.internalValue = value.trinoParameters;
        }
    }

    // amazon_elasticsearch_parameters - computed: true, optional: true, required: false
    private _amazonElasticsearchParameters = new AmazonElasticsearchParametersPropertyOutputReference(this, "amazon_elasticsearch_parameters");
    public get amazonElasticsearchParameters() {
        return this._amazonElasticsearchParameters;
    }
    public putAmazonElasticsearchParameters(value: AmazonElasticsearchParametersProperty) {
        this._amazonElasticsearchParameters.internalValue = value;
    }
    public resetAmazonElasticsearchParameters() {
        this._amazonElasticsearchParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonElasticsearchParametersInput() {
        return this._amazonElasticsearchParameters.internalValue;
    }

    // amazon_open_search_parameters - computed: true, optional: true, required: false
    private _amazonOpenSearchParameters = new AmazonOpenSearchParametersPropertyOutputReference(this, "amazon_open_search_parameters");
    public get amazonOpenSearchParameters() {
        return this._amazonOpenSearchParameters;
    }
    public putAmazonOpenSearchParameters(value: AmazonOpenSearchParametersProperty) {
        this._amazonOpenSearchParameters.internalValue = value;
    }
    public resetAmazonOpenSearchParameters() {
        this._amazonOpenSearchParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonOpenSearchParametersInput() {
        return this._amazonOpenSearchParameters.internalValue;
    }

    // athena_parameters - computed: true, optional: true, required: false
    private _athenaParameters = new AthenaParametersPropertyOutputReference(this, "athena_parameters");
    public get athenaParameters() {
        return this._athenaParameters;
    }
    public putAthenaParameters(value: AthenaParametersProperty) {
        this._athenaParameters.internalValue = value;
    }
    public resetAthenaParameters() {
        this._athenaParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get athenaParametersInput() {
        return this._athenaParameters.internalValue;
    }

    // aurora_parameters - computed: true, optional: true, required: false
    private _auroraParameters = new AuroraParametersPropertyOutputReference(this, "aurora_parameters");
    public get auroraParameters() {
        return this._auroraParameters;
    }
    public putAuroraParameters(value: AuroraParametersProperty) {
        this._auroraParameters.internalValue = value;
    }
    public resetAuroraParameters() {
        this._auroraParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auroraParametersInput() {
        return this._auroraParameters.internalValue;
    }

    // aurora_postgre_sql_parameters - computed: true, optional: true, required: false
    private _auroraPostgreSqlParameters = new AuroraPostgreSqlParametersPropertyOutputReference(this, "aurora_postgre_sql_parameters");
    public get auroraPostgreSqlParameters() {
        return this._auroraPostgreSqlParameters;
    }
    public putAuroraPostgreSqlParameters(value: AuroraPostgreSqlParametersProperty) {
        this._auroraPostgreSqlParameters.internalValue = value;
    }
    public resetAuroraPostgreSqlParameters() {
        this._auroraPostgreSqlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auroraPostgreSqlParametersInput() {
        return this._auroraPostgreSqlParameters.internalValue;
    }

    // databricks_parameters - computed: true, optional: true, required: false
    private _databricksParameters = new DatabricksParametersPropertyOutputReference(this, "databricks_parameters");
    public get databricksParameters() {
        return this._databricksParameters;
    }
    public putDatabricksParameters(value: DatabricksParametersProperty) {
        this._databricksParameters.internalValue = value;
    }
    public resetDatabricksParameters() {
        this._databricksParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databricksParametersInput() {
        return this._databricksParameters.internalValue;
    }

    // maria_db_parameters - computed: true, optional: true, required: false
    private _mariaDbParameters = new MariaDbParametersPropertyOutputReference(this, "maria_db_parameters");
    public get mariaDbParameters() {
        return this._mariaDbParameters;
    }
    public putMariaDbParameters(value: MariaDbParametersProperty) {
        this._mariaDbParameters.internalValue = value;
    }
    public resetMariaDbParameters() {
        this._mariaDbParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mariaDbParametersInput() {
        return this._mariaDbParameters.internalValue;
    }

    // my_sql_parameters - computed: true, optional: true, required: false
    private _mySqlParameters = new MySqlParametersPropertyOutputReference(this, "my_sql_parameters");
    public get mySqlParameters() {
        return this._mySqlParameters;
    }
    public putMySqlParameters(value: MySqlParametersProperty) {
        this._mySqlParameters.internalValue = value;
    }
    public resetMySqlParameters() {
        this._mySqlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mySqlParametersInput() {
        return this._mySqlParameters.internalValue;
    }

    // oracle_parameters - computed: true, optional: true, required: false
    private _oracleParameters = new OracleParametersPropertyOutputReference(this, "oracle_parameters");
    public get oracleParameters() {
        return this._oracleParameters;
    }
    public putOracleParameters(value: OracleParametersProperty) {
        this._oracleParameters.internalValue = value;
    }
    public resetOracleParameters() {
        this._oracleParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oracleParametersInput() {
        return this._oracleParameters.internalValue;
    }

    // postgre_sql_parameters - computed: true, optional: true, required: false
    private _postgreSqlParameters = new PostgreSqlParametersPropertyOutputReference(this, "postgre_sql_parameters");
    public get postgreSqlParameters() {
        return this._postgreSqlParameters;
    }
    public putPostgreSqlParameters(value: PostgreSqlParametersProperty) {
        this._postgreSqlParameters.internalValue = value;
    }
    public resetPostgreSqlParameters() {
        this._postgreSqlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postgreSqlParametersInput() {
        return this._postgreSqlParameters.internalValue;
    }

    // presto_parameters - computed: true, optional: true, required: false
    private _prestoParameters = new PrestoParametersPropertyOutputReference(this, "presto_parameters");
    public get prestoParameters() {
        return this._prestoParameters;
    }
    public putPrestoParameters(value: PrestoParametersProperty) {
        this._prestoParameters.internalValue = value;
    }
    public resetPrestoParameters() {
        this._prestoParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prestoParametersInput() {
        return this._prestoParameters.internalValue;
    }

    // rds_parameters - computed: true, optional: true, required: false
    private _rdsParameters = new RdsParametersPropertyOutputReference(this, "rds_parameters");
    public get rdsParameters() {
        return this._rdsParameters;
    }
    public putRdsParameters(value: RdsParametersProperty) {
        this._rdsParameters.internalValue = value;
    }
    public resetRdsParameters() {
        this._rdsParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsParametersInput() {
        return this._rdsParameters.internalValue;
    }

    // redshift_parameters - computed: true, optional: true, required: false
    private _redshiftParameters = new RedshiftParametersPropertyOutputReference(this, "redshift_parameters");
    public get redshiftParameters() {
        return this._redshiftParameters;
    }
    public putRedshiftParameters(value: RedshiftParametersProperty) {
        this._redshiftParameters.internalValue = value;
    }
    public resetRedshiftParameters() {
        this._redshiftParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftParametersInput() {
        return this._redshiftParameters.internalValue;
    }

    // s3_parameters - computed: true, optional: true, required: false
    private _s3Parameters = new S3ParametersPropertyOutputReference(this, "s3_parameters");
    public get s3Parameters() {
        return this._s3Parameters;
    }
    public putS3Parameters(value: S3ParametersProperty) {
        this._s3Parameters.internalValue = value;
    }
    public resetS3Parameters() {
        this._s3Parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ParametersInput() {
        return this._s3Parameters.internalValue;
    }

    // s3_tables_parameters - computed: true, optional: true, required: false
    private _s3TablesParameters = new S3TablesParametersPropertyOutputReference(this, "s3_tables_parameters");
    public get s3TablesParameters() {
        return this._s3TablesParameters;
    }
    public putS3TablesParameters(value: S3TablesParametersProperty) {
        this._s3TablesParameters.internalValue = value;
    }
    public resetS3TablesParameters() {
        this._s3TablesParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3TablesParametersInput() {
        return this._s3TablesParameters.internalValue;
    }

    // snowflake_parameters - computed: true, optional: true, required: false
    private _snowflakeParameters = new SnowflakeParametersPropertyOutputReference(this, "snowflake_parameters");
    public get snowflakeParameters() {
        return this._snowflakeParameters;
    }
    public putSnowflakeParameters(value: SnowflakeParametersProperty) {
        this._snowflakeParameters.internalValue = value;
    }
    public resetSnowflakeParameters() {
        this._snowflakeParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snowflakeParametersInput() {
        return this._snowflakeParameters.internalValue;
    }

    // spark_parameters - computed: true, optional: true, required: false
    private _sparkParameters = new SparkParametersPropertyOutputReference(this, "spark_parameters");
    public get sparkParameters() {
        return this._sparkParameters;
    }
    public putSparkParameters(value: SparkParametersProperty) {
        this._sparkParameters.internalValue = value;
    }
    public resetSparkParameters() {
        this._sparkParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sparkParametersInput() {
        return this._sparkParameters.internalValue;
    }

    // sql_server_parameters - computed: true, optional: true, required: false
    private _sqlServerParameters = new SqlServerParametersPropertyOutputReference(this, "sql_server_parameters");
    public get sqlServerParameters() {
        return this._sqlServerParameters;
    }
    public putSqlServerParameters(value: SqlServerParametersProperty) {
        this._sqlServerParameters.internalValue = value;
    }
    public resetSqlServerParameters() {
        this._sqlServerParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlServerParametersInput() {
        return this._sqlServerParameters.internalValue;
    }

    // starburst_parameters - computed: true, optional: true, required: false
    private _starburstParameters = new StarburstParametersPropertyOutputReference(this, "starburst_parameters");
    public get starburstParameters() {
        return this._starburstParameters;
    }
    public putStarburstParameters(value: StarburstParametersProperty) {
        this._starburstParameters.internalValue = value;
    }
    public resetStarburstParameters() {
        this._starburstParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get starburstParametersInput() {
        return this._starburstParameters.internalValue;
    }

    // teradata_parameters - computed: true, optional: true, required: false
    private _teradataParameters = new TeradataParametersPropertyOutputReference(this, "teradata_parameters");
    public get teradataParameters() {
        return this._teradataParameters;
    }
    public putTeradataParameters(value: TeradataParametersProperty) {
        this._teradataParameters.internalValue = value;
    }
    public resetTeradataParameters() {
        this._teradataParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get teradataParametersInput() {
        return this._teradataParameters.internalValue;
    }

    // trino_parameters - computed: true, optional: true, required: false
    private _trinoParameters = new TrinoParametersPropertyOutputReference(this, "trino_parameters");
    public get trinoParameters() {
        return this._trinoParameters;
    }
    public putTrinoParameters(value: TrinoParametersProperty) {
        this._trinoParameters.internalValue = value;
    }
    public resetTrinoParameters() {
        this._trinoParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trinoParametersInput() {
        return this._trinoParameters.internalValue;
    }
}

export class DataSourceParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : DataSourceParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): DataSourceParametersPropertyOutputReference {
        return new DataSourceParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersProperty {
    /**
    * <p>The OpenSearch domain.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#domain CcDataSource#domain}
    */
    readonly domain?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
        }
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersProperty {
    /**
    * <p>The OpenSearch domain.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#domain CcDataSource#domain}
    */
    readonly domain?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
        }
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationProperty {
    /**
    * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#enable_identity_propagation CcDataSource#enable_identity_propagation}
    */
    readonly enableIdentityPropagation?: boolean | cdktn.IResolvable;
}
export class CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableIdentityPropagation !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableIdentityPropagation = this._enableIdentityPropagation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableIdentityPropagation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableIdentityPropagation = value.enableIdentityPropagation;
        }
    }

    // enable_identity_propagation - computed: true, optional: true, required: false
    private _enableIdentityPropagation?: boolean | cdktn.IResolvable; 
    public get enableIdentityPropagation() {
        return this.getBooleanAttribute('enable_identity_propagation');
    }
    public set enableIdentityPropagation(value: boolean | cdktn.IResolvable) {
        this._enableIdentityPropagation = value;
    }
    public resetEnableIdentityPropagation() {
        this._enableIdentityPropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableIdentityPropagationInput() {
        return this._enableIdentityPropagation;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersProperty {
    /**
    * <p>The parameters for an IAM Identity Center configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_center_configuration CcDataSource#identity_center_configuration}
    */
    readonly identityCenterConfiguration?: CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationProperty;
    /**
    * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#role_arn CcDataSource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * <p>The workgroup that Amazon Athena uses.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#work_group CcDataSource#work_group}
    */
    readonly workGroup?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identityCenterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._workGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.workGroup = this._workGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityCenterConfiguration.internalValue = undefined;
            this._roleArn = undefined;
            this._workGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
            this._roleArn = value.roleArn;
            this._workGroup = value.workGroup;
        }
    }

    // identity_center_configuration - computed: true, optional: true, required: false
    private _identityCenterConfiguration = new CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationPropertyOutputReference(this, "identity_center_configuration");
    public get identityCenterConfiguration() {
        return this._identityCenterConfiguration;
    }
    public putIdentityCenterConfiguration(value: CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationProperty) {
        this._identityCenterConfiguration.internalValue = value;
    }
    public resetIdentityCenterConfiguration() {
        this._identityCenterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityCenterConfigurationInput() {
        return this._identityCenterConfiguration.internalValue;
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

    // work_group - computed: true, optional: true, required: false
    private _workGroup?: string; 
    public get workGroup() {
        return this.getStringAttribute('work_group');
    }
    public set workGroup(value: string) {
        this._workGroup = value;
    }
    public resetWorkGroup() {
        this._workGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workGroupInput() {
        return this._workGroup;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersAuroraParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class CredentialsCredentialPairAlternateDataSourceParametersAuroraParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersAuroraParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersAuroraParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersProperty {
    /**
    * <p>The Amazon Aurora PostgreSQL database to connect to.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>The port that Amazon Aurora PostgreSQL is listening on.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class CredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersProperty {
    /**
    * <p>The host name of the Databricks data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>The port for the Databricks data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
    /**
    * <p>The HTTP path of the Databricks data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#sql_endpoint_path CcDataSource#sql_endpoint_path}
    */
    readonly sqlEndpointPath?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._sqlEndpointPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlEndpointPath = this._sqlEndpointPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._port = undefined;
            this._sqlEndpointPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._port = value.port;
            this._sqlEndpointPath = value.sqlEndpointPath;
        }
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // sql_endpoint_path - computed: true, optional: true, required: false
    private _sqlEndpointPath?: string; 
    public get sqlEndpointPath() {
        return this.getStringAttribute('sql_endpoint_path');
    }
    public set sqlEndpointPath(value: string) {
        this._sqlEndpointPath = value;
    }
    public resetSqlEndpointPath() {
        this._sqlEndpointPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlEndpointPathInput() {
        return this._sqlEndpointPath;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class CredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersMySqlParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class CredentialsCredentialPairAlternateDataSourceParametersMySqlParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersMySqlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersMySqlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersOracleParametersProperty {
    /**
    * <p>The database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>An Oracle host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>The port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#use_service_name CcDataSource#use_service_name}
    */
    readonly useServiceName?: boolean | cdktn.IResolvable;
}
export class CredentialsCredentialPairAlternateDataSourceParametersOracleParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersOracleParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._useServiceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.useServiceName = this._useServiceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersOracleParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
            this._useServiceName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
            this._useServiceName = value.useServiceName;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // use_service_name - computed: true, optional: true, required: false
    private _useServiceName?: boolean | cdktn.IResolvable; 
    public get useServiceName() {
        return this.getBooleanAttribute('use_service_name');
    }
    public set useServiceName(value: boolean | cdktn.IResolvable) {
        this._useServiceName = value;
    }
    public resetUseServiceName() {
        this._useServiceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useServiceNameInput() {
        return this._useServiceName;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class CredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersPrestoParametersProperty {
    /**
    * <p>Catalog.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#catalog CcDataSource#catalog}
    */
    readonly catalog?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class CredentialsCredentialPairAlternateDataSourceParametersPrestoParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersPrestoParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalog !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersPrestoParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalog = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalog = value.catalog;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string; 
    public get catalog() {
        return this.getStringAttribute('catalog');
    }
    public set catalog(value: string) {
        this._catalog = value;
    }
    public resetCatalog() {
        this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersRdsParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Instance ID.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#instance_id CcDataSource#instance_id}
    */
    readonly instanceId?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersRdsParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersRdsParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._instanceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceId = this._instanceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersRdsParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._instanceId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._instanceId = value.instanceId;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // instance_id - computed: true, optional: true, required: false
    private _instanceId?: string; 
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
    public resetInstanceId() {
        this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
        return this._instanceId;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersProperty {
    /**
    * <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Amazon QuickSight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#auto_create_database_user CcDataSource#auto_create_database_user}
    */
    readonly autoCreateDatabaseUser?: boolean | cdktn.IResolvable;
    /**
    * <p>A list of groups whose permissions will be granted to Amazon QuickSight to access the cluster. These permissions are combined with the permissions granted to Amazon QuickSight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database_groups CcDataSource#database_groups}
    */
    readonly databaseGroups?: string[];
    /**
    * <p>The user whose permissions and group memberships will be used by Amazon QuickSight to access the cluster. If this user already exists in your database, Amazon QuickSight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database_user CcDataSource#database_user}
    */
    readonly databaseUser?: string;
    /**
    * <p>Use the <code>RoleArn</code> structure to allow Amazon QuickSight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Amazon QuickSight. The role's trust policy must allow the Amazon QuickSight service principal to assume the role.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#role_arn CcDataSource#role_arn}
    */
    readonly roleArn?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoCreateDatabaseUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoCreateDatabaseUser = this._autoCreateDatabaseUser;
        }
        if (this._databaseGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseGroups = this._databaseGroups;
        }
        if (this._databaseUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseUser = this._databaseUser;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoCreateDatabaseUser = undefined;
            this._databaseGroups = undefined;
            this._databaseUser = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoCreateDatabaseUser = value.autoCreateDatabaseUser;
            this._databaseGroups = value.databaseGroups;
            this._databaseUser = value.databaseUser;
            this._roleArn = value.roleArn;
        }
    }

    // auto_create_database_user - computed: true, optional: true, required: false
    private _autoCreateDatabaseUser?: boolean | cdktn.IResolvable; 
    public get autoCreateDatabaseUser() {
        return this.getBooleanAttribute('auto_create_database_user');
    }
    public set autoCreateDatabaseUser(value: boolean | cdktn.IResolvable) {
        this._autoCreateDatabaseUser = value;
    }
    public resetAutoCreateDatabaseUser() {
        this._autoCreateDatabaseUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoCreateDatabaseUserInput() {
        return this._autoCreateDatabaseUser;
    }

    // database_groups - computed: true, optional: true, required: false
    private _databaseGroups?: string[]; 
    public get databaseGroups() {
        return this.getListAttribute('database_groups');
    }
    public set databaseGroups(value: string[]) {
        this._databaseGroups = value;
    }
    public resetDatabaseGroups() {
        this._databaseGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseGroupsInput() {
        return this._databaseGroups;
    }

    // database_user - computed: true, optional: true, required: false
    private _databaseUser?: string; 
    public get databaseUser() {
        return this.getStringAttribute('database_user');
    }
    public set databaseUser(value: string) {
        this._databaseUser = value;
    }
    public resetDatabaseUser() {
        this._databaseUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseUserInput() {
        return this._databaseUser;
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
}
export interface CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty {
    /**
    * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#enable_identity_propagation CcDataSource#enable_identity_propagation}
    */
    readonly enableIdentityPropagation?: boolean | cdktn.IResolvable;
}
export class CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableIdentityPropagation !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableIdentityPropagation = this._enableIdentityPropagation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableIdentityPropagation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableIdentityPropagation = value.enableIdentityPropagation;
        }
    }

    // enable_identity_propagation - computed: true, optional: true, required: false
    private _enableIdentityPropagation?: boolean | cdktn.IResolvable; 
    public get enableIdentityPropagation() {
        return this.getBooleanAttribute('enable_identity_propagation');
    }
    public set enableIdentityPropagation(value: boolean | cdktn.IResolvable) {
        this._enableIdentityPropagation = value;
    }
    public resetEnableIdentityPropagation() {
        this._enableIdentityPropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableIdentityPropagationInput() {
        return this._enableIdentityPropagation;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersProperty {
    /**
    * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
    *             provided.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#cluster_id CcDataSource#cluster_id}
    */
    readonly clusterId?: string;
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>A structure that grants Amazon QuickSight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
    *                <code>GetClusterCredentials</code>
    *             </a>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#iam_parameters CcDataSource#iam_parameters}
    */
    readonly iamParameters?: CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersProperty;
    /**
    * <p>The parameters for an IAM Identity Center configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_center_configuration CcDataSource#identity_center_configuration}
    */
    readonly identityCenterConfiguration?: CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty;
    /**
    * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterId = this._clusterId;
        }
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._iamParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamParameters = this._iamParameters?.internalValue;
        }
        if (this._identityCenterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterId = undefined;
            this._database = undefined;
            this._host = undefined;
            this._iamParameters.internalValue = undefined;
            this._identityCenterConfiguration.internalValue = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterId = value.clusterId;
            this._database = value.database;
            this._host = value.host;
            this._iamParameters.internalValue = value.iamParameters;
            this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
            this._port = value.port;
        }
    }

    // cluster_id - computed: true, optional: true, required: false
    private _clusterId?: string; 
    public get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
        this._clusterId = value;
    }
    public resetClusterId() {
        this._clusterId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
        return this._clusterId;
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // iam_parameters - computed: true, optional: true, required: false
    private _iamParameters = new CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersPropertyOutputReference(this, "iam_parameters");
    public get iamParameters() {
        return this._iamParameters;
    }
    public putIamParameters(value: CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersProperty) {
        this._iamParameters.internalValue = value;
    }
    public resetIamParameters() {
        this._iamParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamParametersInput() {
        return this._iamParameters.internalValue;
    }

    // identity_center_configuration - computed: true, optional: true, required: false
    private _identityCenterConfiguration = new CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyOutputReference(this, "identity_center_configuration");
    public get identityCenterConfiguration() {
        return this._identityCenterConfiguration;
    }
    public putIdentityCenterConfiguration(value: CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty) {
        this._identityCenterConfiguration.internalValue = value;
    }
    public resetIdentityCenterConfiguration() {
        this._identityCenterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityCenterConfigurationInput() {
        return this._identityCenterConfiguration.internalValue;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationProperty {
    /**
    * <p>Amazon S3 bucket.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#bucket CcDataSource#bucket}
    */
    readonly bucket?: string;
    /**
    * <p>Amazon S3 key that identifies an object.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#key CcDataSource#key}
    */
    readonly key?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
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
}
export interface CredentialsCredentialPairAlternateDataSourceParametersS3ParametersProperty {
    /**
    * <p>Amazon S3 manifest file location.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#manifest_file_location CcDataSource#manifest_file_location}
    */
    readonly manifestFileLocation?: CredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationProperty;
    /**
    * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#role_arn CcDataSource#role_arn}
    */
    readonly roleArn?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersS3ParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersS3ParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._manifestFileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestFileLocation = this._manifestFileLocation?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersS3ParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._manifestFileLocation.internalValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._manifestFileLocation.internalValue = value.manifestFileLocation;
            this._roleArn = value.roleArn;
        }
    }

    // manifest_file_location - computed: true, optional: true, required: false
    private _manifestFileLocation = new CredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationPropertyOutputReference(this, "manifest_file_location");
    public get manifestFileLocation() {
        return this._manifestFileLocation;
    }
    public putManifestFileLocation(value: CredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationProperty) {
        this._manifestFileLocation.internalValue = value;
    }
    public resetManifestFileLocation() {
        this._manifestFileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestFileLocationInput() {
        return this._manifestFileLocation.internalValue;
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
}
export interface CredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#table_bucket_arn CcDataSource#table_bucket_arn}
    */
    readonly tableBucketArn?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tableBucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableBucketArn = this._tableBucketArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tableBucketArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tableBucketArn = value.tableBucketArn;
        }
    }

    // table_bucket_arn - computed: true, optional: true, required: false
    private _tableBucketArn?: string; 
    public get tableBucketArn() {
        return this.getStringAttribute('table_bucket_arn');
    }
    public set tableBucketArn(value: string) {
        this._tableBucketArn = value;
    }
    public resetTableBucketArn() {
        this._tableBucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableBucketArnInput() {
        return this._tableBucketArn;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty {
    /**
    * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#vpc_connection_arn CcDataSource#vpc_connection_arn}
    */
    readonly vpcConnectionArn?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcConnectionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = value.vpcConnectionArn;
        }
    }

    // vpc_connection_arn - computed: true, optional: true, required: false
    private _vpcConnectionArn?: string; 
    public get vpcConnectionArn() {
        return this.getStringAttribute('vpc_connection_arn');
    }
    public set vpcConnectionArn(value: string) {
        this._vpcConnectionArn = value;
    }
    public resetVpcConnectionArn() {
        this._vpcConnectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConnectionArnInput() {
        return this._vpcConnectionArn;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_provider_resource_uri CcDataSource#identity_provider_resource_uri}
    */
    readonly identityProviderResourceUri?: string;
    /**
    * <p>VPC connection properties.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_provider_vpc_connection_properties CcDataSource#identity_provider_vpc_connection_properties}
    */
    readonly identityProviderVpcConnectionProperties?: CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#o_auth_scope CcDataSource#o_auth_scope}
    */
    readonly oAuthScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#token_provider_url CcDataSource#token_provider_url}
    */
    readonly tokenProviderUrl?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identityProviderResourceUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderResourceUri = this._identityProviderResourceUri;
        }
        if (this._identityProviderVpcConnectionProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderVpcConnectionProperties = this._identityProviderVpcConnectionProperties?.internalValue;
        }
        if (this._oAuthScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthScope = this._oAuthScope;
        }
        if (this._tokenProviderUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenProviderUrl = this._tokenProviderUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderResourceUri = undefined;
            this._identityProviderVpcConnectionProperties.internalValue = undefined;
            this._oAuthScope = undefined;
            this._tokenProviderUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderResourceUri = value.identityProviderResourceUri;
            this._identityProviderVpcConnectionProperties.internalValue = value.identityProviderVpcConnectionProperties;
            this._oAuthScope = value.oAuthScope;
            this._tokenProviderUrl = value.tokenProviderUrl;
        }
    }

    // identity_provider_resource_uri - computed: true, optional: true, required: false
    private _identityProviderResourceUri?: string; 
    public get identityProviderResourceUri() {
        return this.getStringAttribute('identity_provider_resource_uri');
    }
    public set identityProviderResourceUri(value: string) {
        this._identityProviderResourceUri = value;
    }
    public resetIdentityProviderResourceUri() {
        this._identityProviderResourceUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderResourceUriInput() {
        return this._identityProviderResourceUri;
    }

    // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
    private _identityProviderVpcConnectionProperties = new CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyOutputReference(this, "identity_provider_vpc_connection_properties");
    public get identityProviderVpcConnectionProperties() {
        return this._identityProviderVpcConnectionProperties;
    }
    public putIdentityProviderVpcConnectionProperties(value: CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty) {
        this._identityProviderVpcConnectionProperties.internalValue = value;
    }
    public resetIdentityProviderVpcConnectionProperties() {
        this._identityProviderVpcConnectionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderVpcConnectionPropertiesInput() {
        return this._identityProviderVpcConnectionProperties.internalValue;
    }

    // o_auth_scope - computed: true, optional: true, required: false
    private _oAuthScope?: string; 
    public get oAuthScope() {
        return this.getStringAttribute('o_auth_scope');
    }
    public set oAuthScope(value: string) {
        this._oAuthScope = value;
    }
    public resetOAuthScope() {
        this._oAuthScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthScopeInput() {
        return this._oAuthScope;
    }

    // token_provider_url - computed: true, optional: true, required: false
    private _tokenProviderUrl?: string; 
    public get tokenProviderUrl() {
        return this.getStringAttribute('token_provider_url');
    }
    public set tokenProviderUrl(value: string) {
        this._tokenProviderUrl = value;
    }
    public resetTokenProviderUrl() {
        this._tokenProviderUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenProviderUrlInput() {
        return this._tokenProviderUrl;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#authentication_type CcDataSource#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database_access_control_role CcDataSource#database_access_control_role}
    */
    readonly databaseAccessControlRole?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#o_auth_parameters CcDataSource#o_auth_parameters}
    */
    readonly oAuthParameters?: CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersProperty;
    /**
    * <p>Warehouse.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#warehouse CcDataSource#warehouse}
    */
    readonly warehouse?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._databaseAccessControlRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseAccessControlRole = this._databaseAccessControlRole;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._oAuthParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
        }
        if (this._warehouse !== undefined) {
            hasAnyValues = true;
            internalValueResult.warehouse = this._warehouse;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationType = undefined;
            this._database = undefined;
            this._databaseAccessControlRole = undefined;
            this._host = undefined;
            this._oAuthParameters.internalValue = undefined;
            this._warehouse = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationType = value.authenticationType;
            this._database = value.database;
            this._databaseAccessControlRole = value.databaseAccessControlRole;
            this._host = value.host;
            this._oAuthParameters.internalValue = value.oAuthParameters;
            this._warehouse = value.warehouse;
        }
    }

    // authentication_type - computed: true, optional: true, required: false
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    public resetAuthenticationType() {
        this._authenticationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // database_access_control_role - computed: true, optional: true, required: false
    private _databaseAccessControlRole?: string; 
    public get databaseAccessControlRole() {
        return this.getStringAttribute('database_access_control_role');
    }
    public set databaseAccessControlRole(value: string) {
        this._databaseAccessControlRole = value;
    }
    public resetDatabaseAccessControlRole() {
        this._databaseAccessControlRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseAccessControlRoleInput() {
        return this._databaseAccessControlRole;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // o_auth_parameters - computed: true, optional: true, required: false
    private _oAuthParameters = new CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersPropertyOutputReference(this, "o_auth_parameters");
    public get oAuthParameters() {
        return this._oAuthParameters;
    }
    public putOAuthParameters(value: CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersProperty) {
        this._oAuthParameters.internalValue = value;
    }
    public resetOAuthParameters() {
        this._oAuthParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthParametersInput() {
        return this._oAuthParameters.internalValue;
    }

    // warehouse - computed: true, optional: true, required: false
    private _warehouse?: string; 
    public get warehouse() {
        return this.getStringAttribute('warehouse');
    }
    public set warehouse(value: string) {
        this._warehouse = value;
    }
    public resetWarehouse() {
        this._warehouse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warehouseInput() {
        return this._warehouse;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersSparkParametersProperty {
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class CredentialsCredentialPairAlternateDataSourceParametersSparkParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersSparkParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersSparkParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class CredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty {
    /**
    * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#vpc_connection_arn CcDataSource#vpc_connection_arn}
    */
    readonly vpcConnectionArn?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcConnectionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = value.vpcConnectionArn;
        }
    }

    // vpc_connection_arn - computed: true, optional: true, required: false
    private _vpcConnectionArn?: string; 
    public get vpcConnectionArn() {
        return this.getStringAttribute('vpc_connection_arn');
    }
    public set vpcConnectionArn(value: string) {
        this._vpcConnectionArn = value;
    }
    public resetVpcConnectionArn() {
        this._vpcConnectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConnectionArnInput() {
        return this._vpcConnectionArn;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_provider_resource_uri CcDataSource#identity_provider_resource_uri}
    */
    readonly identityProviderResourceUri?: string;
    /**
    * <p>VPC connection properties.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_provider_vpc_connection_properties CcDataSource#identity_provider_vpc_connection_properties}
    */
    readonly identityProviderVpcConnectionProperties?: CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#o_auth_scope CcDataSource#o_auth_scope}
    */
    readonly oAuthScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#token_provider_url CcDataSource#token_provider_url}
    */
    readonly tokenProviderUrl?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identityProviderResourceUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderResourceUri = this._identityProviderResourceUri;
        }
        if (this._identityProviderVpcConnectionProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderVpcConnectionProperties = this._identityProviderVpcConnectionProperties?.internalValue;
        }
        if (this._oAuthScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthScope = this._oAuthScope;
        }
        if (this._tokenProviderUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenProviderUrl = this._tokenProviderUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderResourceUri = undefined;
            this._identityProviderVpcConnectionProperties.internalValue = undefined;
            this._oAuthScope = undefined;
            this._tokenProviderUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderResourceUri = value.identityProviderResourceUri;
            this._identityProviderVpcConnectionProperties.internalValue = value.identityProviderVpcConnectionProperties;
            this._oAuthScope = value.oAuthScope;
            this._tokenProviderUrl = value.tokenProviderUrl;
        }
    }

    // identity_provider_resource_uri - computed: true, optional: true, required: false
    private _identityProviderResourceUri?: string; 
    public get identityProviderResourceUri() {
        return this.getStringAttribute('identity_provider_resource_uri');
    }
    public set identityProviderResourceUri(value: string) {
        this._identityProviderResourceUri = value;
    }
    public resetIdentityProviderResourceUri() {
        this._identityProviderResourceUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderResourceUriInput() {
        return this._identityProviderResourceUri;
    }

    // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
    private _identityProviderVpcConnectionProperties = new CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyOutputReference(this, "identity_provider_vpc_connection_properties");
    public get identityProviderVpcConnectionProperties() {
        return this._identityProviderVpcConnectionProperties;
    }
    public putIdentityProviderVpcConnectionProperties(value: CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty) {
        this._identityProviderVpcConnectionProperties.internalValue = value;
    }
    public resetIdentityProviderVpcConnectionProperties() {
        this._identityProviderVpcConnectionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderVpcConnectionPropertiesInput() {
        return this._identityProviderVpcConnectionProperties.internalValue;
    }

    // o_auth_scope - computed: true, optional: true, required: false
    private _oAuthScope?: string; 
    public get oAuthScope() {
        return this.getStringAttribute('o_auth_scope');
    }
    public set oAuthScope(value: string) {
        this._oAuthScope = value;
    }
    public resetOAuthScope() {
        this._oAuthScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthScopeInput() {
        return this._oAuthScope;
    }

    // token_provider_url - computed: true, optional: true, required: false
    private _tokenProviderUrl?: string; 
    public get tokenProviderUrl() {
        return this.getStringAttribute('token_provider_url');
    }
    public set tokenProviderUrl(value: string) {
        this._tokenProviderUrl = value;
    }
    public resetTokenProviderUrl() {
        this._tokenProviderUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenProviderUrlInput() {
        return this._tokenProviderUrl;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#authentication_type CcDataSource#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * <p>The catalog name for the Starburst data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#catalog CcDataSource#catalog}
    */
    readonly catalog?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database_access_control_role CcDataSource#database_access_control_role}
    */
    readonly databaseAccessControlRole?: string;
    /**
    * <p>The host name of the Starburst data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#o_auth_parameters CcDataSource#o_auth_parameters}
    */
    readonly oAuthParameters?: CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersProperty;
    /**
    * <p>The port for the Starburst data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#product_type CcDataSource#product_type}
    */
    readonly productType?: string;
}
export class CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        if (this._catalog !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._databaseAccessControlRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseAccessControlRole = this._databaseAccessControlRole;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._oAuthParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._productType !== undefined) {
            hasAnyValues = true;
            internalValueResult.productType = this._productType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationType = undefined;
            this._catalog = undefined;
            this._databaseAccessControlRole = undefined;
            this._host = undefined;
            this._oAuthParameters.internalValue = undefined;
            this._port = undefined;
            this._productType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationType = value.authenticationType;
            this._catalog = value.catalog;
            this._databaseAccessControlRole = value.databaseAccessControlRole;
            this._host = value.host;
            this._oAuthParameters.internalValue = value.oAuthParameters;
            this._port = value.port;
            this._productType = value.productType;
        }
    }

    // authentication_type - computed: true, optional: true, required: false
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    public resetAuthenticationType() {
        this._authenticationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string; 
    public get catalog() {
        return this.getStringAttribute('catalog');
    }
    public set catalog(value: string) {
        this._catalog = value;
    }
    public resetCatalog() {
        this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog;
    }

    // database_access_control_role - computed: true, optional: true, required: false
    private _databaseAccessControlRole?: string; 
    public get databaseAccessControlRole() {
        return this.getStringAttribute('database_access_control_role');
    }
    public set databaseAccessControlRole(value: string) {
        this._databaseAccessControlRole = value;
    }
    public resetDatabaseAccessControlRole() {
        this._databaseAccessControlRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseAccessControlRoleInput() {
        return this._databaseAccessControlRole;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // o_auth_parameters - computed: true, optional: true, required: false
    private _oAuthParameters = new CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersPropertyOutputReference(this, "o_auth_parameters");
    public get oAuthParameters() {
        return this._oAuthParameters;
    }
    public putOAuthParameters(value: CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersProperty) {
        this._oAuthParameters.internalValue = value;
    }
    public resetOAuthParameters() {
        this._oAuthParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthParametersInput() {
        return this._oAuthParameters.internalValue;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // product_type - computed: true, optional: true, required: false
    private _productType?: string; 
    public get productType() {
        return this.getStringAttribute('product_type');
    }
    public set productType(value: string) {
        this._productType = value;
    }
    public resetProductType() {
        this._productType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productTypeInput() {
        return this._productType;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersTeradataParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class CredentialsCredentialPairAlternateDataSourceParametersTeradataParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersTeradataParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersTeradataParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface CredentialsCredentialPairAlternateDataSourceParametersTrinoParametersProperty {
    /**
    * <p>The catalog name for the Trino data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#catalog CcDataSource#catalog}
    */
    readonly catalog?: string;
    /**
    * <p>The host name of the Trino data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>The port for the Trino data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class CredentialsCredentialPairAlternateDataSourceParametersTrinoParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsCredentialPairAlternateDataSourceParametersTrinoParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalog !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsCredentialPairAlternateDataSourceParametersTrinoParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalog = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalog = value.catalog;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string; 
    public get catalog() {
        return this.getStringAttribute('catalog');
    }
    public set catalog(value: string) {
        this._catalog = value;
    }
    public resetCatalog() {
        this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface AlternateDataSourceParametersProperty {
    /**
    * <p>The parameters for OpenSearch.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#amazon_elasticsearch_parameters CcDataSource#amazon_elasticsearch_parameters}
    */
    readonly amazonElasticsearchParameters?: CredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersProperty;
    /**
    * <p>The parameters for OpenSearch.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#amazon_open_search_parameters CcDataSource#amazon_open_search_parameters}
    */
    readonly amazonOpenSearchParameters?: CredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersProperty;
    /**
    * <p>Parameters for Amazon Athena.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#athena_parameters CcDataSource#athena_parameters}
    */
    readonly athenaParameters?: CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersProperty;
    /**
    * <p>Parameters for Amazon Aurora.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#aurora_parameters CcDataSource#aurora_parameters}
    */
    readonly auroraParameters?: CredentialsCredentialPairAlternateDataSourceParametersAuroraParametersProperty;
    /**
    * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#aurora_postgre_sql_parameters CcDataSource#aurora_postgre_sql_parameters}
    */
    readonly auroraPostgreSqlParameters?: CredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersProperty;
    /**
    * <p>The parameters that are required to connect to a Databricks data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#databricks_parameters CcDataSource#databricks_parameters}
    */
    readonly databricksParameters?: CredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersProperty;
    /**
    * <p>The parameters for MariaDB.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#maria_db_parameters CcDataSource#maria_db_parameters}
    */
    readonly mariaDbParameters?: CredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersProperty;
    /**
    * <p>The parameters for MySQL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#my_sql_parameters CcDataSource#my_sql_parameters}
    */
    readonly mySqlParameters?: CredentialsCredentialPairAlternateDataSourceParametersMySqlParametersProperty;
    /**
    * <p>The parameters for Oracle.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#oracle_parameters CcDataSource#oracle_parameters}
    */
    readonly oracleParameters?: CredentialsCredentialPairAlternateDataSourceParametersOracleParametersProperty;
    /**
    * <p>The parameters for PostgreSQL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#postgre_sql_parameters CcDataSource#postgre_sql_parameters}
    */
    readonly postgreSqlParameters?: CredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersProperty;
    /**
    * <p>The parameters for Presto.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#presto_parameters CcDataSource#presto_parameters}
    */
    readonly prestoParameters?: CredentialsCredentialPairAlternateDataSourceParametersPrestoParametersProperty;
    /**
    * <p>The parameters for Amazon RDS.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#rds_parameters CcDataSource#rds_parameters}
    */
    readonly rdsParameters?: CredentialsCredentialPairAlternateDataSourceParametersRdsParametersProperty;
    /**
    * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
    *             <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#redshift_parameters CcDataSource#redshift_parameters}
    */
    readonly redshiftParameters?: CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersProperty;
    /**
    * <p>The parameters for S3.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#s3_parameters CcDataSource#s3_parameters}
    */
    readonly s3Parameters?: CredentialsCredentialPairAlternateDataSourceParametersS3ParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#s3_tables_parameters CcDataSource#s3_tables_parameters}
    */
    readonly s3TablesParameters?: CredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersProperty;
    /**
    * <p>The parameters for Snowflake.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#snowflake_parameters CcDataSource#snowflake_parameters}
    */
    readonly snowflakeParameters?: CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersProperty;
    /**
    * <p>The parameters for Spark.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#spark_parameters CcDataSource#spark_parameters}
    */
    readonly sparkParameters?: CredentialsCredentialPairAlternateDataSourceParametersSparkParametersProperty;
    /**
    * <p>The parameters for SQL Server.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#sql_server_parameters CcDataSource#sql_server_parameters}
    */
    readonly sqlServerParameters?: CredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersProperty;
    /**
    * <p>The parameters that are required to connect to a Starburst data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#starburst_parameters CcDataSource#starburst_parameters}
    */
    readonly starburstParameters?: CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersProperty;
    /**
    * <p>The parameters for Teradata.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#teradata_parameters CcDataSource#teradata_parameters}
    */
    readonly teradataParameters?: CredentialsCredentialPairAlternateDataSourceParametersTeradataParametersProperty;
    /**
    * <p>The parameters that are required to connect to a Trino data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#trino_parameters CcDataSource#trino_parameters}
    */
    readonly trinoParameters?: CredentialsCredentialPairAlternateDataSourceParametersTrinoParametersProperty;
}
export class AlternateDataSourceParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AlternateDataSourceParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amazonElasticsearchParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonElasticsearchParameters = this._amazonElasticsearchParameters?.internalValue;
        }
        if (this._amazonOpenSearchParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonOpenSearchParameters = this._amazonOpenSearchParameters?.internalValue;
        }
        if (this._athenaParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.athenaParameters = this._athenaParameters?.internalValue;
        }
        if (this._auroraParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.auroraParameters = this._auroraParameters?.internalValue;
        }
        if (this._auroraPostgreSqlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.auroraPostgreSqlParameters = this._auroraPostgreSqlParameters?.internalValue;
        }
        if (this._databricksParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.databricksParameters = this._databricksParameters?.internalValue;
        }
        if (this._mariaDbParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mariaDbParameters = this._mariaDbParameters?.internalValue;
        }
        if (this._mySqlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mySqlParameters = this._mySqlParameters?.internalValue;
        }
        if (this._oracleParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oracleParameters = this._oracleParameters?.internalValue;
        }
        if (this._postgreSqlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.postgreSqlParameters = this._postgreSqlParameters?.internalValue;
        }
        if (this._prestoParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.prestoParameters = this._prestoParameters?.internalValue;
        }
        if (this._rdsParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsParameters = this._rdsParameters?.internalValue;
        }
        if (this._redshiftParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftParameters = this._redshiftParameters?.internalValue;
        }
        if (this._s3Parameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Parameters = this._s3Parameters?.internalValue;
        }
        if (this._s3TablesParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3TablesParameters = this._s3TablesParameters?.internalValue;
        }
        if (this._snowflakeParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snowflakeParameters = this._snowflakeParameters?.internalValue;
        }
        if (this._sparkParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sparkParameters = this._sparkParameters?.internalValue;
        }
        if (this._sqlServerParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlServerParameters = this._sqlServerParameters?.internalValue;
        }
        if (this._starburstParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.starburstParameters = this._starburstParameters?.internalValue;
        }
        if (this._teradataParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.teradataParameters = this._teradataParameters?.internalValue;
        }
        if (this._trinoParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trinoParameters = this._trinoParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlternateDataSourceParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amazonElasticsearchParameters.internalValue = undefined;
            this._amazonOpenSearchParameters.internalValue = undefined;
            this._athenaParameters.internalValue = undefined;
            this._auroraParameters.internalValue = undefined;
            this._auroraPostgreSqlParameters.internalValue = undefined;
            this._databricksParameters.internalValue = undefined;
            this._mariaDbParameters.internalValue = undefined;
            this._mySqlParameters.internalValue = undefined;
            this._oracleParameters.internalValue = undefined;
            this._postgreSqlParameters.internalValue = undefined;
            this._prestoParameters.internalValue = undefined;
            this._rdsParameters.internalValue = undefined;
            this._redshiftParameters.internalValue = undefined;
            this._s3Parameters.internalValue = undefined;
            this._s3TablesParameters.internalValue = undefined;
            this._snowflakeParameters.internalValue = undefined;
            this._sparkParameters.internalValue = undefined;
            this._sqlServerParameters.internalValue = undefined;
            this._starburstParameters.internalValue = undefined;
            this._teradataParameters.internalValue = undefined;
            this._trinoParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amazonElasticsearchParameters.internalValue = value.amazonElasticsearchParameters;
            this._amazonOpenSearchParameters.internalValue = value.amazonOpenSearchParameters;
            this._athenaParameters.internalValue = value.athenaParameters;
            this._auroraParameters.internalValue = value.auroraParameters;
            this._auroraPostgreSqlParameters.internalValue = value.auroraPostgreSqlParameters;
            this._databricksParameters.internalValue = value.databricksParameters;
            this._mariaDbParameters.internalValue = value.mariaDbParameters;
            this._mySqlParameters.internalValue = value.mySqlParameters;
            this._oracleParameters.internalValue = value.oracleParameters;
            this._postgreSqlParameters.internalValue = value.postgreSqlParameters;
            this._prestoParameters.internalValue = value.prestoParameters;
            this._rdsParameters.internalValue = value.rdsParameters;
            this._redshiftParameters.internalValue = value.redshiftParameters;
            this._s3Parameters.internalValue = value.s3Parameters;
            this._s3TablesParameters.internalValue = value.s3TablesParameters;
            this._snowflakeParameters.internalValue = value.snowflakeParameters;
            this._sparkParameters.internalValue = value.sparkParameters;
            this._sqlServerParameters.internalValue = value.sqlServerParameters;
            this._starburstParameters.internalValue = value.starburstParameters;
            this._teradataParameters.internalValue = value.teradataParameters;
            this._trinoParameters.internalValue = value.trinoParameters;
        }
    }

    // amazon_elasticsearch_parameters - computed: true, optional: true, required: false
    private _amazonElasticsearchParameters = new CredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersPropertyOutputReference(this, "amazon_elasticsearch_parameters");
    public get amazonElasticsearchParameters() {
        return this._amazonElasticsearchParameters;
    }
    public putAmazonElasticsearchParameters(value: CredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersProperty) {
        this._amazonElasticsearchParameters.internalValue = value;
    }
    public resetAmazonElasticsearchParameters() {
        this._amazonElasticsearchParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonElasticsearchParametersInput() {
        return this._amazonElasticsearchParameters.internalValue;
    }

    // amazon_open_search_parameters - computed: true, optional: true, required: false
    private _amazonOpenSearchParameters = new CredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersPropertyOutputReference(this, "amazon_open_search_parameters");
    public get amazonOpenSearchParameters() {
        return this._amazonOpenSearchParameters;
    }
    public putAmazonOpenSearchParameters(value: CredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersProperty) {
        this._amazonOpenSearchParameters.internalValue = value;
    }
    public resetAmazonOpenSearchParameters() {
        this._amazonOpenSearchParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonOpenSearchParametersInput() {
        return this._amazonOpenSearchParameters.internalValue;
    }

    // athena_parameters - computed: true, optional: true, required: false
    private _athenaParameters = new CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersPropertyOutputReference(this, "athena_parameters");
    public get athenaParameters() {
        return this._athenaParameters;
    }
    public putAthenaParameters(value: CredentialsCredentialPairAlternateDataSourceParametersAthenaParametersProperty) {
        this._athenaParameters.internalValue = value;
    }
    public resetAthenaParameters() {
        this._athenaParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get athenaParametersInput() {
        return this._athenaParameters.internalValue;
    }

    // aurora_parameters - computed: true, optional: true, required: false
    private _auroraParameters = new CredentialsCredentialPairAlternateDataSourceParametersAuroraParametersPropertyOutputReference(this, "aurora_parameters");
    public get auroraParameters() {
        return this._auroraParameters;
    }
    public putAuroraParameters(value: CredentialsCredentialPairAlternateDataSourceParametersAuroraParametersProperty) {
        this._auroraParameters.internalValue = value;
    }
    public resetAuroraParameters() {
        this._auroraParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auroraParametersInput() {
        return this._auroraParameters.internalValue;
    }

    // aurora_postgre_sql_parameters - computed: true, optional: true, required: false
    private _auroraPostgreSqlParameters = new CredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersPropertyOutputReference(this, "aurora_postgre_sql_parameters");
    public get auroraPostgreSqlParameters() {
        return this._auroraPostgreSqlParameters;
    }
    public putAuroraPostgreSqlParameters(value: CredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersProperty) {
        this._auroraPostgreSqlParameters.internalValue = value;
    }
    public resetAuroraPostgreSqlParameters() {
        this._auroraPostgreSqlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auroraPostgreSqlParametersInput() {
        return this._auroraPostgreSqlParameters.internalValue;
    }

    // databricks_parameters - computed: true, optional: true, required: false
    private _databricksParameters = new CredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersPropertyOutputReference(this, "databricks_parameters");
    public get databricksParameters() {
        return this._databricksParameters;
    }
    public putDatabricksParameters(value: CredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersProperty) {
        this._databricksParameters.internalValue = value;
    }
    public resetDatabricksParameters() {
        this._databricksParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databricksParametersInput() {
        return this._databricksParameters.internalValue;
    }

    // maria_db_parameters - computed: true, optional: true, required: false
    private _mariaDbParameters = new CredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersPropertyOutputReference(this, "maria_db_parameters");
    public get mariaDbParameters() {
        return this._mariaDbParameters;
    }
    public putMariaDbParameters(value: CredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersProperty) {
        this._mariaDbParameters.internalValue = value;
    }
    public resetMariaDbParameters() {
        this._mariaDbParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mariaDbParametersInput() {
        return this._mariaDbParameters.internalValue;
    }

    // my_sql_parameters - computed: true, optional: true, required: false
    private _mySqlParameters = new CredentialsCredentialPairAlternateDataSourceParametersMySqlParametersPropertyOutputReference(this, "my_sql_parameters");
    public get mySqlParameters() {
        return this._mySqlParameters;
    }
    public putMySqlParameters(value: CredentialsCredentialPairAlternateDataSourceParametersMySqlParametersProperty) {
        this._mySqlParameters.internalValue = value;
    }
    public resetMySqlParameters() {
        this._mySqlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mySqlParametersInput() {
        return this._mySqlParameters.internalValue;
    }

    // oracle_parameters - computed: true, optional: true, required: false
    private _oracleParameters = new CredentialsCredentialPairAlternateDataSourceParametersOracleParametersPropertyOutputReference(this, "oracle_parameters");
    public get oracleParameters() {
        return this._oracleParameters;
    }
    public putOracleParameters(value: CredentialsCredentialPairAlternateDataSourceParametersOracleParametersProperty) {
        this._oracleParameters.internalValue = value;
    }
    public resetOracleParameters() {
        this._oracleParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oracleParametersInput() {
        return this._oracleParameters.internalValue;
    }

    // postgre_sql_parameters - computed: true, optional: true, required: false
    private _postgreSqlParameters = new CredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersPropertyOutputReference(this, "postgre_sql_parameters");
    public get postgreSqlParameters() {
        return this._postgreSqlParameters;
    }
    public putPostgreSqlParameters(value: CredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersProperty) {
        this._postgreSqlParameters.internalValue = value;
    }
    public resetPostgreSqlParameters() {
        this._postgreSqlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postgreSqlParametersInput() {
        return this._postgreSqlParameters.internalValue;
    }

    // presto_parameters - computed: true, optional: true, required: false
    private _prestoParameters = new CredentialsCredentialPairAlternateDataSourceParametersPrestoParametersPropertyOutputReference(this, "presto_parameters");
    public get prestoParameters() {
        return this._prestoParameters;
    }
    public putPrestoParameters(value: CredentialsCredentialPairAlternateDataSourceParametersPrestoParametersProperty) {
        this._prestoParameters.internalValue = value;
    }
    public resetPrestoParameters() {
        this._prestoParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prestoParametersInput() {
        return this._prestoParameters.internalValue;
    }

    // rds_parameters - computed: true, optional: true, required: false
    private _rdsParameters = new CredentialsCredentialPairAlternateDataSourceParametersRdsParametersPropertyOutputReference(this, "rds_parameters");
    public get rdsParameters() {
        return this._rdsParameters;
    }
    public putRdsParameters(value: CredentialsCredentialPairAlternateDataSourceParametersRdsParametersProperty) {
        this._rdsParameters.internalValue = value;
    }
    public resetRdsParameters() {
        this._rdsParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsParametersInput() {
        return this._rdsParameters.internalValue;
    }

    // redshift_parameters - computed: true, optional: true, required: false
    private _redshiftParameters = new CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersPropertyOutputReference(this, "redshift_parameters");
    public get redshiftParameters() {
        return this._redshiftParameters;
    }
    public putRedshiftParameters(value: CredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersProperty) {
        this._redshiftParameters.internalValue = value;
    }
    public resetRedshiftParameters() {
        this._redshiftParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftParametersInput() {
        return this._redshiftParameters.internalValue;
    }

    // s3_parameters - computed: true, optional: true, required: false
    private _s3Parameters = new CredentialsCredentialPairAlternateDataSourceParametersS3ParametersPropertyOutputReference(this, "s3_parameters");
    public get s3Parameters() {
        return this._s3Parameters;
    }
    public putS3Parameters(value: CredentialsCredentialPairAlternateDataSourceParametersS3ParametersProperty) {
        this._s3Parameters.internalValue = value;
    }
    public resetS3Parameters() {
        this._s3Parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ParametersInput() {
        return this._s3Parameters.internalValue;
    }

    // s3_tables_parameters - computed: true, optional: true, required: false
    private _s3TablesParameters = new CredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersPropertyOutputReference(this, "s3_tables_parameters");
    public get s3TablesParameters() {
        return this._s3TablesParameters;
    }
    public putS3TablesParameters(value: CredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersProperty) {
        this._s3TablesParameters.internalValue = value;
    }
    public resetS3TablesParameters() {
        this._s3TablesParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3TablesParametersInput() {
        return this._s3TablesParameters.internalValue;
    }

    // snowflake_parameters - computed: true, optional: true, required: false
    private _snowflakeParameters = new CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersPropertyOutputReference(this, "snowflake_parameters");
    public get snowflakeParameters() {
        return this._snowflakeParameters;
    }
    public putSnowflakeParameters(value: CredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersProperty) {
        this._snowflakeParameters.internalValue = value;
    }
    public resetSnowflakeParameters() {
        this._snowflakeParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snowflakeParametersInput() {
        return this._snowflakeParameters.internalValue;
    }

    // spark_parameters - computed: true, optional: true, required: false
    private _sparkParameters = new CredentialsCredentialPairAlternateDataSourceParametersSparkParametersPropertyOutputReference(this, "spark_parameters");
    public get sparkParameters() {
        return this._sparkParameters;
    }
    public putSparkParameters(value: CredentialsCredentialPairAlternateDataSourceParametersSparkParametersProperty) {
        this._sparkParameters.internalValue = value;
    }
    public resetSparkParameters() {
        this._sparkParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sparkParametersInput() {
        return this._sparkParameters.internalValue;
    }

    // sql_server_parameters - computed: true, optional: true, required: false
    private _sqlServerParameters = new CredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersPropertyOutputReference(this, "sql_server_parameters");
    public get sqlServerParameters() {
        return this._sqlServerParameters;
    }
    public putSqlServerParameters(value: CredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersProperty) {
        this._sqlServerParameters.internalValue = value;
    }
    public resetSqlServerParameters() {
        this._sqlServerParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlServerParametersInput() {
        return this._sqlServerParameters.internalValue;
    }

    // starburst_parameters - computed: true, optional: true, required: false
    private _starburstParameters = new CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersPropertyOutputReference(this, "starburst_parameters");
    public get starburstParameters() {
        return this._starburstParameters;
    }
    public putStarburstParameters(value: CredentialsCredentialPairAlternateDataSourceParametersStarburstParametersProperty) {
        this._starburstParameters.internalValue = value;
    }
    public resetStarburstParameters() {
        this._starburstParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get starburstParametersInput() {
        return this._starburstParameters.internalValue;
    }

    // teradata_parameters - computed: true, optional: true, required: false
    private _teradataParameters = new CredentialsCredentialPairAlternateDataSourceParametersTeradataParametersPropertyOutputReference(this, "teradata_parameters");
    public get teradataParameters() {
        return this._teradataParameters;
    }
    public putTeradataParameters(value: CredentialsCredentialPairAlternateDataSourceParametersTeradataParametersProperty) {
        this._teradataParameters.internalValue = value;
    }
    public resetTeradataParameters() {
        this._teradataParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get teradataParametersInput() {
        return this._teradataParameters.internalValue;
    }

    // trino_parameters - computed: true, optional: true, required: false
    private _trinoParameters = new CredentialsCredentialPairAlternateDataSourceParametersTrinoParametersPropertyOutputReference(this, "trino_parameters");
    public get trinoParameters() {
        return this._trinoParameters;
    }
    public putTrinoParameters(value: CredentialsCredentialPairAlternateDataSourceParametersTrinoParametersProperty) {
        this._trinoParameters.internalValue = value;
    }
    public resetTrinoParameters() {
        this._trinoParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trinoParametersInput() {
        return this._trinoParameters.internalValue;
    }
}

export class AlternateDataSourceParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : AlternateDataSourceParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): AlternateDataSourceParametersPropertyOutputReference {
        return new AlternateDataSourceParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CredentialPairProperty {
    /**
    * <p>A set of alternate data source parameters that you want to share for these
    *             credentials. The credentials are applied in tandem with the data source parameters when
    *             you copy a data source by using a create or update request. The API operation compares
    *             the <code>DataSourceParameters</code> structure that's in the request with the
    *             structures in the <code>AlternateDataSourceParameters</code> allow list. If the
    *             structures are an exact match, the request is allowed to use the new data source with
    *             the existing credentials. If the <code>AlternateDataSourceParameters</code> list is
    *             null, the <code>DataSourceParameters</code> originally used with these
    *                 <code>Credentials</code> is automatically allowed.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#alternate_data_source_parameters CcDataSource#alternate_data_source_parameters}
    */
    readonly alternateDataSourceParameters?: AlternateDataSourceParametersProperty[] | cdktn.IResolvable;
    /**
    * <p>Password.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#password CcDataSource#password}
    */
    readonly password?: string;
    /**
    * <p>User name.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#username CcDataSource#username}
    */
    readonly username?: string;
}
export class CredentialPairPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialPairProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alternateDataSourceParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alternateDataSourceParameters = this._alternateDataSourceParameters?.internalValue;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialPairProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alternateDataSourceParameters.internalValue = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alternateDataSourceParameters.internalValue = value.alternateDataSourceParameters;
            this._password = value.password;
            this._username = value.username;
        }
    }

    // alternate_data_source_parameters - computed: true, optional: true, required: false
    private _alternateDataSourceParameters = new AlternateDataSourceParametersPropertyList(this, "alternate_data_source_parameters", false);
    public get alternateDataSourceParameters() {
        return this._alternateDataSourceParameters;
    }
    public putAlternateDataSourceParameters(value: AlternateDataSourceParametersProperty[] | cdktn.IResolvable) {
        this._alternateDataSourceParameters.internalValue = value;
    }
    public resetAlternateDataSourceParameters() {
        this._alternateDataSourceParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alternateDataSourceParametersInput() {
        return this._alternateDataSourceParameters.internalValue;
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface KeyPairCredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#key_pair_username CcDataSource#key_pair_username}
    */
    readonly keyPairUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#private_key CcDataSource#private_key}
    */
    readonly privateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#private_key_passphrase CcDataSource#private_key_passphrase}
    */
    readonly privateKeyPassphrase?: string;
}
export class KeyPairCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KeyPairCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyPairUsername !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyPairUsername = this._keyPairUsername;
        }
        if (this._privateKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKey = this._privateKey;
        }
        if (this._privateKeyPassphrase !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKeyPassphrase = this._privateKeyPassphrase;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeyPairCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyPairUsername = undefined;
            this._privateKey = undefined;
            this._privateKeyPassphrase = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyPairUsername = value.keyPairUsername;
            this._privateKey = value.privateKey;
            this._privateKeyPassphrase = value.privateKeyPassphrase;
        }
    }

    // key_pair_username - computed: true, optional: true, required: false
    private _keyPairUsername?: string; 
    public get keyPairUsername() {
        return this.getStringAttribute('key_pair_username');
    }
    public set keyPairUsername(value: string) {
        this._keyPairUsername = value;
    }
    public resetKeyPairUsername() {
        this._keyPairUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyPairUsernameInput() {
        return this._keyPairUsername;
    }

    // private_key - computed: true, optional: true, required: false
    private _privateKey?: string; 
    public get privateKey() {
        return this.getStringAttribute('private_key');
    }
    public set privateKey(value: string) {
        this._privateKey = value;
    }
    public resetPrivateKey() {
        this._privateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyInput() {
        return this._privateKey;
    }

    // private_key_passphrase - computed: true, optional: true, required: false
    private _privateKeyPassphrase?: string; 
    public get privateKeyPassphrase() {
        return this.getStringAttribute('private_key_passphrase');
    }
    public set privateKeyPassphrase(value: string) {
        this._privateKeyPassphrase = value;
    }
    public resetPrivateKeyPassphrase() {
        this._privateKeyPassphrase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyPassphraseInput() {
        return this._privateKeyPassphrase;
    }
}
export interface DataSourceCredentialsProperty {
    /**
    * <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
    *             want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
    *             data source in the ARN is used as the credentials for the
    *             <code>DataSourceCredentials</code> structure.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#copy_source_arn CcDataSource#copy_source_arn}
    */
    readonly copySourceArn?: string;
    /**
    * <p>The combination of user name and password that are used as credentials.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#credential_pair CcDataSource#credential_pair}
    */
    readonly credentialPair?: CredentialPairProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#key_pair_credentials CcDataSource#key_pair_credentials}
    */
    readonly keyPairCredentials?: KeyPairCredentialsProperty;
    /**
    * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#secret_arn CcDataSource#secret_arn}
    */
    readonly secretArn?: string;
}
export class DataSourceCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._copySourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.copySourceArn = this._copySourceArn;
        }
        if (this._credentialPair?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialPair = this._credentialPair?.internalValue;
        }
        if (this._keyPairCredentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyPairCredentials = this._keyPairCredentials?.internalValue;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._copySourceArn = undefined;
            this._credentialPair.internalValue = undefined;
            this._keyPairCredentials.internalValue = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._copySourceArn = value.copySourceArn;
            this._credentialPair.internalValue = value.credentialPair;
            this._keyPairCredentials.internalValue = value.keyPairCredentials;
            this._secretArn = value.secretArn;
        }
    }

    // copy_source_arn - computed: true, optional: true, required: false
    private _copySourceArn?: string; 
    public get copySourceArn() {
        return this.getStringAttribute('copy_source_arn');
    }
    public set copySourceArn(value: string) {
        this._copySourceArn = value;
    }
    public resetCopySourceArn() {
        this._copySourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copySourceArnInput() {
        return this._copySourceArn;
    }

    // credential_pair - computed: true, optional: true, required: false
    private _credentialPair = new CredentialPairPropertyOutputReference(this, "credential_pair");
    public get credentialPair() {
        return this._credentialPair;
    }
    public putCredentialPair(value: CredentialPairProperty) {
        this._credentialPair.internalValue = value;
    }
    public resetCredentialPair() {
        this._credentialPair.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialPairInput() {
        return this._credentialPair.internalValue;
    }

    // key_pair_credentials - computed: true, optional: true, required: false
    private _keyPairCredentials = new KeyPairCredentialsPropertyOutputReference(this, "key_pair_credentials");
    public get keyPairCredentials() {
        return this._keyPairCredentials;
    }
    public putKeyPairCredentials(value: KeyPairCredentialsProperty) {
        this._keyPairCredentials.internalValue = value;
    }
    public resetKeyPairCredentials() {
        this._keyPairCredentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyPairCredentialsInput() {
        return this._keyPairCredentials.internalValue;
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
export interface DataSourceParametersAmazonElasticsearchParametersProperty {
    /**
    * <p>The OpenSearch domain.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#domain CcDataSource#domain}
    */
    readonly domain?: string;
}
export class DataSourceParametersAmazonElasticsearchParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersAmazonElasticsearchParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersAmazonElasticsearchParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
        }
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }
}
export interface DataSourceParametersAmazonOpenSearchParametersProperty {
    /**
    * <p>The OpenSearch domain.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#domain CcDataSource#domain}
    */
    readonly domain?: string;
}
export class DataSourceParametersAmazonOpenSearchParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersAmazonOpenSearchParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersAmazonOpenSearchParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
        }
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }
}
export interface DataSourceParametersAthenaParametersIdentityCenterConfigurationProperty {
    /**
    * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#enable_identity_propagation CcDataSource#enable_identity_propagation}
    */
    readonly enableIdentityPropagation?: boolean | cdktn.IResolvable;
}
export class DataSourceParametersAthenaParametersIdentityCenterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersAthenaParametersIdentityCenterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableIdentityPropagation !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableIdentityPropagation = this._enableIdentityPropagation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersAthenaParametersIdentityCenterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableIdentityPropagation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableIdentityPropagation = value.enableIdentityPropagation;
        }
    }

    // enable_identity_propagation - computed: true, optional: true, required: false
    private _enableIdentityPropagation?: boolean | cdktn.IResolvable; 
    public get enableIdentityPropagation() {
        return this.getBooleanAttribute('enable_identity_propagation');
    }
    public set enableIdentityPropagation(value: boolean | cdktn.IResolvable) {
        this._enableIdentityPropagation = value;
    }
    public resetEnableIdentityPropagation() {
        this._enableIdentityPropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableIdentityPropagationInput() {
        return this._enableIdentityPropagation;
    }
}
export interface DataSourceParametersAthenaParametersProperty {
    /**
    * <p>The parameters for an IAM Identity Center configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_center_configuration CcDataSource#identity_center_configuration}
    */
    readonly identityCenterConfiguration?: DataSourceParametersAthenaParametersIdentityCenterConfigurationProperty;
    /**
    * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#role_arn CcDataSource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * <p>The workgroup that Amazon Athena uses.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#work_group CcDataSource#work_group}
    */
    readonly workGroup?: string;
}
export class DataSourceParametersAthenaParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersAthenaParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identityCenterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._workGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.workGroup = this._workGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersAthenaParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityCenterConfiguration.internalValue = undefined;
            this._roleArn = undefined;
            this._workGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
            this._roleArn = value.roleArn;
            this._workGroup = value.workGroup;
        }
    }

    // identity_center_configuration - computed: true, optional: true, required: false
    private _identityCenterConfiguration = new DataSourceParametersAthenaParametersIdentityCenterConfigurationPropertyOutputReference(this, "identity_center_configuration");
    public get identityCenterConfiguration() {
        return this._identityCenterConfiguration;
    }
    public putIdentityCenterConfiguration(value: DataSourceParametersAthenaParametersIdentityCenterConfigurationProperty) {
        this._identityCenterConfiguration.internalValue = value;
    }
    public resetIdentityCenterConfiguration() {
        this._identityCenterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityCenterConfigurationInput() {
        return this._identityCenterConfiguration.internalValue;
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

    // work_group - computed: true, optional: true, required: false
    private _workGroup?: string; 
    public get workGroup() {
        return this.getStringAttribute('work_group');
    }
    public set workGroup(value: string) {
        this._workGroup = value;
    }
    public resetWorkGroup() {
        this._workGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workGroupInput() {
        return this._workGroup;
    }
}
export interface DataSourceParametersAuroraParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class DataSourceParametersAuroraParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersAuroraParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersAuroraParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DataSourceParametersAuroraPostgreSqlParametersProperty {
    /**
    * <p>The Amazon Aurora PostgreSQL database to connect to.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>The port that Amazon Aurora PostgreSQL is listening on.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class DataSourceParametersAuroraPostgreSqlParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersAuroraPostgreSqlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersAuroraPostgreSqlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DataSourceParametersDatabricksParametersProperty {
    /**
    * <p>The host name of the Databricks data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>The port for the Databricks data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
    /**
    * <p>The HTTP path of the Databricks data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#sql_endpoint_path CcDataSource#sql_endpoint_path}
    */
    readonly sqlEndpointPath?: string;
}
export class DataSourceParametersDatabricksParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersDatabricksParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._sqlEndpointPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlEndpointPath = this._sqlEndpointPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersDatabricksParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._port = undefined;
            this._sqlEndpointPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._port = value.port;
            this._sqlEndpointPath = value.sqlEndpointPath;
        }
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // sql_endpoint_path - computed: true, optional: true, required: false
    private _sqlEndpointPath?: string; 
    public get sqlEndpointPath() {
        return this.getStringAttribute('sql_endpoint_path');
    }
    public set sqlEndpointPath(value: string) {
        this._sqlEndpointPath = value;
    }
    public resetSqlEndpointPath() {
        this._sqlEndpointPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlEndpointPathInput() {
        return this._sqlEndpointPath;
    }
}
export interface DataSourceParametersMariaDbParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class DataSourceParametersMariaDbParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersMariaDbParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersMariaDbParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DataSourceParametersMySqlParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class DataSourceParametersMySqlParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersMySqlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersMySqlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DataSourceParametersOracleParametersProperty {
    /**
    * <p>The database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>An Oracle host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>The port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#use_service_name CcDataSource#use_service_name}
    */
    readonly useServiceName?: boolean | cdktn.IResolvable;
}
export class DataSourceParametersOracleParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersOracleParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._useServiceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.useServiceName = this._useServiceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersOracleParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
            this._useServiceName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
            this._useServiceName = value.useServiceName;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // use_service_name - computed: true, optional: true, required: false
    private _useServiceName?: boolean | cdktn.IResolvable; 
    public get useServiceName() {
        return this.getBooleanAttribute('use_service_name');
    }
    public set useServiceName(value: boolean | cdktn.IResolvable) {
        this._useServiceName = value;
    }
    public resetUseServiceName() {
        this._useServiceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useServiceNameInput() {
        return this._useServiceName;
    }
}
export interface DataSourceParametersPostgreSqlParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class DataSourceParametersPostgreSqlParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersPostgreSqlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersPostgreSqlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DataSourceParametersPrestoParametersProperty {
    /**
    * <p>Catalog.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#catalog CcDataSource#catalog}
    */
    readonly catalog?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class DataSourceParametersPrestoParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersPrestoParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalog !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersPrestoParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalog = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalog = value.catalog;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string; 
    public get catalog() {
        return this.getStringAttribute('catalog');
    }
    public set catalog(value: string) {
        this._catalog = value;
    }
    public resetCatalog() {
        this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DataSourceParametersRdsParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Instance ID.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#instance_id CcDataSource#instance_id}
    */
    readonly instanceId?: string;
}
export class DataSourceParametersRdsParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersRdsParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._instanceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceId = this._instanceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersRdsParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._instanceId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._instanceId = value.instanceId;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // instance_id - computed: true, optional: true, required: false
    private _instanceId?: string; 
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
    public resetInstanceId() {
        this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
        return this._instanceId;
    }
}
export interface DataSourceParametersRedshiftParametersIamParametersProperty {
    /**
    * <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Amazon QuickSight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#auto_create_database_user CcDataSource#auto_create_database_user}
    */
    readonly autoCreateDatabaseUser?: boolean | cdktn.IResolvable;
    /**
    * <p>A list of groups whose permissions will be granted to Amazon QuickSight to access the cluster. These permissions are combined with the permissions granted to Amazon QuickSight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database_groups CcDataSource#database_groups}
    */
    readonly databaseGroups?: string[];
    /**
    * <p>The user whose permissions and group memberships will be used by Amazon QuickSight to access the cluster. If this user already exists in your database, Amazon QuickSight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database_user CcDataSource#database_user}
    */
    readonly databaseUser?: string;
    /**
    * <p>Use the <code>RoleArn</code> structure to allow Amazon QuickSight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Amazon QuickSight. The role's trust policy must allow the Amazon QuickSight service principal to assume the role.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#role_arn CcDataSource#role_arn}
    */
    readonly roleArn?: string;
}
export class DataSourceParametersRedshiftParametersIamParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersRedshiftParametersIamParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoCreateDatabaseUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoCreateDatabaseUser = this._autoCreateDatabaseUser;
        }
        if (this._databaseGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseGroups = this._databaseGroups;
        }
        if (this._databaseUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseUser = this._databaseUser;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersRedshiftParametersIamParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoCreateDatabaseUser = undefined;
            this._databaseGroups = undefined;
            this._databaseUser = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoCreateDatabaseUser = value.autoCreateDatabaseUser;
            this._databaseGroups = value.databaseGroups;
            this._databaseUser = value.databaseUser;
            this._roleArn = value.roleArn;
        }
    }

    // auto_create_database_user - computed: true, optional: true, required: false
    private _autoCreateDatabaseUser?: boolean | cdktn.IResolvable; 
    public get autoCreateDatabaseUser() {
        return this.getBooleanAttribute('auto_create_database_user');
    }
    public set autoCreateDatabaseUser(value: boolean | cdktn.IResolvable) {
        this._autoCreateDatabaseUser = value;
    }
    public resetAutoCreateDatabaseUser() {
        this._autoCreateDatabaseUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoCreateDatabaseUserInput() {
        return this._autoCreateDatabaseUser;
    }

    // database_groups - computed: true, optional: true, required: false
    private _databaseGroups?: string[]; 
    public get databaseGroups() {
        return this.getListAttribute('database_groups');
    }
    public set databaseGroups(value: string[]) {
        this._databaseGroups = value;
    }
    public resetDatabaseGroups() {
        this._databaseGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseGroupsInput() {
        return this._databaseGroups;
    }

    // database_user - computed: true, optional: true, required: false
    private _databaseUser?: string; 
    public get databaseUser() {
        return this.getStringAttribute('database_user');
    }
    public set databaseUser(value: string) {
        this._databaseUser = value;
    }
    public resetDatabaseUser() {
        this._databaseUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseUserInput() {
        return this._databaseUser;
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
}
export interface DataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty {
    /**
    * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#enable_identity_propagation CcDataSource#enable_identity_propagation}
    */
    readonly enableIdentityPropagation?: boolean | cdktn.IResolvable;
}
export class DataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableIdentityPropagation !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableIdentityPropagation = this._enableIdentityPropagation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableIdentityPropagation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableIdentityPropagation = value.enableIdentityPropagation;
        }
    }

    // enable_identity_propagation - computed: true, optional: true, required: false
    private _enableIdentityPropagation?: boolean | cdktn.IResolvable; 
    public get enableIdentityPropagation() {
        return this.getBooleanAttribute('enable_identity_propagation');
    }
    public set enableIdentityPropagation(value: boolean | cdktn.IResolvable) {
        this._enableIdentityPropagation = value;
    }
    public resetEnableIdentityPropagation() {
        this._enableIdentityPropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableIdentityPropagationInput() {
        return this._enableIdentityPropagation;
    }
}
export interface DataSourceParametersRedshiftParametersProperty {
    /**
    * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
    *             provided.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#cluster_id CcDataSource#cluster_id}
    */
    readonly clusterId?: string;
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>A structure that grants Amazon QuickSight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
    *                <code>GetClusterCredentials</code>
    *             </a>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#iam_parameters CcDataSource#iam_parameters}
    */
    readonly iamParameters?: DataSourceParametersRedshiftParametersIamParametersProperty;
    /**
    * <p>The parameters for an IAM Identity Center configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_center_configuration CcDataSource#identity_center_configuration}
    */
    readonly identityCenterConfiguration?: DataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty;
    /**
    * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class DataSourceParametersRedshiftParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersRedshiftParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterId = this._clusterId;
        }
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._iamParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamParameters = this._iamParameters?.internalValue;
        }
        if (this._identityCenterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersRedshiftParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterId = undefined;
            this._database = undefined;
            this._host = undefined;
            this._iamParameters.internalValue = undefined;
            this._identityCenterConfiguration.internalValue = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterId = value.clusterId;
            this._database = value.database;
            this._host = value.host;
            this._iamParameters.internalValue = value.iamParameters;
            this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
            this._port = value.port;
        }
    }

    // cluster_id - computed: true, optional: true, required: false
    private _clusterId?: string; 
    public get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
        this._clusterId = value;
    }
    public resetClusterId() {
        this._clusterId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
        return this._clusterId;
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // iam_parameters - computed: true, optional: true, required: false
    private _iamParameters = new DataSourceParametersRedshiftParametersIamParametersPropertyOutputReference(this, "iam_parameters");
    public get iamParameters() {
        return this._iamParameters;
    }
    public putIamParameters(value: DataSourceParametersRedshiftParametersIamParametersProperty) {
        this._iamParameters.internalValue = value;
    }
    public resetIamParameters() {
        this._iamParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamParametersInput() {
        return this._iamParameters.internalValue;
    }

    // identity_center_configuration - computed: true, optional: true, required: false
    private _identityCenterConfiguration = new DataSourceParametersRedshiftParametersIdentityCenterConfigurationPropertyOutputReference(this, "identity_center_configuration");
    public get identityCenterConfiguration() {
        return this._identityCenterConfiguration;
    }
    public putIdentityCenterConfiguration(value: DataSourceParametersRedshiftParametersIdentityCenterConfigurationProperty) {
        this._identityCenterConfiguration.internalValue = value;
    }
    public resetIdentityCenterConfiguration() {
        this._identityCenterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityCenterConfigurationInput() {
        return this._identityCenterConfiguration.internalValue;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DataSourceParametersS3ParametersManifestFileLocationProperty {
    /**
    * <p>Amazon S3 bucket.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#bucket CcDataSource#bucket}
    */
    readonly bucket?: string;
    /**
    * <p>Amazon S3 key that identifies an object.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#key CcDataSource#key}
    */
    readonly key?: string;
}
export class DataSourceParametersS3ParametersManifestFileLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersS3ParametersManifestFileLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersS3ParametersManifestFileLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
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
}
export interface DataSourceParametersS3ParametersProperty {
    /**
    * <p>Amazon S3 manifest file location.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#manifest_file_location CcDataSource#manifest_file_location}
    */
    readonly manifestFileLocation?: DataSourceParametersS3ParametersManifestFileLocationProperty;
    /**
    * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#role_arn CcDataSource#role_arn}
    */
    readonly roleArn?: string;
}
export class DataSourceParametersS3ParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersS3ParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._manifestFileLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestFileLocation = this._manifestFileLocation?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersS3ParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._manifestFileLocation.internalValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._manifestFileLocation.internalValue = value.manifestFileLocation;
            this._roleArn = value.roleArn;
        }
    }

    // manifest_file_location - computed: true, optional: true, required: false
    private _manifestFileLocation = new DataSourceParametersS3ParametersManifestFileLocationPropertyOutputReference(this, "manifest_file_location");
    public get manifestFileLocation() {
        return this._manifestFileLocation;
    }
    public putManifestFileLocation(value: DataSourceParametersS3ParametersManifestFileLocationProperty) {
        this._manifestFileLocation.internalValue = value;
    }
    public resetManifestFileLocation() {
        this._manifestFileLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestFileLocationInput() {
        return this._manifestFileLocation.internalValue;
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
}
export interface DataSourceParametersS3TablesParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#table_bucket_arn CcDataSource#table_bucket_arn}
    */
    readonly tableBucketArn?: string;
}
export class DataSourceParametersS3TablesParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersS3TablesParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tableBucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableBucketArn = this._tableBucketArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersS3TablesParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tableBucketArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tableBucketArn = value.tableBucketArn;
        }
    }

    // table_bucket_arn - computed: true, optional: true, required: false
    private _tableBucketArn?: string; 
    public get tableBucketArn() {
        return this.getStringAttribute('table_bucket_arn');
    }
    public set tableBucketArn(value: string) {
        this._tableBucketArn = value;
    }
    public resetTableBucketArn() {
        this._tableBucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableBucketArnInput() {
        return this._tableBucketArn;
    }
}
export interface DataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty {
    /**
    * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#vpc_connection_arn CcDataSource#vpc_connection_arn}
    */
    readonly vpcConnectionArn?: string;
}
export class DataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcConnectionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = value.vpcConnectionArn;
        }
    }

    // vpc_connection_arn - computed: true, optional: true, required: false
    private _vpcConnectionArn?: string; 
    public get vpcConnectionArn() {
        return this.getStringAttribute('vpc_connection_arn');
    }
    public set vpcConnectionArn(value: string) {
        this._vpcConnectionArn = value;
    }
    public resetVpcConnectionArn() {
        this._vpcConnectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConnectionArnInput() {
        return this._vpcConnectionArn;
    }
}
export interface DataSourceParametersSnowflakeParametersOAuthParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_provider_resource_uri CcDataSource#identity_provider_resource_uri}
    */
    readonly identityProviderResourceUri?: string;
    /**
    * <p>VPC connection properties.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_provider_vpc_connection_properties CcDataSource#identity_provider_vpc_connection_properties}
    */
    readonly identityProviderVpcConnectionProperties?: DataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#o_auth_scope CcDataSource#o_auth_scope}
    */
    readonly oAuthScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#token_provider_url CcDataSource#token_provider_url}
    */
    readonly tokenProviderUrl?: string;
}
export class DataSourceParametersSnowflakeParametersOAuthParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersSnowflakeParametersOAuthParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identityProviderResourceUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderResourceUri = this._identityProviderResourceUri;
        }
        if (this._identityProviderVpcConnectionProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderVpcConnectionProperties = this._identityProviderVpcConnectionProperties?.internalValue;
        }
        if (this._oAuthScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthScope = this._oAuthScope;
        }
        if (this._tokenProviderUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenProviderUrl = this._tokenProviderUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersSnowflakeParametersOAuthParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderResourceUri = undefined;
            this._identityProviderVpcConnectionProperties.internalValue = undefined;
            this._oAuthScope = undefined;
            this._tokenProviderUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderResourceUri = value.identityProviderResourceUri;
            this._identityProviderVpcConnectionProperties.internalValue = value.identityProviderVpcConnectionProperties;
            this._oAuthScope = value.oAuthScope;
            this._tokenProviderUrl = value.tokenProviderUrl;
        }
    }

    // identity_provider_resource_uri - computed: true, optional: true, required: false
    private _identityProviderResourceUri?: string; 
    public get identityProviderResourceUri() {
        return this.getStringAttribute('identity_provider_resource_uri');
    }
    public set identityProviderResourceUri(value: string) {
        this._identityProviderResourceUri = value;
    }
    public resetIdentityProviderResourceUri() {
        this._identityProviderResourceUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderResourceUriInput() {
        return this._identityProviderResourceUri;
    }

    // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
    private _identityProviderVpcConnectionProperties = new DataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyOutputReference(this, "identity_provider_vpc_connection_properties");
    public get identityProviderVpcConnectionProperties() {
        return this._identityProviderVpcConnectionProperties;
    }
    public putIdentityProviderVpcConnectionProperties(value: DataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty) {
        this._identityProviderVpcConnectionProperties.internalValue = value;
    }
    public resetIdentityProviderVpcConnectionProperties() {
        this._identityProviderVpcConnectionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderVpcConnectionPropertiesInput() {
        return this._identityProviderVpcConnectionProperties.internalValue;
    }

    // o_auth_scope - computed: true, optional: true, required: false
    private _oAuthScope?: string; 
    public get oAuthScope() {
        return this.getStringAttribute('o_auth_scope');
    }
    public set oAuthScope(value: string) {
        this._oAuthScope = value;
    }
    public resetOAuthScope() {
        this._oAuthScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthScopeInput() {
        return this._oAuthScope;
    }

    // token_provider_url - computed: true, optional: true, required: false
    private _tokenProviderUrl?: string; 
    public get tokenProviderUrl() {
        return this.getStringAttribute('token_provider_url');
    }
    public set tokenProviderUrl(value: string) {
        this._tokenProviderUrl = value;
    }
    public resetTokenProviderUrl() {
        this._tokenProviderUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenProviderUrlInput() {
        return this._tokenProviderUrl;
    }
}
export interface DataSourceParametersSnowflakeParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#authentication_type CcDataSource#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database_access_control_role CcDataSource#database_access_control_role}
    */
    readonly databaseAccessControlRole?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#o_auth_parameters CcDataSource#o_auth_parameters}
    */
    readonly oAuthParameters?: DataSourceParametersSnowflakeParametersOAuthParametersProperty;
    /**
    * <p>Warehouse.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#warehouse CcDataSource#warehouse}
    */
    readonly warehouse?: string;
}
export class DataSourceParametersSnowflakeParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersSnowflakeParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._databaseAccessControlRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseAccessControlRole = this._databaseAccessControlRole;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._oAuthParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
        }
        if (this._warehouse !== undefined) {
            hasAnyValues = true;
            internalValueResult.warehouse = this._warehouse;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersSnowflakeParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationType = undefined;
            this._database = undefined;
            this._databaseAccessControlRole = undefined;
            this._host = undefined;
            this._oAuthParameters.internalValue = undefined;
            this._warehouse = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationType = value.authenticationType;
            this._database = value.database;
            this._databaseAccessControlRole = value.databaseAccessControlRole;
            this._host = value.host;
            this._oAuthParameters.internalValue = value.oAuthParameters;
            this._warehouse = value.warehouse;
        }
    }

    // authentication_type - computed: true, optional: true, required: false
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    public resetAuthenticationType() {
        this._authenticationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // database_access_control_role - computed: true, optional: true, required: false
    private _databaseAccessControlRole?: string; 
    public get databaseAccessControlRole() {
        return this.getStringAttribute('database_access_control_role');
    }
    public set databaseAccessControlRole(value: string) {
        this._databaseAccessControlRole = value;
    }
    public resetDatabaseAccessControlRole() {
        this._databaseAccessControlRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseAccessControlRoleInput() {
        return this._databaseAccessControlRole;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // o_auth_parameters - computed: true, optional: true, required: false
    private _oAuthParameters = new DataSourceParametersSnowflakeParametersOAuthParametersPropertyOutputReference(this, "o_auth_parameters");
    public get oAuthParameters() {
        return this._oAuthParameters;
    }
    public putOAuthParameters(value: DataSourceParametersSnowflakeParametersOAuthParametersProperty) {
        this._oAuthParameters.internalValue = value;
    }
    public resetOAuthParameters() {
        this._oAuthParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthParametersInput() {
        return this._oAuthParameters.internalValue;
    }

    // warehouse - computed: true, optional: true, required: false
    private _warehouse?: string; 
    public get warehouse() {
        return this.getStringAttribute('warehouse');
    }
    public set warehouse(value: string) {
        this._warehouse = value;
    }
    public resetWarehouse() {
        this._warehouse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warehouseInput() {
        return this._warehouse;
    }
}
export interface DataSourceParametersSparkParametersProperty {
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class DataSourceParametersSparkParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersSparkParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersSparkParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DataSourceParametersSqlServerParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class DataSourceParametersSqlServerParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersSqlServerParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersSqlServerParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty {
    /**
    * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#vpc_connection_arn CcDataSource#vpc_connection_arn}
    */
    readonly vpcConnectionArn?: string;
}
export class DataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcConnectionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = value.vpcConnectionArn;
        }
    }

    // vpc_connection_arn - computed: true, optional: true, required: false
    private _vpcConnectionArn?: string; 
    public get vpcConnectionArn() {
        return this.getStringAttribute('vpc_connection_arn');
    }
    public set vpcConnectionArn(value: string) {
        this._vpcConnectionArn = value;
    }
    public resetVpcConnectionArn() {
        this._vpcConnectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConnectionArnInput() {
        return this._vpcConnectionArn;
    }
}
export interface DataSourceParametersStarburstParametersOAuthParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_provider_resource_uri CcDataSource#identity_provider_resource_uri}
    */
    readonly identityProviderResourceUri?: string;
    /**
    * <p>VPC connection properties.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#identity_provider_vpc_connection_properties CcDataSource#identity_provider_vpc_connection_properties}
    */
    readonly identityProviderVpcConnectionProperties?: DataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#o_auth_scope CcDataSource#o_auth_scope}
    */
    readonly oAuthScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#token_provider_url CcDataSource#token_provider_url}
    */
    readonly tokenProviderUrl?: string;
}
export class DataSourceParametersStarburstParametersOAuthParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersStarburstParametersOAuthParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identityProviderResourceUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderResourceUri = this._identityProviderResourceUri;
        }
        if (this._identityProviderVpcConnectionProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProviderVpcConnectionProperties = this._identityProviderVpcConnectionProperties?.internalValue;
        }
        if (this._oAuthScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthScope = this._oAuthScope;
        }
        if (this._tokenProviderUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenProviderUrl = this._tokenProviderUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersStarburstParametersOAuthParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityProviderResourceUri = undefined;
            this._identityProviderVpcConnectionProperties.internalValue = undefined;
            this._oAuthScope = undefined;
            this._tokenProviderUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityProviderResourceUri = value.identityProviderResourceUri;
            this._identityProviderVpcConnectionProperties.internalValue = value.identityProviderVpcConnectionProperties;
            this._oAuthScope = value.oAuthScope;
            this._tokenProviderUrl = value.tokenProviderUrl;
        }
    }

    // identity_provider_resource_uri - computed: true, optional: true, required: false
    private _identityProviderResourceUri?: string; 
    public get identityProviderResourceUri() {
        return this.getStringAttribute('identity_provider_resource_uri');
    }
    public set identityProviderResourceUri(value: string) {
        this._identityProviderResourceUri = value;
    }
    public resetIdentityProviderResourceUri() {
        this._identityProviderResourceUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderResourceUriInput() {
        return this._identityProviderResourceUri;
    }

    // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
    private _identityProviderVpcConnectionProperties = new DataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesPropertyOutputReference(this, "identity_provider_vpc_connection_properties");
    public get identityProviderVpcConnectionProperties() {
        return this._identityProviderVpcConnectionProperties;
    }
    public putIdentityProviderVpcConnectionProperties(value: DataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesProperty) {
        this._identityProviderVpcConnectionProperties.internalValue = value;
    }
    public resetIdentityProviderVpcConnectionProperties() {
        this._identityProviderVpcConnectionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderVpcConnectionPropertiesInput() {
        return this._identityProviderVpcConnectionProperties.internalValue;
    }

    // o_auth_scope - computed: true, optional: true, required: false
    private _oAuthScope?: string; 
    public get oAuthScope() {
        return this.getStringAttribute('o_auth_scope');
    }
    public set oAuthScope(value: string) {
        this._oAuthScope = value;
    }
    public resetOAuthScope() {
        this._oAuthScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthScopeInput() {
        return this._oAuthScope;
    }

    // token_provider_url - computed: true, optional: true, required: false
    private _tokenProviderUrl?: string; 
    public get tokenProviderUrl() {
        return this.getStringAttribute('token_provider_url');
    }
    public set tokenProviderUrl(value: string) {
        this._tokenProviderUrl = value;
    }
    public resetTokenProviderUrl() {
        this._tokenProviderUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenProviderUrlInput() {
        return this._tokenProviderUrl;
    }
}
export interface DataSourceParametersStarburstParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#authentication_type CcDataSource#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * <p>The catalog name for the Starburst data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#catalog CcDataSource#catalog}
    */
    readonly catalog?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database_access_control_role CcDataSource#database_access_control_role}
    */
    readonly databaseAccessControlRole?: string;
    /**
    * <p>The host name of the Starburst data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#o_auth_parameters CcDataSource#o_auth_parameters}
    */
    readonly oAuthParameters?: DataSourceParametersStarburstParametersOAuthParametersProperty;
    /**
    * <p>The port for the Starburst data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#product_type CcDataSource#product_type}
    */
    readonly productType?: string;
}
export class DataSourceParametersStarburstParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersStarburstParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        if (this._catalog !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._databaseAccessControlRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseAccessControlRole = this._databaseAccessControlRole;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._oAuthParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._productType !== undefined) {
            hasAnyValues = true;
            internalValueResult.productType = this._productType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersStarburstParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationType = undefined;
            this._catalog = undefined;
            this._databaseAccessControlRole = undefined;
            this._host = undefined;
            this._oAuthParameters.internalValue = undefined;
            this._port = undefined;
            this._productType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationType = value.authenticationType;
            this._catalog = value.catalog;
            this._databaseAccessControlRole = value.databaseAccessControlRole;
            this._host = value.host;
            this._oAuthParameters.internalValue = value.oAuthParameters;
            this._port = value.port;
            this._productType = value.productType;
        }
    }

    // authentication_type - computed: true, optional: true, required: false
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    public resetAuthenticationType() {
        this._authenticationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string; 
    public get catalog() {
        return this.getStringAttribute('catalog');
    }
    public set catalog(value: string) {
        this._catalog = value;
    }
    public resetCatalog() {
        this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog;
    }

    // database_access_control_role - computed: true, optional: true, required: false
    private _databaseAccessControlRole?: string; 
    public get databaseAccessControlRole() {
        return this.getStringAttribute('database_access_control_role');
    }
    public set databaseAccessControlRole(value: string) {
        this._databaseAccessControlRole = value;
    }
    public resetDatabaseAccessControlRole() {
        this._databaseAccessControlRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseAccessControlRoleInput() {
        return this._databaseAccessControlRole;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // o_auth_parameters - computed: true, optional: true, required: false
    private _oAuthParameters = new DataSourceParametersStarburstParametersOAuthParametersPropertyOutputReference(this, "o_auth_parameters");
    public get oAuthParameters() {
        return this._oAuthParameters;
    }
    public putOAuthParameters(value: DataSourceParametersStarburstParametersOAuthParametersProperty) {
        this._oAuthParameters.internalValue = value;
    }
    public resetOAuthParameters() {
        this._oAuthParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthParametersInput() {
        return this._oAuthParameters.internalValue;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // product_type - computed: true, optional: true, required: false
    private _productType?: string; 
    public get productType() {
        return this.getStringAttribute('product_type');
    }
    public set productType(value: string) {
        this._productType = value;
    }
    public resetProductType() {
        this._productType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productTypeInput() {
        return this._productType;
    }
}
export interface DataSourceParametersTeradataParametersProperty {
    /**
    * <p>Database.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#database CcDataSource#database}
    */
    readonly database?: string;
    /**
    * <p>Host.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>Port.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class DataSourceParametersTeradataParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersTeradataParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersTeradataParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DataSourceParametersTrinoParametersProperty {
    /**
    * <p>The catalog name for the Trino data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#catalog CcDataSource#catalog}
    */
    readonly catalog?: string;
    /**
    * <p>The host name of the Trino data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#host CcDataSource#host}
    */
    readonly host?: string;
    /**
    * <p>The port for the Trino data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#port CcDataSource#port}
    */
    readonly port?: number;
}
export class DataSourceParametersTrinoParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersTrinoParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalog !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersTrinoParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalog = undefined;
            this._host = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalog = value.catalog;
            this._host = value.host;
            this._port = value.port;
        }
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string; 
    public get catalog() {
        return this.getStringAttribute('catalog');
    }
    public set catalog(value: string) {
        this._catalog = value;
    }
    public resetCatalog() {
        this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface DataSourceParametersProperty2 {
    /**
    * <p>The parameters for OpenSearch.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#amazon_elasticsearch_parameters CcDataSource#amazon_elasticsearch_parameters}
    */
    readonly amazonElasticsearchParameters?: DataSourceParametersAmazonElasticsearchParametersProperty;
    /**
    * <p>The parameters for OpenSearch.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#amazon_open_search_parameters CcDataSource#amazon_open_search_parameters}
    */
    readonly amazonOpenSearchParameters?: DataSourceParametersAmazonOpenSearchParametersProperty;
    /**
    * <p>Parameters for Amazon Athena.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#athena_parameters CcDataSource#athena_parameters}
    */
    readonly athenaParameters?: DataSourceParametersAthenaParametersProperty;
    /**
    * <p>Parameters for Amazon Aurora.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#aurora_parameters CcDataSource#aurora_parameters}
    */
    readonly auroraParameters?: DataSourceParametersAuroraParametersProperty;
    /**
    * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#aurora_postgre_sql_parameters CcDataSource#aurora_postgre_sql_parameters}
    */
    readonly auroraPostgreSqlParameters?: DataSourceParametersAuroraPostgreSqlParametersProperty;
    /**
    * <p>The parameters that are required to connect to a Databricks data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#databricks_parameters CcDataSource#databricks_parameters}
    */
    readonly databricksParameters?: DataSourceParametersDatabricksParametersProperty;
    /**
    * <p>The parameters for MariaDB.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#maria_db_parameters CcDataSource#maria_db_parameters}
    */
    readonly mariaDbParameters?: DataSourceParametersMariaDbParametersProperty;
    /**
    * <p>The parameters for MySQL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#my_sql_parameters CcDataSource#my_sql_parameters}
    */
    readonly mySqlParameters?: DataSourceParametersMySqlParametersProperty;
    /**
    * <p>The parameters for Oracle.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#oracle_parameters CcDataSource#oracle_parameters}
    */
    readonly oracleParameters?: DataSourceParametersOracleParametersProperty;
    /**
    * <p>The parameters for PostgreSQL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#postgre_sql_parameters CcDataSource#postgre_sql_parameters}
    */
    readonly postgreSqlParameters?: DataSourceParametersPostgreSqlParametersProperty;
    /**
    * <p>The parameters for Presto.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#presto_parameters CcDataSource#presto_parameters}
    */
    readonly prestoParameters?: DataSourceParametersPrestoParametersProperty;
    /**
    * <p>The parameters for Amazon RDS.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#rds_parameters CcDataSource#rds_parameters}
    */
    readonly rdsParameters?: DataSourceParametersRdsParametersProperty;
    /**
    * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
    *             <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#redshift_parameters CcDataSource#redshift_parameters}
    */
    readonly redshiftParameters?: DataSourceParametersRedshiftParametersProperty;
    /**
    * <p>The parameters for S3.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#s3_parameters CcDataSource#s3_parameters}
    */
    readonly s3Parameters?: DataSourceParametersS3ParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#s3_tables_parameters CcDataSource#s3_tables_parameters}
    */
    readonly s3TablesParameters?: DataSourceParametersS3TablesParametersProperty;
    /**
    * <p>The parameters for Snowflake.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#snowflake_parameters CcDataSource#snowflake_parameters}
    */
    readonly snowflakeParameters?: DataSourceParametersSnowflakeParametersProperty;
    /**
    * <p>The parameters for Spark.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#spark_parameters CcDataSource#spark_parameters}
    */
    readonly sparkParameters?: DataSourceParametersSparkParametersProperty;
    /**
    * <p>The parameters for SQL Server.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#sql_server_parameters CcDataSource#sql_server_parameters}
    */
    readonly sqlServerParameters?: DataSourceParametersSqlServerParametersProperty;
    /**
    * <p>The parameters that are required to connect to a Starburst data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#starburst_parameters CcDataSource#starburst_parameters}
    */
    readonly starburstParameters?: DataSourceParametersStarburstParametersProperty;
    /**
    * <p>The parameters for Teradata.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#teradata_parameters CcDataSource#teradata_parameters}
    */
    readonly teradataParameters?: DataSourceParametersTeradataParametersProperty;
    /**
    * <p>The parameters that are required to connect to a Trino data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#trino_parameters CcDataSource#trino_parameters}
    */
    readonly trinoParameters?: DataSourceParametersTrinoParametersProperty;
}
export class DataSourceParametersProperty2OutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceParametersProperty2 | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amazonElasticsearchParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonElasticsearchParameters = this._amazonElasticsearchParameters?.internalValue;
        }
        if (this._amazonOpenSearchParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonOpenSearchParameters = this._amazonOpenSearchParameters?.internalValue;
        }
        if (this._athenaParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.athenaParameters = this._athenaParameters?.internalValue;
        }
        if (this._auroraParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.auroraParameters = this._auroraParameters?.internalValue;
        }
        if (this._auroraPostgreSqlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.auroraPostgreSqlParameters = this._auroraPostgreSqlParameters?.internalValue;
        }
        if (this._databricksParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.databricksParameters = this._databricksParameters?.internalValue;
        }
        if (this._mariaDbParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mariaDbParameters = this._mariaDbParameters?.internalValue;
        }
        if (this._mySqlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mySqlParameters = this._mySqlParameters?.internalValue;
        }
        if (this._oracleParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oracleParameters = this._oracleParameters?.internalValue;
        }
        if (this._postgreSqlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.postgreSqlParameters = this._postgreSqlParameters?.internalValue;
        }
        if (this._prestoParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.prestoParameters = this._prestoParameters?.internalValue;
        }
        if (this._rdsParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsParameters = this._rdsParameters?.internalValue;
        }
        if (this._redshiftParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftParameters = this._redshiftParameters?.internalValue;
        }
        if (this._s3Parameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Parameters = this._s3Parameters?.internalValue;
        }
        if (this._s3TablesParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3TablesParameters = this._s3TablesParameters?.internalValue;
        }
        if (this._snowflakeParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snowflakeParameters = this._snowflakeParameters?.internalValue;
        }
        if (this._sparkParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sparkParameters = this._sparkParameters?.internalValue;
        }
        if (this._sqlServerParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlServerParameters = this._sqlServerParameters?.internalValue;
        }
        if (this._starburstParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.starburstParameters = this._starburstParameters?.internalValue;
        }
        if (this._teradataParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.teradataParameters = this._teradataParameters?.internalValue;
        }
        if (this._trinoParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trinoParameters = this._trinoParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceParametersProperty2 | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amazonElasticsearchParameters.internalValue = undefined;
            this._amazonOpenSearchParameters.internalValue = undefined;
            this._athenaParameters.internalValue = undefined;
            this._auroraParameters.internalValue = undefined;
            this._auroraPostgreSqlParameters.internalValue = undefined;
            this._databricksParameters.internalValue = undefined;
            this._mariaDbParameters.internalValue = undefined;
            this._mySqlParameters.internalValue = undefined;
            this._oracleParameters.internalValue = undefined;
            this._postgreSqlParameters.internalValue = undefined;
            this._prestoParameters.internalValue = undefined;
            this._rdsParameters.internalValue = undefined;
            this._redshiftParameters.internalValue = undefined;
            this._s3Parameters.internalValue = undefined;
            this._s3TablesParameters.internalValue = undefined;
            this._snowflakeParameters.internalValue = undefined;
            this._sparkParameters.internalValue = undefined;
            this._sqlServerParameters.internalValue = undefined;
            this._starburstParameters.internalValue = undefined;
            this._teradataParameters.internalValue = undefined;
            this._trinoParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amazonElasticsearchParameters.internalValue = value.amazonElasticsearchParameters;
            this._amazonOpenSearchParameters.internalValue = value.amazonOpenSearchParameters;
            this._athenaParameters.internalValue = value.athenaParameters;
            this._auroraParameters.internalValue = value.auroraParameters;
            this._auroraPostgreSqlParameters.internalValue = value.auroraPostgreSqlParameters;
            this._databricksParameters.internalValue = value.databricksParameters;
            this._mariaDbParameters.internalValue = value.mariaDbParameters;
            this._mySqlParameters.internalValue = value.mySqlParameters;
            this._oracleParameters.internalValue = value.oracleParameters;
            this._postgreSqlParameters.internalValue = value.postgreSqlParameters;
            this._prestoParameters.internalValue = value.prestoParameters;
            this._rdsParameters.internalValue = value.rdsParameters;
            this._redshiftParameters.internalValue = value.redshiftParameters;
            this._s3Parameters.internalValue = value.s3Parameters;
            this._s3TablesParameters.internalValue = value.s3TablesParameters;
            this._snowflakeParameters.internalValue = value.snowflakeParameters;
            this._sparkParameters.internalValue = value.sparkParameters;
            this._sqlServerParameters.internalValue = value.sqlServerParameters;
            this._starburstParameters.internalValue = value.starburstParameters;
            this._teradataParameters.internalValue = value.teradataParameters;
            this._trinoParameters.internalValue = value.trinoParameters;
        }
    }

    // amazon_elasticsearch_parameters - computed: true, optional: true, required: false
    private _amazonElasticsearchParameters = new DataSourceParametersAmazonElasticsearchParametersPropertyOutputReference(this, "amazon_elasticsearch_parameters");
    public get amazonElasticsearchParameters() {
        return this._amazonElasticsearchParameters;
    }
    public putAmazonElasticsearchParameters(value: DataSourceParametersAmazonElasticsearchParametersProperty) {
        this._amazonElasticsearchParameters.internalValue = value;
    }
    public resetAmazonElasticsearchParameters() {
        this._amazonElasticsearchParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonElasticsearchParametersInput() {
        return this._amazonElasticsearchParameters.internalValue;
    }

    // amazon_open_search_parameters - computed: true, optional: true, required: false
    private _amazonOpenSearchParameters = new DataSourceParametersAmazonOpenSearchParametersPropertyOutputReference(this, "amazon_open_search_parameters");
    public get amazonOpenSearchParameters() {
        return this._amazonOpenSearchParameters;
    }
    public putAmazonOpenSearchParameters(value: DataSourceParametersAmazonOpenSearchParametersProperty) {
        this._amazonOpenSearchParameters.internalValue = value;
    }
    public resetAmazonOpenSearchParameters() {
        this._amazonOpenSearchParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonOpenSearchParametersInput() {
        return this._amazonOpenSearchParameters.internalValue;
    }

    // athena_parameters - computed: true, optional: true, required: false
    private _athenaParameters = new DataSourceParametersAthenaParametersPropertyOutputReference(this, "athena_parameters");
    public get athenaParameters() {
        return this._athenaParameters;
    }
    public putAthenaParameters(value: DataSourceParametersAthenaParametersProperty) {
        this._athenaParameters.internalValue = value;
    }
    public resetAthenaParameters() {
        this._athenaParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get athenaParametersInput() {
        return this._athenaParameters.internalValue;
    }

    // aurora_parameters - computed: true, optional: true, required: false
    private _auroraParameters = new DataSourceParametersAuroraParametersPropertyOutputReference(this, "aurora_parameters");
    public get auroraParameters() {
        return this._auroraParameters;
    }
    public putAuroraParameters(value: DataSourceParametersAuroraParametersProperty) {
        this._auroraParameters.internalValue = value;
    }
    public resetAuroraParameters() {
        this._auroraParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auroraParametersInput() {
        return this._auroraParameters.internalValue;
    }

    // aurora_postgre_sql_parameters - computed: true, optional: true, required: false
    private _auroraPostgreSqlParameters = new DataSourceParametersAuroraPostgreSqlParametersPropertyOutputReference(this, "aurora_postgre_sql_parameters");
    public get auroraPostgreSqlParameters() {
        return this._auroraPostgreSqlParameters;
    }
    public putAuroraPostgreSqlParameters(value: DataSourceParametersAuroraPostgreSqlParametersProperty) {
        this._auroraPostgreSqlParameters.internalValue = value;
    }
    public resetAuroraPostgreSqlParameters() {
        this._auroraPostgreSqlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auroraPostgreSqlParametersInput() {
        return this._auroraPostgreSqlParameters.internalValue;
    }

    // databricks_parameters - computed: true, optional: true, required: false
    private _databricksParameters = new DataSourceParametersDatabricksParametersPropertyOutputReference(this, "databricks_parameters");
    public get databricksParameters() {
        return this._databricksParameters;
    }
    public putDatabricksParameters(value: DataSourceParametersDatabricksParametersProperty) {
        this._databricksParameters.internalValue = value;
    }
    public resetDatabricksParameters() {
        this._databricksParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databricksParametersInput() {
        return this._databricksParameters.internalValue;
    }

    // maria_db_parameters - computed: true, optional: true, required: false
    private _mariaDbParameters = new DataSourceParametersMariaDbParametersPropertyOutputReference(this, "maria_db_parameters");
    public get mariaDbParameters() {
        return this._mariaDbParameters;
    }
    public putMariaDbParameters(value: DataSourceParametersMariaDbParametersProperty) {
        this._mariaDbParameters.internalValue = value;
    }
    public resetMariaDbParameters() {
        this._mariaDbParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mariaDbParametersInput() {
        return this._mariaDbParameters.internalValue;
    }

    // my_sql_parameters - computed: true, optional: true, required: false
    private _mySqlParameters = new DataSourceParametersMySqlParametersPropertyOutputReference(this, "my_sql_parameters");
    public get mySqlParameters() {
        return this._mySqlParameters;
    }
    public putMySqlParameters(value: DataSourceParametersMySqlParametersProperty) {
        this._mySqlParameters.internalValue = value;
    }
    public resetMySqlParameters() {
        this._mySqlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mySqlParametersInput() {
        return this._mySqlParameters.internalValue;
    }

    // oracle_parameters - computed: true, optional: true, required: false
    private _oracleParameters = new DataSourceParametersOracleParametersPropertyOutputReference(this, "oracle_parameters");
    public get oracleParameters() {
        return this._oracleParameters;
    }
    public putOracleParameters(value: DataSourceParametersOracleParametersProperty) {
        this._oracleParameters.internalValue = value;
    }
    public resetOracleParameters() {
        this._oracleParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oracleParametersInput() {
        return this._oracleParameters.internalValue;
    }

    // postgre_sql_parameters - computed: true, optional: true, required: false
    private _postgreSqlParameters = new DataSourceParametersPostgreSqlParametersPropertyOutputReference(this, "postgre_sql_parameters");
    public get postgreSqlParameters() {
        return this._postgreSqlParameters;
    }
    public putPostgreSqlParameters(value: DataSourceParametersPostgreSqlParametersProperty) {
        this._postgreSqlParameters.internalValue = value;
    }
    public resetPostgreSqlParameters() {
        this._postgreSqlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postgreSqlParametersInput() {
        return this._postgreSqlParameters.internalValue;
    }

    // presto_parameters - computed: true, optional: true, required: false
    private _prestoParameters = new DataSourceParametersPrestoParametersPropertyOutputReference(this, "presto_parameters");
    public get prestoParameters() {
        return this._prestoParameters;
    }
    public putPrestoParameters(value: DataSourceParametersPrestoParametersProperty) {
        this._prestoParameters.internalValue = value;
    }
    public resetPrestoParameters() {
        this._prestoParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prestoParametersInput() {
        return this._prestoParameters.internalValue;
    }

    // rds_parameters - computed: true, optional: true, required: false
    private _rdsParameters = new DataSourceParametersRdsParametersPropertyOutputReference(this, "rds_parameters");
    public get rdsParameters() {
        return this._rdsParameters;
    }
    public putRdsParameters(value: DataSourceParametersRdsParametersProperty) {
        this._rdsParameters.internalValue = value;
    }
    public resetRdsParameters() {
        this._rdsParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsParametersInput() {
        return this._rdsParameters.internalValue;
    }

    // redshift_parameters - computed: true, optional: true, required: false
    private _redshiftParameters = new DataSourceParametersRedshiftParametersPropertyOutputReference(this, "redshift_parameters");
    public get redshiftParameters() {
        return this._redshiftParameters;
    }
    public putRedshiftParameters(value: DataSourceParametersRedshiftParametersProperty) {
        this._redshiftParameters.internalValue = value;
    }
    public resetRedshiftParameters() {
        this._redshiftParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftParametersInput() {
        return this._redshiftParameters.internalValue;
    }

    // s3_parameters - computed: true, optional: true, required: false
    private _s3Parameters = new DataSourceParametersS3ParametersPropertyOutputReference(this, "s3_parameters");
    public get s3Parameters() {
        return this._s3Parameters;
    }
    public putS3Parameters(value: DataSourceParametersS3ParametersProperty) {
        this._s3Parameters.internalValue = value;
    }
    public resetS3Parameters() {
        this._s3Parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ParametersInput() {
        return this._s3Parameters.internalValue;
    }

    // s3_tables_parameters - computed: true, optional: true, required: false
    private _s3TablesParameters = new DataSourceParametersS3TablesParametersPropertyOutputReference(this, "s3_tables_parameters");
    public get s3TablesParameters() {
        return this._s3TablesParameters;
    }
    public putS3TablesParameters(value: DataSourceParametersS3TablesParametersProperty) {
        this._s3TablesParameters.internalValue = value;
    }
    public resetS3TablesParameters() {
        this._s3TablesParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3TablesParametersInput() {
        return this._s3TablesParameters.internalValue;
    }

    // snowflake_parameters - computed: true, optional: true, required: false
    private _snowflakeParameters = new DataSourceParametersSnowflakeParametersPropertyOutputReference(this, "snowflake_parameters");
    public get snowflakeParameters() {
        return this._snowflakeParameters;
    }
    public putSnowflakeParameters(value: DataSourceParametersSnowflakeParametersProperty) {
        this._snowflakeParameters.internalValue = value;
    }
    public resetSnowflakeParameters() {
        this._snowflakeParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snowflakeParametersInput() {
        return this._snowflakeParameters.internalValue;
    }

    // spark_parameters - computed: true, optional: true, required: false
    private _sparkParameters = new DataSourceParametersSparkParametersPropertyOutputReference(this, "spark_parameters");
    public get sparkParameters() {
        return this._sparkParameters;
    }
    public putSparkParameters(value: DataSourceParametersSparkParametersProperty) {
        this._sparkParameters.internalValue = value;
    }
    public resetSparkParameters() {
        this._sparkParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sparkParametersInput() {
        return this._sparkParameters.internalValue;
    }

    // sql_server_parameters - computed: true, optional: true, required: false
    private _sqlServerParameters = new DataSourceParametersSqlServerParametersPropertyOutputReference(this, "sql_server_parameters");
    public get sqlServerParameters() {
        return this._sqlServerParameters;
    }
    public putSqlServerParameters(value: DataSourceParametersSqlServerParametersProperty) {
        this._sqlServerParameters.internalValue = value;
    }
    public resetSqlServerParameters() {
        this._sqlServerParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlServerParametersInput() {
        return this._sqlServerParameters.internalValue;
    }

    // starburst_parameters - computed: true, optional: true, required: false
    private _starburstParameters = new DataSourceParametersStarburstParametersPropertyOutputReference(this, "starburst_parameters");
    public get starburstParameters() {
        return this._starburstParameters;
    }
    public putStarburstParameters(value: DataSourceParametersStarburstParametersProperty) {
        this._starburstParameters.internalValue = value;
    }
    public resetStarburstParameters() {
        this._starburstParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get starburstParametersInput() {
        return this._starburstParameters.internalValue;
    }

    // teradata_parameters - computed: true, optional: true, required: false
    private _teradataParameters = new DataSourceParametersTeradataParametersPropertyOutputReference(this, "teradata_parameters");
    public get teradataParameters() {
        return this._teradataParameters;
    }
    public putTeradataParameters(value: DataSourceParametersTeradataParametersProperty) {
        this._teradataParameters.internalValue = value;
    }
    public resetTeradataParameters() {
        this._teradataParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get teradataParametersInput() {
        return this._teradataParameters.internalValue;
    }

    // trino_parameters - computed: true, optional: true, required: false
    private _trinoParameters = new DataSourceParametersTrinoParametersPropertyOutputReference(this, "trino_parameters");
    public get trinoParameters() {
        return this._trinoParameters;
    }
    public putTrinoParameters(value: DataSourceParametersTrinoParametersProperty) {
        this._trinoParameters.internalValue = value;
    }
    public resetTrinoParameters() {
        this._trinoParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trinoParametersInput() {
        return this._trinoParameters.internalValue;
    }
}
export interface DataSourceErrorInfoProperty {
    /**
    * <p>Error message.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#message CcDataSource#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#type CcDataSource#type}
    */
    readonly type?: string;
}
export class DataSourceErrorInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceErrorInfoProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DataSourceErrorInfoProperty | cdktn.IResolvable | undefined) {
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
export interface ResourcePermissionProperty {
    /**
    * <p>The IAM action to grant or revoke permissions on.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#actions CcDataSource#actions}
    */
    readonly actions?: string[];
    /**
    * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
    *             following:</p>
    *          <ul>
    *             <li>
    *                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
    *             </li>
    *             <li>
    *                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
    *             </li>
    *             <li>
    *                <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
    *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
    *                     (This is less common.) </p>
    *             </li>
    *          </ul>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#principal CcDataSource#principal}
    */
    readonly principal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#resource CcDataSource#resource}
    */
    readonly resource?: string;
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
        if (this._resource !== undefined) {
            hasAnyValues = true;
            internalValueResult.resource = this._resource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcePermissionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._principal = undefined;
            this._resource = undefined;
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
            this._resource = value.resource;
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

    // resource - computed: true, optional: true, required: false
    private _resource?: string; 
    public get resource() {
        return this.getStringAttribute('resource');
    }
    public set resource(value: string) {
        this._resource = value;
    }
    public resetResource() {
        this._resource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceInput() {
        return this._resource;
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
export interface SslPropertiesProperty {
    /**
    * <p>A Boolean option to control whether SSL should be disabled.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#disable_ssl CcDataSource#disable_ssl}
    */
    readonly disableSsl?: boolean | cdktn.IResolvable;
}
export class SslPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SslPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disableSsl !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableSsl = this._disableSsl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SslPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disableSsl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableSsl = value.disableSsl;
        }
    }

    // disable_ssl - computed: true, optional: true, required: false
    private _disableSsl?: boolean | cdktn.IResolvable; 
    public get disableSsl() {
        return this.getBooleanAttribute('disable_ssl');
    }
    public set disableSsl(value: boolean | cdktn.IResolvable) {
        this._disableSsl = value;
    }
    public resetDisableSsl() {
        this._disableSsl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableSslInput() {
        return this._disableSsl;
    }
}
export interface TagProperty {
    /**
    * <p>Tag key.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#key CcDataSource#key}
    */
    readonly key?: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#value CcDataSource#value}
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
export interface VpcConnectionPropertiesProperty2 {
    /**
    * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_source#vpc_connection_arn CcDataSource#vpc_connection_arn}
    */
    readonly vpcConnectionArn?: string;
}
export class VpcConnectionPropertiesProperty2OutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConnectionPropertiesProperty2 | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcConnectionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConnectionPropertiesProperty2 | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = value.vpcConnectionArn;
        }
    }

    // vpc_connection_arn - computed: true, optional: true, required: false
    private _vpcConnectionArn?: string; 
    public get vpcConnectionArn() {
        return this.getStringAttribute('vpc_connection_arn');
    }
    public set vpcConnectionArn(value: string) {
        this._vpcConnectionArn = value;
    }
    public resetVpcConnectionArn() {
        this._vpcConnectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConnectionArnInput() {
        return this._vpcConnectionArn;
    }
}
}
