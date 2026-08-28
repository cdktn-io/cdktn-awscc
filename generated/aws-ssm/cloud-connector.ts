// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCloudConnectorProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the AWS Config connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#config_connector_arn CcCloudConnector#config_connector_arn}
    */
    readonly configConnectorArn: string;
    /**
    * The configuration for the cloud connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#configuration CcCloudConnector#configuration}
    */
    readonly configuration: CcCloudConnector.CloudConnectorConfigurationProperty;
    /**
    * The description of the cloud connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#description CcCloudConnector#description}
    */
    readonly description?: string;
    /**
    * The display name of the cloud connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#display_name CcCloudConnector#display_name}
    */
    readonly displayName: string;
    /**
    * The IAM role ARN used by the cloud connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#role_arn CcCloudConnector#role_arn}
    */
    readonly roleArn: string;
    /**
    * Tags to apply to the cloud connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#tags CcCloudConnector#tags}
    */
    readonly tags?: CcCloudConnector.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector awscc_ssm_cloud_connector}
*/
export class CcCloudConnector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssm_cloud_connector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCloudConnector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCloudConnector to import
    * @param importFromId The id of the existing CcCloudConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCloudConnector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_cloud_connector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector awscc_ssm_cloud_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCloudConnectorProps
    */
    public constructor(scope: Construct, id: string, config: CcCloudConnectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssm_cloud_connector',
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
        this._configConnectorArn = config.configConnectorArn;
        this._configuration.internalValue = config.configuration;
        this._description = config.description;
        this._displayName = config.displayName;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cloud_connector_arn - computed: true, optional: false, required: false
    public get cloudConnectorArn() {
        return this.getStringAttribute('cloud_connector_arn');
    }

    // cloud_connector_id - computed: true, optional: false, required: false
    public get cloudConnectorId() {
        return this.getStringAttribute('cloud_connector_id');
    }

    // config_connector_arn - computed: false, optional: false, required: true
    private _configConnectorArn?: string; 
    public get configConnectorArn() {
        return this.getStringAttribute('config_connector_arn');
    }
    public set configConnectorArn(value: string) {
        this._configConnectorArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configConnectorArnInput() {
        return this._configConnectorArn;
    }

    // configuration - computed: false, optional: false, required: true
    private _configuration = new CcCloudConnector.CloudConnectorConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcCloudConnector.CloudConnectorConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
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

    // display_name - computed: false, optional: false, required: true
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCloudConnector.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCloudConnector.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            config_connector_arn: cdktn.stringToTerraform(this._configConnectorArn),
            configuration: ccCloudConnectorCloudConnectorConfigurationPropertyToTerraform(this._configuration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccCloudConnectorTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            config_connector_arn: {
                value: cdktn.stringToHclTerraform(this._configConnectorArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration: {
                value: ccCloudConnectorCloudConnectorConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCloudConnector.CloudConnectorConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCloudConnectorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCloudConnector.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCloudConnectorAzureSubscriptionPropertyToTerraform(struct?: CcCloudConnector.AzureSubscriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        display_name: cdktn.stringToTerraform(struct!.displayName),
        id: cdktn.stringToTerraform(struct!.id),
    }
}


export function ccCloudConnectorAzureSubscriptionPropertyToHclTerraform(struct?: CcCloudConnector.AzureSubscriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        display_name: {
            value: cdktn.stringToHclTerraform(struct!.displayName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudConnectorConfigurationTargetsPropertyToTerraform(struct?: CcCloudConnector.ConfigurationTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        subscriptions: cdktn.listMapper(ccCloudConnectorAzureSubscriptionPropertyToTerraform, false)(struct!.subscriptions),
    }
}


export function ccCloudConnectorConfigurationTargetsPropertyToHclTerraform(struct?: CcCloudConnector.ConfigurationTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        subscriptions: {
            value: cdktn.listMapperHcl(ccCloudConnectorAzureSubscriptionPropertyToHclTerraform, false)(struct!.subscriptions),
            isBlock: true,
            type: "list",
            storageClassType: "AzureSubscriptionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudConnectorAzureConfigurationPropertyToTerraform(struct?: CcCloudConnector.AzureConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_display_name: cdktn.stringToTerraform(struct!.applicationDisplayName),
        application_id: cdktn.stringToTerraform(struct!.applicationId),
        targets: ccCloudConnectorConfigurationTargetsPropertyToTerraform(struct!.targets),
        tenant_display_name: cdktn.stringToTerraform(struct!.tenantDisplayName),
        tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    }
}


export function ccCloudConnectorAzureConfigurationPropertyToHclTerraform(struct?: CcCloudConnector.AzureConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_display_name: {
            value: cdktn.stringToHclTerraform(struct!.applicationDisplayName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        application_id: {
            value: cdktn.stringToHclTerraform(struct!.applicationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        targets: {
            value: ccCloudConnectorConfigurationTargetsPropertyToHclTerraform(struct!.targets),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationTargetsProperty",
        },
        tenant_display_name: {
            value: cdktn.stringToHclTerraform(struct!.tenantDisplayName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudConnectorCloudConnectorConfigurationPropertyToTerraform(struct?: CcCloudConnector.CloudConnectorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        azure_configuration: ccCloudConnectorAzureConfigurationPropertyToTerraform(struct!.azureConfiguration),
    }
}


export function ccCloudConnectorCloudConnectorConfigurationPropertyToHclTerraform(struct?: CcCloudConnector.CloudConnectorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        azure_configuration: {
            value: ccCloudConnectorAzureConfigurationPropertyToHclTerraform(struct!.azureConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AzureConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudConnectorTagPropertyToTerraform(struct?: CcCloudConnector.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCloudConnectorTagPropertyToHclTerraform(struct?: CcCloudConnector.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCloudConnector {
export interface AzureSubscriptionProperty {
    /**
    * The display name of the Azure subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#display_name CcCloudConnector#display_name}
    */
    readonly displayName?: string;
    /**
    * The Azure subscription ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#id CcCloudConnector#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export class AzureSubscriptionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AzureSubscriptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._displayName !== undefined) {
            hasAnyValues = true;
            internalValueResult.displayName = this._displayName;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AzureSubscriptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._displayName = undefined;
            this._id = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._displayName = value.displayName;
            this._id = value.id;
        }
    }

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }
}

export class AzureSubscriptionPropertyList extends cdktn.ComplexList {
    public internalValue? : AzureSubscriptionProperty[] | cdktn.IResolvable

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
    public get(index: number): AzureSubscriptionPropertyOutputReference {
        return new AzureSubscriptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationTargetsProperty {
    /**
    * List of Azure subscriptions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#subscriptions CcCloudConnector#subscriptions}
    */
    readonly subscriptions?: AzureSubscriptionProperty[] | cdktn.IResolvable;
}
export class ConfigurationTargetsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationTargetsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._subscriptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subscriptions = this._subscriptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationTargetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._subscriptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._subscriptions.internalValue = value.subscriptions;
        }
    }

    // subscriptions - computed: true, optional: true, required: false
    private _subscriptions = new AzureSubscriptionPropertyList(this, "subscriptions", false);
    public get subscriptions() {
        return this._subscriptions;
    }
    public putSubscriptions(value: AzureSubscriptionProperty[] | cdktn.IResolvable) {
        this._subscriptions.internalValue = value;
    }
    public resetSubscriptions() {
        this._subscriptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subscriptionsInput() {
        return this._subscriptions.internalValue;
    }
}
export interface AzureConfigurationProperty {
    /**
    * The display name of the Azure AD application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#application_display_name CcCloudConnector#application_display_name}
    */
    readonly applicationDisplayName?: string;
    /**
    * The Azure AD application ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#application_id CcCloudConnector#application_id}
    */
    readonly applicationId: string;
    /**
    * The targets for the cloud connector. If omitted, the entire tenant is targeted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#targets CcCloudConnector#targets}
    */
    readonly targets?: ConfigurationTargetsProperty;
    /**
    * The display name of the Azure AD tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#tenant_display_name CcCloudConnector#tenant_display_name}
    */
    readonly tenantDisplayName?: string;
    /**
    * The Azure AD tenant ID. Cannot be changed after creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#tenant_id CcCloudConnector#tenant_id}
    */
    readonly tenantId: string;
}
export class AzureConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AzureConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationDisplayName !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationDisplayName = this._applicationDisplayName;
        }
        if (this._applicationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationId = this._applicationId;
        }
        if (this._targets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targets = this._targets?.internalValue;
        }
        if (this._tenantDisplayName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenantDisplayName = this._tenantDisplayName;
        }
        if (this._tenantId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenantId = this._tenantId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AzureConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationDisplayName = undefined;
            this._applicationId = undefined;
            this._targets.internalValue = undefined;
            this._tenantDisplayName = undefined;
            this._tenantId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationDisplayName = value.applicationDisplayName;
            this._applicationId = value.applicationId;
            this._targets.internalValue = value.targets;
            this._tenantDisplayName = value.tenantDisplayName;
            this._tenantId = value.tenantId;
        }
    }

    // application_display_name - computed: true, optional: true, required: false
    private _applicationDisplayName?: string; 
    public get applicationDisplayName() {
        return this.getStringAttribute('application_display_name');
    }
    public set applicationDisplayName(value: string) {
        this._applicationDisplayName = value;
    }
    public resetApplicationDisplayName() {
        this._applicationDisplayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationDisplayNameInput() {
        return this._applicationDisplayName;
    }

    // application_id - computed: false, optional: false, required: true
    private _applicationId?: string; 
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }
    public set applicationId(value: string) {
        this._applicationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdInput() {
        return this._applicationId;
    }

    // targets - computed: true, optional: true, required: false
    private _targets = new ConfigurationTargetsPropertyOutputReference(this, "targets");
    public get targets() {
        return this._targets;
    }
    public putTargets(value: ConfigurationTargetsProperty) {
        this._targets.internalValue = value;
    }
    public resetTargets() {
        this._targets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets.internalValue;
    }

    // tenant_display_name - computed: true, optional: true, required: false
    private _tenantDisplayName?: string; 
    public get tenantDisplayName() {
        return this.getStringAttribute('tenant_display_name');
    }
    public set tenantDisplayName(value: string) {
        this._tenantDisplayName = value;
    }
    public resetTenantDisplayName() {
        this._tenantDisplayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantDisplayNameInput() {
        return this._tenantDisplayName;
    }

    // tenant_id - computed: false, optional: false, required: true
    private _tenantId?: string; 
    public get tenantId() {
        return this.getStringAttribute('tenant_id');
    }
    public set tenantId(value: string) {
        this._tenantId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantIdInput() {
        return this._tenantId;
    }
}
export interface CloudConnectorConfigurationProperty {
    /**
    * Configuration for connecting to Azure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#azure_configuration CcCloudConnector#azure_configuration}
    */
    readonly azureConfiguration: AzureConfigurationProperty;
}
export class CloudConnectorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudConnectorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._azureConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.azureConfiguration = this._azureConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudConnectorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._azureConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._azureConfiguration.internalValue = value.azureConfiguration;
        }
    }

    // azure_configuration - computed: false, optional: false, required: true
    private _azureConfiguration = new AzureConfigurationPropertyOutputReference(this, "azure_configuration");
    public get azureConfiguration() {
        return this._azureConfiguration;
    }
    public putAzureConfiguration(value: AzureConfigurationProperty) {
        this._azureConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get azureConfigurationInput() {
        return this._azureConfiguration.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#key CcCloudConnector#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#value CcCloudConnector#value}
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
