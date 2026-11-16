// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClientVpnEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * Information about the authentication method to be used to authenticate clients.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#authentication_options CcClientVpnEndpoint#authentication_options}
    */
    readonly authenticationOptions: CcClientVpnEndpoint.ClientAuthenticationRequestProperty[] | cdktn.IResolvable;
    /**
    * The Cedar authorization policy to associate with the Client VPN endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#authorization_policy CcClientVpnEndpoint#authorization_policy}
    */
    readonly authorizationPolicy?: CcClientVpnEndpoint.AuthorizationPolicyProperty;
    /**
    * The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_cidr_block CcClientVpnEndpoint#client_cidr_block}
    */
    readonly clientCidrBlock?: string;
    /**
    * The options for managing connection authorization for new client connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_connect_options CcClientVpnEndpoint#client_connect_options}
    */
    readonly clientConnectOptions?: CcClientVpnEndpoint.ClientConnectOptionsProperty;
    /**
    * Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_login_banner_options CcClientVpnEndpoint#client_login_banner_options}
    */
    readonly clientLoginBannerOptions?: CcClientVpnEndpoint.ClientLoginBannerOptionsProperty;
    /**
    * Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. This feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel.
    * Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_route_enforcement_options CcClientVpnEndpoint#client_route_enforcement_options}
    */
    readonly clientRouteEnforcementOptions?: CcClientVpnEndpoint.ClientRouteEnforcementOptionsProperty;
    /**
    * Information about the client connection logging options. If you enable client connection logging, data about client connections is sent to a Cloudwatch Logs log stream. The following information is logged: client connection requests, client connection results (successful and unsuccessful), reasons for unsuccessful client connection requests, client connection termination time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#connection_log_options CcClientVpnEndpoint#connection_log_options}
    */
    readonly connectionLogOptions: CcClientVpnEndpoint.ConnectionLogOptionsProperty;
    /**
    * A brief description of the Client VPN endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#description CcClientVpnEndpoint#description}
    */
    readonly description?: string;
    /**
    * The device-posture trust providers to associate with the Client VPN endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#device_posture_options CcClientVpnEndpoint#device_posture_options}
    */
    readonly devicePostureOptions?: CcClientVpnEndpoint.DevicePostureOptionsProperty;
    /**
    * Indicates whether the client VPN session is disconnected after the maximum sessionTimeoutHours is reached. If true, users are prompted to reconnect client VPN. If false, client VPN attempts to reconnect automatically.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#disconnect_on_session_timeout CcClientVpnEndpoint#disconnect_on_session_timeout}
    */
    readonly disconnectOnSessionTimeout?: boolean | cdktn.IResolvable;
    /**
    * Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#dns_servers CcClientVpnEndpoint#dns_servers}
    */
    readonly dnsServers?: string[];
    /**
    * The IP address type of the Client VPN endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#endpoint_ip_address_type CcClientVpnEndpoint#endpoint_ip_address_type}
    */
    readonly endpointIpAddressType?: string;
    /**
    * The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#security_group_ids CcClientVpnEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Specify whether to enable the self-service portal for the Client VPN endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_portal CcClientVpnEndpoint#self_service_portal}
    */
    readonly selfServicePortal?: string;
    /**
    * The ARN of the server certificate. For more information, see the AWS Certificate Manager User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#server_certificate_arn CcClientVpnEndpoint#server_certificate_arn}
    */
    readonly serverCertificateArn: string;
    /**
    * The maximum VPN session duration time in hours.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#session_timeout_hours CcClientVpnEndpoint#session_timeout_hours}
    */
    readonly sessionTimeoutHours?: number;
    /**
    * Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#split_tunnel CcClientVpnEndpoint#split_tunnel}
    */
    readonly splitTunnel?: boolean | cdktn.IResolvable;
    /**
    * The tags to apply to the Client VPN endpoint during creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tag_specifications CcClientVpnEndpoint#tag_specifications}
    */
    readonly tagSpecifications?: CcClientVpnEndpoint.TagSpecificationProperty[] | cdktn.IResolvable;
    /**
    * The IP address type of the Client VPN endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#traffic_ip_address_type CcClientVpnEndpoint#traffic_ip_address_type}
    */
    readonly trafficIpAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_configuration CcClientVpnEndpoint#transit_gateway_configuration}
    */
    readonly transitGatewayConfiguration?: CcClientVpnEndpoint.TransitGatewayConfigurationProperty;
    /**
    * The transport protocol to be used by the VPN session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transport_protocol CcClientVpnEndpoint#transport_protocol}
    */
    readonly transportProtocol?: string;
    /**
    * The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#vpc_id CcClientVpnEndpoint#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * The port number to assign to the Client VPN endpoint for TCP and UDP traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#vpn_port CcClientVpnEndpoint#vpn_port}
    */
    readonly vpnPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint awscc_ec2_client_vpn_endpoint}
*/
export class CcClientVpnEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_client_vpn_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcClientVpnEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcClientVpnEndpoint to import
    * @param importFromId The id of the existing CcClientVpnEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcClientVpnEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_client_vpn_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint awscc_ec2_client_vpn_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClientVpnEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcClientVpnEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_client_vpn_endpoint',
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
        this._authenticationOptions.internalValue = config.authenticationOptions;
        this._authorizationPolicy.internalValue = config.authorizationPolicy;
        this._clientCidrBlock = config.clientCidrBlock;
        this._clientConnectOptions.internalValue = config.clientConnectOptions;
        this._clientLoginBannerOptions.internalValue = config.clientLoginBannerOptions;
        this._clientRouteEnforcementOptions.internalValue = config.clientRouteEnforcementOptions;
        this._connectionLogOptions.internalValue = config.connectionLogOptions;
        this._description = config.description;
        this._devicePostureOptions.internalValue = config.devicePostureOptions;
        this._disconnectOnSessionTimeout = config.disconnectOnSessionTimeout;
        this._dnsServers = config.dnsServers;
        this._endpointIpAddressType = config.endpointIpAddressType;
        this._securityGroupIds = config.securityGroupIds;
        this._selfServicePortal = config.selfServicePortal;
        this._serverCertificateArn = config.serverCertificateArn;
        this._sessionTimeoutHours = config.sessionTimeoutHours;
        this._splitTunnel = config.splitTunnel;
        this._tagSpecifications.internalValue = config.tagSpecifications;
        this._trafficIpAddressType = config.trafficIpAddressType;
        this._transitGatewayConfiguration.internalValue = config.transitGatewayConfiguration;
        this._transportProtocol = config.transportProtocol;
        this._vpcId = config.vpcId;
        this._vpnPort = config.vpnPort;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // authentication_options - computed: false, optional: false, required: true
    private _authenticationOptions = new CcClientVpnEndpoint.ClientAuthenticationRequestPropertyList(this, "authentication_options", false);
    public get authenticationOptions() {
        return this._authenticationOptions;
    }
    public putAuthenticationOptions(value: CcClientVpnEndpoint.ClientAuthenticationRequestProperty[] | cdktn.IResolvable) {
        this._authenticationOptions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationOptionsInput() {
        return this._authenticationOptions.internalValue;
    }

    // authorization_policy - computed: true, optional: true, required: false
    private _authorizationPolicy = new CcClientVpnEndpoint.AuthorizationPolicyPropertyOutputReference(this, "authorization_policy");
    public get authorizationPolicy() {
        return this._authorizationPolicy;
    }
    public putAuthorizationPolicy(value: CcClientVpnEndpoint.AuthorizationPolicyProperty) {
        this._authorizationPolicy.internalValue = value;
    }
    public resetAuthorizationPolicy() {
        this._authorizationPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationPolicyInput() {
        return this._authorizationPolicy.internalValue;
    }

    // client_cidr_block - computed: true, optional: true, required: false
    private _clientCidrBlock?: string; 
    public get clientCidrBlock() {
        return this.getStringAttribute('client_cidr_block');
    }
    public set clientCidrBlock(value: string) {
        this._clientCidrBlock = value;
    }
    public resetClientCidrBlock() {
        this._clientCidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCidrBlockInput() {
        return this._clientCidrBlock;
    }

    // client_connect_options - computed: true, optional: true, required: false
    private _clientConnectOptions = new CcClientVpnEndpoint.ClientConnectOptionsPropertyOutputReference(this, "client_connect_options");
    public get clientConnectOptions() {
        return this._clientConnectOptions;
    }
    public putClientConnectOptions(value: CcClientVpnEndpoint.ClientConnectOptionsProperty) {
        this._clientConnectOptions.internalValue = value;
    }
    public resetClientConnectOptions() {
        this._clientConnectOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientConnectOptionsInput() {
        return this._clientConnectOptions.internalValue;
    }

    // client_login_banner_options - computed: true, optional: true, required: false
    private _clientLoginBannerOptions = new CcClientVpnEndpoint.ClientLoginBannerOptionsPropertyOutputReference(this, "client_login_banner_options");
    public get clientLoginBannerOptions() {
        return this._clientLoginBannerOptions;
    }
    public putClientLoginBannerOptions(value: CcClientVpnEndpoint.ClientLoginBannerOptionsProperty) {
        this._clientLoginBannerOptions.internalValue = value;
    }
    public resetClientLoginBannerOptions() {
        this._clientLoginBannerOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientLoginBannerOptionsInput() {
        return this._clientLoginBannerOptions.internalValue;
    }

    // client_route_enforcement_options - computed: true, optional: true, required: false
    private _clientRouteEnforcementOptions = new CcClientVpnEndpoint.ClientRouteEnforcementOptionsPropertyOutputReference(this, "client_route_enforcement_options");
    public get clientRouteEnforcementOptions() {
        return this._clientRouteEnforcementOptions;
    }
    public putClientRouteEnforcementOptions(value: CcClientVpnEndpoint.ClientRouteEnforcementOptionsProperty) {
        this._clientRouteEnforcementOptions.internalValue = value;
    }
    public resetClientRouteEnforcementOptions() {
        this._clientRouteEnforcementOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientRouteEnforcementOptionsInput() {
        return this._clientRouteEnforcementOptions.internalValue;
    }

    // client_vpn_endpoint_id - computed: true, optional: false, required: false
    public get clientVpnEndpointId() {
        return this.getStringAttribute('client_vpn_endpoint_id');
    }

    // connection_log_options - computed: false, optional: false, required: true
    private _connectionLogOptions = new CcClientVpnEndpoint.ConnectionLogOptionsPropertyOutputReference(this, "connection_log_options");
    public get connectionLogOptions() {
        return this._connectionLogOptions;
    }
    public putConnectionLogOptions(value: CcClientVpnEndpoint.ConnectionLogOptionsProperty) {
        this._connectionLogOptions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionLogOptionsInput() {
        return this._connectionLogOptions.internalValue;
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

    // device_posture_options - computed: true, optional: true, required: false
    private _devicePostureOptions = new CcClientVpnEndpoint.DevicePostureOptionsPropertyOutputReference(this, "device_posture_options");
    public get devicePostureOptions() {
        return this._devicePostureOptions;
    }
    public putDevicePostureOptions(value: CcClientVpnEndpoint.DevicePostureOptionsProperty) {
        this._devicePostureOptions.internalValue = value;
    }
    public resetDevicePostureOptions() {
        this._devicePostureOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get devicePostureOptionsInput() {
        return this._devicePostureOptions.internalValue;
    }

    // disconnect_on_session_timeout - computed: true, optional: true, required: false
    private _disconnectOnSessionTimeout?: boolean | cdktn.IResolvable; 
    public get disconnectOnSessionTimeout() {
        return this.getBooleanAttribute('disconnect_on_session_timeout');
    }
    public set disconnectOnSessionTimeout(value: boolean | cdktn.IResolvable) {
        this._disconnectOnSessionTimeout = value;
    }
    public resetDisconnectOnSessionTimeout() {
        this._disconnectOnSessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disconnectOnSessionTimeoutInput() {
        return this._disconnectOnSessionTimeout;
    }

    // dns_servers - computed: true, optional: true, required: false
    private _dnsServers?: string[]; 
    public get dnsServers() {
        return this.getListAttribute('dns_servers');
    }
    public set dnsServers(value: string[]) {
        this._dnsServers = value;
    }
    public resetDnsServers() {
        this._dnsServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsServersInput() {
        return this._dnsServers;
    }

    // endpoint_ip_address_type - computed: true, optional: true, required: false
    private _endpointIpAddressType?: string; 
    public get endpointIpAddressType() {
        return this.getStringAttribute('endpoint_ip_address_type');
    }
    public set endpointIpAddressType(value: string) {
        this._endpointIpAddressType = value;
    }
    public resetEndpointIpAddressType() {
        this._endpointIpAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointIpAddressTypeInput() {
        return this._endpointIpAddressType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // self_service_portal - computed: true, optional: true, required: false
    private _selfServicePortal?: string; 
    public get selfServicePortal() {
        return this.getStringAttribute('self_service_portal');
    }
    public set selfServicePortal(value: string) {
        this._selfServicePortal = value;
    }
    public resetSelfServicePortal() {
        this._selfServicePortal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfServicePortalInput() {
        return this._selfServicePortal;
    }

    // server_certificate_arn - computed: false, optional: false, required: true
    private _serverCertificateArn?: string; 
    public get serverCertificateArn() {
        return this.getStringAttribute('server_certificate_arn');
    }
    public set serverCertificateArn(value: string) {
        this._serverCertificateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverCertificateArnInput() {
        return this._serverCertificateArn;
    }

    // session_timeout_hours - computed: true, optional: true, required: false
    private _sessionTimeoutHours?: number; 
    public get sessionTimeoutHours() {
        return this.getNumberAttribute('session_timeout_hours');
    }
    public set sessionTimeoutHours(value: number) {
        this._sessionTimeoutHours = value;
    }
    public resetSessionTimeoutHours() {
        this._sessionTimeoutHours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionTimeoutHoursInput() {
        return this._sessionTimeoutHours;
    }

    // split_tunnel - computed: true, optional: true, required: false
    private _splitTunnel?: boolean | cdktn.IResolvable; 
    public get splitTunnel() {
        return this.getBooleanAttribute('split_tunnel');
    }
    public set splitTunnel(value: boolean | cdktn.IResolvable) {
        this._splitTunnel = value;
    }
    public resetSplitTunnel() {
        this._splitTunnel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get splitTunnelInput() {
        return this._splitTunnel;
    }

    // tag_specifications - computed: true, optional: true, required: false
    private _tagSpecifications = new CcClientVpnEndpoint.TagSpecificationPropertyList(this, "tag_specifications", false);
    public get tagSpecifications() {
        return this._tagSpecifications;
    }
    public putTagSpecifications(value: CcClientVpnEndpoint.TagSpecificationProperty[] | cdktn.IResolvable) {
        this._tagSpecifications.internalValue = value;
    }
    public resetTagSpecifications() {
        this._tagSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagSpecificationsInput() {
        return this._tagSpecifications.internalValue;
    }

    // traffic_ip_address_type - computed: true, optional: true, required: false
    private _trafficIpAddressType?: string; 
    public get trafficIpAddressType() {
        return this.getStringAttribute('traffic_ip_address_type');
    }
    public set trafficIpAddressType(value: string) {
        this._trafficIpAddressType = value;
    }
    public resetTrafficIpAddressType() {
        this._trafficIpAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficIpAddressTypeInput() {
        return this._trafficIpAddressType;
    }

    // transit_gateway_configuration - computed: true, optional: true, required: false
    private _transitGatewayConfiguration = new CcClientVpnEndpoint.TransitGatewayConfigurationPropertyOutputReference(this, "transit_gateway_configuration");
    public get transitGatewayConfiguration() {
        return this._transitGatewayConfiguration;
    }
    public putTransitGatewayConfiguration(value: CcClientVpnEndpoint.TransitGatewayConfigurationProperty) {
        this._transitGatewayConfiguration.internalValue = value;
    }
    public resetTransitGatewayConfiguration() {
        this._transitGatewayConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayConfigurationInput() {
        return this._transitGatewayConfiguration.internalValue;
    }

    // transport_protocol - computed: true, optional: true, required: false
    private _transportProtocol?: string; 
    public get transportProtocol() {
        return this.getStringAttribute('transport_protocol');
    }
    public set transportProtocol(value: string) {
        this._transportProtocol = value;
    }
    public resetTransportProtocol() {
        this._transportProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transportProtocolInput() {
        return this._transportProtocol;
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

    // vpn_port - computed: true, optional: true, required: false
    private _vpnPort?: number; 
    public get vpnPort() {
        return this.getNumberAttribute('vpn_port');
    }
    public set vpnPort(value: number) {
        this._vpnPort = value;
    }
    public resetVpnPort() {
        this._vpnPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnPortInput() {
        return this._vpnPort;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            authentication_options: cdktn.listMapper(ccClientVpnEndpointClientAuthenticationRequestPropertyToTerraform, false)(this._authenticationOptions.internalValue),
            authorization_policy: ccClientVpnEndpointAuthorizationPolicyPropertyToTerraform(this._authorizationPolicy.internalValue),
            client_cidr_block: cdktn.stringToTerraform(this._clientCidrBlock),
            client_connect_options: ccClientVpnEndpointClientConnectOptionsPropertyToTerraform(this._clientConnectOptions.internalValue),
            client_login_banner_options: ccClientVpnEndpointClientLoginBannerOptionsPropertyToTerraform(this._clientLoginBannerOptions.internalValue),
            client_route_enforcement_options: ccClientVpnEndpointClientRouteEnforcementOptionsPropertyToTerraform(this._clientRouteEnforcementOptions.internalValue),
            connection_log_options: ccClientVpnEndpointConnectionLogOptionsPropertyToTerraform(this._connectionLogOptions.internalValue),
            description: cdktn.stringToTerraform(this._description),
            device_posture_options: ccClientVpnEndpointDevicePostureOptionsPropertyToTerraform(this._devicePostureOptions.internalValue),
            disconnect_on_session_timeout: cdktn.booleanToTerraform(this._disconnectOnSessionTimeout),
            dns_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dnsServers),
            endpoint_ip_address_type: cdktn.stringToTerraform(this._endpointIpAddressType),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            self_service_portal: cdktn.stringToTerraform(this._selfServicePortal),
            server_certificate_arn: cdktn.stringToTerraform(this._serverCertificateArn),
            session_timeout_hours: cdktn.numberToTerraform(this._sessionTimeoutHours),
            split_tunnel: cdktn.booleanToTerraform(this._splitTunnel),
            tag_specifications: cdktn.listMapper(ccClientVpnEndpointTagSpecificationPropertyToTerraform, false)(this._tagSpecifications.internalValue),
            traffic_ip_address_type: cdktn.stringToTerraform(this._trafficIpAddressType),
            transit_gateway_configuration: ccClientVpnEndpointTransitGatewayConfigurationPropertyToTerraform(this._transitGatewayConfiguration.internalValue),
            transport_protocol: cdktn.stringToTerraform(this._transportProtocol),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
            vpn_port: cdktn.numberToTerraform(this._vpnPort),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            authentication_options: {
                value: cdktn.listMapperHcl(ccClientVpnEndpointClientAuthenticationRequestPropertyToHclTerraform, false)(this._authenticationOptions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcClientVpnEndpoint.ClientAuthenticationRequestPropertyList",
            },
            authorization_policy: {
                value: ccClientVpnEndpointAuthorizationPolicyPropertyToHclTerraform(this._authorizationPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcClientVpnEndpoint.AuthorizationPolicyProperty",
            },
            client_cidr_block: {
                value: cdktn.stringToHclTerraform(this._clientCidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            client_connect_options: {
                value: ccClientVpnEndpointClientConnectOptionsPropertyToHclTerraform(this._clientConnectOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcClientVpnEndpoint.ClientConnectOptionsProperty",
            },
            client_login_banner_options: {
                value: ccClientVpnEndpointClientLoginBannerOptionsPropertyToHclTerraform(this._clientLoginBannerOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcClientVpnEndpoint.ClientLoginBannerOptionsProperty",
            },
            client_route_enforcement_options: {
                value: ccClientVpnEndpointClientRouteEnforcementOptionsPropertyToHclTerraform(this._clientRouteEnforcementOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcClientVpnEndpoint.ClientRouteEnforcementOptionsProperty",
            },
            connection_log_options: {
                value: ccClientVpnEndpointConnectionLogOptionsPropertyToHclTerraform(this._connectionLogOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcClientVpnEndpoint.ConnectionLogOptionsProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            device_posture_options: {
                value: ccClientVpnEndpointDevicePostureOptionsPropertyToHclTerraform(this._devicePostureOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcClientVpnEndpoint.DevicePostureOptionsProperty",
            },
            disconnect_on_session_timeout: {
                value: cdktn.booleanToHclTerraform(this._disconnectOnSessionTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dns_servers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dnsServers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            endpoint_ip_address_type: {
                value: cdktn.stringToHclTerraform(this._endpointIpAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            self_service_portal: {
                value: cdktn.stringToHclTerraform(this._selfServicePortal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_certificate_arn: {
                value: cdktn.stringToHclTerraform(this._serverCertificateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            session_timeout_hours: {
                value: cdktn.numberToHclTerraform(this._sessionTimeoutHours),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            split_tunnel: {
                value: cdktn.booleanToHclTerraform(this._splitTunnel),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tag_specifications: {
                value: cdktn.listMapperHcl(ccClientVpnEndpointTagSpecificationPropertyToHclTerraform, false)(this._tagSpecifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcClientVpnEndpoint.TagSpecificationPropertyList",
            },
            traffic_ip_address_type: {
                value: cdktn.stringToHclTerraform(this._trafficIpAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            transit_gateway_configuration: {
                value: ccClientVpnEndpointTransitGatewayConfigurationPropertyToHclTerraform(this._transitGatewayConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcClientVpnEndpoint.TransitGatewayConfigurationProperty",
            },
            transport_protocol: {
                value: cdktn.stringToHclTerraform(this._transportProtocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_id: {
                value: cdktn.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpn_port: {
                value: cdktn.numberToHclTerraform(this._vpnPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccClientVpnEndpointDirectoryServiceAuthenticationRequestPropertyToTerraform(struct?: CcClientVpnEndpoint.DirectoryServiceAuthenticationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        directory_id: cdktn.stringToTerraform(struct!.directoryId),
    }
}


export function ccClientVpnEndpointDirectoryServiceAuthenticationRequestPropertyToHclTerraform(struct?: CcClientVpnEndpoint.DirectoryServiceAuthenticationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        directory_id: {
            value: cdktn.stringToHclTerraform(struct!.directoryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClientVpnEndpointFederatedAuthenticationRequestPropertyToTerraform(struct?: CcClientVpnEndpoint.FederatedAuthenticationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        saml_provider_arn: cdktn.stringToTerraform(struct!.samlProviderArn),
        self_service_saml_provider_arn: cdktn.stringToTerraform(struct!.selfServiceSamlProviderArn),
    }
}


export function ccClientVpnEndpointFederatedAuthenticationRequestPropertyToHclTerraform(struct?: CcClientVpnEndpoint.FederatedAuthenticationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        saml_provider_arn: {
            value: cdktn.stringToHclTerraform(struct!.samlProviderArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        self_service_saml_provider_arn: {
            value: cdktn.stringToHclTerraform(struct!.selfServiceSamlProviderArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClientVpnEndpointCertificateAuthenticationRequestPropertyToTerraform(struct?: CcClientVpnEndpoint.CertificateAuthenticationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_root_certificate_chain_arn: cdktn.stringToTerraform(struct!.clientRootCertificateChainArn),
    }
}


export function ccClientVpnEndpointCertificateAuthenticationRequestPropertyToHclTerraform(struct?: CcClientVpnEndpoint.CertificateAuthenticationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_root_certificate_chain_arn: {
            value: cdktn.stringToHclTerraform(struct!.clientRootCertificateChainArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClientVpnEndpointClientAuthenticationRequestPropertyToTerraform(struct?: CcClientVpnEndpoint.ClientAuthenticationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        active_directory: ccClientVpnEndpointDirectoryServiceAuthenticationRequestPropertyToTerraform(struct!.activeDirectory),
        federated_authentication: ccClientVpnEndpointFederatedAuthenticationRequestPropertyToTerraform(struct!.federatedAuthentication),
        mutual_authentication: ccClientVpnEndpointCertificateAuthenticationRequestPropertyToTerraform(struct!.mutualAuthentication),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccClientVpnEndpointClientAuthenticationRequestPropertyToHclTerraform(struct?: CcClientVpnEndpoint.ClientAuthenticationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        active_directory: {
            value: ccClientVpnEndpointDirectoryServiceAuthenticationRequestPropertyToHclTerraform(struct!.activeDirectory),
            isBlock: true,
            type: "struct",
            storageClassType: "DirectoryServiceAuthenticationRequestProperty",
        },
        federated_authentication: {
            value: ccClientVpnEndpointFederatedAuthenticationRequestPropertyToHclTerraform(struct!.federatedAuthentication),
            isBlock: true,
            type: "struct",
            storageClassType: "FederatedAuthenticationRequestProperty",
        },
        mutual_authentication: {
            value: ccClientVpnEndpointCertificateAuthenticationRequestPropertyToHclTerraform(struct!.mutualAuthentication),
            isBlock: true,
            type: "struct",
            storageClassType: "CertificateAuthenticationRequestProperty",
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


export function ccClientVpnEndpointAuthorizationPolicyPropertyToTerraform(struct?: CcClientVpnEndpoint.AuthorizationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        policy_document: cdktn.stringToTerraform(struct!.policyDocument),
        shadow_mode: cdktn.stringToTerraform(struct!.shadowMode),
    }
}


export function ccClientVpnEndpointAuthorizationPolicyPropertyToHclTerraform(struct?: CcClientVpnEndpoint.AuthorizationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_document: {
            value: cdktn.stringToHclTerraform(struct!.policyDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shadow_mode: {
            value: cdktn.stringToHclTerraform(struct!.shadowMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClientVpnEndpointClientConnectOptionsPropertyToTerraform(struct?: CcClientVpnEndpoint.ClientConnectOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        lambda_function_arn: cdktn.stringToTerraform(struct!.lambdaFunctionArn),
    }
}


export function ccClientVpnEndpointClientConnectOptionsPropertyToHclTerraform(struct?: CcClientVpnEndpoint.ClientConnectOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        lambda_function_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaFunctionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClientVpnEndpointClientLoginBannerOptionsPropertyToTerraform(struct?: CcClientVpnEndpoint.ClientLoginBannerOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        banner_text: cdktn.stringToTerraform(struct!.bannerText),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClientVpnEndpointClientLoginBannerOptionsPropertyToHclTerraform(struct?: CcClientVpnEndpoint.ClientLoginBannerOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        banner_text: {
            value: cdktn.stringToHclTerraform(struct!.bannerText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClientVpnEndpointClientRouteEnforcementOptionsPropertyToTerraform(struct?: CcClientVpnEndpoint.ClientRouteEnforcementOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enforced: cdktn.booleanToTerraform(struct!.enforced),
    }
}


export function ccClientVpnEndpointClientRouteEnforcementOptionsPropertyToHclTerraform(struct?: CcClientVpnEndpoint.ClientRouteEnforcementOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enforced: {
            value: cdktn.booleanToHclTerraform(struct!.enforced),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClientVpnEndpointConnectionLogOptionsPropertyToTerraform(struct?: CcClientVpnEndpoint.ConnectionLogOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_log_group: cdktn.stringToTerraform(struct!.cloudwatchLogGroup),
        cloudwatch_log_stream: cdktn.stringToTerraform(struct!.cloudwatchLogStream),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        include_authorization_policy_context: cdktn.booleanToTerraform(struct!.includeAuthorizationPolicyContext),
    }
}


export function ccClientVpnEndpointConnectionLogOptionsPropertyToHclTerraform(struct?: CcClientVpnEndpoint.ConnectionLogOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_log_group: {
            value: cdktn.stringToHclTerraform(struct!.cloudwatchLogGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudwatch_log_stream: {
            value: cdktn.stringToHclTerraform(struct!.cloudwatchLogStream),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_authorization_policy_context: {
            value: cdktn.booleanToHclTerraform(struct!.includeAuthorizationPolicyContext),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClientVpnEndpointTrustProvidersPropertyToTerraform(struct?: CcClientVpnEndpoint.TrustProvidersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        public_signing_key_url: cdktn.stringToTerraform(struct!.publicSigningKeyUrl),
        tenant_id: cdktn.stringToTerraform(struct!.tenantId),
        trust_provider_type: cdktn.stringToTerraform(struct!.trustProviderType),
    }
}


export function ccClientVpnEndpointTrustProvidersPropertyToHclTerraform(struct?: CcClientVpnEndpoint.TrustProvidersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        public_signing_key_url: {
            value: cdktn.stringToHclTerraform(struct!.publicSigningKeyUrl),
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
        trust_provider_type: {
            value: cdktn.stringToHclTerraform(struct!.trustProviderType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClientVpnEndpointDevicePostureOptionsPropertyToTerraform(struct?: CcClientVpnEndpoint.DevicePostureOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        trust_providers: cdktn.listMapper(ccClientVpnEndpointTrustProvidersPropertyToTerraform, false)(struct!.trustProviders),
    }
}


export function ccClientVpnEndpointDevicePostureOptionsPropertyToHclTerraform(struct?: CcClientVpnEndpoint.DevicePostureOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        trust_providers: {
            value: cdktn.listMapperHcl(ccClientVpnEndpointTrustProvidersPropertyToHclTerraform, false)(struct!.trustProviders),
            isBlock: true,
            type: "list",
            storageClassType: "TrustProvidersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClientVpnEndpointTagPropertyToTerraform(struct?: CcClientVpnEndpoint.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccClientVpnEndpointTagPropertyToHclTerraform(struct?: CcClientVpnEndpoint.TagProperty | cdktn.IResolvable): any {
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


export function ccClientVpnEndpointTagSpecificationPropertyToTerraform(struct?: CcClientVpnEndpoint.TagSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        tags: cdktn.listMapper(ccClientVpnEndpointTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccClientVpnEndpointTagSpecificationPropertyToHclTerraform(struct?: CcClientVpnEndpoint.TagSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(ccClientVpnEndpointTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClientVpnEndpointTransitGatewayConfigurationPropertyToTerraform(struct?: CcClientVpnEndpoint.TransitGatewayConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.availabilityZoneIds),
        availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.availabilityZones),
        transit_gateway_id: cdktn.stringToTerraform(struct!.transitGatewayId),
    }
}


export function ccClientVpnEndpointTransitGatewayConfigurationPropertyToHclTerraform(struct?: CcClientVpnEndpoint.TransitGatewayConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.availabilityZoneIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        availability_zones: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.availabilityZones),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        transit_gateway_id: {
            value: cdktn.stringToHclTerraform(struct!.transitGatewayId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcClientVpnEndpoint {
export interface DirectoryServiceAuthenticationRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#directory_id CcClientVpnEndpoint#directory_id}
    */
    readonly directoryId?: string;
}
export class DirectoryServiceAuthenticationRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DirectoryServiceAuthenticationRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._directoryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.directoryId = this._directoryId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DirectoryServiceAuthenticationRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._directoryId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._directoryId = value.directoryId;
        }
    }

    // directory_id - computed: true, optional: true, required: false
    private _directoryId?: string; 
    public get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string) {
        this._directoryId = value;
    }
    public resetDirectoryId() {
        this._directoryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
        return this._directoryId;
    }
}
export interface FederatedAuthenticationRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#saml_provider_arn CcClientVpnEndpoint#saml_provider_arn}
    */
    readonly samlProviderArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_saml_provider_arn CcClientVpnEndpoint#self_service_saml_provider_arn}
    */
    readonly selfServiceSamlProviderArn?: string;
}
export class FederatedAuthenticationRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FederatedAuthenticationRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._samlProviderArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.samlProviderArn = this._samlProviderArn;
        }
        if (this._selfServiceSamlProviderArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfServiceSamlProviderArn = this._selfServiceSamlProviderArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FederatedAuthenticationRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._samlProviderArn = undefined;
            this._selfServiceSamlProviderArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._samlProviderArn = value.samlProviderArn;
            this._selfServiceSamlProviderArn = value.selfServiceSamlProviderArn;
        }
    }

    // saml_provider_arn - computed: true, optional: true, required: false
    private _samlProviderArn?: string; 
    public get samlProviderArn() {
        return this.getStringAttribute('saml_provider_arn');
    }
    public set samlProviderArn(value: string) {
        this._samlProviderArn = value;
    }
    public resetSamlProviderArn() {
        this._samlProviderArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samlProviderArnInput() {
        return this._samlProviderArn;
    }

    // self_service_saml_provider_arn - computed: true, optional: true, required: false
    private _selfServiceSamlProviderArn?: string; 
    public get selfServiceSamlProviderArn() {
        return this.getStringAttribute('self_service_saml_provider_arn');
    }
    public set selfServiceSamlProviderArn(value: string) {
        this._selfServiceSamlProviderArn = value;
    }
    public resetSelfServiceSamlProviderArn() {
        this._selfServiceSamlProviderArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfServiceSamlProviderArnInput() {
        return this._selfServiceSamlProviderArn;
    }
}
export interface CertificateAuthenticationRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_root_certificate_chain_arn CcClientVpnEndpoint#client_root_certificate_chain_arn}
    */
    readonly clientRootCertificateChainArn?: string;
}
export class CertificateAuthenticationRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CertificateAuthenticationRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientRootCertificateChainArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientRootCertificateChainArn = this._clientRootCertificateChainArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CertificateAuthenticationRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientRootCertificateChainArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientRootCertificateChainArn = value.clientRootCertificateChainArn;
        }
    }

    // client_root_certificate_chain_arn - computed: true, optional: true, required: false
    private _clientRootCertificateChainArn?: string; 
    public get clientRootCertificateChainArn() {
        return this.getStringAttribute('client_root_certificate_chain_arn');
    }
    public set clientRootCertificateChainArn(value: string) {
        this._clientRootCertificateChainArn = value;
    }
    public resetClientRootCertificateChainArn() {
        this._clientRootCertificateChainArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientRootCertificateChainArnInput() {
        return this._clientRootCertificateChainArn;
    }
}
export interface ClientAuthenticationRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#active_directory CcClientVpnEndpoint#active_directory}
    */
    readonly activeDirectory?: DirectoryServiceAuthenticationRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#federated_authentication CcClientVpnEndpoint#federated_authentication}
    */
    readonly federatedAuthentication?: FederatedAuthenticationRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#mutual_authentication CcClientVpnEndpoint#mutual_authentication}
    */
    readonly mutualAuthentication?: CertificateAuthenticationRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#type CcClientVpnEndpoint#type}
    */
    readonly type: string;
}
export class ClientAuthenticationRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ClientAuthenticationRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._activeDirectory?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.activeDirectory = this._activeDirectory?.internalValue;
        }
        if (this._federatedAuthentication?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.federatedAuthentication = this._federatedAuthentication?.internalValue;
        }
        if (this._mutualAuthentication?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mutualAuthentication = this._mutualAuthentication?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientAuthenticationRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._activeDirectory.internalValue = undefined;
            this._federatedAuthentication.internalValue = undefined;
            this._mutualAuthentication.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._activeDirectory.internalValue = value.activeDirectory;
            this._federatedAuthentication.internalValue = value.federatedAuthentication;
            this._mutualAuthentication.internalValue = value.mutualAuthentication;
            this._type = value.type;
        }
    }

    // active_directory - computed: true, optional: true, required: false
    private _activeDirectory = new DirectoryServiceAuthenticationRequestPropertyOutputReference(this, "active_directory");
    public get activeDirectory() {
        return this._activeDirectory;
    }
    public putActiveDirectory(value: DirectoryServiceAuthenticationRequestProperty) {
        this._activeDirectory.internalValue = value;
    }
    public resetActiveDirectory() {
        this._activeDirectory.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeDirectoryInput() {
        return this._activeDirectory.internalValue;
    }

    // federated_authentication - computed: true, optional: true, required: false
    private _federatedAuthentication = new FederatedAuthenticationRequestPropertyOutputReference(this, "federated_authentication");
    public get federatedAuthentication() {
        return this._federatedAuthentication;
    }
    public putFederatedAuthentication(value: FederatedAuthenticationRequestProperty) {
        this._federatedAuthentication.internalValue = value;
    }
    public resetFederatedAuthentication() {
        this._federatedAuthentication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get federatedAuthenticationInput() {
        return this._federatedAuthentication.internalValue;
    }

    // mutual_authentication - computed: true, optional: true, required: false
    private _mutualAuthentication = new CertificateAuthenticationRequestPropertyOutputReference(this, "mutual_authentication");
    public get mutualAuthentication() {
        return this._mutualAuthentication;
    }
    public putMutualAuthentication(value: CertificateAuthenticationRequestProperty) {
        this._mutualAuthentication.internalValue = value;
    }
    public resetMutualAuthentication() {
        this._mutualAuthentication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mutualAuthenticationInput() {
        return this._mutualAuthentication.internalValue;
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
}

export class ClientAuthenticationRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : ClientAuthenticationRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): ClientAuthenticationRequestPropertyOutputReference {
        return new ClientAuthenticationRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AuthorizationPolicyProperty {
    /**
    * A brief description of the authorization policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#description CcClientVpnEndpoint#description}
    */
    readonly description?: string;
    /**
    * The Cedar policy document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#policy_document CcClientVpnEndpoint#policy_document}
    */
    readonly policyDocument?: string;
    /**
    * Whether the authorization policy runs in shadow (observe-only) mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#shadow_mode CcClientVpnEndpoint#shadow_mode}
    */
    readonly shadowMode?: string;
}
export class AuthorizationPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._policyDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyDocument = this._policyDocument;
        }
        if (this._shadowMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.shadowMode = this._shadowMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._policyDocument = undefined;
            this._shadowMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._policyDocument = value.policyDocument;
            this._shadowMode = value.shadowMode;
        }
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

    // policy_document - computed: true, optional: true, required: false
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    public resetPolicyDocument() {
        this._policyDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }

    // shadow_mode - computed: true, optional: true, required: false
    private _shadowMode?: string; 
    public get shadowMode() {
        return this.getStringAttribute('shadow_mode');
    }
    public set shadowMode(value: string) {
        this._shadowMode = value;
    }
    public resetShadowMode() {
        this._shadowMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shadowModeInput() {
        return this._shadowMode;
    }
}
export interface ClientConnectOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled CcClientVpnEndpoint#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#lambda_function_arn CcClientVpnEndpoint#lambda_function_arn}
    */
    readonly lambdaFunctionArn?: string;
}
export class ClientConnectOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClientConnectOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._lambdaFunctionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientConnectOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._lambdaFunctionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._lambdaFunctionArn = value.lambdaFunctionArn;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // lambda_function_arn - computed: true, optional: true, required: false
    private _lambdaFunctionArn?: string; 
    public get lambdaFunctionArn() {
        return this.getStringAttribute('lambda_function_arn');
    }
    public set lambdaFunctionArn(value: string) {
        this._lambdaFunctionArn = value;
    }
    public resetLambdaFunctionArn() {
        this._lambdaFunctionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionArnInput() {
        return this._lambdaFunctionArn;
    }
}
export interface ClientLoginBannerOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#banner_text CcClientVpnEndpoint#banner_text}
    */
    readonly bannerText?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled CcClientVpnEndpoint#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class ClientLoginBannerOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClientLoginBannerOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bannerText !== undefined) {
            hasAnyValues = true;
            internalValueResult.bannerText = this._bannerText;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientLoginBannerOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bannerText = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bannerText = value.bannerText;
            this._enabled = value.enabled;
        }
    }

    // banner_text - computed: true, optional: true, required: false
    private _bannerText?: string; 
    public get bannerText() {
        return this.getStringAttribute('banner_text');
    }
    public set bannerText(value: string) {
        this._bannerText = value;
    }
    public resetBannerText() {
        this._bannerText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bannerTextInput() {
        return this._bannerText;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface ClientRouteEnforcementOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enforced CcClientVpnEndpoint#enforced}
    */
    readonly enforced?: boolean | cdktn.IResolvable;
}
export class ClientRouteEnforcementOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClientRouteEnforcementOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enforced !== undefined) {
            hasAnyValues = true;
            internalValueResult.enforced = this._enforced;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientRouteEnforcementOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enforced = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enforced = value.enforced;
        }
    }

    // enforced - computed: true, optional: true, required: false
    private _enforced?: boolean | cdktn.IResolvable; 
    public get enforced() {
        return this.getBooleanAttribute('enforced');
    }
    public set enforced(value: boolean | cdktn.IResolvable) {
        this._enforced = value;
    }
    public resetEnforced() {
        this._enforced = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforcedInput() {
        return this._enforced;
    }
}
export interface ConnectionLogOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_group CcClientVpnEndpoint#cloudwatch_log_group}
    */
    readonly cloudwatchLogGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_stream CcClientVpnEndpoint#cloudwatch_log_stream}
    */
    readonly cloudwatchLogStream?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled CcClientVpnEndpoint#enabled}
    */
    readonly enabled: boolean | cdktn.IResolvable;
    /**
    * Indicates whether authorization-policy evaluation context is included in the connection logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#include_authorization_policy_context CcClientVpnEndpoint#include_authorization_policy_context}
    */
    readonly includeAuthorizationPolicyContext?: boolean | cdktn.IResolvable;
}
export class ConnectionLogOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionLogOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogGroup = this._cloudwatchLogGroup;
        }
        if (this._cloudwatchLogStream !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogStream = this._cloudwatchLogStream;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._includeAuthorizationPolicyContext !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeAuthorizationPolicyContext = this._includeAuthorizationPolicyContext;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionLogOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogGroup = undefined;
            this._cloudwatchLogStream = undefined;
            this._enabled = undefined;
            this._includeAuthorizationPolicyContext = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogGroup = value.cloudwatchLogGroup;
            this._cloudwatchLogStream = value.cloudwatchLogStream;
            this._enabled = value.enabled;
            this._includeAuthorizationPolicyContext = value.includeAuthorizationPolicyContext;
        }
    }

    // cloudwatch_log_group - computed: true, optional: true, required: false
    private _cloudwatchLogGroup?: string; 
    public get cloudwatchLogGroup() {
        return this.getStringAttribute('cloudwatch_log_group');
    }
    public set cloudwatchLogGroup(value: string) {
        this._cloudwatchLogGroup = value;
    }
    public resetCloudwatchLogGroup() {
        this._cloudwatchLogGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogGroupInput() {
        return this._cloudwatchLogGroup;
    }

    // cloudwatch_log_stream - computed: true, optional: true, required: false
    private _cloudwatchLogStream?: string; 
    public get cloudwatchLogStream() {
        return this.getStringAttribute('cloudwatch_log_stream');
    }
    public set cloudwatchLogStream(value: string) {
        this._cloudwatchLogStream = value;
    }
    public resetCloudwatchLogStream() {
        this._cloudwatchLogStream = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogStreamInput() {
        return this._cloudwatchLogStream;
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // include_authorization_policy_context - computed: true, optional: true, required: false
    private _includeAuthorizationPolicyContext?: boolean | cdktn.IResolvable; 
    public get includeAuthorizationPolicyContext() {
        return this.getBooleanAttribute('include_authorization_policy_context');
    }
    public set includeAuthorizationPolicyContext(value: boolean | cdktn.IResolvable) {
        this._includeAuthorizationPolicyContext = value;
    }
    public resetIncludeAuthorizationPolicyContext() {
        this._includeAuthorizationPolicyContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeAuthorizationPolicyContextInput() {
        return this._includeAuthorizationPolicyContext;
    }
}
export interface TrustProvidersProperty {
    /**
    * The URL of the public signing key. Conditionally required by the provider type and enforced server-side (crowdstrike/jumpcloud require it, jamf rejects it).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#public_signing_key_url CcClientVpnEndpoint#public_signing_key_url}
    */
    readonly publicSigningKeyUrl?: string;
    /**
    * The tenant identifier registered with the trust provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tenant_id CcClientVpnEndpoint#tenant_id}
    */
    readonly tenantId?: string;
    /**
    * The device-posture trust provider type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#trust_provider_type CcClientVpnEndpoint#trust_provider_type}
    */
    readonly trustProviderType?: string;
}
export class TrustProvidersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TrustProvidersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._publicSigningKeyUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.publicSigningKeyUrl = this._publicSigningKeyUrl;
        }
        if (this._tenantId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenantId = this._tenantId;
        }
        if (this._trustProviderType !== undefined) {
            hasAnyValues = true;
            internalValueResult.trustProviderType = this._trustProviderType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrustProvidersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._publicSigningKeyUrl = undefined;
            this._tenantId = undefined;
            this._trustProviderType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._publicSigningKeyUrl = value.publicSigningKeyUrl;
            this._tenantId = value.tenantId;
            this._trustProviderType = value.trustProviderType;
        }
    }

    // public_signing_key_url - computed: true, optional: true, required: false
    private _publicSigningKeyUrl?: string; 
    public get publicSigningKeyUrl() {
        return this.getStringAttribute('public_signing_key_url');
    }
    public set publicSigningKeyUrl(value: string) {
        this._publicSigningKeyUrl = value;
    }
    public resetPublicSigningKeyUrl() {
        this._publicSigningKeyUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicSigningKeyUrlInput() {
        return this._publicSigningKeyUrl;
    }

    // tenant_id - computed: true, optional: true, required: false
    private _tenantId?: string; 
    public get tenantId() {
        return this.getStringAttribute('tenant_id');
    }
    public set tenantId(value: string) {
        this._tenantId = value;
    }
    public resetTenantId() {
        this._tenantId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantIdInput() {
        return this._tenantId;
    }

    // trust_provider_type - computed: true, optional: true, required: false
    private _trustProviderType?: string; 
    public get trustProviderType() {
        return this.getStringAttribute('trust_provider_type');
    }
    public set trustProviderType(value: string) {
        this._trustProviderType = value;
    }
    public resetTrustProviderType() {
        this._trustProviderType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustProviderTypeInput() {
        return this._trustProviderType;
    }
}

export class TrustProvidersPropertyList extends cdktn.ComplexList {
    public internalValue? : TrustProvidersProperty[] | cdktn.IResolvable

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
    public get(index: number): TrustProvidersPropertyOutputReference {
        return new TrustProvidersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DevicePostureOptionsProperty {
    /**
    * Whether device posture is enabled for the Client VPN endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled CcClientVpnEndpoint#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The device-posture trust providers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#trust_providers CcClientVpnEndpoint#trust_providers}
    */
    readonly trustProviders?: TrustProvidersProperty[] | cdktn.IResolvable;
}
export class DevicePostureOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DevicePostureOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._trustProviders?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trustProviders = this._trustProviders?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DevicePostureOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._trustProviders.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._trustProviders.internalValue = value.trustProviders;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // trust_providers - computed: true, optional: true, required: false
    private _trustProviders = new TrustProvidersPropertyList(this, "trust_providers", false);
    public get trustProviders() {
        return this._trustProviders;
    }
    public putTrustProviders(value: TrustProvidersProperty[] | cdktn.IResolvable) {
        this._trustProviders.internalValue = value;
    }
    public resetTrustProviders() {
        this._trustProviders.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustProvidersInput() {
        return this._trustProviders.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#key CcClientVpnEndpoint#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#value CcClientVpnEndpoint#value}
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
export interface TagSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#resource_type CcClientVpnEndpoint#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tags CcClientVpnEndpoint#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
}
export class TagSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceType = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceType = value.resourceType;
            this._tags.internalValue = value.tags;
        }
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    public resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}

export class TagSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : TagSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): TagSpecificationPropertyOutputReference {
        return new TagSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TransitGatewayConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zone_ids CcClientVpnEndpoint#availability_zone_ids}
    */
    readonly availabilityZoneIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zones CcClientVpnEndpoint#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_id CcClientVpnEndpoint#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
}
export class TransitGatewayConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransitGatewayConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZoneIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZoneIds = this._availabilityZoneIds;
        }
        if (this._availabilityZones !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZones = this._availabilityZones;
        }
        if (this._transitGatewayId !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitGatewayId = this._transitGatewayId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransitGatewayConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZoneIds = undefined;
            this._availabilityZones = undefined;
            this._transitGatewayId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZoneIds = value.availabilityZoneIds;
            this._availabilityZones = value.availabilityZones;
            this._transitGatewayId = value.transitGatewayId;
        }
    }

    // availability_zone_ids - computed: true, optional: true, required: false
    private _availabilityZoneIds?: string[]; 
    public get availabilityZoneIds() {
        return this.getListAttribute('availability_zone_ids');
    }
    public set availabilityZoneIds(value: string[]) {
        this._availabilityZoneIds = value;
    }
    public resetAvailabilityZoneIds() {
        this._availabilityZoneIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneIdsInput() {
        return this._availabilityZoneIds;
    }

    // availability_zones - computed: true, optional: true, required: false
    private _availabilityZones?: string[]; 
    public get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    public set availabilityZones(value: string[]) {
        this._availabilityZones = value;
    }
    public resetAvailabilityZones() {
        this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZonesInput() {
        return this._availabilityZones;
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
}
}
