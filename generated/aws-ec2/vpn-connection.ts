// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVPNConnectionProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the customer gateway at your end of the VPN connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#customer_gateway_id CcVPNConnection#customer_gateway_id}
    */
    readonly customerGatewayId: string;
    /**
    * Indicate whether to enable acceleration for the VPN connection.
    *  Default: ``false``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#enable_acceleration CcVPNConnection#enable_acceleration}
    */
    readonly enableAcceleration?: boolean | cdktn.IResolvable;
    /**
    * The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.
    *  Default: ``0.0.0.0/0``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#local_ipv_4_network_cidr CcVPNConnection#local_ipv_4_network_cidr}
    */
    readonly localIpv4NetworkCidr?: string;
    /**
    * The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.
    *  Default: ``::/0``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#local_ipv_6_network_cidr CcVPNConnection#local_ipv_6_network_cidr}
    */
    readonly localIpv6NetworkCidr?: string;
    /**
    * The type of IP address assigned to the outside interface of the customer gateway device.
    *  Valid values: ``PrivateIpv4`` | ``PublicIpv4`` | ``Ipv6``
    *  Default: ``PublicIpv4``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#outside_ip_address_type CcVPNConnection#outside_ip_address_type}
    */
    readonly outsideIpAddressType?: string;
    /**
    * Describes the storage location for an instance store-backed AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#pre_shared_key_storage CcVPNConnection#pre_shared_key_storage}
    */
    readonly preSharedKeyStorage?: string;
    /**
    * The IPv4 CIDR on the AWS side of the VPN connection.
    *  Default: ``0.0.0.0/0``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#remote_ipv_4_network_cidr CcVPNConnection#remote_ipv_4_network_cidr}
    */
    readonly remoteIpv4NetworkCidr?: string;
    /**
    * The IPv6 CIDR on the AWS side of the VPN connection.
    *  Default: ``::/0``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#remote_ipv_6_network_cidr CcVPNConnection#remote_ipv_6_network_cidr}
    */
    readonly remoteIpv6NetworkCidr?: string;
    /**
    * Indicates whether the VPN connection uses static routes only. Static routes must be used for devices that don't support BGP.
    *  If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify ``true``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#static_routes_only CcVPNConnection#static_routes_only}
    */
    readonly staticRoutesOnly?: boolean | cdktn.IResolvable;
    /**
    * Any tags assigned to the VPN connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#tags CcVPNConnection#tags}
    */
    readonly tags?: CcVPNConnection.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the transit gateway associated with the VPN connection.
    *  You must specify either ``TransitGatewayId`` or ``VpnGatewayId``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#transit_gateway_id CcVPNConnection#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * The transit gateway attachment ID to use for the VPN tunnel.
    *  Required if ``OutsideIpAddressType`` is set to ``PrivateIpv4``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#transport_transit_gateway_attachment_id CcVPNConnection#transport_transit_gateway_attachment_id}
    */
    readonly transportTransitGatewayAttachmentId?: string;
    /**
    * The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput capacity. ``standard`` supports up to 1.25 Gbps per tunnel, while ``large`` supports up to 5 Gbps per tunnel. The default value is ``standard``. Existing VPN connections without a bandwidth setting will automatically default to ``standard``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#tunnel_bandwidth CcVPNConnection#tunnel_bandwidth}
    */
    readonly tunnelBandwidth?: string;
    /**
    * Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.
    *  Default: ``ipv4``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#tunnel_inside_ip_version CcVPNConnection#tunnel_inside_ip_version}
    */
    readonly tunnelInsideIpVersion?: string;
    /**
    * The type of VPN connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#type CcVPNConnection#type}
    */
    readonly type: string;
    /**
    * The ID of the VPN concentrator to associate with the VPN connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#vpn_concentrator_id CcVPNConnection#vpn_concentrator_id}
    */
    readonly vpnConcentratorId?: string;
    /**
    * The ID of the virtual private gateway at the AWS side of the VPN connection.
    *  You must specify either ``TransitGatewayId`` or ``VpnGatewayId``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#vpn_gateway_id CcVPNConnection#vpn_gateway_id}
    */
    readonly vpnGatewayId?: string;
    /**
    * The tunnel options for the VPN connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#vpn_tunnel_options_specifications CcVPNConnection#vpn_tunnel_options_specifications}
    */
    readonly vpnTunnelOptionsSpecifications?: CcVPNConnection.VpnTunnelOptionsSpecificationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection awscc_ec2_vpn_connection}
*/
export class CcVPNConnection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_vpn_connection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVPNConnection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVPNConnection to import
    * @param importFromId The id of the existing CcVPNConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVPNConnection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpn_connection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection awscc_ec2_vpn_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVPNConnectionProps
    */
    public constructor(scope: Construct, id: string, config: CcVPNConnectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_vpn_connection',
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
        this._customerGatewayId = config.customerGatewayId;
        this._enableAcceleration = config.enableAcceleration;
        this._localIpv4NetworkCidr = config.localIpv4NetworkCidr;
        this._localIpv6NetworkCidr = config.localIpv6NetworkCidr;
        this._outsideIpAddressType = config.outsideIpAddressType;
        this._preSharedKeyStorage = config.preSharedKeyStorage;
        this._remoteIpv4NetworkCidr = config.remoteIpv4NetworkCidr;
        this._remoteIpv6NetworkCidr = config.remoteIpv6NetworkCidr;
        this._staticRoutesOnly = config.staticRoutesOnly;
        this._tags.internalValue = config.tags;
        this._transitGatewayId = config.transitGatewayId;
        this._transportTransitGatewayAttachmentId = config.transportTransitGatewayAttachmentId;
        this._tunnelBandwidth = config.tunnelBandwidth;
        this._tunnelInsideIpVersion = config.tunnelInsideIpVersion;
        this._type = config.type;
        this._vpnConcentratorId = config.vpnConcentratorId;
        this._vpnGatewayId = config.vpnGatewayId;
        this._vpnTunnelOptionsSpecifications.internalValue = config.vpnTunnelOptionsSpecifications;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // customer_gateway_id - computed: false, optional: false, required: true
    private _customerGatewayId?: string; 
    public get customerGatewayId() {
        return this.getStringAttribute('customer_gateway_id');
    }
    public set customerGatewayId(value: string) {
        this._customerGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get customerGatewayIdInput() {
        return this._customerGatewayId;
    }

    // enable_acceleration - computed: true, optional: true, required: false
    private _enableAcceleration?: boolean | cdktn.IResolvable; 
    public get enableAcceleration() {
        return this.getBooleanAttribute('enable_acceleration');
    }
    public set enableAcceleration(value: boolean | cdktn.IResolvable) {
        this._enableAcceleration = value;
    }
    public resetEnableAcceleration() {
        this._enableAcceleration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAccelerationInput() {
        return this._enableAcceleration;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // local_ipv_4_network_cidr - computed: true, optional: true, required: false
    private _localIpv4NetworkCidr?: string; 
    public get localIpv4NetworkCidr() {
        return this.getStringAttribute('local_ipv_4_network_cidr');
    }
    public set localIpv4NetworkCidr(value: string) {
        this._localIpv4NetworkCidr = value;
    }
    public resetLocalIpv4NetworkCidr() {
        this._localIpv4NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localIpv4NetworkCidrInput() {
        return this._localIpv4NetworkCidr;
    }

    // local_ipv_6_network_cidr - computed: true, optional: true, required: false
    private _localIpv6NetworkCidr?: string; 
    public get localIpv6NetworkCidr() {
        return this.getStringAttribute('local_ipv_6_network_cidr');
    }
    public set localIpv6NetworkCidr(value: string) {
        this._localIpv6NetworkCidr = value;
    }
    public resetLocalIpv6NetworkCidr() {
        this._localIpv6NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localIpv6NetworkCidrInput() {
        return this._localIpv6NetworkCidr;
    }

    // outside_ip_address_type - computed: true, optional: true, required: false
    private _outsideIpAddressType?: string; 
    public get outsideIpAddressType() {
        return this.getStringAttribute('outside_ip_address_type');
    }
    public set outsideIpAddressType(value: string) {
        this._outsideIpAddressType = value;
    }
    public resetOutsideIpAddressType() {
        this._outsideIpAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outsideIpAddressTypeInput() {
        return this._outsideIpAddressType;
    }

    // pre_shared_key_storage - computed: true, optional: true, required: false
    private _preSharedKeyStorage?: string; 
    public get preSharedKeyStorage() {
        return this.getStringAttribute('pre_shared_key_storage');
    }
    public set preSharedKeyStorage(value: string) {
        this._preSharedKeyStorage = value;
    }
    public resetPreSharedKeyStorage() {
        this._preSharedKeyStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preSharedKeyStorageInput() {
        return this._preSharedKeyStorage;
    }

    // remote_ipv_4_network_cidr - computed: true, optional: true, required: false
    private _remoteIpv4NetworkCidr?: string; 
    public get remoteIpv4NetworkCidr() {
        return this.getStringAttribute('remote_ipv_4_network_cidr');
    }
    public set remoteIpv4NetworkCidr(value: string) {
        this._remoteIpv4NetworkCidr = value;
    }
    public resetRemoteIpv4NetworkCidr() {
        this._remoteIpv4NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteIpv4NetworkCidrInput() {
        return this._remoteIpv4NetworkCidr;
    }

    // remote_ipv_6_network_cidr - computed: true, optional: true, required: false
    private _remoteIpv6NetworkCidr?: string; 
    public get remoteIpv6NetworkCidr() {
        return this.getStringAttribute('remote_ipv_6_network_cidr');
    }
    public set remoteIpv6NetworkCidr(value: string) {
        this._remoteIpv6NetworkCidr = value;
    }
    public resetRemoteIpv6NetworkCidr() {
        this._remoteIpv6NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteIpv6NetworkCidrInput() {
        return this._remoteIpv6NetworkCidr;
    }

    // static_routes_only - computed: true, optional: true, required: false
    private _staticRoutesOnly?: boolean | cdktn.IResolvable; 
    public get staticRoutesOnly() {
        return this.getBooleanAttribute('static_routes_only');
    }
    public set staticRoutesOnly(value: boolean | cdktn.IResolvable) {
        this._staticRoutesOnly = value;
    }
    public resetStaticRoutesOnly() {
        this._staticRoutesOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get staticRoutesOnlyInput() {
        return this._staticRoutesOnly;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVPNConnection.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVPNConnection.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // transit_gateway_id - computed: true, optional: true, required: false
    private _transitGatewayId?: string; 
    public get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string) {
        this._transitGatewayId = value;
    }
    public resetTransitGatewayId() {
        this._transitGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
        return this._transitGatewayId;
    }

    // transport_transit_gateway_attachment_id - computed: true, optional: true, required: false
    private _transportTransitGatewayAttachmentId?: string; 
    public get transportTransitGatewayAttachmentId() {
        return this.getStringAttribute('transport_transit_gateway_attachment_id');
    }
    public set transportTransitGatewayAttachmentId(value: string) {
        this._transportTransitGatewayAttachmentId = value;
    }
    public resetTransportTransitGatewayAttachmentId() {
        this._transportTransitGatewayAttachmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transportTransitGatewayAttachmentIdInput() {
        return this._transportTransitGatewayAttachmentId;
    }

    // tunnel_bandwidth - computed: true, optional: true, required: false
    private _tunnelBandwidth?: string; 
    public get tunnelBandwidth() {
        return this.getStringAttribute('tunnel_bandwidth');
    }
    public set tunnelBandwidth(value: string) {
        this._tunnelBandwidth = value;
    }
    public resetTunnelBandwidth() {
        this._tunnelBandwidth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnelBandwidthInput() {
        return this._tunnelBandwidth;
    }

    // tunnel_inside_ip_version - computed: true, optional: true, required: false
    private _tunnelInsideIpVersion?: string; 
    public get tunnelInsideIpVersion() {
        return this.getStringAttribute('tunnel_inside_ip_version');
    }
    public set tunnelInsideIpVersion(value: string) {
        this._tunnelInsideIpVersion = value;
    }
    public resetTunnelInsideIpVersion() {
        this._tunnelInsideIpVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnelInsideIpVersionInput() {
        return this._tunnelInsideIpVersion;
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

    // vpn_concentrator_id - computed: true, optional: true, required: false
    private _vpnConcentratorId?: string; 
    public get vpnConcentratorId() {
        return this.getStringAttribute('vpn_concentrator_id');
    }
    public set vpnConcentratorId(value: string) {
        this._vpnConcentratorId = value;
    }
    public resetVpnConcentratorId() {
        this._vpnConcentratorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnConcentratorIdInput() {
        return this._vpnConcentratorId;
    }

    // vpn_connection_id - computed: true, optional: false, required: false
    public get vpnConnectionId() {
        return this.getStringAttribute('vpn_connection_id');
    }

    // vpn_gateway_id - computed: true, optional: true, required: false
    private _vpnGatewayId?: string; 
    public get vpnGatewayId() {
        return this.getStringAttribute('vpn_gateway_id');
    }
    public set vpnGatewayId(value: string) {
        this._vpnGatewayId = value;
    }
    public resetVpnGatewayId() {
        this._vpnGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnGatewayIdInput() {
        return this._vpnGatewayId;
    }

    // vpn_tunnel_options_specifications - computed: true, optional: true, required: false
    private _vpnTunnelOptionsSpecifications = new CcVPNConnection.VpnTunnelOptionsSpecificationPropertyList(this, "vpn_tunnel_options_specifications", false);
    public get vpnTunnelOptionsSpecifications() {
        return this._vpnTunnelOptionsSpecifications;
    }
    public putVpnTunnelOptionsSpecifications(value: CcVPNConnection.VpnTunnelOptionsSpecificationProperty[] | cdktn.IResolvable) {
        this._vpnTunnelOptionsSpecifications.internalValue = value;
    }
    public resetVpnTunnelOptionsSpecifications() {
        this._vpnTunnelOptionsSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnTunnelOptionsSpecificationsInput() {
        return this._vpnTunnelOptionsSpecifications.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            customer_gateway_id: cdktn.stringToTerraform(this._customerGatewayId),
            enable_acceleration: cdktn.booleanToTerraform(this._enableAcceleration),
            local_ipv_4_network_cidr: cdktn.stringToTerraform(this._localIpv4NetworkCidr),
            local_ipv_6_network_cidr: cdktn.stringToTerraform(this._localIpv6NetworkCidr),
            outside_ip_address_type: cdktn.stringToTerraform(this._outsideIpAddressType),
            pre_shared_key_storage: cdktn.stringToTerraform(this._preSharedKeyStorage),
            remote_ipv_4_network_cidr: cdktn.stringToTerraform(this._remoteIpv4NetworkCidr),
            remote_ipv_6_network_cidr: cdktn.stringToTerraform(this._remoteIpv6NetworkCidr),
            static_routes_only: cdktn.booleanToTerraform(this._staticRoutesOnly),
            tags: cdktn.listMapper(ccVPNConnectionTagPropertyToTerraform, false)(this._tags.internalValue),
            transit_gateway_id: cdktn.stringToTerraform(this._transitGatewayId),
            transport_transit_gateway_attachment_id: cdktn.stringToTerraform(this._transportTransitGatewayAttachmentId),
            tunnel_bandwidth: cdktn.stringToTerraform(this._tunnelBandwidth),
            tunnel_inside_ip_version: cdktn.stringToTerraform(this._tunnelInsideIpVersion),
            type: cdktn.stringToTerraform(this._type),
            vpn_concentrator_id: cdktn.stringToTerraform(this._vpnConcentratorId),
            vpn_gateway_id: cdktn.stringToTerraform(this._vpnGatewayId),
            vpn_tunnel_options_specifications: cdktn.listMapper(ccVPNConnectionVpnTunnelOptionsSpecificationPropertyToTerraform, false)(this._vpnTunnelOptionsSpecifications.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            customer_gateway_id: {
                value: cdktn.stringToHclTerraform(this._customerGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_acceleration: {
                value: cdktn.booleanToHclTerraform(this._enableAcceleration),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            local_ipv_4_network_cidr: {
                value: cdktn.stringToHclTerraform(this._localIpv4NetworkCidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            local_ipv_6_network_cidr: {
                value: cdktn.stringToHclTerraform(this._localIpv6NetworkCidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            outside_ip_address_type: {
                value: cdktn.stringToHclTerraform(this._outsideIpAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pre_shared_key_storage: {
                value: cdktn.stringToHclTerraform(this._preSharedKeyStorage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            remote_ipv_4_network_cidr: {
                value: cdktn.stringToHclTerraform(this._remoteIpv4NetworkCidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            remote_ipv_6_network_cidr: {
                value: cdktn.stringToHclTerraform(this._remoteIpv6NetworkCidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            static_routes_only: {
                value: cdktn.booleanToHclTerraform(this._staticRoutesOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVPNConnectionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcVPNConnection.TagPropertyList",
            },
            transit_gateway_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            transport_transit_gateway_attachment_id: {
                value: cdktn.stringToHclTerraform(this._transportTransitGatewayAttachmentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel_bandwidth: {
                value: cdktn.stringToHclTerraform(this._tunnelBandwidth),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel_inside_ip_version: {
                value: cdktn.stringToHclTerraform(this._tunnelInsideIpVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpn_concentrator_id: {
                value: cdktn.stringToHclTerraform(this._vpnConcentratorId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpn_gateway_id: {
                value: cdktn.stringToHclTerraform(this._vpnGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpn_tunnel_options_specifications: {
                value: cdktn.listMapperHcl(ccVPNConnectionVpnTunnelOptionsSpecificationPropertyToHclTerraform, false)(this._vpnTunnelOptionsSpecifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcVPNConnection.VpnTunnelOptionsSpecificationPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVPNConnectionTagPropertyToTerraform(struct?: CcVPNConnection.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVPNConnectionTagPropertyToHclTerraform(struct?: CcVPNConnection.TagProperty | cdktn.IResolvable): any {
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


export function ccVPNConnectionIKEVersionsRequestListValuePropertyToTerraform(struct?: CcVPNConnection.IKEVersionsRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVPNConnectionIKEVersionsRequestListValuePropertyToHclTerraform(struct?: CcVPNConnection.IKEVersionsRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccVPNConnectionCloudwatchLogOptionsSpecificationPropertyToTerraform(struct?: CcVPNConnection.CloudwatchLogOptionsSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bgp_log_enabled: cdktn.booleanToTerraform(struct!.bgpLogEnabled),
        bgp_log_group_arn: cdktn.stringToTerraform(struct!.bgpLogGroupArn),
        bgp_log_output_format: cdktn.stringToTerraform(struct!.bgpLogOutputFormat),
        log_enabled: cdktn.booleanToTerraform(struct!.logEnabled),
        log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
        log_output_format: cdktn.stringToTerraform(struct!.logOutputFormat),
    }
}


export function ccVPNConnectionCloudwatchLogOptionsSpecificationPropertyToHclTerraform(struct?: CcVPNConnection.CloudwatchLogOptionsSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bgp_log_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.bgpLogEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        bgp_log_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.bgpLogGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bgp_log_output_format: {
            value: cdktn.stringToHclTerraform(struct!.bgpLogOutputFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.logEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.logGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_output_format: {
            value: cdktn.stringToHclTerraform(struct!.logOutputFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVPNConnectionVpnTunnelLogOptionsSpecificationPropertyToTerraform(struct?: CcVPNConnection.VpnTunnelLogOptionsSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_log_options: ccVPNConnectionCloudwatchLogOptionsSpecificationPropertyToTerraform(struct!.cloudwatchLogOptions),
    }
}


export function ccVPNConnectionVpnTunnelLogOptionsSpecificationPropertyToHclTerraform(struct?: CcVPNConnection.VpnTunnelLogOptionsSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_log_options: {
            value: ccVPNConnectionCloudwatchLogOptionsSpecificationPropertyToHclTerraform(struct!.cloudwatchLogOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudwatchLogOptionsSpecificationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVPNConnectionPhase1DHGroupNumbersRequestListValuePropertyToTerraform(struct?: CcVPNConnection.Phase1DHGroupNumbersRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccVPNConnectionPhase1DHGroupNumbersRequestListValuePropertyToHclTerraform(struct?: CcVPNConnection.Phase1DHGroupNumbersRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVPNConnectionPhase1EncryptionAlgorithmsRequestListValuePropertyToTerraform(struct?: CcVPNConnection.Phase1EncryptionAlgorithmsRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVPNConnectionPhase1EncryptionAlgorithmsRequestListValuePropertyToHclTerraform(struct?: CcVPNConnection.Phase1EncryptionAlgorithmsRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccVPNConnectionPhase1IntegrityAlgorithmsRequestListValuePropertyToTerraform(struct?: CcVPNConnection.Phase1IntegrityAlgorithmsRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVPNConnectionPhase1IntegrityAlgorithmsRequestListValuePropertyToHclTerraform(struct?: CcVPNConnection.Phase1IntegrityAlgorithmsRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccVPNConnectionPhase2DHGroupNumbersRequestListValuePropertyToTerraform(struct?: CcVPNConnection.Phase2DHGroupNumbersRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccVPNConnectionPhase2DHGroupNumbersRequestListValuePropertyToHclTerraform(struct?: CcVPNConnection.Phase2DHGroupNumbersRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVPNConnectionPhase2EncryptionAlgorithmsRequestListValuePropertyToTerraform(struct?: CcVPNConnection.Phase2EncryptionAlgorithmsRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVPNConnectionPhase2EncryptionAlgorithmsRequestListValuePropertyToHclTerraform(struct?: CcVPNConnection.Phase2EncryptionAlgorithmsRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccVPNConnectionPhase2IntegrityAlgorithmsRequestListValuePropertyToTerraform(struct?: CcVPNConnection.Phase2IntegrityAlgorithmsRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVPNConnectionPhase2IntegrityAlgorithmsRequestListValuePropertyToHclTerraform(struct?: CcVPNConnection.Phase2IntegrityAlgorithmsRequestListValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccVPNConnectionVpnTunnelOptionsSpecificationPropertyToTerraform(struct?: CcVPNConnection.VpnTunnelOptionsSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dpd_timeout_action: cdktn.stringToTerraform(struct!.dpdTimeoutAction),
        dpd_timeout_seconds: cdktn.numberToTerraform(struct!.dpdTimeoutSeconds),
        enable_tunnel_lifecycle_control: cdktn.booleanToTerraform(struct!.enableTunnelLifecycleControl),
        ike_versions: cdktn.listMapper(ccVPNConnectionIKEVersionsRequestListValuePropertyToTerraform, false)(struct!.ikeVersions),
        log_options: ccVPNConnectionVpnTunnelLogOptionsSpecificationPropertyToTerraform(struct!.logOptions),
        phase_1_dh_group_numbers: cdktn.listMapper(ccVPNConnectionPhase1DHGroupNumbersRequestListValuePropertyToTerraform, false)(struct!.phase1DhGroupNumbers),
        phase_1_encryption_algorithms: cdktn.listMapper(ccVPNConnectionPhase1EncryptionAlgorithmsRequestListValuePropertyToTerraform, false)(struct!.phase1EncryptionAlgorithms),
        phase_1_integrity_algorithms: cdktn.listMapper(ccVPNConnectionPhase1IntegrityAlgorithmsRequestListValuePropertyToTerraform, false)(struct!.phase1IntegrityAlgorithms),
        phase_1_lifetime_seconds: cdktn.numberToTerraform(struct!.phase1LifetimeSeconds),
        phase_2_dh_group_numbers: cdktn.listMapper(ccVPNConnectionPhase2DHGroupNumbersRequestListValuePropertyToTerraform, false)(struct!.phase2DhGroupNumbers),
        phase_2_encryption_algorithms: cdktn.listMapper(ccVPNConnectionPhase2EncryptionAlgorithmsRequestListValuePropertyToTerraform, false)(struct!.phase2EncryptionAlgorithms),
        phase_2_integrity_algorithms: cdktn.listMapper(ccVPNConnectionPhase2IntegrityAlgorithmsRequestListValuePropertyToTerraform, false)(struct!.phase2IntegrityAlgorithms),
        phase_2_lifetime_seconds: cdktn.numberToTerraform(struct!.phase2LifetimeSeconds),
        pre_shared_key: cdktn.stringToTerraform(struct!.preSharedKey),
        rekey_fuzz_percentage: cdktn.numberToTerraform(struct!.rekeyFuzzPercentage),
        rekey_margin_time_seconds: cdktn.numberToTerraform(struct!.rekeyMarginTimeSeconds),
        replay_window_size: cdktn.numberToTerraform(struct!.replayWindowSize),
        startup_action: cdktn.stringToTerraform(struct!.startupAction),
        tunnel_inside_cidr: cdktn.stringToTerraform(struct!.tunnelInsideCidr),
        tunnel_inside_ipv_6_cidr: cdktn.stringToTerraform(struct!.tunnelInsideIpv6Cidr),
    }
}


export function ccVPNConnectionVpnTunnelOptionsSpecificationPropertyToHclTerraform(struct?: CcVPNConnection.VpnTunnelOptionsSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dpd_timeout_action: {
            value: cdktn.stringToHclTerraform(struct!.dpdTimeoutAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dpd_timeout_seconds: {
            value: cdktn.numberToHclTerraform(struct!.dpdTimeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        enable_tunnel_lifecycle_control: {
            value: cdktn.booleanToHclTerraform(struct!.enableTunnelLifecycleControl),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ike_versions: {
            value: cdktn.listMapperHcl(ccVPNConnectionIKEVersionsRequestListValuePropertyToHclTerraform, false)(struct!.ikeVersions),
            isBlock: true,
            type: "list",
            storageClassType: "IKEVersionsRequestListValuePropertyList",
        },
        log_options: {
            value: ccVPNConnectionVpnTunnelLogOptionsSpecificationPropertyToHclTerraform(struct!.logOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "VpnTunnelLogOptionsSpecificationProperty",
        },
        phase_1_dh_group_numbers: {
            value: cdktn.listMapperHcl(ccVPNConnectionPhase1DHGroupNumbersRequestListValuePropertyToHclTerraform, false)(struct!.phase1DhGroupNumbers),
            isBlock: true,
            type: "list",
            storageClassType: "Phase1DHGroupNumbersRequestListValuePropertyList",
        },
        phase_1_encryption_algorithms: {
            value: cdktn.listMapperHcl(ccVPNConnectionPhase1EncryptionAlgorithmsRequestListValuePropertyToHclTerraform, false)(struct!.phase1EncryptionAlgorithms),
            isBlock: true,
            type: "list",
            storageClassType: "Phase1EncryptionAlgorithmsRequestListValuePropertyList",
        },
        phase_1_integrity_algorithms: {
            value: cdktn.listMapperHcl(ccVPNConnectionPhase1IntegrityAlgorithmsRequestListValuePropertyToHclTerraform, false)(struct!.phase1IntegrityAlgorithms),
            isBlock: true,
            type: "list",
            storageClassType: "Phase1IntegrityAlgorithmsRequestListValuePropertyList",
        },
        phase_1_lifetime_seconds: {
            value: cdktn.numberToHclTerraform(struct!.phase1LifetimeSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        phase_2_dh_group_numbers: {
            value: cdktn.listMapperHcl(ccVPNConnectionPhase2DHGroupNumbersRequestListValuePropertyToHclTerraform, false)(struct!.phase2DhGroupNumbers),
            isBlock: true,
            type: "list",
            storageClassType: "Phase2DHGroupNumbersRequestListValuePropertyList",
        },
        phase_2_encryption_algorithms: {
            value: cdktn.listMapperHcl(ccVPNConnectionPhase2EncryptionAlgorithmsRequestListValuePropertyToHclTerraform, false)(struct!.phase2EncryptionAlgorithms),
            isBlock: true,
            type: "list",
            storageClassType: "Phase2EncryptionAlgorithmsRequestListValuePropertyList",
        },
        phase_2_integrity_algorithms: {
            value: cdktn.listMapperHcl(ccVPNConnectionPhase2IntegrityAlgorithmsRequestListValuePropertyToHclTerraform, false)(struct!.phase2IntegrityAlgorithms),
            isBlock: true,
            type: "list",
            storageClassType: "Phase2IntegrityAlgorithmsRequestListValuePropertyList",
        },
        phase_2_lifetime_seconds: {
            value: cdktn.numberToHclTerraform(struct!.phase2LifetimeSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        pre_shared_key: {
            value: cdktn.stringToHclTerraform(struct!.preSharedKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rekey_fuzz_percentage: {
            value: cdktn.numberToHclTerraform(struct!.rekeyFuzzPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rekey_margin_time_seconds: {
            value: cdktn.numberToHclTerraform(struct!.rekeyMarginTimeSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        replay_window_size: {
            value: cdktn.numberToHclTerraform(struct!.replayWindowSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        startup_action: {
            value: cdktn.stringToHclTerraform(struct!.startupAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tunnel_inside_cidr: {
            value: cdktn.stringToHclTerraform(struct!.tunnelInsideCidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tunnel_inside_ipv_6_cidr: {
            value: cdktn.stringToHclTerraform(struct!.tunnelInsideIpv6Cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcVPNConnection {
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#key CcVPNConnection#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#value CcVPNConnection#value}
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
export interface IKEVersionsRequestListValueProperty {
    /**
    * The IKE version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#value CcVPNConnection#value}
    */
    readonly value?: string;
}
export class IKEVersionsRequestListValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IKEVersionsRequestListValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IKEVersionsRequestListValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
        }
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

export class IKEVersionsRequestListValuePropertyList extends cdktn.ComplexList {
    public internalValue? : IKEVersionsRequestListValueProperty[] | cdktn.IResolvable

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
    public get(index: number): IKEVersionsRequestListValuePropertyOutputReference {
        return new IKEVersionsRequestListValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CloudwatchLogOptionsSpecificationProperty {
    /**
    * Specifies whether to enable BGP logging for the VPN connection. Default value is ``False``.
    *  Valid values: ``True`` | ``False``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#bgp_log_enabled CcVPNConnection#bgp_log_enabled}
    */
    readonly bgpLogEnabled?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the CloudWatch log group where BGP logs will be sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#bgp_log_group_arn CcVPNConnection#bgp_log_group_arn}
    */
    readonly bgpLogGroupArn?: string;
    /**
    * The desired output format for BGP logs to be sent to CloudWatch. Default format is ``json``.
    *  Valid values: ``json`` | ``text``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#bgp_log_output_format CcVPNConnection#bgp_log_output_format}
    */
    readonly bgpLogOutputFormat?: string;
    /**
    * Enable or disable VPN tunnel logging feature. Default value is ``False``.
    *  Valid values: ``True`` | ``False``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#log_enabled CcVPNConnection#log_enabled}
    */
    readonly logEnabled?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#log_group_arn CcVPNConnection#log_group_arn}
    */
    readonly logGroupArn?: string;
    /**
    * Set log format. Default format is ``json``.
    *  Valid values: ``json`` | ``text``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#log_output_format CcVPNConnection#log_output_format}
    */
    readonly logOutputFormat?: string;
}
export class CloudwatchLogOptionsSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudwatchLogOptionsSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bgpLogEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.bgpLogEnabled = this._bgpLogEnabled;
        }
        if (this._bgpLogGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bgpLogGroupArn = this._bgpLogGroupArn;
        }
        if (this._bgpLogOutputFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.bgpLogOutputFormat = this._bgpLogOutputFormat;
        }
        if (this._logEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.logEnabled = this._logEnabled;
        }
        if (this._logGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupArn = this._logGroupArn;
        }
        if (this._logOutputFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.logOutputFormat = this._logOutputFormat;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudwatchLogOptionsSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bgpLogEnabled = undefined;
            this._bgpLogGroupArn = undefined;
            this._bgpLogOutputFormat = undefined;
            this._logEnabled = undefined;
            this._logGroupArn = undefined;
            this._logOutputFormat = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bgpLogEnabled = value.bgpLogEnabled;
            this._bgpLogGroupArn = value.bgpLogGroupArn;
            this._bgpLogOutputFormat = value.bgpLogOutputFormat;
            this._logEnabled = value.logEnabled;
            this._logGroupArn = value.logGroupArn;
            this._logOutputFormat = value.logOutputFormat;
        }
    }

    // bgp_log_enabled - computed: true, optional: true, required: false
    private _bgpLogEnabled?: boolean | cdktn.IResolvable; 
    public get bgpLogEnabled() {
        return this.getBooleanAttribute('bgp_log_enabled');
    }
    public set bgpLogEnabled(value: boolean | cdktn.IResolvable) {
        this._bgpLogEnabled = value;
    }
    public resetBgpLogEnabled() {
        this._bgpLogEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpLogEnabledInput() {
        return this._bgpLogEnabled;
    }

    // bgp_log_group_arn - computed: true, optional: true, required: false
    private _bgpLogGroupArn?: string; 
    public get bgpLogGroupArn() {
        return this.getStringAttribute('bgp_log_group_arn');
    }
    public set bgpLogGroupArn(value: string) {
        this._bgpLogGroupArn = value;
    }
    public resetBgpLogGroupArn() {
        this._bgpLogGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpLogGroupArnInput() {
        return this._bgpLogGroupArn;
    }

    // bgp_log_output_format - computed: true, optional: true, required: false
    private _bgpLogOutputFormat?: string; 
    public get bgpLogOutputFormat() {
        return this.getStringAttribute('bgp_log_output_format');
    }
    public set bgpLogOutputFormat(value: string) {
        this._bgpLogOutputFormat = value;
    }
    public resetBgpLogOutputFormat() {
        this._bgpLogOutputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpLogOutputFormatInput() {
        return this._bgpLogOutputFormat;
    }

    // log_enabled - computed: true, optional: true, required: false
    private _logEnabled?: boolean | cdktn.IResolvable; 
    public get logEnabled() {
        return this.getBooleanAttribute('log_enabled');
    }
    public set logEnabled(value: boolean | cdktn.IResolvable) {
        this._logEnabled = value;
    }
    public resetLogEnabled() {
        this._logEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logEnabledInput() {
        return this._logEnabled;
    }

    // log_group_arn - computed: true, optional: true, required: false
    private _logGroupArn?: string; 
    public get logGroupArn() {
        return this.getStringAttribute('log_group_arn');
    }
    public set logGroupArn(value: string) {
        this._logGroupArn = value;
    }
    public resetLogGroupArn() {
        this._logGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupArnInput() {
        return this._logGroupArn;
    }

    // log_output_format - computed: true, optional: true, required: false
    private _logOutputFormat?: string; 
    public get logOutputFormat() {
        return this.getStringAttribute('log_output_format');
    }
    public set logOutputFormat(value: string) {
        this._logOutputFormat = value;
    }
    public resetLogOutputFormat() {
        this._logOutputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logOutputFormatInput() {
        return this._logOutputFormat;
    }
}
export interface VpnTunnelLogOptionsSpecificationProperty {
    /**
    * Options for sending VPN tunnel logs to CloudWatch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#cloudwatch_log_options CcVPNConnection#cloudwatch_log_options}
    */
    readonly cloudwatchLogOptions?: CloudwatchLogOptionsSpecificationProperty;
}
export class VpnTunnelLogOptionsSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpnTunnelLogOptionsSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogOptions = this._cloudwatchLogOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpnTunnelLogOptionsSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogOptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogOptions.internalValue = value.cloudwatchLogOptions;
        }
    }

    // cloudwatch_log_options - computed: true, optional: true, required: false
    private _cloudwatchLogOptions = new CloudwatchLogOptionsSpecificationPropertyOutputReference(this, "cloudwatch_log_options");
    public get cloudwatchLogOptions() {
        return this._cloudwatchLogOptions;
    }
    public putCloudwatchLogOptions(value: CloudwatchLogOptionsSpecificationProperty) {
        this._cloudwatchLogOptions.internalValue = value;
    }
    public resetCloudwatchLogOptions() {
        this._cloudwatchLogOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogOptionsInput() {
        return this._cloudwatchLogOptions.internalValue;
    }
}
export interface Phase1DHGroupNumbersRequestListValueProperty {
    /**
    * The Diffie-Hellmann group number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#value CcVPNConnection#value}
    */
    readonly value?: number;
}
export class Phase1DHGroupNumbersRequestListValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Phase1DHGroupNumbersRequestListValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Phase1DHGroupNumbersRequestListValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
        }
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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

export class Phase1DHGroupNumbersRequestListValuePropertyList extends cdktn.ComplexList {
    public internalValue? : Phase1DHGroupNumbersRequestListValueProperty[] | cdktn.IResolvable

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
    public get(index: number): Phase1DHGroupNumbersRequestListValuePropertyOutputReference {
        return new Phase1DHGroupNumbersRequestListValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Phase1EncryptionAlgorithmsRequestListValueProperty {
    /**
    * The value for the encryption algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#value CcVPNConnection#value}
    */
    readonly value?: string;
}
export class Phase1EncryptionAlgorithmsRequestListValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Phase1EncryptionAlgorithmsRequestListValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Phase1EncryptionAlgorithmsRequestListValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
        }
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

export class Phase1EncryptionAlgorithmsRequestListValuePropertyList extends cdktn.ComplexList {
    public internalValue? : Phase1EncryptionAlgorithmsRequestListValueProperty[] | cdktn.IResolvable

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
    public get(index: number): Phase1EncryptionAlgorithmsRequestListValuePropertyOutputReference {
        return new Phase1EncryptionAlgorithmsRequestListValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Phase1IntegrityAlgorithmsRequestListValueProperty {
    /**
    * The value for the integrity algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#value CcVPNConnection#value}
    */
    readonly value?: string;
}
export class Phase1IntegrityAlgorithmsRequestListValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Phase1IntegrityAlgorithmsRequestListValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Phase1IntegrityAlgorithmsRequestListValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
        }
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

export class Phase1IntegrityAlgorithmsRequestListValuePropertyList extends cdktn.ComplexList {
    public internalValue? : Phase1IntegrityAlgorithmsRequestListValueProperty[] | cdktn.IResolvable

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
    public get(index: number): Phase1IntegrityAlgorithmsRequestListValuePropertyOutputReference {
        return new Phase1IntegrityAlgorithmsRequestListValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Phase2DHGroupNumbersRequestListValueProperty {
    /**
    * The Diffie-Hellmann group number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#value CcVPNConnection#value}
    */
    readonly value?: number;
}
export class Phase2DHGroupNumbersRequestListValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Phase2DHGroupNumbersRequestListValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Phase2DHGroupNumbersRequestListValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
        }
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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

export class Phase2DHGroupNumbersRequestListValuePropertyList extends cdktn.ComplexList {
    public internalValue? : Phase2DHGroupNumbersRequestListValueProperty[] | cdktn.IResolvable

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
    public get(index: number): Phase2DHGroupNumbersRequestListValuePropertyOutputReference {
        return new Phase2DHGroupNumbersRequestListValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Phase2EncryptionAlgorithmsRequestListValueProperty {
    /**
    * The encryption algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#value CcVPNConnection#value}
    */
    readonly value?: string;
}
export class Phase2EncryptionAlgorithmsRequestListValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Phase2EncryptionAlgorithmsRequestListValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Phase2EncryptionAlgorithmsRequestListValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
        }
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

export class Phase2EncryptionAlgorithmsRequestListValuePropertyList extends cdktn.ComplexList {
    public internalValue? : Phase2EncryptionAlgorithmsRequestListValueProperty[] | cdktn.IResolvable

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
    public get(index: number): Phase2EncryptionAlgorithmsRequestListValuePropertyOutputReference {
        return new Phase2EncryptionAlgorithmsRequestListValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Phase2IntegrityAlgorithmsRequestListValueProperty {
    /**
    * The integrity algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#value CcVPNConnection#value}
    */
    readonly value?: string;
}
export class Phase2IntegrityAlgorithmsRequestListValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Phase2IntegrityAlgorithmsRequestListValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Phase2IntegrityAlgorithmsRequestListValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
        }
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

export class Phase2IntegrityAlgorithmsRequestListValuePropertyList extends cdktn.ComplexList {
    public internalValue? : Phase2IntegrityAlgorithmsRequestListValueProperty[] | cdktn.IResolvable

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
    public get(index: number): Phase2IntegrityAlgorithmsRequestListValuePropertyOutputReference {
        return new Phase2IntegrityAlgorithmsRequestListValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VpnTunnelOptionsSpecificationProperty {
    /**
    * The action to take after DPD timeout occurs. Specify ``restart`` to restart the IKE initiation. Specify ``clear`` to end the IKE session.
    *  Valid Values: ``clear`` | ``none`` | ``restart``
    *  Default: ``clear``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#dpd_timeout_action CcVPNConnection#dpd_timeout_action}
    */
    readonly dpdTimeoutAction?: string;
    /**
    * The number of seconds after which a DPD timeout occurs.
    *  Constraints: A value greater than or equal to 30.
    *  Default: ``30``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#dpd_timeout_seconds CcVPNConnection#dpd_timeout_seconds}
    */
    readonly dpdTimeoutSeconds?: number;
    /**
    * Turn on or off tunnel endpoint lifecycle control feature.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#enable_tunnel_lifecycle_control CcVPNConnection#enable_tunnel_lifecycle_control}
    */
    readonly enableTunnelLifecycleControl?: boolean | cdktn.IResolvable;
    /**
    * The IKE versions that are permitted for the VPN tunnel.
    *  Valid values: ``ikev1`` | ``ikev2``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#ike_versions CcVPNConnection#ike_versions}
    */
    readonly ikeVersions?: IKEVersionsRequestListValueProperty[] | cdktn.IResolvable;
    /**
    * Options for logging VPN tunnel activity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#log_options CcVPNConnection#log_options}
    */
    readonly logOptions?: VpnTunnelLogOptionsSpecificationProperty;
    /**
    * One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.
    *  Valid values: ``2`` | ``14`` | ``15`` | ``16`` | ``17`` | ``18`` | ``19`` | ``20`` | ``21`` | ``22`` | ``23`` | ``24``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#phase_1_dh_group_numbers CcVPNConnection#phase_1_dh_group_numbers}
    */
    readonly phase1DhGroupNumbers?: Phase1DHGroupNumbersRequestListValueProperty[] | cdktn.IResolvable;
    /**
    * One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.
    *  Valid values: ``AES128`` | ``AES256`` | ``AES128-GCM-16`` | ``AES256-GCM-16``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#phase_1_encryption_algorithms CcVPNConnection#phase_1_encryption_algorithms}
    */
    readonly phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValueProperty[] | cdktn.IResolvable;
    /**
    * One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.
    *  Valid values: ``SHA1`` | ``SHA2-256`` | ``SHA2-384`` | ``SHA2-512``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#phase_1_integrity_algorithms CcVPNConnection#phase_1_integrity_algorithms}
    */
    readonly phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValueProperty[] | cdktn.IResolvable;
    /**
    * The lifetime for phase 1 of the IKE negotiation, in seconds.
    *  Constraints: A value between 900 and 28,800.
    *  Default: ``28800``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#phase_1_lifetime_seconds CcVPNConnection#phase_1_lifetime_seconds}
    */
    readonly phase1LifetimeSeconds?: number;
    /**
    * One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.
    *  Valid values: ``2`` | ``5`` | ``14`` | ``15`` | ``16`` | ``17`` | ``18`` | ``19`` | ``20`` | ``21`` | ``22`` | ``23`` | ``24``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#phase_2_dh_group_numbers CcVPNConnection#phase_2_dh_group_numbers}
    */
    readonly phase2DhGroupNumbers?: Phase2DHGroupNumbersRequestListValueProperty[] | cdktn.IResolvable;
    /**
    * One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.
    *  Valid values: ``AES128`` | ``AES256`` | ``AES128-GCM-16`` | ``AES256-GCM-16``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#phase_2_encryption_algorithms CcVPNConnection#phase_2_encryption_algorithms}
    */
    readonly phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValueProperty[] | cdktn.IResolvable;
    /**
    * One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.
    *  Valid values: ``SHA1`` | ``SHA2-256`` | ``SHA2-384`` | ``SHA2-512``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#phase_2_integrity_algorithms CcVPNConnection#phase_2_integrity_algorithms}
    */
    readonly phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValueProperty[] | cdktn.IResolvable;
    /**
    * The lifetime for phase 2 of the IKE negotiation, in seconds.
    *  Constraints: A value between 900 and 3,600. The value must be less than the value for ``Phase1LifetimeSeconds``.
    *  Default: ``3600``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#phase_2_lifetime_seconds CcVPNConnection#phase_2_lifetime_seconds}
    */
    readonly phase2LifetimeSeconds?: number;
    /**
    * The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.
    *  Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (_). Must be between 8 and 64 characters in length and cannot start with zero (0).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#pre_shared_key CcVPNConnection#pre_shared_key}
    */
    readonly preSharedKey?: string;
    /**
    * The percentage of the rekey window (determined by ``RekeyMarginTimeSeconds``) during which the rekey time is randomly selected.
    *  Constraints: A value between 0 and 100.
    *  Default: ``100``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#rekey_fuzz_percentage CcVPNConnection#rekey_fuzz_percentage}
    */
    readonly rekeyFuzzPercentage?: number;
    /**
    * The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for ``RekeyFuzzPercentage``.
    *  Constraints: A value between 60 and half of ``Phase2LifetimeSeconds``.
    *  Default: ``270``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#rekey_margin_time_seconds CcVPNConnection#rekey_margin_time_seconds}
    */
    readonly rekeyMarginTimeSeconds?: number;
    /**
    * The number of packets in an IKE replay window.
    *  Constraints: A value between 64 and 2048.
    *  Default: ``1024``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#replay_window_size CcVPNConnection#replay_window_size}
    */
    readonly replayWindowSize?: number;
    /**
    * The action to take when the establishing the tunnel for the VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify ``start`` for AWS to initiate the IKE negotiation.
    *  Valid Values: ``add`` | ``start``
    *  Default: ``add``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#startup_action CcVPNConnection#startup_action}
    */
    readonly startupAction?: string;
    /**
    * The range of inside IP addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway. 
    *  Constraints: A size /30 CIDR block from the ``169.254.0.0/16`` range. The following CIDR blocks are reserved and cannot be used:
    *   +   ``169.254.0.0/30`` 
    *   +   ``169.254.1.0/30`` 
    *   +   ``169.254.2.0/30`` 
    *   +   ``169.254.3.0/30`` 
    *   +   ``169.254.4.0/30`` 
    *   +   ``169.254.5.0/30`` 
    *   +   ``169.254.169.252/30``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#tunnel_inside_cidr CcVPNConnection#tunnel_inside_cidr}
    */
    readonly tunnelInsideCidr?: string;
    /**
    * The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.
    *  Constraints: A size /126 CIDR block from the local ``fd00::/8`` range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection#tunnel_inside_ipv_6_cidr CcVPNConnection#tunnel_inside_ipv_6_cidr}
    */
    readonly tunnelInsideIpv6Cidr?: string;
}
export class VpnTunnelOptionsSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VpnTunnelOptionsSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dpdTimeoutAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.dpdTimeoutAction = this._dpdTimeoutAction;
        }
        if (this._dpdTimeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.dpdTimeoutSeconds = this._dpdTimeoutSeconds;
        }
        if (this._enableTunnelLifecycleControl !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableTunnelLifecycleControl = this._enableTunnelLifecycleControl;
        }
        if (this._ikeVersions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ikeVersions = this._ikeVersions?.internalValue;
        }
        if (this._logOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logOptions = this._logOptions?.internalValue;
        }
        if (this._phase1DhGroupNumbers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.phase1DhGroupNumbers = this._phase1DhGroupNumbers?.internalValue;
        }
        if (this._phase1EncryptionAlgorithms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.phase1EncryptionAlgorithms = this._phase1EncryptionAlgorithms?.internalValue;
        }
        if (this._phase1IntegrityAlgorithms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.phase1IntegrityAlgorithms = this._phase1IntegrityAlgorithms?.internalValue;
        }
        if (this._phase1LifetimeSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.phase1LifetimeSeconds = this._phase1LifetimeSeconds;
        }
        if (this._phase2DhGroupNumbers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.phase2DhGroupNumbers = this._phase2DhGroupNumbers?.internalValue;
        }
        if (this._phase2EncryptionAlgorithms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.phase2EncryptionAlgorithms = this._phase2EncryptionAlgorithms?.internalValue;
        }
        if (this._phase2IntegrityAlgorithms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.phase2IntegrityAlgorithms = this._phase2IntegrityAlgorithms?.internalValue;
        }
        if (this._phase2LifetimeSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.phase2LifetimeSeconds = this._phase2LifetimeSeconds;
        }
        if (this._preSharedKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.preSharedKey = this._preSharedKey;
        }
        if (this._rekeyFuzzPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.rekeyFuzzPercentage = this._rekeyFuzzPercentage;
        }
        if (this._rekeyMarginTimeSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.rekeyMarginTimeSeconds = this._rekeyMarginTimeSeconds;
        }
        if (this._replayWindowSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.replayWindowSize = this._replayWindowSize;
        }
        if (this._startupAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.startupAction = this._startupAction;
        }
        if (this._tunnelInsideCidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.tunnelInsideCidr = this._tunnelInsideCidr;
        }
        if (this._tunnelInsideIpv6Cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.tunnelInsideIpv6Cidr = this._tunnelInsideIpv6Cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpnTunnelOptionsSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dpdTimeoutAction = undefined;
            this._dpdTimeoutSeconds = undefined;
            this._enableTunnelLifecycleControl = undefined;
            this._ikeVersions.internalValue = undefined;
            this._logOptions.internalValue = undefined;
            this._phase1DhGroupNumbers.internalValue = undefined;
            this._phase1EncryptionAlgorithms.internalValue = undefined;
            this._phase1IntegrityAlgorithms.internalValue = undefined;
            this._phase1LifetimeSeconds = undefined;
            this._phase2DhGroupNumbers.internalValue = undefined;
            this._phase2EncryptionAlgorithms.internalValue = undefined;
            this._phase2IntegrityAlgorithms.internalValue = undefined;
            this._phase2LifetimeSeconds = undefined;
            this._preSharedKey = undefined;
            this._rekeyFuzzPercentage = undefined;
            this._rekeyMarginTimeSeconds = undefined;
            this._replayWindowSize = undefined;
            this._startupAction = undefined;
            this._tunnelInsideCidr = undefined;
            this._tunnelInsideIpv6Cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dpdTimeoutAction = value.dpdTimeoutAction;
            this._dpdTimeoutSeconds = value.dpdTimeoutSeconds;
            this._enableTunnelLifecycleControl = value.enableTunnelLifecycleControl;
            this._ikeVersions.internalValue = value.ikeVersions;
            this._logOptions.internalValue = value.logOptions;
            this._phase1DhGroupNumbers.internalValue = value.phase1DhGroupNumbers;
            this._phase1EncryptionAlgorithms.internalValue = value.phase1EncryptionAlgorithms;
            this._phase1IntegrityAlgorithms.internalValue = value.phase1IntegrityAlgorithms;
            this._phase1LifetimeSeconds = value.phase1LifetimeSeconds;
            this._phase2DhGroupNumbers.internalValue = value.phase2DhGroupNumbers;
            this._phase2EncryptionAlgorithms.internalValue = value.phase2EncryptionAlgorithms;
            this._phase2IntegrityAlgorithms.internalValue = value.phase2IntegrityAlgorithms;
            this._phase2LifetimeSeconds = value.phase2LifetimeSeconds;
            this._preSharedKey = value.preSharedKey;
            this._rekeyFuzzPercentage = value.rekeyFuzzPercentage;
            this._rekeyMarginTimeSeconds = value.rekeyMarginTimeSeconds;
            this._replayWindowSize = value.replayWindowSize;
            this._startupAction = value.startupAction;
            this._tunnelInsideCidr = value.tunnelInsideCidr;
            this._tunnelInsideIpv6Cidr = value.tunnelInsideIpv6Cidr;
        }
    }

    // dpd_timeout_action - computed: true, optional: true, required: false
    private _dpdTimeoutAction?: string; 
    public get dpdTimeoutAction() {
        return this.getStringAttribute('dpd_timeout_action');
    }
    public set dpdTimeoutAction(value: string) {
        this._dpdTimeoutAction = value;
    }
    public resetDpdTimeoutAction() {
        this._dpdTimeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dpdTimeoutActionInput() {
        return this._dpdTimeoutAction;
    }

    // dpd_timeout_seconds - computed: true, optional: true, required: false
    private _dpdTimeoutSeconds?: number; 
    public get dpdTimeoutSeconds() {
        return this.getNumberAttribute('dpd_timeout_seconds');
    }
    public set dpdTimeoutSeconds(value: number) {
        this._dpdTimeoutSeconds = value;
    }
    public resetDpdTimeoutSeconds() {
        this._dpdTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dpdTimeoutSecondsInput() {
        return this._dpdTimeoutSeconds;
    }

    // enable_tunnel_lifecycle_control - computed: true, optional: true, required: false
    private _enableTunnelLifecycleControl?: boolean | cdktn.IResolvable; 
    public get enableTunnelLifecycleControl() {
        return this.getBooleanAttribute('enable_tunnel_lifecycle_control');
    }
    public set enableTunnelLifecycleControl(value: boolean | cdktn.IResolvable) {
        this._enableTunnelLifecycleControl = value;
    }
    public resetEnableTunnelLifecycleControl() {
        this._enableTunnelLifecycleControl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableTunnelLifecycleControlInput() {
        return this._enableTunnelLifecycleControl;
    }

    // ike_versions - computed: true, optional: true, required: false
    private _ikeVersions = new IKEVersionsRequestListValuePropertyList(this, "ike_versions", false);
    public get ikeVersions() {
        return this._ikeVersions;
    }
    public putIkeVersions(value: IKEVersionsRequestListValueProperty[] | cdktn.IResolvable) {
        this._ikeVersions.internalValue = value;
    }
    public resetIkeVersions() {
        this._ikeVersions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ikeVersionsInput() {
        return this._ikeVersions.internalValue;
    }

    // log_options - computed: true, optional: true, required: false
    private _logOptions = new VpnTunnelLogOptionsSpecificationPropertyOutputReference(this, "log_options");
    public get logOptions() {
        return this._logOptions;
    }
    public putLogOptions(value: VpnTunnelLogOptionsSpecificationProperty) {
        this._logOptions.internalValue = value;
    }
    public resetLogOptions() {
        this._logOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logOptionsInput() {
        return this._logOptions.internalValue;
    }

    // phase_1_dh_group_numbers - computed: true, optional: true, required: false
    private _phase1DhGroupNumbers = new Phase1DHGroupNumbersRequestListValuePropertyList(this, "phase_1_dh_group_numbers", false);
    public get phase1DhGroupNumbers() {
        return this._phase1DhGroupNumbers;
    }
    public putPhase1DhGroupNumbers(value: Phase1DHGroupNumbersRequestListValueProperty[] | cdktn.IResolvable) {
        this._phase1DhGroupNumbers.internalValue = value;
    }
    public resetPhase1DhGroupNumbers() {
        this._phase1DhGroupNumbers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phase1DhGroupNumbersInput() {
        return this._phase1DhGroupNumbers.internalValue;
    }

    // phase_1_encryption_algorithms - computed: true, optional: true, required: false
    private _phase1EncryptionAlgorithms = new Phase1EncryptionAlgorithmsRequestListValuePropertyList(this, "phase_1_encryption_algorithms", false);
    public get phase1EncryptionAlgorithms() {
        return this._phase1EncryptionAlgorithms;
    }
    public putPhase1EncryptionAlgorithms(value: Phase1EncryptionAlgorithmsRequestListValueProperty[] | cdktn.IResolvable) {
        this._phase1EncryptionAlgorithms.internalValue = value;
    }
    public resetPhase1EncryptionAlgorithms() {
        this._phase1EncryptionAlgorithms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phase1EncryptionAlgorithmsInput() {
        return this._phase1EncryptionAlgorithms.internalValue;
    }

    // phase_1_integrity_algorithms - computed: true, optional: true, required: false
    private _phase1IntegrityAlgorithms = new Phase1IntegrityAlgorithmsRequestListValuePropertyList(this, "phase_1_integrity_algorithms", false);
    public get phase1IntegrityAlgorithms() {
        return this._phase1IntegrityAlgorithms;
    }
    public putPhase1IntegrityAlgorithms(value: Phase1IntegrityAlgorithmsRequestListValueProperty[] | cdktn.IResolvable) {
        this._phase1IntegrityAlgorithms.internalValue = value;
    }
    public resetPhase1IntegrityAlgorithms() {
        this._phase1IntegrityAlgorithms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phase1IntegrityAlgorithmsInput() {
        return this._phase1IntegrityAlgorithms.internalValue;
    }

    // phase_1_lifetime_seconds - computed: true, optional: true, required: false
    private _phase1LifetimeSeconds?: number; 
    public get phase1LifetimeSeconds() {
        return this.getNumberAttribute('phase_1_lifetime_seconds');
    }
    public set phase1LifetimeSeconds(value: number) {
        this._phase1LifetimeSeconds = value;
    }
    public resetPhase1LifetimeSeconds() {
        this._phase1LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phase1LifetimeSecondsInput() {
        return this._phase1LifetimeSeconds;
    }

    // phase_2_dh_group_numbers - computed: true, optional: true, required: false
    private _phase2DhGroupNumbers = new Phase2DHGroupNumbersRequestListValuePropertyList(this, "phase_2_dh_group_numbers", false);
    public get phase2DhGroupNumbers() {
        return this._phase2DhGroupNumbers;
    }
    public putPhase2DhGroupNumbers(value: Phase2DHGroupNumbersRequestListValueProperty[] | cdktn.IResolvable) {
        this._phase2DhGroupNumbers.internalValue = value;
    }
    public resetPhase2DhGroupNumbers() {
        this._phase2DhGroupNumbers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phase2DhGroupNumbersInput() {
        return this._phase2DhGroupNumbers.internalValue;
    }

    // phase_2_encryption_algorithms - computed: true, optional: true, required: false
    private _phase2EncryptionAlgorithms = new Phase2EncryptionAlgorithmsRequestListValuePropertyList(this, "phase_2_encryption_algorithms", false);
    public get phase2EncryptionAlgorithms() {
        return this._phase2EncryptionAlgorithms;
    }
    public putPhase2EncryptionAlgorithms(value: Phase2EncryptionAlgorithmsRequestListValueProperty[] | cdktn.IResolvable) {
        this._phase2EncryptionAlgorithms.internalValue = value;
    }
    public resetPhase2EncryptionAlgorithms() {
        this._phase2EncryptionAlgorithms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phase2EncryptionAlgorithmsInput() {
        return this._phase2EncryptionAlgorithms.internalValue;
    }

    // phase_2_integrity_algorithms - computed: true, optional: true, required: false
    private _phase2IntegrityAlgorithms = new Phase2IntegrityAlgorithmsRequestListValuePropertyList(this, "phase_2_integrity_algorithms", false);
    public get phase2IntegrityAlgorithms() {
        return this._phase2IntegrityAlgorithms;
    }
    public putPhase2IntegrityAlgorithms(value: Phase2IntegrityAlgorithmsRequestListValueProperty[] | cdktn.IResolvable) {
        this._phase2IntegrityAlgorithms.internalValue = value;
    }
    public resetPhase2IntegrityAlgorithms() {
        this._phase2IntegrityAlgorithms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phase2IntegrityAlgorithmsInput() {
        return this._phase2IntegrityAlgorithms.internalValue;
    }

    // phase_2_lifetime_seconds - computed: true, optional: true, required: false
    private _phase2LifetimeSeconds?: number; 
    public get phase2LifetimeSeconds() {
        return this.getNumberAttribute('phase_2_lifetime_seconds');
    }
    public set phase2LifetimeSeconds(value: number) {
        this._phase2LifetimeSeconds = value;
    }
    public resetPhase2LifetimeSeconds() {
        this._phase2LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phase2LifetimeSecondsInput() {
        return this._phase2LifetimeSeconds;
    }

    // pre_shared_key - computed: true, optional: true, required: false
    private _preSharedKey?: string; 
    public get preSharedKey() {
        return this.getStringAttribute('pre_shared_key');
    }
    public set preSharedKey(value: string) {
        this._preSharedKey = value;
    }
    public resetPreSharedKey() {
        this._preSharedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preSharedKeyInput() {
        return this._preSharedKey;
    }

    // rekey_fuzz_percentage - computed: true, optional: true, required: false
    private _rekeyFuzzPercentage?: number; 
    public get rekeyFuzzPercentage() {
        return this.getNumberAttribute('rekey_fuzz_percentage');
    }
    public set rekeyFuzzPercentage(value: number) {
        this._rekeyFuzzPercentage = value;
    }
    public resetRekeyFuzzPercentage() {
        this._rekeyFuzzPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rekeyFuzzPercentageInput() {
        return this._rekeyFuzzPercentage;
    }

    // rekey_margin_time_seconds - computed: true, optional: true, required: false
    private _rekeyMarginTimeSeconds?: number; 
    public get rekeyMarginTimeSeconds() {
        return this.getNumberAttribute('rekey_margin_time_seconds');
    }
    public set rekeyMarginTimeSeconds(value: number) {
        this._rekeyMarginTimeSeconds = value;
    }
    public resetRekeyMarginTimeSeconds() {
        this._rekeyMarginTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rekeyMarginTimeSecondsInput() {
        return this._rekeyMarginTimeSeconds;
    }

    // replay_window_size - computed: true, optional: true, required: false
    private _replayWindowSize?: number; 
    public get replayWindowSize() {
        return this.getNumberAttribute('replay_window_size');
    }
    public set replayWindowSize(value: number) {
        this._replayWindowSize = value;
    }
    public resetReplayWindowSize() {
        this._replayWindowSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replayWindowSizeInput() {
        return this._replayWindowSize;
    }

    // startup_action - computed: true, optional: true, required: false
    private _startupAction?: string; 
    public get startupAction() {
        return this.getStringAttribute('startup_action');
    }
    public set startupAction(value: string) {
        this._startupAction = value;
    }
    public resetStartupAction() {
        this._startupAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startupActionInput() {
        return this._startupAction;
    }

    // tunnel_inside_cidr - computed: true, optional: true, required: false
    private _tunnelInsideCidr?: string; 
    public get tunnelInsideCidr() {
        return this.getStringAttribute('tunnel_inside_cidr');
    }
    public set tunnelInsideCidr(value: string) {
        this._tunnelInsideCidr = value;
    }
    public resetTunnelInsideCidr() {
        this._tunnelInsideCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnelInsideCidrInput() {
        return this._tunnelInsideCidr;
    }

    // tunnel_inside_ipv_6_cidr - computed: true, optional: true, required: false
    private _tunnelInsideIpv6Cidr?: string; 
    public get tunnelInsideIpv6Cidr() {
        return this.getStringAttribute('tunnel_inside_ipv_6_cidr');
    }
    public set tunnelInsideIpv6Cidr(value: string) {
        this._tunnelInsideIpv6Cidr = value;
    }
    public resetTunnelInsideIpv6Cidr() {
        this._tunnelInsideIpv6Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tunnelInsideIpv6CidrInput() {
        return this._tunnelInsideIpv6Cidr;
    }
}

export class VpnTunnelOptionsSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : VpnTunnelOptionsSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): VpnTunnelOptionsSpecificationPropertyOutputReference {
        return new VpnTunnelOptionsSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
