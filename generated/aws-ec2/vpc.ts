// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVPCProps extends cdktn.TerraformMetaArguments {
    /**
    * The IPv4 network range for the VPC, in CIDR notation. For example, ``10.0.0.0/16``. We modify the specified CIDR block to its canonical form; for example, if you specify ``100.68.0.18/18``, we modify it to ``100.68.0.0/18``.
    *  You must specify either``CidrBlock`` or ``Ipv4IpamPoolId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#cidr_block CcVPC#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not. Disabled by default for nondefault VPCs. For more information, see [DNS attributes in your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-support).
    *  You can only enable DNS hostnames if you've enabled DNS support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#enable_dns_hostnames CcVPC#enable_dns_hostnames}
    */
    readonly enableDnsHostnames?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is not enabled. Enabled by default. For more information, see [DNS attributes in your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-support).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#enable_dns_support CcVPC#enable_dns_support}
    */
    readonly enableDnsSupport?: boolean | cdktn.IResolvable;
    /**
    * The allowed tenancy of instances launched into the VPC.
    *   +  ``default``: An instance launched into the VPC runs on shared hardware by default, unless you explicitly specify a different tenancy during instance launch.
    *   +  ``dedicated``: An instance launched into the VPC runs on dedicated hardware by default, unless you explicitly specify a tenancy of ``host`` during instance launch. You cannot specify a tenancy of ``default`` during instance launch.
    *   
    *  Updating ``InstanceTenancy`` requires no replacement only if you are updating its value from ``dedicated`` to ``default``. Updating ``InstanceTenancy`` from ``default`` to ``dedicated`` requires replacement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#instance_tenancy CcVPC#instance_tenancy}
    */
    readonly instanceTenancy?: string;
    /**
    * The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. For more information, see [What is IPAM?](https://docs.aws.amazon.com//vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
    *  You must specify either``CidrBlock`` or ``Ipv4IpamPoolId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#ipv_4_ipam_pool_id CcVPC#ipv_4_ipam_pool_id}
    */
    readonly ipv4IpamPoolId?: string;
    /**
    * The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see [What is IPAM?](https://docs.aws.amazon.com//vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#ipv_4_netmask_length CcVPC#ipv_4_netmask_length}
    */
    readonly ipv4NetmaskLength?: number;
    /**
    * The tags for the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#tags CcVPC#tags}
    */
    readonly tags?: CcVPC.TagProperty[] | cdktn.IResolvable;
    /**
    * Describes the configuration and state of VPC encryption controls.
    *  For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#vpc_encryption_control CcVPC#vpc_encryption_control}
    */
    readonly vpcEncryptionControl?: CcVPC.VpcEncryptionControlProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc awscc_ec2_vpc}
*/
export class CcVPC extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_vpc";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVPC resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVPC to import
    * @param importFromId The id of the existing CcVPC that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVPC to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc awscc_ec2_vpc} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVPCProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcVPCProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_vpc',
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
        this._cidrBlock = config.cidrBlock;
        this._enableDnsHostnames = config.enableDnsHostnames;
        this._enableDnsSupport = config.enableDnsSupport;
        this._instanceTenancy = config.instanceTenancy;
        this._ipv4IpamPoolId = config.ipv4IpamPoolId;
        this._ipv4NetmaskLength = config.ipv4NetmaskLength;
        this._tags.internalValue = config.tags;
        this._vpcEncryptionControl.internalValue = config.vpcEncryptionControl;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cidr_block - computed: true, optional: true, required: false
    private _cidrBlock?: string; 
    public get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string) {
        this._cidrBlock = value;
    }
    public resetCidrBlock() {
        this._cidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
        return this._cidrBlock;
    }

    // cidr_block_associations - computed: true, optional: false, required: false
    public get cidrBlockAssociations() {
        return this.getListAttribute('cidr_block_associations');
    }

    // default_network_acl - computed: true, optional: false, required: false
    public get defaultNetworkAcl() {
        return this.getStringAttribute('default_network_acl');
    }

    // default_security_group - computed: true, optional: false, required: false
    public get defaultSecurityGroup() {
        return this.getStringAttribute('default_security_group');
    }

    // enable_dns_hostnames - computed: true, optional: true, required: false
    private _enableDnsHostnames?: boolean | cdktn.IResolvable; 
    public get enableDnsHostnames() {
        return this.getBooleanAttribute('enable_dns_hostnames');
    }
    public set enableDnsHostnames(value: boolean | cdktn.IResolvable) {
        this._enableDnsHostnames = value;
    }
    public resetEnableDnsHostnames() {
        this._enableDnsHostnames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDnsHostnamesInput() {
        return this._enableDnsHostnames;
    }

    // enable_dns_support - computed: true, optional: true, required: false
    private _enableDnsSupport?: boolean | cdktn.IResolvable; 
    public get enableDnsSupport() {
        return this.getBooleanAttribute('enable_dns_support');
    }
    public set enableDnsSupport(value: boolean | cdktn.IResolvable) {
        this._enableDnsSupport = value;
    }
    public resetEnableDnsSupport() {
        this._enableDnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDnsSupportInput() {
        return this._enableDnsSupport;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_tenancy - computed: true, optional: true, required: false
    private _instanceTenancy?: string; 
    public get instanceTenancy() {
        return this.getStringAttribute('instance_tenancy');
    }
    public set instanceTenancy(value: string) {
        this._instanceTenancy = value;
    }
    public resetInstanceTenancy() {
        this._instanceTenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTenancyInput() {
        return this._instanceTenancy;
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

    // ipv_4_netmask_length - computed: true, optional: true, required: false
    private _ipv4NetmaskLength?: number; 
    public get ipv4NetmaskLength() {
        return this.getNumberAttribute('ipv_4_netmask_length');
    }
    public set ipv4NetmaskLength(value: number) {
        this._ipv4NetmaskLength = value;
    }
    public resetIpv4NetmaskLength() {
        this._ipv4NetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4NetmaskLengthInput() {
        return this._ipv4NetmaskLength;
    }

    // ipv_6_cidr_blocks - computed: true, optional: false, required: false
    public get ipv6CidrBlocks() {
        return this.getListAttribute('ipv_6_cidr_blocks');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVPC.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVPC.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_encryption_control - computed: true, optional: true, required: false
    private _vpcEncryptionControl = new CcVPC.VpcEncryptionControlPropertyOutputReference(this, "vpc_encryption_control");
    public get vpcEncryptionControl() {
        return this._vpcEncryptionControl;
    }
    public putVpcEncryptionControl(value: CcVPC.VpcEncryptionControlProperty) {
        this._vpcEncryptionControl.internalValue = value;
    }
    public resetVpcEncryptionControl() {
        this._vpcEncryptionControl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEncryptionControlInput() {
        return this._vpcEncryptionControl.internalValue;
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
            cidr_block: cdktn.stringToTerraform(this._cidrBlock),
            enable_dns_hostnames: cdktn.booleanToTerraform(this._enableDnsHostnames),
            enable_dns_support: cdktn.booleanToTerraform(this._enableDnsSupport),
            instance_tenancy: cdktn.stringToTerraform(this._instanceTenancy),
            ipv_4_ipam_pool_id: cdktn.stringToTerraform(this._ipv4IpamPoolId),
            ipv_4_netmask_length: cdktn.numberToTerraform(this._ipv4NetmaskLength),
            tags: cdktn.listMapper(ccVPCTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_encryption_control: ccVPCVpcEncryptionControlPropertyToTerraform(this._vpcEncryptionControl.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cidr_block: {
                value: cdktn.stringToHclTerraform(this._cidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_dns_hostnames: {
                value: cdktn.booleanToHclTerraform(this._enableDnsHostnames),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_dns_support: {
                value: cdktn.booleanToHclTerraform(this._enableDnsSupport),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            instance_tenancy: {
                value: cdktn.stringToHclTerraform(this._instanceTenancy),
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
            ipv_4_netmask_length: {
                value: cdktn.numberToHclTerraform(this._ipv4NetmaskLength),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVPCTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcVPC.TagPropertyList",
            },
            vpc_encryption_control: {
                value: ccVPCVpcEncryptionControlPropertyToHclTerraform(this._vpcEncryptionControl.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVPC.VpcEncryptionControlProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVPCTagPropertyToTerraform(struct?: CcVPC.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVPCTagPropertyToHclTerraform(struct?: CcVPC.TagProperty | cdktn.IResolvable): any {
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


export function ccVPCVpcEncryptionControlExclusionPropertyToTerraform(struct?: CcVPC.VpcEncryptionControlExclusionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCVpcEncryptionControlExclusionPropertyToHclTerraform(struct?: CcVPC.VpcEncryptionControlExclusionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCElasticFileSystemPropertyToTerraform(struct?: CcVPC.ElasticFileSystemProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCElasticFileSystemPropertyToHclTerraform(struct?: CcVPC.ElasticFileSystemProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCInternetGatewayPropertyToTerraform(struct?: CcVPC.InternetGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCInternetGatewayPropertyToHclTerraform(struct?: CcVPC.InternetGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCLambdaPropertyToTerraform(struct?: CcVPC.LambdaProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCLambdaPropertyToHclTerraform(struct?: CcVPC.LambdaProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCNatGatewayPropertyToTerraform(struct?: CcVPC.NatGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCNatGatewayPropertyToHclTerraform(struct?: CcVPC.NatGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCVirtualPrivateGatewayPropertyToTerraform(struct?: CcVPC.VirtualPrivateGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCVirtualPrivateGatewayPropertyToHclTerraform(struct?: CcVPC.VirtualPrivateGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCVpcLatticePropertyToTerraform(struct?: CcVPC.VpcLatticeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCVpcLatticePropertyToHclTerraform(struct?: CcVPC.VpcLatticeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCVpcPeeringPropertyToTerraform(struct?: CcVPC.VpcPeeringProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCVpcPeeringPropertyToHclTerraform(struct?: CcVPC.VpcPeeringProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCVpcEncryptionControlExclusionsPropertyToTerraform(struct?: CcVPC.VpcEncryptionControlExclusionsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCVpcEncryptionControlExclusionsPropertyToHclTerraform(struct?: CcVPC.VpcEncryptionControlExclusionsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCVpcEncryptionControlPropertyToTerraform(struct?: CcVPC.VpcEncryptionControlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        egress_only_internet_gateway_exclusion: cdktn.stringToTerraform(struct!.egressOnlyInternetGatewayExclusion),
        elastic_file_system_exclusion: cdktn.stringToTerraform(struct!.elasticFileSystemExclusion),
        internet_gateway_exclusion: cdktn.stringToTerraform(struct!.internetGatewayExclusion),
        lambda_exclusion: cdktn.stringToTerraform(struct!.lambdaExclusion),
        mode: cdktn.stringToTerraform(struct!.mode),
        nat_gateway_exclusion: cdktn.stringToTerraform(struct!.natGatewayExclusion),
        virtual_private_gateway_exclusion: cdktn.stringToTerraform(struct!.virtualPrivateGatewayExclusion),
        vpc_lattice_exclusion: cdktn.stringToTerraform(struct!.vpcLatticeExclusion),
        vpc_peering_exclusion: cdktn.stringToTerraform(struct!.vpcPeeringExclusion),
    }
}


export function ccVPCVpcEncryptionControlPropertyToHclTerraform(struct?: CcVPC.VpcEncryptionControlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        egress_only_internet_gateway_exclusion: {
            value: cdktn.stringToHclTerraform(struct!.egressOnlyInternetGatewayExclusion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        elastic_file_system_exclusion: {
            value: cdktn.stringToHclTerraform(struct!.elasticFileSystemExclusion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        internet_gateway_exclusion: {
            value: cdktn.stringToHclTerraform(struct!.internetGatewayExclusion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_exclusion: {
            value: cdktn.stringToHclTerraform(struct!.lambdaExclusion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nat_gateway_exclusion: {
            value: cdktn.stringToHclTerraform(struct!.natGatewayExclusion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        virtual_private_gateway_exclusion: {
            value: cdktn.stringToHclTerraform(struct!.virtualPrivateGatewayExclusion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_lattice_exclusion: {
            value: cdktn.stringToHclTerraform(struct!.vpcLatticeExclusion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_peering_exclusion: {
            value: cdktn.stringToHclTerraform(struct!.vpcPeeringExclusion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcVPC {
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#key CcVPC#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#value CcVPC#value}
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
export interface VpcEncryptionControlExclusionProperty {
}
export class VpcEncryptionControlExclusionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcEncryptionControlExclusionProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcEncryptionControlExclusionProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_message - computed: true, optional: false, required: false
    public get stateMessage() {
        return this.getStringAttribute('state_message');
    }
}
export interface ElasticFileSystemProperty {
}
export class ElasticFileSystemPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ElasticFileSystemProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ElasticFileSystemProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_message - computed: true, optional: false, required: false
    public get stateMessage() {
        return this.getStringAttribute('state_message');
    }
}
export interface InternetGatewayProperty {
}
export class InternetGatewayPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InternetGatewayProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InternetGatewayProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_message - computed: true, optional: false, required: false
    public get stateMessage() {
        return this.getStringAttribute('state_message');
    }
}
export interface LambdaProperty {
}
export class LambdaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_message - computed: true, optional: false, required: false
    public get stateMessage() {
        return this.getStringAttribute('state_message');
    }
}
export interface NatGatewayProperty {
}
export class NatGatewayPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NatGatewayProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NatGatewayProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_message - computed: true, optional: false, required: false
    public get stateMessage() {
        return this.getStringAttribute('state_message');
    }
}
export interface VirtualPrivateGatewayProperty {
}
export class VirtualPrivateGatewayPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VirtualPrivateGatewayProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VirtualPrivateGatewayProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_message - computed: true, optional: false, required: false
    public get stateMessage() {
        return this.getStringAttribute('state_message');
    }
}
export interface VpcLatticeProperty {
}
export class VpcLatticePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcLatticeProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcLatticeProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_message - computed: true, optional: false, required: false
    public get stateMessage() {
        return this.getStringAttribute('state_message');
    }
}
export interface VpcPeeringProperty {
}
export class VpcPeeringPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcPeeringProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcPeeringProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_message - computed: true, optional: false, required: false
    public get stateMessage() {
        return this.getStringAttribute('state_message');
    }
}
export interface VpcEncryptionControlExclusionsProperty {
}
export class VpcEncryptionControlExclusionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcEncryptionControlExclusionsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcEncryptionControlExclusionsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // egress_only_internet_gateway - computed: true, optional: false, required: false
    private _egressOnlyInternetGateway = new VpcEncryptionControlExclusionPropertyOutputReference(this, "egress_only_internet_gateway");
    public get egressOnlyInternetGateway() {
        return this._egressOnlyInternetGateway;
    }

    // elastic_file_system - computed: true, optional: false, required: false
    private _elasticFileSystem = new ElasticFileSystemPropertyOutputReference(this, "elastic_file_system");
    public get elasticFileSystem() {
        return this._elasticFileSystem;
    }

    // internet_gateway - computed: true, optional: false, required: false
    private _internetGateway = new InternetGatewayPropertyOutputReference(this, "internet_gateway");
    public get internetGateway() {
        return this._internetGateway;
    }

    // lambda - computed: true, optional: false, required: false
    private _lambda = new LambdaPropertyOutputReference(this, "lambda");
    public get lambda() {
        return this._lambda;
    }

    // nat_gateway - computed: true, optional: false, required: false
    private _natGateway = new NatGatewayPropertyOutputReference(this, "nat_gateway");
    public get natGateway() {
        return this._natGateway;
    }

    // virtual_private_gateway - computed: true, optional: false, required: false
    private _virtualPrivateGateway = new VirtualPrivateGatewayPropertyOutputReference(this, "virtual_private_gateway");
    public get virtualPrivateGateway() {
        return this._virtualPrivateGateway;
    }

    // vpc_lattice - computed: true, optional: false, required: false
    private _vpcLattice = new VpcLatticePropertyOutputReference(this, "vpc_lattice");
    public get vpcLattice() {
        return this._vpcLattice;
    }

    // vpc_peering - computed: true, optional: false, required: false
    private _vpcPeering = new VpcPeeringPropertyOutputReference(this, "vpc_peering");
    public get vpcPeering() {
        return this._vpcPeering;
    }
}
export interface VpcEncryptionControlProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#egress_only_internet_gateway_exclusion CcVPC#egress_only_internet_gateway_exclusion}
    */
    readonly egressOnlyInternetGatewayExclusion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#elastic_file_system_exclusion CcVPC#elastic_file_system_exclusion}
    */
    readonly elasticFileSystemExclusion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#internet_gateway_exclusion CcVPC#internet_gateway_exclusion}
    */
    readonly internetGatewayExclusion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#lambda_exclusion CcVPC#lambda_exclusion}
    */
    readonly lambdaExclusion?: string;
    /**
    * The encryption mode for the VPC Encryption Control configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#mode CcVPC#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#nat_gateway_exclusion CcVPC#nat_gateway_exclusion}
    */
    readonly natGatewayExclusion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#virtual_private_gateway_exclusion CcVPC#virtual_private_gateway_exclusion}
    */
    readonly virtualPrivateGatewayExclusion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#vpc_lattice_exclusion CcVPC#vpc_lattice_exclusion}
    */
    readonly vpcLatticeExclusion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc#vpc_peering_exclusion CcVPC#vpc_peering_exclusion}
    */
    readonly vpcPeeringExclusion?: string;
}
export class VpcEncryptionControlPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcEncryptionControlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._egressOnlyInternetGatewayExclusion !== undefined) {
            hasAnyValues = true;
            internalValueResult.egressOnlyInternetGatewayExclusion = this._egressOnlyInternetGatewayExclusion;
        }
        if (this._elasticFileSystemExclusion !== undefined) {
            hasAnyValues = true;
            internalValueResult.elasticFileSystemExclusion = this._elasticFileSystemExclusion;
        }
        if (this._internetGatewayExclusion !== undefined) {
            hasAnyValues = true;
            internalValueResult.internetGatewayExclusion = this._internetGatewayExclusion;
        }
        if (this._lambdaExclusion !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaExclusion = this._lambdaExclusion;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._natGatewayExclusion !== undefined) {
            hasAnyValues = true;
            internalValueResult.natGatewayExclusion = this._natGatewayExclusion;
        }
        if (this._virtualPrivateGatewayExclusion !== undefined) {
            hasAnyValues = true;
            internalValueResult.virtualPrivateGatewayExclusion = this._virtualPrivateGatewayExclusion;
        }
        if (this._vpcLatticeExclusion !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcLatticeExclusion = this._vpcLatticeExclusion;
        }
        if (this._vpcPeeringExclusion !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcPeeringExclusion = this._vpcPeeringExclusion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcEncryptionControlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._egressOnlyInternetGatewayExclusion = undefined;
            this._elasticFileSystemExclusion = undefined;
            this._internetGatewayExclusion = undefined;
            this._lambdaExclusion = undefined;
            this._mode = undefined;
            this._natGatewayExclusion = undefined;
            this._virtualPrivateGatewayExclusion = undefined;
            this._vpcLatticeExclusion = undefined;
            this._vpcPeeringExclusion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._egressOnlyInternetGatewayExclusion = value.egressOnlyInternetGatewayExclusion;
            this._elasticFileSystemExclusion = value.elasticFileSystemExclusion;
            this._internetGatewayExclusion = value.internetGatewayExclusion;
            this._lambdaExclusion = value.lambdaExclusion;
            this._mode = value.mode;
            this._natGatewayExclusion = value.natGatewayExclusion;
            this._virtualPrivateGatewayExclusion = value.virtualPrivateGatewayExclusion;
            this._vpcLatticeExclusion = value.vpcLatticeExclusion;
            this._vpcPeeringExclusion = value.vpcPeeringExclusion;
        }
    }

    // egress_only_internet_gateway_exclusion - computed: true, optional: true, required: false
    private _egressOnlyInternetGatewayExclusion?: string; 
    public get egressOnlyInternetGatewayExclusion() {
        return this.getStringAttribute('egress_only_internet_gateway_exclusion');
    }
    public set egressOnlyInternetGatewayExclusion(value: string) {
        this._egressOnlyInternetGatewayExclusion = value;
    }
    public resetEgressOnlyInternetGatewayExclusion() {
        this._egressOnlyInternetGatewayExclusion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressOnlyInternetGatewayExclusionInput() {
        return this._egressOnlyInternetGatewayExclusion;
    }

    // elastic_file_system_exclusion - computed: true, optional: true, required: false
    private _elasticFileSystemExclusion?: string; 
    public get elasticFileSystemExclusion() {
        return this.getStringAttribute('elastic_file_system_exclusion');
    }
    public set elasticFileSystemExclusion(value: string) {
        this._elasticFileSystemExclusion = value;
    }
    public resetElasticFileSystemExclusion() {
        this._elasticFileSystemExclusion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticFileSystemExclusionInput() {
        return this._elasticFileSystemExclusion;
    }

    // internet_gateway_exclusion - computed: true, optional: true, required: false
    private _internetGatewayExclusion?: string; 
    public get internetGatewayExclusion() {
        return this.getStringAttribute('internet_gateway_exclusion');
    }
    public set internetGatewayExclusion(value: string) {
        this._internetGatewayExclusion = value;
    }
    public resetInternetGatewayExclusion() {
        this._internetGatewayExclusion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get internetGatewayExclusionInput() {
        return this._internetGatewayExclusion;
    }

    // lambda_exclusion - computed: true, optional: true, required: false
    private _lambdaExclusion?: string; 
    public get lambdaExclusion() {
        return this.getStringAttribute('lambda_exclusion');
    }
    public set lambdaExclusion(value: string) {
        this._lambdaExclusion = value;
    }
    public resetLambdaExclusion() {
        this._lambdaExclusion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaExclusionInput() {
        return this._lambdaExclusion;
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }

    // nat_gateway_exclusion - computed: true, optional: true, required: false
    private _natGatewayExclusion?: string; 
    public get natGatewayExclusion() {
        return this.getStringAttribute('nat_gateway_exclusion');
    }
    public set natGatewayExclusion(value: string) {
        this._natGatewayExclusion = value;
    }
    public resetNatGatewayExclusion() {
        this._natGatewayExclusion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get natGatewayExclusionInput() {
        return this._natGatewayExclusion;
    }

    // resource_exclusions - computed: true, optional: false, required: false
    private _resourceExclusions = new VpcEncryptionControlExclusionsPropertyOutputReference(this, "resource_exclusions");
    public get resourceExclusions() {
        return this._resourceExclusions;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_message - computed: true, optional: false, required: false
    public get stateMessage() {
        return this.getStringAttribute('state_message');
    }

    // virtual_private_gateway_exclusion - computed: true, optional: true, required: false
    private _virtualPrivateGatewayExclusion?: string; 
    public get virtualPrivateGatewayExclusion() {
        return this.getStringAttribute('virtual_private_gateway_exclusion');
    }
    public set virtualPrivateGatewayExclusion(value: string) {
        this._virtualPrivateGatewayExclusion = value;
    }
    public resetVirtualPrivateGatewayExclusion() {
        this._virtualPrivateGatewayExclusion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualPrivateGatewayExclusionInput() {
        return this._virtualPrivateGatewayExclusion;
    }

    // vpc_encryption_control_id - computed: true, optional: false, required: false
    public get vpcEncryptionControlId() {
        return this.getStringAttribute('vpc_encryption_control_id');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }

    // vpc_lattice_exclusion - computed: true, optional: true, required: false
    private _vpcLatticeExclusion?: string; 
    public get vpcLatticeExclusion() {
        return this.getStringAttribute('vpc_lattice_exclusion');
    }
    public set vpcLatticeExclusion(value: string) {
        this._vpcLatticeExclusion = value;
    }
    public resetVpcLatticeExclusion() {
        this._vpcLatticeExclusion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcLatticeExclusionInput() {
        return this._vpcLatticeExclusion;
    }

    // vpc_peering_exclusion - computed: true, optional: true, required: false
    private _vpcPeeringExclusion?: string; 
    public get vpcPeeringExclusion() {
        return this.getStringAttribute('vpc_peering_exclusion');
    }
    public set vpcPeeringExclusion(value: string) {
        this._vpcPeeringExclusion = value;
    }
    public resetVpcPeeringExclusion() {
        this._vpcPeeringExclusion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcPeeringExclusionInput() {
        return this._vpcPeeringExclusion;
    }
}
}
