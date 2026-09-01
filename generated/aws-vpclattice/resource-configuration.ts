// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourceConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#allow_association_to_sharable_service_network CcResourceConfiguration#allow_association_to_sharable_service_network}
    */
    readonly allowAssociationToSharableServiceNetwork?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#custom_domain_name CcResourceConfiguration#custom_domain_name}
    */
    readonly customDomainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_verification_id CcResourceConfiguration#domain_verification_id}
    */
    readonly domainVerificationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#group_domain CcResourceConfiguration#group_domain}
    */
    readonly groupDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#name CcResourceConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#port_ranges CcResourceConfiguration#port_ranges}
    */
    readonly portRanges?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#protocol_type CcResourceConfiguration#protocol_type}
    */
    readonly protocolType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_auth_type CcResourceConfiguration#resource_configuration_auth_type}
    */
    readonly resourceConfigurationAuthType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_definition CcResourceConfiguration#resource_configuration_definition}
    */
    readonly resourceConfigurationDefinition?: CcResourceConfiguration.ResourceConfigurationDefinitionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id CcResourceConfiguration#resource_configuration_group_id}
    */
    readonly resourceConfigurationGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_type CcResourceConfiguration#resource_configuration_type}
    */
    readonly resourceConfigurationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_gateway_id CcResourceConfiguration#resource_gateway_id}
    */
    readonly resourceGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#tags CcResourceConfiguration#tags}
    */
    readonly tags?: CcResourceConfiguration.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration awscc_vpclattice_resource_configuration}
*/
export class CcResourceConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_vpclattice_resource_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourceConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourceConfiguration to import
    * @param importFromId The id of the existing CcResourceConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourceConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_vpclattice_resource_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration awscc_vpclattice_resource_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourceConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcResourceConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_vpclattice_resource_configuration',
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
        this._allowAssociationToSharableServiceNetwork = config.allowAssociationToSharableServiceNetwork;
        this._customDomainName = config.customDomainName;
        this._domainVerificationId = config.domainVerificationId;
        this._groupDomain = config.groupDomain;
        this._name = config.name;
        this._portRanges = config.portRanges;
        this._protocolType = config.protocolType;
        this._resourceConfigurationAuthType = config.resourceConfigurationAuthType;
        this._resourceConfigurationDefinition.internalValue = config.resourceConfigurationDefinition;
        this._resourceConfigurationGroupId = config.resourceConfigurationGroupId;
        this._resourceConfigurationType = config.resourceConfigurationType;
        this._resourceGatewayId = config.resourceGatewayId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_association_to_sharable_service_network - computed: true, optional: true, required: false
    private _allowAssociationToSharableServiceNetwork?: boolean | cdktn.IResolvable; 
    public get allowAssociationToSharableServiceNetwork() {
        return this.getBooleanAttribute('allow_association_to_sharable_service_network');
    }
    public set allowAssociationToSharableServiceNetwork(value: boolean | cdktn.IResolvable) {
        this._allowAssociationToSharableServiceNetwork = value;
    }
    public resetAllowAssociationToSharableServiceNetwork() {
        this._allowAssociationToSharableServiceNetwork = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowAssociationToSharableServiceNetworkInput() {
        return this._allowAssociationToSharableServiceNetwork;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // custom_domain_name - computed: true, optional: true, required: false
    private _customDomainName?: string; 
    public get customDomainName() {
        return this.getStringAttribute('custom_domain_name');
    }
    public set customDomainName(value: string) {
        this._customDomainName = value;
    }
    public resetCustomDomainName() {
        this._customDomainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDomainNameInput() {
        return this._customDomainName;
    }

    // domain_verification_id - computed: true, optional: true, required: false
    private _domainVerificationId?: string; 
    public get domainVerificationId() {
        return this.getStringAttribute('domain_verification_id');
    }
    public set domainVerificationId(value: string) {
        this._domainVerificationId = value;
    }
    public resetDomainVerificationId() {
        this._domainVerificationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainVerificationIdInput() {
        return this._domainVerificationId;
    }

    // group_domain - computed: true, optional: true, required: false
    private _groupDomain?: string; 
    public get groupDomain() {
        return this.getStringAttribute('group_domain');
    }
    public set groupDomain(value: string) {
        this._groupDomain = value;
    }
    public resetGroupDomain() {
        this._groupDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupDomainInput() {
        return this._groupDomain;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // port_ranges - computed: true, optional: true, required: false
    private _portRanges?: string[]; 
    public get portRanges() {
        return this.getListAttribute('port_ranges');
    }
    public set portRanges(value: string[]) {
        this._portRanges = value;
    }
    public resetPortRanges() {
        this._portRanges = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portRangesInput() {
        return this._portRanges;
    }

    // protocol_type - computed: true, optional: true, required: false
    private _protocolType?: string; 
    public get protocolType() {
        return this.getStringAttribute('protocol_type');
    }
    public set protocolType(value: string) {
        this._protocolType = value;
    }
    public resetProtocolType() {
        this._protocolType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolTypeInput() {
        return this._protocolType;
    }

    // resource_configuration_auth_type - computed: true, optional: true, required: false
    private _resourceConfigurationAuthType?: string; 
    public get resourceConfigurationAuthType() {
        return this.getStringAttribute('resource_configuration_auth_type');
    }
    public set resourceConfigurationAuthType(value: string) {
        this._resourceConfigurationAuthType = value;
    }
    public resetResourceConfigurationAuthType() {
        this._resourceConfigurationAuthType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationAuthTypeInput() {
        return this._resourceConfigurationAuthType;
    }

    // resource_configuration_definition - computed: true, optional: true, required: false
    private _resourceConfigurationDefinition = new CcResourceConfiguration.ResourceConfigurationDefinitionPropertyOutputReference(this, "resource_configuration_definition");
    public get resourceConfigurationDefinition() {
        return this._resourceConfigurationDefinition;
    }
    public putResourceConfigurationDefinition(value: CcResourceConfiguration.ResourceConfigurationDefinitionProperty) {
        this._resourceConfigurationDefinition.internalValue = value;
    }
    public resetResourceConfigurationDefinition() {
        this._resourceConfigurationDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationDefinitionInput() {
        return this._resourceConfigurationDefinition.internalValue;
    }

    // resource_configuration_group_id - computed: true, optional: true, required: false
    private _resourceConfigurationGroupId?: string; 
    public get resourceConfigurationGroupId() {
        return this.getStringAttribute('resource_configuration_group_id');
    }
    public set resourceConfigurationGroupId(value: string) {
        this._resourceConfigurationGroupId = value;
    }
    public resetResourceConfigurationGroupId() {
        this._resourceConfigurationGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationGroupIdInput() {
        return this._resourceConfigurationGroupId;
    }

    // resource_configuration_id - computed: true, optional: false, required: false
    public get resourceConfigurationId() {
        return this.getStringAttribute('resource_configuration_id');
    }

    // resource_configuration_type - computed: false, optional: false, required: true
    private _resourceConfigurationType?: string; 
    public get resourceConfigurationType() {
        return this.getStringAttribute('resource_configuration_type');
    }
    public set resourceConfigurationType(value: string) {
        this._resourceConfigurationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationTypeInput() {
        return this._resourceConfigurationType;
    }

    // resource_gateway_id - computed: true, optional: true, required: false
    private _resourceGatewayId?: string; 
    public get resourceGatewayId() {
        return this.getStringAttribute('resource_gateway_id');
    }
    public set resourceGatewayId(value: string) {
        this._resourceGatewayId = value;
    }
    public resetResourceGatewayId() {
        this._resourceGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceGatewayIdInput() {
        return this._resourceGatewayId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcResourceConfiguration.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcResourceConfiguration.TagProperty[] | cdktn.IResolvable) {
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
            allow_association_to_sharable_service_network: cdktn.booleanToTerraform(this._allowAssociationToSharableServiceNetwork),
            custom_domain_name: cdktn.stringToTerraform(this._customDomainName),
            domain_verification_id: cdktn.stringToTerraform(this._domainVerificationId),
            group_domain: cdktn.stringToTerraform(this._groupDomain),
            name: cdktn.stringToTerraform(this._name),
            port_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(this._portRanges),
            protocol_type: cdktn.stringToTerraform(this._protocolType),
            resource_configuration_auth_type: cdktn.stringToTerraform(this._resourceConfigurationAuthType),
            resource_configuration_definition: ccResourceConfigurationResourceConfigurationDefinitionPropertyToTerraform(this._resourceConfigurationDefinition.internalValue),
            resource_configuration_group_id: cdktn.stringToTerraform(this._resourceConfigurationGroupId),
            resource_configuration_type: cdktn.stringToTerraform(this._resourceConfigurationType),
            resource_gateway_id: cdktn.stringToTerraform(this._resourceGatewayId),
            tags: cdktn.listMapper(ccResourceConfigurationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allow_association_to_sharable_service_network: {
                value: cdktn.booleanToHclTerraform(this._allowAssociationToSharableServiceNetwork),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            custom_domain_name: {
                value: cdktn.stringToHclTerraform(this._customDomainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_verification_id: {
                value: cdktn.stringToHclTerraform(this._domainVerificationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group_domain: {
                value: cdktn.stringToHclTerraform(this._groupDomain),
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
            port_ranges: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._portRanges),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            protocol_type: {
                value: cdktn.stringToHclTerraform(this._protocolType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_configuration_auth_type: {
                value: cdktn.stringToHclTerraform(this._resourceConfigurationAuthType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_configuration_definition: {
                value: ccResourceConfigurationResourceConfigurationDefinitionPropertyToHclTerraform(this._resourceConfigurationDefinition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResourceConfiguration.ResourceConfigurationDefinitionProperty",
            },
            resource_configuration_group_id: {
                value: cdktn.stringToHclTerraform(this._resourceConfigurationGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_configuration_type: {
                value: cdktn.stringToHclTerraform(this._resourceConfigurationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_gateway_id: {
                value: cdktn.stringToHclTerraform(this._resourceGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccResourceConfigurationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcResourceConfiguration.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResourceConfigurationDnsResourcePropertyToTerraform(struct?: CcResourceConfiguration.DnsResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_name: cdktn.stringToTerraform(struct!.domainName),
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    }
}


export function ccResourceConfigurationDnsResourcePropertyToHclTerraform(struct?: CcResourceConfiguration.DnsResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_name: {
            value: cdktn.stringToHclTerraform(struct!.domainName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.ipAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResourceConfigurationResourceConfigurationDefinitionPropertyToTerraform(struct?: CcResourceConfiguration.ResourceConfigurationDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn_resource: cdktn.stringToTerraform(struct!.arnResource),
        dns_resource: ccResourceConfigurationDnsResourcePropertyToTerraform(struct!.dnsResource),
        ip_resource: cdktn.stringToTerraform(struct!.ipResource),
    }
}


export function ccResourceConfigurationResourceConfigurationDefinitionPropertyToHclTerraform(struct?: CcResourceConfiguration.ResourceConfigurationDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn_resource: {
            value: cdktn.stringToHclTerraform(struct!.arnResource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dns_resource: {
            value: ccResourceConfigurationDnsResourcePropertyToHclTerraform(struct!.dnsResource),
            isBlock: true,
            type: "struct",
            storageClassType: "DnsResourceProperty",
        },
        ip_resource: {
            value: cdktn.stringToHclTerraform(struct!.ipResource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResourceConfigurationTagPropertyToTerraform(struct?: CcResourceConfiguration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccResourceConfigurationTagPropertyToHclTerraform(struct?: CcResourceConfiguration.TagProperty | cdktn.IResolvable): any {
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


export namespace CcResourceConfiguration {
export interface DnsResourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_name CcResourceConfiguration#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#ip_address_type CcResourceConfiguration#ip_address_type}
    */
    readonly ipAddressType?: string;
}
export class DnsResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DnsResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainName !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainName = this._domainName;
        }
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DnsResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainName = undefined;
            this._ipAddressType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainName = value.domainName;
            this._ipAddressType = value.ipAddressType;
        }
    }

    // domain_name - computed: true, optional: true, required: false
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    public resetDomainName() {
        this._domainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
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
}
export interface ResourceConfigurationDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#arn_resource CcResourceConfiguration#arn_resource}
    */
    readonly arnResource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#dns_resource CcResourceConfiguration#dns_resource}
    */
    readonly dnsResource?: DnsResourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#ip_resource CcResourceConfiguration#ip_resource}
    */
    readonly ipResource?: string;
}
export class ResourceConfigurationDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceConfigurationDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arnResource !== undefined) {
            hasAnyValues = true;
            internalValueResult.arnResource = this._arnResource;
        }
        if (this._dnsResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsResource = this._dnsResource?.internalValue;
        }
        if (this._ipResource !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipResource = this._ipResource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceConfigurationDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arnResource = undefined;
            this._dnsResource.internalValue = undefined;
            this._ipResource = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arnResource = value.arnResource;
            this._dnsResource.internalValue = value.dnsResource;
            this._ipResource = value.ipResource;
        }
    }

    // arn_resource - computed: true, optional: true, required: false
    private _arnResource?: string; 
    public get arnResource() {
        return this.getStringAttribute('arn_resource');
    }
    public set arnResource(value: string) {
        this._arnResource = value;
    }
    public resetArnResource() {
        this._arnResource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnResourceInput() {
        return this._arnResource;
    }

    // dns_resource - computed: true, optional: true, required: false
    private _dnsResource = new DnsResourcePropertyOutputReference(this, "dns_resource");
    public get dnsResource() {
        return this._dnsResource;
    }
    public putDnsResource(value: DnsResourceProperty) {
        this._dnsResource.internalValue = value;
    }
    public resetDnsResource() {
        this._dnsResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsResourceInput() {
        return this._dnsResource.internalValue;
    }

    // ip_resource - computed: true, optional: true, required: false
    private _ipResource?: string; 
    public get ipResource() {
        return this.getStringAttribute('ip_resource');
    }
    public set ipResource(value: string) {
        this._ipResource = value;
    }
    public resetIpResource() {
        this._ipResource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipResourceInput() {
        return this._ipResource;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#key CcResourceConfiguration#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#value CcResourceConfiguration#value}
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
