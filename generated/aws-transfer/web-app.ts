// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWebAppProps extends cdktn.TerraformMetaArguments {
    /**
    * The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#access_endpoint CcWebApp#access_endpoint}
    */
    readonly accessEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#endpoint_details CcWebApp#endpoint_details}
    */
    readonly endpointDetails?: CcWebApp.EndpointDetailsProperty;
    /**
    * You can provide a structure that contains the details for the identity provider to use with your web app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#identity_provider_details CcWebApp#identity_provider_details}
    */
    readonly identityProviderDetails: CcWebApp.IdentityProviderDetailsProperty;
    /**
    * Key-value pairs that can be used to group and search for web apps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#tags CcWebApp#tags}
    */
    readonly tags?: CcWebApp.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#web_app_customization CcWebApp#web_app_customization}
    */
    readonly webAppCustomization?: CcWebApp.WebAppCustomizationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#web_app_endpoint_policy CcWebApp#web_app_endpoint_policy}
    */
    readonly webAppEndpointPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#web_app_units CcWebApp#web_app_units}
    */
    readonly webAppUnits?: CcWebApp.WebAppUnitsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app awscc_transfer_web_app}
*/
export class CcWebApp extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_transfer_web_app";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWebApp resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWebApp to import
    * @param importFromId The id of the existing CcWebApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWebApp to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_web_app", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app awscc_transfer_web_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWebAppProps
    */
    public constructor(scope: Construct, id: string, config: CcWebAppProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_transfer_web_app',
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
        this._accessEndpoint = config.accessEndpoint;
        this._endpointDetails.internalValue = config.endpointDetails;
        this._identityProviderDetails.internalValue = config.identityProviderDetails;
        this._tags.internalValue = config.tags;
        this._webAppCustomization.internalValue = config.webAppCustomization;
        this._webAppEndpointPolicy = config.webAppEndpointPolicy;
        this._webAppUnits.internalValue = config.webAppUnits;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_endpoint - computed: true, optional: true, required: false
    private _accessEndpoint?: string; 
    public get accessEndpoint() {
        return this.getStringAttribute('access_endpoint');
    }
    public set accessEndpoint(value: string) {
        this._accessEndpoint = value;
    }
    public resetAccessEndpoint() {
        this._accessEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessEndpointInput() {
        return this._accessEndpoint;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // endpoint_details - computed: true, optional: true, required: false
    private _endpointDetails = new CcWebApp.EndpointDetailsPropertyOutputReference(this, "endpoint_details");
    public get endpointDetails() {
        return this._endpointDetails;
    }
    public putEndpointDetails(value: CcWebApp.EndpointDetailsProperty) {
        this._endpointDetails.internalValue = value;
    }
    public resetEndpointDetails() {
        this._endpointDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointDetailsInput() {
        return this._endpointDetails.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_provider_details - computed: false, optional: false, required: true
    private _identityProviderDetails = new CcWebApp.IdentityProviderDetailsPropertyOutputReference(this, "identity_provider_details");
    public get identityProviderDetails() {
        return this._identityProviderDetails;
    }
    public putIdentityProviderDetails(value: CcWebApp.IdentityProviderDetailsProperty) {
        this._identityProviderDetails.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderDetailsInput() {
        return this._identityProviderDetails.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWebApp.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWebApp.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_endpoint_id - computed: true, optional: false, required: false
    public get vpcEndpointId() {
        return this.getStringAttribute('vpc_endpoint_id');
    }

    // web_app_customization - computed: true, optional: true, required: false
    private _webAppCustomization = new CcWebApp.WebAppCustomizationPropertyOutputReference(this, "web_app_customization");
    public get webAppCustomization() {
        return this._webAppCustomization;
    }
    public putWebAppCustomization(value: CcWebApp.WebAppCustomizationProperty) {
        this._webAppCustomization.internalValue = value;
    }
    public resetWebAppCustomization() {
        this._webAppCustomization.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webAppCustomizationInput() {
        return this._webAppCustomization.internalValue;
    }

    // web_app_endpoint_policy - computed: true, optional: true, required: false
    private _webAppEndpointPolicy?: string; 
    public get webAppEndpointPolicy() {
        return this.getStringAttribute('web_app_endpoint_policy');
    }
    public set webAppEndpointPolicy(value: string) {
        this._webAppEndpointPolicy = value;
    }
    public resetWebAppEndpointPolicy() {
        this._webAppEndpointPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webAppEndpointPolicyInput() {
        return this._webAppEndpointPolicy;
    }

    // web_app_id - computed: true, optional: false, required: false
    public get webAppId() {
        return this.getStringAttribute('web_app_id');
    }

    // web_app_units - computed: true, optional: true, required: false
    private _webAppUnits = new CcWebApp.WebAppUnitsPropertyOutputReference(this, "web_app_units");
    public get webAppUnits() {
        return this._webAppUnits;
    }
    public putWebAppUnits(value: CcWebApp.WebAppUnitsProperty) {
        this._webAppUnits.internalValue = value;
    }
    public resetWebAppUnits() {
        this._webAppUnits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webAppUnitsInput() {
        return this._webAppUnits.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_endpoint: cdktn.stringToTerraform(this._accessEndpoint),
            endpoint_details: ccWebAppEndpointDetailsPropertyToTerraform(this._endpointDetails.internalValue),
            identity_provider_details: ccWebAppIdentityProviderDetailsPropertyToTerraform(this._identityProviderDetails.internalValue),
            tags: cdktn.listMapper(ccWebAppTagPropertyToTerraform, false)(this._tags.internalValue),
            web_app_customization: ccWebAppWebAppCustomizationPropertyToTerraform(this._webAppCustomization.internalValue),
            web_app_endpoint_policy: cdktn.stringToTerraform(this._webAppEndpointPolicy),
            web_app_units: ccWebAppWebAppUnitsPropertyToTerraform(this._webAppUnits.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_endpoint: {
                value: cdktn.stringToHclTerraform(this._accessEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_details: {
                value: ccWebAppEndpointDetailsPropertyToHclTerraform(this._endpointDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWebApp.EndpointDetailsProperty",
            },
            identity_provider_details: {
                value: ccWebAppIdentityProviderDetailsPropertyToHclTerraform(this._identityProviderDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWebApp.IdentityProviderDetailsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWebAppTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWebApp.TagPropertyList",
            },
            web_app_customization: {
                value: ccWebAppWebAppCustomizationPropertyToHclTerraform(this._webAppCustomization.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWebApp.WebAppCustomizationProperty",
            },
            web_app_endpoint_policy: {
                value: cdktn.stringToHclTerraform(this._webAppEndpointPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            web_app_units: {
                value: ccWebAppWebAppUnitsPropertyToHclTerraform(this._webAppUnits.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWebApp.WebAppUnitsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWebAppVpcPropertyToTerraform(struct?: CcWebApp.VpcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
        vpc_id: cdktn.stringToTerraform(struct!.vpcId),
    }
}


export function ccWebAppVpcPropertyToHclTerraform(struct?: CcWebApp.VpcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.ipAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        vpc_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebAppEndpointDetailsPropertyToTerraform(struct?: CcWebApp.EndpointDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc: ccWebAppVpcPropertyToTerraform(struct!.vpc),
    }
}


export function ccWebAppEndpointDetailsPropertyToHclTerraform(struct?: CcWebApp.EndpointDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc: {
            value: ccWebAppVpcPropertyToHclTerraform(struct!.vpc),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebAppIdentityProviderDetailsPropertyToTerraform(struct?: CcWebApp.IdentityProviderDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_arn: cdktn.stringToTerraform(struct!.instanceArn),
        role: cdktn.stringToTerraform(struct!.role),
    }
}


export function ccWebAppIdentityProviderDetailsPropertyToHclTerraform(struct?: CcWebApp.IdentityProviderDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_arn: {
            value: cdktn.stringToHclTerraform(struct!.instanceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role: {
            value: cdktn.stringToHclTerraform(struct!.role),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebAppTagPropertyToTerraform(struct?: CcWebApp.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWebAppTagPropertyToHclTerraform(struct?: CcWebApp.TagProperty | cdktn.IResolvable): any {
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


export function ccWebAppWebAppCustomizationPropertyToTerraform(struct?: CcWebApp.WebAppCustomizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        favicon_file: cdktn.stringToTerraform(struct!.faviconFile),
        logo_file: cdktn.stringToTerraform(struct!.logoFile),
        title: cdktn.stringToTerraform(struct!.title),
    }
}


export function ccWebAppWebAppCustomizationPropertyToHclTerraform(struct?: CcWebApp.WebAppCustomizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        favicon_file: {
            value: cdktn.stringToHclTerraform(struct!.faviconFile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logo_file: {
            value: cdktn.stringToHclTerraform(struct!.logoFile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        title: {
            value: cdktn.stringToHclTerraform(struct!.title),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebAppWebAppUnitsPropertyToTerraform(struct?: CcWebApp.WebAppUnitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        provisioned: cdktn.numberToTerraform(struct!.provisioned),
    }
}


export function ccWebAppWebAppUnitsPropertyToHclTerraform(struct?: CcWebApp.WebAppUnitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        provisioned: {
            value: cdktn.numberToHclTerraform(struct!.provisioned),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcWebApp {
export interface VpcProperty {
    /**
    * The IP address type for the VPC endpoint used by the web app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#ip_address_type CcWebApp#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#security_group_ids CcWebApp#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#subnet_ids CcWebApp#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#vpc_id CcWebApp#vpc_id}
    */
    readonly vpcId?: string;
}
export class VpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        if (this._vpcId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcId = this._vpcId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipAddressType = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
            this._vpcId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipAddressType = value.ipAddressType;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
            this._vpcId = value.vpcId;
        }
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    public resetVpcId() {
        this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }
}
export interface EndpointDetailsProperty {
    /**
    * You can provide a structure that contains the details for the VPC endpoint to use with your web app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#vpc CcWebApp#vpc}
    */
    readonly vpc?: VpcProperty;
}
export class EndpointDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpc = this._vpc?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpc.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpc.internalValue = value.vpc;
        }
    }

    // vpc - computed: true, optional: true, required: false
    private _vpc = new VpcPropertyOutputReference(this, "vpc");
    public get vpc() {
        return this._vpc;
    }
    public putVpc(value: VpcProperty) {
        this._vpc.internalValue = value;
    }
    public resetVpc() {
        this._vpc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInput() {
        return this._vpc.internalValue;
    }
}
export interface IdentityProviderDetailsProperty {
    /**
    * The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#instance_arn CcWebApp#instance_arn}
    */
    readonly instanceArn?: string;
    /**
    * The IAM role in IAM Identity Center used for the web app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#role CcWebApp#role}
    */
    readonly role?: string;
}
export class IdentityProviderDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdentityProviderDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceArn = this._instanceArn;
        }
        if (this._role !== undefined) {
            hasAnyValues = true;
            internalValueResult.role = this._role;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdentityProviderDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceArn = undefined;
            this._role = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceArn = value.instanceArn;
            this._role = value.role;
        }
    }

    // application_arn - computed: true, optional: false, required: false
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }

    // instance_arn - computed: true, optional: true, required: false
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    public resetInstanceArn() {
        this._instanceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
    }

    // role - computed: true, optional: true, required: false
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    public resetRole() {
        this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#key CcWebApp#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#value CcWebApp#value}
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
export interface WebAppCustomizationProperty {
    /**
    * Specifies a favicon to display in the browser tab.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#favicon_file CcWebApp#favicon_file}
    */
    readonly faviconFile?: string;
    /**
    * Specifies a logo to display on the web app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#logo_file CcWebApp#logo_file}
    */
    readonly logoFile?: string;
    /**
    * Specifies a title to display on the web app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#title CcWebApp#title}
    */
    readonly title?: string;
}
export class WebAppCustomizationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WebAppCustomizationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._faviconFile !== undefined) {
            hasAnyValues = true;
            internalValueResult.faviconFile = this._faviconFile;
        }
        if (this._logoFile !== undefined) {
            hasAnyValues = true;
            internalValueResult.logoFile = this._logoFile;
        }
        if (this._title !== undefined) {
            hasAnyValues = true;
            internalValueResult.title = this._title;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WebAppCustomizationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._faviconFile = undefined;
            this._logoFile = undefined;
            this._title = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._faviconFile = value.faviconFile;
            this._logoFile = value.logoFile;
            this._title = value.title;
        }
    }

    // favicon_file - computed: true, optional: true, required: false
    private _faviconFile?: string; 
    public get faviconFile() {
        return this.getStringAttribute('favicon_file');
    }
    public set faviconFile(value: string) {
        this._faviconFile = value;
    }
    public resetFaviconFile() {
        this._faviconFile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get faviconFileInput() {
        return this._faviconFile;
    }

    // logo_file - computed: true, optional: true, required: false
    private _logoFile?: string; 
    public get logoFile() {
        return this.getStringAttribute('logo_file');
    }
    public set logoFile(value: string) {
        this._logoFile = value;
    }
    public resetLogoFile() {
        this._logoFile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logoFileInput() {
        return this._logoFile;
    }

    // title - computed: true, optional: true, required: false
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    public resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
    }
}
export interface WebAppUnitsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_web_app#provisioned CcWebApp#provisioned}
    */
    readonly provisioned?: number;
}
export class WebAppUnitsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WebAppUnitsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._provisioned !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisioned = this._provisioned;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WebAppUnitsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._provisioned = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._provisioned = value.provisioned;
        }
    }

    // provisioned - computed: true, optional: true, required: false
    private _provisioned?: number; 
    public get provisioned() {
        return this.getNumberAttribute('provisioned');
    }
    public set provisioned(value: number) {
        this._provisioned = value;
    }
    public resetProvisioned() {
        this._provisioned = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedInput() {
        return this._provisioned;
    }
}
}
