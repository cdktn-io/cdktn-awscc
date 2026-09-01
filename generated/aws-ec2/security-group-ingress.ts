// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSecurityGroupIngressProps extends cdktn.TerraformMetaArguments {
    /**
    * The IPv4 ranges
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#cidr_ip CcSecurityGroupIngress#cidr_ip}
    */
    readonly cidrIp?: string;
    /**
    * [VPC only] The IPv6 ranges
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#cidr_ipv_6 CcSecurityGroupIngress#cidr_ipv_6}
    */
    readonly cidrIpv6?: string;
    /**
    * Updates the description of an ingress (inbound) security group rule. You can replace an existing description, or add a description to a rule that did not have one previously
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#description CcSecurityGroupIngress#description}
    */
    readonly description?: string;
    /**
    * The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.
    * 
    * Use this for ICMP and any protocol that uses ports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#from_port CcSecurityGroupIngress#from_port}
    */
    readonly fromPort?: number;
    /**
    * The ID of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.
    * 
    * You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#group_id CcSecurityGroupIngress#group_id}
    */
    readonly groupId?: string;
    /**
    * The name of the security group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#group_name CcSecurityGroupIngress#group_name}
    */
    readonly groupName?: string;
    /**
    * The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers).
    * 
    * [VPC only] Use -1 to specify all protocols. When authorizing security group rules, specifying -1 or a protocol number other than tcp, udp, icmp, or icmpv6 allows traffic on all ports, regardless of any port range you specify. For tcp, udp, and icmp, you must specify a port range. For icmpv6, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#ip_protocol CcSecurityGroupIngress#ip_protocol}
    */
    readonly ipProtocol: string;
    /**
    * [EC2-VPC only] The ID of a prefix list.
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#source_prefix_list_id CcSecurityGroupIngress#source_prefix_list_id}
    */
    readonly sourcePrefixListId?: string;
    /**
    * The ID of the security group. You must specify either the security group ID or the security group name. For security groups in a nondefault VPC, you must specify the security group ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#source_security_group_id CcSecurityGroupIngress#source_security_group_id}
    */
    readonly sourceSecurityGroupId?: string;
    /**
    * [EC2-Classic, default VPC] The name of the source security group.
    * 
    * You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#source_security_group_name CcSecurityGroupIngress#source_security_group_name}
    */
    readonly sourceSecurityGroupName?: string;
    /**
    * [nondefault VPC] The AWS account ID that owns the source security group. You can't specify this property with an IP address range.
    * 
    * If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#source_security_group_owner_id CcSecurityGroupIngress#source_security_group_owner_id}
    */
    readonly sourceSecurityGroupOwnerId?: string;
    /**
    * The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of -1 indicates all ICMP/ICMPv6 codes for the specified ICMP type. If you specify all ICMP/ICMPv6 types, you must specify all codes.
    * 
    * Use this for ICMP and any protocol that uses ports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#to_port CcSecurityGroupIngress#to_port}
    */
    readonly toPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress awscc_ec2_security_group_ingress}
*/
export class CcSecurityGroupIngress extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_security_group_ingress";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSecurityGroupIngress resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSecurityGroupIngress to import
    * @param importFromId The id of the existing CcSecurityGroupIngress that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSecurityGroupIngress to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_security_group_ingress", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress awscc_ec2_security_group_ingress} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSecurityGroupIngressProps
    */
    public constructor(scope: Construct, id: string, config: CcSecurityGroupIngressProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_security_group_ingress',
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
        this._cidrIp = config.cidrIp;
        this._cidrIpv6 = config.cidrIpv6;
        this._description = config.description;
        this._fromPort = config.fromPort;
        this._groupId = config.groupId;
        this._groupName = config.groupName;
        this._ipProtocol = config.ipProtocol;
        this._sourcePrefixListId = config.sourcePrefixListId;
        this._sourceSecurityGroupId = config.sourceSecurityGroupId;
        this._sourceSecurityGroupName = config.sourceSecurityGroupName;
        this._sourceSecurityGroupOwnerId = config.sourceSecurityGroupOwnerId;
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

    // group_id - computed: true, optional: true, required: false
    private _groupId?: string; 
    public get groupId() {
        return this.getStringAttribute('group_id');
    }
    public set groupId(value: string) {
        this._groupId = value;
    }
    public resetGroupId() {
        this._groupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIdInput() {
        return this._groupId;
    }

    // group_name - computed: true, optional: true, required: false
    private _groupName?: string; 
    public get groupName() {
        return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
        this._groupName = value;
    }
    public resetGroupName() {
        this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
        return this._groupName;
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

    // security_group_ingress_id - computed: true, optional: false, required: false
    public get securityGroupIngressId() {
        return this.getStringAttribute('security_group_ingress_id');
    }

    // source_prefix_list_id - computed: true, optional: true, required: false
    private _sourcePrefixListId?: string; 
    public get sourcePrefixListId() {
        return this.getStringAttribute('source_prefix_list_id');
    }
    public set sourcePrefixListId(value: string) {
        this._sourcePrefixListId = value;
    }
    public resetSourcePrefixListId() {
        this._sourcePrefixListId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePrefixListIdInput() {
        return this._sourcePrefixListId;
    }

    // source_security_group_id - computed: true, optional: true, required: false
    private _sourceSecurityGroupId?: string; 
    public get sourceSecurityGroupId() {
        return this.getStringAttribute('source_security_group_id');
    }
    public set sourceSecurityGroupId(value: string) {
        this._sourceSecurityGroupId = value;
    }
    public resetSourceSecurityGroupId() {
        this._sourceSecurityGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceSecurityGroupIdInput() {
        return this._sourceSecurityGroupId;
    }

    // source_security_group_name - computed: true, optional: true, required: false
    private _sourceSecurityGroupName?: string; 
    public get sourceSecurityGroupName() {
        return this.getStringAttribute('source_security_group_name');
    }
    public set sourceSecurityGroupName(value: string) {
        this._sourceSecurityGroupName = value;
    }
    public resetSourceSecurityGroupName() {
        this._sourceSecurityGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceSecurityGroupNameInput() {
        return this._sourceSecurityGroupName;
    }

    // source_security_group_owner_id - computed: true, optional: true, required: false
    private _sourceSecurityGroupOwnerId?: string; 
    public get sourceSecurityGroupOwnerId() {
        return this.getStringAttribute('source_security_group_owner_id');
    }
    public set sourceSecurityGroupOwnerId(value: string) {
        this._sourceSecurityGroupOwnerId = value;
    }
    public resetSourceSecurityGroupOwnerId() {
        this._sourceSecurityGroupOwnerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceSecurityGroupOwnerIdInput() {
        return this._sourceSecurityGroupOwnerId;
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
            from_port: cdktn.numberToTerraform(this._fromPort),
            group_id: cdktn.stringToTerraform(this._groupId),
            group_name: cdktn.stringToTerraform(this._groupName),
            ip_protocol: cdktn.stringToTerraform(this._ipProtocol),
            source_prefix_list_id: cdktn.stringToTerraform(this._sourcePrefixListId),
            source_security_group_id: cdktn.stringToTerraform(this._sourceSecurityGroupId),
            source_security_group_name: cdktn.stringToTerraform(this._sourceSecurityGroupName),
            source_security_group_owner_id: cdktn.stringToTerraform(this._sourceSecurityGroupOwnerId),
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
            group_name: {
                value: cdktn.stringToHclTerraform(this._groupName),
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
            source_prefix_list_id: {
                value: cdktn.stringToHclTerraform(this._sourcePrefixListId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_security_group_id: {
                value: cdktn.stringToHclTerraform(this._sourceSecurityGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_security_group_name: {
                value: cdktn.stringToHclTerraform(this._sourceSecurityGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_security_group_owner_id: {
                value: cdktn.stringToHclTerraform(this._sourceSecurityGroupOwnerId),
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

export namespace CcSecurityGroupIngress {
}
