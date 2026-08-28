// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLoadBalancerProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether to enable stabilization when creating or updating an LCU reservation. This ensures that the final stack status reflects the status of the LCU reservation. The default is ``false``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#enable_capacity_reservation_provision_stabilize CcLoadBalancer#enable_capacity_reservation_provision_stabilize}
    */
    readonly enableCapacityReservationProvisionStabilize?: boolean | cdktn.IResolvable;
    /**
    * [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT. The IP address type must be ``dualstack``. The default value is ``off``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#enable_prefix_for_ipv_6_source_nat CcLoadBalancer#enable_prefix_for_ipv_6_source_nat}
    */
    readonly enablePrefixForIpv6SourceNat?: string;
    /**
    * Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink. The default is ``on``.
    *  You can't configure this property on a Network Load Balancer unless you associated a security group with the load balancer when you created it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#enforce_security_group_inbound_rules_on_private_link_traffic CcLoadBalancer#enforce_security_group_inbound_rules_on_private_link_traffic}
    */
    readonly enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string;
    /**
    * The IP address type. Internal load balancers must use ``ipv4``.
    *  [Application Load Balancers] The possible values are ``ipv4`` (IPv4 addresses), ``dualstack`` (IPv4 and IPv6 addresses), and ``dualstack-without-public-ipv4`` (public IPv6 addresses and private IPv4 and IPv6 addresses).
    *  Application Load Balancer authentication supports IPv4 addresses only when connecting to an Identity Provider (IdP) or Amazon Cognito endpoint. Without a public IPv4 address the load balancer can't complete the authentication process, resulting in HTTP 500 errors.
    *  [Network Load Balancers and Gateway Load Balancers] The possible values are ``ipv4`` (IPv4 addresses) and ``dualstack`` (IPv4 and IPv6 addresses).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#ip_address_type CcLoadBalancer#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * The ID of the IPv4 IPAM pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#ipv_4_ipam_pool_id CcLoadBalancer#ipv_4_ipam_pool_id}
    */
    readonly ipv4IpamPoolId?: string;
    /**
    * The load balancer attributes. Attributes that you do not modify retain their current values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#load_balancer_attributes CcLoadBalancer#load_balancer_attributes}
    */
    readonly loadBalancerAttributes?: CcLoadBalancer.LoadBalancerAttributeProperty[] | cdktn.IResolvable;
    /**
    * The minimum capacity for a load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#minimum_load_balancer_capacity CcLoadBalancer#minimum_load_balancer_capacity}
    */
    readonly minimumLoadBalancerCapacity?: CcLoadBalancer.MinimumLoadBalancerCapacityProperty;
    /**
    * The name of the load balancer. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
    *  If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#name CcLoadBalancer#name}
    */
    readonly name?: string;
    /**
    * The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
    *  The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
    *  The default is an Internet-facing load balancer.
    *  You can't specify a scheme for a Gateway Load Balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#scheme CcLoadBalancer#scheme}
    */
    readonly scheme?: string;
    /**
    * [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#security_groups CcLoadBalancer#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
    *  [Application Load Balancers] You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets.
    *  [Application Load Balancers on Outposts] You must specify one Outpost subnet.
    *  [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
    *  [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
    *  [Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You can't specify Elastic IP addresses for your subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#subnet_mappings CcLoadBalancer#subnet_mappings}
    */
    readonly subnetMappings?: CcLoadBalancer.SubnetMappingProperty[] | cdktn.IResolvable;
    /**
    * The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
    *  [Application Load Balancers] You must specify subnets from at least two Availability Zones.
    *  [Application Load Balancers on Outposts] You must specify one Outpost subnet.
    *  [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
    *  [Network Load Balancers and Gateway Load Balancers] You can specify subnets from one or more Availability Zones.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#subnets CcLoadBalancer#subnets}
    */
    readonly subnets?: string[];
    /**
    * The tags to assign to the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#tags CcLoadBalancer#tags}
    */
    readonly tags?: CcLoadBalancer.TagProperty[] | cdktn.IResolvable;
    /**
    * The type of load balancer. The default is ``application``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#type CcLoadBalancer#type}
    */
    readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer awscc_elasticloadbalancingv2_load_balancer}
*/
export class CcLoadBalancer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticloadbalancingv2_load_balancer";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLoadBalancer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLoadBalancer to import
    * @param importFromId The id of the existing CcLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLoadBalancer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancingv2_load_balancer", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer awscc_elasticloadbalancingv2_load_balancer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLoadBalancerProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcLoadBalancerProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticloadbalancingv2_load_balancer',
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
        this._enableCapacityReservationProvisionStabilize = config.enableCapacityReservationProvisionStabilize;
        this._enablePrefixForIpv6SourceNat = config.enablePrefixForIpv6SourceNat;
        this._enforceSecurityGroupInboundRulesOnPrivateLinkTraffic = config.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic;
        this._ipAddressType = config.ipAddressType;
        this._ipv4IpamPoolId = config.ipv4IpamPoolId;
        this._loadBalancerAttributes.internalValue = config.loadBalancerAttributes;
        this._minimumLoadBalancerCapacity.internalValue = config.minimumLoadBalancerCapacity;
        this._name = config.name;
        this._scheme = config.scheme;
        this._securityGroups = config.securityGroups;
        this._subnetMappings.internalValue = config.subnetMappings;
        this._subnets = config.subnets;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // canonical_hosted_zone_id - computed: true, optional: false, required: false
    public get canonicalHostedZoneId() {
        return this.getStringAttribute('canonical_hosted_zone_id');
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
        return this.getStringAttribute('dns_name');
    }

    // enable_capacity_reservation_provision_stabilize - computed: true, optional: true, required: false
    private _enableCapacityReservationProvisionStabilize?: boolean | cdktn.IResolvable; 
    public get enableCapacityReservationProvisionStabilize() {
        return this.getBooleanAttribute('enable_capacity_reservation_provision_stabilize');
    }
    public set enableCapacityReservationProvisionStabilize(value: boolean | cdktn.IResolvable) {
        this._enableCapacityReservationProvisionStabilize = value;
    }
    public resetEnableCapacityReservationProvisionStabilize() {
        this._enableCapacityReservationProvisionStabilize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableCapacityReservationProvisionStabilizeInput() {
        return this._enableCapacityReservationProvisionStabilize;
    }

    // enable_prefix_for_ipv_6_source_nat - computed: true, optional: true, required: false
    private _enablePrefixForIpv6SourceNat?: string; 
    public get enablePrefixForIpv6SourceNat() {
        return this.getStringAttribute('enable_prefix_for_ipv_6_source_nat');
    }
    public set enablePrefixForIpv6SourceNat(value: string) {
        this._enablePrefixForIpv6SourceNat = value;
    }
    public resetEnablePrefixForIpv6SourceNat() {
        this._enablePrefixForIpv6SourceNat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePrefixForIpv6SourceNatInput() {
        return this._enablePrefixForIpv6SourceNat;
    }

    // enforce_security_group_inbound_rules_on_private_link_traffic - computed: true, optional: true, required: false
    private _enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string; 
    public get enforceSecurityGroupInboundRulesOnPrivateLinkTraffic() {
        return this.getStringAttribute('enforce_security_group_inbound_rules_on_private_link_traffic');
    }
    public set enforceSecurityGroupInboundRulesOnPrivateLinkTraffic(value: string) {
        this._enforceSecurityGroupInboundRulesOnPrivateLinkTraffic = value;
    }
    public resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic() {
        this._enforceSecurityGroupInboundRulesOnPrivateLinkTraffic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput() {
        return this._enforceSecurityGroupInboundRulesOnPrivateLinkTraffic;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // ipv_4_ipam_pool_id - computed: true, optional: true, required: false
    private _ipv4IpamPoolId?: string; 
    public get ipv4IpamPoolId() {
        return this.getStringAttribute('ipv_4_ipam_pool_id');
    }
    public set ipv4IpamPoolId(value: string) {
        this._ipv4IpamPoolId = value;
    }
    public resetIpv4IpamPoolId() {
        this._ipv4IpamPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4IpamPoolIdInput() {
        return this._ipv4IpamPoolId;
    }

    // load_balancer_arn - computed: true, optional: false, required: false
    public get loadBalancerArn() {
        return this.getStringAttribute('load_balancer_arn');
    }

    // load_balancer_attributes - computed: true, optional: true, required: false
    private _loadBalancerAttributes = new CcLoadBalancer.LoadBalancerAttributePropertyList(this, "load_balancer_attributes", true);
    public get loadBalancerAttributes() {
        return this._loadBalancerAttributes;
    }
    public putLoadBalancerAttributes(value: CcLoadBalancer.LoadBalancerAttributeProperty[] | cdktn.IResolvable) {
        this._loadBalancerAttributes.internalValue = value;
    }
    public resetLoadBalancerAttributes() {
        this._loadBalancerAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerAttributesInput() {
        return this._loadBalancerAttributes.internalValue;
    }

    // load_balancer_full_name - computed: true, optional: false, required: false
    public get loadBalancerFullName() {
        return this.getStringAttribute('load_balancer_full_name');
    }

    // load_balancer_name - computed: true, optional: false, required: false
    public get loadBalancerName() {
        return this.getStringAttribute('load_balancer_name');
    }

    // minimum_load_balancer_capacity - computed: true, optional: true, required: false
    private _minimumLoadBalancerCapacity = new CcLoadBalancer.MinimumLoadBalancerCapacityPropertyOutputReference(this, "minimum_load_balancer_capacity");
    public get minimumLoadBalancerCapacity() {
        return this._minimumLoadBalancerCapacity;
    }
    public putMinimumLoadBalancerCapacity(value: CcLoadBalancer.MinimumLoadBalancerCapacityProperty) {
        this._minimumLoadBalancerCapacity.internalValue = value;
    }
    public resetMinimumLoadBalancerCapacity() {
        this._minimumLoadBalancerCapacity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumLoadBalancerCapacityInput() {
        return this._minimumLoadBalancerCapacity.internalValue;
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

    // scheme - computed: true, optional: true, required: false
    private _scheme?: string; 
    public get scheme() {
        return this.getStringAttribute('scheme');
    }
    public set scheme(value: string) {
        this._scheme = value;
    }
    public resetScheme() {
        this._scheme = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemeInput() {
        return this._scheme;
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // subnet_mappings - computed: true, optional: true, required: false
    private _subnetMappings = new CcLoadBalancer.SubnetMappingPropertyList(this, "subnet_mappings", true);
    public get subnetMappings() {
        return this._subnetMappings;
    }
    public putSubnetMappings(value: CcLoadBalancer.SubnetMappingProperty[] | cdktn.IResolvable) {
        this._subnetMappings.internalValue = value;
    }
    public resetSubnetMappings() {
        this._subnetMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetMappingsInput() {
        return this._subnetMappings.internalValue;
    }

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return cdktn.Fn.tolist(this.getListAttribute('subnets'));
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLoadBalancer.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLoadBalancer.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            enable_capacity_reservation_provision_stabilize: cdktn.booleanToTerraform(this._enableCapacityReservationProvisionStabilize),
            enable_prefix_for_ipv_6_source_nat: cdktn.stringToTerraform(this._enablePrefixForIpv6SourceNat),
            enforce_security_group_inbound_rules_on_private_link_traffic: cdktn.stringToTerraform(this._enforceSecurityGroupInboundRulesOnPrivateLinkTraffic),
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            ipv_4_ipam_pool_id: cdktn.stringToTerraform(this._ipv4IpamPoolId),
            load_balancer_attributes: cdktn.listMapper(ccLoadBalancerLoadBalancerAttributePropertyToTerraform, false)(this._loadBalancerAttributes.internalValue),
            minimum_load_balancer_capacity: ccLoadBalancerMinimumLoadBalancerCapacityPropertyToTerraform(this._minimumLoadBalancerCapacity.internalValue),
            name: cdktn.stringToTerraform(this._name),
            scheme: cdktn.stringToTerraform(this._scheme),
            security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroups),
            subnet_mappings: cdktn.listMapper(ccLoadBalancerSubnetMappingPropertyToTerraform, false)(this._subnetMappings.internalValue),
            subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnets),
            tags: cdktn.listMapper(ccLoadBalancerTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            enable_capacity_reservation_provision_stabilize: {
                value: cdktn.booleanToHclTerraform(this._enableCapacityReservationProvisionStabilize),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_prefix_for_ipv_6_source_nat: {
                value: cdktn.stringToHclTerraform(this._enablePrefixForIpv6SourceNat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enforce_security_group_inbound_rules_on_private_link_traffic: {
                value: cdktn.stringToHclTerraform(this._enforceSecurityGroupInboundRulesOnPrivateLinkTraffic),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_address_type: {
                value: cdktn.stringToHclTerraform(this._ipAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv_4_ipam_pool_id: {
                value: cdktn.stringToHclTerraform(this._ipv4IpamPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            load_balancer_attributes: {
                value: cdktn.listMapperHcl(ccLoadBalancerLoadBalancerAttributePropertyToHclTerraform, false)(this._loadBalancerAttributes.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLoadBalancer.LoadBalancerAttributePropertyList",
            },
            minimum_load_balancer_capacity: {
                value: ccLoadBalancerMinimumLoadBalancerCapacityPropertyToHclTerraform(this._minimumLoadBalancerCapacity.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLoadBalancer.MinimumLoadBalancerCapacityProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scheme: {
                value: cdktn.stringToHclTerraform(this._scheme),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroups),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            subnet_mappings: {
                value: cdktn.listMapperHcl(ccLoadBalancerSubnetMappingPropertyToHclTerraform, false)(this._subnetMappings.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLoadBalancer.SubnetMappingPropertyList",
            },
            subnets: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnets),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLoadBalancerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLoadBalancer.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLoadBalancerLoadBalancerAttributePropertyToTerraform(struct?: CcLoadBalancer.LoadBalancerAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLoadBalancerLoadBalancerAttributePropertyToHclTerraform(struct?: CcLoadBalancer.LoadBalancerAttributeProperty | cdktn.IResolvable): any {
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


export function ccLoadBalancerMinimumLoadBalancerCapacityPropertyToTerraform(struct?: CcLoadBalancer.MinimumLoadBalancerCapacityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_units: cdktn.numberToTerraform(struct!.capacityUnits),
    }
}


export function ccLoadBalancerMinimumLoadBalancerCapacityPropertyToHclTerraform(struct?: CcLoadBalancer.MinimumLoadBalancerCapacityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.capacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoadBalancerSubnetMappingPropertyToTerraform(struct?: CcLoadBalancer.SubnetMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allocation_id: cdktn.stringToTerraform(struct!.allocationId),
        i_pv_6_address: cdktn.stringToTerraform(struct!.iPv6Address),
        private_i_pv_4_address: cdktn.stringToTerraform(struct!.privateIPv4Address),
        source_nat_ipv_6_prefix: cdktn.stringToTerraform(struct!.sourceNatIpv6Prefix),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccLoadBalancerSubnetMappingPropertyToHclTerraform(struct?: CcLoadBalancer.SubnetMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allocation_id: {
            value: cdktn.stringToHclTerraform(struct!.allocationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        i_pv_6_address: {
            value: cdktn.stringToHclTerraform(struct!.iPv6Address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_i_pv_4_address: {
            value: cdktn.stringToHclTerraform(struct!.privateIPv4Address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_nat_ipv_6_prefix: {
            value: cdktn.stringToHclTerraform(struct!.sourceNatIpv6Prefix),
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


export function ccLoadBalancerTagPropertyToTerraform(struct?: CcLoadBalancer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLoadBalancerTagPropertyToHclTerraform(struct?: CcLoadBalancer.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLoadBalancer {
export interface LoadBalancerAttributeProperty {
    /**
    * The name of the attribute.
    *  The following attributes are supported by all load balancers:
    *   +  ``deletion_protection.enabled`` - Indicates whether deletion protection is enabled. The value is ``true`` or ``false``. The default is ``false``.
    *   +  ``load_balancing.cross_zone.enabled`` - Indicates whether cross-zone load balancing is enabled. The possible values are ``true`` and ``false``. The default for Network Load Balancers and Gateway Load Balancers is ``false``. The default for Application Load Balancers is ``true``, and can't be changed.
    *   
    *  The following attributes are supported by both Application Load Balancers and Network Load Balancers:
    *   +  ``access_logs.s3.enabled`` - Indicates whether access logs are enabled. The value is ``true`` or ``false``. The default is ``false``.
    *   +  ``access_logs.s3.bucket`` - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
    *   +  ``access_logs.s3.prefix`` - The prefix for the location in the S3 bucket for the access logs.
    *   +  ``ipv6.deny_all_igw_traffic`` - Blocks internet gateway (IGW) access to the load balancer. It is set to ``false`` for internet-facing load balancers and ``true`` for internal load balancers, preventing unintended access to your internal load balancer through an internet gateway.
    *   +  ``zonal_shift.config.enabled`` - Indicates whether zonal shift is enabled. The possible values are ``true`` and ``false``. The default is ``false``.
    *   
    *  The following attributes are supported by only Application Load Balancers:
    *   +  ``idle_timeout.timeout_seconds`` - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds.
    *   +  ``client_keep_alive.seconds`` - The client keep alive value, in seconds. The valid range is 60-604800 seconds. The default is 3600 seconds.
    *   +  ``connection_logs.s3.enabled`` - Indicates whether connection logs are enabled. The value is ``true`` or ``false``. The default is ``false``.
    *   +  ``connection_logs.s3.bucket`` - The name of the S3 bucket for the connection logs. This attribute is required if connection logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
    *   +  ``connection_logs.s3.prefix`` - The prefix for the location in the S3 bucket for the connection logs.
    *   +  ``health_check_logs.s3.enabled`` - Indicates whether health check logs are enabled. The value is ``true`` or ``false``. The default is ``false``.
    *   +  ``health_check_logs.s3.bucket`` - The name of the S3 bucket for the health check logs. This attribute is required if health check logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
    *   +  ``health_check_logs.s3.prefix`` - The prefix for the location in the S3 bucket for the health check logs.
    *   +  ``routing.http.desync_mitigation_mode`` - Determines how the load balancer handles requests that might pose a security risk to your application. The possible values are ``monitor``, ``defensive``, and ``strictest``. The default is ``defensive``.
    *   +  ``routing.http.drop_invalid_header_fields.enabled`` - Indicates whether HTTP headers with invalid header fields are removed by the load balancer (``true``) or routed to targets (``false``). The default is ``false``.
    *   +  ``routing.http.preserve_host_header.enabled`` - Indicates whether the Application Load Balancer should preserve the ``Host`` header in the HTTP request and send it to the target without any change. The possible values are ``true`` and ``false``. The default is ``false``.
    *   +  ``routing.http.x_amzn_tls_version_and_cipher_suite.enabled`` - Indicates whether the two headers (``x-amzn-tls-version`` and ``x-amzn-tls-cipher-suite``), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. The ``x-amzn-tls-version`` header has information about the TLS protocol version negotiated with the client, and the ``x-amzn-tls-cipher-suite`` header has information about the cipher suite negotiated with the client. Both headers are in OpenSSL format. The possible values for the attribute are ``true`` and ``false``. The default is ``false``.
    *   +  ``routing.http.xff_client_port.enabled`` - Indicates whether the ``X-Forwarded-For`` header should preserve the source port that the client used to connect to the load balancer. The possible values are ``true`` and ``false``. The default is ``false``.
    *   +  ``routing.http.xff_header_processing.mode`` - Enables you to modify, preserve, or remove the ``X-Forwarded-For`` header in the HTTP request before the Application Load Balancer sends the request to the target. The possible values are ``append``, ``preserve``, and ``remove``. The default is ``append``.
    *   +  If the value is ``append``, the Application Load Balancer adds the client IP address (of the last hop) to the ``X-Forwarded-For`` header in the HTTP request before it sends it to targets.
    *   +  If the value is ``preserve`` the Application Load Balancer preserves the ``X-Forwarded-For`` header in the HTTP request, and sends it to targets without any change.
    *   +  If the value is ``remove``, the Application Load Balancer removes the ``X-Forwarded-For`` header in the HTTP request before it sends it to targets.
    *   
    *   +  ``routing.http2.enabled`` - Indicates whether clients can connect to the load balancer using HTTP/2. If ``true``, clients can connect using HTTP/2 or HTTP/1.1. However, all client requests are subject to the stricter HTTP/2 header validation rules. For example, message header names must contain only alphanumeric characters and hyphens. If ``false``, clients must connect using HTTP/1.1. The default is ``true``.
    *   +  ``waf.fail_open.enabled`` - Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. The possible values are ``true`` and ``false``. The default is ``false``.
    *   
    *  The following attributes are supported by only Network Load Balancers:
    *   +  ``dns_record.client_routing_policy`` - Indicates how traffic is distributed among the load balancer Availability Zones. The possible values are ``availability_zone_affinity`` with 100 percent zonal affinity, ``partial_availability_zone_affinity`` with 85 percent zonal affinity, and ``any_availability_zone`` with 0 percent zonal affinity.
    *   +  ``secondary_ips.auto_assigned.per_subnet`` - The number of secondary IP addresses to configure for your load balancer nodes. Use to address port allocation errors if you can't add targets. The valid range is 0 to 7. The default is 0. After you set this value, you can't decrease it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#key CcLoadBalancer#key}
    */
    readonly key?: string;
    /**
    * The value of the attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#value CcLoadBalancer#value}
    */
    readonly value?: string;
}
export class LoadBalancerAttributePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LoadBalancerAttributeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LoadBalancerAttributeProperty | cdktn.IResolvable | undefined) {
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

export class LoadBalancerAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : LoadBalancerAttributeProperty[] | cdktn.IResolvable

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
    public get(index: number): LoadBalancerAttributePropertyOutputReference {
        return new LoadBalancerAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MinimumLoadBalancerCapacityProperty {
    /**
    * The number of capacity units.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#capacity_units CcLoadBalancer#capacity_units}
    */
    readonly capacityUnits?: number;
}
export class MinimumLoadBalancerCapacityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MinimumLoadBalancerCapacityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityUnits = this._capacityUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MinimumLoadBalancerCapacityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityUnits = value.capacityUnits;
        }
    }

    // capacity_units - computed: true, optional: true, required: false
    private _capacityUnits?: number; 
    public get capacityUnits() {
        return this.getNumberAttribute('capacity_units');
    }
    public set capacityUnits(value: number) {
        this._capacityUnits = value;
    }
    public resetCapacityUnits() {
        this._capacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityUnitsInput() {
        return this._capacityUnits;
    }
}
export interface SubnetMappingProperty {
    /**
    * [Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#allocation_id CcLoadBalancer#allocation_id}
    */
    readonly allocationId?: string;
    /**
    * [Network Load Balancers] The IPv6 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#i_pv_6_address CcLoadBalancer#i_pv_6_address}
    */
    readonly iPv6Address?: string;
    /**
    * [Network Load Balancers] The private IPv4 address for an internal load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#private_i_pv_4_address CcLoadBalancer#private_i_pv_4_address}
    */
    readonly privateIPv4Address?: string;
    /**
    * [Network Load Balancers with UDP listeners] The IPv6 prefix to use for source NAT. Specify an IPv6 prefix (/80 netmask) from the subnet CIDR block or ``auto_assigned`` to use an IPv6 prefix selected at random from the subnet CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#source_nat_ipv_6_prefix CcLoadBalancer#source_nat_ipv_6_prefix}
    */
    readonly sourceNatIpv6Prefix?: string;
    /**
    * The ID of the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#subnet_id CcLoadBalancer#subnet_id}
    */
    readonly subnetId?: string;
}
export class SubnetMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SubnetMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allocationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.allocationId = this._allocationId;
        }
        if (this._iPv6Address !== undefined) {
            hasAnyValues = true;
            internalValueResult.iPv6Address = this._iPv6Address;
        }
        if (this._privateIPv4Address !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateIPv4Address = this._privateIPv4Address;
        }
        if (this._sourceNatIpv6Prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceNatIpv6Prefix = this._sourceNatIpv6Prefix;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubnetMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allocationId = undefined;
            this._iPv6Address = undefined;
            this._privateIPv4Address = undefined;
            this._sourceNatIpv6Prefix = undefined;
            this._subnetId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allocationId = value.allocationId;
            this._iPv6Address = value.iPv6Address;
            this._privateIPv4Address = value.privateIPv4Address;
            this._sourceNatIpv6Prefix = value.sourceNatIpv6Prefix;
            this._subnetId = value.subnetId;
        }
    }

    // allocation_id - computed: true, optional: true, required: false
    private _allocationId?: string; 
    public get allocationId() {
        return this.getStringAttribute('allocation_id');
    }
    public set allocationId(value: string) {
        this._allocationId = value;
    }
    public resetAllocationId() {
        this._allocationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationIdInput() {
        return this._allocationId;
    }

    // i_pv_6_address - computed: true, optional: true, required: false
    private _iPv6Address?: string; 
    public get iPv6Address() {
        return this.getStringAttribute('i_pv_6_address');
    }
    public set iPv6Address(value: string) {
        this._iPv6Address = value;
    }
    public resetIPv6Address() {
        this._iPv6Address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iPv6AddressInput() {
        return this._iPv6Address;
    }

    // private_i_pv_4_address - computed: true, optional: true, required: false
    private _privateIPv4Address?: string; 
    public get privateIPv4Address() {
        return this.getStringAttribute('private_i_pv_4_address');
    }
    public set privateIPv4Address(value: string) {
        this._privateIPv4Address = value;
    }
    public resetPrivateIPv4Address() {
        this._privateIPv4Address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIPv4AddressInput() {
        return this._privateIPv4Address;
    }

    // source_nat_ipv_6_prefix - computed: true, optional: true, required: false
    private _sourceNatIpv6Prefix?: string; 
    public get sourceNatIpv6Prefix() {
        return this.getStringAttribute('source_nat_ipv_6_prefix');
    }
    public set sourceNatIpv6Prefix(value: string) {
        this._sourceNatIpv6Prefix = value;
    }
    public resetSourceNatIpv6Prefix() {
        this._sourceNatIpv6Prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceNatIpv6PrefixInput() {
        return this._sourceNatIpv6Prefix;
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    public resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }
}

export class SubnetMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : SubnetMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): SubnetMappingPropertyOutputReference {
        return new SubnetMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#key CcLoadBalancer#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_load_balancer#value CcLoadBalancer#value}
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
