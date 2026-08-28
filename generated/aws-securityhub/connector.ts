// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectorProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector#description CcConnector#description}
    */
    readonly description?: string;
    /**
    * The name of the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector#name CcConnector#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector#provider_name CcConnector#provider_name}
    */
    readonly providerName: CcConnector.ProviderNameProperty;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector#tags CcConnector#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector awscc_securityhub_connector}
*/
export class CcConnector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityhub_connector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnector to import
    * @param importFromId The id of the existing CcConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_connector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector awscc_securityhub_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectorProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityhub_connector',
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
        this._description = config.description;
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

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // issues - computed: true, optional: false, required: false
    private _issues = new CcConnector.IssuesPropertyList(this, "issues", false);
    public get issues() {
        return this._issues;
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
    private _providerName = new CcConnector.ProviderNamePropertyOutputReference(this, "provider_name");
    public get providerName() {
        return this._providerName;
    }
    public putProviderName(value: CcConnector.ProviderNameProperty) {
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
            name: cdktn.stringToTerraform(this._name),
            provider_name: ccConnectorProviderNamePropertyToTerraform(this._providerName.internalValue),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provider_name: {
                value: ccConnectorProviderNamePropertyToHclTerraform(this._providerName.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.ProviderNameProperty",
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

export function ccConnectorIssuesPropertyToTerraform(struct?: CcConnector.IssuesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConnectorIssuesPropertyToHclTerraform(struct?: CcConnector.IssuesProperty): any {
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
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorAzurePropertyToTerraform(struct?: CcConnector.AzureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_config_connector_arn: cdktn.stringToTerraform(struct!.awsConfigConnectorArn),
        azure_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.azureRegions),
        scope_configuration: ccConnectorScopeConfigurationPropertyToTerraform(struct!.scopeConfiguration),
    }
}


export function ccConnectorAzurePropertyToHclTerraform(struct?: CcConnector.AzureProperty | cdktn.IResolvable): any {
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
            value: ccConnectorScopeConfigurationPropertyToHclTerraform(struct!.scopeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ScopeConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProviderNamePropertyToTerraform(struct?: CcConnector.ProviderNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        azure: ccConnectorAzurePropertyToTerraform(struct!.azure),
    }
}


export function ccConnectorProviderNamePropertyToHclTerraform(struct?: CcConnector.ProviderNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        azure: {
            value: ccConnectorAzurePropertyToHclTerraform(struct!.azure),
            isBlock: true,
            type: "struct",
            storageClassType: "AzureProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConnector {
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
    * The type of scope. Valid values are ``tenant`` and ``subscription``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector#scope_type CcConnector#scope_type}
    */
    readonly scopeType: string;
    /**
    * The list of scope values, such as subscription IDs, when the scope type is ``subscription``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector#scope_values CcConnector#scope_values}
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

    // scope_type - computed: false, optional: false, required: true
    private _scopeType?: string; 
    public get scopeType() {
        return this.getStringAttribute('scope_type');
    }
    public set scopeType(value: string) {
        this._scopeType = value;
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
    * The ARN of the multi-cloud configuration connector used to establish the connection to Azure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector#aws_config_connector_arn CcConnector#aws_config_connector_arn}
    */
    readonly awsConfigConnectorArn: string;
    /**
    * The list of Azure regions to monitor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector#azure_regions CcConnector#azure_regions}
    */
    readonly azureRegions: string[];
    /**
    * The scope configuration that defines which Azure resources are monitored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector#scope_configuration CcConnector#scope_configuration}
    */
    readonly scopeConfiguration: ScopeConfigurationProperty;
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
        return cdktn.Fn.tolist(this.getListAttribute('azure_regions'));
    }
    public set azureRegions(value: string[]) {
        this._azureRegions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get azureRegionsInput() {
        return this._azureRegions;
    }

    // scope_configuration - computed: false, optional: false, required: true
    private _scopeConfiguration = new ScopeConfigurationPropertyOutputReference(this, "scope_configuration");
    public get scopeConfiguration() {
        return this._scopeConfiguration;
    }
    public putScopeConfiguration(value: ScopeConfigurationProperty) {
        this._scopeConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeConfigurationInput() {
        return this._scopeConfiguration.internalValue;
    }
}
export interface ProviderNameProperty {
    /**
    * The configuration for connecting to an Azure environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_connector#azure CcConnector#azure}
    */
    readonly azure: AzureProperty;
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProviderNameProperty | cdktn.IResolvable | undefined) {
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
    private _azure = new AzurePropertyOutputReference(this, "azure");
    public get azure() {
        return this._azure;
    }
    public putAzure(value: AzureProperty) {
        this._azure.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get azureInput() {
        return this._azure.internalValue;
    }
}
}
