// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResolverEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:
    * - INBOUND: allows DNS queries to your VPC from your network 
    * - OUTBOUND: allows DNS queries from your VPC to your network 
    * - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#direction CcResolverEndpoint#direction}
    */
    readonly direction: string;
    /**
    * Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint. When set to true, if a DNS AAAA query is made for a domain that has only an A (IPv4) record, the resolver automatically synthesizes an AAAA (IPv6) response by embedding the IPv4 address into the well-known prefix 64:ff9b::/96. Default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#dns_64_enabled CcResolverEndpoint#dns_64_enabled}
    */
    readonly dns64Enabled?: boolean | cdktn.IResolvable;
    /**
    * The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#ip_addresses CcResolverEndpoint#ip_addresses}
    */
    readonly ipAddresses: CcResolverEndpoint.IpAddressRequestProperty[] | cdktn.IResolvable;
    /**
    * Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint. When set to true, this property allows your Endpoint ENIs to reach public IPv6 target nameservers through an internet gateway. Default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#ipv_6_internet_access_enabled CcResolverEndpoint#ipv_6_internet_access_enabled}
    */
    readonly ipv6InternetAccessEnabled?: boolean | cdktn.IResolvable;
    /**
    * A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#name CcResolverEndpoint#name}
    */
    readonly name?: string;
    /**
    * The ARN (Amazon Resource Name) for the Outpost.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#outpost_arn CcResolverEndpoint#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * The Amazon EC2 instance type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#preferred_instance_type CcResolverEndpoint#preferred_instance_type}
    */
    readonly preferredInstanceType?: string;
    /**
    * Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#protocols CcResolverEndpoint#protocols}
    */
    readonly protocols?: string[];
    /**
    * The Resolver endpoint IP address type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#resolver_endpoint_type CcResolverEndpoint#resolver_endpoint_type}
    */
    readonly resolverEndpointType?: string;
    /**
    * Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints. When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When set to false, metrics are not published. Default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#rni_enhanced_metrics_enabled CcResolverEndpoint#rni_enhanced_metrics_enabled}
    */
    readonly rniEnhancedMetricsEnabled?: boolean | cdktn.IResolvable;
    /**
    * The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#security_group_ids CcResolverEndpoint#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#tags CcResolverEndpoint#tags}
    */
    readonly tags?: CcResolverEndpoint.TagProperty[] | cdktn.IResolvable;
    /**
    * Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint. When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When set to false, metrics are not published. Default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#target_name_server_metrics_enabled CcResolverEndpoint#target_name_server_metrics_enabled}
    */
    readonly targetNameServerMetricsEnabled?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint awscc_route53resolver_resolver_endpoint}
*/
export class CcResolverEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53resolver_resolver_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResolverEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResolverEndpoint to import
    * @param importFromId The id of the existing CcResolverEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResolverEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53resolver_resolver_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint awscc_route53resolver_resolver_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResolverEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcResolverEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53resolver_resolver_endpoint',
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
        this._direction = config.direction;
        this._dns64Enabled = config.dns64Enabled;
        this._ipAddresses.internalValue = config.ipAddresses;
        this._ipv6InternetAccessEnabled = config.ipv6InternetAccessEnabled;
        this._name = config.name;
        this._outpostArn = config.outpostArn;
        this._preferredInstanceType = config.preferredInstanceType;
        this._protocols = config.protocols;
        this._resolverEndpointType = config.resolverEndpointType;
        this._rniEnhancedMetricsEnabled = config.rniEnhancedMetricsEnabled;
        this._securityGroupIds = config.securityGroupIds;
        this._tags.internalValue = config.tags;
        this._targetNameServerMetricsEnabled = config.targetNameServerMetricsEnabled;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // direction - computed: false, optional: false, required: true
    private _direction?: string; 
    public get direction() {
        return this.getStringAttribute('direction');
    }
    public set direction(value: string) {
        this._direction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directionInput() {
        return this._direction;
    }

    // dns_64_enabled - computed: true, optional: true, required: false
    private _dns64Enabled?: boolean | cdktn.IResolvable; 
    public get dns64Enabled() {
        return this.getBooleanAttribute('dns_64_enabled');
    }
    public set dns64Enabled(value: boolean | cdktn.IResolvable) {
        this._dns64Enabled = value;
    }
    public resetDns64Enabled() {
        this._dns64Enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dns64EnabledInput() {
        return this._dns64Enabled;
    }

    // host_vpc_id - computed: true, optional: false, required: false
    public get hostVpcId() {
        return this.getStringAttribute('host_vpc_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_address_count - computed: true, optional: false, required: false
    public get ipAddressCount() {
        return this.getStringAttribute('ip_address_count');
    }

    // ip_addresses - computed: false, optional: false, required: true
    private _ipAddresses = new CcResolverEndpoint.IpAddressRequestPropertyList(this, "ip_addresses", false);
    public get ipAddresses() {
        return this._ipAddresses;
    }
    public putIpAddresses(value: CcResolverEndpoint.IpAddressRequestProperty[] | cdktn.IResolvable) {
        this._ipAddresses.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressesInput() {
        return this._ipAddresses.internalValue;
    }

    // ipv_6_internet_access_enabled - computed: true, optional: true, required: false
    private _ipv6InternetAccessEnabled?: boolean | cdktn.IResolvable; 
    public get ipv6InternetAccessEnabled() {
        return this.getBooleanAttribute('ipv_6_internet_access_enabled');
    }
    public set ipv6InternetAccessEnabled(value: boolean | cdktn.IResolvable) {
        this._ipv6InternetAccessEnabled = value;
    }
    public resetIpv6InternetAccessEnabled() {
        this._ipv6InternetAccessEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6InternetAccessEnabledInput() {
        return this._ipv6InternetAccessEnabled;
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

    // outpost_arn - computed: true, optional: true, required: false
    private _outpostArn?: string; 
    public get outpostArn() {
        return this.getStringAttribute('outpost_arn');
    }
    public set outpostArn(value: string) {
        this._outpostArn = value;
    }
    public resetOutpostArn() {
        this._outpostArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostArnInput() {
        return this._outpostArn;
    }

    // preferred_instance_type - computed: true, optional: true, required: false
    private _preferredInstanceType?: string; 
    public get preferredInstanceType() {
        return this.getStringAttribute('preferred_instance_type');
    }
    public set preferredInstanceType(value: string) {
        this._preferredInstanceType = value;
    }
    public resetPreferredInstanceType() {
        this._preferredInstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredInstanceTypeInput() {
        return this._preferredInstanceType;
    }

    // protocols - computed: true, optional: true, required: false
    private _protocols?: string[]; 
    public get protocols() {
        return this.getListAttribute('protocols');
    }
    public set protocols(value: string[]) {
        this._protocols = value;
    }
    public resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolsInput() {
        return this._protocols;
    }

    // resolver_endpoint_id - computed: true, optional: false, required: false
    public get resolverEndpointId() {
        return this.getStringAttribute('resolver_endpoint_id');
    }

    // resolver_endpoint_type - computed: true, optional: true, required: false
    private _resolverEndpointType?: string; 
    public get resolverEndpointType() {
        return this.getStringAttribute('resolver_endpoint_type');
    }
    public set resolverEndpointType(value: string) {
        this._resolverEndpointType = value;
    }
    public resetResolverEndpointType() {
        this._resolverEndpointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolverEndpointTypeInput() {
        return this._resolverEndpointType;
    }

    // rni_enhanced_metrics_enabled - computed: true, optional: true, required: false
    private _rniEnhancedMetricsEnabled?: boolean | cdktn.IResolvable; 
    public get rniEnhancedMetricsEnabled() {
        return this.getBooleanAttribute('rni_enhanced_metrics_enabled');
    }
    public set rniEnhancedMetricsEnabled(value: boolean | cdktn.IResolvable) {
        this._rniEnhancedMetricsEnabled = value;
    }
    public resetRniEnhancedMetricsEnabled() {
        this._rniEnhancedMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rniEnhancedMetricsEnabledInput() {
        return this._rniEnhancedMetricsEnabled;
    }

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcResolverEndpoint.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcResolverEndpoint.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_name_server_metrics_enabled - computed: true, optional: true, required: false
    private _targetNameServerMetricsEnabled?: boolean | cdktn.IResolvable; 
    public get targetNameServerMetricsEnabled() {
        return this.getBooleanAttribute('target_name_server_metrics_enabled');
    }
    public set targetNameServerMetricsEnabled(value: boolean | cdktn.IResolvable) {
        this._targetNameServerMetricsEnabled = value;
    }
    public resetTargetNameServerMetricsEnabled() {
        this._targetNameServerMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetNameServerMetricsEnabledInput() {
        return this._targetNameServerMetricsEnabled;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            direction: cdktn.stringToTerraform(this._direction),
            dns_64_enabled: cdktn.booleanToTerraform(this._dns64Enabled),
            ip_addresses: cdktn.listMapper(ccResolverEndpointIpAddressRequestPropertyToTerraform, false)(this._ipAddresses.internalValue),
            ipv_6_internet_access_enabled: cdktn.booleanToTerraform(this._ipv6InternetAccessEnabled),
            name: cdktn.stringToTerraform(this._name),
            outpost_arn: cdktn.stringToTerraform(this._outpostArn),
            preferred_instance_type: cdktn.stringToTerraform(this._preferredInstanceType),
            protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(this._protocols),
            resolver_endpoint_type: cdktn.stringToTerraform(this._resolverEndpointType),
            rni_enhanced_metrics_enabled: cdktn.booleanToTerraform(this._rniEnhancedMetricsEnabled),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            tags: cdktn.listMapper(ccResolverEndpointTagPropertyToTerraform, false)(this._tags.internalValue),
            target_name_server_metrics_enabled: cdktn.booleanToTerraform(this._targetNameServerMetricsEnabled),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            direction: {
                value: cdktn.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dns_64_enabled: {
                value: cdktn.booleanToHclTerraform(this._dns64Enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ip_addresses: {
                value: cdktn.listMapperHcl(ccResolverEndpointIpAddressRequestPropertyToHclTerraform, false)(this._ipAddresses.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcResolverEndpoint.IpAddressRequestPropertyList",
            },
            ipv_6_internet_access_enabled: {
                value: cdktn.booleanToHclTerraform(this._ipv6InternetAccessEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            outpost_arn: {
                value: cdktn.stringToHclTerraform(this._outpostArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preferred_instance_type: {
                value: cdktn.stringToHclTerraform(this._preferredInstanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            protocols: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._protocols),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            resolver_endpoint_type: {
                value: cdktn.stringToHclTerraform(this._resolverEndpointType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rni_enhanced_metrics_enabled: {
                value: cdktn.booleanToHclTerraform(this._rniEnhancedMetricsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccResolverEndpointTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcResolverEndpoint.TagPropertyList",
            },
            target_name_server_metrics_enabled: {
                value: cdktn.booleanToHclTerraform(this._targetNameServerMetricsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResolverEndpointIpAddressRequestPropertyToTerraform(struct?: CcResolverEndpoint.IpAddressRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip: cdktn.stringToTerraform(struct!.ip),
        ipv_6: cdktn.stringToTerraform(struct!.ipv6),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccResolverEndpointIpAddressRequestPropertyToHclTerraform(struct?: CcResolverEndpoint.IpAddressRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip: {
            value: cdktn.stringToHclTerraform(struct!.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv_6: {
            value: cdktn.stringToHclTerraform(struct!.ipv6),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet_id: {
            value: cdktn.stringToHclTerraform(struct!.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResolverEndpointTagPropertyToTerraform(struct?: CcResolverEndpoint.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccResolverEndpointTagPropertyToHclTerraform(struct?: CcResolverEndpoint.TagProperty | cdktn.IResolvable): any {
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


export namespace CcResolverEndpoint {
export interface IpAddressRequestProperty {
    /**
    * The IPv4 address that you want to use for DNS queries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#ip CcResolverEndpoint#ip}
    */
    readonly ip?: string;
    /**
    * The IPv6 address that you want to use for DNS queries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#ipv_6 CcResolverEndpoint#ipv_6}
    */
    readonly ipv6?: string;
    /**
    * The ID of the subnet that contains the IP address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#subnet_id CcResolverEndpoint#subnet_id}
    */
    readonly subnetId: string;
}
export class IpAddressRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IpAddressRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        if (this._ipv6 !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6 = this._ipv6;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IpAddressRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ip = undefined;
            this._ipv6 = undefined;
            this._subnetId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ip = value.ip;
            this._ipv6 = value.ipv6;
            this._subnetId = value.subnetId;
        }
    }

    // ip - computed: true, optional: true, required: false
    private _ip?: string; 
    public get ip() {
        return this.getStringAttribute('ip');
    }
    public set ip(value: string) {
        this._ip = value;
    }
    public resetIp() {
        this._ip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipInput() {
        return this._ip;
    }

    // ipv_6 - computed: true, optional: true, required: false
    private _ipv6?: string; 
    public get ipv6() {
        return this.getStringAttribute('ipv_6');
    }
    public set ipv6(value: string) {
        this._ipv6 = value;
    }
    public resetIpv6() {
        this._ipv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6Input() {
        return this._ipv6;
    }

    // subnet_id - computed: false, optional: false, required: true
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }
}

export class IpAddressRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : IpAddressRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): IpAddressRequestPropertyOutputReference {
        return new IpAddressRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The name for the tag. For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes, the value of Key might be account-id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#key CcResolverEndpoint#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. For example, if Key is account-id, then Value might be the ID of the customer account that you're creating the resource for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#value CcResolverEndpoint#value}
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
