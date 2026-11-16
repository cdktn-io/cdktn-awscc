// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPrivateConnectionProps extends cdktn.TerraformMetaArguments {
    /**
    * The PEM-encoded certificate chain for the private connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#certificate CcPrivateConnection#certificate}
    */
    readonly certificate?: string;
    /**
    * The configuration for the private connection. Specify either a service-managed or a self-managed mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#mode CcPrivateConnection#mode}
    */
    readonly mode?: CcPrivateConnection.ModeProperty;
    /**
    * A unique name for the private connection within your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#private_connection_name CcPrivateConnection#private_connection_name}
    */
    readonly privateConnectionName: string;
    /**
    * The tags attached to the private connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#tags CcPrivateConnection#tags}
    */
    readonly tags?: CcPrivateConnection.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection awscc_securityagent_private_connection}
*/
export class CcPrivateConnection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityagent_private_connection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPrivateConnection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPrivateConnection to import
    * @param importFromId The id of the existing CcPrivateConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPrivateConnection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityagent_private_connection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection awscc_securityagent_private_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPrivateConnectionProps
    */
    public constructor(scope: Construct, id: string, config: CcPrivateConnectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityagent_private_connection',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._certificate = config.certificate;
        this._mode.internalValue = config.mode;
        this._privateConnectionName = config.privateConnectionName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // certificate - computed: true, optional: true, required: false
    private _certificate?: string; 
    public get certificate() {
        return this.getStringAttribute('certificate');
    }
    public set certificate(value: string) {
        this._certificate = value;
    }
    public resetCertificate() {
        this._certificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
        return this._certificate;
    }

    // certificate_expiry_time - computed: true, optional: false, required: false
    public get certificateExpiryTime() {
        return this.getStringAttribute('certificate_expiry_time');
    }

    // dns_resolution - computed: true, optional: false, required: false
    public get dnsResolution() {
        return this.getStringAttribute('dns_resolution');
    }

    // host_address - computed: true, optional: false, required: false
    public get hostAddress() {
        return this.getStringAttribute('host_address');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // mode - computed: true, optional: true, required: false
    private _mode = new CcPrivateConnection.ModePropertyOutputReference(this, "mode");
    public get mode() {
        return this._mode;
    }
    public putMode(value: CcPrivateConnection.ModeProperty) {
        this._mode.internalValue = value;
    }
    public resetMode() {
        this._mode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode.internalValue;
    }

    // private_connection_name - computed: false, optional: false, required: true
    private _privateConnectionName?: string; 
    public get privateConnectionName() {
        return this.getStringAttribute('private_connection_name');
    }
    public set privateConnectionName(value: string) {
        this._privateConnectionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get privateConnectionNameInput() {
        return this._privateConnectionName;
    }

    // resource_configuration_id - computed: true, optional: false, required: false
    public get resourceConfigurationId() {
        return this.getStringAttribute('resource_configuration_id');
    }

    // resource_gateway_id - computed: true, optional: false, required: false
    public get resourceGatewayId() {
        return this.getStringAttribute('resource_gateway_id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPrivateConnection.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPrivateConnection.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            certificate: cdktn.stringToTerraform(this._certificate),
            mode: ccPrivateConnectionModePropertyToTerraform(this._mode.internalValue),
            private_connection_name: cdktn.stringToTerraform(this._privateConnectionName),
            tags: cdktn.listMapper(ccPrivateConnectionTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate: {
                value: cdktn.stringToHclTerraform(this._certificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mode: {
                value: ccPrivateConnectionModePropertyToHclTerraform(this._mode.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPrivateConnection.ModeProperty",
            },
            private_connection_name: {
                value: cdktn.stringToHclTerraform(this._privateConnectionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPrivateConnectionTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcPrivateConnection.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPrivateConnectionSelfManagedPropertyToTerraform(struct?: CcPrivateConnection.SelfManagedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_configuration_id: cdktn.stringToTerraform(struct!.resourceConfigurationId),
    }
}


export function ccPrivateConnectionSelfManagedPropertyToHclTerraform(struct?: CcPrivateConnection.SelfManagedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_configuration_id: {
            value: cdktn.stringToHclTerraform(struct!.resourceConfigurationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPrivateConnectionServiceManagedPropertyToTerraform(struct?: CcPrivateConnection.ServiceManagedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dns_resolution: cdktn.stringToTerraform(struct!.dnsResolution),
        host_address: cdktn.stringToTerraform(struct!.hostAddress),
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
        ipv_4_addresses_per_eni: cdktn.numberToTerraform(struct!.ipv4AddressesPerEni),
        port_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.portRanges),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
        vpc_id: cdktn.stringToTerraform(struct!.vpcId),
    }
}


export function ccPrivateConnectionServiceManagedPropertyToHclTerraform(struct?: CcPrivateConnection.ServiceManagedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dns_resolution: {
            value: cdktn.stringToHclTerraform(struct!.dnsResolution),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_address: {
            value: cdktn.stringToHclTerraform(struct!.hostAddress),
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
        ipv_4_addresses_per_eni: {
            value: cdktn.numberToHclTerraform(struct!.ipv4AddressesPerEni),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        port_ranges: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.portRanges),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
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


export function ccPrivateConnectionModePropertyToTerraform(struct?: CcPrivateConnection.ModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        self_managed: ccPrivateConnectionSelfManagedPropertyToTerraform(struct!.selfManaged),
        service_managed: ccPrivateConnectionServiceManagedPropertyToTerraform(struct!.serviceManaged),
    }
}


export function ccPrivateConnectionModePropertyToHclTerraform(struct?: CcPrivateConnection.ModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        self_managed: {
            value: ccPrivateConnectionSelfManagedPropertyToHclTerraform(struct!.selfManaged),
            isBlock: true,
            type: "struct",
            storageClassType: "SelfManagedProperty",
        },
        service_managed: {
            value: ccPrivateConnectionServiceManagedPropertyToHclTerraform(struct!.serviceManaged),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceManagedProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPrivateConnectionTagsPropertyToTerraform(struct?: CcPrivateConnection.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPrivateConnectionTagsPropertyToHclTerraform(struct?: CcPrivateConnection.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcPrivateConnection {
export interface SelfManagedProperty {
    /**
    * The identifier or ARN of the resource configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#resource_configuration_id CcPrivateConnection#resource_configuration_id}
    */
    readonly resourceConfigurationId?: string;
}
export class SelfManagedPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelfManagedProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceConfigurationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceConfigurationId = this._resourceConfigurationId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelfManagedProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceConfigurationId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceConfigurationId = value.resourceConfigurationId;
        }
    }

    // resource_configuration_id - computed: true, optional: true, required: false
    private _resourceConfigurationId?: string; 
    public get resourceConfigurationId() {
        return this.getStringAttribute('resource_configuration_id');
    }
    public set resourceConfigurationId(value: string) {
        this._resourceConfigurationId = value;
    }
    public resetResourceConfigurationId() {
        this._resourceConfigurationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationIdInput() {
        return this._resourceConfigurationId;
    }
}
export interface ServiceManagedProperty {
    /**
    * The DNS resolution mode for the resource gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#dns_resolution CcPrivateConnection#dns_resolution}
    */
    readonly dnsResolution?: string;
    /**
    * The IP address or DNS name of the target resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#host_address CcPrivateConnection#host_address}
    */
    readonly hostAddress?: string;
    /**
    * The IP address type of the service-managed resource gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#ip_address_type CcPrivateConnection#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#ipv_4_addresses_per_eni CcPrivateConnection#ipv_4_addresses_per_eni}
    */
    readonly ipv4AddressesPerEni?: number;
    /**
    * The TCP port ranges that a consumer can use to access the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#port_ranges CcPrivateConnection#port_ranges}
    */
    readonly portRanges?: string[];
    /**
    * The security groups to attach to the service-managed resource gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#security_group_ids CcPrivateConnection#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The subnets that the service-managed resource gateway spans.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#subnet_ids CcPrivateConnection#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * The VPC to create the service-managed resource gateway in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#vpc_id CcPrivateConnection#vpc_id}
    */
    readonly vpcId?: string;
}
export class ServiceManagedPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceManagedProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dnsResolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsResolution = this._dnsResolution;
        }
        if (this._hostAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostAddress = this._hostAddress;
        }
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        if (this._ipv4AddressesPerEni !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4AddressesPerEni = this._ipv4AddressesPerEni;
        }
        if (this._portRanges !== undefined) {
            hasAnyValues = true;
            internalValueResult.portRanges = this._portRanges;
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

    public set internalValue(value: ServiceManagedProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dnsResolution = undefined;
            this._hostAddress = undefined;
            this._ipAddressType = undefined;
            this._ipv4AddressesPerEni = undefined;
            this._portRanges = undefined;
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
            this._dnsResolution = value.dnsResolution;
            this._hostAddress = value.hostAddress;
            this._ipAddressType = value.ipAddressType;
            this._ipv4AddressesPerEni = value.ipv4AddressesPerEni;
            this._portRanges = value.portRanges;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
            this._vpcId = value.vpcId;
        }
    }

    // dns_resolution - computed: true, optional: true, required: false
    private _dnsResolution?: string; 
    public get dnsResolution() {
        return this.getStringAttribute('dns_resolution');
    }
    public set dnsResolution(value: string) {
        this._dnsResolution = value;
    }
    public resetDnsResolution() {
        this._dnsResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsResolutionInput() {
        return this._dnsResolution;
    }

    // host_address - computed: true, optional: true, required: false
    private _hostAddress?: string; 
    public get hostAddress() {
        return this.getStringAttribute('host_address');
    }
    public set hostAddress(value: string) {
        this._hostAddress = value;
    }
    public resetHostAddress() {
        this._hostAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostAddressInput() {
        return this._hostAddress;
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

    // ipv_4_addresses_per_eni - computed: true, optional: true, required: false
    private _ipv4AddressesPerEni?: number; 
    public get ipv4AddressesPerEni() {
        return this.getNumberAttribute('ipv_4_addresses_per_eni');
    }
    public set ipv4AddressesPerEni(value: number) {
        this._ipv4AddressesPerEni = value;
    }
    public resetIpv4AddressesPerEni() {
        this._ipv4AddressesPerEni = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4AddressesPerEniInput() {
        return this._ipv4AddressesPerEni;
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
export interface ModeProperty {
    /**
    * The configuration for a self-managed private connection, where you manage your own resource configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#self_managed CcPrivateConnection#self_managed}
    */
    readonly selfManaged?: SelfManagedProperty;
    /**
    * The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#service_managed CcPrivateConnection#service_managed}
    */
    readonly serviceManaged?: ServiceManagedProperty;
}
export class ModePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._selfManaged?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfManaged = this._selfManaged?.internalValue;
        }
        if (this._serviceManaged?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceManaged = this._serviceManaged?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._selfManaged.internalValue = undefined;
            this._serviceManaged.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._selfManaged.internalValue = value.selfManaged;
            this._serviceManaged.internalValue = value.serviceManaged;
        }
    }

    // self_managed - computed: true, optional: true, required: false
    private _selfManaged = new SelfManagedPropertyOutputReference(this, "self_managed");
    public get selfManaged() {
        return this._selfManaged;
    }
    public putSelfManaged(value: SelfManagedProperty) {
        this._selfManaged.internalValue = value;
    }
    public resetSelfManaged() {
        this._selfManaged.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedInput() {
        return this._selfManaged.internalValue;
    }

    // service_managed - computed: true, optional: true, required: false
    private _serviceManaged = new ServiceManagedPropertyOutputReference(this, "service_managed");
    public get serviceManaged() {
        return this._serviceManaged;
    }
    public putServiceManaged(value: ServiceManagedProperty) {
        this._serviceManaged.internalValue = value;
    }
    public resetServiceManaged() {
        this._serviceManaged.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceManagedInput() {
        return this._serviceManaged.internalValue;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#key CcPrivateConnection#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/securityagent_private_connection#value CcPrivateConnection#value}
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
