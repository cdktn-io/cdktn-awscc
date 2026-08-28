// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSecurityGroupEgressProps extends cdktn.TerraformMetaArguments {
    /**
    * The IPv4 address range, in CIDR format.
    *  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``.
    *  For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress#cidr_ip CcSecurityGroupEgress#cidr_ip}
    */
    readonly cidrIp?: string;
    /**
    * The IPv6 address range, in CIDR format.
    *  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``.
    *  For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress#cidr_ipv_6 CcSecurityGroupEgress#cidr_ipv_6}
    */
    readonly cidrIpv6?: string;
    /**
    * The description of an egress (outbound) security group rule.
    *  Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;{}!$*
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress#description CcSecurityGroupEgress#description}
    */
    readonly description?: string;
    /**
    * The prefix list IDs for an AWS service. This is the AWS service to access through a VPC endpoint from instances associated with the security group.
    *  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress#destination_prefix_list_id CcSecurityGroupEgress#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * The ID of the security group.
    *  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress#destination_security_group_id CcSecurityGroupEgress#destination_security_group_id}
    */
    readonly destinationSecurityGroupId?: string;
    /**
    * If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress#from_port CcSecurityGroupEgress#from_port}
    */
    readonly fromPort?: number;
    /**
    * The ID of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress#group_id CcSecurityGroupEgress#group_id}
    */
    readonly groupId: string;
    /**
    * The IP protocol name (``tcp``, ``udp``, ``icmp``, ``icmpv6``) or number (see [Protocol Numbers](https://docs.aws.amazon.com/http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).
    *  Use ``-1`` to specify all protocols. When authorizing security group rules, specifying ``-1`` or a protocol number other than ``tcp``, ``udp``, ``icmp``, or ``icmpv6`` allows traffic on all ports, regardless of any port range you specify. For ``tcp``, ``udp``, and ``icmp``, you must specify a port range. For ``icmpv6``, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress#ip_protocol CcSecurityGroupEgress#ip_protocol}
    */
    readonly ipProtocol: string;
    /**
    * If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress#to_port CcSecurityGroupEgress#to_port}
    */
    readonly toPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress awscc_ec2_security_group_egress}
*/
export class CcSecurityGroupEgress extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_security_group_egress";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSecurityGroupEgress resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSecurityGroupEgress to import
    * @param importFromId The id of the existing CcSecurityGroupEgress that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSecurityGroupEgress to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_security_group_egress", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group_egress awscc_ec2_security_group_egress} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSecurityGroupEgressProps
    */
    public constructor(scope: Construct, id: string, config: CcSecurityGroupEgressProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_security_group_egress',
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
        this._cidrIp = config.cidrIp;
        this._cidrIpv6 = config.cidrIpv6;
        this._description = config.description;
        this._destinationPrefixListId = config.destinationPrefixListId;
        this._destinationSecurityGroupId = config.destinationSecurityGroupId;
        this._fromPort = config.fromPort;
        this._groupId = config.groupId;
        this._ipProtocol = config.ipProtocol;
        this._toPort = config.toPort;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cidr_ip - computed: true, optional: true, required: false
    private _cidrIp?: string; 
    public get cidrIp() {
        return this.getStringAttribute('cidr_ip');
    }
    public set cidrIp(value: string) {
        this._cidrIp = value;
    }
    public resetCidrIp() {
        this._cidrIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrIpInput() {
        return this._cidrIp;
    }

    // cidr_ipv_6 - computed: true, optional: true, required: false
    private _cidrIpv6?: string; 
    public get cidrIpv6() {
        return this.getStringAttribute('cidr_ipv_6');
    }
    public set cidrIpv6(value: string) {
        this._cidrIpv6 = value;
    }
    public resetCidrIpv6() {
        this._cidrIpv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrIpv6Input() {
        return this._cidrIpv6;
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

    // destination_prefix_list_id - computed: true, optional: true, required: false
    private _destinationPrefixListId?: string; 
    public get destinationPrefixListId() {
        return this.getStringAttribute('destination_prefix_list_id');
    }
    public set destinationPrefixListId(value: string) {
        this._destinationPrefixListId = value;
    }
    public resetDestinationPrefixListId() {
        this._destinationPrefixListId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPrefixListIdInput() {
        return this._destinationPrefixListId;
    }

    // destination_security_group_id - computed: true, optional: true, required: false
    private _destinationSecurityGroupId?: string; 
    public get destinationSecurityGroupId() {
        return this.getStringAttribute('destination_security_group_id');
    }
    public set destinationSecurityGroupId(value: string) {
        this._destinationSecurityGroupId = value;
    }
    public resetDestinationSecurityGroupId() {
        this._destinationSecurityGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationSecurityGroupIdInput() {
        return this._destinationSecurityGroupId;
    }

    // from_port - computed: true, optional: true, required: false
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    public resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // group_id - computed: false, optional: false, required: true
    private _groupId?: string; 
    public get groupId() {
        return this.getStringAttribute('group_id');
    }
    public set groupId(value: string) {
        this._groupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIdInput() {
        return this._groupId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_protocol - computed: false, optional: false, required: true
    private _ipProtocol?: string; 
    public get ipProtocol() {
        return this.getStringAttribute('ip_protocol');
    }
    public set ipProtocol(value: string) {
        this._ipProtocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipProtocolInput() {
        return this._ipProtocol;
    }

    // security_group_egress_id - computed: true, optional: false, required: false
    public get securityGroupEgressId() {
        return this.getStringAttribute('security_group_egress_id');
    }

    // to_port - computed: true, optional: true, required: false
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    public resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cidr_ip: cdktn.stringToTerraform(this._cidrIp),
            cidr_ipv_6: cdktn.stringToTerraform(this._cidrIpv6),
            description: cdktn.stringToTerraform(this._description),
            destination_prefix_list_id: cdktn.stringToTerraform(this._destinationPrefixListId),
            destination_security_group_id: cdktn.stringToTerraform(this._destinationSecurityGroupId),
            from_port: cdktn.numberToTerraform(this._fromPort),
            group_id: cdktn.stringToTerraform(this._groupId),
            ip_protocol: cdktn.stringToTerraform(this._ipProtocol),
            to_port: cdktn.numberToTerraform(this._toPort),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cidr_ip: {
                value: cdktn.stringToHclTerraform(this._cidrIp),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cidr_ipv_6: {
                value: cdktn.stringToHclTerraform(this._cidrIpv6),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_prefix_list_id: {
                value: cdktn.stringToHclTerraform(this._destinationPrefixListId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_security_group_id: {
                value: cdktn.stringToHclTerraform(this._destinationSecurityGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            from_port: {
                value: cdktn.numberToHclTerraform(this._fromPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            group_id: {
                value: cdktn.stringToHclTerraform(this._groupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_protocol: {
                value: cdktn.stringToHclTerraform(this._ipProtocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            to_port: {
                value: cdktn.numberToHclTerraform(this._toPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSecurityGroupEgress {
}
