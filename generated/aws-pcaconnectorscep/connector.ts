// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_connector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectorProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_connector#certificate_authority_arn CcConnector#certificate_authority_arn}
    */
    readonly certificateAuthorityArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_connector#mobile_device_management CcConnector#mobile_device_management}
    */
    readonly mobileDeviceManagement?: CcConnector.MobileDeviceManagementProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_connector#tags CcConnector#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_connector#vpc_endpoint_id CcConnector#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_connector awscc_pcaconnectorscep_connector}
*/
export class CcConnector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_pcaconnectorscep_connector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnector to import
    * @param importFromId The id of the existing CcConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcaconnectorscep_connector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_connector awscc_pcaconnectorscep_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectorProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_pcaconnectorscep_connector',
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
        this._certificateAuthorityArn = config.certificateAuthorityArn;
        this._mobileDeviceManagement.internalValue = config.mobileDeviceManagement;
        this._tags = config.tags;
        this._vpcEndpointId = config.vpcEndpointId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_authority_arn - computed: false, optional: false, required: true
    private _certificateAuthorityArn?: string; 
    public get certificateAuthorityArn() {
        return this.getStringAttribute('certificate_authority_arn');
    }
    public set certificateAuthorityArn(value: string) {
        this._certificateAuthorityArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityArnInput() {
        return this._certificateAuthorityArn;
    }

    // connector_arn - computed: true, optional: false, required: false
    public get connectorArn() {
        return this.getStringAttribute('connector_arn');
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // mobile_device_management - computed: true, optional: true, required: false
    private _mobileDeviceManagement = new CcConnector.MobileDeviceManagementPropertyOutputReference(this, "mobile_device_management");
    public get mobileDeviceManagement() {
        return this._mobileDeviceManagement;
    }
    public putMobileDeviceManagement(value: CcConnector.MobileDeviceManagementProperty) {
        this._mobileDeviceManagement.internalValue = value;
    }
    public resetMobileDeviceManagement() {
        this._mobileDeviceManagement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mobileDeviceManagementInput() {
        return this._mobileDeviceManagement.internalValue;
    }

    // open_id_configuration - computed: true, optional: false, required: false
    private _openIdConfiguration = new CcConnector.OpenIdConfigurationPropertyOutputReference(this, "open_id_configuration");
    public get openIdConfiguration() {
        return this._openIdConfiguration;
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

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // vpc_endpoint_id - computed: true, optional: true, required: false
    private _vpcEndpointId?: string; 
    public get vpcEndpointId() {
        return this.getStringAttribute('vpc_endpoint_id');
    }
    public set vpcEndpointId(value: string) {
        this._vpcEndpointId = value;
    }
    public resetVpcEndpointId() {
        this._vpcEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdInput() {
        return this._vpcEndpointId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            certificate_authority_arn: cdktn.stringToTerraform(this._certificateAuthorityArn),
            mobile_device_management: ccConnectorMobileDeviceManagementPropertyToTerraform(this._mobileDeviceManagement.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            vpc_endpoint_id: cdktn.stringToTerraform(this._vpcEndpointId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate_authority_arn: {
                value: cdktn.stringToHclTerraform(this._certificateAuthorityArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mobile_device_management: {
                value: ccConnectorMobileDeviceManagementPropertyToHclTerraform(this._mobileDeviceManagement.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.MobileDeviceManagementProperty",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            vpc_endpoint_id: {
                value: cdktn.stringToHclTerraform(this._vpcEndpointId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectorIntuneConfigurationPropertyToTerraform(struct?: CcConnector.IntuneConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        azure_application_id: cdktn.stringToTerraform(struct!.azureApplicationId),
        domain: cdktn.stringToTerraform(struct!.domain),
    }
}


export function ccConnectorIntuneConfigurationPropertyToHclTerraform(struct?: CcConnector.IntuneConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        azure_application_id: {
            value: cdktn.stringToHclTerraform(struct!.azureApplicationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccConnectorMobileDeviceManagementPropertyToTerraform(struct?: CcConnector.MobileDeviceManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        intune: ccConnectorIntuneConfigurationPropertyToTerraform(struct!.intune),
    }
}


export function ccConnectorMobileDeviceManagementPropertyToHclTerraform(struct?: CcConnector.MobileDeviceManagementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        intune: {
            value: ccConnectorIntuneConfigurationPropertyToHclTerraform(struct!.intune),
            isBlock: true,
            type: "struct",
            storageClassType: "IntuneConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorOpenIdConfigurationPropertyToTerraform(struct?: CcConnector.OpenIdConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConnectorOpenIdConfigurationPropertyToHclTerraform(struct?: CcConnector.OpenIdConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcConnector {
export interface IntuneConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_connector#azure_application_id CcConnector#azure_application_id}
    */
    readonly azureApplicationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_connector#domain CcConnector#domain}
    */
    readonly domain?: string;
}
export class IntuneConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntuneConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._azureApplicationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.azureApplicationId = this._azureApplicationId;
        }
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntuneConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._azureApplicationId = undefined;
            this._domain = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._azureApplicationId = value.azureApplicationId;
            this._domain = value.domain;
        }
    }

    // azure_application_id - computed: true, optional: true, required: false
    private _azureApplicationId?: string; 
    public get azureApplicationId() {
        return this.getStringAttribute('azure_application_id');
    }
    public set azureApplicationId(value: string) {
        this._azureApplicationId = value;
    }
    public resetAzureApplicationId() {
        this._azureApplicationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azureApplicationIdInput() {
        return this._azureApplicationId;
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
export interface MobileDeviceManagementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_connector#intune CcConnector#intune}
    */
    readonly intune?: IntuneConfigurationProperty;
}
export class MobileDeviceManagementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MobileDeviceManagementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._intune?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.intune = this._intune?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MobileDeviceManagementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._intune.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._intune.internalValue = value.intune;
        }
    }

    // intune - computed: true, optional: true, required: false
    private _intune = new IntuneConfigurationPropertyOutputReference(this, "intune");
    public get intune() {
        return this._intune;
    }
    public putIntune(value: IntuneConfigurationProperty) {
        this._intune.internalValue = value;
    }
    public resetIntune() {
        this._intune.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intuneInput() {
        return this._intune.internalValue;
    }
}
export interface OpenIdConfigurationProperty {
}
export class OpenIdConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenIdConfigurationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenIdConfigurationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // audience - computed: true, optional: false, required: false
    public get audience() {
        return this.getStringAttribute('audience');
    }

    // issuer - computed: true, optional: false, required: false
    public get issuer() {
        return this.getStringAttribute('issuer');
    }

    // subject - computed: true, optional: false, required: false
    public get subject() {
        return this.getStringAttribute('subject');
    }
}
}
